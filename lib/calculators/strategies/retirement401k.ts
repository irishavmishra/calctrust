/**
 * 401k Impact Calculator Strategy
 */

import { calculate401kImpact } from '../paycheck';
import type { CalculatorStrategy, CalculatorContext, CalculatorOutput } from './types';
import { getNumber, getString, getFilingStatus, getPayFrequency } from './types';

export const retirement401kStrategy: CalculatorStrategy = {
    types: ['401k'],

    calculate(context: CalculatorContext): CalculatorOutput {
        const { values } = context;

        const result = calculate401kImpact(
            getNumber(values, 'grossPay', 0),
            getPayFrequency(values),
            getFilingStatus(values),
            getString(values, 'state', 'CA'),
            getNumber(values, 'contributionPercent', 0)
        );

        return { ...result };
    }
};
