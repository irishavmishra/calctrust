'use client';

import { Zap, Calculator, CheckCircle, Clock, Lock, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { TextLink } from '@/components/ui/text-link';

export function BentoFeatures() {
    return (
        <section className="py-24 px-6">
            <div className="container max-w-7xl mx-auto space-y-16">
                <SectionHeader
                    badge={{ icon: Zap, text: 'Why CalcTrust' }}
                    heading={<>Built to <span className="text-gradient-primary">Just Work</span></>}
                    subheading="Every feature designed with accuracy, privacy, and trust at its core"
                />

                {/* Bento Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Feature 1 - Large Card */}
                    <div className="md:col-span-2 bento-card feature-card p-8 md:p-12 bg-gradient-to-br from-primary/5 to-transparent">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                            <div className="flex-1 space-y-4">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <Calculator className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-3xl font-semibold tracking-tight">
                                    Accurate calculations, every single time
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Built on official IRS tax brackets and state-specific rules. Updated annually. Trusted by professionals who demand precision.
                                </p>
                                <TextLink href="/usa">Try a calculator</TextLink>
                            </div>
                            <div className="relative hidden md:block">
                                <div className="w-32 h-32 rounded-3xl bg-zinc-900 shadow-xl flex items-center justify-center pulse-glow">
                                    <CheckCircle className="h-16 w-16 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="bento-card feature-card p-8 flex flex-col justify-between bg-gradient-to-br from-accent/5 to-transparent">
                        <div className="space-y-4">
                            <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                                <Clock className="h-6 w-6 text-accent" />
                            </div>
                            <h3 className="text-2xl font-semibold tracking-tight">
                                Get answers in 30 seconds
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                No signup. No unnecessary steps. Just enter your numbers and get instant, accurate results.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="bento-card feature-card p-8 flex flex-col justify-between bg-gradient-to-br from-secondary/5 to-transparent">
                        <div className="space-y-4">
                            <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                                <Lock className="h-6 w-6 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-semibold tracking-tight">
                                Your data stays private
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                All calculations happen in your browser. No data stored, tracked, or shared. Ever.
                            </p>
                        </div>
                        <TextLink href="/disclaimer" variant="secondary" className="mt-6">
                            Privacy promise
                        </TextLink>
                    </div>

                    {/* Feature 4 - Wide Card */}
                    <div className="md:col-span-2 bento-card feature-card p-8 grid-pattern relative overflow-hidden">
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 space-y-4">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-3xl font-semibold tracking-tight">
                                    All 50 states covered
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Federal plus state-specific taxes. From California to New York, Texas to Florida. One platform, complete coverage.
                                </p>
                                <TextLink href="/usa">Explore by state</TextLink>
                            </div>
                            <div className="hidden md:grid grid-cols-3 gap-3">
                                {['CA', 'NY', 'TX', 'FL', 'PA', 'IL', 'OH', 'GA', 'NC'].map((state) => (
                                    <div
                                        key={state}
                                        className="w-16 h-16 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:scale-105 transition-all flex items-center justify-center text-sm font-semibold"
                                    >
                                        {state}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
