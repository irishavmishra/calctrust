import * as React from 'react';
import { LucideIcon, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChecklistItemProps {
    icon?: LucideIcon;
    children: React.ReactNode;
    variant?: 'default' | 'muted' | 'negative';
    className?: string;
}

function ChecklistItem({
    icon: Icon = CheckCircle,
    children,
    variant = 'default',
    className,
}: ChecklistItemProps) {
    return (
        <li
            className={cn(
                'flex items-start gap-3',
                variant === 'muted' && 'text-muted-foreground/60',
                className
            )}
        >
            {variant === 'negative' ? (
                <span className="h-5 w-5 flex items-center justify-center text-muted-foreground/40 shrink-0">
                    ✕
                </span>
            ) : (
                <Icon
                    className={cn(
                        'h-5 w-5 shrink-0 mt-0.5',
                        variant === 'default' && 'text-primary',
                        variant === 'muted' && 'text-muted-foreground/40'
                    )}
                />
            )}
            <span>{children}</span>
        </li>
    );
}

export { ChecklistItem };
export type { ChecklistItemProps };
