'use client'

import { useState } from 'react'

interface QuizQuestion {
  q: string
  a: string
}

interface QuizProps {
  questions: QuizQuestion[]
  accentColor?: string
  title?: string
}

export default function Quiz({ questions, accentColor = 'cyan', title = 'Práctica - Quiz' }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [showNext, setShowNext] = useState(false)

  const checkAnswer = () => {
    const correct = userAnswer.trim().toLowerCase() === questions[currentIndex].a.toLowerCase()
    setIsCorrect(correct)
    
    if (correct) {
      setFeedback('¡Correcto!')
      setScore(prev => prev + 1)
      setShowNext(currentIndex < questions.length - 1)
    } else {
      setFeedback(`Incorrecto. La respuesta es: ${questions[currentIndex].a}`)
      setShowNext(currentIndex < questions.length - 1)
    }
  }

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setUserAnswer('')
      setFeedback('')
      setIsCorrect(null)
      setShowNext(false)
    }
  }

  const resetQuiz = () => {
    setCurrentIndex(0)
    setUserAnswer('')
    setFeedback('')
    setIsCorrect(null)
    setScore(0)
    setShowNext(false)
  }

  if (!questions || questions.length === 0) return null

  const isCompleted = currentIndex === questions.length - 1 && isCorrect !== null

  return (
    <div className="bg-gradient-to-r from-stone-50 to-stone-100 p-6 rounded-lg">
      <h3 className={`text-2xl font-semibold text-${accentColor}-700 mb-4`}>🎯 {title}</h3>
      
      {!isCompleted ? (
        <div className="space-y-4 max-w-md mx-auto">
          <div>
            <p className="text-lg font-semibold mb-4">
              Pregunta {currentIndex + 1} de {questions.length}:
            </p>
            <p className="text-xl mb-4 text-center">{questions[currentIndex].q}</p>
            
            <div className="flex space-x-2">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className={`flex-grow p-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-${accentColor}-500`}
                placeholder="Escribe tu respuesta..."
                disabled={isCorrect !== null}
                onKeyPress={(e) => e.key === 'Enter' && isCorrect === null && checkAnswer()}
              />
              {isCorrect === null && (
                <button
                  onClick={checkAnswer}
                  className={`py-2 px-5 bg-${accentColor}-600 text-white font-semibold rounded-lg shadow hover:bg-${accentColor}-700`}
                >
                  Verificar
                </button>
              )}
            </div>
            
            {feedback && (
              <p className={`mt-2 text-center font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {feedback}
              </p>
            )}
          </div>
          
          {showNext && (
            <button
              onClick={nextQuestion}
              className="w-full py-2 px-5 bg-stone-600 text-white font-semibold rounded-lg shadow hover:bg-stone-700"
            >
              Siguiente Pregunta
            </button>
          )}
        </div>
      ) : (
        <div className="text-center space-y-4">
          <h4 className="text-2xl font-bold text-green-600">¡Quiz Completado!</h4>
          <p className="text-xl">
            Puntaje final: <span className="font-bold text-green-600">{score}</span> / {questions.length}
          </p>
          <button
            onClick={resetQuiz}
            className={`py-2 px-6 bg-${accentColor}-600 text-white font-semibold rounded-lg shadow hover:bg-${accentColor}-700`}
          >
            Reiniciar Quiz
          </button>
        </div>
      )}
      
      <p className="mt-4 text-gray-600 text-center">
        Puntaje: <span className={`font-bold text-${accentColor}-600`}>{score}</span> / {questions.length}
      </p>
    </div>
  )
}