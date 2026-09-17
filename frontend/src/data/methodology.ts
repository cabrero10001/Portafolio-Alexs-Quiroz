export interface SoftSkill {
  key: string;
  title: string;
  description: string;
  tag: string;
  icon: 'communication' | 'leadership' | 'adaptability' | 'critical' | 'value';
}

export const softSkills: SoftSkill[] = [
  {
    key: 'communication',
    title: 'Comunicación Asertiva',
    description: 'Claridad técnica para alinear equipos multidisciplinares y stakeholders no técnicos.',
    tag: 'Colaboración',
    icon: 'communication',
  },
  {
    key: 'leadership',
    title: 'Liderazgo & Mentoría',
    description: 'Guío equipos, facilito decisiones técnicas y acompaño el crecimiento de devs junior.',
    tag: 'Mentoría',
    icon: 'leadership',
  },
  {
    key: 'adaptability',
    title: 'Adaptabilidad Ágil',
    description: 'Respuesta rápida ante cambios de contexto y prioridades en entornos dinámicos.',
    tag: 'Scrum / Kanban',
    icon: 'adaptability',
  },
  {
    key: 'critical',
    title: 'Pensamiento Crítico',
    description: 'Análisis de trade-offs y decisiones basadas en datos, no en supuestos.',
    tag: 'Análisis',
    icon: 'critical',
  },
  {
    key: 'value',
    title: 'Orientación a Valor',
    description: 'Enfoco el trabajo en impacto real de negocio y resultados medibles.',
    tag: 'Impacto',
    icon: 'value',
  },
];

export interface FrameworkStep {
  step: number;
  title: string;
  phase: string;
  description: string;
}

export const frameworkSteps: FrameworkStep[] = [
  {
    step: 1,
    title: 'Diagnóstico & Causa Raíz',
    phase: 'Fase Discovery',
    description: 'Telemetría, reproducción y puntos de inspección para aislar el origen del problema.',
  },
  {
    step: 2,
    title: 'Estrategia & Trade-offs',
    phase: 'Fase Arquitectura',
    description: 'Evaluación costo-beneficio y mitigación de deuda técnica antes de implementar.',
  },
  {
    step: 3,
    title: 'Iteración & Testing',
    phase: 'Fase Implementación',
    description: 'TDD/BDD, unit testing y canary releases para entregar con confianza.',
  },
  {
    step: 4,
    title: 'Impacto & Feedback',
    phase: 'Fase Observabilidad',
    description: 'Monitorización en vivo, SLO/SLI y post-mortems para mejora continua.',
  },
];

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  badge: string;
  title: string;
  description: string;
  metrics: CaseStudyMetric[];
}

export const caseStudy: CaseStudy = {
  badge: 'Caso de Éxito en Producción',
  title: 'Optimización Crítica de API Gateway & Frontend Bundle',
  description:
    'Reducción de latencia y consumo de memoria en un sistema de alto tráfico mediante profiling, code-splitting y ajuste de infraestructura.',
  metrics: [
    { value: '-45%', label: 'Latencia P95' },
    { value: '99.9%', label: 'SLA Uptime' },
    { value: '-60%', label: 'Memory Leaks' },
  ],
};
