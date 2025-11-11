'use client'

import { useState } from 'react'

interface FlashcardData {
  es: string
  en: string
}

interface FlashcardProps {
  data: FlashcardData[]
  accentColor?: string
}

export default function Flashcard({ data, accentColor = 'cyan' }: FlashcardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length)
    setIsFlipped(false)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length)
    setIsFlipped(false)
  }

  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  if (!data || data.length === 0) return null

  const currentCard = data[currentIndex]

  return (
    <div className="bg-gradient-to-r from-stone-50 to-stone-100 p-6 rounded-lg">
      <h4 className={`text-lg font-semibold text-${accentColor}-700 mb-4`}>
        🎴 Flashcards - Practica el vocabulario
      </h4>
      
      <div 
        className={`flashcard relative w-full max-w-sm mx-auto h-48 ${isFlipped ? 'is-flipped' : ''}`}
        onClick={flipCard}
      >
        <div className={`flashcard-face absolute w-full h-full bg-white border-2 border-${accentColor}-500 rounded-lg shadow-lg flex items-center justify-center p-4`}>
          <span className="text-3xl font-bold text-stone-700">{currentCard.es}</span>
        </div>
        <div className={`flashcard-face flashcard-back absolute w-full h-full bg-${accentColor}-50 border-2 border-${accentColor}-500 rounded-lg shadow-lg flex items-center justify-center p-4`}>
          <span className={`text-3xl font-bold text-${accentColor}-700`}>{currentCard.en}</span>
        </div>
      </div>

      <div className="flex justify-between max-w-sm mx-auto mt-6">
        <button 
          onClick={prevCard}
          className="py-2 px-5 bg-stone-300 text-stone-700 font-semibold rounded-lg shadow hover:bg-stone-400"
        >
          ← Anterior
        </button>
        <button 
          onClick={nextCard}
          className={`py-2 px-5 bg-${accentColor}-600 text-white font-semibold rounded-lg shadow hover:bg-${accentColor}-700`}
        >
          Siguiente →
        </button>
      </div>
      
      <p className="text-center mt-3 text-stone-600">
        {currentIndex + 1} / {data.length}
      </p>
    </div>
  )
}