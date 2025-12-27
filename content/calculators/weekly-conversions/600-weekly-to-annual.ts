import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '600-weekly-to-annual',
  category: 'weekly-conversions',
  title: '$600 Weekly is How Much a Year?',
  subheading: '$600 weekly equals $31,200 per year ($15/hour equivalent).',
  sections: {
    whatThisHelps: ['Convert $600 weekly to $31,200/year', 'Hourly: $15', 'Monthly: $2,600'],
    whoUsefulFor: ['Workers paid $600/week'],
    howItWorks: ['$600 × 52 = $31,200/year', 'Monthly: $2,600', 'Hourly: $15'],
    deepDive: ['$600 weekly equals $15/hour—the "Fight for $15" benchmark and minimum in many states.'],
    examples: ['Annual: $31,200. Monthly: $2,600.'],
    expertTips: ['At $15/hour equivalent, build emergency fund'],
    assumptions: ['52 weeks/year', '40 hours/week'],
    faq: [{ question: 'How much is $600 weekly per year?', answer: '$31,200/year.' }],
    relatedCalculators: [{ title: '$500 Weekly', href: '/usa/500-weekly-to-annual' }, { title: '$650 Weekly', href: '/usa/650-weekly-to-annual' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
