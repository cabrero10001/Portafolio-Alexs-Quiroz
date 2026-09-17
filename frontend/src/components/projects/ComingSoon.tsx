export function ComingSoon() {
  return (
    <div className="relative mx-auto max-w-2xl rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 p-8 md:p-12 text-center shadow-[0_0_60px_-15px] shadow-indigo-500/30">
      <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:text-indigo-300">
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
        En Desarrollo
      </span>

      <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
      </div>

      <h3 className="mt-6 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
        Próximamente
      </h3>

      <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        Actualmente me encuentro documentando y preparando los casos de estudio de mis proyectos
        más recientes. ¡Vuelve pronto para ver los resultados y el código fuente!
      </p>
    </div>
  );
}
