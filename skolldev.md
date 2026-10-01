# 🎨 Especificación Técnica de Activo Visual — `hero-illustration-kaizen.png`

## 1. Descripción del Contenido Visual
* **Sujeto:** Ilustración del fundador e ingeniero de software (carácter personalizado) trabajando sentado frente a una estación de trabajo moderna.
* **Pose y Expresión:** Enfocado hacia los monitores, con postura profesional, sonriendo sutilmente, sosteniendo el mouse y escribiendo en el teclado.
* **Entorno:** Escritorio minimalista en tonos grafito (`#161A20`) con dos monitores que muestran paneles de control UI, arquitecturas de base de datos y fragmentos de código limpios en acentos cyan (`#00E5FF`).
* **Composición de Layout:**
  * **Lado Izquierdo (~55%):** Ilustración detallada del personaje y la estación de trabajo sobre un fondo oscuro de alta densidad (`#0B0D10`).
  * **Lado Derecho (~45%):** Espacio negativo limpio con una cuadrícula/grid técnica súper sutil (`#161A20` / `#242B35`), diseñado como zona libre para overlay de texto y componentes UI.

---

## 2. Recomendaciones de Implementación Frontend (Tailwind CSS / HTML)

### A. Ubicación Recomendada
* **Sección Hero de la Landing Page (`/`)**
* **Encabezado de la página "Sobre Nosotros" (`/about`)**

### B. Estructura de Maquetación (Grid / Flexbox)
Se recomienda utilizar un diseño responsive donde la imagen sirva de fondo o se alinee a la izquierda, permitiendo que el contenido de texto ocupe la columna derecha en pantallas de escritorio.

```tsx
// Ejemplo de implementación en React + Tailwind CSS
export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] bg-kaizen-dark overflow-hidden flex items-center">
      {/* Contenedor de Imagen de Fondo / Lateral */}
      <div className="absolute inset-0 z-0 flex justify-start">
        <img
          src="/assets/images/hero-illustration-kaizen.png"
          alt="Kaizen Labs Founder Working"
          className="h-full w-full object-cover object-left md:object-contain md:max-w-[60%]"
        />
        {/* Gradiante de transición para asegurar legibilidad en móviles */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-kaizen-dark/80 to-kaizen-dark md:to-transparent" />
      </div>

      {/* Contenido de Texto (Alineado a la derecha sobre el espacio negativo) */}
      <div className="container mx-auto px-6 z-10 relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Espaciador para la ilustración en Desktop */}
        <div className="hidden md:block md:col-span-6" />

        {/* Contenido Hero */}
        <div className="md:col-span-6 space-y-6">
          <span className="text-kaizen-cyan font-mono text-sm tracking-wider uppercase">
            // Software & Digital Products
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-kaizen-text leading-tight">
            Build. Improve. <span className="text-kaizen-cyan">Evolve.</span>
          </h1>
          <p className="text-kaizen-muted text-lg max-w-xl">
            Construimos aplicaciones web, plataformas SaaS y productos digitales 
            diseñados bajo el principio de mejora continua.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-kaizen-cyan text-kaizen-dark font-bold px-6 py-3 rounded-lg hover:shadow-cyan-glow transition-all">
              Iniciar Proyecto
            </button>
            <button className="border border-kaizen-border text-kaizen-text px-6 py-3 rounded-lg hover:border-kaizen-cyan transition-all">
              Ver Servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}