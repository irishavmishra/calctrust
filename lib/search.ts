/**
 * Search Index Generator
 * 
 * Builds a lightweight static search index from calculator definitions.
 * This runs on the server during initial page load and is used for
 * client-side filtering. No backend required.
 */

import { calculatorPages, type CalculatorPageData } from './content/calculators';

export interface SearchItem {
    title: string;
    slug: string;
    href: string;
    category: CalculatorPageData['category'];
    keywords: string[];
    stateCode?: string;
}

/**
 * Generates search index from all calculator pages.
 * Called once on module load, memoized for reuse.
 */
function buildSearchIndex(): SearchItem[] {
    return calculatorPages.map(page => ({
        title: page.h1 || page.title,
        slug: page.slug,
        href: `/usa/${page.slug}`,
        category: page.category,
        keywords: [
            ...page.keywords,
            page.title.toLowerCase(),
            page.h1?.toLowerCase() || '',
            page.category,
            page.stateCode?.toLowerCase() || '',
            // Add numeric variations (50k, 50000, $50k)
            ...(page.title.match(/\d+/g) || []),
        ].filter(Boolean),
        stateCode: page.stateCode,
    }));
}

// Memoized search index - built once
let cachedIndex: SearchItem[] | null = null;

export function getSearchIndex(): SearchItem[] {
    if (!cachedIndex) {
        cachedIndex = buildSearchIndex();
    }
    return cachedIndex;
}

/**
 * Search calculators by query string.
 * Pure client-side filtering - no network requests.
 */
export function searchCalculators(query: string, limit: number = 10): SearchItem[] {
    if (!query.trim()) return [];

    const index = getSearchIndex();
    const normalizedQuery = query.toLowerCase().trim();

    // Handle numeric queries (50k, $100k, 25/hour)
    const numericMatch = normalizedQuery.match(/\$?(\d+)k?(?:\/hour)?/);
    const numericValue = numericMatch ? parseInt(numericMatch[1]) : null;

    // Score each item
    const scored = index.map(item => {
        let score = 0;

        // Title exact match (highest priority)
        if (item.title.toLowerCase().includes(normalizedQuery)) {
            score += 100;
        }

        // Slug match
        if (item.slug.includes(normalizedQuery.replace(/\s+/g, '-'))) {
            score += 80;
        }

        // State code match (for state calculators)
        if (item.stateCode && normalizedQuery.includes(item.stateCode.toLowerCase())) {
            score += 70;
        }

        // Full state name match
        if (item.keywords.some(kw => kw.includes(normalizedQuery))) {
            score += 60;
        }

        // Numeric match (for salary/hourly calculators)
        if (numericValue) {
            const hasNumber = item.keywords.some(kw => {
                const kwNum = parseInt(kw);
                return !isNaN(kwNum) && (kwNum === numericValue || kwNum === numericValue * 1000);
            });
            if (hasNumber) score += 50;
        }

        // Category match
        if (item.category.includes(normalizedQuery)) {
            score += 30;
        }

        // Partial keyword match
        item.keywords.forEach(kw => {
            if (kw.includes(normalizedQuery) || normalizedQuery.includes(kw)) {
                score += 10;
            }
        });

        return { item, score };
    });

    // Filter and sort by score
    return scored
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(({ item }) => item);
}

/**
 * Get popular/featured calculators for empty state.
 */
export function getFeaturedCalculators(): SearchItem[] {
    const index = getSearchIndex();

    // Return core calculators first
    const coreSlsgs = [
        'salary-to-hourly-calculator',
        'take-home-pay-calculator',
        'bonus-tax-calculator',
        'overtime-pay-calculator',
        'paycheck-calculator-california',
        'paycheck-calculator-texas',
    ];

    return coreSlsgs
        .map(slug => index.find(item => item.slug === slug))
        .filter((item): item is SearchItem => item !== undefined);
}
