import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TextLink } from './text-link';

interface FeatureCardProps {
    icon: LucideIcon;
    iconColor?: 'primary' | 'secondary' | 'accent';
    title: string;
    description: string;
    link?: {
        href: string;
        text: string;
    };
    variant?: 'default' | 'glass' | 'value';
    className?: string;
}

function FeatureCard({
    icon: Icon,
    iconColor = 'primary',
    title,
    description,
    link,
    variant = 'default',
    className,
}: FeatureCardProps) {
    const iconColorClass = {
        primary: 'bg-primary/10 text-primary',
        secondary: 'bg-secondary/10 text-secondary',
        accent: 'bg-accent/10 text-accent',
    }[iconColor];

    if (variant === 'glass') {
        return (
            <div
                className={cn(
                    'glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 group',
                    className
                )}
            >
                <div
                    className={cn(
                        'h-12 w-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform',
                        iconColorClass
                    )}
                >
                    <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        );
    }

    if (variant === 'value') {
        return (
            <div
                className={cn(
                    'p-6 bg-card border border-border rounded-xl',
                    className
                )}
            >
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
        );
    }

    return (
        <div
            className={cn(
                'text-center space-y-4 glass-card p-6 rounded-2xl',
                className
            )}
        >
            <div
                className={cn(
                    'h-14 w-14 rounded-2xl flex items-center justify-center mx-auto',
                    iconColorClass
                )}
            >
                <Icon className="h-7 w-7" />
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            {link && (
                <TextLink href={link.href} variant="primary" className="mt-4">
                    {link.text}
                </TextLink>
            )}
        </div>
    );
}

export { FeatureCard };
export type { FeatureCardProps };
