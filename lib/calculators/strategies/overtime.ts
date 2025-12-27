/**
 * Overtime Calculator Strategy
 * Handles 'overtime', 'timeAndHalf', and 'doubleTime' calculator types
 */

import { calculateOvertime } from '../salary';
import type { CalculatorStrategy, CalculatorContext, CalculatorOutput } from './types';
import { getNumber } from './types';

export const overtimeStrategy: CalculatorStrategy = {
    types: ['overtime', 'timeAndHalf', 'doubleTime'],

    calculate(context: CalculatorContext): CalculatorOutput {
        const { values } = context;

        const result = calculateOvertime({
            regularHourlyRate: getNumber(values, 'regularHourlyRate', 0),
            overtimeHours: getNumber(values, 'overtimeHours', 0),
            multiplier: getNumber(values, 'multiplier', 1.5),
        });

        return { ...result };
    }
};
