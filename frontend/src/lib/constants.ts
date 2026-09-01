export const APP_CONSTANTS = {
  name: 'Portafolio',
  version: '1.0.0',
  author: 'Tu Nombre',
  email: 'tu@email.com',
  location: 'Madrid, España',
  availability: 'Abierto a oportunidades',
  resumeUrl: '/documents/cv.pdf',
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

export const Z_INDEX = {
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modal: 400,
  popover: 500,
  tooltip: 600,
  toast: 700,
} as const;

export const SOCIAL_ICONS = {
  github: 'github-icon',
  linkedin: 'discord-icon',
  twitter: 'x-icon',
  email: 'social-icon',
  bluesky: 'bluesky-icon',
} as const;

export const SKILL_COLORS = {
  frontend: 'blue',
  backend: 'green',
  devops: 'purple',
  tools: 'orange',
  languages: 'pink',
  databases: 'indigo',
} as const;

export const PROJECT_STATUS_COLORS = {
  completed: 'green',
  'in-progress': 'blue',
  archived: 'gray',
  maintenance: 'yellow',
} as const;

export const PROJECT_CATEGORY_LABELS = {
  web: 'Aplicaciones Web',
  mobile: 'Aplicaciones Móviles',
  desktop: 'Aplicaciones de Escritorio',
  api: 'APIs & Backend',
  library: 'Librerías & SDKs',
  tool: 'Herramientas & CLI',
} as const;

export const EXPERIENCE_TYPE_LABELS = {
  'full-time': 'Tiempo completo',
  'part-time': 'Tiempo parcial',
  contract: 'Contrato',
  freelance: 'Freelance',
  internship: 'Prácticas',
} as const;

export const SECTION_IDS = {
  home: 'home',
  about: 'about',
  projects: 'projects',
  contact: 'contact',
} as const;

export const CONTACT_INFO = {
  email: 'tu@email.com',
  phone: '+34 000 000 000',
  location: 'Madrid, España',
  timezone: 'CET (UTC+1)',
  availability: 'Lunes a Viernes, 9:00 - 18:00',
} as const;
