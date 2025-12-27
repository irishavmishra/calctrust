import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '50000-salary-north-carolina',
  category: 'state-salary',
  title: '$50,000 Salary in North Carolina',
  subheading: 'Calculate your take-home pay on a $50,000 salary in North Carolina.',
  sections: {
    whatThisHelps: ['Understand take-home pay on $50K in NC', 'Calculate NC flat 4.75% tax'],
    whoUsefulFor: ['NC workers', 'Charlotte/Raleigh employees'],
    howItWorks: ['$50K salary entered', 'NC flat 4.75% rate applied'],
    deepDive: ['$50,000 in NC with flat 4.75% tax (phasing down). Charlotte and RDU are growing tech hubs.'],
    examples: ['Annual: $50,000. Take-home: ~$3,250-3,400/month.'],
    expertTips: ['NC flat tax is decreasing annually', 'Cost of living is moderate'],
    assumptions: ['2025 NC 4.75% flat rate'],
    faq: [{ question: 'What is $50K take-home in NC?', answer: '~$3,250-3,400/month.' }],
    relatedCalculators: [{ title: '$75K North Carolina', href: '/usa/75000-salary-north-carolina' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
