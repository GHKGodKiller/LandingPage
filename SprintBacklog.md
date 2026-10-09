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