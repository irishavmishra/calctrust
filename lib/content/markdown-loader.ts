import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface MarkdownContent {
    title: string;
    subheading?: string;
    sections: {
        whatThisHelps?: string[];
        whoUsefulFor?: string[];
        howItWorks?: string[];
        assumptions?: string[];
        commonMistakes?: string[];
        whyResultsVary?: string[];
        relatedCalculators?: Array<{ title: string; href: string }>;
        faq?: Array<{ question: string; answer: string }>;
        freshnessSignal?: string;
    };
    rawContent: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'calculators');

// Category mapping based on slug patterns
function getCategoryFromSlug(slug: string): string {
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

// Get the file path for a calculator slug
function getContentFilePath(slug: string): string | null {
    // First try pattern-based category lookup
    const category = getCategoryFromSlug(slug);
    const filePath = path.join(CONTENT_DIR, category, `${slug}.md`);

    if (fs.existsSync(filePath)) {
        return filePath;
    }

    // Fallback: search all directories
    try {
        const categories = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        for (const cat of categories) {
            const altPath = path.join(CONTENT_DIR, cat, `${slug}.md`);
            if (fs.existsSync(altPath)) {
                return altPath;
            }
        }
    } catch (error) {
        console.error('Error searching for content file:', error);
    }

    return null;
}

// Helper to strip markdown formatting from text
function stripMarkdown(text: string): string {
    return text
        .replace(/\*\*(.+?)\*\*/g, '$1')  // Remove bold **text**
        .replace(/\*(.+?)\*/g, '$1')       // Remove italic *text*
        .replace(/`(.+?)`/g, '$1')         // Remove code `text`
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')  // Remove links [text](url) -> text
        .trim();
}

// Helper to extract bullet points from a section
function extractBulletPoints(sectionContent: string): string[] {
    const bullets: string[] = [];
    const lines = sectionContent.split('\n');
    for (const line of lines) {
        const match = line.match(/^[-*]\s+(.+)$/);
        if (match) {
            bullets.push(stripMarkdown(match[1]));
        }
    }
    return bullets;
}

// Helper to extract section content between headings
function extractSection(content: string, heading: string): string | null {
    const regex = new RegExp(`## ${heading}[\\s\\S]*?(?=\\n---\\n|\\n## |$)`, 'i');
    const match = content.match(regex);
    return match ? match[0] : null;
}

// Parse markdown sections into structured data
function parseMarkdownSections(content: string): MarkdownContent['sections'] {
    const sections: MarkdownContent['sections'] = {};

    // Extract "What This Calculator Helps You Understand"
    const whatHelpsSection = extractSection(content, 'What This Calculator Helps You Understand');
    if (whatHelpsSection) {
        sections.whatThisHelps = extractBulletPoints(whatHelpsSection);
    }

    // Extract "Who This Calculator Is Useful For"
    const whoSection = extractSection(content, 'Who This Calculator Is Useful For');
    if (whoSection) {
        sections.whoUsefulFor = extractBulletPoints(whoSection);
    }

    // Extract "How the Calculation Works"
    const howSection = extractSection(content, 'How the Calculation Works');
    if (howSection) {
        sections.howItWorks = extractBulletPoints(howSection);
    }

    // Extract "Assumptions Used"
    const assumptionsSection = extractSection(content, 'Assumptions Used');
    if (assumptionsSection) {
        sections.assumptions = extractBulletPoints(assumptionsSection);
    }

    // Extract "Common Mistakes People Make"
    const mistakesSection = extractSection(content, 'Common Mistakes People Make');
    if (mistakesSection) {
        sections.commonMistakes = extractBulletPoints(mistakesSection);
    }

    // Extract "Why Results Can Vary by Situation"
    const varySection = extractSection(content, 'Why Results Can Vary');
    if (varySection) {
        sections.whyResultsVary = extractBulletPoints(varySection);
    }

    // Extract FAQ
    const faqSection = extractSection(content, 'Frequently Asked Questions');
    if (faqSection) {
        const faqItems: Array<{ question: string; answer: string }> = [];
        const questionRegex = /\*\*(.+?)\*\*\n([\s\S]+?)(?=\n\*\*|\n##|\n---|$)/g;
        let match;
        while ((match = questionRegex.exec(faqSection)) !== null) {
            faqItems.push({
                question: match[1].trim(),
                answer: match[2].trim()
            });
        }
        if (faqItems.length > 0) {
            sections.faq = faqItems;
        }
    }

    // Extract Related Calculators
    const relatedSection = extractSection(content, 'Related Calculators');
    if (relatedSection) {
        const links: Array<{ title: string; href: string }> = [];
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let linkMatch;
        while ((linkMatch = linkRegex.exec(relatedSection)) !== null) {
            links.push({
                title: linkMatch[1],
                href: linkMatch[2]
            });
        }
        if (links.length > 0) {
            sections.relatedCalculators = links;
        }
    }

    // Extract freshness signal
    const freshnessMatch = content.match(/\*Last reviewed: ([^*]+)\*/);
    if (freshnessMatch) {
        sections.freshnessSignal = freshnessMatch[1].trim();
    }

    return sections;
}

// Load markdown content for a calculator slug
export function getMarkdownContent(slug: string): MarkdownContent | null {
    const filePath = getContentFilePath(slug);

    if (!filePath) {
        return null;
    }

    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { content } = matter(fileContents);

        // Extract title from first H1
        const titleMatch = content.match(/^# (.+)$/m);
        const title = titleMatch ? titleMatch[1] : slug;

        // Extract subheading (first paragraph after H1) - using [\s\S] instead of s flag for compatibility
        const subheadingMatch = content.match(/^# .+\n\n([^\n]+)/m);
        const subheading = subheadingMatch ? subheadingMatch[1].trim() : undefined;

        const sections = parseMarkdownSections(content);

        return {
            title,
            subheading,
            sections,
            rawContent: content
        };
    } catch (error) {
        console.error(`Error loading markdown content for ${slug}:`, error);
        return null;
    }
}

// Check if markdown content exists for a slug
export function hasMarkdownContent(slug: string): boolean {
    return getContentFilePath(slug) !== null;
}

// Get all available markdown content slugs
export function getAllMarkdownSlugs(): string[] {
    const slugs: string[] = [];

    const categories = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    for (const category of categories) {
        const categoryPath = path.join(CONTENT_DIR, category);
        const files = fs.readdirSync(categoryPath)
            .filter(file => file.endsWith('.md'))
            .map(file => file.replace('.md', ''));
        slugs.push(...files);
    }

    return slugs;
}
