import type { Metadata } from 'next';
import Link from 'next/link';
import { Calculator, MapPin, Sparkles, DollarSign, Clock, PiggyBank, Briefcase, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { calculatorPages } from '@/lib/content/calculators';

export const metadata: Metadata = {
    title: 'All Salary & Paycheck Calculators | 278+ Free Tools | CalcTrust',
    description: 'Browse 278+ free salary, paycheck, and tax calculators. Calculate take-home pay for all 50 states, hourly to salary conversions, overtime, and more. Updated for 2025.',
    alternates: {
        canonical: 'https://calctrust.com/usa/calculators',
    },
    openGraph: {
        title: 'All Salary & Paycheck Calculators | 278+ Free Tools',
        description: 'Browse 278+ free salary, paycheck, and tax calculators for all 50 U.S. states. Updated for 2025.',
        url: 'https://calctrust.com/usa/calculators',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'All Salary & Paycheck Calculators | 278+ Free Tools',
        description: 'Browse 278+ free salary, paycheck, and tax calculators.',
    },
};

// Category configuration with icons and labels
const categoryConfig = {
    salary: {
        label: 'Salary Calculators',
        icon: DollarSign,
        description: 'Convert between salary, hourly rates, and income breakdowns'
    },
    paycheck: {
        label: 'Paycheck Calculators',
        icon: Calculator,
        description: 'Calculate take-home pay for any state with accurate tax deductions'
    },
    tax: {
        label: 'Tax Calculators',
        icon: TrendingUp,
        description: 'Estimate federal and state tax obligations'
    },
    overtime: {
        label: 'Overtime Calculators',
        icon: Clock,
        description: 'Calculate time-and-a-half and double-time pay'
    },
    retirement: {
        label: 'Retirement Calculators',
        icon: PiggyBank,
        description: 'Plan your 401(k) and retirement contributions'
    },
    freelance: {
        label: 'Freelance Calculators',
        icon: Briefcase,
        description: 'Calculate rates and self-employment taxes'
    },
} as const;

const categories = ['salary', 'paycheck', 'tax', 'overtime', 'retirement', 'freelance'] as const;

// Group calculators by category - runs on the server
function getGroupedCalculators() {
    const grouped: Record<string, typeof calculatorPages> = {};
    categories.forEach(cat => {
        grouped[cat] = calculatorPages.filter(calc => calc.category === cat);
    });
    return grouped;
}

export default function AllCalculatorsPage() {
    const groupedCalculators = getGroupedCalculators();
    const totalCalculators = calculatorPages.length;

    return (
        <main className="flex-1">
            {/* ============================================ */}
            {/* HERO SECTION */}
            {/* ============================================ */}
            <section className="relative overflow-hidden px-6 pt-32 pb-16 md:pt-44 md:pb-20">
                {/* Animated Background */}
                <div className="absolute inset-0 aurora-bg -z-10" />
                <div className="absolute inset-0 dot-pattern -z-10" />

                {/* Floating Gradient Orbs */}
                <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '0s' }} />
                <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

                <div className="container max-w-5xl mx-auto relative z-10">
                    <div className="text-center space-y-6">
                        {/* Trust Badge */}
                        <div className="flex justify-center reveal-up" style={{ animationDelay: '0.1s' }}>
                            <Badge className="px-4 py-2 text-sm font-medium bg-foreground/5 text-foreground border-foreground/10 hover:bg-foreground/10">
                                <MapPin className="h-4 w-4 mr-2" />
                                All U.S. State Calculators
                            </Badge>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] reveal-up" style={{ animationDelay: '0.2s' }}>
                            All <span className="gradient-text">Calculators</span>
                        </h1>

                        {/* Subheading */}
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed reveal-up" style={{ animationDelay: '0.3s' }}>
                            Browse our complete collection of {totalCalculators}+ salary, paycheck, and tax calculators for the United States.
                        </p>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* CALCULATOR SECTIONS BY CATEGORY - Server Rendered */}
            {/* ============================================ */}
            <section className="py-16 px-6">
                <div className="container max-w-6xl mx-auto space-y-16">
                    {categories.map((category) => {
                        const config = categoryConfig[category];
                        const calculators = groupedCalculators[category] || [];
                        const Icon = config.icon;

                        if (calculators.length === 0) return null;

                        return (
                            <div key={category} className="space-y-6" id={category}>
                                {/* Category Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-semibold tracking-tight">{config.label}</h2>
                                            <p className="text-muted-foreground text-sm mt-1">{config.description}</p>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="shrink-0">
                                        {calculators.length} calculators
                                    </Badge>
                                </div>

                                {/* Calculator Grid - ALL LINKS RENDERED FOR SEO */}
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {calculators.map((calc) => (
                                        <Link
                                            key={calc.slug}
                                            href={`/usa/${calc.slug}`}
                                            className="group p-5 bg-card rounded-xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-200"
                                        >
                                            <div className="flex items-start gap-3">
                                                <Calculator className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                                                <div className="min-w-0">
                                                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                                        {calc.h1 || calc.title}
                                                    </h3>
                                                    {calc.stateCode && (
                                                        <span className="text-xs text-muted-foreground mt-1 inline-block">
                                                            {calc.stateCode}
                                                        </span>
                                                    )}
                                                </div>
                                                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all opacity-0 group-hover:opacity-100 ml-auto flex-shrink-0" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ============================================ */}
            {/* BOTTOM CTA */}
            {/* ============================================ */}
            <section className="py-16 border-t border-border/40 bg-muted/30 px-6">
                <div className="container max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        Ready to calculate?
                    </h2>
                    <p className="text-muted-foreground">
                        Start with our most popular calculator for accurate take-home pay estimates.
                    </p>
                    <Button asChild size="lg" className="h-12 px-8 rounded-full">
                        <Link href="/usa/take-home-pay-calculator">
                            <Sparkles className="h-5 w-5 mr-2" />
                            Try Take-Home Pay Calculator
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
