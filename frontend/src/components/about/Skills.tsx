import { skills, skillCategories } from '@/data/skills';
import { Badge } from '@/components/ui/Badge';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function Skills() {
  return (
    <section id="skills" className="py-16" aria-labelledby="skills-heading">
      <SectionTitle
        title="Habilidades Técnicas"
        subtitle="Tecnologías y herramientas que domino para construir software de calidad"
      />

      <div className="space-y-12">
        {skillCategories.map((category) => (
          <div key={category.key}>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
              <span
                className={`h-3 w-3 rounded-full ${category.color === 'blue' && 'bg-blue-500'}`}
                aria-hidden="true"
              />
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((skill) => skill.category === category.key)
                .map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    size="md"
                    dot
                    className="group hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all"
                  >
                    {skill.name}
                    {skill.level && (
                      <span className="ml-1 text-xs text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        ({skill.level})
                      </span>
                    )}
                  </Badge>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
