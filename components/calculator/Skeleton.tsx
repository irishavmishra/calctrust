'use client';

/**
 * Calculator Loading Skeleton
 * 
 * Shows a pulsing skeleton UI while the calculator component hydrates.
 * Provides immediate visual feedback to users.
 */

export function CalculatorSkeleton() {
    return (
        <div className="w-full animate-pulse" aria-label="Loading calculator...">
            {/* Input Section Skeleton */}
            <div className="space-y-6 p-6 bg-muted/30 rounded-2xl border border-border/50 mb-6">
                {/* Title bar */}
                <div className="flex items-center justify-between">
                    <div className="h-6 w-40 bg-muted rounded" />
                    <div className="h-5 w-24 bg-muted rounded" />
                </div>

                {/* Input fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="space-y-2">
                            <div className="h-4 w-24 bg-muted rounded" />
                            <div className="h-10 w-full bg-muted rounded-lg" />
                        </div>
                    ))}
                </div>

                {/* Calculate button */}
                <div className="h-12 w-full bg-muted rounded-lg" />
            </div>

            {/* Results Section Skeleton */}
            <div className="space-y-4 p-6 bg-muted/30 rounded-2xl border border-border/50">
                {/* Results header */}
                <div className="h-5 w-32 bg-muted rounded" />

                {/* Result cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="p-4 bg-muted/50 rounded-xl space-y-2">
                            <div className="h-4 w-20 bg-muted rounded" />
                            <div className="h-8 w-24 bg-muted rounded" />
                        </div>
                    ))}
                </div>

                {/* Breakdown section */}
                <div className="space-y-2 mt-4">
                    <div className="h-5 w-40 bg-muted rounded" />
                    <div className="space-y-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex justify-between">
                                <div className="h-4 w-32 bg-muted rounded" />
                                <div className="h-4 w-20 bg-muted rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalculatorSkeleton;
