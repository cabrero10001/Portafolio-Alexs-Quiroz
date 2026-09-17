import type { ReactNode } from 'react';
import { skillCategories, skillLevels } from '@/data/skills';
import { softSkills, frameworkSteps, caseStudy } from '@/data/methodology';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/ui/Section';

const categoryIcons: Record<string, ReactNode> = {
  frontend: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
      />
    </svg>
  ),
  backend: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"
      />
    </svg>
  ),
  devops: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
      />
    </svg>
  ),
  tools: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
      />
    </svg>
  ),
};

const softSkillIcons: Record<string, ReactNode> = {
  communication: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
      />
    </svg>
  ),
  leadership: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
      />
    </svg>
  ),
  adaptability: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  ),
  critical: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  ),
  value: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
      />
    </svg>
  ),
};

const levelDotColor: Record<string, string> = {
  expert: 'bg-indigo-500',
  advanced: 'bg-blue-400',
  intermediate: 'bg-gray-400',
};

const blockTitle = (label: string) => (
  <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
    <span className="h-2 w-2 rounded-full bg-indigo-500" aria-hidden="true" />
    {label}
  </h3>
);

export function Skills() {
  return (
    <Section id="skills" size="lg">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-gray-800/50 px-4 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
          Skills & Metodología
        </span>
        <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          Habilidades & Enfoque de Trabajo
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Tecnologías que domino, competencias clave y mi proceso estructurado para resolver
          problemas de ingeniería y construir software de calidad industrial.
        </p>
      </div>

      <div className="space-y-16">
        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            {blockTitle('Habilidades Técnicas')}
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              {skillLevels.map((level) => (
                <span key={level.key} className="flex items-center gap-1.5">
                  <span
                    className={`h-2 w-2 rounded-full ${levelDotColor[level.key]}`}
                    aria-hidden="true"
                  />
                  {level.label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((category) => (
              <article
                key={category.key}
                className="rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 p-5 transition-all duration-300 hover:border-indigo-400/50 hover:-translate-y-1"
              >
                <header className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                      {categoryIcons[category.icon]}
                    </span>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{category.title}</h4>
                  </div>
                  <Badge variant="outline" size="sm">
                    {category.skills.length} TECNS
                  </Badge>
                </header>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/60 px-2.5 py-1 text-xs text-gray-700 dark:text-gray-200"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${levelDotColor[skill.level]}`}
                        aria-hidden="true"
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6">{blockTitle('Habilidades Blandas & Liderazgo')}</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {softSkills.map((skill) => (
              <article
                key={skill.key}
                className="flex flex-col rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 p-5 transition-all duration-300 hover:border-indigo-400/50 hover:-translate-y-1"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  {softSkillIcons[skill.icon]}
                </span>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">{skill.title}</h4>
                <p className="flex-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {skill.description}
                </p>
                <span className="mt-4 inline-flex w-fit rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300">
                  {skill.tag}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6">{blockTitle('Resolución de Problemáticas')}</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {frameworkSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 p-5 transition-all duration-300 hover:border-indigo-400/50 hover:-translate-y-1"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                    {step.step}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {step.phase}
                  </span>
                </div>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                {caseStudy.badge}
              </span>
              <h3 className="mt-4 text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                {caseStudy.title}
              </h3>
              <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {caseStudy.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {caseStudy.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-white/10 p-4 text-center"
                >
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl md:text-3xl font-bold text-transparent">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
