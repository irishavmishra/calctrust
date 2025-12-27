/**
 * Calculator Strategy Types
 * 
 * Defines the interface for all calculator strategies and shared types.
 */

import type { CalculatorType } from '@/lib/content/calculators';
import type { FilingStatus, PayFrequency } from '../types';

/**
 * Input values passed from the CalculatorShell component
 */
export type CalculatorValues = Record<string, number | string>;

/**
 * Output values returned by calculator strategies
 */
export type CalculatorOutput = Record<string, number>;

/**
 * Context passed to calculator strategies
 */
export interface CalculatorContext {
    values: CalculatorValues;
    stateCode?: string;
}

/**
 * Calculator Strategy Interface
 * Each calculator type implements this interface
 */
export interface CalculatorStrategy {
    /**
     * The calculator type(s) this strategy handles
     */
    readonly types: CalculatorType[];

    /**
     * Execute the calculation and return results
     */
    calculate(context: CalculatorContext): CalculatorOutput;
}

/**
 * Helper to safely extract numeric values with defaults
 */
export function getNumber(values: CalculatorValues, key: string, defaultValue: number = 0): number {
    return Number(values[key]) || defaultValue;
}

/**
 * Helper to safely extract string values with defaults
 */
export function getString(values: CalculatorValues, key: string, defaultValue: string = ''): string {
    return (values[key] as string) || defaultValue;
}

/**
 * Helper to extract FilingStatus
 */
export function getFilingStatus(values: CalculatorValues): FilingStatus {
    return (values.filingStatus as FilingStatus) || 'single';
}

/**
 * Helper to extract PayFrequency
 */
export function getPayFrequency(values: CalculatorValues): PayFrequency {
    return (values.payFrequency as PayFrequency) || 'biweekly';
}
