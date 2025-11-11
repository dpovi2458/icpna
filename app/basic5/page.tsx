'use client'

import { useState } from 'react'
import Link from 'next/link'
import Chart from '@/components/Chart'
import Flashcard from '@/components/Flashcard'
import Quiz from '@/components/Quiz'

const vocab = {
  u1: [
    { es: 'Nombre', en: 'First name' },
    { es: 'Apellido', en: 'Last name' },
    { es: 'Ciudad natal', en: 'Hometown' },
    { es: 'Joven', en: 'Young' },
    { es: 'Alto/a', en: 'Tall' },
    { es: 'Delgado/a', en: 'Slim' },
    { es: 'Ojos azules', en: 'Blue eyes' },
    { es: 'Cabello largo', en: 'Long hair' },
    { es: 'Cabello rizado', en: 'Curly hair' },
    { es: 'Barba', en: 'Beard' },
    { es: 'Guapo/a', en: 'Good-looking' },
    { es: 'Bigote', en: 'Mustache' }
  ],
  u2: [
    { es: 'Sonriendo', en: 'Smiling' },
    { es: 'Señalando', en: 'Pointing' },
    { es: 'Gritando', en: 'Shouting' },
    { es: 'Saludando', en: 'Waving' },
    { es: 'Hablando', en: 'Talking' },
    { es: 'Caminando', en: 'Walking' },
    { es: 'Corriendo', en: 'Running' },
    { es: 'Sentado/a', en: 'Sitting' },
    { es: 'Feliz', en: 'Happy' },
    { es: 'Enojado', en: 'Angry' },
    { es: 'Triste', en: 'Sad' },
    { es: 'Preocupado', en: 'Worried' }
  ],
  u3: [
    { es: 'Tomate', en: 'Tomato' },
    { es: 'Zanahoria', en: 'Carrot' },
    { es: 'Lechuga', en: 'Lettuce' },
    { es: 'Plátano', en: 'Banana' },
    { es: 'Manzana', en: 'Apple' },
    { es: 'Naranja', en: 'Orange' },
    { es: 'Papa', en: 'Potato' },
    { es: 'Maíz', en: 'Corn' },
    { es: 'Arroz', en: 'Rice' },
    { es: 'Pan', en: 'Bread' },
    { es: 'Carne', en: 'Meat' },
    { es: 'Pescado', en: 'Fish' }
  ]
}

const quizzes = {
  u1: [
    { q: '___ you a student?', a: 'Are' },
    { q: 'What ___ you look like?', a: 'do' },
    { q: 'She ___ blue eyes.', a: 'has' },
    { q: 'He ___ tall.', a: 'is' },
    { q: 'Where ___ you born?', a: 'were' }
  ],
  u2: [
    { q: 'I ___ going to the party.', a: 'am' },
    { q: '___ you studying?', a: 'Are' },
    { q: 'She is ___ happy.', a: 'very' },
    { q: 'My parents love ___.', a: 'me' },
    { q: 'I can help ___.', a: 'you' }
  ],
  u3: [
    { q: 'I need ___ apple.', a: 'an' },
    { q: 'How ___ rice do you want?', a: 'much' },
    { q: 'How ___ apples are there?', a: 'many' },
    { q: 'I don\'t have ___ money.', a: 'much' },
    { q: 'Do we need ___ else?', a: 'anything' }
  ]
}

export default function Basic5() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeUnit, setActiveUnit] = useState<{[key: string]: string}>({
    'unit-1': 'grammar',
    'unit-2': 'grammar', 
    'unit-3': 'grammar'
  })

  const chartData = {
    labels: ['Unit 1: People', 'Unit 2: Behavior', 'Unit 3: Shopping'],
    datasets: [{
      label: 'Conceptos principales',
      data: [10, 9, 8],
      backgroundColor: [
        'rgba(99, 102, 241, 0.7)',
        'rgba(59, 130, 246, 0.7)',
        'rgba(168, 85, 247, 0.7)'
      ],
      borderColor: [
        'rgb(99, 102, 241)',
        'rgb(59, 130, 246)',
        'rgb(168, 85, 247)'
      ],
      borderWidth: 2
    }]
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      <header className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-indigo-600 hover:text-indigo-700">
          ← Volver al inicio
        </Link>
        <h1 className="text-4xl font-bold text-stone-700 mb-2">📚 World Link Basic 5</h1>
        <p className="text-lg text-stone-600">Resumen Interactivo Completo - Units 1, 2, 3</p>
      </header>

      <nav className="flex justify-center space-x-2 md:space-x-4 mb-8 border-b border-stone-300 pb-4">
        {[
          { id: 'overview', label: '📊 General' },
          { id: 'unit-1', label: '👥 Unit 1' },
          { id: 'unit-2', label: '😊 Unit 2' },
          { id: 'unit-3', label: '🛒 Unit 3' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm md:text-base font-medium py-2 px-3 md:px-5 rounded-lg border-2 transition-all ${
              activeTab === tab.id
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700 font-semibold'
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
            <h2 className="text-3xl font-bold text-indigo-700 mb-6">Descripción General del Curso</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">🎯 Objetivos de Aprendizaje</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Intercambiar información personal y hacer presentaciones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Describir apariencia física con be/have</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Hablar sobre acciones en progreso con presente continuo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Expresar sentimientos y usar gestos comunes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Comprar alimentos usando sustantivos contables e incontables</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-3">📈 Distribución de Conceptos</h3>
                <Chart data={chartData} />
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">💡 Resumen por Unidad</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-indigo-600">Unit 1: PEOPLE</h4>
                  <p className="text-gray-700">Información personal, descripción física, presente simple para revisar</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600">Unit 2: BEHAVIOR</h4>
                  <p className="text-gray-700">Acciones en progreso, sentimientos, gestos culturales, saludos mundiales</p>
                </div>
                <div>
                  <h4 className="font-bold text-purple-600">Unit 3: SHOPPING</h4>
                  <p className="text-gray-700">Alimentos, compras, count/noncount nouns, cuantificadores</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {['unit-1', 'unit-2', 'unit-3'].map(unitId => {
          if (activeTab !== unitId) return null
          
          const unitNumber = unitId.split('-')[1]
          const unitData = {
            '1': { title: '👥 Unit 1: PEOPLE', subtitle: 'Getting to Know You & Appearance', vocab: vocab.u1, quiz: quizzes.u1, color: 'indigo' },
            '2': { title: '😊 Unit 2: BEHAVIOR', subtitle: 'Actions & Feelings', vocab: vocab.u2, quiz: quizzes.u2, color: 'blue' },
            '3': { title: '🛒 Unit 3: SHOPPING', subtitle: 'At the Market & Shopping', vocab: vocab.u3, quiz: quizzes.u3, color: 'purple' }
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