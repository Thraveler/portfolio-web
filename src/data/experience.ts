export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'present';
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Company Name',
    role: 'Software Engineer',
    startDate: '2023-01',
    endDate: 'present',
    highlights: [
      'Built and maintained full-stack web applications serving thousands of users.',
      'Led the migration of legacy services to a modern TypeScript-based stack.',
      'Collaborated closely with product and design to ship user-facing features.',
    ],
  },
  {
    company: 'Previous Company',
    role: 'Frontend Developer',
    startDate: '2021-06',
    endDate: '2022-12',
    highlights: [
      'Developed responsive UI components used across multiple product lines.',
      'Improved core web vitals scores by 40% through performance optimization.',
      'Mentored junior developers and conducted code reviews.',
    ],
  },
];
