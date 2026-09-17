import { useState, useEffect } from 'react';
import { socialLinks } from '@/data/social';

export function SocialDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed right-6 bottom-6 z-40 flex flex-col items-center gap-3 animate-fade-in"
      role="navigation"
      aria-label="Redes sociales"
    >
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target={social.href.startsWith('http') ? '_blank' : undefined}
          rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={social.ariaLabel}
          className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:shadow-xl hover:-translate-x-1"
        >
          <svg className="h-6 w-6" aria-hidden="true">
            <use href={`/icons.svg#${social.icon}`} />
          </svg>
          <span className="absolute right-full mr-3 px-2.5 py-1 rounded-md text-xs font-medium text-white bg-slate-900 dark:bg-slate-800 dark:text-slate-100 border border-slate-700/50 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out whitespace-nowrap pointer-events-none">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
}
