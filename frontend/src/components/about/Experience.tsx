import { experience, experienceTypes } from '@/data/experience';
import { Badge } from '@/components/ui/Badge';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function Experience() {
  const formatDate = (date: string) => {
    const [year, month] = date.split('-');
    const months = [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="experience" className="py-16" aria-labelledby="experience-heading">
      <SectionTitle
        title="Experiencia Profesional"
        subtitle="Mi trayectoria desarrollando soluciones de software en diferentes entornos y tecnologías"
      />

      <div className="relative">
        <div
          className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500"
          aria-hidden="true"
        />

        <div className="space-y-10">
          {experience.map((exp) => (
            <article key={exp.id} className="relative pl-16">
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-500 shadow-lg shadow-indigo-500/20 z-10">
                <svg
                  className="h-5 w-5 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>

              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 p-6 shadow-sm transition-all duration-300 hover:border-indigo-400/50">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <p className="mt-1 text-indigo-600 dark:text-indigo-400 font-medium">
                      {exp.company} <span className="text-gray-400 dark:text-gray-500">|</span>{' '}
                      <span className="text-gray-500 dark:text-gray-400">{exp.location}</span>
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                    <span className="whitespace-nowrap">
                      {formatDate(exp.startDate)} – {exp.current ? 'Presente' : formatDate(exp.endDate!)}
                    </span>
                    <Badge variant="outline" size="sm" className="w-fit">
                      {experienceTypes[exp.type]}
                    </Badge>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6" role="list">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-gray-600 dark:text-gray-300">
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
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label="Tecnologías utilizadas"
                >
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
