/**
 * Calculator Content Engine - Main Index
 * 
 * This is the public API for the programmatic SEO content engine.
 * It re-exports types, data, and calculator pages.
 */

// Re-export all types
export type {
    CalculatorType,
    CalculatorCategory,
    FAQItem,
    CalculatorInputConfig,
    CalculatorOutputConfig,
    RelatedCalculator,
    CalculatorPageData,
} from './types';

// Re-export form options
export { filingStatusOptions, payFrequencyOptions } from './types';

// Re-export data exports
export { stateData } from './data';

// Re-export generators for direct use if needed
export {
    generateSalaryBreakdowns,
    generateHourlyBreakdowns,
    generateBiweeklyBreakdowns,
    generateWeeklyBreakdowns,
    generateMonthlyBreakdowns,
    generateRaiseCalculators,
    generateStateCalculators,
    generateStateSalaryPages,
} from './generators';
