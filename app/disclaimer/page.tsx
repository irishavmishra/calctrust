import type { Metadata } from 'next';
import { AlertTriangle } from 'lucide-react';
import { TextLink } from '@/components/ui/text-link';

export const metadata: Metadata = {
    title: 'Disclaimer - CalcTrust Terms of Use',
    description: 'Important disclaimer and terms of use for CalcTrust financial calculators. Understand limitations and professional advice recommendations.',
    alternates: {
        canonical: 'https://calctrust.com/disclaimer',
    },
};

export default function DisclaimerPage() {
    return (
        <main className="min-h-screen pb-24">
            {/* Hero */}
            <div className="border-b border-border/40 bg-gradient-to-b from-amber-500/5 to-transparent">
                <div className="container max-w-4xl mx-auto px-6 py-16 lg:py-20">
                    <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="h-8 w-8 text-amber-600 dark:text-amber-500" />
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Disclaimer</h1>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Important information about CalcTrust&apos;s calculators, limitations, and terms of use.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container max-w-4xl mx-auto px-6 py-16 lg:py-20">
                <div className="space-y-12">
                    {/* General Disclaimer */}
                    <section>
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">General Disclaimer</h2>
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed">
                                CalcTrust (&quot;the Site&quot;) provides financial calculators and educational tools for informational purposes only. <strong>The calculators and content on this site are NOT a substitute for professional financial, tax, or legal advice.</strong>
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                While we strive to ensure the accuracy and reliability of our calculators, we make no warranties, express or implied, regarding the completeness, accuracy, or suitability of the information provided. Your use of this site and its tools is entirely at your own risk.
                            </p>
                        </div>
                    </section>

                    {/* Not Financial Advice */}
                    <section className="bg-amber-50 dark:bg-amber-950/10 border border-amber-200 dark:border-amber-900/50 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-3 text-amber-900 dark:text-amber-100">Not Financial or Tax Advice</h2>
                        <p className="text-amber-900/80 dark:text-amber-100/80 leading-relaxed">
                            CalcTrust does not provide personalized financial advice, tax planning services, or legal counsel. The calculators are designed to provide general estimates based on publicly available tax data and standard assumptions. <strong>They cannot account for your unique financial situation, complex tax scenarios, or future changes in tax law.</strong>
                        </p>
                        <p className="text-amber-900/80 dark:text-amber-100/80 leading-relaxed mt-4">
                            For personalized guidance, consult a qualified:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-amber-900/80 dark:text-amber-100/80 mt-2">
                            <li>Certified Public Accountant (CPA)</li>
                            <li>Certified Financial Planner (CFP®)</li>
                            <li>Tax attorney or enrolled agent</li>
                            <li>Licensed financial advisor</li>
                        </ul>
                    </section>

                    {/* Limitations */}
                    <section>
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">Limitations of Calculators</h2>
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Our calculators are built using official tax tables and standard calculation methods, but they have limitations:
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li><strong>Estimates Only:</strong> Results are approximations. Your actual paycheck, tax liability, or financial outcomes may differ.</li>
                                <li><strong>Standard Assumptions:</strong> We use common scenarios (e.g., standard W-4 withholding). Complex situations like multiple jobs, investment income, or itemized deductions require professional analysis.</li>
                                <li><strong>State/Local Variations:</strong> Some municipalities have additional taxes or unique rules we don&apos;t model.</li>
                                <li><strong>No Guarantee of Accuracy:</strong> Tax laws change frequently. While we update our data regularly, there may be delays or errors.</li>
                                <li><strong>No Employer-Specific Data:</strong> We don&apos;t account for employer-specific benefits, union dues, or other custom deductions.</li>
                            </ul>
                        </div>
                    </section>

                    {/* No Liability */}
                    <section>
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">Limitation of Liability</h2>
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed">
                                To the fullest extent permitted by law, CalcTrust and its operators, contributors, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
                            </p>
                            <ul className="space-y-2 text-muted-foreground mt-4">
                                <li>Your use or inability to use the calculators</li>
                                <li>Inaccuracies or errors in calculations or content</li>
                                <li>Financial decisions made based on calculator results</li>
                                <li>Tax underpayment, overpayment, penalties, or interest</li>
                                <li>Any other losses or damages related to your use of this site</li>
                            </ul>
                        </div>
                    </section>

                    {/* Third-Party Links */}
                    <section>
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">Third-Party Links & Resources</h2>
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed">
                                CalcTrust may contain links to third-party websites or resources for reference purposes. We do not endorse or assume responsibility for the content, accuracy, or practices of these external sites. Use them at your own discretion.
                            </p>
                        </div>
                    </section>

                    {/* Changes to Disclaimer */}
                    <section>
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">Changes to This Disclaimer</h2>
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed">
                                We reserve the right to update or modify this disclaimer at any time without prior notice. Continued use of CalcTrust after changes constitutes acceptance of the updated terms.
                            </p>
                            <p className="text-sm text-muted-foreground/80 mt-4">
                                <strong>Last Updated:</strong> December 2024
                            </p>
                        </div>
                    </section>

                    {/* Related Pages */}
                    <section className="border-t pt-12">
                        <div className="bg-card border border-border rounded-xl p-8">
                            <h3 className="text-xl font-semibold mb-3">Related Policies</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                For more information about how we handle your data and our terms of service:
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <TextLink href="/privacy-policy">Privacy Policy</TextLink>
                                <TextLink href="/terms-of-service">Terms of Service</TextLink>
                                <TextLink href="/contact">Contact Us</TextLink>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
