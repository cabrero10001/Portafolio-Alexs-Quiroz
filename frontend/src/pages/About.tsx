import { Skills } from '@/components/about/Skills';
import { Experience } from '@/components/about/Experience';
import { Education } from '@/components/about/Education';
import { ContactCard } from '@/components/contact/ContactCard';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function About() {
  return (
    <>
      <Section id="about-hero" size="xl" variant="alternate">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle
            title="Sobre Mí"
            subtitle="Ingeniero de Software con más de 5 años de experiencia construyendo aplicaciones escalables"
          />
        </div>
      </Section>

      <Section variant="default" size="lg">
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
    </>
  );
}
