import type { Metadata } from 'next';
import Link from 'next/link';
import { Calculator, Shield, Users, TrendingUp } from 'lucide-react';
import { FeatureCard } from '@/components/ui/feature-card';
import { LinkCard } from '@/components/ui/link-card';
import { ChecklistItem } from '@/components/ui/checklist-item';
import { TOTAL_CALCULATORS } from '@/lib/config';

export const metadata: Metadata = {
    title: 'About CalcTrust - Accurate Financial Calculators You Can Trust',
    description: 'Learn about CalcTrust&apos;s mission to provide accurate, transparent, and accessible financial calculators for salary, paycheck, and tax calculations.',
    alternates: {
        canonical: 'https://calctrust.com/about',
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen pb-24">
            {/* Hero Section */}
            <div className="border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="container max-w-4xl mx-auto px-6 py-16 lg:py-24">
                    <div className="flex items-center gap-3 mb-6">
                        <Calculator className="h-10 w-10 text-primary" />
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About CalcTrust</h1>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Free, accurate, and transparent financial calculators built to help you make informed decisions about your income, taxes, and finances.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="container max-w-4xl mx-auto px-6 py-16 lg:py-20">
                <div className="space-y-16">
                    <section>
                        <h2 className="text-3xl font-semibold tracking-tight mb-6">Our Mission</h2>
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                At CalcTrust, we believe everyone deserves access to accurate financial information. Whether you&apos;re evaluating a job offer, planning your budget, or understanding your paycheck, our calculators provide instant, reliable answers.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We&apos;ve built <strong>{TOTAL_CALCULATORS}+ specialized calculators</strong> covering every U.S. state, salary range, and common financial scenario. Each tool is designed with transparency, using publicly available tax data and proven calculation methods.
                            </p>
                        </div>
                    </section>

                    {/* Values Grid */}
                    <section>
                        <h2 className="text-3xl font-semibold tracking-tight mb-8">What We Stand For</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <FeatureCard
                                icon={Shield}
                                title="Accuracy First"
                                description="Our calculations use official IRS tax brackets, state tax tables, and FICA rates. We update our data regularly to reflect current tax laws."
                                variant="value"
                            />
                            <FeatureCard
                                icon={Users}
                                title="User Privacy"
                                description="All calculations happen in your browser. We don't collect, store, or transmit your financial information. Your data stays private."
                                variant="value"
                            />
                            <FeatureCard
                                icon={Calculator}
                                title="Transparency"
                                description="Every calculator shows you the methodology behind the numbers. No black boxes, no hidden assumptions  just clear, explainable math."
                                variant="value"
                            />
                            <FeatureCard
                                icon={TrendingUp}
                                title="Always Free"
                                description="Financial literacy shouldn't have a paywall. All our tools are completely free to use, with no hidden costs or premium tiers."
                                variant="value"
                            />
                        </div>
                    </section>

                    {/* How We're Different */}
                    <section>
                        <h2 className="text-3xl font-semibold tracking-tight mb-6">How We&apos;re Different</h2>
                        <ul className="space-y-3">
                            <ChecklistItem>
                                <strong>State-Specific Accuracy:</strong> We don&apos;t use generic estimates. Each state calculator reflects that state&apos;s actual tax laws, including local variations.
                            </ChecklistItem>
                            <ChecklistItem>
                                <strong>Real-Time Results:</strong> No waiting, no email signup. Enter your data and get instant, accurate calculations.
                            </ChecklistItem>
                            <ChecklistItem>
                                <strong>Educational Context:</strong> We explain the &quot;why&quot; behind every number, helping you understand your finances better.
                            </ChecklistItem>
                            <ChecklistItem>
                                <strong>Regular Updates:</strong> Tax laws change. We monitor federal and state updates to keep our calculators current.
                            </ChecklistItem>
                        </ul>
                    </section>

                    {/* Disclaimer CTA */}
                    <section className="border-t pt-12">
                        <div className="bg-muted/30 border border-border/60 rounded-xl p-8">
                            <h3 className="text-xl font-semibold mb-3">Important Note</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                CalcTrust provides educational tools and estimates. While we strive for accuracy, our calculators are not a substitute for professional financial or tax advice. For personalized guidance, consult a qualified CPA or financial advisor.
                            </p>
                            <Link href="/disclaimer" className="text-primary font-medium hover:underline">
                                Read our full disclaimer →
                            </Link>
                        </div>
                    </section>

                    {/* Learn More Links */}
                    <section className="border-t pt-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-6">Learn More</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <LinkCard
                                href="/methodology"
                                title="Our Methodology"
                                description="See how we build and validate our calculators"
                                showArrow={false}
                            />
                            <LinkCard
                                href="/how-calculations-work"
                                title="How Calculations Work"
                                description="Understanding our calculation process"
                                showArrow={false}
                            />
                            <LinkCard
                                href="/contact"
                                title="Contact Us"
                                description="Questions? Feedback? We'd love to hear from you"
                                showArrow={false}
                            />
                            <LinkCard
                                href="/"
                                title="Browse Calculators"
                                description={`Explore all ${TOTAL_CALCULATORS}+ financial tools`}
                                showArrow={false}
                            />
                        </div>
                    </section>
                </div>
            </div >
        </main >
    );
}
