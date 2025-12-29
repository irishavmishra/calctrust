/**
 * Blog Content Type Definitions
 * Used for structured blog/calculator content that replaces markdown files
 */

export interface FAQItem {
    question: string;
    answer: string;
}

export interface RelatedCalculator {
    title: string;
    href: string;
}

export interface BlogContentSections {
    /** What this calculator helps you understand */
    whatThisHelps?: string[];

    /** Who this calculator is useful for */
    whoUsefulFor?: string[];

    /** How the calculation works */
    howItWorks?: string[];

    /** Assumptions used in calculations */
    assumptions?: string[];

    /** Common mistakes people make */
    commonMistakes?: string[];

    /** Why results can vary by situation */
    whyResultsVary?: string[];

    /** Deep dive or extended content paragraphs */
    deepDive?: string[];

    /** Practical examples */
    examples?: string[];

    /** Expert tips and considerations */
    expertTips?: string[];

    /** Frequently asked questions */
    faq?: FAQItem[];

    /** Related calculators */
    relatedCalculators?: RelatedCalculator[];

    /** External authority resources (IRS, SSA, state revenue) */
    externalResources?: ExternalResource[];

    /** Freshness signal (e.g., "December 2025") */
    freshnessSignal?: string;

    // ============================================
    // Extended sections for comprehensive content
    // ============================================

    /** What is [topic] - educational foundation section */
    whatIs401k?: string[];

    /** Pros and cons list */
    prosAndCons?: string[];

    /** Roth vs Traditional comparison */
    rothVsTraditional?: string[];

    /** Early withdrawal rules and penalties */
    earlyWithdrawal?: string[];

    /** Retirement distribution options */
    retirementDistributions?: string[];

    /** Required Minimum Distributions */
    rmd?: string[];

    /** Solo/Self-directed 401(k) information */
    solo401k?: string[];
}

export interface ExternalResource {
    /** Display title */
    title: string;
    /** Full URL to external resource */
    url: string;
    /** Optional description */
    description?: string;
}

export interface BlogContent {
    /** Page slug (e.g., "salary-to-hourly-calculator") */
    slug: string;

    /** Category (e.g., "core", "hourly-breakdowns") */
    category: string;

    /** Main title (H1) */
    title: string;

    /** Subheading/intro paragraph */
    subheading?: string;

    /** SEO meta title (50-60 chars, YMYL-compliant) */
    metaTitle?: string;

    /** SEO meta description (140-160 chars, YMYL-compliant) */
    metaDescription?: string;

    /** Structured content sections */
    sections: BlogContentSections;
}

export default BlogContent;
