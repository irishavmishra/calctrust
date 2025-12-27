/**
 * Bonus Tax Calculator Strategy
 */

import { calculateBonusTax } from '../paycheck';
import type { CalculatorStrategy, CalculatorContext, CalculatorOutput } from './types';
import { getNumber, getString, getFilingStatus } from './types';

export const bonusTaxStrategy: CalculatorStrategy = {
    types: ['bonusTax'],

    calculate(context: CalculatorContext): CalculatorOutput {
        const { values } = context;

        const result = calculateBonusTax(
            getNumber(values, 'bonusAmount', 0),
            getFilingStatus(values),
            getString(values, 'state', 'CA'),
            getNumber(values, 'annualSalary', 0)
        );

        return { ...result };
    }
};
