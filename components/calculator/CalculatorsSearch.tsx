'use client';

import * as React from 'react';
import { Search } from 'lucide-react';

interface CalculatorsSearchProps {
    onSearch: (query: string) => void;
}

export function CalculatorsSearch({ onSearch }: CalculatorsSearchProps) {
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        onSearch(value);
    };

    const handleClear = () => {
        setSearchQuery('');
        onSearch('');
    };

    return (
        <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
                type="text"
                placeholder="Search calculators... (e.g., California paycheck, $50k salary, 401k)"
                value={searchQuery}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all text-base"
                autoComplete="off"
                spellCheck={false}
            />
            {searchQuery && (
                <button
                    onClick={handleClear}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    Clear
                </button>
            )}
        </div>
    );
}
