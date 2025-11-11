# Dale English - Resúmenes Interactivos

Una aplicación web interactiva para aprender inglés con flashcards, quizzes y contenido estructurado por unidades.

## 🚀 Características

- **Navegación por niveles**: Basic 1, Basic 2, Basic 4
- **Flashcards interactivas**: Para practicar vocabulario
- **Quizzes dinámicos**: Para evaluar conocimientos
- **Gráficos informativos**: Visualización de conceptos por unidad
- **Diseño responsive**: Optimizado para móviles y desktop
- **Routing con Next.js**: Navegación fluida entre páginas

## 🛠️ Tecnologías

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Chart.js** - Gráficos interactivos
- **React Hooks** - Manejo de estado

## 📦 Instalación

1. Instala las dependencias:
\`\`\`bash
npm install
\`\`\`

2. Ejecuta el servidor de desarrollo:
\`\`\`bash
npm run dev
\`\`\`

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🚀 Despliegue en Vercel

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. El despliegue se realizará automáticamente

### Configuración para Vercel

El proyecto está configurado para exportación estática con:
- \`output: 'export'\` en \`next.config.js\`
- Imágenes no optimizadas para compatibilidad
- Trailing slashes habilitados

## 📁 Estructura del Proyecto

\`\`\`
Dale-/
├── app/
│   ├── basic1/
│   │   └── page.tsx
│   ├── basic2/
│   │   └── page.tsx
│   ├── basic4/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Chart.tsx
│   ├── Flashcard.tsx
│   └── Quiz.tsx
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
\`\`\`

## 🎯 Uso

1. **Página Principal**: Navega entre los diferentes niveles de Basic
2. **Cada Nivel**: Contiene múltiples unidades con:
   - **Descripción General**: Gráfico de conceptos por unidad
   - **Gramática**: Tablas con reglas gramaticales
   - **Vocabulario**: Flashcards interactivas
   - **Práctica**: Quizzes con retroalimentación

## 🔧 Scripts Disponibles

- \`npm run dev\` - Servidor de desarrollo
- \`npm run build\` - Construir para producción
- \`npm run start\` - Servidor de producción
- \`npm run lint\` - Linter de código

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🎨 Personalización

Cada nivel tiene su propio esquema de colores:
- **Basic 1**: Cyan/Teal
- **Basic 2**: Amber/Orange
- **Basic 4**: Purple/Pink/Green

## 📄 Licencia

Este proyecto es de uso educativo.