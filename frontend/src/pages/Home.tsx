import { Hero } from '@/components/hero/Hero';
import { Skills } from '@/components/about/Skills';
import { Experience } from '@/components/about/Experience';
import { Education } from '@/components/about/Education';
import { ComingSoon } from '@/components/projects/ComingSoon';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Section } from '@/components/ui/Section';

export function Home() {
  return (
    <>
      <Hero />

      <Skills />

      <Section id="about" variant="alternate" size="lg">
        <SectionTitle title="Sobre Mí" />
        <div className="mx-auto max-w-4xl space-y-12">
          <Experience />
          <Education />
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
        <ComingSoon />
      </Section>
    </>
  );
}
