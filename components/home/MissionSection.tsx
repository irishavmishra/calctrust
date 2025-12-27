'use client';

import { Shield, FileCheck, Eye, TrendingUp, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { TextLink } from '@/components/ui/text-link';
import { ChecklistItem } from '@/components/ui/checklist-item';

export function MissionSection() {
    return (
        <section className="py-24 border-t border-border/40 bg-card px-6">
            <div className="container max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <Badge className="bg-foreground/5 text-foreground border-foreground/10">
                            <Shield className="h-3 w-3 mr-1" />
                            Our Mission
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                            Why CalcTrust exists
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Most online calculators are outdated, overloaded with ads, or unclear about their math.
                        </p>
                        <p className="text-lg leading-relaxed">
                            We built CalcTrust as an alternative—a <span className="font-semibold text-primary">financial reference tool</span> you can actually rely on.
                        </p>
                        <TextLink href="/methodology" className="text-lg">
                            Read our full methodology
                        </TextLink>
                    </div>

                    <ul className="space-y-4">
                        <ChecklistItem icon={FileCheck}>
                            Calculations based on official IRS and state tax data
                        </ChecklistItem>
                        <ChecklistItem icon={Eye}>
                            Transparent methodology—see exactly how we calculate
                        </ChecklistItem>
                        <ChecklistItem icon={Shield}>
                            No accounts, no tracking, no data collection
                        </ChecklistItem>
                        <ChecklistItem icon={TrendingUp}>
                            Updated annually when tax rules change
                        </ChecklistItem>
                        <ChecklistItem icon={Award}>
                            Designed for clarity, not clicks or ad revenue
                        </ChecklistItem>
                    </ul>
                </div>

                <div className="mt-12 p-6 rounded-2xl border border-primary/20 bg-primary/5">
                    <p className="text-sm text-muted-foreground italic flex items-start gap-3">
                        <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                            Calculations are reviewed by a financial methodology team focused on payroll and tax accuracy. Updated for 2025 tax rules.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
