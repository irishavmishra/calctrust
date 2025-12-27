/**
 * Calculator Strategy Registry
 * 
 * Factory pattern to select the correct calculator strategy based on type.
 * This replaces the switch statement in CalculatorShell with a more maintainable pattern.
 */

import type { CalculatorType } from '@/lib/content/calculators';
import type { CalculatorStrategy, CalculatorContext, CalculatorOutput } from './types';

// Import all strategies
import { salaryToHourlyStrategy } from './salaryToHourly';
import { hourlyToSalaryStrategy } from './hourlyToSalary';
import { paycheckStrategy } from './paycheck';
import { overtimeStrategy } from './overtime';
import { payRaiseStrategy } from './payRaise';
import { retirement401kStrategy } from './retirement401k';
import { bonusTaxStrategy } from './bonusTax';
import { freelanceRateStrategy } from './freelanceRate';

/**
 * Registry of all calculator strategies
 */
const strategies: CalculatorStrategy[] = [
    salaryToHourlyStrategy,
    hourlyToSalaryStrategy,
    paycheckStrategy,
    overtimeStrategy,
    payRaiseStrategy,
    retirement401kStrategy,
    bonusTaxStrategy,
    freelanceRateStrategy,
];

/**
 * Map of calculator type to strategy for O(1) lookup
 */
const strategyMap = new Map<CalculatorType, CalculatorStrategy>();

// Build the lookup map
for (const strategy of strategies) {
    for (const type of strategy.types) {
        strategyMap.set(type, strategy);
    }
}

/**
 * Get the strategy for a given calculator type
 */
export function getStrategy(calculatorType: CalculatorType): CalculatorStrategy | undefined {
    return strategyMap.get(calculatorType);
}

/**
 * Execute calculation for a given calculator type
 * Returns empty object if no strategy found
 */
export function executeCalculation(
    calculatorType: CalculatorType,
    context: CalculatorContext
): CalculatorOutput {
    const strategy = getStrategy(calculatorType);

    if (!strategy) {
        // Unknown calculator type - return empty result
        return {};
    }

    return strategy.calculate(context);
}

// Re-export types for convenience
export type { CalculatorStrategy, CalculatorContext, CalculatorOutput } from './types';
