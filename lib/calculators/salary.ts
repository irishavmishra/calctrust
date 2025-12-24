import type {
    SalaryConversionInput,
    SalaryConversionOutput,
    OvertimeInput,
    OvertimeOutput
} from './types';

/**
 * Round a number to specified decimal places
 */
function round(value: number, decimals: number = 2): number {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

/**
 * Convert annual salary to hourly rate and other frequencies
 */
export function calculateSalaryToHourly(
    input: SalaryConversionInput
): SalaryConversionOutput {
    const { annualSalary, hoursPerWeek, weeksPerYear } = input;

    if (annualSalary <= 0 || hoursPerWeek <= 0 || weeksPerYear <= 0) {
        return {
            hourlyRate: 0,
            monthlyPay: 0,
            weeklyPay: 0,
            dailyPay: 0,
            annualSalary: 0,
        };
    }

    const totalHoursPerYear = hoursPerWeek * weeksPerYear;
    const hourlyRate = annualSalary / totalHoursPerYear;
    const daysPerWeek = 5; // Assuming 5-day work week

    return {
        hourlyRate: round(hourlyRate),
        monthlyPay: round(annualSalary / 12),
        weeklyPay: round(annualSalary / weeksPerYear),
        dailyPay: round(annualSalary / (weeksPerYear * daysPerWeek)),
        annualSalary: round(annualSalary),
    };
}

/**
 * Convert hourly rate to annual salary and other frequencies
 */
export function calculateHourlyToSalary(
    hourlyRate: number,
    hoursPerWeek: number = 40,
    weeksPerYear: number = 52
): SalaryConversionOutput {
    if (hourlyRate <= 0 || hoursPerWeek <= 0 || weeksPerYear <= 0) {
        return {
            hourlyRate: 0,
            monthlyPay: 0,
            weeklyPay: 0,
            dailyPay: 0,
            annualSalary: 0,
        };
    }

    const annualSalary = hourlyRate * hoursPerWeek * weeksPerYear;
    const daysPerWeek = 5;

    return {
        hourlyRate: round(hourlyRate),
        monthlyPay: round(annualSalary / 12),
        weeklyPay: round(hourlyRate * hoursPerWeek),
        dailyPay: round(hourlyRate * (hoursPerWeek / daysPerWeek)),
        annualSalary: round(annualSalary),
    };
}

/**
 * Convert between different pay frequencies
 */
export function convertPayFrequency(
    amount: number,
    fromFrequency: 'hourly' | 'daily' | 'weekly' | 'biweekly' | 'semimonthly' | 'monthly' | 'annual',
    toFrequency: 'hourly' | 'daily' | 'weekly' | 'biweekly' | 'semimonthly' | 'monthly' | 'annual',
    hoursPerWeek: number = 40
): number {
    // First convert to annual
    const periodsPerYear: Record<string, number> = {
        hourly: hoursPerWeek * 52,
        daily: 260, // 52 weeks * 5 days
        weekly: 52,
        biweekly: 26,
        semimonthly: 24,
        monthly: 12,
        annual: 1,
    };

    const annualAmount = amount * periodsPerYear[fromFrequency];
    return round(annualAmount / periodsPerYear[toFrequency]);
}

/**
 * Calculate overtime pay
 */
export function calculateOvertime(input: OvertimeInput): OvertimeOutput {
    const { regularHourlyRate, overtimeHours, multiplier } = input;

    if (regularHourlyRate <= 0 || overtimeHours < 0 || multiplier <= 0) {
        return {
            regularRate: 0,
            overtimeRate: 0,
            overtimeHours: 0,
            overtimePay: 0,
        };
    }

    const overtimeRate = regularHourlyRate * multiplier;
    const overtimePay = overtimeRate * overtimeHours;

    return {
        regularRate: round(regularHourlyRate),
        overtimeRate: round(overtimeRate),
        overtimeHours: round(overtimeHours),
        overtimePay: round(overtimePay),
    };
}

/**
 * Calculate time and a half (1.5x overtime)
 */
export function calculateTimeAndHalf(
    regularHourlyRate: number,
    overtimeHours: number
): OvertimeOutput {
    return calculateOvertime({
        regularHourlyRate,
        overtimeHours,
        multiplier: 1.5,
    });
}

/**
 * Calculate double time (2x overtime)
 */
export function calculateDoubleTime(
    regularHourlyRate: number,
    overtimeHours: number
): OvertimeOutput {
    return calculateOvertime({
        regularHourlyRate,
        overtimeHours,
        multiplier: 2,
    });
}

/**
 * Calculate pay raise
 */
export function calculatePayRaise(
    currentSalary: number,
    raisePercentage: number
): {
    currentSalary: number;
    raiseAmount: number;
    newSalary: number;
    monthlyIncrease: number;
} {
    const raiseAmount = currentSalary * (raisePercentage / 100);
    const newSalary = currentSalary + raiseAmount;

    return {
        currentSalary: round(currentSalary),
        raiseAmount: round(raiseAmount),
        newSalary: round(newSalary),
        monthlyIncrease: round(raiseAmount / 12),
    };
}

/**
 * Calculate commission
 */
export function calculateCommission(
    salesAmount: number,
    commissionRate: number,
    baseSalary: number = 0
): {
    salesAmount: number;
    commissionRate: number;
    commissionEarned: number;
    baseSalary: number;
    totalEarnings: number;
} {
    const commissionEarned = salesAmount * (commissionRate / 100);
    const totalEarnings = baseSalary + commissionEarned;

    return {
        salesAmount: round(salesAmount),
        commissionRate: round(commissionRate, 1),
        commissionEarned: round(commissionEarned),
        baseSalary: round(baseSalary),
        totalEarnings: round(totalEarnings),
    };
}

/**
 * Calculate freelance hourly rate based on desired annual income
 */
export function calculateFreelanceRate(
    desiredAnnualIncome: number,
    billableHoursPerWeek: number,
    weeksWorkedPerYear: number,
    overheadPercentage: number = 30, // Default 30% for taxes, benefits, etc.
    profitMargin: number = 20 // Default 20% profit margin
): {
    desiredIncome: number;
    overhead: number;
    profitMargin: number;
    minimumHourlyRate: number;
    suggestedHourlyRate: number;
    annualBillableHours: number;
} {
    const annualBillableHours = billableHoursPerWeek * weeksWorkedPerYear;
    const overheadAmount = desiredAnnualIncome * (overheadPercentage / 100);
    const totalNeeded = desiredAnnualIncome + overheadAmount;
    const minimumHourlyRate = totalNeeded / annualBillableHours;
    const suggestedHourlyRate = minimumHourlyRate * (1 + profitMargin / 100);

    return {
        desiredIncome: round(desiredAnnualIncome),
        overhead: round(overheadAmount),
        profitMargin: round(profitMargin, 1),
        minimumHourlyRate: round(minimumHourlyRate),
        suggestedHourlyRate: round(suggestedHourlyRate),
        annualBillableHours: round(annualBillableHours),
    };
}
