import type { MetadataRoute } from 'next';
import { calculatorPages } from '@/lib/content/calculators';

// Required for static export
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://calctrust.com';

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/usa`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];

    // Calculator pages (now under /usa/)
    const calculatorRoutes: MetadataRoute.Sitemap = calculatorPages.map((calc) => ({
        url: `${baseUrl}/usa/${calc.slug}`,
        lastModified: new Date(calc.lastUpdated),
        changeFrequency: 'monthly' as const,
        priority: calc.priority / 10, // Convert 1-10 scale to 0.1-1.0
    }));

    return [...staticPages, ...calculatorRoutes];
}
