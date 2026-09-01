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
          className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"
          aria-hidden="true"
        />

        <div className="space-y-10">
          {experience.map((exp, index) => (
            <article
              key={exp.id}
              className="relative pl-12 pb-6"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-500 z-10">
                <svg
                  className="h-5 w-5 text-indigo-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <p className="mt-1 text-indigo-600 dark:text-indigo-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <span>
                      {formatDate(exp.startDate)} -{' '}
                      {exp.current ? 'Presente' : formatDate(exp.endDate!)}
                    </span>
                    <Badge variant="outline" size="sm" className="w-fit">
                      {experienceTypes[exp.type]}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.location}</p>

                <ul className="space-y-2 mb-6" role="list">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <svg
                        className="mt-0.5 h-4 w-4 text-indigo-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
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
