'use client'

import { useState } from 'react'
import Link from 'next/link'
import Chart from '@/components/Chart'
import Flashcard from '@/components/Flashcard'
import Quiz from '@/components/Quiz'

const vocab = {
  u4: [
    { es: 'Negocios', en: 'Business' },
    { es: 'Empresa', en: 'Company' },
    { es: 'Cliente', en: 'Client' },
    { es: 'Producto', en: 'Product' },
    { es: 'Servicio', en: 'Service' },
    { es: 'Mercado', en: 'Market' },
    { es: 'Venta', en: 'Sale' },
    { es: 'Ganancia', en: 'Profit' }
  ],
  u5: [
    { es: 'Académico', en: 'Academic' },
    { es: 'Universidad', en: 'University' },
    { es: 'Investigación', en: 'Research' },
    { es: 'Tesis', en: 'Thesis' },
    { es: 'Conferencia', en: 'Conference' },
    { es: 'Publicación', en: 'Publication' },
    { es: 'Estudio', en: 'Study' },
    { es: 'Análisis', en: 'Analysis' }
  ],
  u6: [
    { es: 'Social', en: 'Social' },
    { es: 'Comunidad', en: 'Community' },
    { es: 'Sociedad', en: 'Society' },
    { es: 'Grupo', en: 'Group' },
    { es: 'Red social', en: 'Social network' },
    { es: 'Interacción', en: 'Interaction' },
    { es: 'Relación', en: 'Relationship' },
    { es: 'Conexión', en: 'Connection' }
  ]
}

const quizzes = {
  u4: [
    { q: 'Our ___ is growing rapidly', a: 'business' },
    { q: 'We need to find new ___', a: 'clients' },
    { q: 'This ___ is very popular', a: 'product' }
  ],
  u5: [
    { q: 'She is doing ___ on climate change', a: 'research' },
    { q: 'He presented his ___ yesterday', a: 'thesis' },
    { q: 'The ___ was very informative', a: 'conference' }
  ],
  u6: [
    { q: 'Our ___ is very diverse', a: 'community' },
    { q: 'Social ___ are important', a: 'relationships' },
    { q: 'We need better ___ between groups', a: 'interaction' }
  ]
}

export default function Basic10() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeUnit, setActiveUnit] = useState<{[key: string]: string}>({
    'unit-4': 'grammar',
    'unit-5': 'grammar', 
    'unit-6': 'grammar'
  })

  const chartData = {
    labels: ['Unit 4: Business', 'Unit 5: Academic', 'Unit 6: Social'],
    datasets: [{
      label: 'Conceptos principales',
      data: [8, 8, 8],
      backgroundColor: [
        'rgba(239, 68, 68, 0.7)',
        'rgba(220, 38, 38, 0.7)',
        'rgba(185, 28, 28, 0.7)'
      ],
      borderColor: [
        'rgb(239, 68, 68)',
        'rgb(220, 38, 38)',
        'rgb(185, 28, 28)'
      ],
      borderWidth: 2
    }]
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      <header className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-red-600 hover:text-red-700">
          ← Volver al inicio
        </Link>
        <h1 className="text-4xl font-bold text-stone-700 mb-2">📚 World Link Basic 10</h1>
        <p className="text-lg text-stone-600">Units 4-6: Business, Academic, Social</p>
      </header>

      <nav className="flex justify-center space-x-2 md:space-x-4 mb-8 border-b border-stone-300 pb-4">
        {[
          { id: 'overview', label: '📊 General' },
          { id: 'unit-4', label: '💼 Unit 4' },
          { id: 'unit-5', label: '🎓 Unit 5' },
          { id: 'unit-6', label: '👥 Unit 6' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm md:text-base font-medium py-2 px-3 md:px-5 rounded-lg border-2 transition-all ${
              activeTab === tab.id
                ? 'border-red-500 bg-red-50 text-red-700 font-semibold'
                : 'border-transparent text-stone-600 hover:bg-stone-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main>
        {activeTab === 'overview' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-red-700 mb-6">Descripción General del Curso</h2>
            <Chart data={chartData} />
          </div>
        )}

        {['unit-4', 'unit-5', 'unit-6'].map(unitId => {
          if (activeTab !== unitId) return null
          
          const unitNumber = unitId.split('-')[1]
          const unitData = {
            '4': { title: '💼 Unit 4: BUSINESS', subtitle: 'Commerce & Enterprise', vocab: vocab.u4, quiz: quizzes.u4, color: 'red' },
            '5': { title: '🎓 Unit 5: ACADEMIC', subtitle: 'Education & Research', vocab: vocab.u5, quiz: quizzes.u5, color: 'red' },
            '6': { title: '👥 Unit 6: SOCIAL', subtitle: 'Community & Relationships', vocab: vocab.u6, quiz: quizzes.u6, color: 'red' }
          }[unitNumber]!

          return (
            <div key={unitId} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className={`text-3xl font-bold text-${unitData.color}-700 mb-2`}>{unitData.title}</h2>
              <p className="text-gray-600 mb-6">{unitData.subtitle}</p>
              
              <div className="flex justify-center space-x-2 mb-6 border-b border-stone-200 pb-4">
                {[
                  { id: 'vocab', label: '📖 Vocabulario' },
                  { id: 'grammar', label: '✏️ Gramática' },
                  { id: 'practice', label: '🎯 Práctica' }
                ].map(subTab => (
                  <button
                    key={subTab.id}
                    onClick={() => setActiveUnit(prev => ({ ...prev, [unitId]: subTab.id }))}
                    className={`py-2 px-4 rounded-full font-semibold transition-all ${
                      activeUnit[unitId] === subTab.id
                        ? `bg-${unitData.color}-500 text-white`
                        : `bg-stone-200 text-stone-700 hover:bg-${unitData.color}-500 hover:text-white`
                    }`}
                  >
                    {subTab.label}
                  </button>
                ))}
              </div>

              {activeUnit[unitId] === 'vocab' && (
                <Flashcard data={unitData.vocab} accentColor={unitData.color} />
              )}

              {activeUnit[unitId] === 'practice' && (
                <Quiz questions={unitData.quiz} accentColor={unitData.color} />
              )}

              {activeUnit[unitId] === 'grammar' && (
                <div>
                  <h3 className={`text-2xl font-bold text-${unitData.color}-600 mb-4`}>Gramática</h3>
                  <p className="text-stone-600">Contenido de gramática para {unitData.title}</p>
                </div>
              )}
            </div>
          )
        })}
      </main>
    </div>
  )
}