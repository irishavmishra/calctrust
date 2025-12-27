/**
 * Strategy Registry Tests
 * 
 * Tests for the calculator strategy factory and registry
 */

import { executeCalculation, getStrategy } from './index';
import type { CalculatorContext } from './types';

describe('Calculator Strategy Registry', () => {
    describe('getStrategy', () => {
        it('returns strategy for salaryToHourly', () => {
            expect(getStrategy('salaryToHourly')).toBeDefined();
        });

        it('returns strategy for hourlyToSalary', () => {
            expect(getStrategy('hourlyToSalary')).toBeDefined();
        });

        it('returns strategy for paycheck', () => {
            expect(getStrategy('paycheck')).toBeDefined();
        });

        it('returns strategy for paycheckState (shares with paycheck)', () => {
            const paycheckStrategy = getStrategy('paycheck');
            const paycheckStateStrategy = getStrategy('paycheckState');
            expect(paycheckStateStrategy).toBe(paycheckStrategy);
        });

        it('returns strategy for overtime types', () => {
            const overtimeStrategy = getStrategy('overtime');
            expect(getStrategy('timeAndHalf')).toBe(overtimeStrategy);
            expect(getStrategy('doubleTime')).toBe(overtimeStrategy);
        });

        it('returns strategy for 401k', () => {
            expect(getStrategy('401k')).toBeDefined();
        });

        it('returns strategy for bonusTax', () => {
            expect(getStrategy('bonusTax')).toBeDefined();
        });

        it('returns strategy for freelanceRate', () => {
            expect(getStrategy('freelanceRate')).toBeDefined();
        });

        it('returns undefined for unknown calculator type', () => {
            // @ts-expect-error - testing invalid type
            expect(getStrategy('unknownType')).toBeUndefined();
        });
    });

    describe('executeCalculation', () => {
        it('calculates salary to hourly correctly', () => {
            const context: CalculatorContext = {
                values: {
                    annualSalary: 52000,
                    hoursPerWeek: 40,
                    weeksPerYear: 52,
                },
            };

            const result = executeCalculation('salaryToHourly', context);
            expect(result.hourlyRate).toBe(25);
            expect(result.monthlyPay).toBe(4333.33);
        });

        it('calculates hourly to salary correctly', () => {
            const context: CalculatorContext = {
                values: {
                    hourlyRate: 25,
                    hoursPerWeek: 40,
                    weeksPerYear: 52,
                },
            };

            const result = executeCalculation('hourlyToSalary', context);
            expect(result.annualSalary).toBe(52000);
        });

        it('calculates paycheck with state', () => {
            const context: CalculatorContext = {
                values: {
                    grossPay: 5000,
                    payFrequency: 'monthly',
                    filingStatus: 'single',
                    state: 'TX', // No state tax
                },
            };

            const result = executeCalculation('paycheck', context);
            expect(result.netPay).toBeGreaterThan(0);
            expect(result.stateTax).toBe(0); // Texas has no income tax
        });

        it('calculates paycheck with stateCode context', () => {
            const context: CalculatorContext = {
                values: {
                    grossPay: 5000,
                    payFrequency: 'monthly',
                    filingStatus: 'single',
                },
                stateCode: 'FL', // No state tax
            };

            const result = executeCalculation('paycheckState', context);
            expect(result.netPay).toBeGreaterThan(0);
            expect(result.stateTax).toBe(0);
        });

        it('calculates overtime correctly', () => {
            const context: CalculatorContext = {
                values: {
                    regularHourlyRate: 20,
                    overtimeHours: 10,
                    multiplier: 1.5,
                },
            };

            const result = executeCalculation('overtime', context);
            expect(result.overtimeRate).toBe(30);
            expect(result.overtimePay).toBe(300);
        });

        it('calculates pay raise correctly', () => {
            const context: CalculatorContext = {
                values: {
                    currentSalary: 50000,
                    raisePercentage: 10,
                },
            };

            const result = executeCalculation('payRaise', context);
            expect(result.newSalary).toBe(55000);
            expect(result.raiseAmount).toBe(5000);
        });

        it('calculates 401k impact correctly', () => {
            const context: CalculatorContext = {
                values: {
                    grossPay: 5000,
                    payFrequency: 'monthly',
                    filingStatus: 'single',
                    state: 'CA',
                    contributionPercent: 6,
                },
            };

            const result = executeCalculation('401k', context);
            expect(result.contributionAmount).toBeGreaterThan(0);
            expect(result.taxSavings).toBeGreaterThan(0);
        });

        it('calculates bonus tax correctly', () => {
            const context: CalculatorContext = {
                values: {
                    bonusAmount: 10000,
                    filingStatus: 'single',
                    state: 'CA',
                    annualSalary: 75000,
                },
            };

            const result = executeCalculation('bonusTax', context);
            expect(result.netBonus).toBeLessThan(10000);
            expect(result.federalWithholding).toBe(2200); // 22% flat
        });

        it('calculates freelance rate correctly', () => {
            const context: CalculatorContext = {
                values: {
                    desiredAnnualIncome: 100000,
                    billableHoursPerWeek: 30,
                    weeksWorkedPerYear: 48,
                    overheadPercentage: 25,
                },
            };

            const result = executeCalculation('freelanceRate', context);
            expect(result.minimumHourlyRate).toBeGreaterThan(0);
            expect(result.suggestedHourlyRate).toBeGreaterThan(0);
        });

        it('returns empty object for unknown calculator type', () => {
            const context: CalculatorContext = {
                values: {},
            };

            // @ts-expect-error - testing invalid type
            const result = executeCalculation('unknownType', context);
            expect(result).toEqual({});
        });

        it('handles zero/default values gracefully', () => {
            const context: CalculatorContext = {
                values: {},
            };

            const result = executeCalculation('salaryToHourly', context);
            expect(result.hourlyRate).toBe(0);
        });
    });
});
