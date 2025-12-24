/**
 * Internal Linking Automation Utilities
 * 
 * Provides automated link generation for SEO authority building.
 * Follows the 4-zone linking model for programmatic SEO at scale.
 */

import { calculatorPages, type CalculatorPageData } from './content/calculators';

// ============================================================================
// CORE CALCULATORS (Authority Pillars)
// ============================================================================

/** The 7 core "authority pillar" calculators that receive contextual links */
export const CORE_CALCULATORS = [
    'salary-to-hourly-calculator',
    'hourly-to-salary-calculator',
    'take-home-pay-calculator',
    'overtime-pay-calculator',
    '401k-calculator',
    'bonus-tax-calculator',
    'pay-raise-calculator',
] as const;

/** Category to core calculator mapping for contextual relevance */
const CATEGORY_TO_CORE: Record<string, string> = {
    salary: 'salary-to-hourly-calculator',
    paycheck: 'take-home-pay-calculator',
    tax: 'bonus-tax-calculator',
    overtime: 'overtime-pay-calculator',
    retirement: '401k-calculator',
    freelance: 'hourly-to-salary-calculator',
};

// ============================================================================
// ZONE 1: PRIMARY CONTEXTUAL LINKS
// ============================================================================

/**
 * Get the most relevant core calculator for contextual linking.
 * Only returns a link if the current page is NOT a core calculator.
 */
export function getPrimaryContextualLink(
    currentSlug: string,
    category: string
): { slug: string; title: string } | null {
    // Core calculators don't get contextual links to other cores
    if (CORE_CALCULATORS.includes(currentSlug as typeof CORE_CALCULATORS[number])) {
        return null;
    }

    const coreSlug = CATEGORY_TO_CORE[category] || 'salary-to-hourly-calculator';
    const corePage = calculatorPages.find(p => p.slug === coreSlug);

    if (!corePage || corePage.slug === currentSlug) {
        return null;
    }

    return {
        slug: wrapUsa(corePage.slug),
        title: corePage.h1,
    };
}

// ============================================================================
// ZONE 2: RELATED CALCULATORS (4-slot system)
// ============================================================================

interface RelatedLink {
    slug: string;
    title: string;
    type: 'peer' | 'parent' | 'conversion';
}

/**
 * Get exactly 4 related calculators following the slot system:
 * - Slot 1: Same category peer
 * - Slot 2: Same category peer  
 * - Slot 3: Parent intent (broader category)
 * - Slot 4: Conversion intent (related action)
 */
export function getRelatedCalculators(
    currentSlug: string,
    category: string,
    stateCode?: string
): RelatedLink[] {
    const related: RelatedLink[] = [];
    const currentPage = calculatorPages.find(p => p.slug === currentSlug);
    if (!currentPage) return [];

    const addLink = (slug: string, title: string, type: 'peer' | 'parent' | 'conversion') => {
        const wrappedSlug = wrapUsa(slug);
        if (slug !== currentSlug && !related.some(r => r.slug === wrappedSlug)) {
            related.push({ slug: wrappedSlug, title, type });
        }
    };

    // 1. Find peers (same category)
    const peers = calculatorPages
        .filter(p => p.category === category && p.slug !== currentSlug)
        .slice(0, 2);

    peers.forEach(p => addLink(p.slug, p.h1, 'peer'));

    // 2. Parent intent - broader calculator
    const parentSlug = getParentIntent(currentSlug, category, stateCode);
    if (parentSlug) {
        const parentPage = calculatorPages.find(p => p.slug === parentSlug);
        if (parentPage) {
            addLink(parentPage.slug, parentPage.h1, 'parent');
        }
    }

    // 3. Conversion intent - related action
    const conversionSlug = getConversionIntent(category);
    const conversionPage = calculatorPages.find(p => p.slug === conversionSlug);
    if (conversionPage) {
        addLink(conversionPage.slug, conversionPage.h1, 'conversion');
    }

    // 4. Pad with core calculators if we need exactly 4 slots
    const fillerCores = [...CORE_CALCULATORS];
    for (const coreSlug of fillerCores) {
        if (related.length >= 4) break;
        const corePage = calculatorPages.find(p => p.slug === coreSlug);
        if (corePage) {
            addLink(corePage.slug, corePage.h1, 'conversion');
        }
    }

    return related.slice(0, 4);
}

function getParentIntent(slug: string, category: string, stateCode?: string): string | null {
    // State paycheck pages → main take-home calculator
    if (slug.startsWith('paycheck-calculator-')) {
        return 'take-home-pay-calculator';
    }

    // State+salary combo → state calculator
    if (slug.includes('-salary-in-') && stateCode) {
        const state = calculatorPages.find(
            p => p.slug.startsWith('paycheck-calculator-') && p.stateCode === stateCode
        );
        return state?.slug || null;
    }

    // Salary breakdowns → salary-to-hourly
    if (slug.includes('-salary-breakdown')) {
        return 'salary-to-hourly-calculator';
    }

    // Hourly breakdowns → hourly-to-salary
    if (slug.includes('-dollars-an-hour')) {
        return 'hourly-to-salary-calculator';
    }

    // Period conversions → take-home-pay
    if (slug.includes('-biweekly-') || slug.includes('-a-week-') || slug.includes('-a-month-')) {
        return 'take-home-pay-calculator';
    }

    // Raise calculators → pay-raise
    if (slug.includes('-percent-raise-')) {
        return 'pay-raise-calculator';
    }

    return CATEGORY_TO_CORE[category] || null;
}

function getConversionIntent(category: string): string {
    switch (category) {
        case 'salary':
            return 'take-home-pay-calculator';
        case 'paycheck':
            return 'salary-to-hourly-calculator';
        case 'tax':
            return 'take-home-pay-calculator';
        case 'overtime':
            return 'salary-to-hourly-calculator';
        case 'retirement':
            return 'take-home-pay-calculator';
        case 'freelance':
            return 'salary-to-hourly-calculator';
        default:
            return 'salary-to-hourly-calculator';
    }
}

// ============================================================================
// ZONE 3: VARIATION LINKS (Adjacent Values)
// ============================================================================

interface VariationLink {
    slug: string;
    label: string;
}

/**
 * Get 5-7 adjacent value pages for variation linking.
 * Automatically detects page type and finds nearby values.
 */
export function getVariationLinks(currentSlug: string): VariationLink[] {
    // Salary breakdown pages
    const salaryMatch = currentSlug.match(/^(\d+)-salary-breakdown$/);
    if (salaryMatch) {
        return getSalaryVariations(parseInt(salaryMatch[1], 10));
    }

    // Hourly rate pages
    const hourlyMatch = currentSlug.match(/^(\d+)-dollars-an-hour$/);
    if (hourlyMatch) {
        return getHourlyVariations(parseInt(hourlyMatch[1], 10));
    }

    // Biweekly pages
    const biweeklyMatch = currentSlug.match(/^(\d+)-biweekly-is-how-much-a-year$/);
    if (biweeklyMatch) {
        return getBiweeklyVariations(parseInt(biweeklyMatch[1], 10));
    }

    // Weekly pages
    const weeklyMatch = currentSlug.match(/^(\d+)-a-week-is-how-much-a-year$/);
    if (weeklyMatch) {
        return getWeeklyVariations(parseInt(weeklyMatch[1], 10));
    }

    // Monthly pages
    const monthlyMatch = currentSlug.match(/^(\d+)-a-month-is-how-much-a-year$/);
    if (monthlyMatch) {
        return getMonthlyVariations(parseInt(monthlyMatch[1], 10));
    }

    // State paycheck pages
    if (currentSlug.startsWith('paycheck-calculator-')) {
        return getStateVariations(currentSlug);
    }

    // State+salary combo pages
    const stateSalaryMatch = currentSlug.match(/^(\d+)-salary-in-(.+)$/);
    if (stateSalaryMatch) {
        return getStateSalaryVariations(
            parseInt(stateSalaryMatch[1], 10),
            stateSalaryMatch[2]
        );
    }

    // Raise calculator pages
    const raiseMatch = currentSlug.match(/^(\d+)-percent-raise-calculator$/);
    if (raiseMatch) {
        return getRaiseVariations(parseInt(raiseMatch[1], 10));
    }

    return [];
}

// Helper to wrap slugs in country prefix
function wrapUsa(slug: string): string {
    return `/usa/${slug}`;
}

// Salary breakdowns: $25k-$300k
const SALARY_AMOUNTS = [
    25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000,
    75000, 80000, 85000, 90000, 95000, 100000, 110000, 120000, 125000, 130000,
    140000, 150000, 175000, 200000, 250000, 300000,
];

function getSalaryVariations(current: number): VariationLink[] {
    return getAdjacentValues(current, SALARY_AMOUNTS, 3).map(amount => ({
        slug: wrapUsa(`${amount}-salary-breakdown`),
        label: `$${(amount / 1000)}k`,
    }));
}

// Hourly rates: $10-$100
const HOURLY_RATES = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    32, 35, 40, 45, 50, 55, 60, 75, 100,
];

function getHourlyVariations(current: number): VariationLink[] {
    return getAdjacentValues(current, HOURLY_RATES, 3).map(rate => ({
        slug: wrapUsa(`${rate}-dollars-an-hour`),
        label: `$${rate}/hr`,
    }));
}

// Biweekly amounts
const BIWEEKLY_AMOUNTS = [
    1000, 1200, 1400, 1500, 1600, 1800, 2000, 2200, 2400, 2500,
    2800, 3000, 3200, 3500, 4000, 4500, 5000, 6000,
];

function getBiweeklyVariations(current: number): VariationLink[] {
    return getAdjacentValues(current, BIWEEKLY_AMOUNTS, 3).map(amount => ({
        slug: wrapUsa(`${amount}-biweekly-is-how-much-a-year`),
        label: `$${amount.toLocaleString()}`,
    }));
}

// Weekly amounts
const WEEKLY_AMOUNTS = [
    400, 500, 600, 700, 750, 800, 900, 1000, 1100, 1200,
    1300, 1400, 1500, 1750, 2000, 2500, 3000,
];

function getWeeklyVariations(current: number): VariationLink[] {
    return getAdjacentValues(current, WEEKLY_AMOUNTS, 3).map(amount => ({
        slug: wrapUsa(`${amount}-a-week-is-how-much-a-year`),
        label: `$${amount.toLocaleString()}/wk`,
    }));
}

// Monthly amounts
const MONTHLY_AMOUNTS = [
    2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500,
    7000, 7500, 8000, 8500, 9000, 10000, 12000, 15000, 20000,
];

function getMonthlyVariations(current: number): VariationLink[] {
    return getAdjacentValues(current, MONTHLY_AMOUNTS, 3).map(amount => ({
        slug: wrapUsa(`${amount}-a-month-is-how-much-a-year`),
        label: `$${amount.toLocaleString()}/mo`,
    }));
}

// State variations: nearby states + salary combos
const STATE_SLUGS = [
    'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado',
    'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho',
    'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana',
    'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota',
    'mississippi', 'missouri', 'montana', 'nebraska', 'nevada',
    'new-hampshire', 'new-jersey', 'new-mexico', 'new-york',
    'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon',
    'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
    'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington',
    'west-virginia', 'wisconsin', 'wyoming',
];

function getStateVariations(currentSlug: string): VariationLink[] {
    const currentState = currentSlug.replace('paycheck-calculator-', '');
    const currentIndex = STATE_SLUGS.indexOf(currentState);

    if (currentIndex === -1) return [];

    const variations: VariationLink[] = [];

    // Add 2 nearby states
    const nearbyStates = getAdjacentValues(currentIndex, STATE_SLUGS.map((_, i) => i), 2);
    nearbyStates.forEach(idx => {
        if (idx !== currentIndex) {
            const state = STATE_SLUGS[idx];
            variations.push({
                slug: wrapUsa(`paycheck-calculator-${state}`),
                label: state.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
            });
        }
    });

    // Add salary-in-state combos for this state
    const salariesForState = [50000, 75000, 100000];
    salariesForState.forEach(salary => {
        const slug = `${salary}-salary-in-${currentState}`;
        if (calculatorPages.some(p => p.slug === slug)) {
            variations.push({
                slug: wrapUsa(slug),
                label: `$${salary / 1000}k in ${currentState.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
            });
        }
    });

    return variations.slice(0, 6);
}

function getStateSalaryVariations(salary: number, stateSlug: string): VariationLink[] {
    const variations: VariationLink[] = [];
    const stateSalaries = [40000, 50000, 60000, 75000, 80000, 100000, 120000, 150000];

    // Other salary amounts in same state
    const otherSalaries = getAdjacentValues(salary, stateSalaries, 2);
    otherSalaries.forEach(amount => {
        if (amount !== salary) {
            const slug = `${amount}-salary-in-${stateSlug}`;
            if (calculatorPages.some(p => p.slug === slug)) {
                variations.push({
                    slug: wrapUsa(slug),
                    label: `$${amount / 1000}k`,
                });
            }
        }
    });

    // Same salary in nearby top states
    const topStates = ['california', 'texas', 'florida', 'new-york'];
    topStates.forEach(state => {
        if (state !== stateSlug) {
            const slug = `${salary}-salary-in-${state}`;
            if (calculatorPages.some(p => p.slug === slug)) {
                variations.push({
                    slug: wrapUsa(slug),
                    label: state.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
                });
            }
        }
    });

    return variations.slice(0, 6);
}

// Raise percentages
const RAISE_PERCENTAGES = [2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, 25];

function getRaiseVariations(current: number): VariationLink[] {
    return getAdjacentValues(current, RAISE_PERCENTAGES, 3).map(percent => ({
        slug: wrapUsa(`${percent}-percent-raise-calculator`),
        label: `${percent}% Raise`,
    }));
}

// ============================================================================
// HELPERS
// ============================================================================

/**
 * Get adjacent values from an array (±range around current value).
 * Returns values excluding the current one.
 */
function getAdjacentValues<T>(current: T, values: T[], range: number): T[] {
    const currentIndex = values.indexOf(current);
    if (currentIndex === -1) return [];

    const start = Math.max(0, currentIndex - range);
    const end = Math.min(values.length, currentIndex + range + 1);

    return values.slice(start, end).filter(v => v !== current);
}

// ============================================================================
// COMBINED LINKING DATA
// ============================================================================

export interface LinkingData {
    contextual: { slug: string; title: string } | null;
    related: RelatedLink[];
    variations: VariationLink[];
}

/**
 * Get all linking data for a page in one call.
 * This is the main entry point for the linking system.
 */
export function getPageLinkingData(page: CalculatorPageData): LinkingData {
    return {
        contextual: getPrimaryContextualLink(page.slug, page.category),
        related: getRelatedCalculators(page.slug, page.category, page.stateCode),
        variations: getVariationLinks(page.slug),
    };
}
