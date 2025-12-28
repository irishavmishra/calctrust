/**
 * Navigation Data Module
 * 
 * Centralizes navigation items derived from the calculator content engine.
 * Eliminates duplication between Header and content definitions.
 */

import { calculatorPages } from '@/lib/content/calculators';

interface NavItem {
    href: string;
    label: string;
    description: string;
}

interface NavCategory {
    title: string;
    icon: 'salary' | 'paycheck' | 'tax';
    items: NavItem[];
}

// Featured salary calculators for navigation
const FEATURED_SALARY_SLUGS = [
    'salary-to-hourly-calculator',
    'hourly-to-salary-calculator',
    '50000-salary-breakdown',
    '100000-salary-breakdown',
    '15-dollars-an-hour',
    '20-dollars-an-hour',
];

// Featured paycheck calculators for navigation
const FEATURED_PAYCHECK_SLUGS = [
    'take-home-pay-calculator',
    'biweekly-paycheck-calculator',
    'paycheck-calculator-california',
    'paycheck-calculator-texas',
    'paycheck-calculator-florida',
    'paycheck-calculator-new-york',
];

// Featured tax/tools calculators for navigation
const FEATURED_TAX_SLUGS = [
    'bonus-tax-calculator',
    'self-employment-tax-calculator',
    '401k-calculator',
    'overtime-pay-calculator',
    'time-and-a-half-calculator',
    'pay-raise-calculator',
];

/**
 * Gets navigation items from calculator pages
 */
function getNavItems(slugs: string[], basePath: string = '/usa'): NavItem[] {
    return slugs.map((slug) => {
        const page = calculatorPages.find((p) => p.slug === slug);
        if (!page) {
            console.warn(`Navigation: Calculator not found for slug: ${slug}`);
            return {
                href: `${basePath}/${slug}`,
                label: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                description: '',
            };
        }
        return {
            href: `${basePath}/${page.slug}`,
            label: page.h1.replace(' Calculator', '').replace(/\$/g, '$'),
            description: truncateDescription(page.description),
        };
    }).filter(Boolean);
}

/**
 * Truncates description to a concise navigation-friendly length
 */
function truncateDescription(desc: string, maxLength: number = 40): string {
    if (desc.length <= maxLength) return desc;
    // Find last space before maxLength
    const truncated = desc.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated;
}

/**
 * Gets all navigation categories with their items
 */
export function getNavigationCategories(): NavCategory[] {
    return [
        {
            title: 'Salary',
            icon: 'salary',
            items: getNavItems(FEATURED_SALARY_SLUGS),
        },
        {
            title: 'Paycheck',
            icon: 'paycheck',
            items: getNavItems(FEATURED_PAYCHECK_SLUGS),
        },
        {
            title: 'Tax & Tools',
            icon: 'tax',
            items: getNavItems(FEATURED_TAX_SLUGS),
        },
    ];
}

// Export pre-computed nav items for use in Header
export const salaryCalculators = getNavItems(FEATURED_SALARY_SLUGS);
export const paycheckCalculators = getNavItems(FEATURED_PAYCHECK_SLUGS);
export const taxCalculators = getNavItems(FEATURED_TAX_SLUGS);

// Country selector (static for now)
export const countries = [
    { code: 'usa', name: 'USA', flag: '🇺🇸', href: '/usa', active: true },
    { code: 'uk', name: 'UK', flag: '🇬🇧', href: '#', active: false },
    { code: 'ca', name: 'Canada', flag: '🇨🇦', href: '#', active: false },
];
