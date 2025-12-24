import type { Metadata } from 'next';
import Link from 'next/link';
import { Play, BarChart3, FileText, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'How Calculations Work - Understanding Your Results | CalcTrust',
    description: 'Learn how to use CalcTrust calculators, understand your results, and get the most accurate estimates for your salary, paycheck, and tax calculations.',
    alternates: {
        canonical: 'https://calctrust.com/how-calculations-work',
    },
};

export default function HowCalculationsWorkPage() {
    return (
        <main className="min-h-screen pb-24">
            {/* Hero */}
            <div className="border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="container max-w-4xl mx-auto px-6 py-16 lg:py-20">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How Calculations Work</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        A simple guide to understanding our calculators and getting the most accurate results.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container max-w-4xl mx-auto px-6 py-16 lg:py-20">
                <div className="space-y-16">
                    {/* Getting Started */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Play className="h-7 w-7 text-primary" />
                            <h2 className="text-3xl font-semibold tracking-tight">Getting Started</h2>
                        </div>
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Using CalcTrust calculators is straightforward. Here's the general workflow:
                            </p>
                            <ol className="space-y-4 text-muted-foreground">
                                <li className="flex gap-3">
                                    <span className="font-semibold text-primary shrink-0">1.</span>
                                    <span><strong>Choose a calculator</strong> that matches your needs (e.g., salary-to-hourly, paycheck calculator for your state)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-primary shrink-0">2.</span>
                                    <span><strong>Enter your information</strong> in the input fields (salary, filing status, deductions, etc.)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-primary shrink-0">3.</span>
                                    <span><strong>See instant results</strong> on the right side showing your calculations</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-primary shrink-0">4.</span>
                                    <span><strong>Review the breakdown</strong> to understand how we arrived at the numbers</span>
                                </li>
                            </ol>
                        </div>
                    </section>

                    {/* Understanding Results */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <BarChart3 className="h-7 w-7 text-primary" />
                            <h2 className="text-3xl font-semibold tracking-tight">Understanding Your Results</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-card border border-border rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3">Paycheck Calculators</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    When you use a paycheck or salary calculator, you'll see:
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li><strong>Gross Pay:</strong> Your total earnings before any deductions</li>
                                    <li><strong>Federal Tax:</strong> Income tax withheld based on IRS brackets and your W-4 filing status</li>
                                    <li><strong>FICA:</strong> Social Security (6.2%) and Medicare (1.45%) combined</li>
                                    <li><strong>State Tax:</strong> State income tax (if applicable to your state)</li>
                                    <li><strong>Pre-Tax Deductions:</strong> 401(k), HSA, or other contributions (if entered)</li>
                                    <li><strong>Net Pay:</strong> Your actual take-home amount after all deductions</li>
                                </ul>
                            </div>

                            <div className="bg-card border border-border rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3">Salary Conversion Calculators</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    These tools convert between annual salary and hourly rates:
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li><strong>Annual Salary:</strong> Total yearly income</li>
                                    <li><strong>Hourly Rate:</strong> How much you earn per hour</li>
                                    <li><strong>Weekly/Monthly:</strong> Breakdowns for budgeting purposes</li>
                                </ul>
                                <p className="text-sm text-muted-foreground mt-4">
                                    Default assumption: 40 hours/week, 52 weeks/year (2,080 hours annually). You can customize these for part-time or contract work.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Tips for Accuracy */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="h-7 w-7 text-primary" />
                            <h2 className="text-3xl font-semibold tracking-tight">Tips for Accurate Results</h2>
                        </div>
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <div className="bg-muted/30 rounded-xl p-6 space-y-4">
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">✓ Use your correct state</h4>
                                    <p className="text-muted-foreground">State tax rates vary significantly. Make sure you select where you actually work and file taxes.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">✓ Choose the right filing status</h4>
                                    <p className="text-muted-foreground">Single, married, or head of household affects your federal withholding. Use what's on your W-4.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">✓ Include pre-tax deductions</h4>
                                    <p className="text-muted-foreground">401(k), health insurance, and HSA contributions reduce your taxable income  don't forget to add them.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">✓ Enter gross pay accurately</h4>
                                    <p className="text-muted-foreground">Use your salary BEFORE deductions, not your take-home pay. Check your offer letter or pay stub.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Common Questions */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <HelpCircle className="h-7 w-7 text-primary" />
                            <h2 className="text-3xl font-semibold tracking-tight">Common Questions</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="border-l-4 border-primary/30 pl-6 py-2">
                                <h3 className="font-semibold mb-2">Why doesn't my result match my actual paycheck exactly?</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our calculators provide estimates based on standard assumptions. Your actual paycheck may include employer-specific deductions (health insurance premiums, union dues, garnishments), different withholding elections, or local taxes we don't model.
                                </p>
                            </div>

                            <div className="border-l-4 border-primary/30 pl-6 py-2">
                                <h3 className="font-semibold mb-2">Do you account for state and local taxes?</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Yes for state income taxes  each state calculator uses that state's specific tax tables. However, we don't currently model city or county taxes (e.g., NYC, San Francisco) as they vary widely and often depend on employer location vs. residence.
                                </p>
                            </div>

                            <div className="border-l-4 border-primary/30 pl-6 py-2">
                                <h3 className="font-semibold mb-2">How often are tax rates updated?</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We update federal rates annually (typically in late December for the new year) and state rates quarterly or as legislation changes. Each calculator page shows when it was last updated.
                                </p>
                            </div>

                            <div className="border-l-4 border-primary/30 pl-6 py-2">
                                <h3 className="font-semibold mb-2">Can I save my calculations?</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Currently, we don't save your data (for privacy reasons). You can bookmark specific calculator pages or take a screenshot of your results for reference.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="border-t pt-12">
                        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
                            <h3 className="text-xl font-semibold mb-3">Still Have Questions?</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                If something isn't clear or you'd like help with a specific scenario, we're here to help.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/methodology" className="text-primary font-semibold hover:underline">
                                    Read Our Methodology →
                                </Link>
                                <Link href="/contact" className="text-primary font-semibold hover:underline">
                                    Contact Us →
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
