# 📘 Manual de Identidad Visual y Design System — Kaizen Labs

> **Versión:** 1.0  
> **Brand Option:** Option 02 — Cyan Digital & Dark Graphite  
> **Tagline:** Build. Improve. Evolve.  
> **Descriptor:** Software & Digital Products  

---

## 📄 Tabla de Contenidos
1. [Filosofía y Misión de Marca](#1-filosofía-y-misión-de-marca)
2. [Paleta de Colores y Tokens](#2-paleta-de-colores-y-tokens)
3. [Tipografía y Jerarquía Web](#3-tipografía-y-jerarquía-web)
4. [Especificaciones del Logo y Símbolo](#4-especificaciones-del-logo-y-símbolo)
5. [Guía de Componentes UI (Frontend)](#5-guía-de-componentes-ui-frontend)
6. [Estrategia y Plantillas para Redes Sociales](#6-estrategia-y-plantillas-para-redes-sociales)
7. [Configuración Lista para Desarrolladores](#7-configuración-lista-para-desarrolladores)

---

## 1. Filosofía y Misión de Marca

**Kaizen Labs** es una empresa ecuatoriana de ingeniería de software dedicada al desarrollo de productos digitales, plataformas SaaS y aplicaciones web de alta escala.

* **Kaizen (改善):** Principio de mejora continua. Construir → Aprender → Mejorar → Evolucionar.
* **Personalidad:** Precisa, estructurada, moderna, confiable e innovadora.
* **Enfoque de Diseño:** Minimalista y funcional. Evita clichés tecnológicos tradicionales (circuitos recargados, cerebros neón, código genérico).

---

## 2. Paleta de Colores y Tokens

### 2.1 Tabla de Colores Primarios

| Rol de Color | Nombre | Código HEX | RGB | HSL | Uso Principal |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Accent** | Cyan Digital | `#00E5FF` | `0, 229, 255` | `186, 100%, 50%` | Botones CTAs, estado activo, bordes destacados, detalles del logo |
| **Secondary Accent** | Mint Continuous | `#38D996` | `56, 217, 150` | `155, 67%, 54%` | Indicadores de éxito, badges secundarios, métricas de crecimiento |
| **Background Dark** | Charcoal Base | `#0B0D10` | `11, 13, 16` | `216, 19%, 5%` | Fondo principal del sitio web, web app y publicaciones |
| **Surface Dark** | Graphite Card | `#161A20` | `22, 26, 32` | `216, 19%, 11%` | Contenedores, tarjetas (cards), modales, barras laterales |
| **Border / Line** | Dark Slate | `#242B35` | `36, 43, 53` | `215, 19%, 17%` | Bordes de inputs, separadores, divisiones de tablas |
| **Text Primary** | Off-White | `#F4F5F7` | `244, 245, 247` | `220, 17%, 96%` | Títulos, encabezados, texto de alto contraste |
| **Text Secondary** | Muted Grey | `#8C96A6` | `140, 150, 166` | `217, 13%, 60%` | Parrafos secundarios, descripciones, metadatos, placeholders |

---

## 3. Tipografía y Jerarquía Web

### 3.1 Fuentes Oficiales
* **Principal / UI:** `Geist Sans` o `Inter` (Sans-Serif moderna, limpia y legible en pantallas de alta densidad).
* **Monospaciada / Code:** `JetBrains Mono` o `Fira Code` (Para bloques de código, arquitectura de sistemas y datos numéricos).

### 3.2 Escala Tipográfica (Mobile / Desktop)
H1 (Hero):       3.5rem (56px) | Bold / Black      | Tracking: -0.02em
H2 (Sections):   2.25rem (36px)| SemiBold          | Tracking: -0.01em
H3 (Cards/Sub):  1.5rem (24px)  | Medium / SemiBold | Tracking: Normal
Body Lead:       1.125rem(18px) | Regular           | Line-Height: 1.6
Body Regular:    1rem (16px)    | Regular           | Line-Height: 1.5
Caption / Small: 0.875rem(14px) | Medium            | Tracking: 0.01em
Code / Mono:     0.875rem(14px) | Regular (Mono)    | Line-Height: 1.4
---

## 4. Especificaciones del Logo y Símbolo

### 4.1 Composición
El logo de Kaizen Labs está estructurado por dos elementos:
1. **Isotipo / Símbolo:** Formas geométricas angulares en Cyan Digital y Graphite que componen una **'K' modular**, transmitiendo estructura, código y evolución escalar.
2. **Wordmark:** 
   * **KAIZEN:** Tipografía en caja alta, peso `Bold`, tracking estrecho.
   * **LABS:** Tipografía en caja alta, peso `Medium`, tracking expandido (`letter-spacing: 0.25em`).

### 4.2 Zona de Protección y Tamaños Mínimos
* **Área Clara (Clear Space):** Mantener siempre un margen libre de elementos equivalente a $X$, donde $X$ es la mitad del ancho del isotipo.
* **Tamaño Mínimo Web:** 
  * Logo completo: `140px` de ancho.
  * Favicon / App Icon: `32x32px` (Usar solo el isotipo).

---

## 5. Guía de Componentes UI (Frontend)

### 5.1 Botones (Button States)
* **Button Primary (Cyan Solid):**
  * Background: `#00E5FF` | Text: `#0B0D10` (Bold)
  * Hover: Background `#00C2D9` + Glow Box-Shadow: `0 0 15px rgba(0, 229, 255, 0.4)`
  * Active: Scale `0.98`
* **Button Secondary (Outline):**
  * Background: `transparent` | Border: `1px solid #242B35` | Text: `#F4F5F7`
  * Hover: Border `#00E5FF` | Text `#00E5FF`

### 5.2 Cards y Elevación (Surface UI)
* **Standard Card:**
  * Background: `#161A20`
  * Border: `1px solid #242B35`
  * Border-Radius: `12px` (`rounded-xl`)
  * Hover State: Border pasa a `#00E5FF` al 50% de opacidad.

---

## 6. Estrategia y Plantillas para Redes Sociales

### 6.1 Perfiles (Avatar / Profile Photo)
* Usar **únicamente el isotipo K** en Cyan Digital centrado sobre fondo `#0B0D10`. Sin texto adicional para garantizar visibilidad en dispositivos móviles.

### 6.2 Banners de Portada (LinkedIn / Twitter)
* **Fondo:** `#0B0D10` con una malla/grid técnica sutil al 4% de opacidad.
* **Lado Izquierdo:** Logo Isotipo + Text `KAIZEN LABS`.
* **Lado Derecho:** Frase clave: `Build. Improve. Evolve.` o `Software & Digital Products`.

### 6.3 Publicaciones de Contenido (Posts)
1. **Formato Citas / Frases:** Texto grande `#F4F5F7` con comillas o palabras clave destacadas en color `#00E5FF`.
2. **Formato Muestra de Código:** Ventana de terminal simulada en fondo `#161A20`, barra superior con tres botones de control y sintaxis en JetBrains Mono.
3. **Formato Métricas / Resultados:** Números gigantes en `#00E5FF` con etiquetas descriptivas en `#8C96A6`.

---

## 7. Configuración Lista para Desarrolladores

### 7.1 Archivo `styles/variables.css`
css
:root {
  /* Brand Primary Palette */
  --kaizen-cyan: #00E5FF;
  --kaizen-cyan-hover: #00C2D9;
  --kaizen-mint: #38D996;

  /* Surfaces & Backgrounds */
  --kaizen-bg-dark: #0B0D10;
  --kaizen-surface: #161A20;
  --kaizen-border: #242B35;

  /* Typography */
  --kaizen-text-primary: #F4F5F7;
  --kaizen-text-secondary: #8C96A6;

  /* Shadows & Glows */
  --kaizen-glow-cyan: 0px 0px 20px rgba(0, 229, 255, 0.35);
}

### 7.2 Configuración tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        kaizen: {
          cyan: {
            DEFAULT: '#00E5FF',
            hover: '#00C2D9',
          },
          mint: '#38D996',
          dark: '#0B0D10',
          surface: '#161A20',
          border: '#242B35',
          text: {
            primary: '#F4F5F7',
            secondary: '#8C96A6',
          },
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0, 229, 255, 0.35)',
      },
    },
  },
  plugins: [],
}