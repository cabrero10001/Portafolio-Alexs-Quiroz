export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  language: string;
  themeColor: string;
  ogImage: string;
  twitterHandle?: string;
}

export const siteMetadata: SiteMetadata = {
  title: 'Portafolio | Ingeniero de Software',
  description:
    'Portafolio profesional de un ingeniero de software especializado en React, TypeScript, Node.js y arquitectura cloud-native.',
  author: 'Tu Nombre',
  siteUrl: 'https://tudominio.com',
  language: 'es',
  themeColor: '#863bff',
  ogImage: '/profile/og-image.jpg',
  twitterHandle: '@tuusuario',
};

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

export const pageMetadata = {
  home: {
    title: 'Inicio',
    description:
      'Ingeniero de Software especializado en React, TypeScript y arquitectura cloud-native.',
  },
  about: {
    title: 'Sobre mí',
    description: 'Conoce mi experiencia, habilidades y formación como ingeniero de software.',
  },
  projects: {
    title: 'Proyectos',
    description: 'Proyectos destacados y trabajos recientes en desarrollo de software.',
  },
  contact: {
    title: 'Contacto',
    description: 'Ponte en contacto conmigo para colaboraciones, oportunidades o consultas.',
  },
} as const;
