import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '60000-salary-breakdown',
  category: 'salary-breakdowns',
  title: '$60,000 Salary Breakdown',
  subheading: 'Understand what a $60,000 annual salary means—approximately $28.85/hour, exceeding $60K.',
  metaTitle: '$60K Salary Breakdown | Hourly, Monthly 2025',
  metaDescription: 'Break down a $60K annual salary to hourly, weekly, and monthly amounts. Based on standard 40-hour work week calculations.',
  sections: {
    whatThisHelps: ['See $60K hourly rate ($28.85/hour)', 'Calculate monthly take-home'],
    whoUsefulFor: ['Workers earning $60K', 'Milestone earners'],
    howItWorks: ['$60,000 ÷ 2,080 = $28.85/hour', 'Monthly gross: $5,000'],
    deepDive: ['$60,000 annually is a significant milestone exceeding median household income for single earners.'],
    examples: ['Hourly: $28.85/hour', 'Monthly: $5,000 gross'],
    expertTips: ['Consider increasing retirement contributions to 15%'],
    assumptions: ['Based on 2,080 hours/year'],
    faq: [{ question: 'How much is $60K per hour?', answer: '$28.85/hour' }],
    relatedCalculators: [{ title: '$55,000 Salary', href: '/usa/55000-salary-breakdown' }, { title: '$65,000 Salary', href: '/usa/65000-salary-breakdown' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
