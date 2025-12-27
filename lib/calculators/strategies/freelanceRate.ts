/**
 * Freelance Rate Calculator Strategy
 */

import { calculateFreelanceRate } from '../salary';
import type { CalculatorStrategy, CalculatorContext, CalculatorOutput } from './types';
import { getNumber } from './types';

export const freelanceRateStrategy: CalculatorStrategy = {
    types: ['freelanceRate'],

    calculate(context: CalculatorContext): CalculatorOutput {
        const { values } = context;

        const result = calculateFreelanceRate(
            getNumber(values, 'desiredAnnualIncome', 0),
            getNumber(values, 'billableHoursPerWeek', 25),
            getNumber(values, 'weeksWorkedPerYear', 48),
            getNumber(values, 'overheadPercentage', 30)
        );

        return { ...result };
    }
};
