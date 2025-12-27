import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service - CalcTrust',
    description: 'Read the Terms of Service for CalcTrust. Understand the terms and conditions for using our financial calculators and services.',
    alternates: {
        canonical: 'https://calctrust.com/terms-of-service',
    },
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen pb-24">
            {/* Hero */}
            <div className="border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="container max-w-4xl mx-auto px-6 py-16 lg:py-20">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Terms of Service</h1>
                    <p className="text-muted-foreground">
                        Last updated: December 25, 2024
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container max-w-4xl mx-auto px-6 py-16 lg:py-20">
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">1. Acceptance of Terms</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            By accessing and using CalcTrust (https://calctrust.com), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">2. Description of Service</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            CalcTrust provides free online financial calculators including but not limited to:
                        </p>
                        <ul className="space-y-2 text-muted-foreground mb-4">
                            <li>• Salary and paycheck calculators</li>
                            <li>• Tax estimation tools</li>
                            <li>• Hourly to salary converters</li>
                            <li>• Overtime calculators</li>
                            <li>• State-specific tax calculators</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed">
                            We are offering web development services including website design, development, and maintenance for businesses and individuals.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">3. User Responsibilities</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            As a user of this service, you agree to:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>• Use the service only for lawful purposes</li>
                            <li>• Not attempt to interfere with the proper operation of the service</li>
                            <li>• Not attempt to gain unauthorized access to any part of the service</li>
                            <li>• Not use the service to transmit any harmful code or malware</li>
                            <li>• Provide accurate information when using our services</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">4. Disclaimer of Warranties</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            The calculators and tools provided on CalcTrust are for informational and educational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the calculations.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            The results provided by our calculators are estimates and should not be considered as professional financial, tax, or legal advice. Always consult with qualified professionals for your specific situation.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">5. Limitation of Liability</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            In no event shall CalcTrust, its owners, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">6. Intellectual Property</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            All content on CalcTrust, including but not limited to text, graphics, logos, icons, images, and software, is the property of CalcTrust and is protected by United States and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">7. Third-Party Links</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our service may contain links to third-party websites or services that are not owned or controlled by CalcTrust. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">8. Modifications to Service</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We reserve the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice at any time. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">9. Changes to Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We reserve the right to update or change our Terms of Service at any time. We will notify users of any changes by posting the new Terms of Service on this page and updating the &quot;Last updated&quot; date. Your continued use of the service after any such changes constitutes your acceptance of the new Terms of Service.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">10. Governing Law</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Delaware, United States.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">11. Contact Information</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            If you have any questions about these Terms of Service, please contact us:
                        </p>
                        <div className="bg-muted/30 rounded-xl p-6">
                            <p className="text-muted-foreground">
                                <strong>CalcTrust</strong><br /><br />
                                Email: <a href="mailto:support@calctrust.com" className="text-primary hover:underline">support@calctrust.com</a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
