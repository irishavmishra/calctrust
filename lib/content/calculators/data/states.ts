/**
 * US State Data for Calculator Generation
 * 
 * Contains tax information for all 50 states used by state-specific
 * paycheck calculators and state+salary combination pages.
 */

export interface StateData {
    code: string;
    name: string;
    slug: string;
    taxRate: string;
    taxType: 'none' | 'flat' | 'graduated';
    description: string;
}

export const stateData: StateData[] = [
    { code: 'AL', name: 'Alabama', slug: 'alabama', taxRate: '2-5%', taxType: 'graduated', description: 'Alabama has graduated income tax rates from 2% to 5%.' },
    { code: 'AK', name: 'Alaska', slug: 'alaska', taxRate: '0%', taxType: 'none', description: 'Alaska has no state income tax, maximizing your take-home pay.' },
    { code: 'AZ', name: 'Arizona', slug: 'arizona', taxRate: '2.5%', taxType: 'flat', description: 'Arizona has a flat income tax rate of 2.5%.' },
    { code: 'AR', name: 'Arkansas', slug: 'arkansas', taxRate: '2-4.7%', taxType: 'graduated', description: 'Arkansas has graduated income tax rates from 2% to 4.7%.' },
    { code: 'CA', name: 'California', slug: 'california', taxRate: '1-13.3%', taxType: 'graduated', description: 'California has the highest state income tax in the nation, with rates up to 13.3%.' },
    { code: 'CO', name: 'Colorado', slug: 'colorado', taxRate: '4.4%', taxType: 'flat', description: 'Colorado has a flat income tax rate of 4.4%.' },
    { code: 'CT', name: 'Connecticut', slug: 'connecticut', taxRate: '3-6.99%', taxType: 'graduated', description: 'Connecticut has graduated income tax rates from 3% to 6.99%.' },
    { code: 'DE', name: 'Delaware', slug: 'delaware', taxRate: '2.2-6.6%', taxType: 'graduated', description: 'Delaware has graduated income tax rates from 2.2% to 6.6%.' },
    { code: 'FL', name: 'Florida', slug: 'florida', taxRate: '0%', taxType: 'none', description: 'Florida has no state income tax, making it popular for workers seeking higher take-home pay.' },
    { code: 'GA', name: 'Georgia', slug: 'georgia', taxRate: '5.49%', taxType: 'flat', description: 'Georgia has a flat income tax rate of 5.49% (decreasing to 4.99% by 2029).' },
    { code: 'HI', name: 'Hawaii', slug: 'hawaii', taxRate: '1.4-11%', taxType: 'graduated', description: 'Hawaii has graduated income tax rates from 1.4% to 11%.' },
    { code: 'ID', name: 'Idaho', slug: 'idaho', taxRate: '5.8%', taxType: 'flat', description: 'Idaho has a flat income tax rate of 5.8%.' },
    { code: 'IL', name: 'Illinois', slug: 'illinois', taxRate: '4.95%', taxType: 'flat', description: 'Illinois has a flat income tax rate of 4.95%.' },
    { code: 'IN', name: 'Indiana', slug: 'indiana', taxRate: '3.05%', taxType: 'flat', description: 'Indiana has a flat income tax rate of 3.05%.' },
    { code: 'IA', name: 'Iowa', slug: 'iowa', taxRate: '4.4-6%', taxType: 'graduated', description: 'Iowa has graduated income tax rates from 4.4% to 6%.' },
    { code: 'KS', name: 'Kansas', slug: 'kansas', taxRate: '3.1-5.7%', taxType: 'graduated', description: 'Kansas has graduated income tax rates from 3.1% to 5.7%.' },
    { code: 'KY', name: 'Kentucky', slug: 'kentucky', taxRate: '4.5%', taxType: 'flat', description: 'Kentucky has a flat income tax rate of 4.5%.' },
    { code: 'LA', name: 'Louisiana', slug: 'louisiana', taxRate: '1.85-4.25%', taxType: 'graduated', description: 'Louisiana has graduated income tax rates from 1.85% to 4.25%.' },
    { code: 'ME', name: 'Maine', slug: 'maine', taxRate: '5.8-7.15%', taxType: 'graduated', description: 'Maine has graduated income tax rates from 5.8% to 7.15%.' },
    { code: 'MD', name: 'Maryland', slug: 'maryland', taxRate: '2-5.75%', taxType: 'graduated', description: 'Maryland has graduated income tax rates from 2% to 5.75%, plus local taxes.' },
    { code: 'MA', name: 'Massachusetts', slug: 'massachusetts', taxRate: '5%', taxType: 'flat', description: 'Massachusetts has a flat income tax rate of 5% (plus 4% surtax on income over $1M).' },
    { code: 'MI', name: 'Michigan', slug: 'michigan', taxRate: '4.25%', taxType: 'flat', description: 'Michigan has a flat income tax rate of 4.25%.' },
    { code: 'MN', name: 'Minnesota', slug: 'minnesota', taxRate: '5.35-9.85%', taxType: 'graduated', description: 'Minnesota has graduated income tax rates from 5.35% to 9.85%.' },
    { code: 'MS', name: 'Mississippi', slug: 'mississippi', taxRate: '4.7%', taxType: 'flat', description: 'Mississippi has a flat income tax rate of 4.7%.' },
    { code: 'MO', name: 'Missouri', slug: 'missouri', taxRate: '2-4.95%', taxType: 'graduated', description: 'Missouri has graduated income tax rates from 2% to 4.95%.' },
    { code: 'MT', name: 'Montana', slug: 'montana', taxRate: '4.7-6.75%', taxType: 'graduated', description: 'Montana has graduated income tax rates from 4.7% to 6.75%.' },
    { code: 'NE', name: 'Nebraska', slug: 'nebraska', taxRate: '2.46-5.84%', taxType: 'graduated', description: 'Nebraska has graduated income tax rates from 2.46% to 5.84%.' },
    { code: 'NV', name: 'Nevada', slug: 'nevada', taxRate: '0%', taxType: 'none', description: 'Nevada has no state income tax, popular with California transplants.' },
    { code: 'NH', name: 'New Hampshire', slug: 'new-hampshire', taxRate: '0%', taxType: 'none', description: 'New Hampshire has no tax on earned income (only interest/dividends, phasing out).' },
    { code: 'NJ', name: 'New Jersey', slug: 'new-jersey', taxRate: '1.4-10.75%', taxType: 'graduated', description: 'New Jersey has graduated income tax rates from 1.4% to 10.75%.' },
    { code: 'NM', name: 'New Mexico', slug: 'new-mexico', taxRate: '1.7-5.9%', taxType: 'graduated', description: 'New Mexico has graduated income tax rates from 1.7% to 5.9%.' },
    { code: 'NY', name: 'New York', slug: 'new-york', taxRate: '4-10.9%', taxType: 'graduated', description: 'New York has graduated income tax rates from 4% to 10.9%, plus NYC taxes for city residents.' },
    { code: 'NC', name: 'North Carolina', slug: 'north-carolina', taxRate: '4.75%', taxType: 'flat', description: 'North Carolina has a flat income tax rate of 4.75%.' },
    { code: 'ND', name: 'North Dakota', slug: 'north-dakota', taxRate: '1.95-2.5%', taxType: 'graduated', description: 'North Dakota has low graduated income tax rates from 1.95% to 2.5%.' },
    { code: 'OH', name: 'Ohio', slug: 'ohio', taxRate: '0-3.75%', taxType: 'graduated', description: 'Ohio has graduated income tax rates from 0% to 3.75%, plus local city taxes.' },
    { code: 'OK', name: 'Oklahoma', slug: 'oklahoma', taxRate: '0.25-4.75%', taxType: 'graduated', description: 'Oklahoma has graduated income tax rates from 0.25% to 4.75%.' },
    { code: 'OR', name: 'Oregon', slug: 'oregon', taxRate: '4.75-9.9%', taxType: 'graduated', description: 'Oregon has graduated income tax rates from 4.75% to 9.9%.' },
    { code: 'PA', name: 'Pennsylvania', slug: 'pennsylvania', taxRate: '3.07%', taxType: 'flat', description: 'Pennsylvania has a flat income tax rate of 3.07%, plus local taxes.' },
    { code: 'RI', name: 'Rhode Island', slug: 'rhode-island', taxRate: '3.75-5.99%', taxType: 'graduated', description: 'Rhode Island has graduated income tax rates from 3.75% to 5.99%.' },
    { code: 'SC', name: 'South Carolina', slug: 'south-carolina', taxRate: '0-6.4%', taxType: 'graduated', description: 'South Carolina has graduated income tax rates from 0% to 6.4%.' },
    { code: 'SD', name: 'South Dakota', slug: 'south-dakota', taxRate: '0%', taxType: 'none', description: 'South Dakota has no state income tax.' },
    { code: 'TN', name: 'Tennessee', slug: 'tennessee', taxRate: '0%', taxType: 'none', description: 'Tennessee has no tax on earned income.' },
    { code: 'TX', name: 'Texas', slug: 'texas', taxRate: '0%', taxType: 'none', description: 'Texas has no state income tax, making it attractive for high earners.' },
    { code: 'UT', name: 'Utah', slug: 'utah', taxRate: '4.65%', taxType: 'flat', description: 'Utah has a flat income tax rate of 4.65%.' },
    { code: 'VT', name: 'Vermont', slug: 'vermont', taxRate: '3.35-8.75%', taxType: 'graduated', description: 'Vermont has graduated income tax rates from 3.35% to 8.75%.' },
    { code: 'VA', name: 'Virginia', slug: 'virginia', taxRate: '2-5.75%', taxType: 'graduated', description: 'Virginia has graduated income tax rates from 2% to 5.75%.' },
    { code: 'WA', name: 'Washington', slug: 'washington', taxRate: '0%', taxType: 'none', description: 'Washington has no state income tax on wages.' },
    { code: 'WV', name: 'West Virginia', slug: 'west-virginia', taxRate: '2.36-5.12%', taxType: 'graduated', description: 'West Virginia has graduated income tax rates from 2.36% to 5.12%.' },
    { code: 'WI', name: 'Wisconsin', slug: 'wisconsin', taxRate: '3.54-7.65%', taxType: 'graduated', description: 'Wisconsin has graduated income tax rates from 3.54% to 7.65%.' },
    { code: 'WY', name: 'Wyoming', slug: 'wyoming', taxRate: '0%', taxType: 'none', description: 'Wyoming has no state income tax.' },
];
