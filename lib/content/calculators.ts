// Types are not needed since we define our own in this file

export type CalculatorType =
    | 'salaryToHourly'
    | 'hourlyToSalary'
    | 'paycheck'
    | 'paycheckState'
    | 'overtime'
    | 'timeAndHalf'
    | 'doubleTime'
    | 'payRaise'
    | 'commission'
    | 'freelanceRate'
    | '401k'
    | 'bonusTax'
    | 'grossToNet'
    | 'netToGross';

export interface FAQItem {
    question: string;
    answer: string;
}

export interface CalculatorInputConfig {
    id: string;
    label: string;
    type: 'number' | 'select' | 'currency';
    placeholder?: string;
    defaultValue?: number | string;
    min?: number;
    max?: number;
    step?: number;
    options?: Array<{ value: string; label: string }>;
    helperText?: string;
    required?: boolean;
}

export interface CalculatorOutputConfig {
    id: string;
    label: string;
    format: 'currency' | 'percentage' | 'number' | 'hours';
    highlight?: boolean;
}

export interface RelatedCalculator {
    slug: string;
    title: string;
    description?: string;
}

export interface CalculatorPageData {
    // URL & SEO
    slug: string;
    title: string;
    description: string;
    h1: string;
    keywords: string[];

    // Calculator configuration
    calculatorType: CalculatorType;
    stateCode?: string; // For state-specific calculators
    inputs: CalculatorInputConfig[];
    outputs: CalculatorOutputConfig[];

    // Content sections
    content: {
        intro: string;
        howItWorks: string;
        formula?: string;
        formulaExplanation?: string;
        example?: {
            description: string;
            inputs: Record<string, number | string>;
            result: string;
        };
        whyItMatters?: string;
    };

    // FAQ for schema markup
    faq: FAQItem[];

    // Internal linking
    relatedCalculators: RelatedCalculator[];

    // Meta
    lastUpdated: "2025-12-23",
    category: 'salary' | 'paycheck' | 'tax' | 'overtime' | 'retirement' | 'freelance';
    priority: number; // 1-10 for sitemap priority
}

// Helper to get all calculator slugs for static generation
export function getAllCalculatorSlugs(): string[] {
    return calculatorPages.map(page => page.slug);
}

// Helper to get calculator data by slug
export function getCalculatorBySlug(slug: string): CalculatorPageData | undefined {
    return calculatorPages.find(page => page.slug === slug);
}

// Helper to get related calculators
export function getRelatedCalculators(currentSlug: string, limit: number = 4): CalculatorPageData[] {
    const current = getCalculatorBySlug(currentSlug);
    if (!current) return [];

    return calculatorPages
        .filter(page =>
            page.slug !== currentSlug &&
            (page.category === current.category ||
                current.relatedCalculators.some(r => r.slug === page.slug))
        )
        .slice(0, limit);
}

// Filing status options for select inputs
export const filingStatusOptions = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married Filing Jointly' },
    { value: 'married_separate', label: 'Married Filing Separately' },
    { value: 'head_of_household', label: 'Head of Household' },
];

// Pay frequency options for select inputs
export const payFrequencyOptions = [
    { value: 'weekly', label: 'Weekly (52 paychecks/year)' },
    { value: 'biweekly', label: 'Bi-weekly (26 paychecks/year)' },
    { value: 'semimonthly', label: 'Semi-monthly (24 paychecks/year)' },
    { value: 'monthly', label: 'Monthly (12 paychecks/year)' },
];

// All 50 US States data for generating state-specific calculators
const stateData: Array<{
    code: string;
    name: string;
    slug: string;
    taxRate: string;
    taxType: 'none' | 'flat' | 'graduated';
    description: string;
}> = [
        { code: 'AL', name: 'Alabama', slug: 'alabama', taxRate: '2-5%', taxType: 'graduated', description: 'Alabama has graduated income tax rates from 2% to 5%.' },
        { code: 'AK', name: 'Alaska', slug: 'alaska', taxRate: '0%', taxType: 'none', description: 'Alaska has no state income tax, maximizing your take-home pay.' },
        { code: 'AZ', name: 'Arizona', slug: 'arizona', taxRate: '2.5%', taxType: 'flat', description: 'Arizona has a flat income tax rate of 2.5%.' },
        { code: 'AR', name: 'Arkansas', slug: 'arkansas', taxRate: '2-4.7%', taxType: 'graduated', description: 'Arkansas has graduated income tax rates from 2% to 4.7%.' },
        { code: 'CA', name: 'California', slug: 'california', taxRate: '1-13.3%', taxType: 'graduated', description: 'California has the highest state income tax in the nation, with rates up to 13.3%.' },
        { code: 'CO', name: 'Colorado', slug: 'colorado', taxRate: '4.4%', taxType: 'flat', description: 'Colorado has a flat income tax rate of 4.4%.' },
        { code: 'CT', name: 'Connecticut', slug: 'connecticut', taxRate: '3-6.99%', taxType: 'graduated', description: 'Connecticut has graduated income tax rates from 3% to 6.99%.' },
        { code: 'DE', name: 'Delaware', slug: 'delaware', taxRate: '2.2-6.6%', taxType: 'graduated', description: 'Delaware has graduated income tax rates from 2.2% to 6.6%.' },
        { code: 'FL', name: 'Florida', slug: 'florida', taxRate: '0%', taxType: 'none', description: 'Florida has no state income tax, making it popular for workers seeking higher take-home pay.' },
        { code: 'GA', name: 'Georgia', slug: 'georgia', taxRate: '5.49%', taxType: 'flat', description: 'Georgia has a flat income tax rate of 5.49% (decreasing to 4.99% by 2029).' },
        { code: 'HI', name: 'Hawaii', slug: 'hawaii', taxRate: '1.4-11%', taxType: 'graduated', description: 'Hawaii has graduated income tax rates from 1.4% to 11%.' },
        { code: 'ID', name: 'Idaho', slug: 'idaho', taxRate: '5.8%', taxType: 'flat', description: 'Idaho has a flat income tax rate of 5.8%.' },
        { code: 'IL', name: 'Illinois', slug: 'illinois', taxRate: '4.95%', taxType: 'flat', description: 'Illinois has a flat income tax rate of 4.95%.' },
        { code: 'IN', name: 'Indiana', slug: 'indiana', taxRate: '3.05%', taxType: 'flat', description: 'Indiana has a flat income tax rate of 3.05%.' },
        { code: 'IA', name: 'Iowa', slug: 'iowa', taxRate: '4.4-6%', taxType: 'graduated', description: 'Iowa has graduated income tax rates from 4.4% to 6%.' },
        { code: 'KS', name: 'Kansas', slug: 'kansas', taxRate: '3.1-5.7%', taxType: 'graduated', description: 'Kansas has graduated income tax rates from 3.1% to 5.7%.' },
        { code: 'KY', name: 'Kentucky', slug: 'kentucky', taxRate: '4.5%', taxType: 'flat', description: 'Kentucky has a flat income tax rate of 4.5%.' },
        { code: 'LA', name: 'Louisiana', slug: 'louisiana', taxRate: '1.85-4.25%', taxType: 'graduated', description: 'Louisiana has graduated income tax rates from 1.85% to 4.25%.' },
        { code: 'ME', name: 'Maine', slug: 'maine', taxRate: '5.8-7.15%', taxType: 'graduated', description: 'Maine has graduated income tax rates from 5.8% to 7.15%.' },
        { code: 'MD', name: 'Maryland', slug: 'maryland', taxRate: '2-5.75%', taxType: 'graduated', description: 'Maryland has graduated income tax rates from 2% to 5.75%, plus local taxes.' },
        { code: 'MA', name: 'Massachusetts', slug: 'massachusetts', taxRate: '5%', taxType: 'flat', description: 'Massachusetts has a flat income tax rate of 5% (plus 4% surtax on income over $1M).' },
        { code: 'MI', name: 'Michigan', slug: 'michigan', taxRate: '4.25%', taxType: 'flat', description: 'Michigan has a flat income tax rate of 4.25%.' },
        { code: 'MN', name: 'Minnesota', slug: 'minnesota', taxRate: '5.35-9.85%', taxType: 'graduated', description: 'Minnesota has graduated income tax rates from 5.35% to 9.85%.' },
        { code: 'MS', name: 'Mississippi', slug: 'mississippi', taxRate: '4.7%', taxType: 'flat', description: 'Mississippi has a flat income tax rate of 4.7%.' },
        { code: 'MO', name: 'Missouri', slug: 'missouri', taxRate: '2-4.95%', taxType: 'graduated', description: 'Missouri has graduated income tax rates from 2% to 4.95%.' },
        { code: 'MT', name: 'Montana', slug: 'montana', taxRate: '4.7-6.75%', taxType: 'graduated', description: 'Montana has graduated income tax rates from 4.7% to 6.75%.' },
        { code: 'NE', name: 'Nebraska', slug: 'nebraska', taxRate: '2.46-5.84%', taxType: 'graduated', description: 'Nebraska has graduated income tax rates from 2.46% to 5.84%.' },
        { code: 'NV', name: 'Nevada', slug: 'nevada', taxRate: '0%', taxType: 'none', description: 'Nevada has no state income tax, popular with California transplants.' },
        { code: 'NH', name: 'New Hampshire', slug: 'new-hampshire', taxRate: '0%', taxType: 'none', description: 'New Hampshire has no tax on earned income (only interest/dividends, phasing out).' },
        { code: 'NJ', name: 'New Jersey', slug: 'new-jersey', taxRate: '1.4-10.75%', taxType: 'graduated', description: 'New Jersey has graduated income tax rates from 1.4% to 10.75%.' },
        { code: 'NM', name: 'New Mexico', slug: 'new-mexico', taxRate: '1.7-5.9%', taxType: 'graduated', description: 'New Mexico has graduated income tax rates from 1.7% to 5.9%.' },
        { code: 'NY', name: 'New York', slug: 'new-york', taxRate: '4-10.9%', taxType: 'graduated', description: 'New York has graduated income tax rates from 4% to 10.9%, plus NYC taxes for city residents.' },
        { code: 'NC', name: 'North Carolina', slug: 'north-carolina', taxRate: '4.75%', taxType: 'flat', description: 'North Carolina has a flat income tax rate of 4.75%.' },
        { code: 'ND', name: 'North Dakota', slug: 'north-dakota', taxRate: '1.95-2.5%', taxType: 'graduated', description: 'North Dakota has low graduated income tax rates from 1.95% to 2.5%.' },
        { code: 'OH', name: 'Ohio', slug: 'ohio', taxRate: '0-3.75%', taxType: 'graduated', description: 'Ohio has graduated income tax rates from 0% to 3.75%, plus local city taxes.' },
        { code: 'OK', name: 'Oklahoma', slug: 'oklahoma', taxRate: '0.25-4.75%', taxType: 'graduated', description: 'Oklahoma has graduated income tax rates from 0.25% to 4.75%.' },
        { code: 'OR', name: 'Oregon', slug: 'oregon', taxRate: '4.75-9.9%', taxType: 'graduated', description: 'Oregon has graduated income tax rates from 4.75% to 9.9%.' },
        { code: 'PA', name: 'Pennsylvania', slug: 'pennsylvania', taxRate: '3.07%', taxType: 'flat', description: 'Pennsylvania has a flat income tax rate of 3.07%, plus local taxes.' },
        { code: 'RI', name: 'Rhode Island', slug: 'rhode-island', taxRate: '3.75-5.99%', taxType: 'graduated', description: 'Rhode Island has graduated income tax rates from 3.75% to 5.99%.' },
        { code: 'SC', name: 'South Carolina', slug: 'south-carolina', taxRate: '0-6.4%', taxType: 'graduated', description: 'South Carolina has graduated income tax rates from 0% to 6.4%.' },
        { code: 'SD', name: 'South Dakota', slug: 'south-dakota', taxRate: '0%', taxType: 'none', description: 'South Dakota has no state income tax.' },
        { code: 'TN', name: 'Tennessee', slug: 'tennessee', taxRate: '0%', taxType: 'none', description: 'Tennessee has no tax on earned income.' },
        { code: 'TX', name: 'Texas', slug: 'texas', taxRate: '0%', taxType: 'none', description: 'Texas has no state income tax, making it attractive for high earners.' },
        { code: 'UT', name: 'Utah', slug: 'utah', taxRate: '4.65%', taxType: 'flat', description: 'Utah has a flat income tax rate of 4.65%.' },
        { code: 'VT', name: 'Vermont', slug: 'vermont', taxRate: '3.35-8.75%', taxType: 'graduated', description: 'Vermont has graduated income tax rates from 3.35% to 8.75%.' },
        { code: 'VA', name: 'Virginia', slug: 'virginia', taxRate: '2-5.75%', taxType: 'graduated', description: 'Virginia has graduated income tax rates from 2% to 5.75%.' },
        { code: 'WA', name: 'Washington', slug: 'washington', taxRate: '0%', taxType: 'none', description: 'Washington has no state income tax on wages.' },
        { code: 'WV', name: 'West Virginia', slug: 'west-virginia', taxRate: '2.36-5.12%', taxType: 'graduated', description: 'West Virginia has graduated income tax rates from 2.36% to 5.12%.' },
        { code: 'WI', name: 'Wisconsin', slug: 'wisconsin', taxRate: '3.54-7.65%', taxType: 'graduated', description: 'Wisconsin has graduated income tax rates from 3.54% to 7.65%.' },
        { code: 'WY', name: 'Wyoming', slug: 'wyoming', taxRate: '0%', taxType: 'none', description: 'Wyoming has no state income tax.' },
    ];

// Salary amounts for breakdown pages
const salaryBreakdowns = [
    25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000,
    75000, 80000, 85000, 90000, 95000, 100000, 110000, 120000, 125000, 130000,
    140000, 150000, 175000, 200000, 250000, 300000,
];

// Hourly rates for "X dollars an hour" breakdown pages (expanded)
const hourlyRateBreakdowns = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    32, 35, 40, 45, 50, 55, 60, 75, 100,
];

// Biweekly pay amounts for conversion pages
const biweeklyAmounts = [
    1000, 1200, 1400, 1500, 1600, 1800, 2000, 2200, 2400, 2500,
    2800, 3000, 3200, 3500, 4000, 4500, 5000, 6000,
];

// Weekly pay amounts for conversion pages
const weeklyAmounts = [
    400, 500, 600, 700, 750, 800, 900, 1000, 1100, 1200,
    1300, 1400, 1500, 1750, 2000, 2500, 3000,
];

// Monthly salary amounts for conversion pages
const monthlyAmounts = [
    2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500,
    7000, 7500, 8000, 8500, 9000, 10000, 12000, 15000, 20000,
];

// Raise percentages for raise calculator pages
const raisePercentages = [2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, 25];

// Top states for state+salary combination pages
const topStatesForSalary = ['CA', 'TX', 'FL', 'NY', 'IL', 'PA', 'OH', 'GA', 'NC', 'WA'];
const topSalariesForStates = [40000, 50000, 60000, 75000, 80000, 100000, 120000, 150000];

// Generate hourly rate breakdown pages
function generateHourlyBreakdowns(): CalculatorPageData[] {
    return hourlyRateBreakdowns.map((rate) => {
        const annualSalary = rate * 40 * 52;
        const annualFormatted = annualSalary.toLocaleString();
        const monthlyPay = (annualSalary / 12).toFixed(0);
        const weeklyPay = (rate * 40).toFixed(0);

        return {
            slug: `${rate}-dollars-an-hour`,
            title: `$${rate} an Hour is How Much a Year? | ${rate}/Hour Annual Salary`,
            description: `$${rate} an hour is $${annualFormatted} a year. See what $${rate}/hour means for your annual salary, monthly pay, and weekly earnings.`,
            h1: `$${rate} an Hour is How Much a Year?`,
            keywords: [
                `${rate} dollars an hour`,
                `${rate} an hour is how much a year`,
                `${rate} per hour annual salary`,
                `${rate}/hour yearly`,
            ],
            calculatorType: 'hourlyToSalary' as CalculatorType,
            category: 'salary' as const,
            priority: rate >= 20 ? 8 : 7,
            inputs: [
                { id: 'hourlyRate', label: 'Hourly Rate', type: 'currency' as const, placeholder: rate.toString(), defaultValue: rate, min: 0, required: true },
                { id: 'hoursPerWeek', label: 'Hours Per Week', type: 'number' as const, placeholder: '40', defaultValue: 40, min: 1, max: 168, required: true },
                { id: 'weeksPerYear', label: 'Weeks Per Year', type: 'number' as const, placeholder: '52', defaultValue: 52, min: 1, max: 52, required: true },
            ],
            outputs: [
                { id: 'annualSalary', label: 'Annual Salary', format: 'currency' as const, highlight: true },
                { id: 'monthlyPay', label: 'Monthly Pay', format: 'currency' as const },
                { id: 'weeklyPay', label: 'Weekly Pay', format: 'currency' as const },
                { id: 'dailyPay', label: 'Daily Pay', format: 'currency' as const },
            ],
            content: {
                intro: `If you make $${rate} an hour, you're earning $${annualFormatted} per year (before taxes) working a standard 40-hour week.`,
                howItWorks: `$${rate}/hour × 40 hours/week × 52 weeks/year = $${annualFormatted} annual salary. Monthly gross is approximately $${parseInt(monthlyPay).toLocaleString()}.`,
                whyItMatters: rate >= 25
                    ? `$${rate}/hour translates to a solid income of $${annualFormatted} annually.`
                    : `$${rate}/hour ($${annualFormatted}/year) helps with budgeting and job comparisons.`,
            },
            faq: [
                { question: `How much is $${rate} an hour annually?`, answer: `$${rate} an hour equals $${annualFormatted} per year for a 40-hour work week.` },
                { question: `What is $${rate} an hour monthly?`, answer: `$${rate} per hour equals approximately $${parseInt(monthlyPay).toLocaleString()} per month.` },
            ],
            relatedCalculators: [
                { slug: 'hourly-to-salary-calculator', title: 'Hourly to Salary Calculator' },
                { slug: 'salary-to-hourly-calculator', title: 'Salary to Hourly Calculator' },
            ],
            lastUpdated: "2025-12-23",
        };
    });
}

// Generate biweekly pay conversion pages
function generateBiweeklyBreakdowns(): CalculatorPageData[] {
    return biweeklyAmounts.map((amount) => {
        const annualSalary = amount * 26;
        const annualFormatted = annualSalary.toLocaleString();
        const amountFormatted = amount.toLocaleString();
        const monthlyPay = (annualSalary / 12).toFixed(0);
        const hourlyRate = (annualSalary / 2080).toFixed(2);

        return {
            slug: `${amount}-biweekly-is-how-much-a-year`,
            title: `$${amountFormatted} Biweekly is How Much a Year? | Biweekly to Annual`,
            description: `$${amountFormatted} biweekly is $${annualFormatted} a year. Convert your bi-weekly paycheck to annual salary, monthly, and hourly rate.`,
            h1: `$${amountFormatted} Biweekly is How Much a Year?`,
            keywords: [
                `${amount} biweekly is how much a year`,
                `${amount} biweekly salary`,
                `${amount} every two weeks annual`,
                `${amount} biweekly to yearly`,
            ],
            calculatorType: 'hourlyToSalary' as CalculatorType,
            category: 'paycheck' as const,
            priority: amount >= 2000 ? 8 : 7,
            inputs: [
                { id: 'hourlyRate', label: 'Biweekly Pay', type: 'currency' as const, placeholder: amountFormatted, defaultValue: amount, min: 0, required: true },
                { id: 'hoursPerWeek', label: 'Hours Per Week', type: 'number' as const, placeholder: '40', defaultValue: 40, min: 1, max: 168, required: true },
                { id: 'weeksPerYear', label: 'Weeks Per Year', type: 'number' as const, placeholder: '52', defaultValue: 52, min: 1, max: 52, required: true },
            ],
            outputs: [
                { id: 'annualSalary', label: 'Annual Salary', format: 'currency' as const, highlight: true },
                { id: 'monthlyPay', label: 'Monthly Pay', format: 'currency' as const },
                { id: 'weeklyPay', label: 'Weekly Pay', format: 'currency' as const },
                { id: 'dailyPay', label: 'Hourly Rate', format: 'currency' as const },
            ],
            content: {
                intro: `If you earn $${amountFormatted} every two weeks (biweekly), your annual salary is $${annualFormatted} before taxes.`,
                howItWorks: `$${amountFormatted} biweekly × 26 pay periods = $${annualFormatted} per year. This equals approximately $${parseInt(monthlyPay).toLocaleString()} monthly or $${hourlyRate}/hour.`,
                whyItMatters: `Understanding your biweekly pay as an annual figure helps with budgeting, tax planning, and comparing job offers.`,
            },
            faq: [
                { question: `What is $${amountFormatted} biweekly as an annual salary?`, answer: `$${amountFormatted} biweekly equals $${annualFormatted} per year (26 pay periods × $${amountFormatted}).` },
                { question: `How much is $${amountFormatted} biweekly per hour?`, answer: `$${amountFormatted} biweekly equals approximately $${hourlyRate} per hour for a 40-hour work week.` },
            ],
            relatedCalculators: [
                { slug: 'biweekly-paycheck-calculator', title: 'Biweekly Paycheck Calculator' },
                { slug: 'salary-to-hourly-calculator', title: 'Salary to Hourly Calculator' },
            ],
            lastUpdated: "2025-12-23",
        };
    });
}

// Generate weekly pay conversion pages
function generateWeeklyBreakdowns(): CalculatorPageData[] {
    return weeklyAmounts.map((amount) => {
        const annualSalary = amount * 52;
        const annualFormatted = annualSalary.toLocaleString();
        const amountFormatted = amount.toLocaleString();
        const monthlyPay = (annualSalary / 12).toFixed(0);
        const hourlyRate = (amount / 40).toFixed(2);

        return {
            slug: `${amount}-a-week-is-how-much-a-year`,
            title: `$${amountFormatted} a Week is How Much a Year? | Weekly to Annual Salary`,
            description: `$${amountFormatted} a week is $${annualFormatted} a year. Convert your weekly pay to annual salary and see monthly breakdown.`,
            h1: `$${amountFormatted} a Week is How Much a Year?`,
            keywords: [
                `${amount} a week is how much a year`,
                `${amount} weekly salary annual`,
                `${amount} per week yearly`,
                `${amount} a week to annual`,
            ],
            calculatorType: 'hourlyToSalary' as CalculatorType,
            category: 'salary' as const,
            priority: amount >= 1000 ? 8 : 7,
            inputs: [
                { id: 'hourlyRate', label: 'Weekly Pay', type: 'currency' as const, placeholder: amountFormatted, defaultValue: amount, min: 0, required: true },
                { id: 'hoursPerWeek', label: 'Hours Per Week', type: 'number' as const, placeholder: '40', defaultValue: 40, min: 1, max: 168, required: true },
                { id: 'weeksPerYear', label: 'Weeks Per Year', type: 'number' as const, placeholder: '52', defaultValue: 52, min: 1, max: 52, required: true },
            ],
            outputs: [
                { id: 'annualSalary', label: 'Annual Salary', format: 'currency' as const, highlight: true },
                { id: 'monthlyPay', label: 'Monthly Pay', format: 'currency' as const },
                { id: 'weeklyPay', label: 'Biweekly Pay', format: 'currency' as const },
                { id: 'dailyPay', label: 'Daily Pay', format: 'currency' as const },
            ],
            content: {
                intro: `If you earn $${amountFormatted} per week, your annual salary is $${annualFormatted} before taxes.`,
                howItWorks: `$${amountFormatted} weekly × 52 weeks = $${annualFormatted} per year. This equals about $${parseInt(monthlyPay).toLocaleString()} monthly or $${hourlyRate}/hour.`,
                whyItMatters: `Converting weekly pay to annual salary helps you understand your true earning power and compare opportunities.`,
            },
            faq: [
                { question: `What is $${amountFormatted} a week annually?`, answer: `$${amountFormatted} per week equals $${annualFormatted} per year (52 weeks × $${amountFormatted}).` },
                { question: `How much is $${amountFormatted} weekly per hour?`, answer: `$${amountFormatted} weekly equals approximately $${hourlyRate} per hour for a 40-hour week.` },
            ],
            relatedCalculators: [
                { slug: 'hourly-to-salary-calculator', title: 'Hourly to Salary Calculator' },
                { slug: 'salary-to-hourly-calculator', title: 'Salary to Hourly Calculator' },
            ],
            lastUpdated: "2025-12-23",
        };
    });
}

// Generate monthly salary conversion pages
function generateMonthlyBreakdowns(): CalculatorPageData[] {
    return monthlyAmounts.map((amount) => {
        const annualSalary = amount * 12;
        const annualFormatted = annualSalary.toLocaleString();
        const amountFormatted = amount.toLocaleString();
        const hourlyRate = (annualSalary / 2080).toFixed(2);
        const weeklyPay = (annualSalary / 52).toFixed(0);

        return {
            slug: `${amount}-a-month-is-how-much-a-year`,
            title: `$${amountFormatted} a Month is How Much a Year? | Monthly to Annual`,
            description: `$${amountFormatted} a month is $${annualFormatted} a year. Convert monthly salary to annual, hourly, and weekly pay.`,
            h1: `$${amountFormatted} a Month is How Much a Year?`,
            keywords: [
                `${amount} a month is how much a year`,
                `${amount} monthly salary annual`,
                `${amount} per month yearly salary`,
                `${amount} a month to yearly`,
            ],
            calculatorType: 'hourlyToSalary' as CalculatorType,
            category: 'salary' as const,
            priority: amount >= 5000 ? 8 : 7,
            inputs: [
                { id: 'hourlyRate', label: 'Monthly Salary', type: 'currency' as const, placeholder: amountFormatted, defaultValue: amount, min: 0, required: true },
                { id: 'hoursPerWeek', label: 'Hours Per Week', type: 'number' as const, placeholder: '40', defaultValue: 40, min: 1, max: 168, required: true },
                { id: 'weeksPerYear', label: 'Weeks Per Year', type: 'number' as const, placeholder: '52', defaultValue: 52, min: 1, max: 52, required: true },
            ],
            outputs: [
                { id: 'annualSalary', label: 'Annual Salary', format: 'currency' as const, highlight: true },
                { id: 'monthlyPay', label: 'Biweekly Pay', format: 'currency' as const },
                { id: 'weeklyPay', label: 'Weekly Pay', format: 'currency' as const },
                { id: 'dailyPay', label: 'Hourly Rate', format: 'currency' as const },
            ],
            content: {
                intro: `If you earn $${amountFormatted} per month, your annual salary is $${annualFormatted} before taxes.`,
                howItWorks: `$${amountFormatted} monthly × 12 months = $${annualFormatted} per year. This equals about $${parseInt(weeklyPay).toLocaleString()} weekly or $${hourlyRate}/hour.`,
                whyItMatters: `Understanding your monthly income as an annual figure helps with tax planning and financial decisions.`,
            },
            faq: [
                { question: `What is $${amountFormatted} a month annually?`, answer: `$${amountFormatted} per month equals $${annualFormatted} per year ($${amountFormatted} × 12 months).` },
                { question: `How much is $${amountFormatted} monthly per hour?`, answer: `$${amountFormatted} monthly equals approximately $${hourlyRate} per hour for a 40-hour week.` },
            ],
            relatedCalculators: [
                { slug: 'salary-to-hourly-calculator', title: 'Salary to Hourly Calculator' },
                { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
            ],
            lastUpdated: "2025-12-23",
        };
    });
}

// Generate raise percentage calculator pages
function generateRaiseCalculators(): CalculatorPageData[] {
    return raisePercentages.map((percent) => {
        return {
            slug: `${percent}-percent-raise-calculator`,
            title: `${percent}% Raise Calculator | Calculate Your New Salary After ${percent}% Increase`,
            description: `Calculate what a ${percent}% raise means for your salary. See your new annual, monthly, and hourly pay after a ${percent} percent increase.`,
            h1: `${percent}% Raise Calculator`,
            keywords: [
                `${percent} percent raise calculator`,
                `${percent}% salary increase`,
                `${percent} percent pay raise`,
                `calculate ${percent}% raise`,
            ],
            calculatorType: 'payRaise' as CalculatorType,
            category: 'salary' as const,
            priority: percent >= 5 ? 8 : 7,
            inputs: [
                { id: 'currentSalary', label: 'Current Salary', type: 'currency' as const, placeholder: '50,000', defaultValue: 50000, min: 0, required: true },
                { id: 'raisePercentage', label: 'Raise Percentage', type: 'number' as const, placeholder: percent.toString(), defaultValue: percent, min: 0, max: 100, required: true },
            ],
            outputs: [
                { id: 'newSalary', label: 'New Salary', format: 'currency' as const, highlight: true },
                { id: 'raiseAmount', label: 'Raise Amount', format: 'currency' as const },
                { id: 'monthlyIncrease', label: 'Monthly Increase', format: 'currency' as const },
                { id: 'hourlyIncrease', label: 'Hourly Increase', format: 'currency' as const },
            ],
            content: {
                intro: `A ${percent}% raise can significantly impact your finances. Use this calculator to see exactly how much more you'll earn after a ${percent} percent salary increase.`,
                howItWorks: `Multiply your current salary by ${1 + percent / 100} (or add ${percent}% of your salary) to get your new salary. For example, a $50,000 salary with a ${percent}% raise becomes $${(50000 * (1 + percent / 100)).toLocaleString()}.`,
                whyItMatters: percent >= 10
                    ? `A ${percent}% raise is significant  well above the typical 3-4% annual increase. This could represent a promotion or major career advancement.`
                    : percent >= 5
                        ? `A ${percent}% raise is above the average annual increase of 3-4%. It's a solid step forward in your career.`
                        : `A ${percent}% raise is close to typical cost-of-living adjustments. Understanding the actual dollar impact helps with negotiations.`,
            },
            faq: [
                { question: `How much is a ${percent}% raise on $50,000?`, answer: `A ${percent}% raise on $50,000 equals $${(50000 * percent / 100).toLocaleString()} more per year, bringing your new salary to $${(50000 * (1 + percent / 100)).toLocaleString()}.` },
                { question: `Is a ${percent}% raise good?`, answer: percent >= 10 ? `Yes, a ${percent}% raise is excellent  well above average annual increases.` : percent >= 5 ? `A ${percent}% raise is good  above the typical 3-4% annual increase.` : `A ${percent}% raise is around typical cost-of-living adjustments.` },
            ],
            relatedCalculators: [
                { slug: 'pay-raise-calculator', title: 'Pay Raise Calculator' },
                { slug: 'salary-to-hourly-calculator', title: 'Salary to Hourly Calculator' },
            ],
            lastUpdated: "2025-12-23",
        };
    });
}

// Generate state + salary combination pages (e.g., "50000 salary in california")
function generateStateSalaryPages(): CalculatorPageData[] {
    const pages: CalculatorPageData[] = [];

    topStatesForSalary.forEach((stateCode) => {
        const state = stateData.find((s) => s.code === stateCode);
        if (!state) return;

        topSalariesForStates.forEach((salary) => {
            const salaryK = `${salary / 1000}k`;
            const salaryFormatted = salary.toLocaleString();

            pages.push({
                slug: `${salary}-salary-in-${state.slug}`,
                title: `$${salaryFormatted} Salary in ${state.name} | ${salaryK} Take Home Pay ${state.code}`,
                description: `See what a $${salaryFormatted} salary looks like in ${state.name} after taxes. Calculate your ${state.code} take-home pay on a ${salaryK} salary.`,
                h1: `$${salaryFormatted} Salary in ${state.name}`,
                keywords: [
                    `${salary} salary in ${state.slug}`,
                    `${salaryK} salary ${state.slug}`,
                    `${state.slug} ${salaryK} after taxes`,
                    `${salary} ${state.code.toLowerCase()} take home`,
                ],
                calculatorType: 'paycheckState' as CalculatorType,
                stateCode: state.code,
                category: 'paycheck' as const,
                priority: salary >= 75000 ? 8 : 7,
                inputs: [
                    { id: 'grossPay', label: 'Annual Salary', type: 'currency' as const, placeholder: salaryFormatted, defaultValue: salary / 26, min: 0, required: true },
                    { id: 'payFrequency', label: 'Pay Frequency', type: 'select' as const, defaultValue: 'biweekly', options: payFrequencyOptions },
                    { id: 'filingStatus', label: 'Filing Status', type: 'select' as const, defaultValue: 'single', options: filingStatusOptions },
                ],
                outputs: [
                    { id: 'netPay', label: 'Take Home Pay', format: 'currency' as const, highlight: true },
                    { id: 'federalTax', label: 'Federal Tax', format: 'currency' as const },
                    { id: 'stateTax', label: `${state.code} State Tax`, format: 'currency' as const },
                    { id: 'effectiveTaxRate', label: 'Effective Tax Rate', format: 'percentage' as const },
                ],
                content: {
                    intro: `Wondering what a $${salaryFormatted} salary looks like in ${state.name}? ${state.description} This calculator shows your estimated take-home pay after federal and state taxes.`,
                    howItWorks: state.taxType === 'none'
                        ? `${state.name} has no state income tax, so you only pay federal income tax and FICA on your $${salaryFormatted} salary.`
                        : `${state.name} has ${state.taxType === 'flat' ? 'a flat' : 'graduated'} state income tax of ${state.taxRate}. Combined with federal taxes and FICA, we calculate your net pay.`,
                    whyItMatters: `Understanding your take-home pay on a $${salaryFormatted} salary in ${state.name} helps you budget and compare cost of living with other states.`,
                },
                faq: [
                    { question: `What is the take-home pay on $${salaryFormatted} in ${state.name}?`, answer: `Your take-home pay varies based on filing status and deductions, but ${state.taxType === 'none' ? `${state.name} has no state income tax, maximizing your net pay.` : `expect ${state.taxRate} state tax plus federal taxes.`}` },
                    { question: `Is $${salaryFormatted} a good salary in ${state.name}?`, answer: salary >= 100000 ? `Yes, $${salaryFormatted} is a strong salary in ${state.name}, providing comfortable living in most areas.` : salary >= 60000 ? `$${salaryFormatted} is above average in ${state.name}, though high cost-of-living areas may require more.` : `$${salaryFormatted} varies by location within ${state.name}  comfortable in some areas, tight in expensive metros.` },
                ],
                relatedCalculators: [
                    { slug: `paycheck-calculator-${state.slug}`, title: `${state.name} Paycheck Calculator` },
                    { slug: `${salary}-salary-breakdown`, title: `$${salaryFormatted} Salary Breakdown` },
                ],
                lastUpdated: "2025-12-23",
            });
        });
    });

    return pages;
}


// Generate state paycheck calculator pages
function generateStateCalculators(): CalculatorPageData[] {
    return stateData.map((state) => ({
        slug: `paycheck-calculator-${state.slug}`,
        title: `${state.name} Paycheck Calculator 2025 | ${state.code} Take Home Pay`,
        description: `Calculate your ${state.name} paycheck and take-home pay. ${state.taxType === 'none' ? `${state.name} has no state income tax.` : `${state.name} has ${state.taxRate} state income tax.`} Free ${state.code} paycheck calculator for 2025.`,
        h1: `${state.name} Paycheck Calculator`,
        keywords: [
            `${state.slug} paycheck calculator`,
            `${state.code.toLowerCase()} paycheck calculator`,
            `${state.slug} take home pay`,
            `${state.slug} salary calculator`,
            `${state.code.toLowerCase()} tax calculator`,
        ],
        calculatorType: 'paycheckState' as CalculatorType,
        stateCode: state.code,
        category: 'paycheck' as const,
        priority: state.taxType === 'none' ? 9 : 7,
        inputs: [
            { id: 'grossPay', label: 'Gross Pay Per Period', type: 'currency' as const, placeholder: '3,000', defaultValue: 3000, min: 0, required: true },
            { id: 'payFrequency', label: 'Pay Frequency', type: 'select' as const, defaultValue: 'biweekly', options: payFrequencyOptions },
            { id: 'filingStatus', label: 'Filing Status', type: 'select' as const, defaultValue: 'single', options: filingStatusOptions },
            { id: 'retirement401k', label: '401(k) Contribution', type: 'currency' as const, placeholder: '0', defaultValue: 0, min: 0, helperText: 'Per paycheck pre-tax contribution' },
        ],
        outputs: [
            { id: 'netPay', label: 'Net Pay (Take Home)', format: 'currency' as const, highlight: true },
            { id: 'federalTax', label: 'Federal Tax', format: 'currency' as const },
            { id: 'stateTax', label: `State Tax (${state.code})`, format: 'currency' as const },
            { id: 'socialSecurity', label: 'Social Security', format: 'currency' as const },
            { id: 'medicare', label: 'Medicare', format: 'currency' as const },
            { id: 'effectiveTaxRate', label: 'Effective Tax Rate', format: 'percentage' as const },
        ],
        content: {
            intro: `${state.description} Our ${state.name} paycheck calculator shows your exact take-home pay after all deductions.`,
            howItWorks: state.taxType === 'none'
                ? `Since ${state.name} has no state income tax, the only deductions from your paycheck are federal income tax, Social Security (6.2%), and Medicare (1.45%). This calculator uses 2025 federal tax brackets and FICA rates.`
                : `This calculator applies ${state.name}'s ${state.taxType === 'flat' ? 'flat' : 'graduated'} state income tax rate of ${state.taxRate}, 2025 federal tax brackets, and FICA taxes to estimate your net pay.`,
            whyItMatters: state.taxType === 'none'
                ? `Living in ${state.name} means more money in your pocket. With no state income tax, ${state.name} residents can save thousands annually compared to high-tax states.`
                : `Understanding your ${state.name} take-home pay helps you plan your budget and compare opportunities with other states.`,
        },
        faq: [
            {
                question: `What is the ${state.name} state income tax rate?`,
                answer: state.taxType === 'none'
                    ? `${state.name} has no state income tax on wages. You only pay federal income tax and FICA taxes.`
                    : `${state.name} has ${state.taxType === 'flat' ? 'a flat' : 'graduated'} state income tax rate of ${state.taxRate}.`,
            },
            {
                question: `How much will I take home in ${state.name}?`,
                answer: `Your take-home pay depends on your gross income, filing status, and deductions. Use our calculator to get an accurate estimate for your specific situation.`,
            },
        ],
        relatedCalculators: [
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
            { slug: 'salary-to-hourly-calculator', title: 'Salary to Hourly Calculator' },
        ],
        lastUpdated: "2025-12-23",
    }));
}

// Generate salary breakdown pages
function generateSalaryBreakdowns(): CalculatorPageData[] {
    return salaryBreakdowns.map((salary) => {
        const salaryK = salary >= 1000 ? `${salary / 1000}k` : salary.toString();
        const salaryFormatted = salary.toLocaleString();
        const hourlyRate = (salary / 2080).toFixed(2);
        const monthlyPay = (salary / 12).toFixed(0);

        return {
            slug: `${salary}-salary-breakdown`,
            title: `$${salaryFormatted} Salary Breakdown | What Does ${salaryK} a Year Look Like?`,
            description: `See exactly what a $${salaryFormatted} annual salary means. Calculate hourly rate ($${hourlyRate}/hr), monthly pay, and understand what ${salaryK} a year looks like after taxes.`,
            h1: `$${salaryFormatted} Salary Breakdown`,
            keywords: [
                `${salary} salary`,
                `${salaryK} salary`,
                `${salary} a year`,
                `${salaryK} a year hourly`,
                `${salary} salary after taxes`,
                `what is ${salaryK} a year hourly`,
            ],
            calculatorType: 'salaryToHourly' as CalculatorType,
            category: 'salary' as const,
            priority: salary >= 100000 ? 9 : salary >= 50000 ? 8 : 7,
            inputs: [
                { id: 'annualSalary', label: 'Annual Salary', type: 'currency' as const, placeholder: salaryFormatted, defaultValue: salary, min: 0, required: true },
                { id: 'hoursPerWeek', label: 'Hours Per Week', type: 'number' as const, placeholder: '40', defaultValue: 40, min: 1, max: 168, required: true },
                { id: 'weeksPerYear', label: 'Weeks Per Year', type: 'number' as const, placeholder: '52', defaultValue: 52, min: 1, max: 52, required: true },
            ],
            outputs: [
                { id: 'hourlyRate', label: 'Hourly Rate', format: 'currency' as const, highlight: true },
                { id: 'monthlyPay', label: 'Monthly Pay', format: 'currency' as const },
                { id: 'weeklyPay', label: 'Weekly Pay', format: 'currency' as const },
                { id: 'dailyPay', label: 'Daily Pay', format: 'currency' as const },
            ],
            content: {
                intro: `Wondering what a $${salaryFormatted} salary actually looks like? This calculator breaks down a ${salaryK} annual salary into hourly, weekly, and monthly amounts.`,
                howItWorks: `A $${salaryFormatted} annual salary divided by 2,080 working hours (40 hours × 52 weeks) equals approximately $${hourlyRate} per hour. Monthly gross is approximately $${parseInt(monthlyPay).toLocaleString()} before taxes.`,
                whyItMatters: salary >= 100000
                    ? `$${salaryFormatted} puts you in the six-figure salary range, providing financial security in most US markets.`
                    : salary >= 75000
                        ? `$${salaryFormatted} is above the US median household income and provides comfortable living in most areas.`
                        : salary >= 50000
                            ? `$${salaryFormatted} is close to the US median income. Understanding this breakdown helps you budget effectively.`
                            : `$${salaryFormatted} requires careful budgeting in most US cities. This breakdown helps you understand your actual earnings.`,
            },
            faq: [
                {
                    question: `What is $${salaryFormatted} a year hourly?`,
                    answer: `$${salaryFormatted} per year equals approximately $${hourlyRate} per hour for a standard 40-hour work week.`,
                },
                {
                    question: `How much is ${salaryK} a year monthly?`,
                    answer: `$${salaryFormatted} divided by 12 months equals approximately $${parseInt(monthlyPay).toLocaleString()} per month before taxes.`,
                },
                {
                    question: `Is $${salaryFormatted} a good salary?`,
                    answer: salary >= 100000
                        ? `Yes, $${salaryFormatted} is a six-figure salary that provides financial security in most US markets.`
                        : salary >= 60000
                            ? `$${salaryFormatted} is above the US median and can provide comfortable living in many areas, though high cost-of-living cities may be challenging.`
                            : `It depends on your location and lifestyle. $${salaryFormatted} may be comfortable in low cost-of-living areas but challenging in expensive cities.`,
                },
            ],
            relatedCalculators: [
                { slug: 'salary-to-hourly-calculator', title: 'Salary to Hourly Calculator' },
                { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
            ],
            lastUpdated: "2025-12-23",
        };
    });
}

// Combine all generated calculators with manual ones
const generatedStateCalculators = generateStateCalculators();
const generatedSalaryBreakdowns = generateSalaryBreakdowns();
const generatedHourlyBreakdowns = generateHourlyBreakdowns();
const generatedBiweeklyBreakdowns = generateBiweeklyBreakdowns();
const generatedWeeklyBreakdowns = generateWeeklyBreakdowns();
const generatedMonthlyBreakdowns = generateMonthlyBreakdowns();
const generatedRaiseCalculators = generateRaiseCalculators();
const generatedStateSalaryPages = generateStateSalaryPages();

// All calculator pages data (manual entries + generated, deduplicated)
export const calculatorPages: CalculatorPageData[] = ([
    {
        slug: 'salary-to-hourly-calculator',
        title: 'Salary to Hourly Calculator | Convert Annual Salary to Hourly Rate',
        description: 'Convert your annual salary to an hourly rate instantly. Our free salary to hourly calculator shows your equivalent hourly wage, monthly, weekly, and daily pay.',
        h1: 'Salary to Hourly Calculator',
        keywords: ['salary to hourly calculator', 'convert salary to hourly', 'annual to hourly wage', 'salary hourly rate'],
        calculatorType: 'salaryToHourly',
        category: 'salary',
        priority: 10,
        inputs: [
            {
                id: 'annualSalary',
                label: 'Annual Salary',
                type: 'currency',
                placeholder: '75,000',
                defaultValue: 75000,
                min: 0,
                required: true,
            },
            {
                id: 'hoursPerWeek',
                label: 'Hours Per Week',
                type: 'number',
                placeholder: '40',
                defaultValue: 40,
                min: 1,
                max: 168,
                required: true,
            },
            {
                id: 'weeksPerYear',
                label: 'Weeks Per Year',
                type: 'number',
                placeholder: '52',
                defaultValue: 52,
                min: 1,
                max: 52,
                helperText: 'Use less than 52 to account for unpaid time off',
                required: true,
            },
        ],
        outputs: [
            { id: 'hourlyRate', label: 'Hourly Rate', format: 'currency', highlight: true },
            { id: 'dailyPay', label: 'Daily Pay', format: 'currency' },
            { id: 'weeklyPay', label: 'Weekly Pay', format: 'currency' },
            { id: 'monthlyPay', label: 'Monthly Pay', format: 'currency' },
        ],
        content: {
            intro: 'Wondering what your annual salary works out to per hour? Our salary to hourly calculator instantly converts your yearly income into an equivalent hourly rate, helping you compare job offers, negotiate pay, or understand your true earning power.',
            howItWorks: 'The salary to hourly calculator divides your annual salary by the total number of working hours in a year. For a standard full-time schedule of 40 hours per week for 52 weeks, that\'s 2,080 hours annually. The calculator also shows your equivalent daily, weekly, and monthly earnings for a complete picture of your income.',
            formula: 'Hourly Rate = Annual Salary ÷ (Hours per Week × Weeks per Year)',
            formulaExplanation: 'For a standard 40-hour work week with 52 weeks per year, you divide your annual salary by 2,080 to get your hourly rate. If you work fewer hours or weeks, adjust the calculator inputs accordingly.',
            example: {
                description: 'If you earn $75,000 per year working 40 hours per week:',
                inputs: { annualSalary: 75000, hoursPerWeek: 40, weeksPerYear: 52 },
                result: 'Your hourly rate is $36.06, with daily pay of $288.46, weekly pay of $1,442.31, and monthly pay of $6,250.',
            },
            whyItMatters: 'Understanding your hourly rate is crucial for comparing job offers (especially when switching between salaried and hourly positions), calculating the true cost of overtime, negotiating raises, and evaluating freelance or contract opportunities. It also helps you value your time when making decisions about side projects or additional work.',
        },
        faq: [
            {
                question: 'How do I convert my annual salary to an hourly rate?',
                answer: 'Divide your annual salary by the total hours worked per year. For a standard 40-hour week, that\'s 2,080 hours (40 × 52). For example, $75,000 ÷ 2,080 = $36.06 per hour.',
            },
            {
                question: 'What if I don\'t work 52 weeks per year?',
                answer: 'Adjust the "Weeks Per Year" field to reflect your actual working weeks. If you have 2 weeks unpaid vacation, use 50 weeks. This gives you a more accurate hourly rate.',
            },
            {
                question: 'Does this calculator account for overtime?',
                answer: 'This calculator shows your base hourly rate. Overtime is typically paid at 1.5x (time and a half) or 2x (double time) your regular rate. Use our Overtime Calculator for those calculations.',
            },
            {
                question: 'Should I include bonuses in my annual salary?',
                answer: 'For the most accurate hourly rate, only include your guaranteed base salary. Bonuses, commissions, and other variable pay can be calculated separately.',
            },
            {
                question: 'How does this help with job comparisons?',
                answer: 'Converting both salaries and hourly wages to the same unit makes it easy to compare offers. A $60,000 salary equals $28.85/hour, while a $30/hour job equals $62,400 annually.',
            },
        ],
        relatedCalculators: [
            { slug: 'hourly-to-salary-calculator', title: 'Hourly to Salary Calculator' },
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
            { slug: 'overtime-pay-calculator', title: 'Overtime Pay Calculator' },
            { slug: 'pay-raise-calculator', title: 'Pay Raise Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'hourly-to-salary-calculator',
        title: 'Hourly to Salary Calculator | Convert Hourly Wage to Annual Salary',
        description: 'Convert your hourly wage to annual salary instantly. See what your hourly rate equals as a yearly, monthly, and weekly salary with our free calculator.',
        h1: 'Hourly to Salary Calculator',
        keywords: ['hourly to salary calculator', 'convert hourly to annual', 'hourly wage to salary', 'annual salary from hourly'],
        calculatorType: 'hourlyToSalary',
        category: 'salary',
        priority: 10,
        inputs: [
            {
                id: 'hourlyRate',
                label: 'Hourly Rate',
                type: 'currency',
                placeholder: '25.00',
                defaultValue: 25,
                min: 0,
                required: true,
            },
            {
                id: 'hoursPerWeek',
                label: 'Hours Per Week',
                type: 'number',
                placeholder: '40',
                defaultValue: 40,
                min: 1,
                max: 168,
                required: true,
            },
            {
                id: 'weeksPerYear',
                label: 'Weeks Per Year',
                type: 'number',
                placeholder: '52',
                defaultValue: 52,
                min: 1,
                max: 52,
                required: true,
            },
        ],
        outputs: [
            { id: 'annualSalary', label: 'Annual Salary', format: 'currency', highlight: true },
            { id: 'monthlyPay', label: 'Monthly Pay', format: 'currency' },
            { id: 'weeklyPay', label: 'Weekly Pay', format: 'currency' },
            { id: 'dailyPay', label: 'Daily Pay', format: 'currency' },
        ],
        content: {
            intro: 'Curious how your hourly wage stacks up as an annual salary? Our hourly to salary calculator converts your hourly pay into yearly, monthly, and weekly equivalents, making it easy to compare job opportunities or plan your budget.',
            howItWorks: 'The calculator multiplies your hourly rate by your weekly hours, then by the number of weeks you work per year. This gives you an accurate annual salary equivalent that accounts for your specific work schedule.',
            formula: 'Annual Salary = Hourly Rate × Hours per Week × Weeks per Year',
            formulaExplanation: 'Working 40 hours per week for 52 weeks equals 2,080 hours annually. Multiply your hourly rate by 2,080 for a quick annual estimate, or use the calculator for custom hours.',
            example: {
                description: 'If you earn $25 per hour working 40 hours per week:',
                inputs: { hourlyRate: 25, hoursPerWeek: 40, weeksPerYear: 52 },
                result: 'Your annual salary equivalent is $52,000, with monthly pay of $4,333.33 and weekly pay of $1,000.',
            },
        },
        faq: [
            {
                question: 'How do I calculate my annual salary from hourly pay?',
                answer: 'Multiply your hourly rate by the hours you work per week, then multiply by 52 (weeks per year). For example: $25/hour × 40 hours × 52 weeks = $52,000 per year.',
            },
            {
                question: 'What is $20 an hour annually?',
                answer: 'At $20 per hour, working 40 hours per week for 52 weeks, you would earn $41,600 per year before taxes.',
            },
            {
                question: 'How much is $30 an hour per year?',
                answer: '$30 per hour equals $62,400 annually for full-time work (40 hours/week, 52 weeks/year).',
            },
            {
                question: 'Does this include overtime pay?',
                answer: 'This calculator shows your regular earnings. Overtime (typically 1.5x your rate for hours over 40/week) would increase your annual total.',
            },
        ],
        relatedCalculators: [
            { slug: 'salary-to-hourly-calculator', title: 'Salary to Hourly Calculator' },
            { slug: 'overtime-pay-calculator', title: 'Overtime Pay Calculator' },
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'take-home-pay-calculator',
        title: 'Take Home Pay Calculator USA | Net Pay After Taxes 2025',
        description: 'Calculate your take home pay after federal and state taxes. See your net pay, tax breakdown, and deductions with our free 2025 paycheck calculator.',
        h1: 'Take Home Pay Calculator',
        keywords: ['take home pay calculator', 'net pay calculator', 'after tax salary', 'paycheck calculator usa'],
        calculatorType: 'paycheck',
        category: 'paycheck',
        priority: 9,
        inputs: [
            {
                id: 'grossPay',
                label: 'Gross Pay (per paycheck)',
                type: 'currency',
                placeholder: '3,000',
                defaultValue: 3000,
                required: true,
            },
            {
                id: 'payFrequency',
                label: 'Pay Frequency',
                type: 'select',
                options: [
                    { value: 'weekly', label: 'Weekly' },
                    { value: 'biweekly', label: 'Bi-weekly' },
                    { value: 'semimonthly', label: 'Semi-monthly' },
                    { value: 'monthly', label: 'Monthly' },
                ],
                defaultValue: 'biweekly',
                required: true,
            },
            {
                id: 'filingStatus',
                label: 'Filing Status',
                type: 'select',
                options: [
                    { value: 'single', label: 'Single' },
                    { value: 'married', label: 'Married Filing Jointly' },
                    { value: 'married_separate', label: 'Married Filing Separately' },
                    { value: 'head_of_household', label: 'Head of Household' },
                ],
                defaultValue: 'single',
                required: true,
            },
            {
                id: 'state',
                label: 'State',
                type: 'select',
                options: [], // Will be populated dynamically
                defaultValue: 'CA',
                required: true,
            },
            {
                id: 'retirement401k',
                label: '401(k) Contribution',
                type: 'currency',
                placeholder: '0',
                defaultValue: 0,
                helperText: 'Pre-tax deduction per paycheck',
            },
        ],
        outputs: [
            { id: 'netPay', label: 'Take Home Pay', format: 'currency', highlight: true },
            { id: 'federalTax', label: 'Federal Tax', format: 'currency' },
            { id: 'stateTax', label: 'State Tax', format: 'currency' },
            { id: 'socialSecurity', label: 'Social Security', format: 'currency' },
            { id: 'medicare', label: 'Medicare', format: 'currency' },
            { id: 'totalDeductions', label: 'Total Deductions', format: 'currency' },
            { id: 'effectiveTaxRate', label: 'Effective Tax Rate', format: 'percentage' },
        ],
        content: {
            intro: 'Want to know exactly how much money will land in your bank account? Our take home pay calculator shows your net pay after federal taxes, state taxes, Social Security, and Medicare deductions.',
            howItWorks: 'The calculator applies 2025 federal tax brackets, your state\'s income tax rate, and FICA taxes (Social Security at 6.2% and Medicare at 1.45%) to estimate your take home pay. Pre-tax deductions like 401(k) contributions reduce your taxable income.',
            formula: 'Net Pay = Gross Pay - Federal Tax - State Tax - Social Security - Medicare - Pre-tax Deductions',
            whyItMatters: 'Knowing your actual take home pay helps with budgeting, comparing job offers, and making informed decisions about retirement contributions and other deductions.',
        },
        faq: [
            {
                question: 'What percentage of my paycheck goes to taxes?',
                answer: 'Typically 20-35% depending on your income, location, and filing status. This includes federal income tax, state tax (if applicable), Social Security (6.2%), and Medicare (1.45%).',
            },
            {
                question: 'How can I increase my take home pay?',
                answer: 'You can increase take home pay by adjusting W-4 withholdings, maximizing pre-tax deductions (401k, HSA), or moving to a state with no income tax.',
            },
            {
                question: 'Which states have no income tax?',
                answer: 'Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming have no state income tax.',
            },
        ],
        relatedCalculators: [
            { slug: 'salary-to-hourly-calculator', title: 'Salary to Hourly Calculator' },
            { slug: '401k-calculator', title: '401(k) Calculator' },
            { slug: 'bonus-tax-calculator', title: 'Bonus Tax Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'paycheck-calculator-california',
        title: 'California Paycheck Calculator 2025 | CA Take Home Pay',
        description: 'Calculate your California paycheck after federal and CA state taxes. Free 2025 California paycheck calculator with accurate tax withholding.',
        h1: 'California Paycheck Calculator',
        keywords: ['california paycheck calculator', 'ca paycheck calculator', 'california take home pay', 'california salary calculator'],
        calculatorType: 'paycheckState',
        stateCode: 'CA',
        category: 'paycheck',
        priority: 10,
        inputs: [
            {
                id: 'grossPay',
                label: 'Gross Pay (per paycheck)',
                type: 'currency',
                placeholder: '3,500',
                defaultValue: 3500,
                required: true,
            },
            {
                id: 'payFrequency',
                label: 'Pay Frequency',
                type: 'select',
                options: [
                    { value: 'weekly', label: 'Weekly' },
                    { value: 'biweekly', label: 'Bi-weekly' },
                    { value: 'semimonthly', label: 'Semi-monthly' },
                    { value: 'monthly', label: 'Monthly' },
                ],
                defaultValue: 'biweekly',
                required: true,
            },
            {
                id: 'filingStatus',
                label: 'Filing Status',
                type: 'select',
                options: [
                    { value: 'single', label: 'Single' },
                    { value: 'married', label: 'Married Filing Jointly' },
                    { value: 'head_of_household', label: 'Head of Household' },
                ],
                defaultValue: 'single',
                required: true,
            },
            {
                id: 'retirement401k',
                label: '401(k) Contribution',
                type: 'currency',
                placeholder: '0',
                defaultValue: 0,
            },
        ],
        outputs: [
            { id: 'netPay', label: 'Take Home Pay', format: 'currency', highlight: true },
            { id: 'federalTax', label: 'Federal Tax', format: 'currency' },
            { id: 'stateTax', label: 'California State Tax', format: 'currency' },
            { id: 'socialSecurity', label: 'Social Security', format: 'currency' },
            { id: 'medicare', label: 'Medicare', format: 'currency' },
            { id: 'effectiveTaxRate', label: 'Effective Tax Rate', format: 'percentage' },
        ],
        content: {
            intro: 'California has one of the highest state income tax rates in the nation. Our California paycheck calculator helps you understand exactly how much of your paycheck goes to federal and CA state taxes.',
            howItWorks: 'This calculator uses 2025 federal tax brackets and California\'s progressive state income tax rates (ranging from 1% to 13.3%) to calculate your take home pay. California also has State Disability Insurance (SDI) that may apply.',
            whyItMatters: 'With California\'s high tax burden, understanding your true take home pay is essential for budgeting and comparing job offers in different states.',
        },
        faq: [
            {
                question: 'What is California\'s state income tax rate?',
                answer: 'California has progressive tax rates ranging from 1% to 13.3%. The top rate of 13.3% applies to income over $1 million and is the highest state income tax in the U.S.',
            },
            {
                question: 'Does California have local income taxes?',
                answer: 'No, California does not have local or city income taxes. However, you do pay State Disability Insurance (SDI) at about 1% of wages.',
            },
            {
                question: 'How much will I pay in California taxes on $100,000?',
                answer: 'On a $100,000 salary in California, you can expect roughly 22-28% total taxes (federal + state), leaving you with approximately $72,000-78,000 take home pay.',
            },
        ],
        relatedCalculators: [
            { slug: 'paycheck-calculator-texas', title: 'Texas Paycheck Calculator' },
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
            { slug: 'salary-to-hourly-calculator', title: 'Salary to Hourly Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'paycheck-calculator-texas',
        title: 'Texas Paycheck Calculator 2025 | TX Take Home Pay (No State Tax)',
        description: 'Calculate your Texas paycheck with no state income tax. Free 2025 Texas paycheck calculator shows your take home pay after federal taxes only.',
        h1: 'Texas Paycheck Calculator',
        keywords: ['texas paycheck calculator', 'tx paycheck calculator', 'texas take home pay', 'texas no state income tax'],
        calculatorType: 'paycheckState',
        stateCode: 'TX',
        category: 'paycheck',
        priority: 10,
        inputs: [
            {
                id: 'grossPay',
                label: 'Gross Pay (per paycheck)',
                type: 'currency',
                placeholder: '3,000',
                defaultValue: 3000,
                required: true,
            },
            {
                id: 'payFrequency',
                label: 'Pay Frequency',
                type: 'select',
                options: [
                    { value: 'weekly', label: 'Weekly' },
                    { value: 'biweekly', label: 'Bi-weekly' },
                    { value: 'semimonthly', label: 'Semi-monthly' },
                    { value: 'monthly', label: 'Monthly' },
                ],
                defaultValue: 'biweekly',
                required: true,
            },
            {
                id: 'filingStatus',
                label: 'Filing Status',
                type: 'select',
                options: [
                    { value: 'single', label: 'Single' },
                    { value: 'married', label: 'Married Filing Jointly' },
                    { value: 'head_of_household', label: 'Head of Household' },
                ],
                defaultValue: 'single',
                required: true,
            },
            {
                id: 'retirement401k',
                label: '401(k) Contribution',
                type: 'currency',
                placeholder: '0',
                defaultValue: 0,
            },
        ],
        outputs: [
            { id: 'netPay', label: 'Take Home Pay', format: 'currency', highlight: true },
            { id: 'federalTax', label: 'Federal Tax', format: 'currency' },
            { id: 'stateTax', label: 'Texas State Tax', format: 'currency' },
            { id: 'socialSecurity', label: 'Social Security', format: 'currency' },
            { id: 'medicare', label: 'Medicare', format: 'currency' },
            { id: 'effectiveTaxRate', label: 'Effective Tax Rate', format: 'percentage' },
        ],
        content: {
            intro: 'Great news for Texas workers: The Lone Star State has no state income tax! Our Texas paycheck calculator shows you how much more you keep compared to high-tax states.',
            howItWorks: 'Since Texas has no state income tax, you only pay federal income tax and FICA taxes (Social Security and Medicare). This means Texans typically keep 5-10% more of their income compared to high-tax states like California.',
            whyItMatters: 'Texas is one of only 9 states with no income tax, making it an attractive option for workers looking to maximize take home pay.',
        },
        faq: [
            {
                question: 'Does Texas have state income tax?',
                answer: 'No, Texas has no state income tax. You only pay federal income tax and FICA taxes on your paycheck.',
            },
            {
                question: 'Why are Texas property taxes so high?',
                answer: 'Texas makes up for no income tax with higher property taxes (averaging 1.8% of home value), which are among the highest in the nation.',
            },
            {
                question: 'How much more do I keep in Texas vs California?',
                answer: 'On a $100,000 salary, you could keep roughly $5,000-$10,000 more per year in Texas compared to California due to no state income tax.',
            },
        ],
        relatedCalculators: [
            { slug: 'paycheck-calculator-california', title: 'California Paycheck Calculator' },
            { slug: 'paycheck-calculator-florida', title: 'Florida Paycheck Calculator' },
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'overtime-pay-calculator',
        title: 'Overtime Pay Calculator | Calculate Time and a Half & Double Time',
        description: 'Calculate your overtime pay including time and a half (1.5x) and double time (2x). Free overtime calculator for hourly employees.',
        h1: 'Overtime Pay Calculator',
        keywords: ['overtime pay calculator', 'time and a half calculator', 'overtime hours calculator', 'ot pay calculator'],
        calculatorType: 'overtime',
        category: 'overtime',
        priority: 9,
        inputs: [
            {
                id: 'regularHourlyRate',
                label: 'Regular Hourly Rate',
                type: 'currency',
                placeholder: '25.00',
                defaultValue: 25,
                required: true,
            },
            {
                id: 'overtimeHours',
                label: 'Overtime Hours',
                type: 'number',
                placeholder: '10',
                defaultValue: 10,
                min: 0,
                required: true,
            },
            {
                id: 'multiplier',
                label: 'Overtime Rate',
                type: 'select',
                options: [
                    { value: '1.5', label: 'Time and a Half (1.5x)' },
                    { value: '2', label: 'Double Time (2x)' },
                ],
                defaultValue: '1.5',
                required: true,
            },
        ],
        outputs: [
            { id: 'overtimePay', label: 'Total Overtime Pay', format: 'currency', highlight: true },
            { id: 'overtimeRate', label: 'Overtime Hourly Rate', format: 'currency' },
            { id: 'regularRate', label: 'Regular Rate', format: 'currency' },
        ],
        content: {
            intro: 'Under the Fair Labor Standards Act (FLSA), non-exempt employees must receive overtime pay for hours worked over 40 in a workweek at a rate of at least 1.5 times their regular rate.',
            howItWorks: 'This calculator multiplies your regular hourly rate by the overtime multiplier (1.5x for time and a half, 2x for double time) and then by your overtime hours to determine your total overtime earnings.',
            formula: 'Overtime Pay = Regular Rate × Multiplier × Overtime Hours',
            example: {
                description: 'If you earn $25/hour and work 10 hours of overtime at time and a half:',
                inputs: { regularHourlyRate: 25, overtimeHours: 10, multiplier: 1.5 },
                result: 'Your overtime rate is $37.50/hour, earning you $375 in overtime pay.',
            },
        },
        faq: [
            {
                question: 'What is time and a half?',
                answer: 'Time and a half means you earn 1.5 times your regular hourly rate for overtime hours. If you make $20/hour, your overtime rate is $30/hour.',
            },
            {
                question: 'When do I get double time?',
                answer: 'Double time is required in some states (like California for hours over 12 in a day) and may be offered by employers for holidays or weekends.',
            },
            {
                question: 'Who qualifies for overtime pay?',
                answer: 'Non-exempt employees under the FLSA qualify for overtime. Exempt employees (typically salaried professionals, executives, and administrators earning over $684/week) may not qualify.',
            },
        ],
        relatedCalculators: [
            { slug: 'time-and-a-half-calculator', title: 'Time and a Half Calculator' },
            { slug: 'hourly-to-salary-calculator', title: 'Hourly to Salary Calculator' },
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'pay-raise-calculator',
        title: 'Pay Raise Calculator | Calculate Your Salary Increase',
        description: 'Calculate how much more you\'ll earn with a pay raise. See your new salary, monthly increase, and hourly rate change with our free raise calculator.',
        h1: 'Pay Raise Calculator',
        keywords: ['pay raise calculator', 'salary increase calculator', 'raise percentage calculator', 'wage increase calculator'],
        calculatorType: 'payRaise',
        category: 'salary',
        priority: 8,
        inputs: [
            {
                id: 'currentSalary',
                label: 'Current Salary',
                type: 'currency',
                placeholder: '65,000',
                defaultValue: 65000,
                required: true,
            },
            {
                id: 'raisePercentage',
                label: 'Raise Percentage',
                type: 'number',
                placeholder: '5',
                defaultValue: 5,
                min: 0,
                max: 100,
                step: 0.1,
                required: true,
            },
        ],
        outputs: [
            { id: 'newSalary', label: 'New Salary', format: 'currency', highlight: true },
            { id: 'raiseAmount', label: 'Annual Increase', format: 'currency' },
            { id: 'monthlyIncrease', label: 'Monthly Increase', format: 'currency' },
        ],
        content: {
            intro: 'Negotiating a raise or got a promotion? Use our pay raise calculator to see exactly how much more you\'ll earn annually, monthly, and per paycheck.',
            howItWorks: 'Enter your current salary and the raise percentage to instantly see your new salary and how much extra you\'ll earn each month and year.',
            formula: 'New Salary = Current Salary × (1 + Raise Percentage / 100)',
            example: {
                description: 'If you currently earn $65,000 and receive a 5% raise:',
                inputs: { currentSalary: 65000, raisePercentage: 5 },
                result: 'Your new salary is $68,250, an increase of $3,250 per year or $270.83 per month.',
            },
        },
        faq: [
            {
                question: 'What is a good raise percentage?',
                answer: 'A typical annual raise is 3-5%, while a promotion often comes with a 10-20% increase. A "good" raise keeps pace with inflation (around 3-4%) while rewarding performance.',
            },
            {
                question: 'How do I calculate my raise percentage?',
                answer: 'Divide the difference between your new and old salary by your old salary, then multiply by 100. For example: ($70,000 - $65,000) ÷ $65,000 × 100 = 7.7%.',
            },
            {
                question: 'Should I negotiate for a raise or a one-time bonus?',
                answer: 'A raise is usually better because it compounds over time and affects future raises. A 5% raise continues to pay you more every year, while a bonus is a one-time payment.',
            },
        ],
        relatedCalculators: [
            { slug: 'salary-to-hourly-calculator', title: 'Salary to Hourly Calculator' },
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: '401k-calculator',
        title: '401(k) Contribution Calculator | See Your Tax Savings',
        description: 'Calculate how much to contribute to your 401(k) and see your tax savings. Understand the true cost of retirement contributions to your paycheck.',
        h1: '401(k) Contribution Calculator',
        keywords: ['401k calculator', '401k contribution calculator', '401k tax savings', 'retirement contribution calculator'],
        calculatorType: '401k',
        category: 'retirement',
        priority: 9,
        inputs: [
            {
                id: 'grossPay',
                label: 'Gross Pay (per paycheck)',
                type: 'currency',
                placeholder: '3,500',
                defaultValue: 3500,
                required: true,
            },
            {
                id: 'payFrequency',
                label: 'Pay Frequency',
                type: 'select',
                options: [
                    { value: 'biweekly', label: 'Bi-weekly' },
                    { value: 'semimonthly', label: 'Semi-monthly' },
                    { value: 'monthly', label: 'Monthly' },
                ],
                defaultValue: 'biweekly',
                required: true,
            },
            {
                id: 'contributionPercent',
                label: 'Contribution Percentage',
                type: 'number',
                placeholder: '6',
                defaultValue: 6,
                min: 0,
                max: 100,
                step: 1,
                required: true,
            },
            {
                id: 'filingStatus',
                label: 'Filing Status',
                type: 'select',
                options: [
                    { value: 'single', label: 'Single' },
                    { value: 'married', label: 'Married Filing Jointly' },
                ],
                defaultValue: 'single',
                required: true,
            },
            {
                id: 'state',
                label: 'State',
                type: 'select',
                options: [],
                defaultValue: 'CA',
                required: true,
            },
        ],
        outputs: [
            { id: 'contributionAmount', label: 'Contribution Amount (per paycheck)', format: 'currency', highlight: true },
            { id: 'annualContribution', label: 'Annual Contribution', format: 'currency' },
            { id: 'taxSavings', label: 'Annual Tax Savings', format: 'currency' },
            { id: 'actualCostPerPaycheck', label: 'Actual Cost to Your Paycheck', format: 'currency' },
        ],
        content: {
            intro: 'A 401(k) contribution doesn\'t cost as much as you think! Thanks to pre-tax deductions, your take home pay decreases by less than the amount you contribute.',
            howItWorks: 'When you contribute to a traditional 401(k), the money comes out before taxes are calculated. This means every dollar you contribute reduces your taxable income, resulting in immediate tax savings.',
            example: {
                description: 'Contributing 6% of a $3,500 biweekly paycheck:',
                inputs: { grossPay: 3500, contributionPercent: 6, payFrequency: 'biweekly' },
                result: 'Your $210 contribution only reduces your take home pay by about $150-170 (depending on your tax bracket), saving you $40-60 in taxes each paycheck.',
            },
        },
        faq: [
            {
                question: 'What is the 401(k) contribution limit for 2025?',
                answer: 'The 2025 employee contribution limit is $23,000, or $30,500 if you\'re 50 or older (catch-up contribution).',
            },
            {
                question: 'Should I contribute to 401(k) or Roth IRA?',
                answer: 'Traditional 401(k) is better if you expect to be in a lower tax bracket in retirement. Roth contributions are better if you expect higher taxes later. Many people do both.',
            },
            {
                question: 'How much should I contribute to my 401(k)?',
                answer: 'At minimum, contribute enough to get your full employer match (typically 3-6%). Aim for 10-15% of income if possible for a comfortable retirement.',
            },
        ],
        relatedCalculators: [
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
            { slug: 'bonus-tax-calculator', title: 'Bonus Tax Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'bonus-tax-calculator',
        title: 'Bonus Tax Calculator 2025 | How Much Tax on Bonus',
        description: 'Calculate how much of your bonus you\'ll actually keep after taxes. Understand bonus withholding rates and take home pay on bonuses.',
        h1: 'Bonus Tax Calculator',
        keywords: ['bonus tax calculator', 'bonus withholding calculator', 'how much tax on bonus', 'bonus after tax calculator'],
        calculatorType: 'bonusTax',
        category: 'tax',
        priority: 8,
        inputs: [
            {
                id: 'bonusAmount',
                label: 'Bonus Amount',
                type: 'currency',
                placeholder: '5,000',
                defaultValue: 5000,
                required: true,
            },
            {
                id: 'filingStatus',
                label: 'Filing Status',
                type: 'select',
                options: [
                    { value: 'single', label: 'Single' },
                    { value: 'married', label: 'Married Filing Jointly' },
                ],
                defaultValue: 'single',
                required: true,
            },
            {
                id: 'state',
                label: 'State',
                type: 'select',
                options: [],
                defaultValue: 'CA',
                required: true,
            },
            {
                id: 'annualSalary',
                label: 'Annual Base Salary',
                type: 'currency',
                placeholder: '75,000',
                defaultValue: 75000,
                helperText: 'For Social Security cap calculation',
                required: true,
            },
        ],
        outputs: [
            { id: 'netBonus', label: 'After-Tax Bonus', format: 'currency', highlight: true },
            { id: 'federalWithholding', label: 'Federal Tax (22% flat)', format: 'currency' },
            { id: 'stateWithholding', label: 'State Tax', format: 'currency' },
            { id: 'socialSecurity', label: 'Social Security', format: 'currency' },
            { id: 'medicare', label: 'Medicare', format: 'currency' },
            { id: 'effectiveRate', label: 'Effective Tax Rate', format: 'percentage' },
        ],
        content: {
            intro: 'Bonuses are taxed differently than regular wages. The IRS requires employers to withhold a flat 22% for federal taxes on bonuses up to $1 million, plus state taxes and FICA.',
            howItWorks: 'Most employers use the "percentage method" which withholds 22% for federal tax (flat rate for supplemental wages under $1M), plus your state\'s supplemental wage rate, Social Security, and Medicare.',
            formula: 'Net Bonus = Bonus - Federal (22%) - State Tax - Social Security (6.2%) - Medicare (1.45%)',
            example: {
                description: 'A $5,000 bonus for someone in California:',
                inputs: { bonusAmount: 5000, state: 'CA' },
                result: 'You\'ll receive approximately $3,300-3,500 after all taxes, depending on your filing status.',
            },
        },
        faq: [
            {
                question: 'Why is my bonus taxed so high?',
                answer: 'Bonuses use a flat 22% federal withholding rate, which may be higher or lower than your regular rate. You\'ll reconcile the difference when you file your tax return.',
            },
            {
                question: 'Will I get bonus taxes back?',
                answer: 'If the 22% flat rate is higher than your actual tax bracket, you\'ll get a refund when you file. If it\'s lower, you may owe additional tax.',
            },
            {
                question: 'Is there a way to reduce bonus taxes?',
                answer: 'You can request that your employer apply the bonus to a month with higher 401(k) contributions, or contribute the bonus directly to retirement accounts where allowed.',
            },
        ],
        relatedCalculators: [
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
            { slug: '401k-calculator', title: '401(k) Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'freelance-hourly-rate-calculator',
        title: 'Freelance Hourly Rate Calculator | What to Charge Clients',
        description: 'Calculate your ideal freelance hourly rate based on desired income, expenses, and billable hours. Know what to charge to hit your income goals.',
        h1: 'Freelance Hourly Rate Calculator',
        keywords: ['freelance rate calculator', 'freelance hourly rate', 'what to charge freelance', 'consulting rate calculator'],
        calculatorType: 'freelanceRate',
        category: 'freelance',
        priority: 7,
        inputs: [
            {
                id: 'desiredAnnualIncome',
                label: 'Desired Annual Income',
                type: 'currency',
                placeholder: '100,000',
                defaultValue: 100000,
                helperText: 'What you want to take home',
                required: true,
            },
            {
                id: 'billableHoursPerWeek',
                label: 'Billable Hours Per Week',
                type: 'number',
                placeholder: '25',
                defaultValue: 25,
                min: 1,
                max: 60,
                helperText: 'Typically 50-60% of work time is billable',
                required: true,
            },
            {
                id: 'weeksWorkedPerYear',
                label: 'Weeks Worked Per Year',
                type: 'number',
                placeholder: '48',
                defaultValue: 48,
                min: 1,
                max: 52,
                helperText: 'Account for vacation and sick days',
                required: true,
            },
            {
                id: 'overheadPercentage',
                label: 'Overhead Percentage',
                type: 'number',
                placeholder: '30',
                defaultValue: 30,
                min: 0,
                max: 100,
                helperText: 'Self-employment tax, insurance, software, etc.',
                required: true,
            },
        ],
        outputs: [
            { id: 'suggestedHourlyRate', label: 'Suggested Hourly Rate', format: 'currency', highlight: true },
            { id: 'minimumHourlyRate', label: 'Minimum Rate (no profit margin)', format: 'currency' },
            { id: 'annualBillableHours', label: 'Annual Billable Hours', format: 'number' },
            { id: 'overhead', label: 'Annual Overhead', format: 'currency' },
        ],
        content: {
            intro: 'Most freelancers undercharge. This calculator helps you set a rate that covers your desired income, taxes, benefits, and business expenses  with a profit margin built in.',
            howItWorks: 'The calculator factors in your income goal, realistic billable hours (not all work time is billable), overhead costs like self-employment tax and insurance, and adds a profit margin to ensure sustainability.',
            example: {
                description: 'To earn $100,000/year working 25 billable hours/week for 48 weeks:',
                inputs: { desiredAnnualIncome: 100000, billableHoursPerWeek: 25, weeksWorkedPerYear: 48, overheadPercentage: 30 },
                result: 'You should charge at least $108/hour minimum, or $130/hour with a 20% profit margin.',
            },
        },
        faq: [
            {
                question: 'Why can\'t I just double my old hourly employee rate?',
                answer: 'As an employee, your employer paid half of FICA taxes, health insurance, vacation, and other benefits. As a freelancer, you cover all of this yourself  often 30-50% of your rate.',
            },
            {
                question: 'What percentage of my time is billable?',
                answer: 'Most freelancers can only bill 50-70% of their work hours. The rest goes to admin, marketing, sales calls, and other non-billable work.',
            },
            {
                question: 'How often should I raise my rates?',
                answer: 'Consider raising rates annually (5-10%) for existing clients, and always charge new clients your current market rate. As you gain experience, your rates should increase.',
            },
        ],
        relatedCalculators: [
            { slug: 'salary-to-hourly-calculator', title: 'Salary to Hourly Calculator' },
            { slug: 'contractor-vs-employee-calculator', title: 'Contractor vs Employee Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },

    // ============================================
    // STATE-SPECIFIC PAYCHECK CALCULATORS
    // ============================================
    {
        slug: 'paycheck-calculator-florida',
        title: 'Florida Paycheck Calculator 2025 | FL Take Home Pay',
        description: 'Calculate your Florida paycheck and take-home pay. Florida has no state income tax, so you keep more of your earnings. Free FL paycheck calculator for 2025.',
        h1: 'Florida Paycheck Calculator',
        keywords: ['florida paycheck calculator', 'fl paycheck calculator', 'florida take home pay', 'florida salary calculator', 'florida no income tax'],
        calculatorType: 'paycheckState',
        stateCode: 'FL',
        category: 'paycheck',
        priority: 9,
        inputs: [
            { id: 'grossPay', label: 'Gross Pay Per Period', type: 'currency', placeholder: '3,000', defaultValue: 3000, min: 0, required: true },
            { id: 'payFrequency', label: 'Pay Frequency', type: 'select', defaultValue: 'biweekly', options: payFrequencyOptions },
            { id: 'filingStatus', label: 'Filing Status', type: 'select', defaultValue: 'single', options: filingStatusOptions },
            { id: 'retirement401k', label: '401(k) Contribution', type: 'currency', placeholder: '0', defaultValue: 0, min: 0, helperText: 'Per paycheck pre-tax contribution' },
        ],
        outputs: [
            { id: 'netPay', label: 'Net Pay (Take Home)', format: 'currency', highlight: true },
            { id: 'federalTax', label: 'Federal Tax', format: 'currency' },
            { id: 'stateTax', label: 'State Tax (FL)', format: 'currency' },
            { id: 'socialSecurity', label: 'Social Security', format: 'currency' },
            { id: 'medicare', label: 'Medicare', format: 'currency' },
            { id: 'effectiveTaxRate', label: 'Effective Tax Rate', format: 'percentage' },
        ],
        content: {
            intro: 'Florida is one of nine states with no state income tax, making it a popular destination for workers seeking to maximize their take-home pay. Our Florida paycheck calculator shows you exactly what you\'ll keep after federal taxes and FICA deductions.',
            howItWorks: 'Since Florida has no state income tax, the only deductions from your paycheck are federal income tax, Social Security (6.2%), and Medicare (1.45%). This calculator uses 2025 federal tax brackets and FICA rates to estimate your net pay accurately.',
            whyItMatters: 'Living in Florida means more money in your pocket. With no state income tax, Florida residents can save thousands annually compared to high-tax states like California or New York. Understanding your take-home pay helps you budget effectively and appreciate the financial benefits of Sunshine State residency.',
        },
        faq: [
            { question: 'Does Florida have state income tax?', answer: 'No. Florida is one of nine states with no state income tax. You only pay federal income tax and FICA taxes (Social Security and Medicare).' },
            { question: 'What taxes do Florida residents pay?', answer: 'Florida residents pay federal income tax (10-37% based on income), Social Security (6.2% up to $168,600 in 2025), and Medicare (1.45%, plus 0.9% on income over $200,000).' },
            { question: 'Is Florida a good state to work in financially?', answer: 'Yes. Due to no state income tax, Florida workers can keep 5-10% more of their gross pay compared to states like California, New York, or New Jersey.' },
        ],
        relatedCalculators: [
            { slug: 'paycheck-calculator-texas', title: 'Texas Paycheck Calculator' },
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'paycheck-calculator-new-york',
        title: 'New York Paycheck Calculator 2025 | NY Take Home Pay',
        description: 'Calculate your New York paycheck and take-home pay after federal, state, and city taxes. Free NY paycheck calculator with accurate 2025 tax rates.',
        h1: 'New York Paycheck Calculator',
        keywords: ['new york paycheck calculator', 'ny paycheck calculator', 'new york take home pay', 'nyc paycheck calculator', 'new york salary after taxes'],
        calculatorType: 'paycheckState',
        stateCode: 'NY',
        category: 'paycheck',
        priority: 9,
        inputs: [
            { id: 'grossPay', label: 'Gross Pay Per Period', type: 'currency', placeholder: '4,000', defaultValue: 4000, min: 0, required: true },
            { id: 'payFrequency', label: 'Pay Frequency', type: 'select', defaultValue: 'biweekly', options: payFrequencyOptions },
            { id: 'filingStatus', label: 'Filing Status', type: 'select', defaultValue: 'single', options: filingStatusOptions },
            { id: 'retirement401k', label: '401(k) Contribution', type: 'currency', placeholder: '0', defaultValue: 0, min: 0, helperText: 'Per paycheck pre-tax contribution' },
        ],
        outputs: [
            { id: 'netPay', label: 'Net Pay (Take Home)', format: 'currency', highlight: true },
            { id: 'federalTax', label: 'Federal Tax', format: 'currency' },
            { id: 'stateTax', label: 'State Tax (NY)', format: 'currency' },
            { id: 'socialSecurity', label: 'Social Security', format: 'currency' },
            { id: 'medicare', label: 'Medicare', format: 'currency' },
            { id: 'effectiveTaxRate', label: 'Effective Tax Rate', format: 'percentage' },
        ],
        content: {
            intro: 'New York has some of the highest income taxes in the nation, with state rates up to 10.9% and additional NYC taxes for city residents. Our New York paycheck calculator helps you understand your actual take-home pay after all deductions.',
            howItWorks: 'This calculator applies 2025 federal tax brackets, New York State income tax rates (4-10.9%), and FICA taxes. If you live in New York City, you may owe additional city income tax of 3.078-3.876%.',
            whyItMatters: 'New York\'s high taxes significantly impact take-home pay. A $100,000 salary in NYC can result in $65,000-70,000 after taxes. Understanding your net pay helps you budget for the city\'s high cost of living.',
        },
        faq: [
            { question: 'What is the New York State income tax rate?', answer: 'New York State income tax rates range from 4% to 10.9% for the highest earners (over $25 million). Most workers fall in the 5.5-6.85% brackets.' },
            { question: 'Do I have to pay NYC taxes if I work remotely?', answer: 'If you live in NYC, you pay NYC income tax regardless of where you work. If you live outside NYC but work in the city, you may still owe NYC taxes under certain circumstances.' },
            { question: 'Why is my New York paycheck so low?', answer: 'New York has high state income taxes (up to 10.9%), NYC has additional city taxes (up to 3.876%), plus federal and FICA taxes. Combined effective rates can exceed 40%.' },
        ],
        relatedCalculators: [
            { slug: 'paycheck-calculator-california', title: 'California Paycheck Calculator' },
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'paycheck-calculator-illinois',
        title: 'Illinois Paycheck Calculator 2025 | IL Take Home Pay',
        description: 'Calculate your Illinois paycheck and take-home pay. Illinois has a flat 4.95% state income tax. Free IL paycheck calculator for 2025.',
        h1: 'Illinois Paycheck Calculator',
        keywords: ['illinois paycheck calculator', 'il paycheck calculator', 'illinois take home pay', 'chicago paycheck calculator', 'illinois salary calculator'],
        calculatorType: 'paycheckState',
        stateCode: 'IL',
        category: 'paycheck',
        priority: 8,
        inputs: [
            { id: 'grossPay', label: 'Gross Pay Per Period', type: 'currency', placeholder: '3,000', defaultValue: 3000, min: 0, required: true },
            { id: 'payFrequency', label: 'Pay Frequency', type: 'select', defaultValue: 'biweekly', options: payFrequencyOptions },
            { id: 'filingStatus', label: 'Filing Status', type: 'select', defaultValue: 'single', options: filingStatusOptions },
            { id: 'retirement401k', label: '401(k) Contribution', type: 'currency', placeholder: '0', defaultValue: 0, min: 0, helperText: 'Per paycheck pre-tax contribution' },
        ],
        outputs: [
            { id: 'netPay', label: 'Net Pay (Take Home)', format: 'currency', highlight: true },
            { id: 'federalTax', label: 'Federal Tax', format: 'currency' },
            { id: 'stateTax', label: 'State Tax (IL)', format: 'currency' },
            { id: 'socialSecurity', label: 'Social Security', format: 'currency' },
            { id: 'medicare', label: 'Medicare', format: 'currency' },
            { id: 'effectiveTaxRate', label: 'Effective Tax Rate', format: 'percentage' },
        ],
        content: {
            intro: 'Illinois uses a flat income tax rate of 4.95% on all taxable income. Our Illinois paycheck calculator shows your take-home pay after federal taxes, state taxes, and FICA deductions.',
            howItWorks: 'The calculator applies the Illinois flat tax rate of 4.95%, 2025 federal tax brackets, and FICA taxes (Social Security 6.2%, Medicare 1.45%) to estimate your net pay.',
            whyItMatters: 'Illinois\'s flat tax simplifies calculations  you pay 4.95% regardless of income level. However, combined with federal taxes and FICA, effective rates can reach 30-40% for higher earners.',
        },
        faq: [
            { question: 'What is the Illinois state income tax rate?', answer: 'Illinois has a flat income tax rate of 4.95% on all taxable income, regardless of how much you earn.' },
            { question: 'Does Illinois have city or local income taxes?', answer: 'No. Unlike some states, Illinois does not allow local municipalities to levy income taxes. Only the state and federal government tax your income.' },
            { question: 'Is Illinois a high-tax state?', answer: 'Moderately. While the 4.95% flat rate is lower than top rates in California or New York, Illinois has high property taxes and sales taxes.' },
        ],
        relatedCalculators: [
            { slug: 'paycheck-calculator-texas', title: 'Texas Paycheck Calculator' },
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'paycheck-calculator-pennsylvania',
        title: 'Pennsylvania Paycheck Calculator 2025 | PA Take Home Pay',
        description: 'Calculate your Pennsylvania paycheck and take-home pay. PA has a flat 3.07% state income tax plus local taxes. Free PA paycheck calculator for 2025.',
        h1: 'Pennsylvania Paycheck Calculator',
        keywords: ['pennsylvania paycheck calculator', 'pa paycheck calculator', 'pennsylvania take home pay', 'philadelphia paycheck calculator', 'pa salary calculator'],
        calculatorType: 'paycheckState',
        stateCode: 'PA',
        category: 'paycheck',
        priority: 8,
        inputs: [
            { id: 'grossPay', label: 'Gross Pay Per Period', type: 'currency', placeholder: '3,000', defaultValue: 3000, min: 0, required: true },
            { id: 'payFrequency', label: 'Pay Frequency', type: 'select', defaultValue: 'biweekly', options: payFrequencyOptions },
            { id: 'filingStatus', label: 'Filing Status', type: 'select', defaultValue: 'single', options: filingStatusOptions },
            { id: 'retirement401k', label: '401(k) Contribution', type: 'currency', placeholder: '0', defaultValue: 0, min: 0, helperText: 'Per paycheck pre-tax contribution' },
        ],
        outputs: [
            { id: 'netPay', label: 'Net Pay (Take Home)', format: 'currency', highlight: true },
            { id: 'federalTax', label: 'Federal Tax', format: 'currency' },
            { id: 'stateTax', label: 'State Tax (PA)', format: 'currency' },
            { id: 'socialSecurity', label: 'Social Security', format: 'currency' },
            { id: 'medicare', label: 'Medicare', format: 'currency' },
            { id: 'effectiveTaxRate', label: 'Effective Tax Rate', format: 'percentage' },
        ],
        content: {
            intro: 'Pennsylvania has one of the lowest flat state income tax rates at 3.07%. However, many municipalities add local Earned Income Tax (EIT). Our PA paycheck calculator helps you estimate your take-home pay.',
            howItWorks: 'This calculator applies Pennsylvania\'s flat 3.07% state income tax, federal tax brackets, and FICA taxes to your gross pay. Note: Local EIT varies by municipality and is not included.',
            whyItMatters: 'Pennsylvania\'s low flat rate is advantageous, but local taxes can add 1-3% depending on where you live and work. Philadelphia residents pay an additional 3.75% city wage tax.',
        },
        faq: [
            { question: 'What is the Pennsylvania state income tax rate?', answer: 'Pennsylvania has a flat state income tax rate of 3.07% on all taxable income.' },
            { question: 'Does Philadelphia have a city income tax?', answer: 'Yes. Philadelphia residents pay an additional 3.75% city wage tax. Non-residents working in Philadelphia pay 3.44%.' },
            { question: 'What is Pennsylvania local EIT?', answer: 'The Earned Income Tax (EIT) is a local tax collected by municipalities, typically 1-3% of earned income. It varies by where you live and work.' },
        ],
        relatedCalculators: [
            { slug: 'paycheck-calculator-new-york', title: 'New York Paycheck Calculator' },
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'paycheck-calculator-ohio',
        title: 'Ohio Paycheck Calculator 2025 | OH Take Home Pay',
        description: 'Calculate your Ohio paycheck and take-home pay after state, local, and federal taxes. Free OH paycheck calculator with 2025 tax rates.',
        h1: 'Ohio Paycheck Calculator',
        keywords: ['ohio paycheck calculator', 'oh paycheck calculator', 'ohio take home pay', 'columbus paycheck calculator', 'ohio salary calculator'],
        calculatorType: 'paycheckState',
        stateCode: 'OH',
        category: 'paycheck',
        priority: 7,
        inputs: [
            { id: 'grossPay', label: 'Gross Pay Per Period', type: 'currency', placeholder: '2,800', defaultValue: 2800, min: 0, required: true },
            { id: 'payFrequency', label: 'Pay Frequency', type: 'select', defaultValue: 'biweekly', options: payFrequencyOptions },
            { id: 'filingStatus', label: 'Filing Status', type: 'select', defaultValue: 'single', options: filingStatusOptions },
            { id: 'retirement401k', label: '401(k) Contribution', type: 'currency', placeholder: '0', defaultValue: 0, min: 0, helperText: 'Per paycheck pre-tax contribution' },
        ],
        outputs: [
            { id: 'netPay', label: 'Net Pay (Take Home)', format: 'currency', highlight: true },
            { id: 'federalTax', label: 'Federal Tax', format: 'currency' },
            { id: 'stateTax', label: 'State Tax (OH)', format: 'currency' },
            { id: 'socialSecurity', label: 'Social Security', format: 'currency' },
            { id: 'medicare', label: 'Medicare', format: 'currency' },
            { id: 'effectiveTaxRate', label: 'Effective Tax Rate', format: 'percentage' },
        ],
        content: {
            intro: 'Ohio uses a graduated state income tax with rates ranging from 0% to 3.75%. Our Ohio paycheck calculator estimates your take-home pay after all applicable taxes.',
            howItWorks: 'The calculator applies Ohio\'s progressive tax brackets (0-3.75%), federal income tax, and FICA taxes. Many Ohio cities also levy local income taxes of 1-2.5%.',
            whyItMatters: 'Ohio\'s tax structure is moderate compared to neighboring states. Understanding your net pay helps you plan for the cost of living in cities like Columbus, Cleveland, or Cincinnati.',
        },
        faq: [
            { question: 'What are Ohio state income tax rates?', answer: 'Ohio uses graduated rates: 0% on first $26,050, then 2.75% up to $100,000, and 3.75% on income above $100,000 (2025 rates).' },
            { question: 'Do Ohio cities have income tax?', answer: 'Yes. Many Ohio cities levy local income taxes, typically 1-2.5%. Columbus is 2.5%, Cleveland is 2.5%, Cincinnati is 1.8%.' },
            { question: 'Is Ohio a low-tax state?', answer: 'Ohio is moderate. State rates are relatively low (max 3.75%), but local income taxes can add significant additional burden.' },
        ],
        relatedCalculators: [
            { slug: 'paycheck-calculator-pennsylvania', title: 'Pennsylvania Paycheck Calculator' },
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'paycheck-calculator-georgia',
        title: 'Georgia Paycheck Calculator 2025 | GA Take Home Pay',
        description: 'Calculate your Georgia paycheck and take-home pay. Georgia now has a flat 5.49% state income tax. Free GA paycheck calculator for 2025.',
        h1: 'Georgia Paycheck Calculator',
        keywords: ['georgia paycheck calculator', 'ga paycheck calculator', 'georgia take home pay', 'atlanta paycheck calculator', 'georgia salary calculator'],
        calculatorType: 'paycheckState',
        stateCode: 'GA',
        category: 'paycheck',
        priority: 8,
        inputs: [
            { id: 'grossPay', label: 'Gross Pay Per Period', type: 'currency', placeholder: '3,000', defaultValue: 3000, min: 0, required: true },
            { id: 'payFrequency', label: 'Pay Frequency', type: 'select', defaultValue: 'biweekly', options: payFrequencyOptions },
            { id: 'filingStatus', label: 'Filing Status', type: 'select', defaultValue: 'single', options: filingStatusOptions },
            { id: 'retirement401k', label: '401(k) Contribution', type: 'currency', placeholder: '0', defaultValue: 0, min: 0, helperText: 'Per paycheck pre-tax contribution' },
        ],
        outputs: [
            { id: 'netPay', label: 'Net Pay (Take Home)', format: 'currency', highlight: true },
            { id: 'federalTax', label: 'Federal Tax', format: 'currency' },
            { id: 'stateTax', label: 'State Tax (GA)', format: 'currency' },
            { id: 'socialSecurity', label: 'Social Security', format: 'currency' },
            { id: 'medicare', label: 'Medicare', format: 'currency' },
            { id: 'effectiveTaxRate', label: 'Effective Tax Rate', format: 'percentage' },
        ],
        content: {
            intro: 'Georgia transitioned to a flat income tax in 2025, with a rate of 5.49% (decreasing to 4.99% by 2029). Our Georgia paycheck calculator shows your take-home pay after all deductions.',
            howItWorks: 'The calculator applies Georgia\'s flat 5.49% state tax rate, federal tax brackets, and FICA taxes to estimate your net pay.',
            whyItMatters: 'Georgia\'s move to a flat tax simplifies calculations. With Atlanta\'s booming job market and no local income taxes, Georgia offers competitive take-home pay for workers in the Southeast.',
        },
        faq: [
            { question: 'What is the Georgia state income tax rate?', answer: 'Georgia now has a flat income tax rate of 5.49% for 2025, scheduled to decrease annually to 4.99% by 2029.' },
            { question: 'Does Atlanta have a city income tax?', answer: 'No. Georgia does not allow local income taxes, so Atlanta and other cities cannot add additional income taxes to your paycheck.' },
            { question: 'How does Georgia compare to Florida for taxes?', answer: 'Florida has no state income tax, so workers keep about 5% more of their gross pay. However, Georgia has a lower cost of living in many areas.' },
        ],
        relatedCalculators: [
            { slug: 'paycheck-calculator-florida', title: 'Florida Paycheck Calculator' },
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'paycheck-calculator-washington',
        title: 'Washington State Paycheck Calculator 2025 | WA Take Home Pay',
        description: 'Calculate your Washington State paycheck and take-home pay. Washington has no state income tax. Free WA paycheck calculator for 2025.',
        h1: 'Washington State Paycheck Calculator',
        keywords: ['washington paycheck calculator', 'wa paycheck calculator', 'washington state take home pay', 'seattle paycheck calculator', 'washington no income tax'],
        calculatorType: 'paycheckState',
        stateCode: 'WA',
        category: 'paycheck',
        priority: 8,
        inputs: [
            { id: 'grossPay', label: 'Gross Pay Per Period', type: 'currency', placeholder: '4,000', defaultValue: 4000, min: 0, required: true },
            { id: 'payFrequency', label: 'Pay Frequency', type: 'select', defaultValue: 'biweekly', options: payFrequencyOptions },
            { id: 'filingStatus', label: 'Filing Status', type: 'select', defaultValue: 'single', options: filingStatusOptions },
            { id: 'retirement401k', label: '401(k) Contribution', type: 'currency', placeholder: '0', defaultValue: 0, min: 0, helperText: 'Per paycheck pre-tax contribution' },
        ],
        outputs: [
            { id: 'netPay', label: 'Net Pay (Take Home)', format: 'currency', highlight: true },
            { id: 'federalTax', label: 'Federal Tax', format: 'currency' },
            { id: 'stateTax', label: 'State Tax (WA)', format: 'currency' },
            { id: 'socialSecurity', label: 'Social Security', format: 'currency' },
            { id: 'medicare', label: 'Medicare', format: 'currency' },
            { id: 'effectiveTaxRate', label: 'Effective Tax Rate', format: 'percentage' },
        ],
        content: {
            intro: 'Washington State is one of nine states with no state income tax, making it attractive for high earners. Our WA paycheck calculator shows your take-home pay after federal taxes and FICA.',
            howItWorks: 'Since Washington has no state income tax, the only deductions are federal income tax and FICA taxes. This calculator applies 2025 federal tax brackets to estimate your net pay.',
            whyItMatters: 'Tech workers in Seattle particularly benefit from Washington\'s no-income-tax policy. A software engineer earning $200,000 saves $10,000+ annually compared to California.',
        },
        faq: [
            { question: 'Does Washington State have income tax?', answer: 'No. Washington is one of nine states with no state income tax on wages. You only pay federal income tax and FICA taxes.' },
            { question: 'What about Washington capital gains tax?', answer: 'Washington has a 7% capital gains tax on gains over $250,000 from stocks and bonds, but this does not apply to wages.' },
            { question: 'Is Washington good for remote workers?', answer: 'Yes. With no state income tax and a strong job market, Washington is excellent for remote workers, especially in tech.' },
        ],
        relatedCalculators: [
            { slug: 'paycheck-calculator-texas', title: 'Texas Paycheck Calculator' },
            { slug: 'paycheck-calculator-florida', title: 'Florida Paycheck Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },

    // ============================================
    // NICHE SALARY KEYWORD PAGES
    // ============================================
    {
        slug: 'biweekly-paycheck-calculator',
        title: 'Biweekly Paycheck Calculator 2025 | Calculate Your Bi-Weekly Pay',
        description: 'Calculate your biweekly paycheck after taxes. Enter your gross pay to see your net take-home pay for your bi-weekly paycheck.',
        h1: 'Biweekly Paycheck Calculator',
        keywords: ['biweekly paycheck calculator', 'bi-weekly paycheck calculator', 'biweekly pay calculator', '26 paychecks per year', 'biweekly take home pay'],
        calculatorType: 'paycheck',
        category: 'paycheck',
        priority: 8,
        inputs: [
            { id: 'grossPay', label: 'Biweekly Gross Pay', type: 'currency', placeholder: '2,885', defaultValue: 2885, min: 0, required: true },
            { id: 'payFrequency', label: 'Pay Frequency', type: 'select', defaultValue: 'biweekly', options: payFrequencyOptions },
            { id: 'filingStatus', label: 'Filing Status', type: 'select', defaultValue: 'single', options: filingStatusOptions },
            { id: 'state', label: 'State', type: 'select', defaultValue: 'CA', required: true },
            { id: 'retirement401k', label: '401(k) Contribution', type: 'currency', placeholder: '0', defaultValue: 0, min: 0, helperText: 'Per paycheck pre-tax contribution' },
        ],
        outputs: [
            { id: 'netPay', label: 'Net Biweekly Pay', format: 'currency', highlight: true },
            { id: 'federalTax', label: 'Federal Tax', format: 'currency' },
            { id: 'stateTax', label: 'State Tax', format: 'currency' },
            { id: 'socialSecurity', label: 'Social Security', format: 'currency' },
            { id: 'medicare', label: 'Medicare', format: 'currency' },
        ],
        content: {
            intro: 'Paid every two weeks? Our biweekly paycheck calculator shows your take-home pay after taxes for each of your 26 annual paychecks.',
            howItWorks: 'Biweekly pay means 26 paychecks per year (every 14 days). This calculator converts your biweekly gross to annual, applies tax brackets, then shows your per-paycheck deductions.',
            whyItMatters: 'Biweekly is the most common pay schedule in the US. Understanding your exact take-home pay helps with budgeting, especially during months with 3 paychecks.',
        },
        faq: [
            { question: 'How many biweekly paychecks are there per year?', answer: '26 paychecks. Biweekly means every 14 days, which works out to 26 pay periods annually (52 weeks ÷ 2).' },
            { question: 'What is the difference between biweekly and semi-monthly?', answer: 'Biweekly is every 2 weeks (26 paychecks/year). Semi-monthly is twice per month on fixed dates (24 paychecks/year).' },
            { question: 'Which months have 3 biweekly paychecks?', answer: 'Two months per year have 3 biweekly paychecks. The specific months depend on your pay schedule start date.' },
        ],
        relatedCalculators: [
            { slug: 'take-home-pay-calculator', title: 'Take Home Pay Calculator' },
            { slug: 'salary-to-hourly-calculator', title: 'Salary to Hourly Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'self-employment-tax-calculator',
        title: 'Self-Employment Tax Calculator 2025 | Calculate SE Tax',
        description: 'Calculate your self-employment tax for 2025. See how much you owe in Social Security and Medicare taxes as a freelancer or contractor.',
        h1: 'Self-Employment Tax Calculator',
        keywords: ['self employment tax calculator', 'se tax calculator', 'self employed taxes', 'freelance tax calculator', '1099 tax calculator', 'contractor tax calculator'],
        calculatorType: 'freelanceRate',
        category: 'freelance',
        priority: 9,
        inputs: [
            { id: 'desiredAnnualIncome', label: 'Net Self-Employment Income', type: 'currency', placeholder: '100,000', defaultValue: 100000, min: 0, required: true },
            { id: 'billableHoursPerWeek', label: 'Hours Per Week', type: 'number', placeholder: '40', defaultValue: 40, min: 1, max: 80 },
            { id: 'weeksWorkedPerYear', label: 'Weeks Per Year', type: 'number', placeholder: '50', defaultValue: 50, min: 1, max: 52 },
            { id: 'overheadPercentage', label: 'Business Expense %', type: 'number', placeholder: '20', defaultValue: 20, min: 0, max: 100 },
        ],
        outputs: [
            { id: 'hourlyRate', label: 'Implied Hourly Rate', format: 'currency', highlight: true },
            { id: 'minimumHourlyRate', label: 'Minimum Rate (No Profit)', format: 'currency' },
            { id: 'annualBillableHours', label: 'Annual Billable Hours', format: 'number' },
        ],
        content: {
            intro: 'Self-employed individuals pay both the employer and employee portions of Social Security and Medicare taxes  a combined 15.3%. Our calculator helps you understand this obligation.',
            howItWorks: 'The self-employment tax is 15.3% on net earnings (12.4% Social Security up to $168,600, plus 2.9% Medicare). You can deduct half of SE tax from your income tax.',
            whyItMatters: 'Many freelancers are surprised by their SE tax bill. A $100,000 net income results in roughly $14,130 in self-employment tax alone, before income taxes.',
        },
        faq: [
            { question: 'What is the self-employment tax rate?', answer: '15.3% total: 12.4% for Social Security (on first $168,600) and 2.9% for Medicare. Additional 0.9% Medicare on income over $200,000.' },
            { question: 'Can I deduct self-employment tax?', answer: 'You can deduct the employer-equivalent portion (50%) of SE tax from your adjusted gross income, reducing your income tax.' },
            { question: 'Do I pay SE tax on all my income?', answer: 'You pay SE tax on 92.35% of your net self-employment income. This adjustment reflects the employer portion deduction.' },
        ],
        relatedCalculators: [
            { slug: 'freelance-hourly-rate-calculator', title: 'Freelance Rate Calculator' },
            { slug: 'bonus-tax-calculator', title: 'Bonus Tax Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    {
        slug: 'time-and-a-half-calculator',
        title: 'Time and a Half Calculator 2025 | Calculate 1.5x Overtime Pay',
        description: 'Calculate your time and a half overtime pay. Enter your regular hourly rate to see your 1.5x overtime rate and total earnings.',
        h1: 'Time and a Half Calculator',
        keywords: ['time and a half calculator', '1.5x overtime calculator', 'time and half pay', 'overtime pay calculator', '1.5 overtime rate'],
        calculatorType: 'overtime',
        category: 'overtime',
        priority: 8,
        inputs: [
            { id: 'regularHourlyRate', label: 'Regular Hourly Rate', type: 'currency', placeholder: '20', defaultValue: 20, min: 0, required: true },
            { id: 'overtimeHours', label: 'Overtime Hours', type: 'number', placeholder: '10', defaultValue: 10, min: 0, max: 168, required: true },
            { id: 'multiplier', label: 'Overtime Multiplier', type: 'number', placeholder: '1.5', defaultValue: 1.5, min: 1, max: 3, step: 0.1 },
        ],
        outputs: [
            { id: 'overtimePay', label: 'Overtime Pay', format: 'currency', highlight: true },
            { id: 'overtimeRate', label: 'Overtime Rate (1.5x)', format: 'currency' },
            { id: 'regularPay', label: 'Regular Pay (40 hrs)', format: 'currency' },
            { id: 'totalPay', label: 'Total Weekly Pay', format: 'currency' },
        ],
        content: {
            intro: 'Time and a half means earning 1.5 times your regular hourly rate for overtime hours. This calculator shows your overtime pay and total weekly earnings.',
            howItWorks: 'Under FLSA, non-exempt workers earn 1.5x their regular rate for hours over 40 per week. Time and a half rate = Regular rate × 1.5.',
            whyItMatters: 'Overtime can significantly boost weekly earnings. Working 10 extra hours at $20/hour means an additional $300 (vs. $200 at regular rate).',
        },
        faq: [
            { question: 'What does time and a half mean?', answer: 'Time and a half means you earn 1.5 times (150%) your regular hourly rate for overtime work. A $20/hour worker earns $30/hour overtime.' },
            { question: 'When do I get time and a half?', answer: 'Under federal law (FLSA), non-exempt employees get 1.5x pay for hours worked over 40 in a workweek. Some states have additional rules.' },
            { question: 'Is time and a half required by law?', answer: 'Yes, for non-exempt employees under FLSA. However, salaried exempt employees (administrative, executive, professional) are generally not entitled to overtime.' },
        ],
        relatedCalculators: [
            { slug: 'overtime-pay-calculator', title: 'Overtime Pay Calculator' },
            { slug: 'hourly-to-salary-calculator', title: 'Hourly to Salary Calculator' },
        ],
        lastUpdated: "2025-12-23",
    },
    // Programmatically generated pages
    ...generatedStateCalculators,
    ...generatedSalaryBreakdowns,
    ...generatedHourlyBreakdowns,
    ...generatedBiweeklyBreakdowns,
    ...generatedWeeklyBreakdowns,
    ...generatedMonthlyBreakdowns,
    ...generatedRaiseCalculators,
    ...generatedStateSalaryPages,
] as CalculatorPageData[]).filter((page, index, self) =>
    // Keep only the first occurrence of each slug
    self.findIndex(p => p.slug === page.slug) === index
);

export function getCalculatorPage(slug: string) {
    return calculatorPages.find((p) => p.slug === slug);
}
