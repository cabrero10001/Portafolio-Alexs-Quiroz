export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image?: string;
  images?: string[];
  tags: string[];
  category: 'web' | 'mobile' | 'desktop' | 'api' | 'library' | 'tool';
  status: 'completed' | 'in-progress' | 'archived' | 'maintenance';
  featured: boolean;
  startDate: string;
  endDate?: string;
  links: {
    demo?: string;
    repo?: string;
    docs?: string;
    article?: string;
  };
  technologies: string[];
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'E-Commerce Platform',
    description: `Plataforma de comercio electrónico completa con gestión de inventario, pagos, pedidos y panel de administración.
    Incluye sistema de recomendaciones, carrito persistente, checkout con Stripe, y dashboard analítico en tiempo real.`,
    shortDescription: 'E-commerce full-stack con React, Node.js y PostgreSQL',
    image: '/projects/ecommerce.jpg',
    images: ['/projects/ecommerce-1.jpg', '/projects/ecommerce-2.jpg'],
    tags: ['Full Stack', 'E-commerce', 'SaaS'],
    category: 'web',
    status: 'completed',
    featured: true,
    startDate: '2023-01',
    endDate: '2023-08',
    links: {
      demo: 'https://demo-ecommerce.example.com',
      repo: 'https://github.com/user/ecommerce',
      docs: 'https://docs.ecommerce.example.com',
    },
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Stripe',
      'Docker',
      'AWS',
    ],
    highlights: [
      'Procesamiento de 10k+ pedidos/mes',
      '99.9% uptime en producción',
      'Core Web Vitals en verde',
    ],
  },
  {
    id: 'proj-2',
    title: 'Task Management App',
    description: `Aplicación de gestión de tareas colaborativa con tableros Kanban, listas, calendar view y notificaciones en tiempo real.
    Soporta workspaces, equipos, permisos granulares y integraciones con Slack, GitHub y Google Calendar.`,
    shortDescription: 'Herramienta de productividad tipo Trello/Jira',
    image: '/projects/taskmanager.jpg',
    tags: ['Productividad', 'Tiempo Real', 'Colaborativo'],
    category: 'web',
    status: 'completed',
    featured: true,
    startDate: '2022-06',
    endDate: '2022-12',
    links: {
      demo: 'https://demo-tasks.example.com',
      repo: 'https://github.com/user/taskmanager',
    },
    technologies: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Socket.io',
      'Node.js',
      'Express',
      'MongoDB',
      'Redis',
    ],
    highlights: [
      'WebSockets para updates en tiempo real',
      'Offline-first con Service Workers',
      'Testing E2E con Playwright (95% coverage)',
    ],
  },
  {
    id: 'proj-3',
    title: 'Design System Library',
    description: `Librería de componentes UI accesibles, tematizables y documentados con Storybook.
    Incluye 50+ componentes, tokens de diseño, hooks personalizados y utilidades de testing.`,
    shortDescription: 'Design System open source con 50+ componentes',
    image: '/projects/designsystem.jpg',
    tags: ['Open Source', 'UI Library', 'Design System'],
    category: 'library',
    status: 'maintenance',
    featured: true,
    startDate: '2023-03',
    links: {
      repo: 'https://github.com/user/design-system',
      docs: 'https://design-system.example.com',
      article: 'https://blog.example.com/design-system',
    },
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Storybook',
      'Vitest',
      'Testing Library',
      'Rollup',
    ],
    highlights: [
      '15k+ descargas/semana en npm',
      '100% cobertura de tests unitarios',
      'Accesibilidad WCAG 2.1 AA',
    ],
  },
];
