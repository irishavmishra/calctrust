'use client';

import { StatCard } from '@/components/ui/stat-card';
import { TOTAL_CALCULATORS } from '@/lib/config';

export function StatsSection() {
    return (
        <section className="py-16 border-y border-border/50 bg-muted/30 px-6">
            <div className="container max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <StatCard iconName="Calculator" value={`${TOTAL_CALCULATORS}+`} label="Calculators" delay={0} />
                    <StatCard iconName="MapPin" value="50" label="States Covered" delay={0.1} />
                    <StatCard iconName="CheckCircle" value="100%" label="Accurate" delay={0.2} />
                    <StatCard iconName="Shield" value="0" label="Ads or Tracking" delay={0.3} />
                </div>
            </div>
        </section>
    );
}
