/**
 * Paycheck & State Page Generators
 * 
 * Generates programmatic pages for state paycheck calculators
 * and state+salary combination pages.
 */

import type { CalculatorPageData } from '../types';
import { filingStatusOptions, payFrequencyOptions } from '../types';
import { stateData, topStatesForSalary, topSalariesForStates } from '../data';

// Generate state paycheck calculator pages (all 50 states)
export function generateStateCalculators(): CalculatorPageData[] {
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
        calculatorType: 'paycheckState',
        stateCode: state.code,
        category: 'paycheck',
        priority: state.taxType === 'none' ? 9 : 7,
        inputs: [
            { id: 'grossPay', label: 'Gross Pay Per Period', type: 'currency', placeholder: '3,000', defaultValue: 3000, min: 0, required: true },
            { id: 'payFrequency', label: 'Pay Frequency', type: 'select', defaultValue: 'biweekly', options: [...payFrequencyOptions] },
            { id: 'filingStatus', label: 'Filing Status', type: 'select', defaultValue: 'single', options: [...filingStatusOptions] },
            { id: 'retirement401k', label: '401(k) Contribution', type: 'currency', placeholder: '0', defaultValue: 0, min: 0, helperText: 'Per paycheck pre-tax contribution' },
        ],
        outputs: [
            { id: 'netPay', label: 'Net Pay (Take Home)', format: 'currency', highlight: true },
            { id: 'federalTax', label: 'Federal Tax', format: 'currency' },
            { id: 'stateTax', label: `State Tax (${state.code})`, format: 'currency' },
            { id: 'socialSecurity', label: 'Social Security', format: 'currency' },
            { id: 'medicare', label: 'Medicare', format: 'currency' },
            { id: 'effectiveTaxRate', label: 'Effective Tax Rate', format: 'percentage' },
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
            { slug: `50000-salary-in-${state.slug}`, title: `$50k Salary in ${state.name}` },
            { slug: `75000-salary-in-${state.slug}`, title: `$75k Salary in ${state.name}` },
            { slug: `100000-salary-in-${state.slug}`, title: `$100k Salary in ${state.name}` },
        ],
        lastUpdated: "2025-12-23",
    }));
}

// Generate state + salary combination pages (e.g., "$50k salary in California")
export function generateStateSalaryPages(): CalculatorPageData[] {
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
                calculatorType: 'paycheckState',
                stateCode: state.code,
                category: 'paycheck',
                priority: salary >= 75000 ? 8 : 7,
                inputs: [
                    { id: 'grossPay', label: 'Annual Salary', type: 'currency', placeholder: salaryFormatted, defaultValue: salary / 26, min: 0, required: true },
                    { id: 'payFrequency', label: 'Pay Frequency', type: 'select', defaultValue: 'biweekly', options: [...payFrequencyOptions] },
                    { id: 'filingStatus', label: 'Filing Status', type: 'select', defaultValue: 'single', options: [...filingStatusOptions] },
                ],
                outputs: [
                    { id: 'netPay', label: 'Take Home Pay', format: 'currency', highlight: true },
                    { id: 'federalTax', label: 'Federal Tax', format: 'currency' },
                    { id: 'stateTax', label: `${state.code} State Tax`, format: 'currency' },
                    { id: 'effectiveTaxRate', label: 'Effective Tax Rate', format: 'percentage' },
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
                    { question: `Is $${salaryFormatted} a good salary in ${state.name}?`, answer: salary >= 100000 ? `Yes, $${salaryFormatted} is a strong salary in ${state.name}, providing comfortable living in most areas.` : salary >= 60000 ? `$${salaryFormatted} is above average in ${state.name}, though high cost-of-living areas may require more.` : `$${salaryFormatted} varies by location within ${state.name} — comfortable in some areas, tight in expensive metros.` },
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
