// Calculator Types

export interface SalaryConversionInput {
    annualSalary: number;
    hoursPerWeek: number;
    weeksPerYear: number;
}

export interface SalaryConversionOutput {
    hourlyRate: number;
    monthlyPay: number;
    weeklyPay: number;
    dailyPay: number;
    annualSalary: number;
}

export type PayFrequency = 'weekly' | 'biweekly' | 'semimonthly' | 'monthly' | 'annual';
export type FilingStatus = 'single' | 'married' | 'married_separate' | 'head_of_household';

export interface PaycheckInput {
    grossPay: number;
    payFrequency: PayFrequency;
    filingStatus: FilingStatus;
    state: string;
    allowances?: number;
    preTaxDeductions?: {
        retirement401k?: number;
        healthInsurance?: number;
        hsa?: number;
        fsa?: number;
        other?: number;
    };
}

export interface PaycheckOutput {
    grossPay: number;
    federalTax: number;
    stateTax: number;
    socialSecurity: number;
    medicare: number;
    preTaxDeductions: number;
    totalDeductions: number;
    netPay: number;
    effectiveTaxRate: number;
}

export interface OvertimeInput {
    regularHourlyRate: number;
    overtimeHours: number;
    multiplier: number; // 1.5 for time-and-half, 2 for double-time
}

export interface OvertimeOutput {
    regularRate: number;
    overtimeRate: number;
    overtimeHours: number;
    overtimePay: number;
}

export interface TaxBracket {
    min: number;
    max: number;
    rate: number;
    baseTax: number;
}

export interface FederalTaxData {
    single: TaxBracket[];
    married: TaxBracket[];
    married_separate: TaxBracket[];
    head_of_household: TaxBracket[];
}

export interface StateTaxData {
    [state: string]: {
        rate: number | TaxBracket[];
        hasNoIncomeTax?: boolean;
    };
}

export interface FICARates {
    socialSecurityRate: number;
    socialSecurityCap: number;
    medicareRate: number;
    medicareAdditionalRate: number;
    medicareAdditionalThreshold: number;
}
