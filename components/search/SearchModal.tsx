'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Search, Calculator, X } from 'lucide-react';
import { searchCalculators, getFeaturedCalculators, type SearchItem } from '@/lib/search';

interface SearchModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
    const router = useRouter();
    const [query, setQuery] = React.useState('');
    const [results, setResults] = React.useState<SearchItem[]>([]);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const listRef = React.useRef<HTMLDivElement>(null);

    // Focus input on open
    React.useEffect(() => {
        if (open) {
            setQuery('');
            setResults(getFeaturedCalculators());
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [open]);

    // Search on query change
    React.useEffect(() => {
        if (!query.trim()) {
            setResults(getFeaturedCalculators());
            setSelectedIndex(0);
            return;
        }

        const searchResults = searchCalculators(query, 8);
        setResults(searchResults);
        setSelectedIndex(0);
    }, [query]);

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => Math.max(prev - 1, 0));
                break;
            case 'Enter':
                e.preventDefault();
                if (results[selectedIndex]) {
                    navigateTo(results[selectedIndex]);
                }
                break;
            case 'Escape':
                e.preventDefault();
                onOpenChange(false);
                break;
        }
    };

    // Navigate to selected result
    const navigateTo = (item: SearchItem) => {
        onOpenChange(false);
        router.push(item.href);
    };

    // Scroll selected item into view
    React.useEffect(() => {
        const selectedElement = listRef.current?.children[selectedIndex] as HTMLElement;
        selectedElement?.scrollIntoView({ block: 'nearest' });
    }, [selectedIndex]);

    // Close on backdrop click
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onOpenChange(false);
        }
    };

    if (!open) return null;

    const categoryLabels: Record<string, string> = {
        salary: 'Salary',
        paycheck: 'Paycheck',
        tax: 'Tax',
        overtime: 'Overtime',
        retirement: 'Retirement',
        freelance: 'Freelance',
    };

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Search calculators"
            className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
            onClick={handleBackdropClick}
        >
            <div className="w-full max-w-xl bg-background border border-border rounded-xl shadow-2xl overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center border-b border-border px-4">
                    <Search className="h-5 w-5 text-muted-foreground shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search calculators..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 px-4 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
                        aria-label="Search calculators"
                        autoComplete="off"
                        spellCheck={false}
                    />
                    <button
                        onClick={() => onOpenChange(false)}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Close search"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Results List */}
                <div
                    ref={listRef}
                    className="max-h-80 overflow-y-auto"
                    role="listbox"
                    aria-label="Search results"
                >
                    {results.length === 0 && query.trim() && (
                        <div className="px-4 py-8 text-center text-muted-foreground">
                            <p>No calculators found for "{query}"</p>
                            <p className="text-sm mt-2">Try searching by state, salary amount, or calculator type</p>
                        </div>
                    )}

                    {results.length > 0 && (
                        <div className="p-2">
                            {!query.trim() && (
                                <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                    Popular Calculators
                                </div>
                            )}
                            {results.map((item, index) => (
                                <button
                                    key={item.slug}
                                    role="option"
                                    aria-selected={index === selectedIndex}
                                    onClick={() => navigateTo(item)}
                                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors ${index === selectedIndex
                                            ? 'bg-muted text-foreground'
                                            : 'hover:bg-muted/50'
                                        }`}
                                >
                                    <Calculator className="h-4 w-4 text-muted-foreground shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <div className="font-medium text-foreground truncate">
                                            {item.title}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {categoryLabels[item.category] || item.category}
                                            {item.stateCode && ` • ${item.stateCode.toUpperCase()}`}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-border text-xs text-muted-foreground bg-muted/30">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 bg-muted border border-border rounded text-[10px] font-mono">↑</kbd>
                            <kbd className="px-1.5 py-0.5 bg-muted border border-border rounded text-[10px] font-mono">↓</kbd>
                            to navigate
                        </span>
                        <span className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 bg-muted border border-border rounded text-[10px] font-mono">↵</kbd>
                            to select
                        </span>
                    </div>
                    <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 bg-muted border border-border rounded text-[10px] font-mono">esc</kbd>
                        to close
                    </span>
                </div>
            </div>
        </div>
    );
}
