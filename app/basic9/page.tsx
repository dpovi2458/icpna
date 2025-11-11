'use client'

import { useState } from 'react'
import Link from 'next/link'
import Chart from '@/components/Chart'
import Flashcard from '@/components/Flashcard'
import Quiz from '@/components/Quiz'

const vocab = {
  u1: [
    { es: 'Gramática avanzada', en: 'Advanced grammar' },
    { es: 'Estructura', en: 'Structure' },
    { es: 'Sintaxis', en: 'Syntax' },
    { es: 'Conjugación', en: 'Conjugation' },
    { es: 'Tiempo verbal', en: 'Tense' },
    { es: 'Subjuntivo', en: 'Subjunctive' },
    { es: 'Condicional', en: 'Conditional' },
    { es: 'Pasiva', en: 'Passive voice' }
  ],
  u2: [
    { es: 'Comunicación', en: 'Communication' },
    { es: 'Conversación', en: 'Conversation' },
    { es: 'Debate', en: 'Debate' },
    { es: 'Presentación', en: 'Presentation' },
    { es: 'Discusión', en: 'Discussion' },
    { es: 'Argumento', en: 'Argument' },
    { es: 'Opinión', en: 'Opinion' },
    { es: 'Punto de vista', en: 'Point of view' }
  ],
  u3: [
    { es: 'Expresión', en: 'Expression' },
    { es: 'Idioma', en: 'Language' },
    { es: 'Fluidez', en: 'Fluency' },
    { es: 'Pronunciación', en: 'Pronunciation' },
    { es: 'Acento', en: 'Accent' },
    { es: 'Entonación', en: 'Intonation' },
    { es: 'Ritmo', en: 'Rhythm' },
    { es: 'Claridad', en: 'Clarity' }
  ]
}

const quizzes = {
  u1: [
    { q: 'The passive voice uses ___', a: 'be' },
    { q: 'If I ___ rich, I would travel', a: 'were' },
    { q: 'She suggested that he ___ early', a: 'leave' }
  ],
  u2: [
    { q: 'In my ___, this is correct', a: 'opinion' },
    { q: 'Let\'s have a ___ about this topic', a: 'discussion' },
    { q: 'Can you give a ___?', a: 'presentation' }
  ],
  u3: [
    { q: 'She speaks with perfect ___', a: 'fluency' },
    { q: 'Your ___ is very clear', a: 'pronunciation' },
    { q: 'He has a British ___', a: 'accent' }
  ]
}

export default function Basic9() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeUnit, setActiveUnit] = useState<{[key: string]: string}>({
    'unit-1': 'grammar',
    'unit-2': 'grammar', 
    'unit-3': 'grammar'
  })

  const chartData = {
    labels: ['Unit 1: Advanced Grammar', 'Unit 2: Communication', 'Unit 3: Expression'],
    datasets: [{
      label: 'Conceptos principales',
      data: [8, 8, 8],
      backgroundColor: [
        'rgba(249, 115, 22, 0.7)',
        'rgba(234, 88, 12, 0.7)',
        'rgba(194, 65, 12, 0.7)'
      ],
      borderColor: [
        'rgb(249, 115, 22)',
        'rgb(234, 88, 12)',
        'rgb(194, 65, 12)'
      ],
      borderWidth: 2
    }]
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      <header className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-orange-600 hover:text-orange-700">
          ← Volver al inicio
        </Link>
        <h1 className="text-4xl font-bold text-stone-700 mb-2">📚 World Link Basic 9</h1>
        <p className="text-lg text-stone-600">Units 1-3: Advanced Grammar, Communication</p>
      </header>

      <nav className="flex justify-center space-x-2 md:space-x-4 mb-8 border-b border-stone-300 pb-4">
        {[
          { id: 'overview', label: '📊 General' },
          { id: 'unit-1', label: '📝 Unit 1' },
          { id: 'unit-2', label: '💬 Unit 2' },
          { id: 'unit-3', label: '🗣️ Unit 3' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm md:text-base font-medium py-2 px-3 md:px-5 rounded-lg border-2 transition-all ${
              activeTab === tab.id
                ? 'border-orange-500 bg-orange-50 text-orange-700 font-semibold'
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
            <h2 className="text-3xl font-bold text-orange-700 mb-6">Descripción General del Curso</h2>
            <Chart data={chartData} />
          </div>
        )}

        {['unit-1', 'unit-2', 'unit-3'].map(unitId => {
          if (activeTab !== unitId) return null
          
          const unitNumber = unitId.split('-')[1]
          const unitData = {
            '1': { title: '📝 Unit 1: ADVANCED GRAMMAR', subtitle: 'Complex Structures & Rules', vocab: vocab.u1, quiz: quizzes.u1, color: 'orange' },
            '2': { title: '💬 Unit 2: COMMUNICATION', subtitle: 'Effective Speaking & Listening', vocab: vocab.u2, quiz: quizzes.u2, color: 'orange' },
            '3': { title: '🗣️ Unit 3: EXPRESSION', subtitle: 'Fluency & Pronunciation', vocab: vocab.u3, quiz: quizzes.u3, color: 'orange' }
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