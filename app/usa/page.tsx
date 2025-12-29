import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Calculator, MapPin, Sparkles, TrendingUp, Users, Award, Zap, FileCheck, Clock, Lock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'U.S. Salary & Paycheck Calculators | All 50 States | CalcTrust',
    description: 'Free salary and paycheck calculators for all 50 U.S. states. Calculate take-home pay, hourly rates, overtime, and taxes with 2025 federal and state tax rules.',
    alternates: {
        canonical: 'https://calctrust.com/usa',
    },
    openGraph: {
        title: 'U.S. Salary & Paycheck Calculators | All 50 States',
        description: 'Free salary and paycheck calculators for all 50 U.S. states. Calculate take-home pay with accurate 2025 tax rules.',
        url: 'https://calctrust.com/usa',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'U.S. Salary & Paycheck Calculators | All 50 States',
        description: 'Free salary and paycheck calculators for all 50 U.S. states.',
    },
};
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from '@/components/ui/section-header';
import { StatCard } from '@/components/ui/stat-card';
import { FeatureCard } from '@/components/ui/feature-card';
import { TextLink } from '@/components/ui/text-link';
import { ChecklistItem } from '@/components/ui/checklist-item';
import { TOTAL_CALCULATORS } from '@/lib/config';

export default function UsaHubPage() {
    return (
        <main className="flex-1">
            {/* ============================================ */}
            {/* HERO SECTION */}
            {/* ============================================ */}
            <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-48 md:pb-32">
                {/* Animated Background */}
                <div className="absolute inset-0 aurora-bg -z-10" />
                <div className="absolute inset-0 dot-pattern -z-10" />

                {/* Floating Gradient Orbs */}
                <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '0s' }} />
                <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

                <div className="container max-w-6xl mx-auto relative z-10">
                    <div className="text-center space-y-8">
                        {/* Trust Badge */}
                        <div className="flex justify-center reveal-up" style={{ animationDelay: '0.1s' }}>
                            <Badge className="px-4 py-2 text-sm font-medium bg-foreground/5 text-foreground border-foreground/10 hover:bg-foreground/10">
                                <MapPin className="h-4 w-4 mr-2" />
                                All 50 U.S. States Covered
                            </Badge>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] reveal-up" style={{ animationDelay: '0.2s' }}>
                            U.S. Salary & Paycheck
                            <br />
                            <span className="gradient-text">Calculators</span>
                        </h1>

                        {/* Subheading */}
                        <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed text-balance reveal-up" style={{ animationDelay: '0.3s' }}>
                            Calculate take-home pay, hourly rates, overtime, bonuses, and taxes using up-to-date federal and state rules.
                            <span className="block mt-2 font-semibold text-foreground">No ads. No accounts. No guesswork.</span>
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up" style={{ animationDelay: '0.4s' }}>
                            <Button asChild size="lg" className="h-14 px-8 text-base font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                <Link href="/usa/calculators">
                                    <Sparkles className="h-5 w-5 mr-2" />
                                    Explore Calculators
                                </Link>
                            </Button>

                            <TextLink href="/methodology" variant="primary" className="text-sm">
                                View Methodology
                            </TextLink>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 reveal-up" style={{ animationDelay: '0.5s' }}>
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <div className="h-2 w-2 rounded-full bg-foreground animate-pulse" />
                                <span className="text-muted-foreground">Updated for 2025</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <CheckCircle className="h-4 w-4 text-primary" />
                                <span className="text-muted-foreground">IRS Tax Rules</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <Shield className="h-4 w-4 text-accent" />
                                <span className="text-muted-foreground">Privacy First</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* ANIMATED STATS SECTION */}
            {/* ============================================ */}
            <section className="py-16 border-y border-border/50 bg-muted/30 px-6">
                <div className="container max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatCard iconName="MapPin" value="50" label="States Covered" delay={0} />
                        <StatCard iconName="Calculator" value={`${TOTAL_CALCULATORS}+`} label="Calculators" delay={0.1} />
                        <StatCard iconName="CheckCircle" value="100%" label="Free to Use" delay={0.2} />
                        <StatCard iconName="Shield" value="0" label="Ads or Tracking" delay={0.3} />
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* WHO IT'S FOR */}
            {/* ============================================ */}
            <section className="py-24 px-6">
                <div className="container max-w-6xl mx-auto space-y-16">
                    <SectionHeader
                        badge={{ icon: Users, text: 'Built For You' }}
                        heading={<>Everyday pay decisions, <span className="text-gradient-accent">simplified</span></>}
                        subheading="Whether you're evaluating a job offer or planning your budget"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureCard
                            icon={Users}
                            iconColor="primary"
                            title="Employees"
                            description="See your real take-home pay. Understand raises, overtime, and bonuses instantly."
                            variant="glass"
                        />
                        <FeatureCard
                            icon={TrendingUp}
                            iconColor="secondary"
                            title="Job Seekers"
                            description="Convert job offers into actual hourly worth. Compare offers with confidence."
                            variant="glass"
                        />
                        <FeatureCard
                            icon={Sparkles}
                            iconColor="accent"
                            title="Freelancers"
                            description="Know your after-tax rates. Account for self-employment taxes accurately."
                            variant="glass"
                        />
                        <FeatureCard
                            icon={FileCheck}
                            iconColor="primary"
                            title="HR Teams"
                            description="Run payroll scenarios without complex software. Quick, transparent calculations."
                            variant="glass"
                        />
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* CALCULATOR CATEGORIES - BENTO GRID */}
            {/* ============================================ */}
            <section id="calculators" className="py-24 border-t border-border/40 bg-card px-6">
                <div className="container max-w-7xl mx-auto space-y-16">
                    <SectionHeader
                        badge={{ icon: Calculator, text: 'Calculator Tools' }}
                        heading={<>Find the right <span className="text-gradient-primary">calculator</span></>}
                        subheading="Comprehensive tools for every salary and paycheck scenario"
                    />

                    {/* Bento Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Featured - Paycheck Calculators */}
                        <div className="md:col-span-2 bento-card feature-card p-8 md:p-12 bg-gradient-to-br from-primary/5 to-transparent">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                                <div className="flex-1 space-y-4">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <Calculator className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-semibold tracking-tight">
                                        Paycheck Calculators
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Calculate your take-home pay for any state. Federal taxes, state taxes, FICA—all in one place.
                                    </p>
                                    <TextLink href="/usa/take-home-pay-calculator">Try paycheck calculator</TextLink>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    {['CA', 'NY', 'TX', 'FL', 'WA', 'PA'].map((state) => (
                                        <div
                                            key={state}
                                            className="w-14 h-14 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:scale-105 transition-all flex items-center justify-center text-sm font-semibold"
                                        >
                                            {state}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Salary Conversions */}
                        <div className="bento-card feature-card p-8 flex flex-col justify-between bg-gradient-to-br from-accent/5 to-transparent">
                            <div className="space-y-4">
                                <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                                    <TrendingUp className="h-6 w-6 text-accent" />
                                </div>
                                <h3 className="text-2xl font-semibold tracking-tight">
                                    Salary ↔ Hourly
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Convert annual salary to hourly rates and vice versa. Compare job offers accurately.
                                </p>
                            </div>
                            <TextLink href="/usa/salary-to-hourly-calculator" className="mt-6">
                                Convert salary
                            </TextLink>
                        </div>

                        {/* Hourly Breakdowns */}
                        <div className="bento-card feature-card p-8 flex flex-col justify-between bg-gradient-to-br from-secondary/5 to-transparent">
                            <div className="space-y-4">
                                <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                                    <Clock className="h-6 w-6 text-secondary" />
                                </div>
                                <h3 className="text-2xl font-semibold tracking-tight">
                                    Hourly Rate Analysis
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    See what $15, $20, $25/hour really means after taxes. Weekly, monthly, yearly breakdowns.
                                </p>
                            </div>
                            <TextLink href="/usa/15-dollars-an-hour" variant="secondary" className="mt-6">
                                Analyze hourly rates
                            </TextLink>
                        </div>

                        {/* Salary Breakdowns - Wide */}
                        <div className="md:col-span-2 bento-card feature-card p-8 grid-pattern relative overflow-hidden">
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1 space-y-4">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <FileCheck className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-semibold tracking-tight">
                                        Salary Breakdown by Income
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        See detailed tax breakdowns for any salary level. $50K, $75K, $100K and beyond.
                                    </p>
                                    <TextLink href="/usa/50000-salary-breakdown">View salary breakdowns</TextLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Calculator Links */}
                    <div className="grid md:grid-cols-3 gap-6 pt-8">
                        <Link href="/usa/overtime-pay-calculator" className="group p-6 bg-muted/50 rounded-xl border border-border hover:border-primary/40 transition-colors">
                            <h4 className="font-semibold group-hover:text-primary transition-colors">Overtime Calculator</h4>
                            <p className="text-sm text-muted-foreground mt-1">Time-and-a-half calculations</p>
                        </Link>
                        <Link href="/usa/401k-calculator" className="group p-6 bg-muted/50 rounded-xl border border-border hover:border-primary/40 transition-colors">
                            <h4 className="font-semibold group-hover:text-primary transition-colors">401(k) Calculator</h4>
                            <p className="text-sm text-muted-foreground mt-1">Retirement contribution planning</p>
                        </Link>
                        <Link href="/usa/pay-raise-calculator" className="group p-6 bg-muted/50 rounded-xl border border-border hover:border-primary/40 transition-colors">
                            <h4 className="font-semibold group-hover:text-primary transition-colors">Pay Raise Calculator</h4>
                            <p className="text-sm text-muted-foreground mt-1">Calculate new salary after raise</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* WHY CALCTRUST */}
            {/* ============================================ */}
            <section className="py-24 border-t border-border/40 px-6">
                <div className="container max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Badge className="bg-foreground/5 text-foreground border-foreground/10">
                                <Zap className="h-3 w-3 mr-1" />
                                Why CalcTrust
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                                Built for accuracy, not ads
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Most online calculators are outdated, ad-heavy, or unclear about their math.
                            </p>
                            <p className="text-lg leading-relaxed">
                                We built CalcTrust as a <span className="font-semibold text-primary">financial reference tool</span> you can actually rely on.
                            </p>
                            <TextLink href="/methodology" className="text-lg">
                                Read our methodology
                            </TextLink>
                        </div>

                        <ul className="space-y-4">
                            <ChecklistItem icon={CheckCircle}>
                                Up-to-date federal & state tax rules
                            </ChecklistItem>
                            <ChecklistItem icon={Shield}>
                                Transparent calculation logic
                            </ChecklistItem>
                            <ChecklistItem icon={Lock}>
                                No accounts or tracking required
                            </ChecklistItem>
                            <ChecklistItem icon={Award}>
                                Designed for clarity, not clicks
                            </ChecklistItem>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* TRUST SIGNALS */}
            {/* ============================================ */}
            <section className="py-24 border-t border-border/40 aurora-bg px-6">
                <div className="container max-w-6xl mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                            Built with <span className="text-gradient-primary">care</span> and <span className="text-gradient-accent">precision</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={Shield}
                            title="Privacy-first design"
                            description="No data stored or transmitted"
                        />
                        <FeatureCard
                            icon={CheckCircle}
                            title="No financial advice claims"
                            description="Reference tool only"
                        />
                        <FeatureCard
                            icon={MapPin}
                            title="State-specific accuracy"
                            description="All 50 states supported"
                        />
                        <FeatureCard
                            icon={Calculator}
                            title="Professional-grade"
                            description="Built like real software"
                        />
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* FINAL CTA */}
            {/* ============================================ */}
            <section className="py-24 border-t border-border/40 px-6">
                <div className="container max-w-4xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-12 md:p-16 text-center">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

                        <div className="relative z-10 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
                                Start with the calculator you need
                            </h2>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto">
                                No signup. No ads. Just accurate calculations you can trust.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <Button asChild size="lg" className="h-14 px-8 text-base font-semibold rounded-full bg-white text-zinc-900 hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                    <Link href="/usa/take-home-pay-calculator">
                                        <Calculator className="h-5 w-5 mr-2" />
                                        Try Paycheck Calculator
                                    </Link>
                                </Button>

                                <TextLink href="/usa/salary-to-hourly-calculator" variant="inverted" className="text-sm">
                                    Salary → Hourly
                                </TextLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
