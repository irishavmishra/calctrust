'use client';

import Link from 'next/link';
import { Award, Sparkles, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TextLink } from '@/components/ui/text-link';
import { TOTAL_CALCULATORS } from '@/lib/config';

export function Hero() {
    return (
        <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-48 md:pb-32">
            {/* Animated Background */}
            <div className="absolute inset-0 aurora-bg -z-10" />
            <div className="absolute inset-0 dot-pattern -z-10" />

            {/* Floating Gradient Orbs */}
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
            <div className="absolute top-40 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }} />

            <div className="container max-w-6xl mx-auto relative z-10">
                <div className="text-center space-y-8">
                    {/* Trust Badge */}
                    <div className="flex justify-center reveal-up" style={{ animationDelay: '0.1s' }}>
                        <Badge className="px-4 py-2 text-sm font-medium bg-foreground/5 text-foreground border-foreground/10 hover:bg-foreground/10">
                            <Award className="h-4 w-4 mr-2" />
                            Built on Official IRS & State Tax Rules
                        </Badge>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] reveal-up" style={{ animationDelay: '0.2s' }}>
                        Financial Calculators
                        <br />
                        <span className="gradient-text">You Can Trust</span>
                    </h1>

                    {/* Subheading */}
                    <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed text-balance reveal-up" style={{ animationDelay: '0.3s' }}>
                        Accurate salary, paycheck, and tax calculations powered by official U.S. federal and state tax rules.
                        <span className="block mt-2 font-semibold text-foreground">No ads. No guesswork. Just math that works.</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up" style={{ animationDelay: '0.4s' }}>
                        <Button asChild size="lg" className="h-14 px-8 text-base font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <Link href="/usa">
                                <Sparkles className="h-5 w-5 mr-2" />
                                Explore U.S. Calculators
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
                            <span className="text-muted-foreground">IRS Data Sources</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <TrendingUp className="h-4 w-4 text-accent" />
                            <span className="text-muted-foreground">{TOTAL_CALCULATORS}+ Calculators</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
