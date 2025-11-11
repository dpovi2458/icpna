'use client'

import { useState } from 'react'
import Link from 'next/link'
import Chart from '@/components/Chart'
import Flashcard from '@/components/Flashcard'
import Quiz from '@/components/Quiz'

const vocab = {
  u7: [
    { es: 'Despertarse', en: 'Wake up' },
    { es: 'Ducharse', en: 'Take a shower' },
    { es: 'Vestirse', en: 'Get dressed' },
    { es: 'Desayunar', en: 'Have breakfast' },
    { es: 'Salir de casa', en: 'Leave home' },
    { es: 'Cepillarse los dientes', en: 'Brush teeth' },
    { es: 'Ir a bailar', en: 'Go dancing' },
    { es: 'Ir de compras', en: 'Go shopping' },
    { es: 'Ir al cine', en: 'Go to the movies' },
    { es: 'Dar un paseo', en: 'Go for a walk' },
    { es: 'Salir con amigos', en: 'Go out with friends' }
  ],
  u8: [
    { es: 'Enero', en: 'January' },
    { es: 'Febrero', en: 'February' },
    { es: 'Marzo', en: 'March' },
    { es: 'Abril', en: 'April' },
    { es: 'Mayo', en: 'May' },
    { es: 'Junio', en: 'June' },
    { es: 'Julio', en: 'July' },
    { es: 'Agosto', en: 'August' },
    { es: 'Septiembre', en: 'September' },
    { es: 'Octubre', en: 'October' },
    { es: 'Noviembre', en: 'November' },
    { es: 'Diciembre', en: 'December' }
  ],
  u9: [
    { es: 'Lavar la ropa', en: 'Do the laundry' },
    { es: 'Lavar los platos', en: 'Wash the dishes' },
    { es: 'Hacer la cama', en: 'Make the bed' },
    { es: 'Limpiar el cuarto', en: 'Clean the room' },
    { es: 'Sacar la basura', en: 'Empty the trash' },
    { es: 'Hacer las compras', en: 'Do the grocery shopping' },
    { es: 'Siempre', en: 'Always' },
    { es: 'Usualmente', en: 'Usually' },
    { es: 'A menudo', en: 'Often' },
    { es: 'A veces', en: 'Sometimes' },
    { es: 'Casi nunca', en: 'Hardly ever' },
    { es: 'Nunca', en: 'Never' }
  ]
}

const quizzes = {
  u7: [
    { q: 'The party is ___ Friday.', a: 'on' },
    { q: 'My birthday is ___ August.', a: 'in' },
    { q: 'The class starts ___ 9:00 AM.', a: 'at' },
    { q: 'I work ___ Monday ___ Friday.', a: 'from to' },
    { q: 'He wakes up ___ the morning.', a: 'in' }
  ],
  u8: [
    { q: '1 (ordinal)', a: 'first' },
    { q: '2 (ordinal)', a: 'second' },
    { q: '3 (ordinal)', a: 'third' },
    { q: '5 (ordinal)', a: 'fifth' },
    { q: '21 (ordinal)', a: 'twenty-first' }
  ],
  u9: [
    { q: 'Él (siempre) se levanta temprano. (He ___ gets up early)', a: 'always' },
    { q: 'Ella está (nunca) triste. (She is ___ sad)', a: 'never' },
    { q: 'Yo (a veces) veo TV. (I ___ watch TV)', a: 'sometimes' },
    { q: 'Ellos (casi nunca) estudian. (They ___ study)', a: 'hardly ever' }
  ]
}

export default function Basic3() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeUnit, setActiveUnit] = useState<{[key: string]: string}>({
    'unit-7': 'grammar',
    'unit-8': 'grammar', 
    'unit-9': 'grammar'
  })

  const chartData = {
    labels: ['Unidad 7: Time', 'Unidad 8: Special Occasions', 'Unidad 9: Come Together'],
    datasets: [{
      label: 'Conceptos Clave (Gramática + Vocab)',
      data: [
        vocab.u7.length + 2,
        vocab.u8.length + 2,
        vocab.u9.length + 2
      ],
      backgroundColor: [
        'rgba(16, 185, 129, 0.6)',
        'rgba(5, 150, 105, 0.6)',
        'rgba(6, 95, 70, 0.6)'
      ],
      borderColor: [
        '#10B981',
        '#059669',
        '#065F46'
      ],
      borderWidth: 1
    }]
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      <header className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-emerald-600 hover:text-emerald-700">
          ← Volver al inicio
        </Link>
        <h1 className="text-4xl font-bold text-stone-700 mb-2">Resumen Interactivo: Basic 3</h1>
        <p className="text-lg text-stone-600">Una herramienta de estudio para las Unidades 7, 8 y 9</p>
      </header>

      <nav className="flex justify-center space-x-2 md:space-x-4 mb-8 border-b border-stone-300 pb-4">
        {[
          { id: 'overview', label: 'Descripción General' },
          { id: 'unit-7', label: 'Unidad 7' },
          { id: 'unit-8', label: 'Unidad 8' },
          { id: 'unit-9', label: 'Unidad 9' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm md:text-base font-medium py-2 px-3 md:px-5 rounded-lg border-2 transition-all ${
              activeTab === tab.id
                ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-semibold'
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
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">Bienvenido a tu Resumen (Parte 3)</h2>
            <p className="text-stone-700 mb-6">
              Esta aplicación cubre las unidades 7, 8 y 9, basándose en la información de tu curso. Aquí encontrarás los temas de gramática, vocabulario y práctica para "Time", "Special Occasions" y "Come Together".
            </p>
            <Chart data={chartData} />
          </div>
        )}

        {['unit-7', 'unit-8', 'unit-9'].map(unitId => {
          if (activeTab !== unitId) return null
          
          const unitNumber = unitId.split('-')[1]
          const unitData = {
            '7': { title: 'Unidad 7: Time (Tiempo)', subtitle: 'Rutinas diarias, decir la hora y preposiciones de tiempo', vocab: vocab.u7, quiz: quizzes.u7 },
            '8': { title: 'Unidad 8: Special Occasions', subtitle: 'Meses, fechas, números ordinales y festivales', vocab: vocab.u8, quiz: quizzes.u8 },
            '9': { title: 'Unidad 9: Come Together', subtitle: 'Tareas domésticas, adverbios de frecuencia y disculpas', vocab: vocab.u9, quiz: quizzes.u9 }
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
                        ? 'bg-emerald-500 text-white'
                        : 'bg-stone-200 text-stone-700 hover:bg-emerald-500 hover:text-white'
                    }`}
                  >
                    {subTab.label}
                  </button>
                ))}
              </div>

              {activeUnit[unitId] === 'vocab' && (
                <Flashcard data={unitData.vocab} accentColor="emerald" />
              )}

              {activeUnit[unitId] === 'practice' && (
                <Quiz questions={unitData.quiz} accentColor="emerald" />
              )}

              {activeUnit[unitId] === 'grammar' && (
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Gramática</h3>
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