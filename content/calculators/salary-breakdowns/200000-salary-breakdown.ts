import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '200000-salary-breakdown',
  category: 'salary-breakdowns',
  title: '$200,000 Salary Breakdown',
  subheading: 'Understand what a $200,000 annual salary means—approximately $96.15/hour, nearly $100/hour.',
  metaTitle: '$200K Salary Breakdown | Hourly, Monthly 2025',
  metaDescription: 'Break down a $200K annual salary to hourly, weekly, and monthly amounts. Based on standard 40-hour work week calculations.',
  sections: {
    whatThisHelps: ['See $200K hourly rate ($96.15/hour)', 'Calculate monthly take-home'],
    whoUsefulFor: ['Workers earning $200K', 'Executive-level earners'],
    howItWorks: ['$200,000 ÷ 2,080 = $96.15/hour', 'Monthly gross: $16,667'],
    deepDive: ['$200,000 annually is executive-level income—top 3% of U.S. earners. Comprehensive wealth management recommended.'],
    examples: ['Hourly: $96.15/hour', 'Monthly: $16,667 gross'],
    expertTips: ['At ~$96/hour, comprehensive financial planning is essential', 'Consider backdoor Roth, mega backdoor, and tax-loss harvesting'],
    assumptions: ['Based on 2,080 hours/year'],
    faq: [{ question: 'How much is $200K per hour?', answer: '$96.15/hour' }],
    relatedCalculators: [{ title: '$175,000 Salary', href: '/usa/175000-salary-breakdown' }, { title: 'Salary to Hourly Calculator', href: '/usa/salary-to-hourly-calculator' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
