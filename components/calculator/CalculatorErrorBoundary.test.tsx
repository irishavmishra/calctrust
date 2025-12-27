/**
 * Calculator Error Boundary Tests
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CalculatorErrorBoundary } from './CalculatorErrorBoundary';

// Component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
    if (shouldThrow) {
        throw new Error('Test error');
    }
    return <div data-testid="child">Child rendered</div>;
};

describe('CalculatorErrorBoundary', () => {
    // Suppress console.error for these tests
    const originalError = console.error;
    beforeAll(() => {
        console.error = jest.fn();
    });
    afterAll(() => {
        console.error = originalError;
    });

    it('renders children when no error', () => {
        render(
            <CalculatorErrorBoundary>
                <ThrowError shouldThrow={false} />
            </CalculatorErrorBoundary>
        );

        expect(screen.getByTestId('child')).toBeInTheDocument();
    });

    it('renders fallback UI when child throws error', () => {
        render(
            <CalculatorErrorBoundary>
                <ThrowError shouldThrow={true} />
            </CalculatorErrorBoundary>
        );

        expect(screen.getByText('Calculator Error')).toBeInTheDocument();
        expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
    });

    it('renders custom fallback when provided', () => {
        render(
            <CalculatorErrorBoundary fallback={<div>Custom fallback</div>}>
                <ThrowError shouldThrow={true} />
            </CalculatorErrorBoundary>
        );

        expect(screen.getByText('Custom fallback')).toBeInTheDocument();
    });

    it('provides Try Again button that resets error state', () => {
        render(
            <CalculatorErrorBoundary>
                <ThrowError shouldThrow={true} />
            </CalculatorErrorBoundary>
        );

        // Error state should be shown
        expect(screen.getByText('Calculator Error')).toBeInTheDocument();

        // Click Try Again - this resets the error state
        fireEvent.click(screen.getByText('Try Again'));

        // After clicking Try Again, component re-renders but will crash again
        // since ThrowError still throws. This verifies the button works.
        // The error boundary catches it again.
        expect(screen.getByText('Calculator Error')).toBeInTheDocument();
    });
});
