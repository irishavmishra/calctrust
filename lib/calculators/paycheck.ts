import type {
    PaycheckInput,
    PaycheckOutput,
    PayFrequency,
    FilingStatus,
    TaxBracket
} from './types';
import federalTaxBrackets from '../data/federalTaxBrackets.json';
import stateTaxRatesData from '../data/stateTaxRates.json';
import ficaRates from '../data/ficaRates.json';

// Type for state tax data
interface StateTaxInfo {
    rate: number;
    name: string;
    hasNoIncomeTax?: boolean;
}

const stateTaxRates = stateTaxRatesData as Record<string, StateTaxInfo>;

const taxYear = '2025';


/**
 * Round a number to specified decimal places
 */
function round(value: number, decimals: number = 2): number {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

/**
 * Get the number of pay periods per year based on frequency
 */
function getPeriodsPerYear(frequency: PayFrequency): number {
    const periods: Record<PayFrequency, number> = {
        weekly: 52,
        biweekly: 26,
        semimonthly: 24,
        monthly: 12,
        annual: 1,
    };
    return periods[frequency];
}

/**
 * Calculate federal income tax using progressive brackets
 */
function calculateFederalTax(annualIncome: number, filingStatus: FilingStatus): number {
    const brackets = federalTaxBrackets[taxYear][filingStatus] as TaxBracket[];

    if (!brackets || annualIncome <= 0) {
        return 0;
    }

    for (let i = brackets.length - 1; i >= 0; i--) {
        const bracket = brackets[i];
        if (annualIncome > bracket.min) {
            const taxableInBracket = annualIncome - bracket.min;
            return bracket.baseTax + (taxableInBracket * (bracket.rate / 100));
        }
    }

    return 0;
}

/**
 * Calculate state income tax
 */
function calculateStateTax(annualIncome: number, stateCode: string): number {
    const stateData = stateTaxRates[stateCode];

    if (!stateData || stateData.hasNoIncomeTax) {
        return 0;
    }

    // Simplified flat rate calculation (many states have progressive brackets)
    return annualIncome * (stateData.rate / 100);
}

/**
 * Calculate Social Security tax
 */
function calculateSocialSecurity(annualIncome: number): number {
    const rates = ficaRates[taxYear];
    const taxableIncome = Math.min(annualIncome, rates.socialSecurityWageCap);
    return taxableIncome * (rates.socialSecurityRate / 100);
}

/**
 * Calculate Medicare tax (including additional Medicare tax for high earners)
 */
function calculateMedicare(annualIncome: number): number {
    const rates = ficaRates[taxYear];
    let tax = annualIncome * (rates.medicareRate / 100);

    // Additional Medicare tax for income over threshold
    if (annualIncome > rates.medicareAdditionalThreshold) {
        const additionalTaxableIncome = annualIncome - rates.medicareAdditionalThreshold;
        tax += additionalTaxableIncome * (rates.medicareAdditionalRate / 100);
    }

    return tax;
}

/**
 * Sum pre-tax deductions
 */
function sumPreTaxDeductions(deductions?: PaycheckInput['preTaxDeductions']): number {
    if (!deductions) return 0;

    return (
        (deductions.retirement401k || 0) +
        (deductions.healthInsurance || 0) +
        (deductions.hsa || 0) +
        (deductions.fsa || 0) +
        (deductions.other || 0)
    );
}

/**
 * Calculate take-home pay after all deductions
 */
export function calculatePaycheck(input: PaycheckInput): PaycheckOutput {
    const { grossPay, payFrequency, filingStatus, state, preTaxDeductions } = input;

    if (grossPay <= 0) {
        return {
            grossPay: 0,
            federalTax: 0,
            stateTax: 0,
            socialSecurity: 0,
            medicare: 0,
            preTaxDeductions: 0,
            totalDeductions: 0,
            netPay: 0,
            effectiveTaxRate: 0,
        };
    }

    const periodsPerYear = getPeriodsPerYear(payFrequency);
    const annualGross = grossPay * periodsPerYear;

    // Pre-tax deductions reduce taxable income
    const preTaxTotal = sumPreTaxDeductions(preTaxDeductions);
    const annualPreTax = preTaxTotal * periodsPerYear;
    const taxableIncome = annualGross - annualPreTax;

    // Calculate all taxes on annual basis, then convert to per-period
    const annualFederalTax = calculateFederalTax(taxableIncome, filingStatus);
    const annualStateTax = calculateStateTax(taxableIncome, state);
    const annualSocialSecurity = calculateSocialSecurity(annualGross); // FICA is on gross, not reduced by 401k etc
    const annualMedicare = calculateMedicare(annualGross);

    // Convert to per-period amounts
    const federalTax = annualFederalTax / periodsPerYear;
    const stateTax = annualStateTax / periodsPerYear;
    const socialSecurity = annualSocialSecurity / periodsPerYear;
    const medicare = annualMedicare / periodsPerYear;

    const totalDeductions = federalTax + stateTax + socialSecurity + medicare + preTaxTotal;
    const netPay = grossPay - totalDeductions;
    const effectiveTaxRate = ((grossPay - netPay) / grossPay) * 100;

    return {
        grossPay: round(grossPay),
        federalTax: round(federalTax),
        stateTax: round(stateTax),
        socialSecurity: round(socialSecurity),
        medicare: round(medicare),
        preTaxDeductions: round(preTaxTotal),
        totalDeductions: round(totalDeductions),
        netPay: round(netPay),
        effectiveTaxRate: round(effectiveTaxRate, 1),
    };
}

/**
 * Calculate annual take-home pay
 */
export function calculateAnnualTakeHome(
    annualSalary: number,
    filingStatus: FilingStatus,
    state: string,
    annualPreTaxDeductions: number = 0
): {
    grossAnnual: number;
    federalTax: number;
    stateTax: number;
    socialSecurity: number;
    medicare: number;
    netAnnual: number;
    netMonthly: number;
    netBiweekly: number;
    effectiveTaxRate: number;
} {
    const result = calculatePaycheck({
        grossPay: annualSalary,
        payFrequency: 'annual',
        filingStatus,
        state,
        preTaxDeductions: { other: annualPreTaxDeductions },
    });

    return {
        grossAnnual: round(annualSalary),
        federalTax: round(result.federalTax),
        stateTax: round(result.stateTax),
        socialSecurity: round(result.socialSecurity),
        medicare: round(result.medicare),
        netAnnual: round(result.netPay),
        netMonthly: round(result.netPay / 12),
        netBiweekly: round(result.netPay / 26),
        effectiveTaxRate: result.effectiveTaxRate,
    };
}

/**
 * Calculate 401k contribution impact
 */
export function calculate401kImpact(
    grossPayPerPeriod: number,
    payFrequency: PayFrequency,
    filingStatus: FilingStatus,
    state: string,
    contributionPercent: number
): {
    contributionAmount: number;
    annualContribution: number;
    taxSavings: number;
    netPayWithout401k: number;
    netPayWith401k: number;
    actualCostPerPaycheck: number;
} {
    const contributionAmount = grossPayPerPeriod * (contributionPercent / 100);
    const periodsPerYear = getPeriodsPerYear(payFrequency);

    // Calculate paycheck without 401k
    const withoutResult = calculatePaycheck({
        grossPay: grossPayPerPeriod,
        payFrequency,
        filingStatus,
        state,
    });

    // Calculate paycheck with 401k
    const withResult = calculatePaycheck({
        grossPay: grossPayPerPeriod,
        payFrequency,
        filingStatus,
        state,
        preTaxDeductions: { retirement401k: contributionAmount },
    });

    // The actual cost is less than the contribution due to tax savings
    const actualCost = withoutResult.netPay - withResult.netPay;
    const taxSavings = contributionAmount - actualCost;

    return {
        contributionAmount: round(contributionAmount),
        annualContribution: round(contributionAmount * periodsPerYear),
        taxSavings: round(taxSavings * periodsPerYear),
        netPayWithout401k: round(withoutResult.netPay),
        netPayWith401k: round(withResult.netPay),
        actualCostPerPaycheck: round(actualCost),
    };
}

/**
 * Calculate bonus tax
 */
export function calculateBonusTax(
    bonusAmount: number,
    filingStatus: FilingStatus,
    state: string,
    regularAnnualSalary: number
): {
    bonusAmount: number;
    federalWithholding: number;
    stateWithholding: number;
    socialSecurity: number;
    medicare: number;
    netBonus: number;
    effectiveRate: number;
} {
    // Federal bonus withholding is typically 22% flat for supplemental wages under $1M
    const federalWithholding = bonusAmount * 0.22;

    // State tax on bonus
    const stateData = stateTaxRates[state];
    const stateWithholding = !stateData || stateData.hasNoIncomeTax ? 0 : bonusAmount * (stateData.rate / 100);

    // FICA taxes (check if already hit SS cap)
    const rates = ficaRates[taxYear];
    const combinedIncome = regularAnnualSalary + bonusAmount;
    let socialSecurity = 0;

    if (regularAnnualSalary < rates.socialSecurityWageCap) {
        const ssWagesWithBonus = Math.min(combinedIncome, rates.socialSecurityWageCap);
        socialSecurity = (ssWagesWithBonus - regularAnnualSalary) * (rates.socialSecurityRate / 100);
    }

    const medicare = bonusAmount * (rates.medicareRate / 100);

    const totalDeductions = federalWithholding + stateWithholding + socialSecurity + medicare;
    const netBonus = bonusAmount - totalDeductions;

    return {
        bonusAmount: round(bonusAmount),
        federalWithholding: round(federalWithholding),
        stateWithholding: round(stateWithholding),
        socialSecurity: round(socialSecurity),
        medicare: round(medicare),
        netBonus: round(netBonus),
        effectiveRate: round((totalDeductions / bonusAmount) * 100, 1),
    };
}

/**
 * Get list of states for dropdown
 */
export function getStatesList(): Array<{ code: string; name: string; hasNoIncomeTax: boolean }> {
    return Object.entries(stateTaxRates).map(([code, data]) => ({
        code,
        name: data.name,
        hasNoIncomeTax: data.hasNoIncomeTax || false,
    })).sort((a, b) => a.name.localeCompare(b.name));
}
