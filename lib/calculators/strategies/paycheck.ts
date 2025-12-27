/**
 * Paycheck Calculator Strategy
 * Handles both 'paycheck' and 'paycheckState' calculator types
 */

import { calculatePaycheck } from '../paycheck';
import type { CalculatorStrategy, CalculatorContext, CalculatorOutput } from './types';
import { getNumber, getString, getFilingStatus, getPayFrequency } from './types';

export const paycheckStrategy: CalculatorStrategy = {
    types: ['paycheck', 'paycheckState'],

    calculate(context: CalculatorContext): CalculatorOutput {
        const { values, stateCode } = context;

        const result = calculatePaycheck({
            grossPay: getNumber(values, 'grossPay', 0),
            payFrequency: getPayFrequency(values),
            filingStatus: getFilingStatus(values),
            state: stateCode || getString(values, 'state', 'CA'),
            preTaxDeductions: {
                retirement401k: getNumber(values, 'retirement401k', 0),
            },
        });

        return { ...result };
    }
};
