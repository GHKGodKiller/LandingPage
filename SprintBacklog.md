## Desglose en Tareas Técnicas Atómicas (Máx. 30 min por tarea)

### US-01: Hero Section del Videojuego

* **Tarea 1.1:** Maquetar la estructura contenedora principal con la etiqueta semántica `<section id="hero">`, incorporando el encabezado jerárquico único `<h1>` para el título principal del juego y un párrafo `<p>` para el tagline/pitch de impacto promocional (15 min).

* **Tarea 1.2:** Crear el enlace de llamada a la acción (CTA) primario con `<a href="Yolcatl-Demo.apk" download>` agregando la etiqueta accesibles `aria-label="Descargar demo ejecutable APK para Android"` (10 min).

* **Tarea 1.3:** Configurar el enlace secundario "Ver Tráiler" mediante la etiqueta `<a>` asignando los atributos de seguridad y contexto `target="_blank"` y `rel="noopener noreferrer"`, incluyendo un `<span class="sr-only">` para indicar a lectores de pantalla que el contenido se abre en una ventana nueva (10 min).

* **Tarea 1.4:** Maquetar el contenedor de imagen responsivo con las etiquetas semánticas `<figure>` y `<picture>`, definiendo etiquetas `<source>` de reserva y la etiqueta `<img>` con el atributo `alt` detallado para la descripción accesible del arte principal (15 min).

### US-06: Formulario de Comunidad y Registro a Newsletter

* **Tarea 6.1:** Crear la estructura contenedora `<section id="comunidad">` y maquetar el formulario semántico `<form id="newsletter-form">` asociando explícitamente un elemento `<label for="email-input">` para identificar la entrada (15 min).

* **Tarea 6.2:** Definir el campo de entrada `<input id="email-input" type="email">` configurando validación HTML5 nativa con los atributos `required`, `autocomplete="email"` y `aria-required="true"` (10 min).

* **Tarea 6.3:** Maquetar el botón de envío del formulario `<button type="submit">` con texto descriptivo claro e integrar la región de anuncios accesibles `<div id="form-feedback" aria-live="polite">` para comunicar el resultado a tecnologías asistivas sin recargar la página (15 min).

* **Tarea 6.4:** Agrupar los enlaces a canales de comunidad dentro de un elemento de navegación `<nav aria-label="Canales de la comunidad">` utilizando una lista desordenada `<ul>` y elementos `<li>` con sus respectivos hipervínculos `<a>` accesibles (15 min).

## US-09: Roadmap de Desarrollo

* **Tarea 9.1:** Maquetar la estructura contenedora principal utilizando la etiqueta semántica <section id="roadmap"> y una lista ordenada <ol> para representar de forma secuencial y accesible los hitos del proyecto (15 min).

* **Tarea 9.2:** Definir los estilos CSS base centrados en dispositivos móviles (Mobile First), estructurando los elementos de la línea de tiempo en un diseño vertical fluido mediante Flexbox (20 min).   

* **Tarea 9.3:** Implementar Media Queries en CSS para reorganizar el diseño de la línea de tiempo, transformándolo a una disposición horizontal o en formato de zigzag cuando se visualice en pantallas de escritorio (25 min).   

* **Tarea 9.4:** Crear las clases CSS específicas para los "hitos completados", aplicando colores sólidos y opacos, e insertando un icono SVG de verificación (check) para destacarlos visualmente (20 min).   

* **Tarea 9.5:** Codificar las clases CSS para los "hitos futuros", ajustando la propiedad opacity para aplicar un efecto translúcido y configurando bordes con border-style: dashed para crear las líneas conectoras punteadas (15 min).   

* **Tarea 9.6:** Escribir la lógica en JavaScript instanciando la Intersection Observer API para rastrear los elementos del roadmap y detectar el momento exacto en el que cruzan el umbral del viewport durante el scroll (30 min).   

* **Tarea 9.7:** Configurar la animación de entrada (fade-in) mediante transiciones CSS y enlazarla con el script del Observer para que la clase de visibilidad se active dinámicamente, logrando el impacto visual requerido (20 min).

## US-10: Carrusel Interactivo de Capturas de Pantalla

* **Tarea 10.1:** Maquetar la estructura HTML de la galería de capturas, utilizando las etiquetas <picture> y <source> para definir las imágenes en formato de nueva generación (WebP), y añadiendo el atributo loading="lazy" en las etiquetas <img> para evitar penalizaciones en el LCP (25 min).   

* **Tarea 10.2:** Configurar el CSS del contenedor principal del carrusel, implementando propiedades como overflow-x: auto y scroll-snap-type: x mandatory para habilitar de forma nativa la navegación mediante gestos de deslizamiento (swipe) en dispositivos móviles (20 min).   

* **Tarea 10.3:** Maquetar y posicionar los controles de interfaz (botones de flecha anterior y siguiente) exclusivos para la vista de escritorio, escribiendo el script en JavaScript que gestione el desplazamiento horizontal del contenedor al hacer clic (30 min).

* **Tarea 10.4:** Construir la estructura semántica y los estilos CSS para el componente Modal (Lightbox), asegurando que se superponga a pantalla completa e incluya un botón claramente visible y accesible para cerrarlo (25 min).

* **Tarea 10.5:** Escribir la lógica en JavaScript para capturar el evento click sobre las imágenes del carrusel, encargándose de inyectar la ruta de la imagen seleccionada dentro del Modal y cambiar su estado CSS para mostrarlo en pantalla (20 min).

* **Tarea 10.6:** Implementar un detector de eventos (addEventListener) a nivel global en el documento mediante JavaScript para capturar la interacción del teclado, evaluando específicamente la tecla Escape para disparar la función de cierre del componente Modal (15 min). 