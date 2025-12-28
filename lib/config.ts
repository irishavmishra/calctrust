/**
 * Centralized Configuration for CalcTrust
 * 
 * All application-wide constants should be defined here
 * to ensure consistency and easy annual updates.
 */

import { calculatorPages } from './content/calculators';

// Tax Year Configuration
// Update this once annually in January
export const TAX_YEAR = '2025';
export const TAX_YEAR_LABEL = '2025';
export const LAST_TAX_UPDATE = 'December 2025';

// Site Configuration
export const SITE_URL = 'https://calctrust.com';
export const SITE_NAME = 'CalcTrust';

// Calculator Counts - Dynamically calculated from calculatorPages
/**
 * Get the total number of calculators dynamically.
 * This ensures the count is always accurate when calculators are added or removed.
 */
export function getTotalCalculators(): number {
    return calculatorPages.length;
}

// Export as constant for backward compatibility (dynamically calculated)
export const TOTAL_CALCULATORS = getTotalCalculators();
export const TOTAL_PAGES = 278;
export const STATES_COVERED = 50;
