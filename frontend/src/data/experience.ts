export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string[];
  technologies: string[];
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
}

export const experience: Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Company Inc.',
    role: 'Senior Software Engineer',
    location: 'Madrid, España (Remoto)',
    startDate: '2022-01',
    current: true,
    description: [
      'Liderazgo técnico de equipo de 5 desarrolladores en migración a arquitectura microfrontends.',
      'Implementación de CI/CD pipelines reduciendo tiempo de deploy de 45min a 8min.',
      'Diseño e implementación de Design System adoptado por 3 productos.',
      'Mentoring y code reviews para mantener estándares de calidad.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
    ],
    type: 'full-time',
  },
  {
    id: 'exp-2',
    company: 'StartupXYZ',
    role: 'Full Stack Developer',
    location: 'Barcelona, España',
    startDate: '2020-03',
    endDate: '2021-12',
    description: [
      'Desarrollo end-to-end de plataforma SaaS B2B desde MVP hasta 10k+ usuarios.',
      'Arquitectura de API REST y GraphQL con Node.js y NestJS.',
      'Implementación de autenticación OAuth2/OIDC y gestión de permisos RBAC.',
      'Optimización de queries reduciendo latencia P95 de 800ms a 120ms.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'GraphQL',
      'Redis',
      'Docker',
      'AWS',
    ],
    type: 'full-time',
  },
  {
    id: 'exp-3',
    company: 'Digital Agency',
    role: 'Frontend Developer',
    location: 'Valencia, España',
    startDate: '2018-06',
    endDate: '2020-02',
    description: [
      'Desarrollo de 15+ proyectos cliente con React, Vue y vanilla JS.',
      'Implementación de metodologías ágiles y testing automatizado.',
      'Mejora de Core Web Vitals en proyectos legacy (LCP < 2.5s).',
      'Colaboración directa con diseño UX/UI para feasibility técnica.',
    ],
    technologies: ['React', 'Vue.js', 'JavaScript', 'SCSS', 'Webpack', 'Jest', 'Cypress'],
    type: 'full-time',
  },
];

export const experienceTypes = {
  'full-time': 'Tiempo completo',
  'part-time': 'Tiempo parcial',
  contract: 'Contrato',
  freelance: 'Freelance',
  internship: 'Prácticas',
} as const;
