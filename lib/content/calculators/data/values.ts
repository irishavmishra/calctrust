/**
 * Value Arrays for Programmatic Page Generation
 * 
 * These arrays define the specific values for which we generate
 * dedicated calculator pages (e.g., "$50k salary", "$20/hour").
 */

// Salary amounts for breakdown pages ($25k - $300k)
export const salaryBreakdowns = [
    25000, 30000, 35000, 40000, 45000, 50000, 52000, 55000, 60000, 65000, 70000,
    75000, 80000, 85000, 90000, 95000, 100000, 110000, 120000, 125000, 130000,
    140000, 150000, 175000, 200000, 250000, 300000,
] as const;

// Hourly rates for "X dollars an hour" pages ($10 - $100)
export const hourlyRateBreakdowns = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    32, 33, 34, 35, 36, 40, 45, 48, 50, 55, 60, 75, 100,
] as const;

// Biweekly pay amounts for conversion pages
export const biweeklyAmounts = [
    1000, 1100, 1200, 1300, 1400, 1500, 1600, 1800, 2000, 2200, 2400, 2500,
    2800, 3000, 3200, 3500, 3846, 4000, 4500, 5000, 6000,
] as const;

// Weekly pay amounts for conversion pages
export const weeklyAmounts = [
    400, 500, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1100, 1200,
    1300, 1400, 1500, 1750, 2000, 2500, 3000,
] as const;

// Monthly salary amounts for conversion pages
export const monthlyAmounts = [
    2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500,
    7000, 7500, 8000, 8333, 8500, 9000, 10000, 12000, 15000, 20000,
] as const;

// Raise percentages for raise calculator pages
export const raisePercentages = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, 25] as const;

// Top states for state+salary combination pages
export const topStatesForSalary = ['CA', 'TX', 'FL', 'NY', 'IL', 'PA', 'OH', 'GA', 'NC', 'WA'] as const;
export const topSalariesForStates = [40000, 50000, 60000, 75000, 80000, 100000, 120000, 150000] as const;
