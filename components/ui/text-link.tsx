import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TextLinkProps {
    href: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'muted' | 'inverted';
    showArrow?: boolean;
    className?: string;
}

function TextLink({
    href,
    children,
    variant = 'primary',
    showArrow = true,
    className,
}: TextLinkProps) {
    return (
        <Link
            href={href}
            className={cn(
                'inline-flex items-center gap-2 font-medium transition-all hover:gap-3 group',
                variant === 'primary' && 'text-primary',
                variant === 'secondary' && 'text-secondary',
                variant === 'muted' && 'text-muted-foreground hover:text-foreground',
                variant === 'inverted' && 'text-white/90 hover:text-white',
                className
            )}
        >
            {children}
            {showArrow && (
                <ArrowRight
                    className={cn(
                        'h-4 w-4',
                        'group-hover:translate-x-1 transition-transform'
                    )}
                />
            )}
        </Link>
    );
}

export { TextLink };
export type { TextLinkProps };
