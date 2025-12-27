import Link from 'next/link';
import { Logo } from '@/components/logo';

const footerLinks = {
    calculators: [
        { label: 'Salary to Hourly', href: '/usa/salary-to-hourly-calculator' },
        { label: 'Hourly to Salary', href: '/usa/hourly-to-salary-calculator' },
        { label: 'Take Home Pay', href: '/usa/take-home-pay-calculator' },
        { label: 'Bonus Tax', href: '/usa/bonus-tax-calculator' },
        { label: 'View All', href: '/usa/calculators' },
    ],
    states: [
        { label: 'California', href: '/usa/paycheck-calculator-california' },
        { label: 'Texas', href: '/usa/paycheck-calculator-texas' },
        { label: 'Florida', href: '/usa/paycheck-calculator-florida' },
        { label: 'New York', href: '/usa/paycheck-calculator-new-york' },
        { label: 'All 50 States', href: '/usa/calculators' },
    ],
    about: [
        { label: 'About CalcTrust', href: '/about' },
        { label: 'Our Methodology', href: '/methodology' },
        { label: 'How Calculations Work', href: '/how-calculations-work' },
        { label: 'Disclaimer', href: '/disclaimer' },
        { label: 'Contact Us', href: '/contact' },
    ],
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/40 bg-zinc-50/50 dark:bg-zinc-900/20">
            <div className="container max-w-5xl mx-auto py-16 px-4 md:px-6">
                <div className="grid gap-12 md:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
                            <Logo className="h-6 w-6" />
                            <span className="font-medium tracking-tight">
                                CalcTrust
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                            Accurate financial calculators for salary, paycheck, and tax calculations across all 50 states.
                        </p>
                    </div>

                    {/* Links Sections */}
                    {[
                        { title: 'Calculators', links: footerLinks.calculators },
                        { title: 'States', links: footerLinks.states },
                        { title: 'About', links: footerLinks.about },
                    ].map((section) => (
                        <div key={section.title}>
                            <h3 className="font-medium mb-4 tracking-tight text-foreground">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <p>© {currentYear} CalcTrust. All rights reserved.</p>
                        <span className="hidden md:inline">•</span>
                        <p>Tax rules last reviewed: December 2025</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms</Link>
                        <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
                        <Link href="/methodology" className="hover:text-foreground transition-colors">Methodology</Link>
                        <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
