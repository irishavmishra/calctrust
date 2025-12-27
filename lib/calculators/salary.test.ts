/**
 * Salary Calculators Test Suite
 * 
 * Tests for salary conversion and related calculations
 */

import {
    calculateSalaryToHourly,
    calculateHourlyToSalary,
    calculateOvertime,
    calculatePayRaise,
    calculateFreelanceRate,
} from './salary';

describe('Salary Calculators', () => {
    describe('calculateSalaryToHourly', () => {
        it('calculates hourly rate from annual salary', () => {
            const result = calculateSalaryToHourly({
                annualSalary: 52000,
                hoursPerWeek: 40,
                weeksPerYear: 52,
            });

            expect(result.hourlyRate).toBe(25);
            expect(result.dailyPay).toBe(200);
            expect(result.weeklyPay).toBe(1000);
            expect(result.monthlyPay).toBe(4333.33);
        });

        it('handles custom hours and weeks', () => {
            const result = calculateSalaryToHourly({
                annualSalary: 60000,
                hoursPerWeek: 30,
                weeksPerYear: 48,
            });

            expect(result.hourlyRate).toBe(41.67);
        });

        it('handles zero salary gracefully', () => {
            const result = calculateSalaryToHourly({
                annualSalary: 0,
                hoursPerWeek: 40,
                weeksPerYear: 52,
            });

            expect(result.hourlyRate).toBe(0);
            expect(result.monthlyPay).toBe(0);
        });

        it('handles high salary correctly', () => {
            const result = calculateSalaryToHourly({
                annualSalary: 500000,
                hoursPerWeek: 40,
                weeksPerYear: 52,
            });

            expect(result.hourlyRate).toBe(240.38);
        });
    });

    describe('calculateHourlyToSalary', () => {
        it('calculates annual salary from hourly rate', () => {
            const result = calculateHourlyToSalary(25, 40, 52);

            expect(result.annualSalary).toBe(52000);
            expect(result.monthlyPay).toBe(4333.33);
            expect(result.weeklyPay).toBe(1000);
            expect(result.dailyPay).toBe(200);
        });

        it('handles part-time hours', () => {
            const result = calculateHourlyToSalary(20, 20, 52);

            expect(result.annualSalary).toBe(20800);
        });

        it('handles zero rate gracefully', () => {
            const result = calculateHourlyToSalary(0, 40, 52);

            expect(result.annualSalary).toBe(0);
        });
    });

    describe('calculateOvertime', () => {
        it('calculates time-and-a-half overtime', () => {
            const result = calculateOvertime({
                regularHourlyRate: 20,
                overtimeHours: 10,
                multiplier: 1.5,
            });

            expect(result.overtimeRate).toBe(30);
            expect(result.overtimePay).toBe(300);
        });

        it('calculates double-time overtime', () => {
            const result = calculateOvertime({
                regularHourlyRate: 20,
                overtimeHours: 5,
                multiplier: 2,
            });

            expect(result.overtimeRate).toBe(40);
            expect(result.overtimePay).toBe(200);
        });

        it('handles zero hours', () => {
            const result = calculateOvertime({
                regularHourlyRate: 25,
                overtimeHours: 0,
                multiplier: 1.5,
            });

            expect(result.overtimePay).toBe(0);
        });
    });

    describe('calculatePayRaise', () => {
        it('calculates salary increase', () => {
            const result = calculatePayRaise(50000, 10);

            expect(result.newSalary).toBe(55000);
            expect(result.raiseAmount).toBe(5000);
            expect(result.monthlyIncrease).toBe(416.67);
        });

        it('handles small percentage', () => {
            const result = calculatePayRaise(60000, 3);

            expect(result.newSalary).toBe(61800);
            expect(result.raiseAmount).toBe(1800);
        });

        it('handles zero raise', () => {
            const result = calculatePayRaise(50000, 0);

            expect(result.newSalary).toBe(50000);
            expect(result.raiseAmount).toBe(0);
        });
    });

    describe('calculateFreelanceRate', () => {
        it('calculates hourly rate with overhead', () => {
            const result = calculateFreelanceRate(100000, 30, 48, 25);

            expect(result.minimumHourlyRate).toBeGreaterThan(0);
            expect(result.suggestedHourlyRate).toBeGreaterThan(result.minimumHourlyRate);
        });

        it('calculates billable hours', () => {
            const result = calculateFreelanceRate(75000, 25, 50, 20);

            expect(result.annualBillableHours).toBe(1250);
            expect(result.minimumHourlyRate).toBeGreaterThan(0);
        });

        it('handles zero billable hours', () => {
            const result = calculateFreelanceRate(100000, 0, 48, 25);

            // Division by zero results in Infinity
            expect(result.minimumHourlyRate).toBe(Infinity);
        });
    });
});
