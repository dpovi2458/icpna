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
    { es: 'Correo Electrónico', en: 'Email address' },
    { es: 'Amigo/a', en: 'Friend' },
    { es: 'Programa de TV', en: 'TV show' },
    { es: 'Deporte', en: 'Sport' },
    { es: 'Música', en: 'Music' },
  ],
  u2: [
    { es: 'País', en: 'Country' },
    { es: 'Nacionalidad', en: 'Nationality' },
    { es: 'Ciudad', en: 'City' },
    { es: 'Grande', en: 'Big' },
    { es: 'Pequeño', en: 'Small' },
    { es: 'Viejo', en: 'Old' },
    { es: 'Concurrido', en: 'Busy' },
    { es: 'Interesante', en: 'Interesting' },
    { es: 'Hermoso', en: 'Beautiful' },
  ],
  u3: [
    { es: 'Regalo', en: 'Gift' },
    { es: 'Objeto', en: 'Possession' },
    { es: 'Audífonos', en: 'Headphones' },
    { es: 'Cámara', en: 'Camera' },
    { es: 'Reloj', en: 'Watch' },
    { es: 'Llaves', en: 'Keys' },
    { es: 'Barato', en: 'Cheap' },
    { es: 'Caro', en: 'Expensive' },
    { es: 'Importante', en: 'Important' },
  ]
}

const quizzes = {
  u1: [
    { q: '___ you a student?', a: 'Are' },
    { q: "What's ___ favorite sport? (tu)", a: 'your' },
    { q: '___ he from Peru?', a: 'Is' },
    { q: '___ name is Maria. (de ella)', a: 'Her' },
    { q: 'They ___ friends.', a: 'are' },
  ],
  u2: [
    { q: '___ are you from?', a: 'Where' },
    { q: '___ is he? (persona)', a: 'Who' },
    { q: 'I am from Peru. I am ___', a: 'Peruvian' },
    { q: 'The city is old and ___ (hermosa)', a: 'beautiful' },
    { q: "What's your city ___? (cómo es)", a: 'like' },
  ],
  u3: [
    { q: 'One book, two ___', a: 'books' },
    { q: 'One watch, two ___', a: 'watches' },
    { q: 'One country, two ___', a: 'countries' },
    { q: '___ is my phone. (cerca, singular)', a: 'This' },
    { q: '___ are my keys. (cerca, plural)', a: 'These' },
    { q: '___ is your car. (lejos, singular)', a: 'That' },
    { q: '___ are new shoes. (lejos, plural)', a: 'Those' },
  ]
}

export default function Basic1() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeUnit, setActiveUnit] = useState<{[key: string]: string}>({
    'unit-1': 'grammar',
    'unit-2': 'grammar', 
    'unit-3': 'grammar'
  })

  const chartData = {
    labels: ['Unidad 1: Introductions', 'Unidad 2: Countries', 'Unidad 3: Possessions'],
    datasets: [{
      label: 'Conceptos Clave (Gramática + Vocab)',
      data: [
        vocab.u1.length + 2,
        vocab.u2.length + 2,
        vocab.u3.length + 2
      ],
      backgroundColor: [
        'rgba(6, 182, 212, 0.6)',
        'rgba(8, 145, 178, 0.6)',
        'rgba(20, 83, 100, 0.6)'
      ],
      borderColor: [
        '#06B6D4',
        '#0891B2',
        '#145364'
      ],
      borderWidth: 1
    }]
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      <header className="text-center mb-8">
        <Link href="/" className="inline-block mb-4 text-cyan-600 hover:text-cyan-700">
          ← Volver al inicio
        </Link>
        <h1 className="text-4xl font-bold text-stone-700 mb-2">Resumen Interactivo: Basic 1</h1>
        <p className="text-lg text-stone-600">Una herramienta de estudio para las Unidades 1-3</p>
      </header>

      <nav className="flex justify-center space-x-2 md:space-x-4 mb-8 border-b border-stone-300 pb-4">
        {[
          { id: 'overview', label: 'Descripción General' },
          { id: 'unit-1', label: 'Unidad 1' },
          { id: 'unit-2', label: 'Unidad 2' },
          { id: 'unit-3', label: 'Unidad 3' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm md:text-base font-medium py-2 px-3 md:px-5 rounded-lg border-2 transition-all ${
              activeTab === tab.id
                ? 'border-cyan-500 bg-cyan-50 text-cyan-700 font-semibold'
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
            <h2 className="text-2xl font-bold text-cyan-700 mb-4">Bienvenido a tu Resumen Interactivo</h2>
            <p className="text-stone-700 mb-6">
              Esta aplicación convierte tu ficha de resumen en una herramienta de estudio. En lugar de solo leer, podrás explorar los conceptos clave, practicar el vocabulario con tarjetas interactivas y probar tu conocimiento de la gramática con pequeños ejercicios.
            </p>
            <p className="text-stone-700 mb-6">
              Usa las pestañas de navegación de arriba para seleccionar una unidad y comenzar. La siguiente gráfica muestra los conceptos clave que se cubren en cada unidad.
            </p>
            <Chart data={chartData} />
          </div>
        )}

        {['unit-1', 'unit-2', 'unit-3'].map(unitId => {
          if (activeTab !== unitId) return null
          
          const unitNumber = unitId.split('-')[1]
          const unitData = {
            '1': { title: 'Unidad 1: Introductions', subtitle: 'Saludos, información personal y favoritos', vocab: vocab.u1, quiz: quizzes.u1 },
            '2': { title: 'Unidad 2: Countries', subtitle: 'Países, nacionalidades y descripción de ciudades', vocab: vocab.u2, quiz: quizzes.u2 },
            '3': { title: 'Unidad 3: Possessions', subtitle: 'Regalos, objetos y descripciones de objetos', vocab: vocab.u3, quiz: quizzes.u3 }
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
                        ? 'bg-cyan-500 text-white'
                        : 'bg-stone-200 text-stone-700 hover:bg-cyan-500 hover:text-white'
                    }`}
                  >
                    {subTab.label}
                  </button>
                ))}
              </div>

              {activeUnit[unitId] === 'grammar' && (
                <div>
                  <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Gramática</h3>
                  {unitNumber === '1' && (
                    <div>
                      <h4 className="text-lg font-semibold text-stone-700 mt-4 mb-2">Pronombres de Sujeto y Adjetivos Posesivos</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border border-stone-300 rounded-md">
                          <thead className="bg-stone-100">
                            <tr>
                              <th className="p-3 text-left font-semibold text-stone-600">Pronombre de Sujeto</th>
                              <th className="p-3 text-left font-semibold text-stone-600">Ejemplo</th>
                              <th className="p-3 text-left font-semibold text-stone-600">Adjetivo Posesivo</th>
                              <th className="p-3 text-left font-semibold text-stone-600">Ejemplo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-stone-200">
                              <td className="p-3">I</td>
                              <td className="p-3">I am a student.</td>
                              <td className="p-3">my</td>
                              <td className="p-3">My name is...</td>
                            </tr>
                            <tr className="border-t border-stone-200 bg-stone-50">
                              <td className="p-3">you</td>
                              <td className="p-3">You are tall.</td>
                              <td className="p-3">your</td>
                              <td className="p-3">What's your name?</td>
                            </tr>
                            <tr className="border-t border-stone-200">
                              <td className="p-3">he</td>
                              <td className="p-3">He is my friend.</td>
                              <td className="p-3">his</td>
                              <td className="p-3">His last name is...</td>
                            </tr>
                            <tr className="border-t border-stone-200 bg-stone-50">
                              <td className="p-3">she</td>
                              <td className="p-3">She is from Peru.</td>
                              <td className="p-3">her</td>
                              <td className="p-3">Her email is...</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  {/* Agregar más contenido de gramática para otras unidades */}
                </div>
              )}

              {activeUnit[unitId] === 'vocab' && (
                <Flashcard data={unitData.vocab} accentColor="cyan" />
              )}

              {activeUnit[unitId] === 'practice' && (
                <Quiz questions={unitData.quiz} accentColor="cyan" title="Práctica: Completa la Oración" />
              )}
            </div>
          )
        })}
      </main>
    </div>
  )
}