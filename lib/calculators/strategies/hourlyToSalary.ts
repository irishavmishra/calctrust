/**
 * Hourly to Salary Strategy
 */

import { calculateHourlyToSalary } from '../salary';
import type { CalculatorStrategy, CalculatorContext, CalculatorOutput } from './types';
import { getNumber } from './types';

export const hourlyToSalaryStrategy: CalculatorStrategy = {
    types: ['hourlyToSalary'],

    calculate(context: CalculatorContext): CalculatorOutput {
        const { values } = context;

        const result = calculateHourlyToSalary(
            getNumber(values, 'hourlyRate', 0),
            getNumber(values, 'hoursPerWeek', 40),
            getNumber(values, 'weeksPerYear', 52)
        );

        return { ...result };
    }
};
