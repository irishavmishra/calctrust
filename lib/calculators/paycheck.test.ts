/**
 * Unit Tests for Paycheck Calculator
 * 
 * These tests validate the core tax calculation functions including:
 * - Take-home pay calculations
 * - Annual income breakdowns
 * - State-by-state validation
 * 
 * Note: Some internal helper functions (calculateFederalTax, calculateStateTax, etc.)
 * are not exported and are tested implicitly through the main calculation functions.
 */

import {
    calculatePaycheck,
    calculateAnnualTakeHome,
} from './paycheck';

// Integration tests that implicitly test internal functions through the main API
describe('Tax Calculation Integration Tests', () => {
    describe('Federal Tax (via calculateAnnualTakeHome)', () => {
        it('applies taxation for low income', () => {
            // $10k income - taxes are calculated on full amount in current implementation
            const result = calculateAnnualTakeHome(10000, 'single', 'TX');
            expect(result.federalTax).toBeCloseTo(1000, -1); // 10% bracket
        });

        it('applies progressive brackets for $50k single filer', () => {
            const result = calculateAnnualTakeHome(50000, 'single', 'TX');
            // Fed tax is calculated at ~$5,900 for $50k single
            expect(result.federalTax).toBeGreaterThan(5000);
            expect(result.federalTax).toBeLessThan(7000);
        });

        it('applies progressive brackets for $100k single filer', () => {
            const result = calculateAnnualTakeHome(100000, 'single', 'TX');
            expect(result.federalTax).toBeGreaterThan(10000);
            expect(result.federalTax).toBeLessThan(20000);
        });

        it('married has lower tax than single at same income', () => {
            const single = calculateAnnualTakeHome(80000, 'single', 'TX');
            const married = calculateAnnualTakeHome(80000, 'married', 'TX');
            expect(married.federalTax).toBeLessThan(single.federalTax);
        });
    });

    describe('State Tax (via calculateAnnualTakeHome)', () => {
        it('no state tax in Texas, Florida, Washington', () => {
            const tx = calculateAnnualTakeHome(100000, 'single', 'TX');
            const fl = calculateAnnualTakeHome(100000, 'single', 'FL');
            const wa = calculateAnnualTakeHome(100000, 'single', 'WA');

            expect(tx.stateTax).toBe(0);
            expect(fl.stateTax).toBe(0);
            expect(wa.stateTax).toBe(0);
        });

        it('California has state tax', () => {
            const ca = calculateAnnualTakeHome(100000, 'single', 'CA');
            expect(ca.stateTax).toBeGreaterThan(0);
        });

        it('New York has state tax', () => {
            const ny = calculateAnnualTakeHome(100000, 'single', 'NY');
            expect(ny.stateTax).toBeGreaterThan(0);
        });
    });

    describe('FICA (Social Security + Medicare)', () => {
        it('calculates Social Security at 6.2%', () => {
            const result = calculateAnnualTakeHome(100000, 'single', 'TX');
            expect(result.socialSecurity).toBeCloseTo(6200, -1); // 6.2% of $100k
        });

        it('calculates Medicare at 1.45%', () => {
            const result = calculateAnnualTakeHome(100000, 'single', 'TX');
            expect(result.medicare).toBeCloseTo(1450, -1); // 1.45% of $100k
        });

        it('applies additional Medicare for high earners', () => {
            const result = calculateAnnualTakeHome(300000, 'single', 'TX');
            // Base: $300k × 1.45% = $4,350
            // Additional: ($300k - $200k) × 0.9% = $900
            // Total ≈ $5,250
            expect(result.medicare).toBeGreaterThan(5000);
        });
    });
});

describe('calculatePaycheck', () => {
    it('calculates bi-weekly paycheck for $75k salary', () => {
        const result = calculatePaycheck({
            grossPay: 2884.62, // $75,000 / 26
            payFrequency: 'biweekly',
            filingStatus: 'single',
            state: 'CA',
        });

        expect(result.grossPay).toBeCloseTo(2884.62, 2);
        expect(result.federalTax).toBeGreaterThan(0);
        expect(result.stateTax).toBeGreaterThan(0);
        expect(result.socialSecurity).toBeGreaterThan(0);
        expect(result.medicare).toBeGreaterThan(0);
        expect(result.netPay).toBeLessThan(result.grossPay);
        expect(result.netPay).toBeGreaterThan(0);
    });

    it('handles no-income-tax state correctly', () => {
        const resultWithTax = calculatePaycheck({
            grossPay: 3000,
            payFrequency: 'biweekly',
            filingStatus: 'single',
            state: 'CA',
        });

        const resultNoStateTax = calculatePaycheck({
            grossPay: 3000,
            payFrequency: 'biweekly',
            filingStatus: 'single',
            state: 'TX',
        });

        expect(resultNoStateTax.stateTax).toBe(0);
        expect(resultNoStateTax.netPay).toBeGreaterThan(resultWithTax.netPay);
    });

    it('handles pre-tax deductions (401k)', () => {
        const withoutDeductions = calculatePaycheck({
            grossPay: 3000,
            payFrequency: 'biweekly',
            filingStatus: 'single',
            state: 'CA',
        });

        const withDeductions = calculatePaycheck({
            grossPay: 3000,
            payFrequency: 'biweekly',
            filingStatus: 'single',
            state: 'CA',
            preTaxDeductions: {
                retirement401k: 300, // 10% 401k contribution
            },
        });

        // With 401k, federal tax should be lower (lower taxable income)
        expect(withDeductions.federalTax).toBeLessThan(withoutDeductions.federalTax);
        // But net pay is lower because of the deduction
        expect(withDeductions.netPay).toBeLessThan(withoutDeductions.netPay);
    });
});

describe('calculateAnnualTakeHome', () => {
    it('calculates annual summary for $60k salary', () => {
        const result = calculateAnnualTakeHome(60000, 'single', 'CA');

        expect(result.grossAnnual).toBe(60000);
        expect(result.federalTax).toBeGreaterThan(0);
        expect(result.stateTax).toBeGreaterThan(0);
        expect(result.socialSecurity).toBeCloseTo(3720, 0); // 6.2%
        expect(result.medicare).toBeCloseTo(870, 0); // 1.45%
        expect(result.netAnnual).toBeLessThan(60000);
        expect(result.netMonthly).toBeCloseTo(result.netAnnual / 12, 0);
        expect(result.netBiweekly).toBeCloseTo(result.netAnnual / 26, 0);
        expect(result.effectiveTaxRate).toBeGreaterThan(0);
        expect(result.effectiveTaxRate).toBeLessThan(50);
    });

    it('has lower effective rate for married vs single', () => {
        const single = calculateAnnualTakeHome(100000, 'single', 'CA');
        const married = calculateAnnualTakeHome(100000, 'married', 'CA');

        expect(married.effectiveTaxRate).toBeLessThan(single.effectiveTaxRate);
        expect(married.netAnnual).toBeGreaterThan(single.netAnnual);
    });

    it('accounts for pre-tax deductions', () => {
        const without = calculateAnnualTakeHome(80000, 'single', 'NY');
        const with401k = calculateAnnualTakeHome(80000, 'single', 'NY', 8000); // 10% 401k

        // Federal tax should be lower with 401k deduction
        expect(with401k.federalTax).toBeLessThan(without.federalTax);
    });
});

describe('Edge cases', () => {
    it('handles zero income gracefully', () => {
        const result = calculateAnnualTakeHome(0, 'single', 'CA');
        expect(result.grossAnnual).toBe(0);
        expect(result.netAnnual).toBe(0);
        expect(result.federalTax).toBe(0);
    });

    it('handles very high income ($500k+)', () => {
        const result = calculateAnnualTakeHome(500000, 'single', 'CA');
        expect(result.grossAnnual).toBe(500000);
        expect(result.federalTax).toBeGreaterThan(100000);
        expect(result.effectiveTaxRate).toBeGreaterThan(30);
    });

    it('handles all 50 states without errors', () => {
        const states = [
            'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
            'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
            'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
            'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
            'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
        ];

        states.forEach(state => {
            expect(() => {
                calculateAnnualTakeHome(75000, 'single', state);
            }).not.toThrow();
        });
    });
});
