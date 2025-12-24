import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, RefreshCw, Shield, Database } from 'lucide-react';
import { ChecklistItem } from '@/components/ui/checklist-item';
import { TextLink } from '@/components/ui/text-link';

export const metadata: Metadata = {
    title: 'Our Methodology - How CalcTrust Ensures Accuracy',
    description: 'Learn about CalcTrust\'s calculation methodology, data sources, tax law references, and our commitment to accuracy and transparency.',
    alternates: {
        canonical: 'https://calctrust.com/methodology',
    },
};

export default function MethodologyPage() {
    return (
        <main className="min-h-screen pb-24">
            {/* Hero */}
            <div className="border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="container max-w-4xl mx-auto px-6 py-16 lg:py-20">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Methodology</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        How we ensure every calculation is accurate, up-to-date, and trustworthy.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container max-w-4xl mx-auto px-6 py-16 lg:py-20">
                <div className="space-y-16">
                    {/* Data Sources */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Database className="h-7 w-7 text-primary" />
                            <h2 className="text-3xl font-semibold tracking-tight">Data Sources</h2>
                        </div>
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                All our calculations are based on official, publicly available data from authoritative sources:
                            </p>
                            <ul className="space-y-3 text-muted-foreground">
                                <li><strong>Federal Tax Brackets:</strong> IRS Publication 15 (Circular E) and annual tax tables</li>
                                <li><strong>FICA Rates:</strong> Social Security Administration guidelines (6.2% + 1.45% Medicare)</li>
                                <li><strong>State Income Tax:</strong> Individual state department of revenue publications and tax schedules</li>
                                <li><strong>State-Specific Rules:</strong> Exemptions, deductions, and special provisions per state law</li>
                            </ul>
                        </div>
                    </section>

                    {/* Calculation Approach */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle2 className="h-7 w-7 text-primary" />
                            <h2 className="text-3xl font-semibold tracking-tight">Calculation Approach</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-card border border-border rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3">1. Paycheck & Tax Calculators</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    For salary and paycheck calculations, we apply the following methodology:
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Calculate gross pay based on frequency (biweekly, monthly, etc.)</li>
                                    <li>• Apply pre-tax deductions (401k, HSA, etc.)</li>
                                    <li>• Compute federal withholding using IRS W-4 assumptions and tax brackets</li>
                                    <li>• Calculate FICA (Social Security + Medicare) at statutory rates</li>
                                    <li>• Apply state income tax based on state-specific brackets and rules</li>
                                    <li>• Output net (take-home) pay</li>
                                </ul>
                            </div>

                            <div className="bg-card border border-border rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3">2. Salary Conversion Tools</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our salary-to-hourly and hourly-to-salary calculators use standard full-time work assumptions (40 hours/week, 52 weeks/year) while allowing customization for part-time or contract scenarios.
                                </p>
                            </div>

                            <div className="bg-card border border-border rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3">3. Specialized Calculators</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Tools like overtime, bonus tax, and 401(k) impact calculators follow IRS and Department of Labor guidelines:
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• <strong>Overtime:</strong> 1.5x or 2x regular rate (per FLSA standards)</li>
                                    <li>• <strong>Bonus Tax:</strong> Supplemental wage withholding (22% flat or aggregate method)</li>
                                    <li>• <strong>401(k):</strong> Pre-tax contribution impact on taxable income</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Updates & Accuracy */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <RefreshCw className="h-7 w-7 text-primary" />
                            <h2 className="text-3xl font-semibold tracking-tight">Updates & Maintenance</h2>
                        </div>
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Tax laws and regulations change. Here's how we stay current:
                            </p>
                            <div className="grid gap-4">
                                <div className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg">
                                    <div className="text-primary font-semibold shrink-0">Annual</div>
                                    <p className="text-muted-foreground">Full review of federal tax brackets, FICA limits, and standard deductions (typically in November-December for the following year)</p>
                                </div>
                                <div className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg">
                                    <div className="text-primary font-semibold shrink-0">Quarterly</div>
                                    <p className="text-muted-foreground">State tax law monitoring and updates for states with legislative changes</p>
                                </div>
                                <div className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg">
                                    <div className="text-primary font-semibold shrink-0">As Needed</div>
                                    <p className="text-muted-foreground">Emergency updates for mid-year tax law changes or corrections</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Limitations */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="h-7 w-7 text-primary" />
                            <h2 className="text-3xl font-semibold tracking-tight">Limitations & Disclaimers</h2>
                        </div>
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                While we strive for maximum accuracy, our calculators have inherent limitations:
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>Calculators use <strong>standard withholding assumptions</strong> (single filer, no additional withholding) unless customized</li>
                                <li>State and local tax rules can be complex; we model the most common scenarios</li>
                                <li>Results are <strong>estimates</strong>  your actual paycheck may vary based on employer-specific deductions, union dues, etc.</li>
                                <li>We do not provide tax filing advice or handle complex scenarios like multi-state income</li>
                            </ul>
                        </div>
                    </section>

                    {/* Verification */}
                    <section className="border-t pt-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">How to Verify Our Calculations</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Transparency is key. You can verify our calculations by:
                        </p>
                        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                            <li>Comparing results to your actual paycheck stub</li>
                            <li>Using IRS withholding calculators for federal tax cross-reference</li>
                            <li>Consulting your state's department of revenue tax calculator</li>
                            <li>Reviewing the formulas and explanations provided on each calculator page</li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <section className="border-t pt-12">
                        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
                            <h3 className="text-xl font-semibold mb-3">Questions About Our Methodology?</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We're committed to transparency. If you have questions about how a specific calculator works or notice an issue, we want to hear from you.
                            </p>
                            <TextLink href="/contact">Contact Us</TextLink>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
