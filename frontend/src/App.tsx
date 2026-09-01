function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Portafolio - React + TypeScript + Tailwind
        </h1>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              React 19 + TypeScript
            </h2>
            <p className="text-blue-700 dark:text-blue-300">
              Configuración moderna con tipos estrictos y últimas características
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h2 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
              Tailwind CSS v4
            </h2>
            <p className="text-green-700 dark:text-green-300">
              Utility-first CSS con configuración CSS-first y tema personalizado
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h2 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
              ESLint + Prettier
            </h2>
            <p className="text-purple-700 dark:text-purple-300">
              Linting con flat config y formateo automático integrado
            </p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
            <h2 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-2">
              Vite + Path Aliases
            </h2>
            <p className="text-orange-700 dark:text-orange-300">
              Build rápido y imports limpios con @/ apuntando a src/
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          <p>
            Entorno listo para desarrollo. Ejecuta{' '}
            <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">npm run dev</code>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
