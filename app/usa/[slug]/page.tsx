import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Shield, Clock } from 'lucide-react';
import { CalculatorShell, CalculatorErrorBoundary } from '@/components/calculator';
import { FAQSchema, BreadcrumbSchema, WebPageSchema, HowToSchema } from '@/components/seo/Schema';
import {
    ContextualLink,
    RelatedCalculatorsGrid,
    VariationPills,
    AuthorityLinks
} from '@/components/seo/InternalLinks';
import { getPageLinkingData } from '@/lib/linking-utils';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { getCalculatorPage, calculatorPages } from '@/lib/content/calculators';
import { getBlogContent } from '@/lib/blog/content-loader';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return calculatorPages.map((page) => ({
        slug: page.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const pageData = getCalculatorPage(slug);

    if (!pageData) {
        return {
            title: 'Calculator Not Found',
        };
    }

    return {
        title: pageData.title,
        description: pageData.description,
        alternates: {
            canonical: `https://calctrust.com/usa/${slug}`,
        },
        openGraph: {
            title: pageData.title,
            description: pageData.description,
            type: 'website',
            url: `https://calctrust.com/usa/${slug}`,
            siteName: 'CalcTrust',
            images: [
                {
                    url: 'https://calctrust.com/og-calculator.png',
                    width: 1200,
                    height: 630,
                    alt: `${pageData.title} - CalcTrust`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: pageData.title,
            description: pageData.description,
            images: ['https://calctrust.com/og-calculator.png'],
        },
    };
}

export default async function CalculatorPage({ params }: PageProps) {
    const { slug } = await params;
    const pageData = getCalculatorPage(slug);

    if (!pageData) {
        notFound();
    }

    const {
        h1,
        content,
        faq: defaultFaq,
        inputs,
        outputs,
        calculatorType,
        stateCode,
    } = pageData;

    // Load TypeScript content if available (YMYL-compliant content)
    const blogContent = await getBlogContent(slug);

    // Use blog content FAQ if available, otherwise fallback to default
    const faq = blogContent?.sections?.faq || defaultFaq;

    // Use blog content subheading if available
    const intro = blogContent?.subheading || content.intro;

    // Get automated linking data for SEO
    const linkingData = getPageLinkingData(pageData);

    return (
        <main className="min-h-screen pb-24">
            {/* Breadcrumb */}
            <div className="border-b border-border/40 bg-muted/30">
                <div className="container max-w-5xl mx-auto py-4 px-6">
                    <nav className="flex items-center text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground/50" />
                        <Link href="/usa" className="hover:text-foreground transition-colors">USA</Link>
                        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground/50" />
                        <span className="text-foreground font-medium truncate">{h1}</span>
                    </nav>
                </div>
            </div>

            {/* Header + Calculator */}
            <div className="relative overflow-hidden border-b border-border/40">
                {/* Subtle Background */}
                <div className="absolute inset-0 aurora-bg opacity-50 -z-10" />
                <div className="absolute inset-0 dot-pattern opacity-30 -z-10" />

                <div className="w-full max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-8">
                    <div className="space-y-6 max-w-3xl">
                        {/* Trust Badge */}
                        <Badge className="bg-foreground/5 text-foreground border-foreground/10">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Updated for 2025 Tax Rules
                        </Badge>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            {h1}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                            {intro}
                        </p>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                            {pageData.lastUpdated && (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Clock className="h-4 w-4" />
                                    <span>Last updated: {new Date(pageData.lastUpdated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Shield className="h-4 w-4" />
                                <Link href="/methodology" className="hover:text-primary transition-colors">
                                    View Methodology
                                </Link>
                            </div>
                        </div>

                        {/* Contextual Link */}
                        {linkingData.contextual && (
                            <div className="pt-2">
                                <ContextualLink
                                    slug={linkingData.contextual.slug}
                                    title={linkingData.contextual.title}
                                />
                            </div>
                        )}
                    </div>

                    {/* Calculator with Error Boundary */}
                    <div className="mt-8">
                        <CalculatorErrorBoundary>
                            <CalculatorShell
                                calculatorType={calculatorType}
                                inputs={inputs}
                                outputs={outputs}
                                stateCode={stateCode}
                            />
                        </CalculatorErrorBoundary>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="w-full max-w-5xl mx-auto px-6 py-16 lg:py-24 space-y-16">

                {/* What This Calculator Helps You Understand */}
                {blogContent?.sections?.whatThisHelps && blogContent.sections.whatThisHelps.length > 0 && (
                    <section className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-semibold tracking-tight mb-6">What This Calculator Helps You Understand</h2>
                        <ul className="space-y-3 text-muted-foreground">
                            {blogContent.sections.whatThisHelps.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Who This Calculator Is Useful For */}
                {blogContent?.sections?.whoUsefulFor && blogContent.sections.whoUsefulFor.length > 0 && (
                    <section className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-semibold tracking-tight mb-6">Who This Calculator Is Useful For</h2>
                        <ul className="space-y-3 text-muted-foreground">
                            {blogContent.sections.whoUsefulFor.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-primary font-semibold">→</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* How the Calculation Works */}
                <article className="prose prose-zinc dark:prose-invert max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold tracking-tight mb-6">How It Works</h2>
                    {blogContent?.sections?.howItWorks && blogContent.sections.howItWorks.length > 0 ? (
                        <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                            {blogContent.sections.howItWorks.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    ) : (
                        <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                            {content.howItWorks}
                        </div>
                    )}

                    {content.formula && (
                        <div className="my-12 p-8 bg-muted/50 rounded-2xl border border-border/50 not-prose">
                            <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-4">Calculation Formula</h3>
                            <div className="font-mono text-sm md:text-base overflow-x-auto">
                                {content.formula}
                            </div>
                            {content.formulaExplanation && (
                                <p className="mt-4 text-sm text-muted-foreground">
                                    {content.formulaExplanation}
                                </p>
                            )}
                        </div>
                    )}
                </article>

                {/* Assumptions Used */}
                {blogContent?.sections?.assumptions && blogContent.sections.assumptions.length > 0 && (
                    <section className="max-w-3xl mx-auto bg-muted/30 rounded-2xl p-8 border border-border/50">
                        <h2 className="text-xl font-semibold tracking-tight mb-6">Assumptions Used</h2>
                        <ul className="space-y-3 text-muted-foreground text-sm">
                            {blogContent.sections.assumptions.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-muted-foreground/60">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Common Mistakes People Make */}
                {blogContent?.sections?.commonMistakes && blogContent.sections.commonMistakes.length > 0 && (
                    <section className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-semibold tracking-tight mb-6">Common Mistakes to Avoid</h2>
                        <ul className="space-y-4 text-muted-foreground">
                            {blogContent.sections.commonMistakes.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                                    <span className="text-destructive font-bold">!</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Why Results Can Vary */}
                {blogContent?.sections?.whyResultsVary && blogContent.sections.whyResultsVary.length > 0 && (
                    <section className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-semibold tracking-tight mb-6">Why Results Can Vary by Situation</h2>
                        <ul className="space-y-3 text-muted-foreground">
                            {blogContent.sections.whyResultsVary.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-amber-500">⚡</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Related Calculators Grid */}
                {(blogContent?.sections?.relatedCalculators && blogContent.sections.relatedCalculators.length > 0) || linkingData.related.length > 0 ? (
                    <section className="max-w-3xl mx-auto border-t pt-16">
                        <h2 className="text-2xl font-semibold tracking-tight mb-8">Related Calculators</h2>
                        {blogContent?.sections?.relatedCalculators ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {blogContent.sections.relatedCalculators.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className="p-4 rounded-xl border border-border/60 hover:border-primary/50 hover:bg-muted/50 transition-colors"
                                    >
                                        <span className="font-medium">{link.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <RelatedCalculatorsGrid links={linkingData.related} />
                        )}
                    </section>
                ) : null}

                {/* Variation Pills */}
                {linkingData.variations.length > 0 && (
                    <div className="max-w-3xl mx-auto border-t pt-16">
                        <VariationPills links={linkingData.variations} />
                    </div>
                )}

                {/* FAQ Section */}
                {faq.length > 0 && (
                    <div className="max-w-3xl mx-auto border-t pt-16">
                        <h2 className="text-3xl font-semibold tracking-tight mb-8">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {faq.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-b-border/60">
                                    <AccordionTrigger className="text-lg hover:no-underline hover:text-primary py-6">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                )}

                {/* Authority Links */}
                <div className="max-w-3xl mx-auto border-t pt-16">
                    <AuthorityLinks />
                </div>
            </div>

            {/* Structured Data */}
            <WebPageSchema
                title={h1}
                description={content.intro}
                url={`https://calctrust.com/usa/${slug}`}
                dateModified={pageData.lastUpdated}
            />
            <BreadcrumbSchema
                items={[
                    { name: 'Home', url: 'https://calctrust.com' },
                    { name: 'USA', url: 'https://calctrust.com/usa' },
                    { name: h1, url: `https://calctrust.com/usa/${slug}` },
                ]}
            />
            <FAQSchema faqs={faq} />
            <HowToSchema
                title={`How to calculate ${h1.toLowerCase()}`}
                description={content.howItWorks}
                steps={[
                    `Enter your ${inputs[0]?.label?.toLowerCase() || 'financial information'} in the calculator above.`,
                    inputs.length > 1 ? `Fill in additional details like ${inputs.slice(1, 3).map(i => i.label?.toLowerCase()).filter(Boolean).join(', ')}.` : 'Adjust any optional settings as needed.',
                    `Review your ${outputs[0]?.label?.toLowerCase() || 'calculation results'} in the results panel.`,
                    'See the full breakdown of taxes and deductions applied.',
                    'Use the results to make informed financial decisions.'
                ]}
            />
        </main>
    );
}
