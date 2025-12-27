/**
 * Pay Raise Calculator Strategy
 */

import { calculatePayRaise } from '../salary';
import type { CalculatorStrategy, CalculatorContext, CalculatorOutput } from './types';
import { getNumber } from './types';

export const payRaiseStrategy: CalculatorStrategy = {
    types: ['payRaise'],

    calculate(context: CalculatorContext): CalculatorOutput {
        const { values } = context;

        const result = calculatePayRaise(
            getNumber(values, 'currentSalary', 0),
            getNumber(values, 'raisePercentage', 0)
        );

        return { ...result };
    }
};
