import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dale English - Resúmenes Interactivos',
  description: 'Herramientas de estudio interactivas para aprender inglés',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-stone-50 font-sans text-stone-800 antialiased">
        {children}
      </body>
    </html>
  )
}