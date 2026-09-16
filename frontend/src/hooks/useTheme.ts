import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme | null;
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const toggleTheme = useCallback(() => {
    const next = theme === 'light' ? 'dark' : 'light';

    const applyTheme = () => {
      document.documentElement.classList.toggle('dark', next === 'dark');
      localStorage.setItem('theme', next);
      setTheme(next);
    };

    if ('startViewTransition' in document) {
      document.startViewTransition(applyTheme);
    } else {
      applyTheme();
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem('theme');
      if (!saved) {
        const next = e.matches ? 'dark' : 'light';
        setTheme(next);
        document.documentElement.classList.toggle('dark', next === 'dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return [theme, toggleTheme];
}
