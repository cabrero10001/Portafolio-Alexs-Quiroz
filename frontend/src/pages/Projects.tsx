import { useState, useMemo } from 'react';
import { projects, projectCategories } from '@/data/projects';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof projectCategories | 'all'>(
    'all'
  );
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categories = [
    { key: 'all' as const, label: 'Todos' },
    ...Object.entries(projectCategories).map(([key, label]) => ({
      key: key as keyof typeof projectCategories,
      label,
    })),
  ];

  return (
    <>
      <Section id="projects-hero" size="xl" variant="alternate">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle
            title="Proyectos"
            subtitle="Explora mi portafolio de proyectos desarrollados con diferentes tecnologías"
          />
        </div>
      </Section>

      <Section size="lg">
        <div className="mb-10">
          <div className="relative max-w-md mb-6">
            <label htmlFor="project-search" className="sr-only">
              Buscar proyectos
            </label>
            <input
              id="project-search"
              type="search"
              placeholder="Buscar por título, descripción o tecnología..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                aria-pressed={activeCategory === category.key}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                  activeCategory === category.key
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          Mostrando {filteredProjects.length} de {projects.length} proyectos
        </p>

        <ProjectGrid projects={filteredProjects} />
      </Section>
    </>
  );
}
