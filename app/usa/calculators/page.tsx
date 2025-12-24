'use client';

import * as React from 'react';
import Link from 'next/link';
import { Search, Calculator, ChevronDown, MapPin, Sparkles, TrendingUp, DollarSign, Clock, PiggyBank, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from '@/components/ui/section-header';
import { getSearchIndex, searchCalculators, type SearchItem } from '@/lib/search';

// Category configuration with icons and labels
const categoryConfig: Record<string, { label: string; icon: React.ElementType; description: string }> = {
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
};

const ITEMS_PER_PAGE = 6;
const categories = ['salary', 'paycheck', 'tax', 'overtime', 'retirement', 'freelance'] as const;

export default function AllCalculatorsPage() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [loadedCount, setLoadedCount] = React.useState<Record<string, number>>(() =>
        Object.fromEntries(categories.map(cat => [cat, ITEMS_PER_PAGE]))
    );

    // Get all calculators
    const allCalculators = React.useMemo(() => getSearchIndex(), []);

    // Filter calculators based on search
    const filteredCalculators = React.useMemo(() => {
        if (!searchQuery.trim()) return allCalculators;
        return searchCalculators(searchQuery, 200);
    }, [searchQuery, allCalculators]);

    // Group calculators by category
    const groupedCalculators = React.useMemo(() => {
        const grouped: Record<string, SearchItem[]> = {};
        categories.forEach(cat => {
            grouped[cat] = filteredCalculators.filter(calc => calc.category === cat);
        });
        return grouped;
    }, [filteredCalculators]);

    // Handle load more for a category
    const handleLoadMore = (category: string) => {
        setLoadedCount(prev => ({
            ...prev,
            [category]: prev[category] + ITEMS_PER_PAGE
        }));
    };

    // Count total results
    const totalResults = filteredCalculators.length;

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
                            Browse our complete collection of {totalResults}+ salary, paycheck, and tax calculators for the United States.
                        </p>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* SEARCH BAR */}
            {/* ============================================ */}
            <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border/50 px-6 py-4">
                <div className="container max-w-3xl mx-auto">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search calculators... (e.g., California paycheck, $50k salary, 401k)"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all text-base"
                            autoComplete="off"
                            spellCheck={false}
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                    {searchQuery && (
                        <p className="text-sm text-muted-foreground mt-3 text-center">
                            Found <span className="font-semibold text-foreground">{totalResults}</span> calculators matching &quot;{searchQuery}&quot;
                        </p>
                    )}
                </div>
            </section>

            {/* ============================================ */}
            {/* CALCULATOR SECTIONS BY CATEGORY */}
            {/* ============================================ */}
            <section className="py-16 px-6">
                <div className="container max-w-6xl mx-auto space-y-16">
                    {categories.map((category) => {
                        const config = categoryConfig[category];
                        const calculators = groupedCalculators[category] || [];
                        const loaded = loadedCount[category] || ITEMS_PER_PAGE;
                        const displayedCalculators = calculators.slice(0, loaded);
                        const hasMore = calculators.length > loaded;
                        const Icon = config.icon;

                        // Skip empty categories when searching
                        if (searchQuery && calculators.length === 0) return null;

                        return (
                            <div key={category} className="space-y-6">
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

                                {/* Calculator Grid */}
                                {calculators.length > 0 ? (
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {displayedCalculators.map((calc) => (
                                            <Link
                                                key={calc.slug}
                                                href={calc.href}
                                                className="group p-5 bg-card rounded-xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-200"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <Calculator className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                                                    <div className="min-w-0">
                                                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                                            {calc.title}
                                                        </h3>
                                                        {calc.stateCode && (
                                                            <span className="text-xs text-muted-foreground mt-1 inline-block">
                                                                {calc.stateCode}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8 text-muted-foreground">
                                        No calculators in this category yet.
                                    </div>
                                )}

                                {/* Load More Button */}
                                {hasMore && (
                                    <div className="flex justify-center pt-2">
                                        <Button
                                            variant="outline"
                                            onClick={() => handleLoadMore(category)}
                                            className="gap-2"
                                        >
                                            <ChevronDown className="h-4 w-4" />
                                            Load More ({calculators.length - loaded} remaining)
                                        </Button>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* No Results State */}
                    {searchQuery && totalResults === 0 && (
                        <div className="text-center py-16 space-y-4">
                            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                                <Search className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl font-semibold">No calculators found</h3>
                            <p className="text-muted-foreground max-w-md mx-auto">
                                No calculators match &quot;{searchQuery}&quot;. Try searching by state name, salary amount, or calculator type.
                            </p>
                            <Button variant="outline" onClick={() => setSearchQuery('')}>
                                Clear search
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* ============================================ */}
            {/* BOTTOM CTA */}
            {/* ============================================ */}
            <section className="py-16 border-t border-border/40 bg-muted/30 px-6">
                <div className="container max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        Can&apos;t find what you need?
                    </h2>
                    <p className="text-muted-foreground">
                        Start with our most popular calculator or use the search above.
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
