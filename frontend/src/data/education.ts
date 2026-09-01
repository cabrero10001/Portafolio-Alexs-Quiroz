export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string[];
  grade?: string;
}

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'Universidad Politécnica de Madrid',
    degree: 'Máster Universitario',
    field: 'Ingeniería de Software',
    location: 'Madrid, España',
    startDate: '2017-09',
    endDate: '2019-06',
    description: [
      'Especialización en arquitectura de software y sistemas distribuidos.',
      'Tesis: "Optimización de rendimiento en aplicaciones React a gran escala".',
      'Proyecto final: Sistema de microfrontends con Module Federation.',
    ],
    grade: 'Sobresaliente',
  },
  {
    id: 'edu-2',
    institution: 'Universidad de Valencia',
    degree: 'Grado',
    field: 'Ingeniería Informática',
    location: 'Valencia, España',
    startDate: '2013-09',
    endDate: '2017-06',
    description: [
      'Especialidad en Ingeniería del Software.',
      'Proyecto final: Plataforma de e-learning con Node.js y AngularJS.',
      'Erasmus: Technical University of Munich (2015-2016).',
    ],
    grade: 'Notable',
  },
];

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialId?: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: '2023-03',
    expiryDate: '2026-03',
    credentialId: 'AWS-SAA-123456',
    url: 'https://aws.amazon.com/certification/',
  },
  {
    id: 'cert-2',
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: '2022-11',
    expiryDate: '2025-11',
    credentialId: 'CKA-789012',
    url: 'https://www.cncf.io/certification/cka/',
  },
  {
    id: 'cert-3',
    name: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    date: '2021-06',
    credentialId: 'PSM-345678',
    url: 'https://www.scrum.org/professional-scrum-master-certification',
  },
];
