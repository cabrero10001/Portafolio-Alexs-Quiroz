export interface Education {
  id: string;
  title: string;
  institution: string;
  location: string;
  startYear: string;
  endYear?: string;
  status: 'En curso' | 'Titulado';
  icon: 'education' | 'code';
  points: string[];
}

export const education: Education[] = [
  {
    id: 'edu-1',
    title: 'Ingeniería de Software',
    institution: 'Universitaria de Colombia',
    location: 'Bogotá, Colombia',
    startYear: '2024',
    status: 'En curso',
    icon: 'education',
    points: [
      'Focus en arquitectura de software, desarrollo de sistemas y metodologías ágiles.',
      'Desarrollo de proyectos de impacto institucional (sistemas de turnos y chatbots con IA).',
    ],
  },
  {
    id: 'edu-2',
    title: 'Técnico en Programación de Software',
    institution: 'Centro Educativo SENA',
    location: 'Bogotá, Colombia',
    startYear: '2022',
    endYear: '2023',
    status: 'Titulado',
    icon: 'code',
    points: [
      'Fundamentos de programación, lógica de desarrollo, bases de datos y construcción de software.',
    ],
  },
];

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
}

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'Manejo de herramientas Microsoft Office: Excel',
    issuer: 'SENA / Formación Adicional',
    date: '2016',
    credentialId: 'EXCEL-2016',
  },
  {
    id: 'cert-2',
    name: 'Manejo de herramientas Microsoft Office: PowerPoint',
    issuer: 'SENA / Formación Adicional',
    date: '2010',
    credentialId: 'PPT-2010',
  },
  {
    id: 'cert-3',
    name: 'Inglés B2 - Medio Avanzado',
    issuer: 'Español (Nativo) | Inglés (B2)',
    date: 'Competencia Profesional',
    credentialId: 'LANG-B2',
  },
];
