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
  {
    id: 'proj-4',
    title: 'DevOps Automation Toolkit',
    description: `Colección de scripts, GitHub Actions workflows y Terraform modules para automatizar despliegues,
    infraestructura como código y observabilidad en entornos cloud-native.`,
    shortDescription: 'Toolkit de automatización DevOps para Kubernetes',
    image: '/projects/devops-toolkit.jpg',
    tags: ['DevOps', 'Automatización', 'Open Source'],
    category: 'tool',
    status: 'in-progress',
    featured: false,
    startDate: '2024-01',
    links: {
      repo: 'https://github.com/user/devops-toolkit',
    },
    technologies: [
      'TypeScript',
      'Go',
      'Terraform',
      'Kubernetes',
      'Helm',
      'GitHub Actions',
      'Prometheus',
      'Grafana',
    ],
    highlights: [
      'Reduce setup de cluster de 2h a 15min',
      'Compatible con AWS, GCP, Azure',
      'Políticas de seguridad integradas (OPA)',
    ],
  },
  {
    id: 'proj-5',
    title: 'Real-time Analytics Dashboard',
    description: `Dashboard de analíticas en tiempo real para métricas de negocio y técnicas.
    Procesa millones de eventos/día con latencia sub-segundo usando ClickHouse y WebSockets.`,
    shortDescription: 'Dashboard analítico en tiempo real',
    image: '/projects/analytics.jpg',
    tags: ['Analytics', 'Tiempo Real', 'Big Data'],
    category: 'web',
    status: 'completed',
    featured: false,
    startDate: '2021-09',
    endDate: '2022-05',
    links: {
      repo: 'https://github.com/user/analytics-dashboard',
    },
    technologies: [
      'React',
      'TypeScript',
      'D3.js',
      'ClickHouse',
      'Node.js',
      'Kafka',
      'WebSockets',
      'Docker',
    ],
    highlights: [
      '1M+ eventos/segundo procesados',
      'Latencia < 500ms end-to-end',
      'Multi-tenant con RBAC',
    ],
  },
  {
    id: 'proj-6',
    title: 'Mobile Expense Tracker',
    description: `App móvil multiplataforma para control de gastos personales con sincronización cloud,
    presupuestos por categorías, exportación CSV/PDF y recordatorios inteligentes.`,
    shortDescription: 'App móvil de finanzas personales',
    image: '/projects/expensetracker.jpg',
    tags: ['Mobile', 'Finanzas', 'Multiplataforma'],
    category: 'mobile',
    status: 'archived',
    featured: false,
    startDate: '2019-01',
    endDate: '2020-06',
    links: {
      repo: 'https://github.com/user/expense-tracker',
    },
    technologies: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'Redux', 'Jest'],
    highlights: [
      'Publicada en App Store y Play Store',
      '10k+ descargas orgánicas',
      '4.8★ rating promedio',
    ],
  },
];

export const projectCategories = {
  web: 'Aplicaciones Web',
  mobile: 'Aplicaciones Móviles',
  desktop: 'Aplicaciones de Escritorio',
  api: 'APIs & Backend',
  library: 'Librerías & SDKs',
  tool: 'Herramientas & CLI',
} as const;

export const projectStatuses = {
  completed: 'Completado',
  'in-progress': 'En desarrollo',
  archived: 'Archivado',
  maintenance: 'Mantenimiento',
} as const;
