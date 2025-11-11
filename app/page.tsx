import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-stone-700 mb-4">Dale English</h1>
        <div className="text-sm text-stone-500 mb-2">Niveles Basic 1-11 disponibles</div>
        <p className="text-xl text-stone-600">Resúmenes Interactivos para Aprender Inglés</p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[
          { href: '/basic1', title: 'Basic 1', desc: 'Units 1-3: Introductions, Countries, Possessions', color: 'cyan' },
          { href: '/basic2', title: 'Basic 2', desc: 'Units 4-6: Family, Home, Food', color: 'amber' },
          { href: '/basic3', title: 'Basic 3', desc: 'Units 7-9: Time, Special Occasions, Come Together', color: 'emerald' },
          { href: '/basic4', title: 'Basic 4', desc: 'Units 10-12: Home, Clothing, Jobs', color: 'purple' },
          { href: '/basic5', title: 'Basic 5', desc: 'Units 1-3: People, Behavior, Shopping', color: 'indigo' },
          { href: '/basic6', title: 'Basic 6', desc: 'Units 4-6: Health, Travel, Entertainment', color: 'blue' },
          { href: '/basic7', title: 'Basic 7', desc: 'Units 7-9: Work, Technology, Environment', color: 'teal' },
          { href: '/basic8', title: 'Basic 8', desc: 'Units 10-12: Culture, Sports, Future', color: 'green' },
          { href: '/basic9', title: 'Basic 9', desc: 'Units 1-3: Advanced Grammar, Communication', color: 'orange' },
          { href: '/basic10', title: 'Basic 10', desc: 'Units 4-6: Business, Academic, Social', color: 'red' },
          { href: '/basic11', title: 'Basic 11', desc: 'Units 7-9: Professional, Advanced Topics', color: 'pink' }
        ].map((basic) => (
          <Link key={basic.href} href={basic.href} className="group">
            <div className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-${basic.color}-500`}>
              <h2 className={`text-xl font-bold text-${basic.color}-700 mb-2 group-hover:text-${basic.color}-800`}>{basic.title}</h2>
              <p className="text-stone-600 mb-3 text-sm">{basic.desc}</p>
              <div className={`flex items-center text-${basic.color}-600 group-hover:text-${basic.color}-700`}>
                <span className="text-sm">Explorar</span>
                <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-stone-700 mb-4">¿Cómo usar esta aplicación?</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">📖</span>
            </div>
            <h4 className="font-semibold text-stone-700 mb-2">Estudia Gramática</h4>
            <p className="text-sm text-stone-600">Revisa las reglas gramaticales organizadas en tablas claras</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🎴</span>
            </div>
            <h4 className="font-semibold text-stone-700 mb-2">Practica Vocabulario</h4>
            <p className="text-sm text-stone-600">Usa las flashcards interactivas para memorizar palabras</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-semibold text-stone-700 mb-2">Haz Ejercicios</h4>
            <p className="text-sm text-stone-600">Pon a prueba tus conocimientos con quizzes interactivos</p>
          </div>
        </div>
      </div>
    </div>
  )
}