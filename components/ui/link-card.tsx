import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LinkCardProps {
    href: string;
    title: string;
    description: string;
    showArrow?: boolean;
    className?: string;
}

function LinkCard({
    href,
    title,
    description,
    showArrow = true,
    className,
}: LinkCardProps) {
    return (
        <Link href={href} className={cn('group block', className)}>
            <div className="p-4 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors h-full">
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors flex items-center justify-between">
                    {title}
                    {showArrow && (
                        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    )}
                </h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </Link>
    );
}

export { LinkCard };
export type { LinkCardProps };
