'use client';

import { useState, useCallback, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { RotateCcw, AlertCircle } from 'lucide-react';
import type { CalculatorInputConfig, CalculatorOutputConfig, CalculatorType } from '@/lib/content/calculators';
import { getStatesList } from '@/lib/calculators';
import { executeCalculation } from '@/lib/calculators/strategies';
import { getFieldError } from '@/lib/calculators/validation';

interface CalculatorShellProps {
    calculatorType: CalculatorType;
    inputs: CalculatorInputConfig[];
    outputs: CalculatorOutputConfig[];
    stateCode?: string;
}

export function CalculatorShell({ calculatorType, inputs, outputs, stateCode }: CalculatorShellProps) {
    const states = getStatesList();
    const [values, setValues] = useState<Record<string, number | string>>(() => {
        const initial: Record<string, number | string> = {};
        inputs.forEach((input) => {
            if (input.id === 'state' && stateCode) {
                initial[input.id] = stateCode;
            } else if (input.defaultValue !== undefined) {
                initial[input.id] = input.defaultValue;
            }
        });
        return initial;
    });
    const [result, setResult] = useState<Record<string, number> | null>(null);
    const [isCalculating, setIsCalculating] = useState(true);
    const [calculationError, setCalculationError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string | null>>({});

    const handleInputChange = (id: string, value: string | number) => {
        setValues((prev) => ({ ...prev, [id]: value }));
        // Validate field on change
        const numValue = typeof value === 'string' ? parseFloat(value) : value;
        const error = getFieldError(calculatorType, id, isNaN(numValue) ? 0 : numValue);
        setFieldErrors((prev) => ({ ...prev, [id]: error }));
    };


    const calculate = useCallback(() => {
        try {
            setCalculationError(null);
            // Use strategy pattern for clean, maintainable calculations
            const output = executeCalculation(calculatorType, {
                values,
                stateCode,
            });

            setResult(output);
            setIsCalculating(false);
        } catch (err) {
            console.error('Calculation error:', err);
            setCalculationError('Unable to calculate. Please check your inputs.');
            setResult(null);
            setIsCalculating(false);
        }
    }, [calculatorType, values, stateCode]);

    // Initial and real-time calculation
    useEffect(() => {
        calculate();
    }, [calculate]);

    const formatValue = (value: number, format: CalculatorOutputConfig['format']): string => {
        switch (format) {
            case 'currency':
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }).format(value);
            case 'percentage':
                return `${value.toFixed(1)}%`;
            case 'hours':
                return `${value.toFixed(1)} hours`;
            case 'number':
            default:
                return value.toLocaleString('en-US', { maximumFractionDigits: 2 });
        }
    };

    const renderInput = (input: CalculatorInputConfig) => {
        const inputId = `calc-${input.id}`;

        if (input.type === 'select') {
            const options = input.id === 'state'
                ? states.map(s => ({ value: s.code, label: `${s.name}${s.hasNoIncomeTax ? ' (No tax)' : ''}` }))
                : input.options || [];

            return (
                <div key={input.id} className="space-y-2">
                    <Label htmlFor={inputId} className="text-sm font-medium text-foreground">{input.label}</Label>
                    <Select
                        value={String(values[input.id] || '')}
                        onValueChange={(val) => handleInputChange(input.id, val)}
                    >
                        <SelectTrigger id={inputId} className="w-full h-11 bg-background border-input focus:ring-ring transition-shadow rounded-lg">
                            <SelectValue placeholder={`Select ${input.label.toLowerCase()}`} />
                        </SelectTrigger>
                        <SelectContent>
                            {options.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {input.helperText && (
                        <p className="text-[11px] text-muted-foreground">{input.helperText}</p>
                    )}
                </div>
            );
        }

        return (
            <div key={input.id} className="space-y-2">
                <Label htmlFor={inputId} className="text-sm font-medium text-foreground">{input.label}</Label>
                <div className="relative">
                    {input.type === 'currency' && (
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">$</span>
                    )}
                    <Input
                        id={inputId}
                        type="number"
                        placeholder={input.placeholder}
                        value={values[input.id] || ''}
                        onChange={(e) => handleInputChange(input.id, e.target.value ? Number(e.target.value) : '')}
                        min={input.min}
                        max={input.max}
                        step={input.step || 1}
                        className={`h-11 bg-background border-input focus:ring-ring transition-shadow tabular-nums rounded-lg text-base md:text-sm ${input.type === 'currency' ? 'pl-7' : ''} ${fieldErrors[input.id] ? 'border-red-500 focus:ring-red-500' : ''}`}
                        aria-invalid={!!fieldErrors[input.id]}
                        aria-describedby={fieldErrors[input.id] ? `${inputId}-error` : undefined}
                    />
                </div>
                {fieldErrors[input.id] ? (
                    <p id={`${inputId}-error`} className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {fieldErrors[input.id]}
                    </p>
                ) : input.helperText && (
                    <p className="text-[11px] text-muted-foreground">{input.helperText}</p>
                )}
            </div>
        );
    };

    return (
        <div className="w-full max-w-5xl mx-auto" id="calculator">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-start">
                {/* Inputs Section - Bento Card 1 */}
                <div className="lg:col-span-7">
                    <div className="bg-card border-y border-border md:border md:rounded-xl shadow-sm overflow-hidden">
                        <div className="p-6 md:p-8 space-y-8">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                                    <div className="h-8 w-1 bg-primary rounded-full hidden md:block" />
                                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                                        Configuration
                                    </h3>
                                </div>
                                <div className="grid gap-6">
                                    {inputs.map(renderInput)}
                                </div>
                            </div>

                            <div className="flex justify-end pt-4 border-t border-border/50">
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setResult(null);
                                        setCalculationError(null);
                                    }}
                                    className="h-10 px-4 rounded-lg border-border/60 hover:bg-muted/50 transition-colors text-sm font-medium"
                                >
                                    <RotateCcw className="h-4 w-4 mr-2" />
                                    Reset
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Section - Bento Card 2 */}
                <div className="lg:col-span-5">
                    {/* Mobile separator */}
                    <div className="lg:hidden border-t-4 border-primary/20 pt-6 -mt-2" />
                    <div className="lg:sticky lg:top-24">
                        <div className="bg-card border-y border-border md:border md:rounded-xl shadow-sm overflow-hidden">
                            <div className="p-6 md:p-8 space-y-6">
                                <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                                    <div className="h-8 w-1 bg-primary/50 rounded-full hidden md:block" />
                                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                                        Overview
                                    </h3>
                                </div>
                                {isCalculating ? (
                                    /* Skeleton Loading State */
                                    <div className="grid gap-3 animate-pulse">
                                        <div className="p-4 md:p-5 rounded-xl border border-primary/20 bg-primary/5">
                                            <div className="h-3 w-24 bg-muted rounded mb-2" />
                                            <div className="h-8 w-32 bg-muted rounded" />
                                        </div>
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="p-4 md:p-5 rounded-xl border border-border bg-card">
                                                <div className="h-3 w-20 bg-muted rounded mb-2" />
                                                <div className="h-7 w-28 bg-muted rounded" />
                                            </div>
                                        ))}
                                    </div>
                                ) : calculationError ? (
                                    <div className="p-5 rounded-xl bg-destructive/10 border border-destructive/20">
                                        <div className="flex items-start gap-3">
                                            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium text-destructive">Calculation Error</p>
                                                <p className="text-sm text-muted-foreground">{calculationError}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : result ? (
                                    <div className="grid gap-3">
                                        {outputs.map((output, idx) => {
                                            const value = result[output.id];
                                            if (value === undefined) return null;

                                            const isMainResult = idx === 0 || output.highlight;

                                            return (
                                                <div
                                                    key={output.id}
                                                    className={`p-4 md:p-5 rounded-xl border transition-all ${isMainResult
                                                        ? 'bg-primary text-primary-foreground border-primary'
                                                        : 'bg-card text-card-foreground border-border'
                                                        }`}
                                                >
                                                    <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${isMainResult ? 'text-primary-foreground/70' : 'text-muted-foreground'
                                                        }`}>
                                                        {output.label}
                                                    </p>
                                                    <p className={`text-3xl font-semibold tabular-nums tracking-tight ${isMainResult ? 'text-primary-foreground' : 'text-foreground'
                                                        }`}>
                                                        {formatValue(value, output.format)}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <div className="h-[300px] border border-dashed border-border rounded-xl flex items-center justify-center p-8 text-center bg-muted/30">
                                        <div className="space-y-3 max-w-[200px]">
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Enter your details on the left to generate a breakdown.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
