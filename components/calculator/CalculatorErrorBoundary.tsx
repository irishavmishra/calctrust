'use client';

import { Component, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

/**
 * Error Boundary for Calculator components
 * Catches errors during rendering and displays a fallback UI
 */
export class CalculatorErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch() {
        // In production, you might want to log this to an error reporting service
        // For now, we just update state to show fallback UI
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="w-full max-w-5xl mx-auto p-8">
                    <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-8 text-center">
                        <h3 className="text-lg font-semibold text-destructive mb-2">
                            Calculator Error
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Something went wrong while loading the calculator. Please refresh the page.
                        </p>
                        <button
                            onClick={() => this.setState({ hasError: false })}
                            className="px-4 py-2 text-sm font-medium bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
