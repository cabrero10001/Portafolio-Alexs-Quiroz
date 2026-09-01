import { Hero } from '@/components/hero/Hero';
import { Skills } from '@/components/about/Skills';
import { Experience } from '@/components/about/Experience';
import { Education } from '@/components/about/Education';
import { projects } from '@/data/projects';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { ProjectFilter } from '@/components/projects/ProjectFilter';
import { ContactCard } from '@/components/contact/ContactCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Section } from '@/components/ui/Section';

export function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <>
      <Hero />

      <Section id="about" variant="alternate" size="lg">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <Skills />
            <Experience />
            <Education />
          </div>
          <div className="lg:col-span-1">
            <ContactCard variant="compact" />
          </div>
        </div>
      </Section>

      <Section id="projects" size="lg">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <SectionTitle
            title="Proyectos Destacados"
            subtitle="Una selección de mis trabajos más relevantes y recientes"
            align="left"
            showDivider={false}
          />
        </div>
        <ProjectGrid projects={featuredProjects} featured />

        <div className="mt-10">
          <SectionTitle
            title="Más Proyectos"
            subtitle="Explora el resto de mi trabajo"
            align="left"
            showDivider={false}
          />
          <ProjectFilter />
          <ProjectGrid projects={otherProjects} />
        </div>
      </Section>

      <Section id="contact" variant="alternate" size="lg">
        <div className="max-w-3xl mx-auto">
          <ContactCard variant="default" />
        </div>
      </Section>
    </>
  );
}
