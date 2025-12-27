'use client';

import { Shield, CheckCircle, MapPin, Calculator } from 'lucide-react';
import { FeatureCard } from '@/components/ui/feature-card';

export function TrustSignals() {
    return (
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
                        title="Jurisdiction-specific"
                        description="Accurate for your state"
                    />
                    <FeatureCard
                        icon={Calculator}
                        title="Professional-grade"
                        description="Built like real software"
                    />
                </div>
            </div>
        </section>
    );
}
