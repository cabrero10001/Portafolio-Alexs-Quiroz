import type { Project } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PROJECT_CATEGORY_LABELS } from '@/lib/constants';

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured';
}

export function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 ${
        variant === 'featured' ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {project.image && (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={`Captura de ${project.title}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex flex-wrap gap-1.5">
            <Badge
              variant="outline"
              size="sm"
              className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-700"
            >
              {PROJECT_CATEGORY_LABELS[project.category]}
            </Badge>
            <Badge variant={project.featured ? 'success' : 'outline'} size="sm">
              {project.featured ? 'Destacado' : project.status}
            </Badge>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Tecnologías">
          {project.technologies.slice(0, 6).map((tech) => (
            <Badge key={tech} variant="outline" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 6 && (
            <Badge variant="outline" size="sm" className="text-gray-500 dark:text-gray-400">
              +{project.technologies.length - 6} más
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.links.demo && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </Button>
          )}
          {project.links.repo && (
            <Button variant="ghost" size="sm" asChild>
              <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                Código
              </a>
            </Button>
          )}
          {project.links.docs && (
            <Button variant="ghost" size="sm" asChild>
              <a href={project.links.docs} target="_blank" rel="noopener noreferrer">
                Docs
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
