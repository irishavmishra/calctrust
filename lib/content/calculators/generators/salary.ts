/**
 * Salary & Conversion Page Generators
 * 
 * Generates programmatic pages for salary breakdowns, hourly rates,
 * biweekly/weekly/monthly conversions, and raise calculators.
 */

import type { CalculatorPageData } from '../types';
import {
    salaryBreakdowns,
    hourlyRateBreakdowns,
    biweeklyAmounts,
    weeklyAmounts,
    monthlyAmounts,
    raisePercentages,
} from '../data';

// Generate salary breakdown pages ($25k - $300k)
export function generateSalaryBreakdowns(): CalculatorPageData[] {
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
            calculatorType: 'salaryToHourly',
            category: 'salary',
            priority: salary >= 100000 ? 9 : salary >= 50000 ? 8 : 7,
            inputs: [
                { id: 'annualSalary', label: 'Annual Salary', type: 'currency', placeholder: salaryFormatted, defaultValue: salary, min: 0, required: true },
                { id: 'hoursPerWeek', label: 'Hours Per Week', type: 'number', placeholder: '40', defaultValue: 40, min: 1, max: 168, required: true },
                { id: 'weeksPerYear', label: 'Weeks Per Year', type: 'number', placeholder: '52', defaultValue: 52, min: 1, max: 52, required: true },
            ],
            outputs: [
                { id: 'hourlyRate', label: 'Hourly Rate', format: 'currency', highlight: true },
                { id: 'monthlyPay', label: 'Monthly Pay', format: 'currency' },
                { id: 'weeklyPay', label: 'Weekly Pay', format: 'currency' },
                { id: 'dailyPay', label: 'Daily Pay', format: 'currency' },
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
                { slug: `${salary}-salary-in-california`, title: `$${salaryFormatted} in California` },
                { slug: `${salary}-salary-in-texas`, title: `$${salaryFormatted} in Texas` },
                { slug: `${salary}-salary-in-florida`, title: `$${salaryFormatted} in Florida` },
                { slug: `${salary}-salary-in-new-york`, title: `$${salaryFormatted} in New York` },
            ],
            lastUpdated: "2025-12-23",
        };
    });
}

// Generate hourly rate breakdown pages ($10 - $100/hour)
export function generateHourlyBreakdowns(): CalculatorPageData[] {
    return hourlyRateBreakdowns.map((rate) => {
        const annualSalary = rate * 40 * 52;
        const annualFormatted = annualSalary.toLocaleString();
        const monthlyPay = (annualSalary / 12).toFixed(0);

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
            calculatorType: 'hourlyToSalary',
            category: 'salary',
            priority: rate >= 20 ? 8 : 7,
            inputs: [
                { id: 'hourlyRate', label: 'Hourly Rate', type: 'currency', placeholder: rate.toString(), defaultValue: rate, min: 0, required: true },
                { id: 'hoursPerWeek', label: 'Hours Per Week', type: 'number', placeholder: '40', defaultValue: 40, min: 1, max: 168, required: true },
                { id: 'weeksPerYear', label: 'Weeks Per Year', type: 'number', placeholder: '52', defaultValue: 52, min: 1, max: 52, required: true },
            ],
            outputs: [
                { id: 'annualSalary', label: 'Annual Salary', format: 'currency', highlight: true },
                { id: 'monthlyPay', label: 'Monthly Pay', format: 'currency' },
                { id: 'weeklyPay', label: 'Weekly Pay', format: 'currency' },
                { id: 'dailyPay', label: 'Daily Pay', format: 'currency' },
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
export function generateBiweeklyBreakdowns(): CalculatorPageData[] {
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
            calculatorType: 'hourlyToSalary',
            category: 'paycheck',
            priority: amount >= 2000 ? 8 : 7,
            inputs: [
                { id: 'hourlyRate', label: 'Biweekly Pay', type: 'currency', placeholder: amountFormatted, defaultValue: amount, min: 0, required: true },
                { id: 'hoursPerWeek', label: 'Hours Per Week', type: 'number', placeholder: '40', defaultValue: 40, min: 1, max: 168, required: true },
                { id: 'weeksPerYear', label: 'Weeks Per Year', type: 'number', placeholder: '52', defaultValue: 52, min: 1, max: 52, required: true },
            ],
            outputs: [
                { id: 'annualSalary', label: 'Annual Salary', format: 'currency', highlight: true },
                { id: 'monthlyPay', label: 'Monthly Pay', format: 'currency' },
                { id: 'weeklyPay', label: 'Weekly Pay', format: 'currency' },
                { id: 'dailyPay', label: 'Hourly Rate', format: 'currency' },
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
export function generateWeeklyBreakdowns(): CalculatorPageData[] {
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
            calculatorType: 'hourlyToSalary',
            category: 'salary',
            priority: amount >= 1000 ? 8 : 7,
            inputs: [
                { id: 'hourlyRate', label: 'Weekly Pay', type: 'currency', placeholder: amountFormatted, defaultValue: amount, min: 0, required: true },
                { id: 'hoursPerWeek', label: 'Hours Per Week', type: 'number', placeholder: '40', defaultValue: 40, min: 1, max: 168, required: true },
                { id: 'weeksPerYear', label: 'Weeks Per Year', type: 'number', placeholder: '52', defaultValue: 52, min: 1, max: 52, required: true },
            ],
            outputs: [
                { id: 'annualSalary', label: 'Annual Salary', format: 'currency', highlight: true },
                { id: 'monthlyPay', label: 'Monthly Pay', format: 'currency' },
                { id: 'weeklyPay', label: 'Biweekly Pay', format: 'currency' },
                { id: 'dailyPay', label: 'Daily Pay', format: 'currency' },
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
export function generateMonthlyBreakdowns(): CalculatorPageData[] {
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
            calculatorType: 'hourlyToSalary',
            category: 'salary',
            priority: amount >= 5000 ? 8 : 7,
            inputs: [
                { id: 'hourlyRate', label: 'Monthly Salary', type: 'currency', placeholder: amountFormatted, defaultValue: amount, min: 0, required: true },
                { id: 'hoursPerWeek', label: 'Hours Per Week', type: 'number', placeholder: '40', defaultValue: 40, min: 1, max: 168, required: true },
                { id: 'weeksPerYear', label: 'Weeks Per Year', type: 'number', placeholder: '52', defaultValue: 52, min: 1, max: 52, required: true },
            ],
            outputs: [
                { id: 'annualSalary', label: 'Annual Salary', format: 'currency', highlight: true },
                { id: 'monthlyPay', label: 'Biweekly Pay', format: 'currency' },
                { id: 'weeklyPay', label: 'Weekly Pay', format: 'currency' },
                { id: 'dailyPay', label: 'Hourly Rate', format: 'currency' },
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
export function generateRaiseCalculators(): CalculatorPageData[] {
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
            calculatorType: 'payRaise',
            category: 'salary',
            priority: percent >= 5 ? 8 : 7,
            inputs: [
                { id: 'currentSalary', label: 'Current Salary', type: 'currency', placeholder: '50,000', defaultValue: 50000, min: 0, required: true },
                { id: 'raisePercentage', label: 'Raise Percentage', type: 'number', placeholder: percent.toString(), defaultValue: percent, min: 0, max: 100, required: true },
            ],
            outputs: [
                { id: 'newSalary', label: 'New Salary', format: 'currency', highlight: true },
                { id: 'raiseAmount', label: 'Raise Amount', format: 'currency' },
                { id: 'monthlyIncrease', label: 'Monthly Increase', format: 'currency' },
                { id: 'hourlyIncrease', label: 'Hourly Increase', format: 'currency' },
            ],
            content: {
                intro: `A ${percent}% raise can significantly impact your finances. Use this calculator to see exactly how much more you'll earn after a ${percent} percent salary increase.`,
                howItWorks: `Multiply your current salary by ${1 + percent / 100} (or add ${percent}% of your salary) to get your new salary. For example, a $50,000 salary with a ${percent}% raise becomes $${(50000 * (1 + percent / 100)).toLocaleString()}.`,
                whyItMatters: percent >= 10
                    ? `A ${percent}% raise is significant — well above the typical 3-4% annual increase. This could represent a promotion or major career advancement.`
                    : percent >= 5
                        ? `A ${percent}% raise is above the average annual increase of 3-4%. It's a solid step forward in your career.`
                        : `A ${percent}% raise is close to typical cost-of-living adjustments. Understanding the actual dollar impact helps with negotiations.`,
            },
            faq: [
                { question: `How much is a ${percent}% raise on $50,000?`, answer: `A ${percent}% raise on $50,000 equals $${(50000 * percent / 100).toLocaleString()} more per year, bringing your new salary to $${(50000 * (1 + percent / 100)).toLocaleString()}.` },
                { question: `Is a ${percent}% raise good?`, answer: percent >= 10 ? `Yes, a ${percent}% raise is excellent — well above average annual increases.` : percent >= 5 ? `A ${percent}% raise is good — above the typical 3-4% annual increase.` : `A ${percent}% raise is around typical cost-of-living adjustments.` },
            ],
            relatedCalculators: [
                { slug: 'pay-raise-calculator', title: 'Pay Raise Calculator' },
                { slug: 'salary-to-hourly-calculator', title: 'Salary to Hourly Calculator' },
            ],
            lastUpdated: "2025-12-23",
        };
    });
}
