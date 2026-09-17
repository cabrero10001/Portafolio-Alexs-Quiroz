import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT_INFO, APP_CONSTANTS } from '@/lib/constants';
import { ContactCard } from '@/components/contact/ContactCard';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? 'alexsquiroz2@gmail.com';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setFeedback('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      setStatus('error');
      setFeedback('Por favor completa todos los campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setFeedback('Por favor ingresa un correo electrónico válido.');
      return;
    }

    setStatus('submitting');

    const body = [
      'Nuevo mensaje recibido desde tu Portafolio Web:',
      '-----------------------------------------------',
      `• Nombre: ${name}`,
      `• Email: ${email}`,
      `• Asunto: ${subject}`,
      '',
      'Mensaje:',
      message,
      '-----------------------------------------------',
      'Enviado automáticamente desde el formulario de contacto.',
    ].join('\n');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_email: CONTACT_EMAIL,
          subject: `[Portafolio Web] ${subject}`,
          from_name: name,
          from_email: email,
          message: body,
        },
        PUBLIC_KEY
      );

      setStatus('success');
      setFeedback('¡Mensaje enviado con éxito! Te responderé lo antes posible.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setFeedback(
        `Ocurrió un error al enviar el mensaje. Intenta nuevamente o escribe a ${CONTACT_EMAIL}.`
      );
    }
  };

  return (
    <>
      {status !== 'idle' && status !== 'submitting' && (
        <div
          role="alert"
          aria-live="polite"
          className={`fixed top-24 right-6 z-[60] max-w-sm rounded-xl px-4 py-3 text-sm font-medium shadow-lg border transition-all duration-300 animate-fade-in ${
            status === 'success'
              ? 'bg-green-600 text-white border-green-700'
              : 'bg-red-600 text-white border-red-700'
          }`}
        >
          {feedback}
        </div>
      )}

      <Section id="contact" size="xl" variant="alternate">
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
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
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
            <a
              href="https://wa.me/573023208680?text=Hola%20Alexs,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Contactar por WhatsApp
            </a>
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
