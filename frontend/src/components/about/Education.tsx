import type { ReactNode } from 'react';
import { education, certifications } from '@/data/education';
import { Badge } from '@/components/ui/Badge';
import { SectionTitle } from '@/components/ui/SectionTitle';

const educationIcons: Record<string, ReactNode> = {
  education: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  ),
  code: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
      />
    </svg>
  ),
};

const checkCircleIcon = (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

const checkmarkIcon = (
  <svg
    className="mt-0.5 h-5 w-5 text-indigo-500 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

export function Education() {
  return (
    <div className="space-y-16">
      <section id="education" aria-labelledby="education-heading">
        <SectionTitle title="Educación" subtitle="Formación académica y trayectoria universitaria" />

        <div className="space-y-6">
          {education.map((edu) => (
            <article
              key={edu.id}
              className="rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 p-6 shadow-sm transition-all duration-300 hover:border-indigo-400/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    {educationIcons[edu.icon]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{edu.title}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                  <span className="whitespace-nowrap">
                    {edu.startYear} – {edu.endYear ?? 'En curso'} | {edu.location}
                  </span>
                  <Badge
                    variant={edu.status === 'En curso' ? 'info' : 'success'}
                    size="sm"
                    className="w-fit"
                  >
                    {edu.status}
                  </Badge>
                </div>
              </div>

              <ul className="space-y-2.5" role="list">
                {edu.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-gray-600 dark:text-gray-300">
                    {checkmarkIcon}
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="certifications" aria-labelledby="certifications-heading">
        <SectionTitle
          title="Certificaciones & Formación"
          subtitle="Validaciones profesionales y competencias técnicas adicionales"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <article
              key={cert.id}
              className="flex flex-col rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 p-6 shadow-sm transition-all duration-300 hover:border-indigo-400/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                {checkCircleIcon}
              </div>

              <h3 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {cert.date}
              </p>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-gray-200 dark:border-white/10 pt-4">
                <span className="rounded bg-gray-200 dark:bg-gray-700/60 px-2 py-1 text-xs font-mono text-gray-700 dark:text-gray-200">
                  {cert.credentialId}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
