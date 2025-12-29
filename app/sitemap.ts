import type { MetadataRoute } from 'next';
import { calculatorPages } from '@/lib/content/calculators';

// Required for static export
export const dynamic = 'force-static';

// Last content update date
const LAST_UPDATED = new Date('2025-12-29');

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://calctrust.com';

    // ============================================
    // HOMEPAGE - Highest priority
    // ============================================
    const homepage: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: LAST_UPDATED,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
    ];

    // ============================================
    // HUB PAGES - Primary navigation & categories
    // ============================================
    const hubPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/usa`,
            lastModified: LAST_UPDATED,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/usa/calculators`,
            lastModified: LAST_UPDATED,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
    ];

    // ============================================
    // INFORMATIONAL PAGES - About, methodology, etc.
    // ============================================
    const infoPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/about`,
            lastModified: LAST_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/methodology`,
            lastModified: LAST_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/how-calculations-work`,
            lastModified: LAST_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: LAST_UPDATED,
            changeFrequency: 'yearly',
            priority: 0.4,
        },
    ];

    // ============================================
    // LEGAL PAGES - Privacy, terms, disclaimer
    // ============================================
    const legalPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: LAST_UPDATED,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms-of-service`,
            lastModified: LAST_UPDATED,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/disclaimer`,
            lastModified: LAST_UPDATED,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // ============================================
    // CALCULATOR PAGES - All dynamic calculator content
    // Priority is based on calculator's priority field (1-10 → 0.1-1.0)
    // ============================================
    const calculatorRoutes: MetadataRoute.Sitemap = calculatorPages.map((calc) => ({
        url: `${baseUrl}/usa/${calc.slug}`,
        lastModified: new Date(calc.lastUpdated),
        changeFrequency: 'monthly' as const,
        priority: Math.min(calc.priority / 10, 0.8), // Cap at 0.8 to keep below hub pages
    }));

    // ============================================
    // COMBINE ALL PAGES IN HIERARCHICAL ORDER
    // ============================================
    return [
        ...homepage,
        ...hubPages,
        ...infoPages,
        ...legalPages,
        ...calculatorRoutes,
    ];
}
