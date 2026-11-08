# Sprint Backlog: YOLCATL
## Desglose en Tareas

### E0 · Metodología y Gestión

#### US-01: Backlog, CA y Definition of Done
* **Tarea 1.1:** Redactar el documento final del backlog asegurando el formato de historias de usuario y al menos 2 Criterios de Aceptación por historia (20 min).
* **Tarea 1.2:** Discutir con el equipo y documentar la resolución de las decisiones abiertas (D-01 a D-10), definiendo explícitamente la plataforma objetivo y modelo de distribución (30 min).
* **Tarea 1.3:** Redactar la *Definition of Done* (DoD) global del proyecto y estandarizar el formato para el registro de cambios de alcance (15 min).

#### US-02: Tablero Trello y evidencias
* **Tarea 2.1:** Configurar el tablero de Trello creando las listas requeridas: Product Backlog, Sprint Backlog, En progreso, En revisión y Hecho (15 min).
* **Tarea 2.2:** Volcar todas las US al tablero como tarjetas, incluyendo los CA como *checklists* interactivos y asignando responsables mediante etiquetas (45 min).
* **Tarea 2.3:** Configurar ShareX (o herramienta similar) y capturar las evidencias iniciales del tablero para el reporte del Sprint (10 min).

#### US-03: Context Brain y Creación de Assets Faltantes
* **Tarea 3.1:** Crear la estructura de carpetas `/docs/context/` y unificar los documentos de lore, paleta y glosario en archivos Markdown referenciados (20 min).
* **Tarea 3.2:** Recopilar, editar y empaquetar los recursos gráficos finales, generando el archivo descargable `KitPrensa.zip` (40 min).
* **Tarea 3.3:** Capturar o generar las imágenes conceptuales faltantes y el enlace del clip de gameplay para uso posterior en la landing (45 min).

---

### E1 · Estructura Semántica

#### US-04: Hero con nombre, género y promesa
* **Tarea 4.1:** Maquetar la estructura contenedora principal con la etiqueta semántica `<section id="hero" aria-labelledby="hero-title">` e incorporar el encabezado jerárquico único `<h1>` (15 min).
* **Tarea 4.2:** Redactar y maquetar el párrafo `<p>` con el pitch de impacto promocional (máximo 40 palabras) validando que no quede texto de relleno (15 min).
* **Tarea 4.3:** Crear los enlaces de llamada a la acción (CTA) primario y secundario apuntando a `#demo` y `#showcase` respectivamente, configurando sus clases base (10 min).

#### US-05: Navegación semántica y por teclado
* **Tarea 5.1:** Crear la etiqueta `<header>` e incorporar el menú de navegación mediante `<nav aria-label="Navegación principal">` con la lista de enlaces internos (15 min).
* **Tarea 5.2:** Implementar un enlace oculto visualmente (`.sr-only`) al inicio del `<body>` con el texto "Saltar al contenido" apuntando al `<main id="contenido">` (10 min).
* **Tarea 5.3:** Navegar la página exclusivamente con la tecla *Tab* para auditar que el foco siga un orden secuencial lógico en todo el DOM (15 min).

#### US-06: Historia y propuesta de valor
* **Tarea 6.1:** Estructurar la sección `<section id="hacienda">` anidando 3 elementos `<article>` para la Visión, la Hacienda y los Guardianes (15 min).
* **Tarea 6.2:** Maquetar la lista de los 4 pilares de valor del juego, revisando la ortografía oficial ("Pajianí") según el Glosario (15 min).
* **Tarea 6.3:** Implementar las imágenes de soporte usando las etiquetas semánticas `<figure>` y `<figcaption>`, asegurando el texto alternativo `alt` en cada una (20 min).

#### US-07: Características del juego
* **Tarea 7.1:** Construir las secciones contenedoras `#ciclo`, `#alquimia` y `#metamorfosis` respetando estrictamente el flujo de encabezados `<h2>` a `<h3>` (20 min).
* **Tarea 7.2:** Redactar la descripción técnica de la mecánica del molcajete, enfatizando la interacción táctil (arrastre/rotación) exigida por el GDD (15 min).
* **Tarea 7.3:** Maquetar el contenedor del bestiario listando semánticamente las 6 formas nahuales con sus oficios diurnos y habilidades defensivas (30 min).

#### US-08: Formulario de contacto y newsletter
* **Tarea 8.1:** Crear la estructura `<section id="contacto">` y maquetar el `<form>` con campos explícitamente asociados a través de `<label for="...">` (15 min).
* **Tarea 8.2:** Integrar validación HTML5 (`required`, `type="email"`, `minlength="10"`) y el atributo `autocomplete` correspondiente a cada input (15 min).
* **Tarea 8.3:** Incorporar la región de notificaciones accesibles mediante un `<div>` vacío con `role="status"` y `aria-live="polite"` (10 min).

#### US-09: Footer y enlaces de comunidad
* **Tarea 9.1:** Maquetar el pie de página usando `<footer>` estructurado en columnas semánticas (15 min).
* **Tarea 9.2:** Configurar todos los hipervínculos externos con `target="_blank"` y `rel="noopener noreferrer"`, reemplazando enlaces vacíos por URLs definitivas o de *placeholder* válidos (15 min).
* **Tarea 9.3:** Enlazar correctamente el botón de descarga del kit al asset `KitPrensa.zip` generado previamente en la US-03 (10 min).

#### US-10: HTML válido y accesibilidad (Retos 1 y 2)
* **Tarea 10.1:** Insertar el atributo `lang="es"` en la etiqueta `<html>` y verificar que todas las imágenes decorativas posean `alt=""` (10 min).
* **Tarea 10.2:** Pasar el código completo por el W3C Markup Validator y corregir cualquier error/warning estructural reportado (20 min).
* **Tarea 10.3:** Ejecutar un reporte de Lighthouse Accessibility en Chrome DevTools y aplicar los ajustes sugeridos hasta alcanzar >90 puntos (20 min).

#### US-11: Prueba con lector de pantalla (Reto 3)
* **Tarea 11.1:** Encender Narrador (Windows) o VoiceOver (Mac) y navegar el flujo completo de la página documentando la experiencia auditiva (30 min).
* **Tarea 11.2:** Redactar el documento `accesibilidad-notas.md` con los hallazgos y ajustar el HTML (ej. añadiendo `aria-labels` faltantes) para mitigar los bloqueos detectados (25 min).

---

### E2 · Diseño y Responsividad

#### US-12: Sistema de diseño (tokens, reset, tipografía)
* **Tarea 12.1:** Escribir el CSS Reset en `styles.css` aplicando `box-sizing: border-box`, `margin: 0` y `padding: 0` globalmente (10 min).
* **Tarea 12.2:** Declarar las Custom Properties (variables CSS) en `:root` para los colores primarios (Papel Pink, Marigold Orange, Talavera Blue), espaciados y escala tipográfica (20 min).
* **Tarea 12.3:** Importar tipografías desde Google Fonts utilizando `<link rel="preconnect">` en el HTML y aplicarlas al selector `body` (15 min).

#### US-13: Layout con Flexbox y Grid (mobile-first)
* **Tarea 13.1:** Implementar Flexbox en el `.navbar` para alinear elementos (columna en móvil, fila en desktop) mediante el enfoque `min-width` (25 min).
* **Tarea 13.2:** Configurar CSS Grid en las tarjetas de Bestiario (`grid-template-columns: 1fr` en móvil, escalando a 2 y 3 columnas con media queries) (25 min).
* **Tarea 13.3:** Revisar en DevTools el comportamiento general entre 320px y 1280px para garantizar la ausencia total de scroll horizontal (15 min).

#### US-14: Componentes, formularios y Fondo Gradiente (Reto 3)
* **Tarea 14.1:** Estilizar botones y tarjetas aplicando estados de interacción como `:hover`, `:focus-visible` y efectos de sombra/elevación (20 min).
* **Tarea 14.2:** Implementar un gradiente CSS (`linear-gradient`) utilizando la paleta de marca y aplicarlo como fondo fluido en la sección `#hero` (20 min).
* **Tarea 14.3:** Formatear visualmente los inputs y textareas del formulario para que mantengan un alto contraste y claridad en su foco (15 min).

#### US-15: Tema Día/Noche en CSS y contraste
* **Tarea 15.1:** Escribir el bloque `@media (prefers-color-scheme: dark)` reasignando las variables de color hacia la paleta oscura (Oscuridad Terrosa) (25 min).
* **Tarea 15.2:** Auditar con una herramienta de contraste que los textos mantengan ratios ≥ 4.5:1 (normal) y ≥ 3:1 (grande) en ambos modos (20 min).
* **Tarea 15.3:** Aplicar clases o atributos combinados para permutar la visualización de la imagen del Hero entre día y noche (20 min).

#### US-16: Animaciones sutiles y movimiento reducido
* **Tarea 16.1:** Crear `@keyframes fadeIn` y asignarlo a las clases de inicialización del documento para un efecto de entrada gradual (15 min).
* **Tarea 16.2:** Añadir la media query `@media (prefers-reduced-motion: reduce)` suprimiendo o acelerando a 0s las transiciones y animaciones clave (15 min).

#### US-17: Responsividad y rendimiento (gama baja)
* **Tarea 17.1:** Convertir los *assets* estáticos a formato WebP o AVIF y asignar atributos fijos `width` y `height` a las etiquetas `<img>` (25 min).
* **Tarea 17.2:** Agregar el atributo `loading="lazy"` a todas las imágenes y recursos que se encuentren por debajo del *fold* inicial (10 min).
* **Tarea 17.3:** Correr un test de Lighthouse Performance simulando un dispositivo móvil para corroborar que la métrica supere los 80 puntos (15 min).

#### US-18: Migración a CSS propio (sin CDN)
* **Tarea 18.1:** Eliminar la inyección de la etiqueta `<script>` del CDN de Tailwind del `<head>` del documento HTML (5 min).
* **Tarea 18.2:** Replicar cualquier clase utilitaria faltante directamente en el archivo `styles.css` propio para asegurar que no se rompa la vista (30 min).

---

### E3 · Interactividad

#### US-19: JavaScript separado y sin atributos inline
* **Tarea 19.1:** Limpiar el HTML eliminando atributos antiguos como `onclick`, `onmouseover` u `onsubmit` (15 min).
* **Tarea 19.2:** Vincular el archivo `main.js` en el HTML usando el atributo `defer` y trasladar toda la lógica al manejador de eventos `DOMContentLoaded` (15 min).

#### US-20: Menú hamburguesa accesible
* **Tarea 20.1:** Insertar el `<button class="menu-toggle">` con `aria-expanded="false"` y maquetarlo en CSS exclusivo para móvil (15 min).
* **Tarea 20.2:** Programar el *listener* en JS para alternar la visibilidad del menú y sincronizar el atributo `aria-expanded` (20 min).
* **Tarea 20.3:** Programar el cierre automático del menú al presionar la tecla Escape o al hacer clic en un enlace de navegación interno (15 min).

#### US-21: Validación de formularios sin alert()
* **Tarea 21.1:** Interceptar el evento `submit` del formulario mediante `e.preventDefault()` en JavaScript (10 min).
* **Tarea 21.2:** Escribir la lógica de validación de campos e inyectar dinámicamente `<span role="alert">` con mensajes de error si fallan las condiciones (25 min).
* **Tarea 21.3:** Cambiar `aria-invalid="true"` dinámicamente y programar listeners `input` para limpiar los errores visuales en cuanto el usuario comience a corregir (20 min).

#### US-22: Scroll suave y navegación activa (scroll spy)
* **Tarea 22.1:** Implementar JS para capturar clics en `a[href^="#"]` y ejecutar `scrollIntoView({ behavior: 'smooth' })`, respetando la preferencia de movimiento (20 min).
* **Tarea 22.2:** Instanciar `IntersectionObserver` mapeando las secciones para agregar/remover dinámicamente la clase `.active` en el menú de navegación al hacer scroll (30 min).

#### US-23: Pestañas del ciclo accesibles con teclado
* **Tarea 23.1:** Construir la lógica JS del `role="tablist"` escuchando eventos de `keydown` (Flechas, Inicio, Fin) para trasladar el foco y el atributo `aria-selected` (35 min).
* **Tarea 23.2:** Asegurar en CSS que, si JS no carga, el diseño caiga en gracia (*fallback*) mostrando todos los paneles de forma secuencial (15 min).

#### US-24: Tema Día/Noche manual y persistente
* **Tarea 24.1:** Conectar los botones de modo claro/oscuro en JS para forzar la inyección de un atributo `data-theme` en la etiqueta `<html>` (20 min).
* **Tarea 24.2:** Implementar `localStorage.setItem` y `getItem` con bloques `try/catch` para recuperar la elección del usuario al recargar la página (20 min).

#### US-25: Voces de la comunidad con fetch (Reto 1)
* **Tarea 25.1:** Programar el llamado asíncrono con `fetch` a `randomuser.me`, manejando estados de carga (*loading spinner*) y captura de errores (30 min).
* **Tarea 25.2:** Generar dinámicamente en JS el marcado de 3 tarjetas de reseñas con los datos obtenidos e insertarlos en el DOM (30 min).

#### US-26: Aparición al hacer scroll (Reto 3)
* **Tarea 26.1:** Configurar un `IntersectionObserver` que detecte elementos con `.animate-on-scroll` y les añada una clase `.visible` (25 min).
* **Tarea 26.2:** Escribir el CSS condicional para que la transición solo ocurra si el usuario no tiene activado `prefers-reduced-motion` (15 min).

---

### E4 · Funnel, Marketing y Telemetría

#### US-27: Diagrama del embudo de 4 pasos
* **Tarea 27.1:** Redactar el archivo `/docs/funnel.md` e insertar un diagrama Mermaid categorizando los flujos TOFU, MOFU y BOFU (25 min).
* **Tarea 27.2:** Detallar en el documento qué métrica de éxito (ej. CTR, conversiones) aplica para Pato, Lía y Bob (20 min).

#### US-28: Canales de atracción (físico y digital)
* **Tarea 28.1:** Especificar en el documento de funnel el copy exacto y arte conceptual para la campaña de TikTok (Digital) (15 min).
* **Tarea 28.2:** Redactar el copy e idea de distribución para el sobre de semillas folclórico (Físico) como canal de guerrilla (15 min).

#### US-29: Etiquetado UTM y códigos QR
* **Tarea 29.1:** Definir la tabla de valores aceptados para el parámetro `?src=` (ej. `src=poster_campus`, `src=tiktok_demo`) (10 min).
* **Tarea 29.2:** Utilizar un generador para crear los códigos QR funcionales apuntando a la URL pública e insertarlos en los *assets* de póster (15 min).

#### US-30: Material de marketing integrado en la landing
* **Tarea 30.1:** Revisar y alinear la cabecera (eslogan y tipografía principal) para que mantenga correspondencia 1:1 con el arte de las redes (15 min).
* **Tarea 30.2:** Redactar un micro-copy en la sección `#comunidad` que invite explícitamente a reclamar las "semillas físicas" (10 min).

#### US-31: Showcase multimedia (tráiler, gameplay, capturas)
* **Tarea 31.1:** Maquetar la galería interactiva en `#showcase` inyectando los thumbnails extraídos del `KitPrensa` (20 min).
* **Tarea 31.2:** Implementar y vincular el componente Lightbox (de la US-10) para reproducir/visualizar a detalle cada captura/video (25 min).

#### US-32: CTA principal, demo y registro anticipado
* **Tarea 32.1:** Redactar el bloque de requerimientos mínimos en la sección `#demo` (confirmando optimización para PC gama baja) (15 min).
* **Tarea 32.2:** Insertar un CTA secundario semántico que lleve a la campaña de comunidad/hitos de registro anticipado (10 min).

#### US-33: Ficha técnica del equipo desarrollador
* **Tarea 33.1:** Crear las tarjetas de desarrollador en `#equipo`, incluyendo fotografía/avatar optimizado, rol técnico y enlace a portafolio o LinkedIn (20 min).
* **Tarea 33.2:** Añadir la placa informativa resumiendo: Motor (ej. Godot/Unity), Plataforma (PC), Género y Versión (10 min).

#### US-34: Cross-promotion con dos proyectos de compañeros
* **Tarea 34.1:** Maquetar la sección `#aliados` insertando el arte y sinopsis de dos proyectos hermanos aprobados previamente (20 min).
* **Tarea 34.2:** Incorporar el atributo custom `data-track="cross-promo-ID"` en los hipervínculos externos para su futuro rastreo (10 min).

#### US-35: Cuestionario de validación para el Demo Day
* **Tarea 35.1:** Configurar un formulario en Tally/Google Forms con escala Likert (usabilidad) y NPS, garantizando que el llenado tome < 3 mins (25 min).
* **Tarea 35.2:** Generar el QR/Link corto y enlazarlo visiblemente al final de la landing page o en la interfaz de la demo (10 min).

#### US-36: Definición de métricas (especificación API)
* **Tarea 36.1:** Crear `/docs/metricas.md` estructurando las 4 familias analíticas (Atracción, Interacción, Sinergia y Feedback) (25 min).
* **Tarea 36.2:** Redactar el contrato JSON esperado para la Parte 5, especificando campos como `session_id`, `src`, `timestamp` y `target` asegurando anonimato (20 min).

#### US-37: Instrumentación de la landing para telemetría
* **Tarea 37.1:** Escribir el script para leer `new URLSearchParams(window.location.search).get('src')` y guardarlo de inmediato en `sessionStorage` (15 min).
* **Tarea 37.2:** Agregar *listeners* temporales en los botones con `data-track` que emitan un `console.log` estructurado emulando el *payload* futuro a `API_BASE` (25 min).

#### US-38: Landing publicada en una URL pública
* **Tarea 38.1:** Desplegar el código fuente del proyecto en GitHub Pages, Vercel o Netlify activando el certificado HTTPS automático (20 min).
* **Tarea 38.2:** Navegar la URL pública desde un dispositivo móvil desconectado del WiFi local para verificar la resolución correcta de *assets* sin errores 404 (15 min).