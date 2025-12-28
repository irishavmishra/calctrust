/**
 * Calculator Content Types
 * 
 * Centralized type definitions for the programmatic SEO content engine.
 */

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

export type CalculatorCategory = 'salary' | 'paycheck' | 'tax' | 'overtime' | 'retirement' | 'freelance';

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
    stateCode?: string;
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
    lastUpdated: string;
    category: CalculatorCategory;
    priority: number;
}

// Form select options
export const filingStatusOptions = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married Filing Jointly' },
    { value: 'married_separate', label: 'Married Filing Separately' },
    { value: 'head_of_household', label: 'Head of Household' },
] as const;

export const payFrequencyOptions = [
    { value: 'weekly', label: 'Weekly (52 paychecks/year)' },
    { value: 'biweekly', label: 'Bi-weekly (26 paychecks/year)' },
    { value: 'semimonthly', label: 'Semi-monthly (24 paychecks/year)' },
    { value: 'monthly', label: 'Monthly (12 paychecks/year)' },
] as const;
