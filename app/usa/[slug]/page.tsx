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
            <div className="w-full max-w-5xl mx-auto px-6 py-16 lg:py-24">

                {/* Primary Information Section */}
                <div className="space-y-20 mb-20">
                    {/* What This Calculator Helps You Understand */}
                    {blogContent?.sections?.whatThisHelps && blogContent.sections.whatThisHelps.length > 0 && (
                        <section className="max-w-3xl mx-auto">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2.5 rounded-xl bg-primary/10 dark:bg-primary/20 shadow-sm">
                                        <Lightbulb className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">What This Calculator Helps You Understand</h2>
                                </div>
                                <p className="text-sm text-muted-foreground ml-12">Key insights you'll gain from using this tool</p>
                            </div>
                            <div className="grid gap-3">
                                {blogContent.sections.whatThisHelps.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:bg-muted/40 hover:shadow-sm transition-all duration-300 group"
                                    >
                                        <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors mt-0.5 flex-shrink-0">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                        </div>
                                        <p className="text-base text-foreground/90 leading-relaxed pt-0.5 flex-1">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Who This Calculator Is Useful For */}
                    {blogContent?.sections?.whoUsefulFor && blogContent.sections.whoUsefulFor.length > 0 && (
                        <section className="max-w-3xl mx-auto">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2.5 rounded-xl bg-primary/10 dark:bg-primary/20 shadow-sm">
                                        <Users className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Who This Calculator Is Useful For</h2>
                                </div>
                                <p className="text-sm text-muted-foreground ml-12">Identify if this tool matches your needs</p>
                            </div>
                            <div className="grid gap-3">
                                {blogContent.sections.whoUsefulFor.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-card to-muted/20 border border-border/50 hover:border-primary/40 hover:shadow-sm transition-all duration-300 group"
                                    >
                                        <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors mt-0.5 flex-shrink-0">
                                            <ArrowRight className="h-4 w-4 text-primary" />
                                        </div>
                                        <p className="text-base text-foreground/90 leading-relaxed pt-0.5 flex-1">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Divider */}
                <div className="max-w-3xl mx-auto my-20">
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                </div>

                {/* How It Works Section */}
                <div className="space-y-20 mb-20">

                    {/* How the Calculation Works */}
                    <article className="max-w-3xl mx-auto">
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2.5 rounded-xl bg-primary/10 dark:bg-primary/20 shadow-sm">
                                    <Calculator className="h-5 w-5 text-primary" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">How It Works</h2>
                            </div>
                            <p className="text-sm text-muted-foreground ml-12">Step-by-step breakdown of the calculation process</p>
                        </div>
                        {blogContent?.sections?.howItWorks && blogContent.sections.howItWorks.length > 0 ? (
                            <div className="space-y-4">
                                {blogContent.sections.howItWorks.map((step, index) => (
                                    <div 
                                        key={index} 
                                        className="flex gap-5 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-sm transition-all duration-300 group"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors flex items-center justify-center font-bold text-primary text-base shadow-sm">
                                            {index + 1}
                                        </div>
                                        <p className="text-base text-foreground/90 leading-relaxed pt-2 flex-1">{step}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-6 rounded-xl bg-card border border-border/50 text-lg text-foreground/90 leading-relaxed whitespace-pre-wrap">
                                {content.howItWorks}
                            </div>
                        )}

                        {content.formula && (
                            <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 dark:from-muted/30 dark:to-muted/20 border border-border/50 shadow-lg">
                                <div className="flex items-center gap-2.5 mb-5">
                                    <FileText className="h-4 w-4 text-primary" />
                                    <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Calculation Formula</h3>
                                </div>
                                <div className="p-5 rounded-xl bg-background/60 dark:bg-background/40 border border-border/40 font-mono text-sm md:text-base overflow-x-auto text-foreground/90 shadow-inner">
                                    {content.formula}
                                </div>
                                {content.formulaExplanation && (
                                    <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                                        {content.formulaExplanation}
                                    </p>
                                )}
                            </div>
                        )}
                    </article>

                    {/* Assumptions Used */}
                    {blogContent?.sections?.assumptions && blogContent.sections.assumptions.length > 0 && (
                        <section className="max-w-3xl mx-auto">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2.5 rounded-xl bg-primary/10 dark:bg-primary/20 shadow-sm">
                                        <Info className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Assumptions Used</h2>
                                </div>
                                <p className="text-sm text-muted-foreground ml-12">Important parameters and defaults in our calculations</p>
                            </div>
                            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-muted/40 to-muted/20 dark:from-muted/30 dark:to-muted/10 border border-border/50 shadow-lg">
                                <ul className="space-y-3.5">
                                    {blogContent.sections.assumptions.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3.5 text-foreground/85">
                                            <span className="text-primary mt-2 flex-shrink-0 text-lg font-bold">•</span>
                                            <span className="leading-relaxed text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    )}
                </div>

                {/* Divider */}
                <div className="max-w-3xl mx-auto my-20">
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                </div>

                {/* Advanced Information Section */}
                <div className="space-y-20 mb-20">

                    {/* Common Mistakes People Make */}
                    {blogContent?.sections?.commonMistakes && blogContent.sections.commonMistakes.length > 0 && (
                        <section className="max-w-3xl mx-auto">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2.5 rounded-xl bg-destructive/10 dark:bg-destructive/20 shadow-sm">
                                        <AlertTriangle className="h-5 w-5 text-destructive" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Common Mistakes to Avoid</h2>
                                </div>
                                <p className="text-sm text-muted-foreground ml-12">Watch out for these frequent errors</p>
                            </div>
                            <div className="grid gap-4">
                                {blogContent.sections.commonMistakes.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-start gap-4 p-5 rounded-xl bg-destructive/5 dark:bg-destructive/10 border border-destructive/20 dark:border-destructive/30 hover:border-destructive/40 dark:hover:border-destructive/50 hover:shadow-sm transition-all duration-300 group"
                                    >
                                        <div className="p-2 rounded-lg bg-destructive/20 dark:bg-destructive/30 group-hover:bg-destructive/30 dark:group-hover:bg-destructive/40 transition-colors mt-0.5 flex-shrink-0">
                                            <AlertTriangle className="h-4 w-4 text-destructive" />
                                        </div>
                                        <p className="text-base text-foreground/90 leading-relaxed pt-0.5 flex-1">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Why Results Can Vary */}
                    {blogContent?.sections?.whyResultsVary && blogContent.sections.whyResultsVary.length > 0 && (
                        <section className="max-w-3xl mx-auto">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2.5 rounded-xl bg-primary/10 dark:bg-primary/20 shadow-sm">
                                        <TrendingUp className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Why Results Can Vary by Situation</h2>
                                </div>
                                <p className="text-sm text-muted-foreground ml-12">Factors that influence calculation outcomes</p>
                            </div>
                            <div className="grid gap-3">
                                {blogContent.sections.whyResultsVary.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:bg-muted/40 hover:shadow-sm transition-all duration-300 group"
                                    >
                                        <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors mt-0.5 flex-shrink-0">
                                            <Sparkles className="h-4 w-4 text-primary" />
                                        </div>
                                        <p className="text-base text-foreground/90 leading-relaxed pt-0.5 flex-1">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Divider */}
                <div className="max-w-3xl mx-auto my-20">
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                </div>

                {/* Extended Content Section */}
                <div className="space-y-20 mb-20">

                    {/* Deep Dive */}
                    {blogContent?.sections?.deepDive && blogContent.sections.deepDive.length > 0 && (
                        <section className="max-w-3xl mx-auto">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2.5 rounded-xl bg-primary/10 dark:bg-primary/20 shadow-sm">
                                        <BookOpen className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Deep Dive</h2>
                                </div>
                                <p className="text-sm text-muted-foreground ml-12">In-depth analysis and context</p>
                            </div>
                            <div className="space-y-5">
                                {blogContent.sections.deepDive.map((paragraph, index) => (
                                    <div 
                                        key={index} 
                                        className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-sm transition-all duration-300"
                                    >
                                        <p className="text-base text-foreground/90 leading-relaxed">{paragraph}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Practical Examples */}
                    {blogContent?.sections?.examples && blogContent.sections.examples.length > 0 && (
                        <section className="max-w-3xl mx-auto">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2.5 rounded-xl bg-primary/10 dark:bg-primary/20 shadow-sm">
                                        <FileText className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Practical Examples</h2>
                                </div>
                                <p className="text-sm text-muted-foreground ml-12">Real-world scenarios and use cases</p>
                            </div>
                            <div className="grid gap-4">
                                {blogContent.sections.examples.map((example, index) => (
                                    <div 
                                        key={index} 
                                        className="p-6 rounded-xl bg-gradient-to-br from-card to-muted/20 border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors flex items-center justify-center font-bold text-primary text-sm shadow-sm">
                                                {index + 1}
                                            </div>
                                            <p className="text-base text-foreground/90 leading-relaxed flex-1">{example}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Expert Tips */}
                    {blogContent?.sections?.expertTips && blogContent.sections.expertTips.length > 0 && (
                        <section className="max-w-3xl mx-auto">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2.5 rounded-xl bg-primary/10 dark:bg-primary/20 shadow-sm">
                                        <Lightbulb className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Expert Tips & Considerations</h2>
                                </div>
                                <p className="text-sm text-muted-foreground ml-12">Professional insights to maximize value</p>
                            </div>
                            <div className="grid gap-3">
                                {blogContent.sections.expertTips.map((tip, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 border border-primary/20 dark:border-primary/30 hover:border-primary/40 dark:hover:border-primary/50 hover:shadow-sm transition-all duration-300 group"
                                    >
                                        <div className="p-2 rounded-lg bg-primary/20 dark:bg-primary/30 group-hover:bg-primary/30 dark:group-hover:bg-primary/40 transition-colors mt-0.5 flex-shrink-0">
                                            <Lightbulb className="h-4 w-4 text-primary" />
                                        </div>
                                        <p className="text-base text-foreground/90 leading-relaxed pt-0.5 flex-1">{tip}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Divider */}
                <div className="max-w-3xl mx-auto my-20">
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                </div>

                {/* Related Content Section */}
                <div className="space-y-20">

                    {/* Related Calculators Grid */}
                    {(blogContent?.sections?.relatedCalculators && blogContent.sections.relatedCalculators.length > 0) || linkingData.related.length > 0 ? (
                        <section className="max-w-3xl mx-auto">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2.5 rounded-xl bg-primary/10 dark:bg-primary/20 shadow-sm">
                                        <Calculator className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Related Calculators</h2>
                                </div>
                                <p className="text-sm text-muted-foreground ml-12">Explore similar tools and resources</p>
                            </div>
                            {blogContent?.sections?.relatedCalculators ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {blogContent.sections.relatedCalculators.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            className="group flex items-center justify-between p-5 rounded-xl border border-border/50 bg-card hover:border-primary/50 hover:bg-muted/50 dark:hover:bg-muted/30 hover:shadow-sm transition-all duration-300"
                                        >
                                            <span className="font-semibold text-base text-foreground/90 group-hover:text-primary transition-colors">{link.title}</span>
                                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
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
                        <div className="max-w-3xl mx-auto">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2.5 rounded-xl bg-primary/10 dark:bg-primary/20 shadow-sm">
                                        <Info className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Frequently Asked Questions</h2>
                                </div>
                                <p className="text-sm text-muted-foreground ml-12">Quick answers to common questions</p>
                            </div>
                            <div className="rounded-xl border border-border/50 bg-card overflow-hidden shadow-sm">
                                <Accordion type="single" collapsible className="w-full">
                                    {faq.map((item, index) => (
                                        <AccordionItem 
                                            key={index} 
                                            value={`item-${index}`} 
                                            className="border-b border-border/50 last:border-b-0"
                                        >
                                            <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary py-6 px-6 transition-colors text-left">
                                                {item.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-foreground/80 text-base leading-relaxed pb-6 px-6">
                                                {item.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    )}
                </div>

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
