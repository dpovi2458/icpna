'use client'

import { useState } from 'react'
import Link from 'next/link'
import Chart from '@/components/Chart'
import Flashcard from '@/components/Flashcard'
import Quiz from '@/components/Quiz'

const vocab = {
  u4: [
    { es: 'Familia', en: 'Family' },
    { es: 'Madre', en: 'Mother' },
    { es: 'Padre', en: 'Father' },
    { es: 'Hermano', en: 'Brother' },
    { es: 'Hermana', en: 'Sister' },
    { es: 'Amigos', en: 'Friends' },
    { es: 'Siempre', en: 'Always' },
    { es: 'Usualmente', en: 'Usually' },
    { es: 'A veces', en: 'Sometimes' },
    { es: 'Casi nunca', en: 'Hardly ever' },
    { es: 'Nunca', en: 'Never' },
  ],
  u5: [
    { es: 'Casa', en: 'Home / House' },
    { es: 'Sala', en: 'Living room' },
    { es: 'Cocina', en: 'Kitchen' },
    { es: 'Dormitorio', en: 'Bedroom' },
    { es: 'Baño', en: 'Bathroom' },
    { es: 'En / Dentro de', en: 'in' },
    { es: 'Sobre / En', en: 'on' },
    { es: 'Debajo de', en: 'under' },
    { es: 'Al lado de', en: 'next to' },
    { es: 'Detrás de', en: 'behind' },
  ],
  u6: [
    { es: 'Comida', en: 'Food' },
    { es: 'Manzana', en: 'Apple' },
    { es: 'Arroz', en: 'Rice' },
    { es: 'Agua', en: 'Water' },
    { es: 'Leche', en: 'Milk' },
    { es: 'Galleta', en: 'Cookie' },
    { es: 'Jugo', en: 'Juice' },
    { es: 'Dinero', en: 'Money' },
    { es: 'Fruta', en: 'Fruit' },
    { es: 'Mucho/s', en: 'A lot of / Lots of' },
  ]
}

const quizzes = {
  u4: [
    { q: "She (work) ___ in an office.", a: 'works' },
    { q: "He (study) ___ English.", a: 'studies' },
    { q: "My father (have) ___ a car.", a: 'has' },
    { q: "It (go) ___ very fast.", a: 'goes' },
    { q: "The class (watch) ___ movies.", a: 'watches' },
    { q: "He ___ (nunca) eats vegetables.", a: 'never' },
    { q: "___ time does the movie start?", a: 'What' },
  ],
  u5: [
    { q: 'There ___ a sofa in the living room.', a: 'is' },
    { q: 'There ___ two chairs.', a: 'are' },
    { q: '___ there a bathroom?', a: 'Is' },
    { q: 'Are there ___ students?', a: 'any' },
    { q: "There aren't ___ windows.", a: 'any' },
    { q: 'There are ___ books on the table.', a: 'some' },
    { q: 'The cat is ___ the table.', a: 'under' },
  ],
  u6: [
    { q: 'How ___ apples are there?', a: 'many' },
    { q: 'How ___ water do you drink?', a: 'much' },
    { q: 'How ___ money do you have?', a: 'much' },
    { q: 'How ___ cookies did you eat?', a: 'many' },
    { q: 'There is ___ of rice.', a: 'a lot' },
    { q: 'We need ___ (algunas) tomatoes.', a: 'some' },
  ]
}

export default function Basic2() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeUnit, setActiveUnit] = useState<{[key: string]: string}>({
    'unit-4': 'grammar',
    'unit-5': 'grammar', 
    'unit-6': 'grammar'
  })

  const chartData = {
    labels: ['Unidad 4: Family', 'Unidad 5: At Home', 'Unidad 6: Food'],
    datasets: [{
      label: 'Conceptos Clave (Gramática + Vocab)',
      data: [
        vocab.u4.length + 3,
        vocab.u5.length + 3,
        vocab.u6.length + 3
      ],
      backgroundColor: [
        'rgba(245, 158, 11, 0.6)',
        'rgba(217, 119, 6, 0.6)',
        'rgba(180, 83, 9, 0.6)'
      ],
      borderColor: [
        '#F59E0B',
        '#D97706',
        '#B45309'
      ],
      borderWidth: 1
    }]
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      <header className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-amber-600 hover:text-amber-700">
          ← Volver al inicio
        </Link>
        <h1 className="text-4xl font-bold text-stone-700 mb-2">Resumen Interactivo: Basic 2</h1>
        <p className="text-lg text-stone-600">Una herramienta de estudio para las Unidades 4, 5 y 6</p>
      </header>

      <nav className="flex justify-center space-x-2 md:space-x-4 mb-8 border-b border-stone-300 pb-4">
        {[
          { id: 'overview', label: 'Descripción General' },
          { id: 'unit-4', label: 'Unidad 4' },
          { id: 'unit-5', label: 'Unidad 5' },
          { id: 'unit-6', label: 'Unidad 6' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm md:text-base font-medium py-2 px-3 md:px-5 rounded-lg border-2 transition-all ${
              activeTab === tab.id
                ? 'border-amber-500 bg-amber-50 text-amber-700 font-semibold'
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
            <h2 className="text-2xl font-bold text-amber-700 mb-4">Bienvenido a tu Resumen (Parte 2)</h2>
            <p className="text-stone-700 mb-6">
              Esta aplicación cubre las unidades 4, 5 y 6 de tu curso. Al igual que antes, puedes usar las pestañas para explorar la gramática, practicar el vocabulario con tarjetas interactivas y poner a prueba tus conocimientos con ejercicios.
            </p>
            <p className="text-stone-700 mb-6">
              La siguiente gráfica muestra los conceptos clave (temas de gramática y vocabulario) que se cubren en cada una de estas tres unidades.
            </p>
            <Chart data={chartData} />
          </div>
        )}

        {['unit-4', 'unit-5', 'unit-6'].map(unitId => {
          if (activeTab !== unitId) return null
          
          const unitNumber = unitId.split('-')[1]
          const unitData = {
            '4': { title: 'Unidad 4: Family and Friends', subtitle: 'Familia, amigos, presente simple y frecuencia', vocab: vocab.u4, quiz: quizzes.u4 },
            '5': { title: 'Unidad 5: At Home', subtitle: 'Partes de la casa, There is/are, preposiciones', vocab: vocab.u5, quiz: quizzes.u5 },
            '6': { title: 'Unidad 6: Food', subtitle: 'Comida, contables y no contables, How much/many', vocab: vocab.u6, quiz: quizzes.u6 }
          }[unitNumber]!

          return (
            <div key={unitId} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-stone-700 mb-2">{unitData.title}</h2>
              <p className="text-lg text-stone-600 mb-6">{unitData.subtitle}</p>
              
              <div className="flex justify-center space-x-2 mb-6 border-b border-stone-200 pb-4">
                {[
                  { id: 'grammar', label: 'Gramática' },
                  { id: 'vocab', label: 'Vocabulario' },
                  { id: 'practice', label: 'Práctica' }
                ].map(subTab => (
                  <button
                    key={subTab.id}
                    onClick={() => setActiveUnit(prev => ({ ...prev, [unitId]: subTab.id }))}
                    className={`py-2 px-4 rounded-full font-semibold transition-all ${
                      activeUnit[unitId] === subTab.id
                        ? 'bg-amber-500 text-white'
                        : 'bg-stone-200 text-stone-700 hover:bg-amber-500 hover:text-white'
                    }`}
                  >
                    {subTab.label}
                  </button>
                ))}
              </div>

              {activeUnit[unitId] === 'vocab' && (
                <Flashcard data={unitData.vocab} accentColor="amber" />
              )}

              {activeUnit[unitId] === 'practice' && (
                <Quiz questions={unitData.quiz} accentColor="amber" />
              )}

              {activeUnit[unitId] === 'grammar' && (
                <div>
                  <h3 className="text-2xl font-semibold text-amber-700 mb-4">Gramática</h3>
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