/**
 * Generate llms.txt file
 * 
 * This script generates an llms.txt file containing all pages on the site
 * for AI/LLM systems to understand the site content.
 * 
 * Run with: npx tsx scripts/generate-llms-txt.ts
 */

import { calculatorPages } from '../lib/content/calculators';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'https://calctrust.com';

// Static pages with descriptions
const staticPages = [
    {
        url: '/',
        title: 'CalcTrust | Free Salary & Paycheck Calculators',
        description: 'Free, accurate U.S. salary, paycheck, and tax calculators. No ads, no signup. Updated for 2025 with official IRS data.'
    },
    {
        url: '/usa',
        title: 'U.S. Salary & Paycheck Calculators',
        description: 'Free salary and paycheck calculators for all 50 U.S. states. Calculate take-home pay with 2025 federal and state tax rules.'
    },
    {
        url: '/usa/calculators',
        title: 'All Calculators Directory',
        description: 'Browse 278+ free salary, paycheck, and tax calculators for the United States.'
    },
    {
        url: '/about',
        title: 'About CalcTrust',
        description: 'Learn about CalcTrust\'s mission to provide accurate, transparent financial calculators.'
    },
    {
        url: '/methodology',
        title: 'Calculation Methodology',
        description: 'Understand the data sources, calculation methods, and accuracy standards used in CalcTrust calculators.'
    },
    {
        url: '/how-calculations-work',
        title: 'How Calculations Work',
        description: 'Step-by-step guide to using CalcTrust calculators for accurate salary, paycheck, and tax estimates.'
    },
    {
        url: '/disclaimer',
        title: 'Disclaimer',
        description: 'Legal disclaimers and limitations for CalcTrust financial calculators and tools.'
    },
    {
        url: '/privacy-policy',
        title: 'Privacy Policy',
        description: 'CalcTrust\'s data collection, usage, and privacy practices. No personal data is stored.'
    },
    {
        url: '/terms-of-service',
        title: 'Terms of Service',
        description: 'Terms and conditions for using CalcTrust calculators and services.'
    },
    {
        url: '/contact',
        title: 'Contact Us',
        description: 'Contact CalcTrust for support, feedback, or error reporting.'
    },
];

function generateLlmsTxt(): string {
    const lines: string[] = [];

    // Header
    lines.push('# calctrust.com llms.txt');
    lines.push('');
    lines.push('> CalcTrust provides free, accurate salary, paycheck, and tax calculators for the United States.');
    lines.push('> All calculators use 2025 federal and state tax rules from official IRS data.');
    lines.push('> No ads, no signup required, privacy-first design.');
    lines.push('');
    lines.push('## Static Pages');
    lines.push('');

    // Static pages
    for (const page of staticPages) {
        lines.push(`- [${page.title}](${BASE_URL}${page.url}): ${page.description}`);
    }

    lines.push('');
    lines.push('## Calculator Pages');
    lines.push('');

    // Group calculators by category
    const byCategory = new Map<string, typeof calculatorPages>();

    for (const calc of calculatorPages) {
        const category = calc.category;
        if (!byCategory.has(category)) {
            byCategory.set(category, []);
        }
        byCategory.get(category)!.push(calc);
    }

    // Category labels
    const categoryLabels: Record<string, string> = {
        salary: 'Salary Calculators',
        paycheck: 'Paycheck & Take-Home Pay Calculators',
        tax: 'Tax Calculators',
        overtime: 'Overtime Calculators',
        retirement: 'Retirement & 401(k) Calculators',
        freelance: 'Freelance & Self-Employment Calculators',
    };

    // Output each category
    for (const [category, calcs] of byCategory) {
        const label = categoryLabels[category] || category;
        lines.push(`### ${label}`);
        lines.push('');

        for (const calc of calcs) {
            const title = calc.h1 || calc.title.split('|')[0].trim();
            const desc = calc.description.length > 150
                ? calc.description.substring(0, 147) + '...'
                : calc.description;
            lines.push(`- [${title}](${BASE_URL}/usa/${calc.slug}): ${desc}`);
        }

        lines.push('');
    }

    // Footer
    lines.push('---');
    lines.push('');
    lines.push(`Total pages: ${staticPages.length + calculatorPages.length}`);
    lines.push(`Last updated: ${new Date().toISOString().split('T')[0]}`);
    lines.push('');

    return lines.join('\n');
}

// Generate and save
const content = generateLlmsTxt();
const outputPath = path.join(__dirname, '..', 'public', 'llms.txt');

fs.writeFileSync(outputPath, content, 'utf8');
console.log(`✅ Generated llms.txt with ${staticPages.length + calculatorPages.length} pages`);
console.log(`📁 Saved to: ${outputPath}`);
