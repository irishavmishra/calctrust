'use client';

import { Users, TrendingUp, Sparkles, FileCheck } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { FeatureCard } from '@/components/ui/feature-card';

export function TargetAudience() {
    return (
        <section className="py-24 border-t border-border/40 mesh-gradient px-6">
            <div className="container max-w-6xl mx-auto space-y-16">
                <SectionHeader
                    badge={{ icon: Users, text: 'Built For You' }}
                    heading={<>Your everyday pay decisions, <span className="text-gradient-accent">simplified</span></>}
                    subheading="Whether you're negotiating a raise or planning your budget, get the clarity you need"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard
                        icon={Users}
                        iconColor="primary"
                        title="Employees"
                        description="See your real take-home pay before you spend. Understand raises, overtime, and bonuses instantly."
                        variant="glass"
                    />
                    <FeatureCard
                        icon={TrendingUp}
                        iconColor="secondary"
                        title="Job Seekers"
                        description="Convert job offers into actual hourly worth. Compare multiple offers with confidence."
                        variant="glass"
                    />
                    <FeatureCard
                        icon={Sparkles}
                        iconColor="accent"
                        title="Freelancers"
                        description="Know your after-tax rates before you quote. Account for self-employment taxes accurately."
                        variant="glass"
                    />
                    <FeatureCard
                        icon={FileCheck}
                        iconColor="primary"
                        title="HR Teams"
                        description="Run payroll scenarios without complex software. Quick, transparent, professional calculations."
                        variant="glass"
                    />
                </div>
            </div>
        </section>
    );
}
