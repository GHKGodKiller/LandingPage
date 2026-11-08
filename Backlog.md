# Product Backlog: YOLCATL

## E0 · Metodología y Gestión

## US-01: Backlog, CA y Definition of Done
**Como** equipo de desarrollo,  
**quiero** un backlog con User Stories, Criterios de Aceptación y una Definition of Done,  
**para** verificar el producto contra la especificación y confirmar las decisiones de diseño desde el inicio.

### Criterios de Aceptación (CA):
- **CA-1:** El backlog debe seguir el formato «Como… quiero… para…» con al menos 2 CA medibles por historia.
- **CA-2:** Todas las decisiones abiertas (D-01 a D-10, como la plataforma de la demo y exclusión de registro/precio) deben quedar resueltas y documentadas antes de iniciar el código.
- **CA-3:** Todo cambio de alcance debe registrarse como una US/CA nueva con fecha de versión.

## US-02: Tablero Trello y evidencias
**Como** equipo de desarrollo,  
**quiero** un tablero Trello activo con el backlog y capturas de evidencia,  
**para** demostrar la gestión Agile y cumplir con los criterios de evaluación.

### Criterios de Aceptación (CA):
- **CA-1:** El tablero debe incluir las listas: Product Backlog, Sprint Backlog, En progreso, En revisión y Hecho.
- **CA-2:** Cada US debe ser una tarjeta con sus CA como *checklist*, responsables y etiquetas.
- **CA-3:** Deben adjuntarse al menos 2 capturas ShareX por sprint para evidenciar el progreso.

## US-03: Context Brain y Creación de Assets Faltantes
**Como** integrante del equipo que retoma el trabajo,  
**quiero** una carpeta de contexto organizada y un inventario de *assets* completos,  
**para** continuar el desarrollo sin releer PDFs y contar con todos los recursos gráficos necesarios.

### Criterios de Aceptación (CA):
- **CA-1:** La carpeta `/docs/context/` debe contener el lore, paleta, glosario y decisiones actualizadas.
- **CA-2:** Se debe generar y compilar formalmente el material faltante: `KitPrensa.zip`, imágenes conceptuales y el clip/enlace de gameplay (mitigando el riesgo R-01).
- **CA-3:** Cada archivo del Context Brain debe indicar su fuente original (GDD o Plan de Marketing).

---

## E1 · Estructura Semántica

## US-04: Hero con nombre, género y promesa
**Como** Pato (jugador casual con laptop modesta),  
**quiero** ver al abrir la página el nombre del juego, su género y una promesa clara con botón de acción,  
**para** decidir en los primeros 5 segundos si Yolcatl me interesa.

### Criterios de Aceptación (CA):
- **CA-1:** Debe existir un único `<h1>` en la página dentro de un `<section id="hero" aria-labelledby="hero-title">`.
- **CA-2:** Debe incluir un pitch de máximo 40 palabras, sin texto "Lorem ipsum".
- **CA-3:** Los CTA principal y secundario deben apuntar a `#demo` y `#showcase` respectivamente.

## US-05: Navegación semántica y por teclado
**Como** visitante que navega con teclado o lector de pantalla,  
**quiero** una barra de navegación con enlaces ancla y un enlace para saltar al contenido,  
**para** llegar rápido a lo que busco sin usar el mouse.

### Criterios de Aceptación (CA):
- **CA-1:** El `<header>` debe contener un `<nav aria-label="Navegación principal">` con enlaces válidos a cada id de sección.
- **CA-2:** El enlace «Saltar al contenido» debe ser el primer elemento enfocable y llevar al `<main>`.
- **CA-3:** La navegación (Tab) debe seguir un orden lógico sin trampas de foco.

## US-06: Historia y propuesta de valor
**Como** Lía (creadora botánica que ama el folclore),  
**quiero** una sección que cuente la historia del Pajianí y los 4 pilares de valor,  
**para** tener lore profundo que compartir con mi comunidad.

### Criterios de Aceptación (CA):
- **CA-1:** Debe existir la sección `#hacienda` con al menos 3 `<article>` (Visión, Hacienda, Guardianes).
- **CA-2:** Se deben listar los 4 pilares del GDD y usar ortografía unificada ("Pajianí") sin definiciones largas in-line.
- **CA-3:** Las imágenes de apoyo deben estructurarse usando `<figure>`, `<figcaption>` y el atributo `alt`.

## US-07: Características del juego
**Como** Bob (coleccionista ocupado),  
**quiero** ver en tarjetas las mecánicas del ciclo día/noche, alquimia y formas nahuales,  
**para** entender la jugabilidad rápidamente.

### Criterios de Aceptación (CA):
- **CA-1:** Deben existir las secciones `#ciclo`, `#alquimia` y `#metamorfosis` respetando la jerarquía de encabezados (`h2` a `h3`).
- **CA-2:** La sección de alquimia debe reflejar el uso táctil (arrastre/rotación) del molcajete como se indica en el GDD.
- **CA-3:** El bestiario debe documentar las 6 formas nahuales (Armadillo, Tlacuache, Colibrí, Pecarí, Xoloitzcuintle, Ocelote) con sus oficios diurnos y defensas.

## US-08: Formulario de contacto y newsletter
**Como** Lía (busca el Kit de Prensa),  
**quiero** un formulario de contacto y suscripción a la newsletter,  
**para** comunicarme con el equipo o recibir actualizaciones del juego.

### Criterios de Aceptación (CA):
- **CA-1:** La sección `#contacto` debe incluir un `<form>` con campos de `name`, `email` y `message` enlazados mediante `<label for>`.
- **CA-2:** Los campos deben incluir validación HTML5 (`required`, `type="email"`, `minlength`) y atributos `autocomplete`.
- **CA-3:** Debe existir un contenedor `role="status" aria-live="polite"` para mostrar los mensajes de respuesta.

## US-09: Footer y enlaces de comunidad
**Como** visitante,  
**quiero** un pie de página con recursos, Kit de Prensa y redes sociales,  
**para** encontrar la comunidad oficial del juego fácilmente.

### Criterios de Aceptación (CA):
- **CA-1:** Debe existir un único `<footer>` con enlaces que abran externamente (`target="_blank" rel="noopener noreferrer"`) y adviertan a lectores de pantalla.
- **CA-2:** No deben existir enlaces genéricos a portadas (itch.io vacío); deben ser URL finales.
- **CA-3:** Los enlaces a descargables (`KitPrensa.zip`) deben resolver correctamente a los *assets* generados en la US-03.

## US-10: HTML válido y accesibilidad (Retos 1 y 2)
**Como** persona usuaria de lector de pantalla,  
**quiero** una página con HTML semánticamente válido,  
**para** navegar sin barreras de accesibilidad.

### Criterios de Aceptación (CA):
- **CA-1:** El código debe registrar 0 errores y 0 warnings en el W3C Markup Validator.
- **CA-2:** Lighthouse Accessibility debe puntuar ≥ 90 en móvil y escritorio.
- **CA-3:** Todas las imágenes decorativas deben usar `alt=""` y el atributo `lang="es"` debe estar definido en el HTML.

## US-11: Prueba con lector de pantalla (Reto 3)
**Como** equipo de desarrollo,  
**quiero** probar la landing con Narrador/VoiceOver,  
**para** documentar y resolver hallazgos reales de usabilidad auditiva.

### Criterios de Aceptación (CA):
- **CA-1:** Debe existir el documento `accesibilidad-notas.md` detallando la experiencia de navegación por landmarks y encabezados.
- **CA-2:** Cada hallazgo debe registrarse con su respectiva corrección implementada.

---

## E2 · Diseño y Responsividad

## US-12: Sistema de diseño (tokens, reset, tipografía)
**Como** equipo de desarrollo,  
**quiero** un sistema de diseño mediante variables CSS y tipografía importada,  
**para** mantener coherencia visual basada en la paleta del GDD.

### Criterios de Aceptación (CA):
- **CA-1:** Deben definirse en `:root` los colores del GDD, espaciados y tipografía (escala 1.25).
- **CA-2:** Debe aplicarse un reset global con `box-sizing: border-box`.
- **CA-3:** Las fuentes (Lilita One, Inter) deben cargarse con `<link rel="preconnect">` sin usar `@import` en CSS.

## US-13: Layout con Flexbox y Grid (mobile-first)
**Como** visitante desde cualquier dispositivo,  
**quiero** un diseño adaptable sin scroll horizontal,  
**para** visualizar el contenido cómodamente en pantallas chicas y grandes.

### Criterios de Aceptación (CA):
- **CA-1:** La barra de navegación debe usar Flexbox y las tarjetas de características CSS Grid (1 columna móvil, 2 tablet, 3 desktop).
- **CA-2:** Las media queries deben implementarse con el enfoque mobile-first (`min-width`).
- **CA-3:** No debe existir scroll horizontal en ninguna resolución entre 320px y 1280px.

## US-14: Componentes, formularios y Fondo Gradiente (Reto 3)
**Como** Bob (coleccionista),  
**quiero** botones, tarjetas estilizadas y un Hero visualmente destacado,  
**para** reconocer la identidad vibrante pop-folclórica del juego.

### Criterios de Aceptación (CA):
- **CA-1:** Los botones deben tener estados interactivos (`:hover`, `:active`, `:focus-visible`) con transición suave.
- **CA-2:** Las tarjetas deben tener bordes, sombras y un efecto de elevación al hacer hover.
- **CA-3:** La sección Hero (o CTA final) debe implementar un fondo atractivo usando un gradiente CSS (`linear-gradient`) acorde a la paleta.

## US-15: Tema Día/Noche en CSS y contraste
**Como** Pato (usuario que navega de noche),  
**quiero** que la página aplique modo oscuro respondiendo a la preferencia de mi sistema,  
**para** leer cómodamente con colores bioluminiscentes representativos del juego.

### Criterios de Aceptación (CA):
- **CA-1:** El CSS debe usar `@media (prefers-color-scheme: dark)` para alterar la paleta visual a colores oscuros.
- **CA-2:** El contraste de color debe ser ≥ 4.5:1 para texto normal y ≥ 3:1 para texto grande en ambos temas.
- **CA-3:** Las imágenes mostradas deben alternarse dinámicamente entre día y noche según el tema.

## US-16: Animaciones sutiles y movimiento reducido
**Como** visitante sensible al movimiento,  
**quiero** animaciones decorativas que se desactiven si mi sistema operativo lo requiere,  
**para** no marearme navegando el sitio.

### Criterios de Aceptación (CA):
- **CA-1:** El hero debe aparecer con una animación de *fade-in* y las tarjetas deben elevarse al hover.
- **CA-2:** Todas las transiciones y animaciones deben anularse dentro de un bloque `@media (prefers-reduced-motion: reduce)`.

## US-17: Responsividad y rendimiento (gama baja)
**Como** Pato (usuario con laptop de trabajo),  
**quiero** que la landing cargue muy rápido y consuma pocos recursos,  
**para** no gastar mis datos móviles ni congelar mi navegador.

### Criterios de Aceptación (CA):
- **CA-1:** Las imágenes deben tener `width`, `height`, el formato óptimo (WebP/AVIF) y pesar menos de 250 KB en promedio.
- **CA-2:** Las imágenes fuera del primer pliegue deben utilizar el atributo `loading="lazy"`.
- **CA-3:** La página debe superar los 80 puntos en Lighthouse Performance (Móvil).

## US-18: Migración a CSS propio (sin CDN)
**Como** equipo de desarrollo,  
**quiero** estructurar los estilos sin dependencias de frameworks externos como Tailwind,  
**para** depender exclusivamente de nuestro sistema de tokens y reducir el peso del documento.

### Criterios de Aceptación (CA):
- **CA-1:** Debe eliminarse la inyección del script CDN de Tailwind del documento HTML.
- **CA-2:** La interfaz visual y *layout* deben mantenerse consistentes utilizando únicamente clases propias definidas en `styles.css`.

---

## E3 · Interactividad

## US-19: JavaScript separado y sin atributos inline
**Como** equipo de desarrollo,  
**quiero** un script centralizado y desvinculado del HTML,  
**para** mantener las buenas prácticas estructurales.

### Criterios de Aceptación (CA):
- **CA-1:** No debe existir ningún atributo `onclick` u `onsubmit` en el DOM.
- **CA-2:** Toda la lógica debe concentrarse en `main.js`, cargado en el `<head>` usando el atributo `defer`.

## US-20: Menú hamburguesa accesible
**Como** Bob (navega en celular),  
**quiero** un menú que oculte/muestre los enlaces mediante un botón,  
**para** tener espacio de lectura y acceder rápido a otras secciones.

### Criterios de Aceptación (CA):
- **CA-1:** El botón `.menu-toggle` debe alternar el estado del menú y sincronizar dinámicamente `aria-expanded` y `aria-label`.
- **CA-2:** El menú debe cerrarse al seleccionar cualquier enlace ancla y debe soportar el cierre presionando la tecla Escape.

## US-21: Validación de formularios sin alert()
**Como** Lía (creadora de contenido),  
**quiero** saber qué campos del formulario completé mal directamente en la interfaz,  
**para** corregirlos rápidamente sin alertas intrusivas.

### Criterios de Aceptación (CA):
- **CA-1:** Los errores de validación de JS deben inyectarse dinámicamente en etiquetas `<span>` con `role="alert"`.
- **CA-2:** Los campos erróneos deben recibir `aria-invalid="true"` y una clase de estilo `.input-error`.
- **CA-3:** Al escribir sobre un campo con error, su respectivo mensaje de alerta debe limpiarse automáticamente.

## US-22: Scroll suave y navegación activa (scroll spy)
**Como** visitante,  
**quiero** que la página se deslice orgánicamente al pulsar el menú y me indique dónde estoy,  
**para** no perder mi contexto de lectura.

### Criterios de Aceptación (CA):
- **CA-1:** Los enlaces ancla deben activar un desplazamiento (*scroll*) suave mediante JS, respetando `prefers-reduced-motion`.
- **CA-2:** Debe utilizarse el `IntersectionObserver` para marcar con la clase `.active` el enlace de la sección actualmente visible.

## US-23: Pestañas del ciclo accesibles con teclado
**Como** jugador casual,  
**quiero** cambiar las fases del ciclo usando mi teclado,  
**para** revisar las mecánicas sin depender del mouse.

### Criterios de Aceptación (CA):
- **CA-1:** El componente de pestañas debe responder a interacciones con las flechas, *Inicio* y *Fin* modificando `aria-selected` y `tabindex`.
- **CA-2:** Debe implementarse la mejora progresiva: si JS falla, los 3 paneles del contenido deben permanecer visibles secuencialmente.

## US-24: Tema Día/Noche manual y persistente
**Como** jugador casual,  
**quiero** poder forzar el modo visual del sitio y que este se guarde,  
**para** disfrutar de la temática oscura aunque mi sistema esté en modo claro.

### Criterios de Aceptación (CA):
- **CA-1:** Los botones de cambio de tema deben conmutar correctamente el modo y actualizar sus atributos `aria-pressed`.
- **CA-2:** La elección debe guardarse en `localStorage` (con `try/catch`) para prevenir pérdida de estado en la recarga, sin causar parpadeo visual al inicializar la página.

## US-25: Voces de la comunidad con fetch (Reto 1)
**Como** Bob (busca confianza),  
**quiero** ver reseñas/testimonios renderizados dinámicamente,  
**para** sentir validación antes de descargar.

### Criterios de Aceptación (CA):
- **CA-1:** Se debe consumir asíncronamente la API `randomuser.me` mediante `fetch` y `try/catch` mostrando un indicador de carga (`role="status"`).
- **CA-2:** Deben renderizarse 3 tarjetas con diseño coherente o mostrar un mensaje de error integrado al DOM si la petición falla.

## US-26: Aparición al hacer scroll (Reto 3)
**Como** visitante,  
**quiero** que las secciones se revelen fluidamente a medida que desciendo,  
**para** disfrutar de una experiencia inmersiva.

### Criterios de Aceptación (CA):
- **CA-1:** Los elementos con `.animate-on-scroll` deben hacerse visibles al intersectar el *viewport* usando `IntersectionObserver` y animarse una única vez.
- **CA-2:** Debe mostrarse el contenido sin animación si JS está apagado o si el usuario tiene activo `prefers-reduced-motion`.

---

## E4 · Funnel, Marketing y Telemetría

## US-27: Diagrama del embudo de 4 pasos
**Como** equipo de marketing,  
**quiero** un diagrama documentado del embudo de conversión,  
**para** tener claro cómo atraemos, retenemos y medimos a cada arquetipo de usuario.

### Criterios de Aceptación (CA):
- **CA-1:** El archivo `/docs/funnel.md` debe incluir un diagrama Mermaid detallando los flujos TOFU, MOFU y BOFU.
- **CA-2:** El diagrama debe especificar el canal, el arquetipo (Pato, Lía, Bob) y la métrica de éxito de cada etapa.

## US-28: Canales de atracción (físico y digital)
**Como** equipo de marketing,  
**quiero** estructurar los canales de entrada para cada audiencia,  
**para** ejecutar campañas con copies unificados (póster, redes).

### Criterios de Aceptación (CA):
- **CA-1:** Deben definirse al menos un canal físico (ej. sobres de semillas/póster) y uno digital, incluyendo el copy publicitario y costo estimado basado en el Plan de Marketing.

## US-29: Etiquetado UTM y códigos QR
**Como** equipo de telemetría,  
**quiero** URLs etiquetadas y QR dinámicos,  
**para** rastrear qué campaña genera más conversiones en la landing.

### Criterios de Aceptación (CA):
- **CA-1:** Debe definirse una tabla de parámetros `?src=` y generar QRs probados con enlaces cortos redirigibles para los canales físicos.
- **CA-2:** Las URLs de los QRs deben dirigir sin errores al hosting público de la landing.

## US-30: Material de marketing integrado en la landing
**Como** visitante atraído por un TikTok o Póster,  
**quiero** que la web coincida exactamente con lo que vi en publicidad,  
**para** no generar fricción cognitiva.

### Criterios de Aceptación (CA):
- **CA-1:** El eslogan principal, logotipo y arte gráfico usado en el marketing deben estar implementados en la cabecera y cuerpo de la página.
- **CA-2:** La sección para creadores debe mencionar explícitamente recursos como el Kit de Prensa y la mecánica de semillas físicas.

## US-31: Showcase multimedia (tráiler, gameplay, capturas)
**Como** Pato (jugador casual),  
**quiero** ver videos y pantallazos del juego,  
**para** validar el apartado visual antes de descargar.

### Criterios de Aceptación (CA):
- **CA-1:** La sección `#showcase` debe contener una galería interactiva accesible con al menos 4 imágenes rotuladas honestamente (conceptual o gameplay).
- **CA-2:** Debe incluir un visor Lightbox con soporte para salida mediante la tecla Escape.
- **CA-3:** Las piezas mostradas deben ser estrictamente los *assets* exportados y compilados en la US-03.

## US-32: CTA principal, demo y registro anticipado
**Como** Bob (equipo modesto),  
**quiero** ver los requisitos de la demo,  
**para** saber si corre en mi PC de gama baja.

### Criterios de Aceptación (CA):
- **CA-1:** El CTA debe estar unificado y dirigir explícitamente a la sección de `#demo` informando que el formato está optimizado para PC de gama baja (mitigando la decisión D-02 y el riesgo R-03).
- **CA-2:** Debe aclararse que el juego es *single-player offline* e incorporar un CTA secundario hacia un registro anticipado con hitos comunitarios.

## US-33: Ficha técnica del equipo desarrollador
**Como** inversor o docente,  
**quiero** ver los créditos técnicos,  
**para** conocer a los creadores y herramientas usadas.

### Criterios de Aceptación (CA):
- **CA-1:** La sección `#equipo` debe detallar a los integrantes con foto/avatar (`alt`), rol y medios de contacto.
- **CA-2:** La ficha debe exponer plataformas, género, motor y versión actual.

## US-34: Cross-promotion con dos proyectos de compañeros
**Como** compañero de clase,  
**quiero** que mi juego sea promocionado en esta landing,  
**para** generar tráfico cruzado entre nuestros ecosistemas.

### Criterios de Aceptación (CA):
- **CA-1:** La sección `#aliados` debe contener 2 tarjetas funcionales con sinopsis, imagen y CTA externo.
- **CA-2:** Los enlaces externos deben poseer atributos de rastreo `data-track` para medir la sinergia con los proyectos hermanos.

## US-35: Cuestionario de validación para el Demo Day
**Como** asistente al evento,  
**quiero** un formulario muy corto,  
**para** dar mi feedback sin perder tiempo en el stand.

### Criterios de Aceptación (CA):
- **CA-1:** Debe existir un formulario externo (Tally, Forms) alcanzable vía URL/QR que no supere los 3 minutos de duración.
- **CA-2:** Debe medir usabilidad (Likert), claridad en 10 segundos e incluir una escala NPS (obligatoria).

## US-36: Definición de métricas (especificación para la API)
**Como** desarrollador de la Parte 5,  
**quiero** un contrato claro de los eventos a medir,  
**para** programar el *backend* de telemetría sin ambigüedades.

### Criterios de Aceptación (CA):
- **CA-1:** Debe existir `/docs/metricas.md` justificando las 4 familias de métricas: Atracción, Interacción, Sinergia y Feedback.
- **CA-2:** Debe documentar explícitamente el contrato de los eventos a capturar (`session_id`, `src`, `timestamp`, `target`) garantizando que no procesarán datos personales sensibles.

## US-37: Instrumentación de la landing para telemetría
**Como** equipo de analítica,  
**quiero** que el Front-End ya etiquete los clics y el origen,  
**para** solo tener que conectar la API posteriormente.

### Criterios de Aceptación (CA):
- **CA-1:** La landing debe leer y persistir el parámetro `?src` en `sessionStorage`.
- **CA-2:** Los CTAs críticos (Demo, Tráiler, Aliados) deben tener el atributo `data-track` para ser despachados a una cola interna de la consola que use una variable `API_BASE` (preparado para la Parte 5).

## US-38: Landing publicada en una URL pública
**Como** visitante escaneando el sobre físico,  
**quiero** abrir el sitio en mi celular usando datos móviles,  
**para** poder acceder a la demo desde el evento.

### Criterios de Aceptación (CA):
- **CA-1:** El código final debe publicarse en un servicio de *hosting* estático gratuito con protocolo HTTPS.
- **CA-2:** La consola no debe arrojar errores 404 de *assets* y el sitio debe ser operativo bajo redes del campus.