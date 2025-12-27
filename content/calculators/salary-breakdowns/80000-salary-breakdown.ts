import type { BlogContent } from '@/lib/types/blog-content';

const content: BlogContent = {
  slug: '80000-salary-breakdown',
  category: 'salary-breakdowns',
  title: '$80,000 Salary Breakdown',
  subheading: 'Understand what an $80,000 annual salary means—approximately $38.46/hour, exceeding $80K.',
  sections: {
    whatThisHelps: ['See $80K hourly rate ($38.46/hour)', 'Calculate monthly take-home'],
    whoUsefulFor: ['Workers earning $80K'],
    howItWorks: ['$80,000 ÷ 2,080 = $38.46/hour', 'Monthly gross: $6,667'],
    deepDive: ['$80,000 annually is excellent income approaching $40/hour—strong upper-middle class.'],
    examples: ['Hourly: $38.46/hour', 'Monthly: $6,667 gross'],
    expertTips: ['At ~$38/hour, maximize all tax-advantaged accounts'],
    assumptions: ['Based on 2,080 hours/year'],
    faq: [{ question: 'How much is $80K per hour?', answer: '$38.46/hour' }],
    relatedCalculators: [{ title: '$75,000 Salary', href: '/usa/75000-salary-breakdown' }, { title: '$85,000 Salary', href: '/usa/85000-salary-breakdown' }],
    freshnessSignal: 'December 2025',
  },
};

export default content;
