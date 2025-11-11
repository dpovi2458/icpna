'use client'

import { useState } from 'react'
import Link from 'next/link'
import Chart from '@/components/Chart'
import Flashcard from '@/components/Flashcard'
import Quiz from '@/components/Quiz'

const vocab = {
  u10: [
    { es: 'Sala de estar', en: 'Living room' },
    { es: 'Comedor', en: 'Dining room' },
    { es: 'Cocina', en: 'Kitchen' },
    { es: 'Dormitorio', en: 'Bedroom' },
    { es: 'Baño', en: 'Bathroom' },
    { es: 'Balcón', en: 'Balcony' },
    { es: 'Garaje', en: 'Garage' },
    { es: 'Escaleras', en: 'Stairs' },
    { es: 'Silla', en: 'Chair' },
    { es: 'Sofá', en: 'Sofa' }
  ],
  u11: [
    { es: 'Camiseta', en: 'T-shirt' },
    { es: 'Pantalones', en: 'Jeans' },
    { es: 'Vestido', en: 'Dress' },
    { es: 'Camisa', en: 'Shirt' },
    { es: 'Chaqueta', en: 'Jacket' },
    { es: 'Zapatos', en: 'Shoes' },
    { es: 'Zapatillas', en: 'Sneakers' },
    { es: 'Botas', en: 'Boots' },
    { es: 'Gorra', en: 'Hat' },
    { es: 'Bufanda', en: 'Scarf' }
  ],
  u12: [
    { es: 'Médico', en: 'Doctor' },
    { es: 'Programador', en: 'Programmer' },
    { es: 'Abogado', en: 'Lawyer' },
    { es: 'Enfermera', en: 'Nurse' },
    { es: 'Empresario', en: 'Businessperson' },
    { es: 'Policía', en: 'Police officer' },
    { es: 'Estilista', en: 'Hairstylist' },
    { es: 'Diseñador web', en: 'Web designer' },
    { es: 'Repartidor', en: 'Delivery person' },
    { es: 'Azafata', en: 'Flight attendant' }
  ]
}

const quizzes = {
  u10: [
    { q: 'There ___ a sofa in the living room.', a: 'is' },
    { q: 'There ___ two windows.', a: 'are' },
    { q: '___ there a balcony?', a: 'Is' },
    { q: 'The room is ___ dark. (muy)', a: 'very' },
    { q: 'It\'s ___ small for four people. (demasiado)', a: 'too' }
  ],
  u11: [
    { q: 'I ___ to buy new shoes.', a: 'want' },
    { q: 'I ___ to work tomorrow.', a: 'have' },
    { q: 'How much ___ it?', a: 'is' },
    { q: 'I need ___ new jacket.', a: 'a' },
    { q: 'I want ___ money.', a: 'some' }
  ],
  u12: [
    { q: 'I ___ speak English.', a: 'can' },
    { q: '___ you drive?', a: 'Can' },
    { q: 'She ___ speak Japanese.', a: 'can\'t' },
    { q: 'What ___ your job like?', a: 'is' },
    { q: 'What do you ___?', a: 'do' }
  ]
}

export default function Basic4() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeUnit, setActiveUnit] = useState<{[key: string]: string}>({
    'unit-10': 'grammar',
    'unit-11': 'grammar', 
    'unit-12': 'grammar'
  })

  const chartData = {
    labels: ['Unit 10: Home', 'Unit 11: Clothing', 'Unit 12: Jobs'],
    datasets: [{
      label: 'Conceptos principales',
      data: [8, 7, 9],
      backgroundColor: [
        'rgba(147, 51, 234, 0.7)',
        'rgba(236, 72, 153, 0.7)',
        'rgba(34, 197, 94, 0.7)'
      ],
      borderColor: [
        'rgb(147, 51, 234)',
        'rgb(236, 72, 153)',
        'rgb(34, 197, 94)'
      ],
      borderWidth: 2
    }]
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      <header className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-purple-600 hover:text-purple-700">
          ← Volver al inicio
        </Link>
        <h1 className="text-4xl font-bold text-stone-700 mb-2">📚 World Link Basic 4</h1>
        <p className="text-lg text-stone-600">Resumen Interactivo Completo - Units 10, 11, 12</p>
      </header>

      <nav className="flex justify-center space-x-2 md:space-x-4 mb-8 border-b border-stone-300 pb-4">
        {[
          { id: 'overview', label: '📊 General' },
          { id: 'unit-10', label: '🏠 Unit 10' },
          { id: 'unit-11', label: '👕 Unit 11' },
          { id: 'unit-12', label: '💼 Unit 12' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm md:text-base font-medium py-2 px-3 md:px-5 rounded-lg border-2 transition-all ${
              activeTab === tab.id
                ? 'border-purple-500 bg-purple-50 text-purple-700 font-semibold'
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
            <h2 className="text-3xl font-bold text-purple-700 mb-6">Descripción General del Curso</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-3">🎯 Objetivos de Aprendizaje</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Describir lugares y habitaciones usando there is/are</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Comprar ropa y hablar de precios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Expresar deseos y necesidades con want to/have to</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Preguntar y responder sobre trabajos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Describir habilidades con can/can't</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-3">📈 Distribución de Conceptos</h3>
                <Chart data={chartData} />
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">💡 Resumen por Unidad</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-purple-600">Unit 10: HOME</h4>
                  <p className="text-gray-700">Vocabulario de habitaciones, colores, gramática de there is/are y very/too</p>
                </div>
                <div>
                  <h4 className="font-bold text-pink-600">Unit 11: CLOTHING</h4>
                  <p className="text-gray-700">Ropa, accesorios, shopping phrases, sustantivos contables/incontables</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-600">Unit 12: JOBS</h4>
                  <p className="text-gray-700">Profesiones, habilidades con can/can't, metas laborales</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {['unit-10', 'unit-11', 'unit-12'].map(unitId => {
          if (activeTab !== unitId) return null
          
          const unitNumber = unitId.split('-')[1]
          const unitData = {
            '10': { title: '🏠 Unit 10: HOME', subtitle: 'Small Spaces, Small Ideas', vocab: vocab.u10, quiz: quizzes.u10, color: 'purple' },
            '11': { title: '👕 Unit 11: CLOTHING', subtitle: 'Street Style & Shopping', vocab: vocab.u11, quiz: quizzes.u11, color: 'pink' },
            '12': { title: '💼 Unit 12: JOBS', subtitle: 'Career Day & Work Goals', vocab: vocab.u12, quiz: quizzes.u12, color: 'green' }
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