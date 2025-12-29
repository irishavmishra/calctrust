/**
 * URL Redirects Configuration
 * 
 * These redirects handle the URL change from Dec 27, 2025
 * where state salary URLs changed from:
 *   /usa/100000-salary-ohio → /usa/100000-salary-in-ohio
 * 
 * CRITICAL: These must be 301 permanent redirects for SEO
 */

import type { NextConfig } from 'next';

// All salary/state combinations that were renamed
const salaryValues = [40000, 50000, 60000, 70000, 75000, 80000, 90000, 100000, 120000, 150000];
const states = [
    'arizona', 'california', 'colorado', 'florida', 'georgia', 'illinois',
    'maryland', 'massachusetts', 'michigan', 'nevada', 'new-jersey', 'new-york',
    'north-carolina', 'ohio', 'pennsylvania', 'tennessee', 'texas', 'virginia', 'washington'
];

// Generate all redirect rules
export function generateStateSalaryRedirects(): NonNullable<NextConfig['redirects']> {
    return async () => {
        const redirects: Array<{
            source: string;
            destination: string;
            permanent: boolean;
        }> = [];

        for (const salary of salaryValues) {
            for (const state of states) {
                // Check if this combination existed (not all combinations exist)
                // We'll include all possibilities and Next.js will just ignore non-matching ones
                redirects.push({
                    source: `/usa/${salary}-salary-${state}`,
                    destination: `/usa/${salary}-salary-in-${state}`,
                    permanent: true, // 301 redirect
                });
            }
        }

        return redirects;
    };
}

// Flat list for easy access
export const stateSalaryRedirects = [
    // 40000 salary redirects
    { source: '/usa/40000-salary-california', destination: '/usa/40000-salary-in-california', permanent: true },
    { source: '/usa/40000-salary-florida', destination: '/usa/40000-salary-in-florida', permanent: true },
    { source: '/usa/40000-salary-new-york', destination: '/usa/40000-salary-in-new-york', permanent: true },
    { source: '/usa/40000-salary-texas', destination: '/usa/40000-salary-in-texas', permanent: true },

    // 50000 salary redirects
    { source: '/usa/50000-salary-arizona', destination: '/usa/50000-salary-in-arizona', permanent: true },
    { source: '/usa/50000-salary-california', destination: '/usa/50000-salary-in-california', permanent: true },
    { source: '/usa/50000-salary-colorado', destination: '/usa/50000-salary-in-colorado', permanent: true },
    { source: '/usa/50000-salary-florida', destination: '/usa/50000-salary-in-florida', permanent: true },
    { source: '/usa/50000-salary-georgia', destination: '/usa/50000-salary-in-georgia', permanent: true },
    { source: '/usa/50000-salary-illinois', destination: '/usa/50000-salary-in-illinois', permanent: true },
    { source: '/usa/50000-salary-maryland', destination: '/usa/50000-salary-in-maryland', permanent: true },
    { source: '/usa/50000-salary-massachusetts', destination: '/usa/50000-salary-in-massachusetts', permanent: true },
    { source: '/usa/50000-salary-michigan', destination: '/usa/50000-salary-in-michigan', permanent: true },
    { source: '/usa/50000-salary-nevada', destination: '/usa/50000-salary-in-nevada', permanent: true },
    { source: '/usa/50000-salary-new-jersey', destination: '/usa/50000-salary-in-new-jersey', permanent: true },
    { source: '/usa/50000-salary-new-york', destination: '/usa/50000-salary-in-new-york', permanent: true },
    { source: '/usa/50000-salary-north-carolina', destination: '/usa/50000-salary-in-north-carolina', permanent: true },
    { source: '/usa/50000-salary-ohio', destination: '/usa/50000-salary-in-ohio', permanent: true },
    { source: '/usa/50000-salary-pennsylvania', destination: '/usa/50000-salary-in-pennsylvania', permanent: true },
    { source: '/usa/50000-salary-tennessee', destination: '/usa/50000-salary-in-tennessee', permanent: true },
    { source: '/usa/50000-salary-texas', destination: '/usa/50000-salary-in-texas', permanent: true },
    { source: '/usa/50000-salary-virginia', destination: '/usa/50000-salary-in-virginia', permanent: true },
    { source: '/usa/50000-salary-washington', destination: '/usa/50000-salary-in-washington', permanent: true },

    // 60000 salary redirects
    { source: '/usa/60000-salary-california', destination: '/usa/60000-salary-in-california', permanent: true },
    { source: '/usa/60000-salary-florida', destination: '/usa/60000-salary-in-florida', permanent: true },
    { source: '/usa/60000-salary-new-york', destination: '/usa/60000-salary-in-new-york', permanent: true },
    { source: '/usa/60000-salary-texas', destination: '/usa/60000-salary-in-texas', permanent: true },

    // 70000 salary redirects
    { source: '/usa/70000-salary-california', destination: '/usa/70000-salary-in-california', permanent: true },
    { source: '/usa/70000-salary-florida', destination: '/usa/70000-salary-in-florida', permanent: true },
    { source: '/usa/70000-salary-new-york', destination: '/usa/70000-salary-in-new-york', permanent: true },
    { source: '/usa/70000-salary-texas', destination: '/usa/70000-salary-in-texas', permanent: true },

    // 75000 salary redirects
    { source: '/usa/75000-salary-arizona', destination: '/usa/75000-salary-in-arizona', permanent: true },
    { source: '/usa/75000-salary-california', destination: '/usa/75000-salary-in-california', permanent: true },
    { source: '/usa/75000-salary-colorado', destination: '/usa/75000-salary-in-colorado', permanent: true },
    { source: '/usa/75000-salary-florida', destination: '/usa/75000-salary-in-florida', permanent: true },
    { source: '/usa/75000-salary-georgia', destination: '/usa/75000-salary-in-georgia', permanent: true },
    { source: '/usa/75000-salary-illinois', destination: '/usa/75000-salary-in-illinois', permanent: true },
    { source: '/usa/75000-salary-maryland', destination: '/usa/75000-salary-in-maryland', permanent: true },
    { source: '/usa/75000-salary-massachusetts', destination: '/usa/75000-salary-in-massachusetts', permanent: true },
    { source: '/usa/75000-salary-michigan', destination: '/usa/75000-salary-in-michigan', permanent: true },
    { source: '/usa/75000-salary-nevada', destination: '/usa/75000-salary-in-nevada', permanent: true },
    { source: '/usa/75000-salary-new-jersey', destination: '/usa/75000-salary-in-new-jersey', permanent: true },
    { source: '/usa/75000-salary-new-york', destination: '/usa/75000-salary-in-new-york', permanent: true },
    { source: '/usa/75000-salary-north-carolina', destination: '/usa/75000-salary-in-north-carolina', permanent: true },
    { source: '/usa/75000-salary-ohio', destination: '/usa/75000-salary-in-ohio', permanent: true },
    { source: '/usa/75000-salary-pennsylvania', destination: '/usa/75000-salary-in-pennsylvania', permanent: true },
    { source: '/usa/75000-salary-tennessee', destination: '/usa/75000-salary-in-tennessee', permanent: true },
    { source: '/usa/75000-salary-texas', destination: '/usa/75000-salary-in-texas', permanent: true },
    { source: '/usa/75000-salary-virginia', destination: '/usa/75000-salary-in-virginia', permanent: true },
    { source: '/usa/75000-salary-washington', destination: '/usa/75000-salary-in-washington', permanent: true },

    // 80000 salary redirects
    { source: '/usa/80000-salary-california', destination: '/usa/80000-salary-in-california', permanent: true },
    { source: '/usa/80000-salary-florida', destination: '/usa/80000-salary-in-florida', permanent: true },
    { source: '/usa/80000-salary-new-york', destination: '/usa/80000-salary-in-new-york', permanent: true },
    { source: '/usa/80000-salary-texas', destination: '/usa/80000-salary-in-texas', permanent: true },

    // 90000 salary redirects
    { source: '/usa/90000-salary-california', destination: '/usa/90000-salary-in-california', permanent: true },
    { source: '/usa/90000-salary-new-york', destination: '/usa/90000-salary-in-new-york', permanent: true },
    { source: '/usa/90000-salary-texas', destination: '/usa/90000-salary-in-texas', permanent: true },

    // 100000 salary redirects
    { source: '/usa/100000-salary-arizona', destination: '/usa/100000-salary-in-arizona', permanent: true },
    { source: '/usa/100000-salary-california', destination: '/usa/100000-salary-in-california', permanent: true },
    { source: '/usa/100000-salary-colorado', destination: '/usa/100000-salary-in-colorado', permanent: true },
    { source: '/usa/100000-salary-florida', destination: '/usa/100000-salary-in-florida', permanent: true },
    { source: '/usa/100000-salary-georgia', destination: '/usa/100000-salary-in-georgia', permanent: true },
    { source: '/usa/100000-salary-illinois', destination: '/usa/100000-salary-in-illinois', permanent: true },
    { source: '/usa/100000-salary-maryland', destination: '/usa/100000-salary-in-maryland', permanent: true },
    { source: '/usa/100000-salary-massachusetts', destination: '/usa/100000-salary-in-massachusetts', permanent: true },
    { source: '/usa/100000-salary-michigan', destination: '/usa/100000-salary-in-michigan', permanent: true },
    { source: '/usa/100000-salary-nevada', destination: '/usa/100000-salary-in-nevada', permanent: true },
    { source: '/usa/100000-salary-new-jersey', destination: '/usa/100000-salary-in-new-jersey', permanent: true },
    { source: '/usa/100000-salary-new-york', destination: '/usa/100000-salary-in-new-york', permanent: true },
    { source: '/usa/100000-salary-north-carolina', destination: '/usa/100000-salary-in-north-carolina', permanent: true },
    { source: '/usa/100000-salary-ohio', destination: '/usa/100000-salary-in-ohio', permanent: true },
    { source: '/usa/100000-salary-pennsylvania', destination: '/usa/100000-salary-in-pennsylvania', permanent: true },
    { source: '/usa/100000-salary-tennessee', destination: '/usa/100000-salary-in-tennessee', permanent: true },
    { source: '/usa/100000-salary-texas', destination: '/usa/100000-salary-in-texas', permanent: true },
    { source: '/usa/100000-salary-virginia', destination: '/usa/100000-salary-in-virginia', permanent: true },
    { source: '/usa/100000-salary-washington', destination: '/usa/100000-salary-in-washington', permanent: true },

    // 120000 salary redirects
    { source: '/usa/120000-salary-california', destination: '/usa/120000-salary-in-california', permanent: true },
    { source: '/usa/120000-salary-florida', destination: '/usa/120000-salary-in-florida', permanent: true },
    { source: '/usa/120000-salary-new-york', destination: '/usa/120000-salary-in-new-york', permanent: true },
    { source: '/usa/120000-salary-texas', destination: '/usa/120000-salary-in-texas', permanent: true },

    // 150000 salary redirects
    { source: '/usa/150000-salary-california', destination: '/usa/150000-salary-in-california', permanent: true },
    { source: '/usa/150000-salary-florida', destination: '/usa/150000-salary-in-florida', permanent: true },
    { source: '/usa/150000-salary-new-york', destination: '/usa/150000-salary-in-new-york', permanent: true },
    { source: '/usa/150000-salary-texas', destination: '/usa/150000-salary-in-texas', permanent: true },
];
