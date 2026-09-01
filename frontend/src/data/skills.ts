export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'languages' | 'databases';
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 'expert' },
  { name: 'TypeScript', category: 'frontend', level: 'expert' },
  { name: 'Next.js', category: 'frontend', level: 'advanced' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'advanced' },
  { name: 'HTML5', category: 'frontend', level: 'expert' },
  { name: 'CSS3', category: 'frontend', level: 'expert' },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 'expert' },
  { name: 'Vue.js', category: 'frontend', level: 'intermediate' },
  { name: 'Vite', category: 'frontend', level: 'advanced' },
  { name: 'Redux / Zustand', category: 'frontend', level: 'advanced' },

  // Backend
  { name: 'Node.js', category: 'backend', level: 'advanced' },
  { name: 'Express', category: 'backend', level: 'advanced' },
  { name: 'NestJS', category: 'backend', level: 'intermediate' },
  { name: 'REST APIs', category: 'backend', level: 'expert' },
  { name: 'GraphQL', category: 'backend', level: 'intermediate' },
  { name: 'Python', category: 'backend', level: 'intermediate' },

  // DevOps
  { name: 'Docker', category: 'devops', level: 'advanced' },
  { name: 'Kubernetes', category: 'devops', level: 'intermediate' },
  { name: 'CI/CD (GitHub Actions, GitLab CI)', category: 'devops', level: 'advanced' },
  { name: 'AWS', category: 'devops', level: 'intermediate' },
  { name: 'Vercel / Netlify', category: 'devops', level: 'advanced' },

  // Tools
  { name: 'Git', category: 'tools', level: 'expert' },
  { name: 'ESLint / Prettier', category: 'tools', level: 'advanced' },
  { name: 'Jest / Vitest', category: 'tools', level: 'advanced' },
  { name: 'Playwright / Cypress', category: 'tools', level: 'intermediate' },
  { name: 'Storybook', category: 'tools', level: 'intermediate' },

  // Languages
  { name: 'TypeScript', category: 'languages', level: 'expert' },
  { name: 'JavaScript', category: 'languages', level: 'expert' },
  { name: 'Python', category: 'languages', level: 'intermediate' },
  { name: 'Go', category: 'languages', level: 'beginner' },

  // Databases
  { name: 'PostgreSQL', category: 'databases', level: 'advanced' },
  { name: 'MongoDB', category: 'databases', level: 'intermediate' },
  { name: 'Redis', category: 'databases', level: 'intermediate' },
  { name: 'Prisma / TypeORM', category: 'databases', level: 'advanced' },
];

export const skillCategories = [
  { key: 'frontend', label: 'Frontend', color: 'blue' },
  { key: 'backend', label: 'Backend', color: 'green' },
  { key: 'devops', label: 'DevOps', color: 'purple' },
  { key: 'tools', label: 'Herramientas', color: 'orange' },
  { key: 'languages', label: 'Lenguajes', color: 'pink' },
  { key: 'databases', label: 'Bases de Datos', color: 'indigo' },
] as const;
