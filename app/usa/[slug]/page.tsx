import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Shield, Clock, Lightbulb, AlertTriangle, Users, BookOpen, Calculator, TrendingUp, Info, ArrowRight, Sparkles, FileText } from 'lucide-react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { getCalculatorPage, calculatorPages } from '@/lib/content/calculators';
import { getBlogContent } from '@/lib/blog/content-loader';
import { AUTHOR } from '@/lib/content/author';

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

    // Extract external resources for authority links
    const externalResources = blogContent?.sections?.externalResources || [];

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
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4" />
                                <Link href={AUTHOR.url} className="hover:text-primary transition-colors">
                                    Reviewed by {AUTHOR.name}
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
            <div className="w-full max-w-5xl mx-auto px-6 py-12 lg:py-16">
                <Tabs defaultValue="overview" className="w-full max-w-3xl mx-auto">
                    <TabsList className="grid w-full grid-cols-4 mb-8">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
                        <TabsTrigger value="learn-more">Learn More</TabsTrigger>
                        <TabsTrigger value="faq">FAQ</TabsTrigger>
                    </TabsList>

                    {/* Overview Tab */}
                    <TabsContent value="overview" className="space-y-8">
                        {/* What This Calculator Helps You Understand */}
                        {blogContent?.sections?.whatThisHelps && blogContent.sections.whatThisHelps.length > 0 && (
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Lightbulb className="h-4 w-4 text-primary" />
                                    </div>
                                    <h2 className="text-xl font-bold tracking-tight">What You&apos;ll Learn</h2>
                                </div>
                                <div className="grid gap-2">
                                    {blogContent.sections.whatThisHelps.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border/50">
                                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-sm text-foreground/90 leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Who This Calculator Is Useful For */}
                        {blogContent?.sections?.whoUsefulFor && blogContent.sections.whoUsefulFor.length > 0 && (
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Users className="h-4 w-4 text-primary" />
                                    </div>
                                    <h2 className="text-xl font-bold tracking-tight">Who This Is For</h2>
                                </div>
                                <div className="grid gap-2">
                                    {blogContent.sections.whoUsefulFor.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border/50">
                                            <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-sm text-foreground/90 leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </TabsContent>

                    {/* How It Works Tab */}
                    <TabsContent value="how-it-works" className="space-y-8">
                        {/* How the Calculation Works */}
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Calculator className="h-4 w-4 text-primary" />
                                </div>
                                <h2 className="text-xl font-bold tracking-tight">Calculation Steps</h2>
                            </div>
                            {blogContent?.sections?.howItWorks && blogContent.sections.howItWorks.length > 0 ? (
                                <div className="space-y-3">
                                    {blogContent.sections.howItWorks.map((step, index) => (
                                        <div key={index} className="flex gap-4 p-4 rounded-lg bg-card border border-border/50">
                                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary text-sm flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <p className="text-sm text-foreground/90 leading-relaxed pt-1">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-4 rounded-lg bg-card border border-border/50 text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap">
                                    {content.howItWorks}
                                </div>
                            )}

                            {content.formula && (
                                <div className="mt-6 p-5 rounded-xl bg-muted/50 border border-border/50">
                                    <div className="flex items-center gap-2 mb-3">
                                        <FileText className="h-4 w-4 text-primary" />
                                        <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Formula</h3>
                                    </div>
                                    <div className="p-4 rounded-lg bg-background border border-border/40 font-mono text-sm overflow-x-auto">
                                        {content.formula}
                                    </div>
                                    {content.formulaExplanation && (
                                        <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                                            {content.formulaExplanation}
                                        </p>
                                    )}
                                </div>
                            )}
                        </section>

                        {/* Assumptions Used */}
                        {blogContent?.sections?.assumptions && blogContent.sections.assumptions.length > 0 && (
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Info className="h-4 w-4 text-primary" />
                                    </div>
                                    <h2 className="text-xl font-bold tracking-tight">Assumptions</h2>
                                </div>
                                <div className="p-5 rounded-xl bg-muted/30 border border-border/50">
                                    <ul className="space-y-2">
                                        {blogContent.sections.assumptions.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm text-foreground/85">
                                                <span className="text-primary mt-1 font-bold">•</span>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        )}
                    </TabsContent>

                    {/* Learn More Tab */}
                    <TabsContent value="learn-more" className="space-y-8">
                        {/* Common Mistakes */}
                        {blogContent?.sections?.commonMistakes && blogContent.sections.commonMistakes.length > 0 && (
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-destructive/10">
                                        <AlertTriangle className="h-4 w-4 text-destructive" />
                                    </div>
                                    <h2 className="text-xl font-bold tracking-tight">Common Mistakes</h2>
                                </div>
                                <div className="grid gap-2">
                                    {blogContent.sections.commonMistakes.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                                            <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                                            <p className="text-sm text-foreground/90 leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Why Results Can Vary */}
                        {blogContent?.sections?.whyResultsVary && blogContent.sections.whyResultsVary.length > 0 && (
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <TrendingUp className="h-4 w-4 text-primary" />
                                    </div>
                                    <h2 className="text-xl font-bold tracking-tight">Why Results Vary</h2>
                                </div>
                                <div className="grid gap-2">
                                    {blogContent.sections.whyResultsVary.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border/50">
                                            <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-sm text-foreground/90 leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Deep Dive */}
                        {blogContent?.sections?.deepDive && blogContent.sections.deepDive.length > 0 && (
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <BookOpen className="h-4 w-4 text-primary" />
                                    </div>
                                    <h2 className="text-xl font-bold tracking-tight">In-Depth Analysis</h2>
                                </div>
                                <div className="p-5 rounded-xl bg-muted/30 border border-border/50">
                                    <p className="text-sm text-foreground/90 leading-relaxed">
                                        {blogContent.sections.deepDive.join(' ')}
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* Practical Examples */}
                        {blogContent?.sections?.examples && blogContent.sections.examples.length > 0 && (
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <FileText className="h-4 w-4 text-primary" />
                                    </div>
                                    <h2 className="text-xl font-bold tracking-tight">Examples</h2>
                                </div>
                                <div className="grid gap-3">
                                    {blogContent.sections.examples.map((example, index) => (
                                        <div key={index} className="flex gap-4 p-4 rounded-lg bg-card border border-border/50">
                                            <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center font-bold text-primary text-xs flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <p className="text-sm text-foreground/90 leading-relaxed">{example}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Expert Tips */}
                        {blogContent?.sections?.expertTips && blogContent.sections.expertTips.length > 0 && (
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Lightbulb className="h-4 w-4 text-primary" />
                                    </div>
                                    <h2 className="text-xl font-bold tracking-tight">Expert Tips</h2>
                                </div>
                                <div className="grid gap-2">
                                    {blogContent.sections.expertTips.map((tip, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                                            <Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-sm text-foreground/90 leading-relaxed">{tip}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </TabsContent>

                    {/* FAQ Tab */}
                    <TabsContent value="faq" className="space-y-6">
                        {faq.length > 0 ? (
                            <div className="rounded-xl border border-border/50 bg-card overflow-hidden">
                                <Accordion type="single" collapsible className="w-full">
                                    {faq.map((item, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index}`}
                                            className="border-b border-border/50 last:border-b-0"
                                        >
                                            <AccordionTrigger className="text-base font-semibold hover:no-underline hover:text-primary py-5 px-5 transition-colors text-left">
                                                {item.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-foreground/80 text-sm leading-relaxed pb-5 px-5">
                                                {item.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ) : (
                            <div className="p-8 text-center text-muted-foreground text-sm">
                                No frequently asked questions available for this calculator.
                            </div>
                        )}
                    </TabsContent>
                </Tabs>

                {/* Related Content Section - Always Visible */}
                <div className="max-w-3xl mx-auto mt-12 space-y-8">
                    {/* Related Calculators Grid */}
                    {((blogContent?.sections?.relatedCalculators && blogContent.sections.relatedCalculators.length > 0) || linkingData.related.length > 0) && (
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Calculator className="h-4 w-4 text-primary" />
                                </div>
                                <h2 className="text-xl font-bold tracking-tight">Related Calculators</h2>
                            </div>
                            {blogContent?.sections?.relatedCalculators ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {blogContent.sections.relatedCalculators.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            className="group flex items-center justify-between p-4 rounded-lg border border-border/50 bg-card hover:border-primary/50 hover:bg-muted/50 transition-all"
                                        >
                                            <span className="font-medium text-sm text-foreground/90 group-hover:text-primary transition-colors">{link.title}</span>
                                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <RelatedCalculatorsGrid links={linkingData.related} />
                            )}
                        </section>
                    )}

                    {/* Variation Pills */}
                    {linkingData.variations.length > 0 && (
                        <div className="border-t pt-8">
                            <VariationPills links={linkingData.variations} />
                        </div>
                    )}

                    {/* External Authority Resources */}
                    {externalResources.length > 0 && (
                        <section className="border-t pt-8">
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-primary" />
                                Official Resources
                            </h2>
                            <div className="grid gap-3">
                                {externalResources.map((resource, index) => (
                                    <a
                                        key={index}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-start gap-3 p-3 rounded-lg border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all"
                                    >
                                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-medium text-sm text-foreground/90 group-hover:text-primary">{resource.title}</span>
                                            {resource.description && (
                                                <p className="text-xs text-muted-foreground mt-0.5">{resource.description}</p>
                                            )}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Authority Links */}
                    <div className="border-t pt-8">
                        <AuthorityLinks />
                    </div>
                </div>
            </div>

            {/* Structured Data */}
            <WebPageSchema
                title={h1}
                description={content.intro}
                url={`https://calctrust.com/usa/${slug}`}
                dateModified={pageData.lastUpdated}
                author={{
                    name: AUTHOR.name,
                    url: AUTHOR.url,
                    credentials: AUTHOR.credentials,
                }}
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
