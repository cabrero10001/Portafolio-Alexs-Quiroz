import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/Button';
import { socialLinks } from '@/data/social';
import { APP_CONSTANTS } from '@/lib/constants';

export function Hero() {
  useTheme();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
              Disponible para oportunidades
            </span>
          </div>

          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Ingeniero de Software
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Especializado en React, TypeScript & Cloud
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Desarrollo aplicaciones web escalables, mantenibles y performantes. Apasionado por la
            arquitectura limpia, la experiencia de desarrollador y el código de calidad.
          </p>

          <div className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => scrollToSection('#projects')}>
              Ver Proyectos
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('#contact')}>
              Contactar
            </Button>
          </div>

          <div className="mb-12 flex items-center justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.ariaLabel}
                className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <svg className="h-6 w-6" aria-hidden="true">
                  <use href={`/icons.svg#${social.icon}`} />
                </svg>
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span>{APP_CONSTANTS.availability}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
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
              <span>{APP_CONSTANTS.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
              5+
            </div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">Años de experiencia</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
              30+
            </div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Proyectos completados
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
              15+
            </div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Tecnologías dominadas
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg
          className="h-6 w-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </header>
  );
}
