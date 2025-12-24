'use client';

import * as React from 'react';
import { Search } from 'lucide-react';
import { SearchModal } from './SearchModal';

export function SearchTrigger() {
    const [open, setOpen] = React.useState(false);

    // Global keyboard shortcut (/ or ⌘K)
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Don't trigger if user is typing in an input
            const target = e.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
                return;
            }

            // "/" key or ⌘K / Ctrl+K
            if (e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key === 'k')) {
                e.preventDefault();
                setOpen(true);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted border border-border/60 rounded-lg transition-colors"
                aria-label="Search calculators"
            >
                <Search className="h-4 w-4" />
                <span className="hidden sm:inline">Search...</span>
                <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-background border border-border rounded text-[10px] font-mono text-muted-foreground">
                    /
                </kbd>
            </button>

            <SearchModal open={open} onOpenChange={setOpen} />
        </>
    );
}
