'use client';

import Link from 'next/link';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextLink } from '@/components/ui/text-link';

export function CTASection() {
    return (
        <section className="py-24 border-t border-border/40 px-6">
            <div className="container max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-12 md:p-16 text-center">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
                            Get your answer in 30 seconds
                        </h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            No signup. No ads. Just accurate calculations you can trust.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button asChild size="lg" className="h-14 px-8 text-base font-semibold rounded-full bg-white text-zinc-900 hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                <Link href="/usa">
                                    <Calculator className="h-5 w-5 mr-2" />
                                    Explore U.S. Calculators
                                </Link>
                            </Button>

                            <TextLink href="/methodology" variant="inverted" className="text-sm">
                                View Methodology
                            </TextLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
