'use client'

import { useState } from 'react'
import Link from 'next/link'
import Chart from '@/components/Chart'
import Flashcard from '@/components/Flashcard'
import Quiz from '@/components/Quiz'

const vocab = {
  u7: [
    { es: 'Trabajo', en: 'Work' },
    { es: 'Oficina', en: 'Office' },
    { es: 'Jefe', en: 'Boss' },
    { es: 'Empleado', en: 'Employee' },
    { es: 'Reunión', en: 'Meeting' },
    { es: 'Proyecto', en: 'Project' },
    { es: 'Horario', en: 'Schedule' },
    { es: 'Salario', en: 'Salary' }
  ],
  u8: [
    { es: 'Tecnología', en: 'Technology' },
    { es: 'Computadora', en: 'Computer' },
    { es: 'Internet', en: 'Internet' },
    { es: 'Teléfono', en: 'Phone' },
    { es: 'Aplicación', en: 'App' },
    { es: 'Software', en: 'Software' },
    { es: 'Digital', en: 'Digital' },
    { es: 'Conexión', en: 'Connection' }
  ],
  u9: [
    { es: 'Medio ambiente', en: 'Environment' },
    { es: 'Naturaleza', en: 'Nature' },
    { es: 'Contaminación', en: 'Pollution' },
    { es: 'Reciclar', en: 'Recycle' },
    { es: 'Energía', en: 'Energy' },
    { es: 'Planeta', en: 'Planet' },
    { es: 'Clima', en: 'Climate' },
    { es: 'Verde', en: 'Green' }
  ]
}

const quizzes = {
  u7: [
    { q: 'I go to ___ every day', a: 'work' },
    { q: 'My ___ is very nice', a: 'boss' },
    { q: 'We have a ___ at 3 PM', a: 'meeting' }
  ],
  u8: [
    { q: 'I use my ___ to browse the internet', a: 'computer' },
    { q: 'Download this ___ on your phone', a: 'app' },
    { q: 'The ___ is very fast here', a: 'connection' }
  ],
  u9: [
    { q: 'We need to protect the ___', a: 'environment' },
    { q: 'Please ___ these bottles', a: 'recycle' },
    { q: 'Solar ___ is clean', a: 'energy' }
  ]
}

export default function Basic7() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeUnit, setActiveUnit] = useState<{[key: string]: string}>({
    'unit-7': 'grammar',
    'unit-8': 'grammar', 
    'unit-9': 'grammar'
  })

  const chartData = {
    labels: ['Unit 7: Work', 'Unit 8: Technology', 'Unit 9: Environment'],
    datasets: [{
      label: 'Conceptos principales',
      data: [8, 8, 8],
      backgroundColor: [
        'rgba(20, 184, 166, 0.7)',
        'rgba(13, 148, 136, 0.7)',
        'rgba(15, 118, 110, 0.7)'
      ],
      borderColor: [
        'rgb(20, 184, 166)',
        'rgb(13, 148, 136)',
        'rgb(15, 118, 110)'
      ],
      borderWidth: 2
    }]
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      <header className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-teal-600 hover:text-teal-700">
          ← Volver al inicio
        </Link>
        <h1 className="text-4xl font-bold text-stone-700 mb-2">📚 World Link Basic 7</h1>
        <p className="text-lg text-stone-600">Units 7-9: Work, Technology, Environment</p>
      </header>

      <nav className="flex justify-center space-x-2 md:space-x-4 mb-8 border-b border-stone-300 pb-4">
        {[
          { id: 'overview', label: '📊 General' },
          { id: 'unit-7', label: '💼 Unit 7' },
          { id: 'unit-8', label: '💻 Unit 8' },
          { id: 'unit-9', label: '🌍 Unit 9' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm md:text-base font-medium py-2 px-3 md:px-5 rounded-lg border-2 transition-all ${
              activeTab === tab.id
                ? 'border-teal-500 bg-teal-50 text-teal-700 font-semibold'
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
            <h2 className="text-3xl font-bold text-teal-700 mb-6">Descripción General del Curso</h2>
            <Chart data={chartData} />
          </div>
        )}

        {['unit-7', 'unit-8', 'unit-9'].map(unitId => {
          if (activeTab !== unitId) return null
          
          const unitNumber = unitId.split('-')[1]
          const unitData = {
            '7': { title: '💼 Unit 7: WORK', subtitle: 'Professional Life & Career', vocab: vocab.u7, quiz: quizzes.u7, color: 'teal' },
            '8': { title: '💻 Unit 8: TECHNOLOGY', subtitle: 'Digital World & Innovation', vocab: vocab.u8, quiz: quizzes.u8, color: 'teal' },
            '9': { title: '🌍 Unit 9: ENVIRONMENT', subtitle: 'Nature & Sustainability', vocab: vocab.u9, quiz: quizzes.u9, color: 'teal' }
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