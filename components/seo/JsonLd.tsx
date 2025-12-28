"use client";

export function OrganizationJsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CalcTrust",
        "url": "https://calctrust.com",
        "logo": "https://calctrust.com/icon.png",
        "description": "Free salary calculators for all 50 US states. Calculate take-home pay, hourly rates, overtime, and taxes instantly.",
        "sameAs": []
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function WebSiteJsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "CalcTrust",
        "url": "https://calctrust.com",
        "description": "Free salary calculators for all 50 US states. Calculate take-home pay, hourly rates, overtime, and taxes instantly.",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://calctrust.com/usa?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function SoftwareApplicationJsonLd({
    name,
    description,
    applicationCategory = "FinanceApplication",
}: {
    name: string;
    description: string;
    applicationCategory?: string;
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": name,
        "description": description,
        "applicationCategory": applicationCategory,
        "operatingSystem": "Web Browser",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
