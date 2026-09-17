import { Button } from '@/components/ui/Button';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="text-left">
            <span className="inline-flex gap-2 rounded-full text-3xl ">
              ¡Hola!, Soy<span className="font-bold text-indigo-600 dark:text-indigo-400">Alexs</span>
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
              Ingeniero de Software
            </h1>

            <p className="mt-3 text-xl md:text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Especializado en React, TypeScript y Node.js
            </p>

            <p className="mt-5 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Desarrollo aplicaciones web escalables, mantenibles y performantes. Apasionado por la
              arquitectura limpia, la experiencia de desarrollador y el código de calidad.
            </p>

            <blockquote className="mt-6 border-l-4 border-indigo-500 pl-4 text-base italic text-gray-500 dark:text-gray-400">
              &ldquo;El código es el pincel; la pantalla, el lienzo.&rdquo;
            </blockquote>

            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection('#contact')}>
                Contacto
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('#projects')}>
                Ver Proyectos
              </Button>
            </div>
          </div>

          <div className="relative w-full max-w-[420px] mx-auto lg:mx-0 lg:justify-self-end">
            <div
              className="absolute -inset-3 rounded-[2.5rem] bg-indigo-500/20 dark:bg-indigo-500/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative rounded-[2rem] border border-indigo-500/40 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 p-1.5 shadow-[0_0_40px_-12px] shadow-indigo-500/50">
              <div className="rounded-[1.75rem] overflow-hidden aspect-[4/5] bg-gray-100 dark:bg-gray-800">
                <img
                  src="src\assets\images\fotoPortafolio.jpg"
                  alt="Alexs trabajando con una laptop"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
