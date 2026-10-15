# Sprint Backlog: YOLCATL
## Desglose en Tareas
### US-01: Hero Section del Videojuego
* **Tarea 1.1:** Maquetar la estructura contenedora principal con la etiqueta semántica `<section id="hero">`, incorporando el encabezado jerárquico único `<h1>` para el título principal del juego y un párrafo `<p>` para el tagline/pitch de impacto promocional (15 min).
* **Tarea 1.2:** Crear el enlace de llamada a la acción (CTA) primario con `<a href="Yolcatl-Demo.apk" download>` agregando la etiqueta accesible `aria-label="Descargar demo ejecutable APK para Android"` (10 min).
* **Tarea 1.3:** Configurar el enlace secundario "Ver Tráiler" mediante la etiqueta `<a>` asignando los atributos de seguridad y contexto `target="_blank"` y `rel="noopener noreferrer"`, incluyendo un `<span class="sr-only">` para indicar a lectores de pantalla que el contenido se abre en una ventana nueva (10 min).
* **Tarea 1.4:** Maquetar el contenedor de imagen responsivo con las etiquetas semánticas `<figure>` y `<picture>`, definiendo etiquetas `<source>` de reserva y la etiqueta `<img>` con el atributo `alt` detailed para la descripción accesible del arte principal (15 min).

---

### US-06: Formulario de Comunidad y Registro a Newsletter
* **Tarea 6.1:** Crear la estructura contenedora `<section id="comunidad">` y maquetar el formulario semántico `<form id="newsletter-form">` asociando explícitamente un elemento `<label for="email-input">` para identificar la entrada (15 min).
* **Tarea 6.2:** Definir el campo de entrada `<input id="email-input" type="email">` configurando validación HTML5 nativa con los atributos `required`, `autocomplete="email"` y `aria-required="true"` (10 min).
* **Tarea 6.3:** Maquetar el botón de envío del formulario `<button type="submit">` con texto descriptivo claro e integrar la región de anuncios accesibles `<div id="form-feedback" aria-live="polite">` para comunicar el resultado a tecnologías asistivas sin recargar la página (15 min).
* **Tarea 6.4:** Agrupar los enlaces a canales de comunidad dentro de un elemento de navegación `<nav aria-label="Canales de la comunidad">` utilizando una lista desordenada `<ul>` y elementos `<li>` con sus respectivos hipervínculos `<a>` accesibles (15 min).

---

### US-09: Roadmap de Desarrollo
* **Tarea 9.1:** Maquetar la estructura contenedora principal utilizando la etiqueta semántica `<section id="roadmap">` y una lista ordenada `<ol>` para representar de forma secuencial y accesible los hitos del proyecto (15 min).
* **Tarea 9.2:** Definir los estilos CSS base centrados en dispositivos móviles (Mobile-First), estructurando los elementos de la línea de tiempo en un diseño vertical fluido mediante Flexbox (20 min).
* **Tarea 9.3:** Implementar Media Queries en CSS para reorganizar el diseño de la línea de tiempo, transformándolo a una disposición horizontal o en formato de zigzag cuando se visualice en pantallas de escritorio (25 min).
* **Tarea 9.4:** Crear las clases CSS específicas para los "hitos completados", aplicando colores sólidos y opacos, e insertando un icono SVG de verificación (check) para destacarlos visualmente (20 min).
* **Tarea 9.5:** Codificar las clases CSS para los "hitos futuros", ajustando la propiedad `opacity` para aplicar un efecto translúcido y configurando bordes con `border-style: dashed` para crear las líneas conectoras punteadas (15 min).
* **Tarea 9.6:** Escribir la lógica en JavaScript instanciando la Intersection Observer API para rastrear los elementos del roadmap y detectar el momento exacto en el que cruzan el umbral del viewport durante el scroll (30 min).
* **Tarea 9.7:** Configurar la animación de entrada (fade-in) mediante transiciones CSS y enlazarla con el script del Observer para que la clase de visibilidad se active dinámicamente, logrando el impacto visual requerido (20 min).

---

### US-10: Carrusel Interactivo de Capturas de Pantalla
* **Tarea 10.1:** Maquetar la estructura HTML de la galería de capturas, utilizando las etiquetas `<picture>` y `<source>` para definir las imágenes en formato WebP, y añadiendo el atributo `loading="lazy"` en las etiquetas `<img>` para evitar penalizaciones en el LCP (25 min).
* **Tarea 10.2:** Configurar el CSS del contenedor principal del carrusel, implementando propiedades como `overflow-x: auto` y `scroll-snap-type: x mandatory` para habilitar de forma nativa la navegación mediante gestos de deslizamiento (*swipe*) en dispositivos móviles (20 min).
* **Tarea 10.3:** Maquetar y posicionar los controles de interfaz (botones de flecha anterior y siguiente) exclusivos para la vista de escritorio, escribiendo el script en JavaScript que gestione el desplazamiento horizontal del contenedor al hacer clic (30 min).
* **Tarea 10.4:** Construir la estructura semántica y los estilos CSS para el componente Modal (Lightbox), asegurando que se superponga a pantalla completa e incluya un botón claramente visible y accesible para cerrarlo (25 min).
* **Tarea 10.5:** Escribir la lógica en JavaScript para capturar el evento click sobre las imágenes del carrusel, encargándose de inyectar la ruta de la imagen seleccionada dentro del Modal y cambiar su estado CSS para mostrarlo en pantalla (20 min).
* **Tarea 10.6:** Implementar un detector de eventos (`addEventListener`) a nivel global en el documento mediante JavaScript para capturar la interacción del teclado, evaluando específicamente la tecla *Escape* para disparar la función de cierre del componente Modal (15 min).

---

### US-13: Sistema de Diseño Base, Variables CSS & Reset Global
* **Tarea 13.1:** Escribir las reglas del CSS Reset global incorporando el selector universal `*, *::before, *::after` fijando la propiedad `box-sizing: border-box`, `margin: 0` y `padding: 0` para eliminar inconsistencias entre navegadores (15 min).
* **Tarea 13.2:** Declarar el bloque de variables en `:root` definiendo la paleta cromática oficial de YOLCATL (Papel Pink `#E4007C`, Marigold Orange `#FF7F00`, Talavera Blue `#003893`), escalas de fuentes, sombras y espaciados (20 min).
* **Tarea 13.3:** Importar e implementar una tipografía legible de Google Fonts (*Outfit* o *Plus Jakarta Sans*) en la cabecera e integrarla al elemento `body` garantizando legibilidad óptima en 320px (15 min).

---

### US-14: Layouts Responsivos Mobile-First (Flexbox & Grid)
* **Tarea 14.1:** Estilizar el menú de navegación con Flexbox en arquitectura Mobile-First (disposición en columna para móviles <768px y cambio en media query a fila con espacio distribuido en desktop >768px) (20 min).
* **Tarea 14.2:** Configurar la sección del Bestiario y características principales con CSS Grid utilizando `grid-template-columns: 1fr` en móvil, ampliando progresivamente a 2 y 4 columnas mediante `min-width` media queries (25 min).
* **Tarea 14.3:** Aplicar un layout flexible al contenedor del Hero para centrar vertical y horizontalmente su contenido, verificando que no exista scroll horizontal al escalar el viewport entre 320px y 1280px (20 min).

---

### US-15: Estilización Temática Avanzada de Secciones
* **Tarea 15.1:** Diseñar el fondo del Hero empleando un gradiente de color personalizado de marca (`#003893` a `#E4007C`) generado con CSS y aplicar estados `:hover` e hipervínculos a los botones CTA (20 min).
* **Tarea 15.2:** Aplicar sombras (`box-shadow`), bordes temáticos (`border-left`) y rellenos a las tarjetas de contenido del Bestiario e historia (20 min).
* **Tarea 15.3:** Estilizar los campos de entrada e insumos del formulario de la comunidad definiendo estilos claros para el estado `:focus-visible` con contorno de alto contraste (15 min).
* **Tarea 15.4:** Maquetar y estilizar la sección del Footer con fondo oscuro de marca y organización en fila/columnas flexibles utilizando Flexbox (20 min).

---

### US-16: Modo Oscuro Automático y Contraste WCAG
* **Tarea 16.1:** Configurar la regla `@media (prefers-color-scheme: dark)` redefiniendo las variables de fondo (`--bg-main`), superficie (`--bg-card`) y texto (`--text-primary`) hacia tonos de Oscuridad Terrosa nocturna (20 min).
* **Tarea 16.2:** Realizar pruebas de auditoría con Lighthouse en ambos modos (Claro/Oscuro) verificando que el ratio de contraste sea igual o superior a 4.5:1 en todos los textos legibles (20 min).

---

### US-17: Animaciones CSS y Accesibilidad de Movimiento
* **Tarea 17.1:** Crear la animación `@keyframes fadeIn` y aplicarla al contenido de la sección Hero al cargar la página (15 min).
* **Tarea 17.2:** Agregar transiciones suaves (`transition: transform 0.3s, box-shadow 0.3s`) y efecto de elevación al pasar el cursor sobre las tarjetas de la landing page (15 min).
* **Tarea 17.3:** Implementar el bloque `@media (prefers-reduced-motion: reduce)` para anular o simplificar las animaciones y transiciones a usuarios que lo tengan configurado en su sistema operativo (15 min).

---

### US-18: Menú Hamburguesa Interactivo y Accesible
* **Tarea 18.1:** Insertar el botón semántico `<button class="menu-toggle" id="menu-toggle" aria-expanded="false" aria-label="Abrir menú de navegación" aria-controls="nav-links">` dentro del `<nav>` del archivo `index.html` (10 min).
* **Tarea 18.2:** Escribir el listener `addEventListener('click')` en `main.js` para alternar la clase CSS `.nav-open` en la lista de enlaces e intercambiar los valores booleanos de `aria-expanded` (15 min).
* **Tarea 18.3:** Agregar listeners a cada enlace del menú (`.nav-links a`) para remover la clase `.nav-open` y restablecer `aria-expanded="false"` al seleccionar una sección (15 min).

---

### US-19: Validación de Formulario en Cliente y Feedback ARIA
* **Tarea 19.1:** Capturar el evento `submit` en el formulario `#newsletter-form` utilizando `e.preventDefault()` en `main.js` (10 min).
* **Tarea 19.2:** Escribir la función de validación que evalúe la longitud del nombre (>=2 caracteres), formato de correo regex y longitud de comentario (>=10 caracteres) (20 min).
* **Tarea 19.3:** Crear dinámicamente mediante `document.createElement('span')` los elementos de mensaje de error asignándoles `role="alert"` y la clase `.error-msg` para inyectarlos debajo del campo correspondiente (20 min).
* **Tarea 19.4:** Marcar o desmarcar los inputs con `aria-invalid="true"` / `"false"` y remover los mensajes de error de campos previamente corregidos al reenviar (15 min).

---

### US-20: Smooth Scrolling Integrado y Carga Defer
* **Tarea 20.1:** Enlazar el script externo `<script src="main.js" defer></script>` justo antes del cierre del `</body>` en `index.html` (5 min).
* **Tarea 20.2:** Seleccionar los enlaces de salto ancla `document.querySelectorAll('a[href^="#"]')` y programar la función de desplazamiento con `scrollIntoView({ behavior: 'smooth', block: 'start' })` (15 min).
* **Tarea 20.3:** Probar de manera integral que al pulsar un enlace ancla en pantallas de 375px de ancho se ejecute el scroll suave y la cortina del menú hamburguesa se retire en sincronía (15 min).