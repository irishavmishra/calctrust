'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import type { BlogContent as BlogContentType } from '@/lib/types/blog-content';
import Link from 'next/link';

interface BlogContentProps {
    content: BlogContentType;
    /** Where to render the calculator slot */
    calculatorSlot?: React.ReactNode;
}

/**
 * Renders structured blog content for calculator pages
 * Dynamically receives content as prop for SSG compatibility
 */
export function BlogContent({ content, calculatorSlot }: BlogContentProps) {
    const { title, subheading, sections } = content;

    return (
        <article className="prose prose-lg dark:prose-invert max-w-none">
            {/* Title & Intro */}
            <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
                {subheading && (
                    <p className="text-lg text-muted-foreground leading-relaxed">{subheading}</p>
                )}
            </header>

            {/* Calculator Slot */}
            {calculatorSlot && (
                <div className="my-8">
                    {calculatorSlot}
                </div>
            )}

            {/* What This Helps */}
            {sections.whatThisHelps && sections.whatThisHelps.length > 0 && (
                <Section title="What This Calculator Helps You Understand">
                    <ul className="space-y-2">
                        {sections.whatThisHelps.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Section>
            )}

            {/* Who This Is For */}
            {sections.whoUsefulFor && sections.whoUsefulFor.length > 0 && (
                <Section title="Who This Calculator Is Useful For">
                    <ul className="space-y-2">
                        {sections.whoUsefulFor.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Section>
            )}

            {/* How It Works */}
            {sections.howItWorks && sections.howItWorks.length > 0 && (
                <Section title="How the Calculation Works">
                    <ol className="space-y-3 list-decimal list-inside">
                        {sections.howItWorks.map((step, i) => (
                            <li key={i}>{step}</li>
                        ))}
                    </ol>
                </Section>
            )}

            {/* What Is 401(k) - Educational Foundation */}
            {sections.whatIs401k && sections.whatIs401k.length > 0 && (
                <Section title="What Is a 401(k)?">
                    <div className="space-y-4">
                        {sections.whatIs401k.map((paragraph, i) => (
                            <p key={i} className="leading-relaxed">{paragraph}</p>
                        ))}
                    </div>
                </Section>
            )}

            {/* Pros and Cons */}
            {sections.prosAndCons && sections.prosAndCons.length > 0 && (
                <Section title="Pros and Cons of a 401(k)">
                    <div className="space-y-2">
                        {sections.prosAndCons.map((item, i) => (
                            <p key={i} className={`leading-relaxed ${item.startsWith('PROS:') || item.startsWith('CONS:') ? 'font-semibold text-lg mt-4' : ''}`}>
                                {item}
                            </p>
                        ))}
                    </div>
                </Section>
            )}

            {/* Roth vs Traditional */}
            {sections.rothVsTraditional && sections.rothVsTraditional.length > 0 && (
                <Section title="Roth 401(k) vs Traditional 401(k)">
                    <div className="space-y-2">
                        {sections.rothVsTraditional.map((item, i) => (
                            <p key={i} className={`leading-relaxed ${item.startsWith('TRADITIONAL') || item.startsWith('ROTH') ? 'font-semibold text-lg mt-4' : ''}`}>
                                {item}
                            </p>
                        ))}
                    </div>
                </Section>
            )}

            {/* Early Withdrawal */}
            {sections.earlyWithdrawal && sections.earlyWithdrawal.length > 0 && (
                <Section title="Early Withdrawal Rules & Penalties">
                    <div className="space-y-2">
                        {sections.earlyWithdrawal.map((item, i) => (
                            <p key={i} className={`leading-relaxed ${item.includes('PENALTIES') || item.includes('EXCEPTIONS') ? 'font-semibold text-lg mt-4' : ''}`}>
                                {item}
                            </p>
                        ))}
                    </div>
                </Section>
            )}

            {/* Retirement Distributions */}
            {sections.retirementDistributions && sections.retirementDistributions.length > 0 && (
                <Section title="Retirement Distribution Options">
                    <div className="space-y-2">
                        {sections.retirementDistributions.map((item, i) => (
                            <p key={i} className={`leading-relaxed ${item.startsWith('Option') ? 'font-semibold mt-4' : ''}`}>
                                {item}
                            </p>
                        ))}
                    </div>
                </Section>
            )}

            {/* Required Minimum Distributions */}
            {sections.rmd && sections.rmd.length > 0 && (
                <Section title="Required Minimum Distributions (RMDs)">
                    <div className="space-y-2">
                        {sections.rmd.map((item, i) => (
                            <p key={i} className="leading-relaxed">{item}</p>
                        ))}
                    </div>
                </Section>
            )}

            {/* Solo 401(k) */}
            {sections.solo401k && sections.solo401k.length > 0 && (
                <Section title="Solo 401(k) for Self-Employed">
                    <div className="space-y-2">
                        {sections.solo401k.map((item, i) => (
                            <p key={i} className="leading-relaxed">{item}</p>
                        ))}
                    </div>
                </Section>
            )}

            {/* Deep Dive */}
            {sections.deepDive && sections.deepDive.length > 0 && (
                <Section title="In-Depth Analysis">
                    <div className="space-y-4">
                        {sections.deepDive.map((paragraph, i) => (
                            <p key={i} className={`leading-relaxed ${paragraph.includes('UNDERSTANDING') || paragraph.includes('VESTING') || paragraph.includes('INVESTMENT') ? 'font-semibold text-lg mt-6' : ''}`}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </Section>
            )}

            {/* Examples */}
            {sections.examples && sections.examples.length > 0 && (
                <Section title="Practical Examples">
                    {sections.examples.map((example, i) => (
                        <Card key={i} className="mb-4">
                            <CardContent className="pt-4">
                                <p className={example.startsWith('EXAMPLE') ? 'font-semibold' : ''}>{example}</p>
                            </CardContent>
                        </Card>
                    ))}
                </Section>
            )}

            {/* Expert Tips */}
            {sections.expertTips && sections.expertTips.length > 0 && (
                <Section title="Expert Tips & Considerations">
                    <ul className="space-y-2">
                        {sections.expertTips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-amber-500 mt-1">💡</span>
                                <span>{tip}</span>
                            </li>
                        ))}
                    </ul>
                </Section>
            )}

            {/* Assumptions */}
            {sections.assumptions && sections.assumptions.length > 0 && (
                <Section title="Assumptions Used">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        {sections.assumptions.map((item, i) => (
                            <li key={i}>• {item}</li>
                        ))}
                    </ul>
                </Section>
            )}

            {/* Common Mistakes */}
            {sections.commonMistakes && sections.commonMistakes.length > 0 && (
                <Section title="Common Mistakes People Make">
                    <ul className="space-y-2">
                        {sections.commonMistakes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">⚠</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Section>
            )}

            {/* Why Results Vary */}
            {sections.whyResultsVary && sections.whyResultsVary.length > 0 && (
                <Section title="Why Results Can Vary by Situation">
                    <ul className="space-y-2 text-muted-foreground">
                        {sections.whyResultsVary.map((item, i) => (
                            <li key={i}>• {item}</li>
                        ))}
                    </ul>
                </Section>
            )}

            {/* FAQ */}
            {sections.faq && sections.faq.length > 0 && (
                <Section title="Frequently Asked Questions">
                    <Accordion type="single" collapsible className="w-full">
                        {sections.faq.map((item, i) => (
                            <AccordionItem key={i} value={`faq-${i}`}>
                                <AccordionTrigger className="text-left">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Section>
            )}

            {/* Related Calculators */}
            {sections.relatedCalculators && sections.relatedCalculators.length > 0 && (
                <Section title="Related Calculators">
                    <div className="grid gap-3 sm:grid-cols-2">
                        {sections.relatedCalculators.map((calc, i) => (
                            <Link
                                key={i}
                                href={calc.href}
                                className="block p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
                            >
                                <span className="font-medium">{calc.title}</span>
                                <span className="text-muted-foreground ml-2">→</span>
                            </Link>
                        ))}
                    </div>
                </Section>
            )}

            {/* Freshness Signal */}
            {sections.freshnessSignal && (
                <footer className="mt-12 pt-6 border-t text-sm text-muted-foreground italic">
                    Last reviewed: {sections.freshnessSignal}. Tax rates and calculations reflect current U.S. federal guidelines.
                </footer>
            )}
        </article>
    );
}

/** Reusable section wrapper */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            {children}
        </section>
    );
}

export default BlogContent;
