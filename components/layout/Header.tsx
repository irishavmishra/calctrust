'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/logo';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/mode-toggle';
import { SearchTrigger } from '@/components/search';

const countries = [
    { code: 'usa', name: 'USA', flag: '🇺🇸', href: '/usa', active: true },
    { code: 'uk', name: 'UK', flag: '🇬🇧', href: '#', active: false },
    { code: 'ca', name: 'Canada', flag: '🇨🇦', href: '#', active: false },
];

const salaryCalculators = [
    { href: '/usa/salary-to-hourly-calculator', label: 'Salary to Hourly', description: 'Convert annual salary to hourly wages' },
    { href: '/usa/hourly-to-salary-calculator', label: 'Hourly to Salary', description: 'Calculate annual income from hourly rate' },
    { href: '/usa/50000-salary-breakdown', label: '$50k Salary Breakdown', description: 'Detailed analysis of $50,000/year' },
    { href: '/usa/100000-salary-breakdown', label: '$100k Salary Breakdown', description: 'Tax breakdown for six-figure income' },
    { href: '/usa/15-dollars-an-hour', label: '$15/Hour Annual', description: 'Annual earnings at minimum wage' },
    { href: '/usa/20-dollars-an-hour', label: '$20/Hour Annual', description: 'Yearly income for $20 hourly' },
];

const paycheckCalculators = [
    { href: '/usa/take-home-pay-calculator', label: 'Take Home Pay', description: 'Net pay calculator' },
    { href: '/usa/biweekly-paycheck-calculator', label: 'Biweekly Paycheck', description: 'For every two weeks pay' },
    { href: '/usa/paycheck-calculator-california', label: 'California', description: 'CA state tax calculator' },
    { href: '/usa/paycheck-calculator-texas', label: 'Texas', description: 'No state income tax' },
    { href: '/usa/paycheck-calculator-florida', label: 'Florida', description: 'Sunshine state taxes' },
    { href: '/usa/paycheck-calculator-new-york', label: 'New York', description: 'NY & NYC tax calculator' },
];

const taxCalculators = [
    { href: '/usa/bonus-tax-calculator', label: 'Bonus Tax', description: 'Flat 22% rate vs aggregate' },
    { href: '/usa/self-employment-tax-calculator', label: 'Self-Employment', description: '15.3% SE tax estimation' },
    { href: '/usa/401k-calculator', label: '401(k) Calculator', description: 'Retirement savings growth' },
    { href: '/usa/overtime-pay-calculator', label: 'Overtime Pay', description: 'Time and a half & double time' },
    { href: '/usa/time-and-a-half-calculator', label: 'Time and a Half', description: 'Overtime rate calculator' },
    { href: '/usa/pay-raise-calculator', label: 'Pay Raise', description: 'Calculate your new salary' },
];

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
            <div className="container max-w-5xl mx-auto h-16 flex items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
                        <Logo className="h-6 w-6" />
                        <span className="font-medium text-lg tracking-tight text-foreground">
                            CalcTrust
                        </span>
                    </Link>

                    {/* Country Selector */}
                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-7 px-2 gap-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted">
                                <span>🇺🇸</span>
                                <span className="hidden sm:inline">USA</span>
                                <ChevronDown className="h-3 w-3" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-40">
                            {countries.map((country) => (
                                <DropdownMenuItem
                                    key={country.code}
                                    asChild
                                    disabled={!country.active}
                                    className="focus:bg-muted focus:text-foreground"
                                >
                                    <Link href={country.href} className={cn("flex items-center gap-2", !country.active && "cursor-not-allowed text-muted-foreground")}>
                                        <span>{country.flag}</span>
                                        <span>{country.name}</span>
                                        {!country.active && <span className="ml-auto text-[10px] text-muted-foreground">Soon</span>}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Salary</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {salaryCalculators.map((item) => (
                                            <ListItem
                                                key={item.href}
                                                title={item.label}
                                                href={item.href}
                                            >
                                                {item.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Paycheck</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {paycheckCalculators.map((item) => (
                                            <ListItem
                                                key={item.href}
                                                title={item.label}
                                                href={item.href}
                                            >
                                                {item.description}
                                            </ListItem>
                                        ))}
                                        <div className="col-span-2 mt-2 pt-2 border-t">
                                            <NavigationMenuLink asChild>
                                                <Link href="/usa/calculators" className={cn(navigationMenuTriggerStyle(), "w-full justify-center text-primary")}>
                                                    View All 50 States &rarr;
                                                </Link>
                                            </NavigationMenuLink>
                                        </div>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Tax & Tools</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {taxCalculators.map((item) => (
                                            <ListItem
                                                key={item.href}
                                                title={item.label}
                                                href={item.href}
                                            >
                                                {item.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/usa/calculators" className={navigationMenuTriggerStyle()}>
                                        All Calculators
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex items-center gap-2">
                    <SearchTrigger />
                    <ModeToggle />

                    {/* Mobile Navigation */}
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-foreground">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[350px] pr-0 border-l border-border/40 shadow-2xl">
                            <SheetHeader className="px-6 text-left border-b pb-4">
                                <SheetTitle className="flex items-center gap-2 text-xl font-bold tracking-tight text-primary">
                                    <Logo className="h-6 w-6" />
                                    CalcTrust
                                </SheetTitle>
                            </SheetHeader>
                            <div className="h-full overflow-y-auto py-6 pl-6 pr-6">
                                <div className="flex flex-col gap-8 pb-20">
                                    {/* Salary Section */}
                                    <div className="space-y-4">
                                        <h3 className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                            Salary
                                        </h3>
                                        <div className="flex flex-col space-y-1">
                                            {salaryCalculators.map((item) => (
                                                <SheetClose key={item.href} asChild>
                                                    <Link
                                                        href={item.href}
                                                        className="flex items-center justify-between py-3 px-3 text-base font-medium text-foreground/80 transition-all hover:text-primary hover:bg-primary/10 rounded-lg -mx-3"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Paycheck Section */}
                                    <div className="space-y-4">
                                        <h3 className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                            Paycheck
                                        </h3>
                                        <div className="flex flex-col space-y-1">
                                            {paycheckCalculators.map((item) => (
                                                <SheetClose key={item.href} asChild>
                                                    <Link
                                                        href={item.href}
                                                        className="flex items-center justify-between py-3 px-3 text-base font-medium text-foreground/80 transition-all hover:text-primary hover:bg-primary/10 rounded-lg -mx-3"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                            <SheetClose asChild>
                                                <Link href="/usa/calculators" className="flex items-center mt-2 py-2 px-3 text-sm font-semibold text-primary hover:bg-primary/5 rounded-lg -mx-3 transition-colors">
                                                    View All States →
                                                </Link>
                                            </SheetClose>
                                        </div>
                                    </div>

                                    {/* Tax & Tools Section */}
                                    <div className="space-y-4">
                                        <h3 className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                            Tax & Tools
                                        </h3>
                                        <div className="flex flex-col space-y-1">
                                            {taxCalculators.map((item) => (
                                                <SheetClose key={item.href} asChild>
                                                    <Link
                                                        href={item.href}
                                                        className="flex items-center justify-between py-3 px-3 text-base font-medium text-foreground/80 transition-all hover:text-primary hover:bg-primary/10 rounded-lg -mx-3"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer Links */}
                                    <div className="mt-auto pt-6 border-t">
                                        <SheetClose asChild>
                                            <Link
                                                href="/usa/calculators"
                                                className="flex items-center justify-center w-full bg-primary text-primary-foreground font-semibold h-12 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]"
                                            >
                                                Browse All Calculators
                                            </Link>
                                        </SheetClose>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={href || '/'}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
