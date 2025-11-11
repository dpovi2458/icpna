'use client'

import { useState } from 'react'
import Link from 'next/link'
import Chart from '@/components/Chart'
import Flashcard from '@/components/Flashcard'
import Quiz from '@/components/Quiz'

const vocab = {
  u10: [
    { es: 'Cultura', en: 'Culture' },
    { es: 'Tradición', en: 'Tradition' },
    { es: 'Festival', en: 'Festival' },
    { es: 'Arte', en: 'Art' },
    { es: 'Historia', en: 'History' },
    { es: 'Costumbre', en: 'Custom' },
    { es: 'Celebración', en: 'Celebration' },
    { es: 'Patrimonio', en: 'Heritage' }
  ],
  u11: [
    { es: 'Deporte', en: 'Sport' },
    { es: 'Fútbol', en: 'Soccer' },
    { es: 'Baloncesto', en: 'Basketball' },
    { es: 'Tenis', en: 'Tennis' },
    { es: 'Natación', en: 'Swimming' },
    { es: 'Equipo', en: 'Team' },
    { es: 'Competencia', en: 'Competition' },
    { es: 'Campeón', en: 'Champion' }
  ],
  u12: [
    { es: 'Futuro', en: 'Future' },
    { es: 'Plan', en: 'Plan' },
    { es: 'Meta', en: 'Goal' },
    { es: 'Sueño', en: 'Dream' },
    { es: 'Esperanza', en: 'Hope' },
    { es: 'Ambición', en: 'Ambition' },
    { es: 'Carrera', en: 'Career' },
    { es: 'Éxito', en: 'Success' }
  ]
}

const quizzes = {
  u10: [
    { q: 'Every country has its own ___', a: 'culture' },
    { q: 'We celebrate this ___ every year', a: 'festival' },
    { q: 'This is an old ___', a: 'tradition' }
  ],
  u11: [
    { q: 'My favorite ___ is soccer', a: 'sport' },
    { q: 'Our ___ won the game', a: 'team' },
    { q: 'She is the ___ of the tournament', a: 'champion' }
  ],
  u12: [
    { q: 'What are your ___ for next year?', a: 'plans' },
    { q: 'My ___ is to become a doctor', a: 'goal' },
    { q: 'I ___ to travel the world', a: 'hope' }
  ]
}

export default function Basic8() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeUnit, setActiveUnit] = useState<{[key: string]: string}>({
    'unit-10': 'grammar',
    'unit-11': 'grammar', 
    'unit-12': 'grammar'
  })

  const chartData = {
    labels: ['Unit 10: Culture', 'Unit 11: Sports', 'Unit 12: Future'],
    datasets: [{
      label: 'Conceptos principales',
      data: [8, 8, 8],
      backgroundColor: [
        'rgba(34, 197, 94, 0.7)',
        'rgba(22, 163, 74, 0.7)',
        'rgba(21, 128, 61, 0.7)'
      ],
      borderColor: [
        'rgb(34, 197, 94)',
        'rgb(22, 163, 74)',
        'rgb(21, 128, 61)'
      ],
      borderWidth: 2
    }]
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      <header className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-green-600 hover:text-green-700">
          ← Volver al inicio
        </Link>
        <h1 className="text-4xl font-bold text-stone-700 mb-2">📚 World Link Basic 8</h1>
        <p className="text-lg text-stone-600">Units 10-12: Culture, Sports, Future</p>
      </header>

      <nav className="flex justify-center space-x-2 md:space-x-4 mb-8 border-b border-stone-300 pb-4">
        {[
          { id: 'overview', label: '📊 General' },
          { id: 'unit-10', label: '🎭 Unit 10' },
          { id: 'unit-11', label: '⚽ Unit 11' },
          { id: 'unit-12', label: '🚀 Unit 12' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm md:text-base font-medium py-2 px-3 md:px-5 rounded-lg border-2 transition-all ${
              activeTab === tab.id
                ? 'border-green-500 bg-green-50 text-green-700 font-semibold'
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
            <h2 className="text-3xl font-bold text-green-700 mb-6">Descripción General del Curso</h2>
            <Chart data={chartData} />
          </div>
        )}

        {['unit-10', 'unit-11', 'unit-12'].map(unitId => {
          if (activeTab !== unitId) return null
          
          const unitNumber = unitId.split('-')[1]
          const unitData = {
            '10': { title: '🎭 Unit 10: CULTURE', subtitle: 'Traditions & Heritage', vocab: vocab.u10, quiz: quizzes.u10, color: 'green' },
            '11': { title: '⚽ Unit 11: SPORTS', subtitle: 'Athletics & Competition', vocab: vocab.u11, quiz: quizzes.u11, color: 'green' },
            '12': { title: '🚀 Unit 12: FUTURE', subtitle: 'Plans & Dreams', vocab: vocab.u12, quiz: quizzes.u12, color: 'green' }
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