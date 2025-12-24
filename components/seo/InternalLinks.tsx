/**
 * Internal Linking SEO Components
 * 
 * Reusable components for the 4-zone linking system.
 */

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

// ============================================================================
// ZONE 1: CONTEXTUAL LINK (Inline in content)
// ============================================================================

interface ContextualLinkProps {
    slug: string;
    title: string;
    prefix?: string;
    suffix?: string;
}

/**
 * Renders an inline contextual link to a core calculator.
 * Use within content paragraphs for natural linking.
 */
export function ContextualLink({ slug, title, prefix = "You can also use our", suffix = "for more details." }: ContextualLinkProps) {
    return (
        <span className="text-muted-foreground">
            {prefix}{' '}
            <Link
                href={slug}
                className="text-primary hover:underline font-medium"
            >
                {title.toLowerCase()}
            </Link>{' '}
            {suffix}
        </span>
    );
}

// ============================================================================
// ZONE 2: RELATED CALCULATORS GRID (4-slot system)
// ============================================================================

interface RelatedLink {
    slug: string;
    title: string;
    type: 'peer' | 'parent' | 'conversion';
}

interface RelatedCalculatorsGridProps {
    links: RelatedLink[];
    className?: string;
}

/**
 * Renders a 2x2 grid of related calculator cards.
 * Follows the 4-slot system: 2 peers + 1 parent + 1 conversion.
 */
export function RelatedCalculatorsGrid({ links, className = '' }: RelatedCalculatorsGridProps) {
    if (links.length === 0) return null;

    return (
        <div className={`grid md:grid-cols-2 gap-4 ${className}`}>
            {links.map((link) => (
                <Link key={link.slug} href={link.slug} className="group block">
                    <Card className="h-full border border-border/60 shadow-none hover:border-foreground/30 hover:bg-muted/50 transition-all">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-lg group-hover:text-foreground transition-colors flex items-center">
                                {link.title}
                                <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </Link>
            ))}
        </div>
    );
}

// ============================================================================
// ZONE 3: VARIATION PILLS (Adjacent values)
// ============================================================================

interface VariationLink {
    slug: string;
    label: string;
}

interface VariationPillsProps {
    links: VariationLink[];
    title?: string;
    className?: string;
}

/**
 * Renders horizontal scrollable pill chips for variation pages.
 * Shows 5-7 adjacent value links (nearby salaries, states, etc.)
 */
export function VariationPills({ links, title = "Browse similar", className = '' }: VariationPillsProps) {
    if (links.length === 0) return null;

    return (
        <div className={className}>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {links.map((link) => (
                    <Link
                        key={link.slug}
                        href={link.slug}
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

// ============================================================================
// ZONE 4: AUTHORITY LINKS (Trust anchors)
// ============================================================================

interface AuthorityLinksProps {
    className?: string;
}

/**
 * Renders small trust/authority links (Methodology, How Calculations Work, etc.)
 * Place in footer area of calculator or site footer.
 */
export function AuthorityLinks({ className = '' }: AuthorityLinksProps) {
    const trustLinks = [
        { href: '/methodology', label: 'Our Methodology' },
        { href: '/how-calculations-work', label: 'How Calculations Work' },
        { href: '/disclaimer', label: 'Disclaimer' },
    ];

    return (
        <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${className}`}>
            {trustLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-primary hover:underline transition-colors"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
