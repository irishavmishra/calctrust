'use client';

import * as React from 'react';
import { Calculator, MapPin, CheckCircle, Shield, LucideIcon } from 'lucide-react';

// Map of icon names to components
const iconMap: Record<string, LucideIcon> = {
    Calculator,
    MapPin,
    CheckCircle,
    Shield,
};

interface StatCardProps {
    iconName: string;
    value: string;
    label: string;
    delay?: number;
}

function StatCard({ iconName, value, label, delay = 0 }: StatCardProps) {
    const [displayValue, setDisplayValue] = React.useState('0');
    const [hasAnimated, setHasAnimated] = React.useState(false);
    const cardRef = React.useRef<HTMLDivElement>(null);

    const Icon = iconMap[iconName] || Calculator;

    // Extract numeric part and suffix (e.g., "274+" -> 274, "+")
    const numericMatch = value.match(/^(\d+)(.*)$/);
    const targetNumber = numericMatch ? parseInt(numericMatch[1]) : 0;
    const suffix = numericMatch ? numericMatch[2] : '';

    React.useEffect(() => {
        const animateCount = () => {
            const duration = 1500; // 1.5s
            const steps = 40;
            const stepDuration = duration / steps;
            let currentStep = 0;

            const timer = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;
                // Ease out curve
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentValue = Math.round(targetNumber * easeOut);
                setDisplayValue(currentValue.toString());

                if (currentStep >= steps) {
                    clearInterval(timer);
                    setDisplayValue(targetNumber.toString());
                }
            }, stepDuration);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        // Start count-up animation after delay
                        setTimeout(() => {
                            animateCount();
                        }, delay * 1000);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated, delay, targetNumber]);

    return (
        <div
            ref={cardRef}
            className="bento-card p-6 md:p-8 text-center space-y-3"
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="flex justify-center">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                </div>
            </div>
            <div className="text-3xl md:text-4xl font-bold tracking-tight tabular-nums">
                {displayValue}{suffix}
            </div>
            <div className="text-sm text-muted-foreground font-medium">
                {label}
            </div>
        </div>
    );
}

export { StatCard };
export type { StatCardProps };
