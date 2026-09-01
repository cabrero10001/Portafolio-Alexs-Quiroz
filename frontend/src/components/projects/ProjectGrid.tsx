import type { Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  featured?: boolean;
}

export function ProjectGrid({ projects, featured = false }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="col-span-full py-12 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
          No se encontraron proyectos
        </h3>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Intenta cambiar los filtros o la búsqueda.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid gap-6 ${
        featured
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      }`}
      role="list"
      aria-label={featured ? 'Proyectos destacados' : 'Todos los proyectos'}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          variant={featured && index < 2 ? 'featured' : 'default'}
        />
      ))}
    </div>
  );
}
