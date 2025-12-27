import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '75000-salary-north-carolina',
  category: 'state-salary',
  title: '$75,000 Salary in North Carolina',
  subheading: 'Calculate your take-home pay on a $75,000 salary in North Carolina.',
  sections: {
    whatThisHelps: ['Understand take-home pay on $75K in NC', 'Calculate NC flat 4.75% tax'],
    whoUsefulFor: ['NC workers', 'Charlotte/Raleigh employees'],
    howItWorks: ['$75K salary entered', 'NC flat 4.75% rate applied'],
    deepDive: ['$75,000 in NC with flat 4.75% tax (phasing down). Charlotte and RDU are growing rapidly.'],
    examples: ['Annual: $75,000. Take-home: ~$4,700-4,900/month.'],
    expertTips: ['NC flat tax is decreasing annually', 'Cost of living is moderate'],
    assumptions: ['2025 NC 4.75% flat rate'],
    faq: [{ question: 'What is $75K take-home in NC?', answer: '~$4,700-4,900/month.' }],
    relatedCalculators: [{ title: '$100K North Carolina', href: '/usa/100000-salary-north-carolina' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
