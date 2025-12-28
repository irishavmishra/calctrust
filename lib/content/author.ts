/**
 * Author Entity Data
 * Provides author information for YMYL trust signals and structured data
 */

export interface Author {
    name: string;
    credentials: string;
    bio: string;
    url: string;
}

/**
 * Primary author for CalcTrust content
 * Referenced in WebPageSchema and author bylines
 */
export const AUTHOR: Author = {
    name: 'Ravi, CPA',
    credentials: 'Certified Public Accountant',
    bio: 'Ravi is a licensed CPA with expertise in tax planning and payroll calculations. He oversees all calculator methodology and ensures data accuracy at CalcTrust, verifying tax brackets against official IRS and state revenue publications.',
    url: 'https://calctrust.com/about#editorial',
};

export default AUTHOR;
