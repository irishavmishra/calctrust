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
 * Load blog content for a calculator slug
 * Uses dynamic import for SSG compatibility
 */
export async function getBlogContent(slug: string): Promise<BlogContent | null> {
    const category = getCategoryFromSlug(slug);

    try {
        // Dynamic import - Next.js will statically analyze and bundle these
        const contentModule = await import(`@/content/calculators/${category}/${slug}`);
        return contentModule.default as BlogContent;
    } catch (error) {
        console.warn(`No blog content found for slug: ${slug}`, error);
        return null;
    }
}

/**
 * Check if blog content exists for a slug
 */
export function hasBlogContent(slug: string): boolean {
    const category = getCategoryFromSlug(slug);
    try {
        // This will be resolved at build time by Next.js
        require.resolve(`@/content/calculators/${category}/${slug}`);
        return true;
    } catch {
        return false;
    }
}
