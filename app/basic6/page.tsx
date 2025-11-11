'use client'

import { useState } from 'react'
import Link from 'next/link'
import Chart from '@/components/Chart'
import Flashcard from '@/components/Flashcard'
import Quiz from '@/components/Quiz'

const vocab = {
  u4: [
    { es: 'Salud', en: 'Health' },
    { es: 'Médico', en: 'Doctor' },
    { es: 'Hospital', en: 'Hospital' },
    { es: 'Medicina', en: 'Medicine' },
    { es: 'Dolor de cabeza', en: 'Headache' },
    { es: 'Fiebre', en: 'Fever' },
    { es: 'Resfriado', en: 'Cold' },
    { es: 'Tos', en: 'Cough' }
  ],
  u5: [
    { es: 'Viaje', en: 'Travel' },
    { es: 'Aeropuerto', en: 'Airport' },
    { es: 'Hotel', en: 'Hotel' },
    { es: 'Equipaje', en: 'Luggage' },
    { es: 'Pasaporte', en: 'Passport' },
    { es: 'Vuelo', en: 'Flight' },
    { es: 'Vacaciones', en: 'Vacation' },
    { es: 'Turista', en: 'Tourist' }
  ],
  u6: [
    { es: 'Entretenimiento', en: 'Entertainment' },
    { es: 'Película', en: 'Movie' },
    { es: 'Teatro', en: 'Theater' },
    { es: 'Concierto', en: 'Concert' },
    { es: 'Museo', en: 'Museum' },
    { es: 'Parque', en: 'Park' },
    { es: 'Diversión', en: 'Fun' },
    { es: 'Espectáculo', en: 'Show' }
  ]
}

const quizzes = {
  u4: [
    { q: 'I have a ___ (dolor de cabeza)', a: 'headache' },
    { q: 'She needs to see a ___', a: 'doctor' },
    { q: 'Take this ___ twice a day', a: 'medicine' }
  ],
  u5: [
    { q: 'I need my ___ to travel', a: 'passport' },
    { q: 'The ___ leaves at 3 PM', a: 'flight' },
    { q: 'We stayed at a nice ___', a: 'hotel' }
  ],
  u6: [
    { q: 'Let\'s watch a ___ tonight', a: 'movie' },
    { q: 'The ___ was amazing', a: 'concert' },
    { q: 'We visited the art ___', a: 'museum' }
  ]
}

export default function Basic6() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeUnit, setActiveUnit] = useState<{[key: string]: string}>({
    'unit-4': 'grammar',
    'unit-5': 'grammar', 
    'unit-6': 'grammar'
  })

  const chartData = {
    labels: ['Unit 4: Health', 'Unit 5: Travel', 'Unit 6: Entertainment'],
    datasets: [{
      label: 'Conceptos principales',
      data: [8, 8, 8],
      backgroundColor: [
        'rgba(59, 130, 246, 0.7)',
        'rgba(37, 99, 235, 0.7)',
        'rgba(29, 78, 216, 0.7)'
      ],
      borderColor: [
        'rgb(59, 130, 246)',
        'rgb(37, 99, 235)',
        'rgb(29, 78, 216)'
      ],
      borderWidth: 2
    }]
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      <header className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-blue-600 hover:text-blue-700">
          ← Volver al inicio
        </Link>
        <h1 className="text-4xl font-bold text-stone-700 mb-2">📚 World Link Basic 6</h1>
        <p className="text-lg text-stone-600">Units 4-6: Health, Travel, Entertainment</p>
      </header>

      <nav className="flex justify-center space-x-2 md:space-x-4 mb-8 border-b border-stone-300 pb-4">
        {[
          { id: 'overview', label: '📊 General' },
          { id: 'unit-4', label: '🏥 Unit 4' },
          { id: 'unit-5', label: '✈️ Unit 5' },
          { id: 'unit-6', label: '🎭 Unit 6' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm md:text-base font-medium py-2 px-3 md:px-5 rounded-lg border-2 transition-all ${
              activeTab === tab.id
                ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold'
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
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Descripción General del Curso</h2>
            <Chart data={chartData} />
          </div>
        )}

        {['unit-4', 'unit-5', 'unit-6'].map(unitId => {
          if (activeTab !== unitId) return null
          
          const unitNumber = unitId.split('-')[1]
          const unitData = {
            '4': { title: '🏥 Unit 4: HEALTH', subtitle: 'Medical Care & Wellness', vocab: vocab.u4, quiz: quizzes.u4, color: 'blue' },
            '5': { title: '✈️ Unit 5: TRAVEL', subtitle: 'Transportation & Tourism', vocab: vocab.u5, quiz: quizzes.u5, color: 'blue' },
            '6': { title: '🎭 Unit 6: ENTERTAINMENT', subtitle: 'Leisure & Culture', vocab: vocab.u6, quiz: quizzes.u6, color: 'blue' }
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