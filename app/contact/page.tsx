import type { Metadata } from 'next';
import { Mail, Clock, MessageCircle, Bug, Lightbulb, HelpCircle } from 'lucide-react';
import { LinkCard } from '@/components/ui/link-card';

export const metadata: Metadata = {
    title: 'Contact Us - CalcTrust Support & Feedback',
    description: 'Get in touch with CalcTrust. Report issues, share feedback, or ask questions about our financial calculators.',
    alternates: {
        canonical: 'https://calctrust.com/contact',
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pb-24">
            {/* Hero */}
            <div className="border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="container max-w-4xl mx-auto px-6 py-16 lg:py-20">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact Us</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        We&apos;re here to help. Reach out for questions, feedback, or to report issues with our calculators.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container max-w-4xl mx-auto px-6 py-16 lg:py-20">
                <div className="space-y-16">
                    {/* Contact Methods */}
                    <section>
                        <h2 className="text-2xl font-semibold tracking-tight mb-8">Get in Touch</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-card border border-border rounded-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Mail className="h-6 w-6 text-primary" />
                                    <h3 className="text-xl font-semibold">Email Support</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    For general inquiries, feedback, or questions:
                                </p>
                                <a href="mailto:support@calctrust.com" className="text-primary font-semibold hover:underline text-lg">
                                    support@calctrust.com
                                </a>
                            </div>

                            <div className="p-6 bg-card border border-border rounded-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Bug className="h-6 w-6 text-primary" />
                                    <h3 className="text-xl font-semibold">Report an Error</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Found a calculation issue or incorrect data?
                                </p>
                                <a href="mailto:bugs@calctrust.com" className="text-primary font-semibold hover:underline text-lg">
                                    bugs@calctrust.com
                                </a>
                            </div>

                        </div>
                    </section>

                    {/* Response Time */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Clock className="h-7 w-7 text-primary" />
                            <h2 className="text-2xl font-semibold tracking-tight">Response Time</h2>
                        </div>
                        <div className="bg-muted/30 rounded-xl p-6">
                            <p className="text-muted-foreground">
                                We typically respond to emails within <strong>2-3 business days</strong>. For critical calculation errors affecting accuracy, we prioritize fixes and aim to respond within 24-48 hours.
                            </p>
                        </div>
                    </section>

                    {/* What to Include */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <MessageCircle className="h-7 w-7 text-primary" />
                            <h2 className="text-2xl font-semibold tracking-tight">What to Include</h2>
                        </div>
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                To help us respond quickly and effectively, please include:
                            </p>
                            <div className="bg-muted/30 rounded-xl p-6 space-y-4">
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">For Error Reports:</h4>
                                    <ul className="space-y-1 text-muted-foreground">
                                        <li>• The calculator you were using (include URL)</li>
                                        <li>• The inputs you entered</li>
                                        <li>• The result you received vs. what you expected</li>
                                        <li>• Your browser and device (if applicable)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">For Feature Requests:</h4>
                                    <ul className="space-y-1 text-muted-foreground">
                                        <li>• What calculator or feature you&apos;d like to see</li>
                                        <li>• How it would help you or others</li>
                                        <li>• Any specific requirements or use cases</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <HelpCircle className="h-7 w-7 text-primary" />
                            <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-card border border-border rounded-lg">
                                <h4 className="font-semibold text-foreground mb-2">How accurate are the calculations?</h4>
                                <p className="text-muted-foreground text-sm">
                                    Our calculators use the latest tax rates and formulas from official sources. However, results are estimates and may vary based on individual circumstances.
                                </p>
                            </div>
                            <div className="p-4 bg-card border border-border rounded-lg">
                                <h4 className="font-semibold text-foreground mb-2">Is my data secure?</h4>
                                <p className="text-muted-foreground text-sm">
                                    Yes. We don&apos;t store any personal financial information. All calculations are performed locally in your browser.
                                </p>
                            </div>
                            <div className="p-4 bg-card border border-border rounded-lg">
                                <h4 className="font-semibold text-foreground mb-2">Can I use the calculators for tax planning?</h4>
                                <p className="text-muted-foreground text-sm">
                                    Our calculators provide estimates for planning purposes. For official tax filing, please consult a qualified tax professional.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Feedback */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Lightbulb className="h-7 w-7 text-primary" />
                            <h2 className="text-2xl font-semibold tracking-tight">Feedback & Suggestions</h2>
                        </div>
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Your feedback helps us improve. We&apos;re especially interested in:
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>✓ Calculators you wish we had</li>
                                <li>✓ Usability improvements for existing tools</li>
                                <li>✓ Additional information or breakdowns you&apos;d find helpful</li>
                                <li>✓ State-specific features or tax scenarios to cover</li>
                            </ul>
                        </div>
                    </section>

                    {/* Before Contacting */}
                    <section className="border-t pt-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-6">Before You Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            You might find your answer in our help pages:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <LinkCard
                                href="/how-calculations-work"
                                title="How Calculations Work"
                                description="Learn how to use our calculators"
                                showArrow={false}
                            />
                            <LinkCard
                                href="/methodology"
                                title="Our Methodology"
                                description="Understand our calculation approach"
                                showArrow={false}
                            />
                            <LinkCard
                                href="/about"
                                title="About CalcTrust"
                                description="Learn about our mission and values"
                                showArrow={false}
                            />
                            <LinkCard
                                href="/disclaimer"
                                title="Disclaimer"
                                description="Terms of use and limitations"
                                showArrow={false}
                            />
                        </div>
                    </section>

                    {/* Note */}
                    <section className="bg-muted/30 border border-border/60 rounded-xl p-6">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            <strong>Please note:</strong> While we&apos;re happy to help with questions about how our calculators work, we cannot provide personalized financial, tax, or legal advice. For professional guidance on your specific situation, consult a qualified CPA, financial planner, or tax attorney.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
