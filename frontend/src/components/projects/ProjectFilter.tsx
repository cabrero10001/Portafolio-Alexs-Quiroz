import { useState, useMemo } from 'react';
import { projects, projectCategories, type Project } from '@/data/projects';
import { Button } from '@/components/ui/Button';

interface ProjectFilterProps {
  onFilterChange?: (filtered: Project[]) => void;
}

export function ProjectFilter({ onFilterChange }: ProjectFilterProps) {
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

  if (onFilterChange) {
    onFilterChange(filteredProjects);
  }

  const categories = [
    { key: 'all' as const, label: 'Todos' },
    ...Object.entries(projectCategories).map(([key, label]) => ({
      key: key as keyof typeof projectCategories,
      label,
    })),
  ];

  return (
    <div className="space-y-6">
      <div className="relative max-w-md">
        <label htmlFor="project-search" className="sr-only">
          Buscar proyectos
        </label>
        <input
          id="project-search"
          type="search"
          placeholder="Buscar proyectos..."
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
          <Button
            key={category.key}
            variant={activeCategory === category.key ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory(category.key)}
            aria-pressed={activeCategory === category.key}
          >
            {category.label}
          </Button>
        ))}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        {filteredProjects.length} de {projects.length} proyectos
      </p>
    </div>
  );
}
