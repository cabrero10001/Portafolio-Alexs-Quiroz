export interface SkillItem {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate';
}

export interface SkillCategory {
  key: string;
  title: string;
  icon: 'frontend' | 'backend' | 'devops' | 'tools';
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: 'frontend',
    title: 'Frontend',
    icon: 'frontend',
    description:
      'Arquitectura de componentes, SSR/CSR y design systems escalables orientados a rendimiento y accesibilidad.',
    skills: [
      { name: 'React', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'Next.js', level: 'advanced' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'HTML5/CSS3', level: 'expert' },
      { name: 'JavaScript (ES6+)', level: 'expert' },
      { name: 'Vite', level: 'advanced' },
      { name: 'Zustand/Redux', level: 'advanced' },
    ],
  },
  {
    key: 'backend',
    title: 'Backend',
    icon: 'backend',
    description:
      'APIs robustas, modelado de datos y servicios de alto rendimiento con foco en escalabilidad y seguridad.',
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Express', level: 'advanced' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'Python', level: 'intermediate' },
      { name: 'PostgreSQL / MongoDB', level: 'advanced' },
    ],
  },
  {
    key: 'devops',
    title: 'DevOps & Cloud',
    icon: 'devops',
    description:
      'Infraestructura como código, despliegues continuos y observabilidad para entornos cloud-native.',
    skills: [
      { name: 'Docker', level: 'advanced' },
      { name: 'CI/CD (GitHub Actions)', level: 'advanced' },
      { name: 'AWS (S3, EC2, Lambda)', level: 'intermediate' },
      { name: 'Vercel / Netlify', level: 'advanced' },
    ],
  },
  {
    key: 'tools',
    title: 'Tools & Testing',
    icon: 'tools',
    description:
      'Calidad asegurada con testing automatizado, flujo de diseño y tooling de productividad.',
    skills: [
      { name: 'Git & GitHub', level: 'expert' },
      { name: 'Jest / Vitest', level: 'advanced' },
      { name: 'Postman / Bruno', level: 'intermediate' },
      { name: 'Figma (Design Tokens)', level: 'intermediate' },
    ],
  },
];

export const skillLevels = [
  { key: 'expert', label: 'Experto', color: 'indigo' },
  { key: 'advanced', label: 'Avanzado', color: 'blue' },
  { key: 'intermediate', label: 'Intermedio', color: 'gray' },
] as const;
