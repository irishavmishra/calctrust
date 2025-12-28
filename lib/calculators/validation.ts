/**
 * Calculator Input Validation Schemas
 * 
 * Zod schemas for validating calculator inputs before calculations.
 * Provides type-safe validation with user-friendly error messages.
 */

import { z } from 'zod';

// Base schema for currency inputs (positive numbers, reasonable range)
const currencySchema = z
    .number()
    .min(0, 'Amount cannot be negative')
    .max(100_000_000, 'Amount exceeds maximum limit');

// Hours per week validation
const hoursPerWeekSchema = z
    .number()
    .min(1, 'Hours must be at least 1')
    .max(168, 'Hours cannot exceed 168 per week');

// Weeks per year validation
const weeksPerYearSchema = z
    .number()
    .min(1, 'Weeks must be at least 1')
    .max(52, 'Weeks cannot exceed 52 per year');

// Percentage validation
const percentageSchema = z
    .number()
    .min(0, 'Percentage cannot be negative')
    .max(100, 'Percentage cannot exceed 100%');

// Base salary validation (annual salary)
const salarySchema = z
    .number()
    .min(0, 'Salary cannot be negative')
    .max(50_000_000, 'Salary exceeds maximum limit');

// Hourly rate validation
const hourlyRateSchema = z
    .number()
    .min(0, 'Rate cannot be negative')
    .max(10_000, 'Rate exceeds reasonable hourly maximum');

// Pay frequency options
const payFrequencySchema = z.enum(['weekly', 'biweekly', 'semimonthly', 'monthly']);

// Filing status options
const filingStatusSchema = z.enum(['single', 'married', 'married_separate', 'head_of_household']);

// ==================== Calculator-Specific Schemas ====================

/**
 * Salary to Hourly Calculator
 */
export const salaryToHourlySchema = z.object({
    annualSalary: salarySchema,
    hoursPerWeek: hoursPerWeekSchema.default(40),
    weeksPerYear: weeksPerYearSchema.default(52),
});

export type SalaryToHourlyInput = z.infer<typeof salaryToHourlySchema>;

/**
 * Hourly to Salary Calculator
 */
export const hourlyToSalarySchema = z.object({
    hourlyRate: hourlyRateSchema,
    hoursPerWeek: hoursPerWeekSchema.default(40),
    weeksPerYear: weeksPerYearSchema.default(52),
});

export type HourlyToSalaryInput = z.infer<typeof hourlyToSalarySchema>;

/**
 * Paycheck Calculator (with state)
 */
export const paycheckSchema = z.object({
    grossPay: currencySchema.refine((val) => val > 0, 'Gross pay must be greater than 0'),
    payFrequency: payFrequencySchema.default('biweekly'),
    filingStatus: filingStatusSchema.default('single'),
    state: z.string().length(2, 'State must be a valid 2-letter code').optional(),
    retirement401k: currencySchema.default(0),
});

export type PaycheckInput = z.infer<typeof paycheckSchema>;

/**
 * Pay Raise Calculator
 */
export const payRaiseSchema = z.object({
    currentSalary: salarySchema.refine((val) => val > 0, 'Current salary must be greater than 0'),
    raisePercentage: percentageSchema,
});

export type PayRaiseInput = z.infer<typeof payRaiseSchema>;

/**
 * Overtime Calculator
 */
export const overtimeSchema = z.object({
    regularHourlyRate: hourlyRateSchema.refine((val) => val > 0, 'Rate must be greater than 0'),
    overtimeHours: z.number().min(0, 'Hours cannot be negative').max(168, 'Hours exceed weekly maximum'),
    multiplier: z.number().min(1, 'Multiplier must be at least 1').max(3, 'Multiplier cannot exceed 3x').default(1.5),
});

export type OvertimeInput = z.infer<typeof overtimeSchema>;

/**
 * Freelance Rate Calculator
 */
export const freelanceRateSchema = z.object({
    desiredAnnualIncome: salarySchema.refine((val) => val > 0, 'Income target must be greater than 0'),
    billableHoursPerWeek: z.number().min(1).max(80).default(40),
    weeksWorkedPerYear: z.number().min(1).max(52).default(50),
    overheadPercentage: percentageSchema.default(20),
});

export type FreelanceRateInput = z.infer<typeof freelanceRateSchema>;

// ==================== Validation Helper ====================

/**
 * Validates calculator input against the appropriate schema
 * Returns either validated data or an error object
 */
export function validateCalculatorInput<T>(
    calculatorType: string,
    input: Record<string, unknown>
): { success: true; data: T } | { success: false; errors: Record<string, string> } {
    const schemaMap: Record<string, z.ZodSchema> = {
        salaryToHourly: salaryToHourlySchema,
        hourlyToSalary: hourlyToSalarySchema,
        paycheck: paycheckSchema,
        paycheckState: paycheckSchema,
        payRaise: payRaiseSchema,
        overtime: overtimeSchema,
        timeAndHalf: overtimeSchema,
        doubleTime: overtimeSchema,
        freelanceRate: freelanceRateSchema,
    };

    const schema = schemaMap[calculatorType];
    if (!schema) {
        // No schema defined - allow through (for backward compatibility)
        return { success: true, data: input as T };
    }

    const result = schema.safeParse(input);

    if (result.success) {
        return { success: true, data: result.data as T };
    }

    // Convert Zod errors to a simple key-value map
    const errors: Record<string, string> = {};
    result.error.issues.forEach((issue) => {
        const field = issue.path.join('.');
        errors[field] = issue.message;
    });

    return { success: false, errors };
}

/**
 * Gets validation error for a specific field
 */
export function getFieldError(
    calculatorType: string,
    fieldId: string,
    value: unknown
): string | null {
    const schemaMap: Record<string, Record<string, z.ZodSchema>> = {
        salaryToHourly: {
            annualSalary: salarySchema,
            hoursPerWeek: hoursPerWeekSchema,
            weeksPerYear: weeksPerYearSchema,
        },
        hourlyToSalary: {
            hourlyRate: hourlyRateSchema,
            hoursPerWeek: hoursPerWeekSchema,
            weeksPerYear: weeksPerYearSchema,
        },
        paycheck: {
            grossPay: currencySchema,
            retirement401k: currencySchema,
        },
        paycheckState: {
            grossPay: currencySchema,
            retirement401k: currencySchema,
        },
        payRaise: {
            currentSalary: salarySchema,
            raisePercentage: percentageSchema,
        },
        overtime: {
            regularHourlyRate: hourlyRateSchema,
            overtimeHours: z.number().min(0).max(168),
            multiplier: z.number().min(1).max(3),
        },
    };

    const fieldSchemas = schemaMap[calculatorType];
    if (!fieldSchemas) return null;

    const fieldSchema = fieldSchemas[fieldId];
    if (!fieldSchema) return null;

    const result = fieldSchema.safeParse(value);
    if (result.success) return null;

    return result.error.issues[0]?.message || 'Invalid value';
}
