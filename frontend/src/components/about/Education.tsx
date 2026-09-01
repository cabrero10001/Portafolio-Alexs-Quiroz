import { education, certifications } from '@/data/education';
import { Badge } from '@/components/ui/Badge';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function Education() {
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
    <div className="space-y-16">
      <section id="education" aria-labelledby="education-heading">
        <SectionTitle
          title="Educación"
          subtitle="Formación académica y certificaciones profesionales"
        />

        <div className="space-y-8">
          {education.map((edu, index) => (
            <article
              key={edu.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
                    <svg
                      className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762L3.31 9.397zM9.8 8.999a2.527 2.527 0 011.518-.83 24.17 24.17 0 00.791.357l5.537 2.374a1 1 0 001.286-1.497l-5.537-2.374a23.524 23.524 0 01-.791-.357 2.527 2.527 0 01-1.518.83l-4-1.715 4-1.715a2.527 2.527 0 011.518.83 24.166 24.166 0 00.791-.357l5.537-2.374a1 1 0 00-1.286-1.497l-5.537 2.374a23.533 23.533 0 01-.791.357 2.527 2.527 0 01-1.518-.83l-4 1.715 4 1.715a2.527 2.527 0 01-.83 1.518 24.17 24.17 0 00-.357.791l-5.537 2.374a1 1 0 01-1.286 1.497l5.537 2.374a23.524 23.524 0 01.791.357 2.527 2.527 0 01.83 1.518l-4 1.715-4-1.715a2.527 2.527 0 01-.83-1.518z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.degree} en {edu.field}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <span>
                    {formatDate(edu.startDate)} -{' '}
                    {edu.current ? 'Presente' : formatDate(edu.endDate!)}
                  </span>
                  <Badge variant="outline" size="sm" className="w-fit">
                    {edu.location}
                  </Badge>
                </div>
              </div>

              {edu.grade && (
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Calificación: </span>
                  {edu.grade}
                </p>
              )}

              {edu.description && (
                <ul className="mt-4 space-y-2" role="list">
                  {edu.description.map((desc, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                    >
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
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="certifications" aria-labelledby="certifications-heading">
        <SectionTitle
          title="Certificaciones"
          subtitle="Validaciones profesionales que demuestran competencias técnicas"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <article
              key={cert.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30 flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-600 dark:text-green-400"
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
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {formatDate(cert.date)}
                    {cert.expiryDate && ` · Expira: ${formatDate(cert.expiryDate)}`}
                  </p>
                </div>
              </div>
              {(cert.credentialId || cert.url) && (
                <div className="mt-4 flex items-center gap-2">
                  {cert.credentialId && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      {cert.credentialId}
                    </span>
                  )}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      Ver credencial
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
