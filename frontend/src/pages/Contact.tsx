import { useState } from 'react';
import { CONTACT_INFO, APP_CONSTANTS } from '@/lib/constants';
import { ContactCard } from '@/components/contact/ContactCard';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real app, you would send to an API endpoint
    console.log('Form submitted:', formData);

    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <>
      <Section id="contact-hero" size="xl" variant="alternate">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle
            title="Contacto"
            subtitle="¿Tienes un proyecto en mente? Me encantaría saber más sobre él."
          />
        </div>
      </Section>

      <Section size="lg">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <ContactCard variant="default" />
          </div>

          <div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Enviar mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Nombre *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Asunto *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50"
                    placeholder="Asunto del mensaje"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  loading={status === 'submitting'}
                >
                  {status === 'success'
                    ? '¡Enviado!'
                    : status === 'submitting'
                      ? 'Enviando...'
                      : 'Enviar mensaje'}
                </Button>

                {status === 'success' && (
                  <p className="text-center text-green-600 dark:text-green-400 text-sm">
                    ¡Gracias! Tu mensaje ha sido enviado. Te responderé pronto.
                  </p>
                )}

                {status === 'error' && (
                  <p className="text-center text-red-600 dark:text-red-400 text-sm">
                    Hubo un error al enviar. Intenta de nuevo o contacta directamente por email.
                  </p>
                )}
              </form>

              <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                O envíame un email directamente a{' '}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="alternate" size="md">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            ¿Prefieres una charla directa?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            Estoy disponible para llamadas de descubrimiento, revisiones de código, mentorías o
            simplemente para charlar sobre tecnología.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  `mailto:${CONTACT_INFO.email}?subject=Hola%20desde%20el%20portafolio`,
                  '_self'
                )
              }
            >
              Agendar llamada
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(APP_CONSTANTS.resumeUrl, '_blank')}
            >
              Ver CV
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
