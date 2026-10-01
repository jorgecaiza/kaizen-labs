# Mantenimiento del sitio Kaizen Labs

Guía rápida para editar contenido y preparar nuevas versiones del sitio. El proyecto usa Astro y genera páginas estáticas. La homepage en español vive en `/` y la versión inglesa en `/en/`.

## Contenido y traducciones

- Edita `src/i18n/content.ts` para cambiar textos de navegación, hero, capacidades, proyectos vacíos, tecnología, trayectoria, fundador, proceso, contacto y footer.
- Mantén las mismas claves y estructura para `es` y `en`. La página se renderiza inicialmente con una de las traducciones y el selector de idioma lleva a la ruta correspondiente.
- La detección inicial considera una preferencia guardada en `localStorage`, después el idioma del navegador y finalmente el idioma de la ruta (español por defecto). La preferencia guardada queda bajo `kaizen-language`.
- Si se añade otro idioma, añade su diccionario, una ruta Astro, y actualiza la lista de idiomas en `src/components/Homepage.astro` y los enlaces `hreflang`.

## Proyectos

- Agrega proyectos públicos en `src/data/projects.ts` dentro del array `projects`.
- Cada proyecto acepta `name`, `description`, `category`, `technologies` y opcionalmente `status`, `url`, `repository` e `image`.
- Incluye únicamente proyectos, tecnologías, imágenes y enlaces que se puedan publicar. Si `projects` está vacío, la web muestra un estado vacío intencional sin fingir que hay casos publicados.
- Guarda imágenes optimizadas en `public/images/` y referencia su ruta pública, por ejemplo `/images/proyecto.webp`.

## Trayectoria y tecnologías

- Actualiza `experience.items` en `src/i18n/content.ts` para editar la trayectoria. Sincroniza las versiones española e inglesa y confirma los nombres, cargos y fechas antes de publicar.
- La sección tecnológica en el mismo diccionario usa descripciones de capacidades, no una lista de tecnologías personales no confirmadas. Añade nombres concretos solo cuando exista experiencia que se pueda afirmar públicamente.

## Enlaces, botones y redes sociales

- El perfil de LinkedIn está definido en `src/components/Homepage.astro`, en la constante `linkedin`. Actualiza esa URL ahí.
- Los CTAs principales apuntan a `#contacto`; el CTA final lleva al LinkedIn publicado mientras no haya un canal de contacto adicional confirmado.
- Instagram y Facebook aparecen como texto “Próximamente” en el footer porque todavía no hay URLs. Cuando existan, añade los enlaces en el bloque `footer-social` del mismo archivo; usa `target="_blank"` y `rel="noreferrer"` para destinos externos y traduce cualquier nuevo texto visible en `content.ts`.
- No se ha añadido correo, teléfono, dirección ni formulario porque no se proporcionaron esos datos.

## Imágenes y logo

- Los recursos web están en `public/images/`: `logo.png`, `retrato.webp`, `skolldev.webp` y `skoll.png`.
- El logo existente se usa como símbolo, junto al nombre tipográfico “Kaizen Labs”. Conserva proporciones y no edites los originales sin actualizar sus archivos descriptivos de la raíz.
- Cambia las referencias y textos alternativos en `src/components/Homepage.astro`. Los textos alternativos traducibles deben conservar la clave correspondiente en ambos idiomas.

## Colores y tipografía

- Los tokens CSS están al inicio del `<style>` en `src/components/Homepage.astro`: `--bg`, `--surface`, `--line`, `--text`, `--muted`, `--cyan` y `--mint`.
- La paleta parte de `visualidentity.md`: fondo `#0B0D10`, superficie `#161A20`, línea `#242B35`, texto `#F4F5F7`, cian `#00E5FF` y verde `#38D996`. Los botones cian usan texto oscuro.
- La tipografía actual utiliza Manrope y DM Mono, cargadas desde Google Fonts, con fuentes del sistema como respaldo. Para alojar las fuentes localmente, descarga archivos con licencia adecuada, guárdalos en `public/fonts/` y sustituye el `@import` por `@font-face`.
- Tras cambiar colores, revisa contraste de texto, enlaces, focus y botones con una herramienta WCAG. Mantén focus visible y los estilos de movimiento reducido.

## SEO y dominio

- Título, descripciones y Open Graph traducidos están en `src/i18n/content.ts`; etiquetas y enlaces alternos están en el `<head>` de `src/components/Homepage.astro`.
- Las rutas `/` y `/en/` tienen contenido renderizado por idioma y sus etiquetas `hreflang` apuntan a rutas distintas.
- La URL canónica usa la ruta actual (`/` o `/en/`) para no inventar el dominio. Cuando se publique, configura `site` en `astro.config.mjs` y cambia las canónicas a URLs absolutas por idioma; añade también `og:url`.
- El favicon actualmente reutiliza el PNG del símbolo oficial.

## Diseño y comportamiento

- La estructura y estilos de la homepage están en `src/components/Homepage.astro`; los datos editables de proyectos están separados en `src/data/projects.ts`.
- El menú móvil, selector de idioma y revelado progresivo usan JavaScript pequeño integrado en Astro. Conserva los atributos semánticos, estados accesibles y regla `prefers-reduced-motion`.
- Las imágenes de la página se cargan desde `/images/`. Mantén descripciones `alt` traducidas y dimensiones definidas para evitar saltos de layout.

## Comandos

```sh
npm run dev
npm run build
npm run preview
```

El proyecto no define scripts de lint ni typecheck. Revisa el build de producción después de editar contenido, rutas o componentes.
