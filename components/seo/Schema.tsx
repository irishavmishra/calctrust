import type { FAQItem } from '@/lib/content/calculators';

interface FAQSchemaProps {
    faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
    // Guard against undefined or empty faqs
    if (!faqs || faqs.length === 0) {
        return null;
    }

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface BreadcrumbSchemaProps {
    items: Array<{ name: string; url: string }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface WebPageSchemaProps {
    title: string;
    description: string;
    url: string;
    dateModified: string;
}

export function WebPageSchema({ title, description, url, dateModified }: WebPageSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description,
        url,
        dateModified,
        publisher: {
            '@type': 'Organization',
            name: 'CalcTrust',
            url: 'https://calctrust.com',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface HowToSchemaProps {
    title: string;
    description: string;
    steps: string[];
}

export function HowToSchema({ title, description, steps }: HowToSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: title,
        description,
        step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            text: step,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
