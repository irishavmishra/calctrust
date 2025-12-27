/**
 * Salary to Hourly Strategy
 */

import { calculateSalaryToHourly } from '../salary';
import type { CalculatorStrategy, CalculatorContext, CalculatorOutput } from './types';
import { getNumber as getNum } from './types';

export const salaryToHourlyStrategy: CalculatorStrategy = {
    types: ['salaryToHourly'],

    calculate(context: CalculatorContext): CalculatorOutput {
        const { values } = context;

        const result = calculateSalaryToHourly({
            annualSalary: getNum(values, 'annualSalary', 0),
            hoursPerWeek: getNum(values, 'hoursPerWeek', 40),
            weeksPerYear: getNum(values, 'weeksPerYear', 52),
        });

        return { ...result };
    }
};
