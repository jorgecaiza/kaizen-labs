# 🎨 Especificación Técnica de Activo Visual — `founder-greeting-kaizen.png`

## 1. Descripción del Contenido Visual
* **Sujeto:** Ilustración a cuerpo completo del fundador e ingeniero de software (Jorge Caiza) en una pose de bienvenida profesional y cercana ("Hi, I'm Jorge. Welcome").
* **Atuendo:**
  * Chaqueta tipo bomber de cuero/cuerina azul marino oscuro (`#1E2538`), abierta, con cuello cadet y detalles metálicos.
  * Camiseta básica de cuello redondo en color negro sólido (`#111318`).
  * Pantalones chinos de gabardina en tono café tierra medio (`#7A5E43`).
  * Zapatillas urbanas de corte bajo totalmente blancas (`#FFFFFF`).
  * Accesorio secundario: Apple Watch con correa oscura en la muñeca izquierda.
* **Composición y Formato:**
  * Personaje completamente aislado sobre un fondo transparente/neutro.
  * Silueta limpia de pies a cabeza (*head-to-toe*), sin recortes en extremidades.
  * Sombra de contacto sutil únicamente debajo de los pies para dar soporte sobre el plano de maquetación.

---

## 2. Pautas de Integración Frontend (Tailwind CSS / React)

### A. Casos de Uso Recomendados
* **Sección "Sobre El Fundador" / "Acerca de Kaizen Labs" (`/about`):** Presentación directa del creador de la empresa.
* **Modal / Callout de Bienvenida:** Para flujos de onboarding o banners de interacción en la landing page.
* **Sección de Contacto / Asesoría (`/contact`):** Acompañando el formulario para humanizar el punto de contacto.

### B. Ejemplo de Componente Responsive (React + Tailwind CSS)

```tsx
// Ejemplo de integración como elemento flotante o lateral en la web
export default function FounderGreetingSection() {
  return (
    <section className="relative w-full py-16 bg-kaizen-dark text-white overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Columna de Texto / Introducción */}
        <div className="md:col-span-7 space-y-6">
          <span className="text-kaizen-cyan font-mono text-sm uppercase tracking-wider">
            // Engineering & Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Diseñamos productos digitales con obsesión por la calidad.
          </h2>
          <p className="text-kaizen-muted text-lg leading-relaxed">
            Hola, soy Jorge. En **Kaizen Labs** transformamos problemas complejos en 
            software escalable, combinando arquitectura sólida con diseño centrado en el usuario.
          </p>
          <div className="pt-2">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-kaizen-cyan text-kaizen-dark font-bold px-6 py-3 rounded-lg hover:shadow-cyan-glow transition-all"
            >
              Hablemos de tu proyecto
            </a>
          </div>
        </div>

        {/* Columna de la Ilustración (Aislada / Fondo Transparente) */}
        <div className="md:col-span-5 flex justify-center items-end relative min-h-[400px]">
          <img
            src="/assets/images/founder-greeting-kaizen.png"
            alt="Ilustración del fundador de Kaizen Labs saludando"
            className="h-full max-h-[520px] w-auto object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}