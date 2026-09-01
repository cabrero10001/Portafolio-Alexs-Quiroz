import { CONTACT_INFO } from '@/lib/constants';
import { socialLinks } from '@/data/social';

interface ContactCardProps {
  variant?: 'default' | 'compact';
}

export function ContactCard({ variant = 'default' }: ContactCardProps) {
  const contactMethods = [
    {
      label: 'Email',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      label: 'Ubicación',
      value: CONTACT_INFO.location,
      href: null,
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      label: 'Disponibilidad',
      value: CONTACT_INFO.availability,
      href: null,
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      label: 'Zona horaria',
      value: CONTACT_INFO.timezone,
      href: null,
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
  ];

  if (variant === 'compact') {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contacto</h3>
        <div className="space-y-3">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href ?? undefined}
              className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                {method.icon}
              </span>
              <div>
                <span className="font-medium text-gray-900 dark:text-white">{method.label}</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">{method.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        ¿Tienes un proyecto en mente?
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Estoy abierto a nuevas oportunidades, colaboraciones y proyectos interesantes. No dudes en
        contactarme.
      </p>

      <div className="space-y-4 mb-8">
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.href ?? undefined}
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
              {method.icon}
            </span>
            <div>
              <span className="font-medium text-gray-900 dark:text-white">{method.label}</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">{method.value}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
        <h4 className="font-medium text-gray-900 dark:text-white mb-4">Sígueme en redes</h4>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={social.ariaLabel}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <svg className="h-5 w-5" aria-hidden="true">
                <use href={`/icons.svg#${social.icon}`} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
