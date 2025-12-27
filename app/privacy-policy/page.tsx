import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - CalcTrust',
    description: 'Read the Privacy Policy for CalcTrust. Learn how we collect, use, and protect your personal information.',
    alternates: {
        canonical: 'https://calctrust.com/privacy-policy',
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen pb-24">
            {/* Hero */}
            <div className="border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="container max-w-4xl mx-auto px-6 py-16 lg:py-20">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Privacy Policy</h1>
                    <p className="text-muted-foreground">
                        Last updated: December 25, 2024
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container max-w-4xl mx-auto px-6 py-16 lg:py-20">
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">1. Introduction</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            CalcTrust (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://calctrust.com.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">2. Information We Collect</h2>

                        <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            When you visit our website, we may automatically collect certain information about your device, including:
                        </p>
                        <ul className="space-y-2 text-muted-foreground mb-4">
                            <li>• Browser type and version</li>
                            <li>• Operating system</li>
                            <li>• IP address (anonymized)</li>
                            <li>• Pages visited and time spent on pages</li>
                            <li>• Referring website address</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-3">Calculator Inputs</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            When you use our calculators, all calculations are performed locally in your browser. We do not store, collect, or transmit any of the financial information you enter into our calculators. Your salary, tax, and other financial data never leaves your device.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">3. How We Use Your Information</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We may use the information we collect for the following purposes:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>• To improve and optimize our website and user experience</li>
                            <li>• To analyze usage patterns and trends</li>
                            <li>• To respond to your inquiries and provide customer support</li>
                            <li>• To send periodic emails (if you opt-in)</li>
                            <li>• To protect against fraud and maintain security</li>
                            <li>• To comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">4. Cookies and Tracking Technologies</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We may use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. Cookies are small data files stored on your device that help us improve our service and your experience.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Types of cookies we may use:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>• <strong>Essential cookies:</strong> Required for the website to function properly</li>
                            <li>• <strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                            <li>• <strong>Preference cookies:</strong> Remember your settings and preferences</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">5. Third-Party Services</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We may use third-party service providers to help us operate our website and analyze usage. These providers may have access to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Third-party services we may use include:
                        </p>
                        <ul className="space-y-2 text-muted-foreground mt-4">
                            <li>• Google Analytics (for website analytics)</li>
                            <li>• Cloudflare (for website security and performance)</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">6. Data Security</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">7. Data Retention</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We retain collected information for as long as necessary to provide you with our services and as required by applicable laws. Anonymous analytics data may be retained indefinitely for statistical purposes.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">8. Your Rights</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Depending on your location, you may have certain rights regarding your personal information, including:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>• The right to access your personal data</li>
                            <li>• The right to correct inaccurate data</li>
                            <li>• The right to request deletion of your data</li>
                            <li>• The right to restrict or object to processing</li>
                            <li>• The right to data portability</li>
                            <li>• The right to withdraw consent</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            To exercise any of these rights, please contact us using the information provided below.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">9. Children&apos;s Privacy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">10. International Data Transfers</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from your country. We take appropriate measures to ensure that your personal information remains protected in accordance with this Privacy Policy.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">11. Changes to This Privacy Policy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">12. Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy or our data practices, please contact us:
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
