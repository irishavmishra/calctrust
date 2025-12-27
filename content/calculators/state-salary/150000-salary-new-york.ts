import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '150000-salary-new-york',
  category: 'state-salary',
  title: '$150,000 Salary in New York',
  subheading: 'Calculate your take-home pay on a $150,000 salary in New York.',
  sections: {
    whatThisHelps: ['Understand take-home pay on $150K in NY', 'Calculate NY high-income taxes'],
    whoUsefulFor: ['NY finance/tech professionals', 'NYC senior workers'],
    howItWorks: ['$150K salary entered', 'NY state + NYC local if applicable'],
    deepDive: ['$150,000 in NYC—high earner but significant tax burden. NYC adds 3.078-3.876% on top of state 6.85%.'],
    examples: ['Annual: $150,000. Take-home: ~$8,400-9,200/month (varies by location).'],
    expertTips: ['NYC local tax is significant—NJ/CT can save $5,000+', 'Consider suburban residence'],
    assumptions: ['2025 NY state rates'],
    faq: [{ question: 'What is $150K take-home in NY?', answer: '~$8,400-9,200/month.' }],
    relatedCalculators: [{ title: 'Paycheck Calculator New York', href: '/usa/paycheck-calculator-new-york' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
