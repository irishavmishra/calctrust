/**
 * Blog Content Loader
 * Dynamically imports TypeScript content files for SSG
 */

import type { BlogContent } from '@/lib/types/blog-content';

/**
 * Get category directory from calculator slug
 */
export function getCategoryFromSlug(slug: string): string {
    if (slug.startsWith('paycheck-calculator-')) return 'state-paycheck';
    if (slug.match(/^\d+-dollars-an-hour$/)) return 'hourly-breakdowns';
    if (slug.match(/^\d+-salary-breakdown$/)) return 'salary-breakdowns';
    if (slug.match(/^\d+-biweekly-to-annual$/)) return 'biweekly-conversions';
    if (slug.match(/^\d+-weekly-to-annual$/)) return 'weekly-conversions';
    if (slug.match(/^\d+-monthly-to-annual$/)) return 'monthly-conversions';
    if (slug.match(/^\d+-percent-raise-calculator$/)) return 'raise-calculators';
    if (slug.match(/^\d+-salary-[a-z-]+$/)) return 'state-salary';
    return 'core';
}

/**
 * Get filename from calculator slug if different
 * Handles mapping between SEO-friendly URL slugs and internal filenames
 */
export function getFilenameFromSlug(slug: string): string {
    // State Salary: 75000-salary-in-illinois -> 75000-salary-illinois
    if (slug.match(/^\d+-salary-in-[a-z-]+$/)) {
        return slug.replace('-in-', '-');
    }

    // Weekly: 1000-a-week-is-how-much-a-year -> 1000-weekly-to-annual
    if (slug.match(/^\d+-a-week-is-how-much-a-year$/)) {
        return slug.replace('-a-week-is-how-much-a-year', '-weekly-to-annual');
    }

    // Biweekly: 2000-biweekly-is-how-much-a-year -> 2000-biweekly-to-annual
    if (slug.match(/^\d+-biweekly-is-how-much-a-year$/)) {
        return slug.replace('-biweekly-is-how-much-a-year', '-biweekly-to-annual');
    }

    // Monthly: 5000-a-month-is-how-much-a-year -> 5000-monthly-to-annual
    if (slug.match(/^\d+-a-month-is-how-much-a-year$/)) {
        return slug.replace('-a-month-is-how-much-a-year', '-monthly-to-annual');
    }

    // Default: Filename matches slug
    return slug;
}

/**
 * Load blog content for a calculator slug
 * Uses dynamic import for SSG compatibility
 */
export async function getBlogContent(slug: string): Promise<BlogContent | null> {
    const category = getCategoryFromSlug(slug);
    const filename = getFilenameFromSlug(slug);

    try {
        // Dynamic import - Next.js will statically analyze and bundle these
        const contentModule = await import(`@/content/calculators/${category}/${filename}`);
        return contentModule.default as BlogContent;
    } catch {
        // Only warn in development or if strict behavior is desired
        // console.warn(`No blog content found for slug: ${slug} (filename: ${filename})`, error);
        return null;
    }
}

/**
 * Check if blog content exists for a slug
 */
export function hasBlogContent(slug: string): boolean {
    const category = getCategoryFromSlug(slug);
    const filename = getFilenameFromSlug(slug);
    try {
        // This will be resolved at build time by Next.js
        require.resolve(`@/content/calculators/${category}/${filename}`);
        return true;
    } catch {
        return false;
    }
}
