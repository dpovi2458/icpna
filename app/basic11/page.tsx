'use client'

import { useState } from 'react'
import Link from 'next/link'
import Chart from '@/components/Chart'
import Flashcard from '@/components/Flashcard'
import Quiz from '@/components/Quiz'

const vocab = {
  u7: [
    { es: 'Profesional', en: 'Professional' },
    { es: 'Carrera', en: 'Career' },
    { es: 'Habilidad', en: 'Skill' },
    { es: 'Competencia', en: 'Competence' },
    { es: 'Liderazgo', en: 'Leadership' },
    { es: 'Gestión', en: 'Management' },
    { es: 'Estrategia', en: 'Strategy' },
    { es: 'Innovación', en: 'Innovation' }
  ],
  u8: [
    { es: 'Avanzado', en: 'Advanced' },
    { es: 'Complejo', en: 'Complex' },
    { es: 'Sofisticado', en: 'Sophisticated' },
    { es: 'Especializado', en: 'Specialized' },
    { es: 'Experto', en: 'Expert' },
    { es: 'Maestría', en: 'Mastery' },
    { es: 'Perfección', en: 'Perfection' },
    { es: 'Excelencia', en: 'Excellence' }
  ],
  u9: [
    { es: 'Tema', en: 'Topic' },
    { es: 'Concepto', en: 'Concept' },
    { es: 'Teoría', en: 'Theory' },
    { es: 'Principio', en: 'Principle' },
    { es: 'Metodología', en: 'Methodology' },
    { es: 'Enfoque', en: 'Approach' },
    { es: 'Perspectiva', en: 'Perspective' },
    { es: 'Comprensión', en: 'Understanding' }
  ]
}

const quizzes = {
  u7: [
    { q: 'She has excellent ___ skills', a: 'leadership' },
    { q: 'This requires a new ___', a: 'strategy' },
    { q: 'He is a ___ in his field', a: 'professional' }
  ],
  u8: [
    { q: 'This is a very ___ problem', a: 'complex' },
    { q: 'She is an ___ in linguistics', a: 'expert' },
    { q: 'We strive for ___', a: 'excellence' }
  ],
  u9: [
    { q: 'What is the main ___?', a: 'topic' },
    { q: 'This ___ is difficult to understand', a: 'concept' },
    { q: 'From my ___, this is correct', a: 'perspective' }
  ]
}

export default function Basic11() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeUnit, setActiveUnit] = useState<{[key: string]: string}>({
    'unit-7': 'grammar',
    'unit-8': 'grammar', 
    'unit-9': 'grammar'
  })

  const chartData = {
    labels: ['Unit 7: Professional', 'Unit 8: Advanced', 'Unit 9: Topics'],
    datasets: [{
      label: 'Conceptos principales',
      data: [8, 8, 8],
      backgroundColor: [
        'rgba(236, 72, 153, 0.7)',
        'rgba(219, 39, 119, 0.7)',
        'rgba(190, 24, 93, 0.7)'
      ],
      borderColor: [
        'rgb(236, 72, 153)',
        'rgb(219, 39, 119)',
        'rgb(190, 24, 93)'
      ],
      borderWidth: 2
    }]
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      <header className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-pink-600 hover:text-pink-700">
          ← Volver al inicio
        </Link>
        <h1 className="text-4xl font-bold text-stone-700 mb-2">📚 World Link Basic 11</h1>
        <p className="text-lg text-stone-600">Units 7-9: Professional, Advanced Topics</p>
      </header>

      <nav className="flex justify-center space-x-2 md:space-x-4 mb-8 border-b border-stone-300 pb-4">
        {[
          { id: 'overview', label: '📊 General' },
          { id: 'unit-7', label: '👔 Unit 7' },
          { id: 'unit-8', label: '🎯 Unit 8' },
          { id: 'unit-9', label: '📚 Unit 9' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm md:text-base font-medium py-2 px-3 md:px-5 rounded-lg border-2 transition-all ${
              activeTab === tab.id
                ? 'border-pink-500 bg-pink-50 text-pink-700 font-semibold'
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
            <h2 className="text-3xl font-bold text-pink-700 mb-6">Descripción General del Curso</h2>
            <Chart data={chartData} />
          </div>
        )}

        {['unit-7', 'unit-8', 'unit-9'].map(unitId => {
          if (activeTab !== unitId) return null
          
          const unitNumber = unitId.split('-')[1]
          const unitData = {
            '7': { title: '👔 Unit 7: PROFESSIONAL', subtitle: 'Career Development & Skills', vocab: vocab.u7, quiz: quizzes.u7, color: 'pink' },
            '8': { title: '🎯 Unit 8: ADVANCED', subtitle: 'Complex Concepts & Mastery', vocab: vocab.u8, quiz: quizzes.u8, color: 'pink' },
            '9': { title: '📚 Unit 9: TOPICS', subtitle: 'Specialized Subjects & Theory', vocab: vocab.u9, quiz: quizzes.u9, color: 'pink' }
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