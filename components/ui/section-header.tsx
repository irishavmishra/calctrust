import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
    badge?: {
        icon?: LucideIcon;
        text: string;
    };
    heading: React.ReactNode;
    subheading?: string;
    align?: 'left' | 'center';
    className?: string;
}

function SectionHeader({
    badge,
    heading,
    subheading,
    align = 'center',
    className,
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                'space-y-4',
                align === 'center' && 'text-center',
                className
            )}
        >
            {badge && (
                <Badge className="mb-2 bg-foreground/5 text-foreground border-foreground/10">
                    {badge.icon && <badge.icon className="h-3 w-3 mr-1" />}
                    {badge.text}
                </Badge>
            )}
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                {heading}
            </h2>
            {subheading && (
                <p
                    className={cn(
                        'text-lg text-muted-foreground text-balance',
                        align === 'center' && 'max-w-2xl mx-auto'
                    )}
                >
                    {subheading}
                </p>
            )}
        </div>
    );
}

export { SectionHeader };
export type { SectionHeaderProps };
