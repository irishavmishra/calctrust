import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '100000-salary-michigan',
  category: 'state-salary',
  title: '$100,000 Salary in Michigan',
  subheading: 'Calculate your take-home pay on a $100,000 salary in Michigan.',
  sections: {
    whatThisHelps: ['Understand take-home pay on $100K in MI', 'Calculate MI flat 4.25% tax'],
    whoUsefulFor: ['Michigan professionals', 'Detroit area workers'],
    howItWorks: ['$100K salary entered', 'MI flat 4.25% rate + city tax if applicable'],
    deepDive: ['$100,000 in Michigan with flat 4.25% state tax. Detroit adds city tax.'],
    examples: ['Annual: $100,000. Take-home: ~$6,200-6,500/month.'],
    expertTips: ['MI has low flat tax', 'Factor in Detroit city tax if applicable'],
    assumptions: ['2025 MI 4.25% flat rate'],
    faq: [{ question: 'What is $100K take-home in MI?', answer: '~$6,200-6,500/month.' }],
    relatedCalculators: [{ title: 'Paycheck Calculator Michigan', href: '/usa/paycheck-calculator-michigan' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
