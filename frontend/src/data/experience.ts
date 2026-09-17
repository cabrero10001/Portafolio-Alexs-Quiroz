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
    company: 'Universitaria de Colombia',
    role: 'Desarrollador Full Stack Jr. (Practicante Universitario)',
    location: 'Bogotá, Colombia',
    startDate: '2025-01',
    endDate: '2026-02',
    description: [
      'Desarrollé el backend de una plataforma web de asignación de turnos médicos y optimicé los procesos internos de agendamiento.',
      'Diseñé y construí chatbots de asistencia pública (WhatsApp/Telegram) para el consultorio jurídico y asistentes con IA para atención psicológica.',
      'Diseñé e integré APIs RESTful seguras, modelando bases de datos relacionales en MySQL con despliegues en AWS y Railway.',
      'Participé bajo metodología Scrum con control de versiones en Git Flow y documentación técnica detallada.',
    ],
    technologies: [
      'Python',
      'Node.js',
      'Express.js',
      'Flask',
      'React',
      'MySQL',
      'REST APIs',
      'AWS',
      'Railway',
      'Git Flow',
    ],
    type: 'full-time',
  },
  {
    id: 'exp-2',
    company: 'Foundever',
    role: 'Analista IT (Practicante Universitario)',
    location: 'Bogotá, Colombia',
    startDate: '2023-01',
    endDate: '2023-07',
    description: [
      'Mantenimiento preventivo, correctivo y configuración de infraestructura de equipos de cómputo y aplicaciones corporativas.',
      'Diagnóstico y resolución de incidencias técnicas en sistemas, garantizando continuidad operativa y reportes de seguridad de la información.',
    ],
    technologies: [
      'Sistemas & TI',
      'Soporte Técnico',
      'Hardware',
      'Seguridad de la Información',
      'Mantenimiento',
    ],
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
