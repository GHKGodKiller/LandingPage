# Product Backlog: YOLCATL
## US-01: Hero Section & Llamado a la Acción (CTA)
**Como** jugador potencial o visitante que llega por primera vez al sitio web,  
**quiero** visualizar de forma inmediata el título, el tagline del juego y botones claros de llamada a la acción en la sección Hero,  
**para** entender de inmediato la propuesta de valor del juego y probar la demo o ver el tráiler promocional sin rodeos.

### Criterios de Aceptación (CA):
- **CA-1:** La sección Hero debe incluir un título principal `<h1>` visible, un subtítulo descriptivo del género (*Cozy Farming & Bullet Heaven*) y dos botones primarios de CTA ("Descargar Demo" APK y "Ver Tráiler").
- **CA-2:** El botón "Descargar Demo" debe iniciar la descarga directa del archivo ejecutable o APK del juego de forma transparente.
- **CA-3:** El botón "Ver Tráiler" debe abrir una pestaña externa hacia la plataforma de video (YouTube/Vimeo) configurada con atributos `target="_blank"` y `rel="noopener noreferrer"`.

---

## US-02: Navegación Semántica y Accesible
**Como** usuario con requerimientos de accesibilidad o navegación por teclado,  
**quiero** disponer de una barra de navegación superior accesible con enlaces ancla hacia las secciones principales,  
**para** desplazarme fluidamente por la página y saltar directamente a las áreas de mi interés.

### Criterios de Aceptación (CA):
- **CA-1:** El menú de navegación debe implementarse con el elemento semántico `<nav>` y enlaces `<a>` apuntando a los identificadores (`#hacienda`, `#ciclo`, `#alquimia`, `#metamorfosis`).
- **CA-2:** En pantallas con ancho menor o igual a 768px (móviles/tablets), el menú debe reorganizarse verticalmente (*stack flexbox*) sin provocar scroll horizontal.
- **CA-3:** La página debe incluir un enlace semántico visible únicamente mediante foco por teclado (`.sr-only:focus`) que permita saltar directamente al contenido principal (`#contenido`).

---

## US-03: Gameplay & Características Principales (Ciclo de Juego)
**Como** jugador exigente o reviewer de videojuegos indie,  
**quiero** explorar una sección interactiva sobre las fases del ciclo de juego (Exploración, Alquimia AR y Supervivencia Nocturna),  
**para** comprender la profundidad de las mecánicas principales y la innovación del proyecto.

### Criterios de Aceptación (CA):
- **CA-1:** La sección debe implementar un componente de pestañas (*Tabs*) accesible mediante roles WAI-ARIA (`role="tablist"`, `role="tab"`, `role="tabpanel"`).
- **CA-2:** Las pestañas deben ser navegables mediante teclado utilizando las teclas de flecha izquierda/derecha, tecla *Inicio* y *Fin*.
- **CA-3:** Cada pestaña activa debe mostrar de forma dinámica sus 4 subfases o mecánicas clave con retroalimentación visual clara.

---

## US-04: Lore, Sinopsis y Bestiario Nahual
**Como** aficionado a las narrativas y la cultura mexicana,  
**quiero** consultar el contexto argumental y las transformaciones de las criaturas (Bestiario),  
**para** conocer la historia del mundo y cómo las habilidades de los animales cambian entre el día y la noche.

### Criterios de Aceptación (CA):
- **CA-1:** La sección del Bestiario debe renderizarse utilizando un contenedor con CSS Grid responsivo (1 columna en móvil, 2 en tablet, 3-4 en desktop).
- **CA-2:** La información de las habilidades de cada criatura debe conmutarse dinámicamente entre el modo Hacienda (Día) y modo Defensa (Noche) al reaccionar al estado del tema activo (`.dark` / `.light`).
- **CA-3:** Cada tarjeta del Bestiario debe mantener un borde distintivo que identifique el tipo de criatura respetando la paleta de colores del sistema de diseño.

---

## US-05: Galería de Medios y Conmutación Visual (Día/Noche)
**Como** creador de contenido o publisher,  
**quiero** alternar entre el modo Claro (Día) y Oscuro (Noche) mediante un interruptor flotante o preferencia de sistema,  
**para** visualizar el contraste estético de la hacienda colonial y verificar el acabado visual del juego.

### Criterios de Aceptación (CA):
- **CA-1:** El sitio debe detectar automáticamente la preferencia del sistema operativo mediante la media query `@media (prefers-color-scheme: dark)`.
- **CA-2:** El conmutador flotante debe permitir el cambio manual de tema persistiéndolo en el almacenamiento local (`localStorage.setItem('yolcatl-theme')`).
- **CA-3:** La imagen del Hero debe conmutarse automáticamente entre `HaciendaDia.png` y `HaciendaNoche.png` en sincronía con el tema seleccionado.

---

## US-06: Comunidad y Registro a Newsletter
**Como** miembro de la comunidad gamer,  
**quiero** suscribirme con mi correo electrónico a la newsletter del estudio,  
**para** recibir noticias sobre fechas de beta, lore exclusivo y actualizaciones del desarrollo.

### Criterios de Aceptación (CA):
- **CA-1:** El formulario de suscripción debe contar con un campo de entrada de tipo `email` validado con atributos `required` y etiqueta accesible `<label>`.
- **CA-2:** El envío del formulario debe comunicarse de manera asíncrona mediante un `POST` al endpoint `/subscribe` gestionado por el servidor Express/SQLite.
- **CA-3:** El sistema debe notificar el resultado (suscripción exitosa, correo duplicado o error de servidor) mediante un componente dinámico de tipo Toast sin recargar la página.

---

## US-07: Footer Institucional, Créditos y Glosario
**Como** visitante o periodista de la industria,  
**quiero** acceder a los enlaces de soporte, kit de prensa, glosario lingüístico y canales sociales en el pie de página,  
**para** ponerme en contacto con el estudio desarrollador o descargar recursos oficiales de cobertura.

### Criterios de Aceptación (CA):
- **CA-1:** El pie de página debe organizarse utilizando el elemento semántico `<footer>` con enlaces divididos en columnas semánticas ("EXPLORA" y "CREADORES").
- **CA-2:** Debe incluir enlaces de descarga directa para el archivo `KitPrensa.zip` y accesos externos a las comunidades de Discord e itch.io.
- **CA-3:** Todos los enlaces externos e interactivos del footer deben contar con estados de foco visibles y textos alternativos para lectores de pantalla.

---

## US-08: Soporte Multiidioma
**Como** jugador internacional o publisher extranjero,  
**quiero** poder cambiar el idioma de la página entre Español e Inglés mediante un selector,  
**para** comprender completamente la historia, las mecánicas del juego y los pasos para descargar la demo en mi idioma nativo.

### Criterios de Aceptación (CA):
- **CA-1:** Se debe implementar un selector de idioma (ES/EN) accesible en la barra de navegación superior con iconos de banderas o texto abreviado.
- **CA-2:** La elección de idioma del usuario debe guardarse en `localStorage` (`yolcatl-lang`) para que se mantenga persistentemente en futuras visitas.
- **CA-3:** Todos los textos del sitio (titulares, botones, descripciones de bestiario) deben cargarse dinámicamente desde archivos JSON de traducción sin recargar la página.

---

## US-09: Roadmap de Desarrollo
**Como** fan del proyecto o posible inversor,  
**quiero** visualizar un mapa de ruta (Roadmap) del desarrollo en forma de línea de tiempo,  
**para** saber en qué fase se encuentra el juego actualmente y cuándo se esperan las próximas betas o el lanzamiento final.

### Criterios de Aceptación (CA):
- **CA-1:** La línea de tiempo debe renderizarse con un diseño vertical en dispositivos móviles y horizontal o en zigzag en pantallas de escritorio.
- **CA-2:** Los hitos completados deben diferenciarse visualmente (iconos con check, colores sólidos) de los hitos futuros (líneas punteadas, colores translúcidos).
- **CA-3:** Los elementos de la línea de tiempo deben incluir una animación de entrada (fade-in) vinculada al scroll usando Intersection Observer.

---

## US-10: Carrusel Interactivo de Capturas de Pantalla
**Como** visitante interesado en el arte visual del juego,  
**quiero** explorar una galería de capturas de pantalla de alta resolución mediante un carrusel,  
**para** apreciar los detalles gráficos de la hacienda y el caos de los combates Bullet Heaven nocturnos.

### Criterios de Aceptación (CA):
- **CA-1:** El carrusel debe permitir la navegación mediante gestos de deslizamiento (*swipe*) en móviles y botones de flechas en escritorio.
- **CA-2:** Al hacer clic en una imagen, esta debe abrirse en un componente Modal (Lightbox) a pantalla completa con botón de cierre y soporte para la tecla *Escape*.
- **CA-3:** Las imágenes de la galería deben implementar `loading="lazy"` y formato WebP para evitar penalizaciones en el tiempo de carga (LCP).

---

## US-11: Vista Previa Escaneable de Alquimia AR
**Como** usuario navegando desde una computadora de escritorio,  
**quiero** ver un código QR dinámico en la sección de "Alquimia AR",  
**para** escanearlo con mi móvil y probar una pequeña demostración de realidad aumentada web sin instalar nada.

### Criterios de Aceptación (CA):
- **CA-1:** En resoluciones de escritorio (>768px), la sección AR debe generar y mostrar un código QR que apunte a la URL WebAR.
- **CA-2:** En resoluciones móviles, el código QR debe ocultarse y reemplazarse por un botón principal que diga "Probar Filtro AR Ahora".
- **CA-3:** Al acceder a la URL de la demo, la aplicación debe solicitar los permisos de cámara y manejar rechazos con mensajes amigables.

---

## US-12: Optimización SEO y Tarjetas Sociales
**Como** encargado de marketing del estudio indie,  
**quiero** que la página cuente con meta etiquetas configuradas para redes sociales,  
**para** que al compartir el enlace en Twitter, Discord o WhatsApp, se genere automáticamente una tarjeta visual atractiva.

### Criterios de Aceptación (CA):
- **CA-1:** La cabecera `<head>` debe incluir etiquetas Open Graph (`og:title`, `og:description`, `og:image`) y Twitter Cards.
- **CA-2:** La imagen definida en `og:image` debe tener una resolución recomendada de 1200x630 píxeles.
- **CA-3:** El documento HTML debe mantener una jerarquía de encabezados (`<h1>` a `<h3>`) bien estructurada y puntuar >90 en SEO en Lighthouse.

---

## US-13: Sistema de Diseño Base, Variables CSS & Reset Global
**Como** diseñador UI/UX y desarrollador web,  
**quiero** establecer un sistema de tokens en `:root` con un reset CSS unificado y regla global `box-sizing: border-box`,  
**para** evitar desbordamientos inesperados, eliminar inconsistencias de navegadores y garantizar que el sitio cargue fuentes profesionales legibles.

### Criterios de Aceptación (CA):
- **CA-1:** Todo el archivo CSS debe aplicar la regla `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }`.
- **CA-2:** Se deben definir en `:root` las variables de color del Pitch Deck: Papel Pink (`#E4007C`), Marigold Orange (`#FF7F00`), Talavera Blue (`#003893`), así como escalas de espaciado, bordes y sombras.
- **CA-3:** El documento debe cargar e implementar una tipografía legible de Google Fonts (*Outfit* o *Plus Jakarta Sans*) vinculada al `font-family` principal del `body`.

---

## US-14: Layouts Responsivos Integrales Mobile-First (Flexbox & Grid)
**Como** usuario que navega desde cualquier dispositivo (móvil 320px, tablet 768px o desktop 1024px+),  
**quiero** que el layout se adapte mediante Flexbox y CSS Grid sin generar scroll horizontal en ningún punto de la pantalla,  
**para** navegar la landing page con fluidez y perfecta legibilidad.

### Criterios de Aceptación (CA):
- **CA-1:** El menú de navegación debe usar Flexbox (stack vertical en móvil <768px, distribución horizontal con logo a la izquierda y links a la derecha en desktop).
- **CA-2:** La sección de características y Bestiario debe usar CSS Grid con 1 columna en móvil (320px), 2 en tablet (768px) y 3-4 columnas en desktop (1024px+).
- **CA-3:** El área Hero debe estar centrada vertical y horizontalmente mediante Flexbox/Grid responsivo y probarse sin scroll horizontal entre 320px y 1280px.

---

## US-15: Estilización Temática Avanzada de Secciones
**Como** visitante,  
**quiero** que cada sección del sitio (Hero, Tarjetas, About, Contacto/Newsletter, Footer) presente un acabado gráfico pulido con gradientes de marca y estados visuales explícitos,  
**para** tener una experiencia inmersiva alineada a la estética Pop-Folclórica de YOLCATL.

### Criterios de Aceptación (CA):
- **CA-1:** La sección Hero debe incluir un fondo con gradiente atractivo generado para la marca (`#003893` a `#E4007C`) y un botón CTA con efecto `:hover`.
- **CA-2:** Las tarjetas de características deben incluir sombras dinámicas, bordes de acento (`var(--marigold-orange)`) e indicadores visuales de categoría.
- **CA-3:** El formulario de suscripción debe mostrar estados de `:focus-visible` con un contorno nítido de alta visibilidad en campos e insumos.

---

## US-16: Modo Oscuro Automático y Accesibilidad de Contraste
**Como** usuario con preferencia de visualización nocturna en mi sistema operativo,  
**quiero** que el sitio reaccione automáticamente con la media query `@media (prefers-color-scheme: dark)`,  
**para** navegar cómodamente en baja luz sin perder legibilidad ni violar el contraste mínimo requeridos por la norma WCAG.

### Criterios de Aceptación (CA):
- **CA-1:** El sitio debe conmutar automáticamente su paleta hacia la "Oscuridad Terrosa" al detectar la preferencia nocturna en el SO.
- **CA-2:** El ratio de contraste entre texto y fondo debe mantenerse en un mínimo de 4.5:1 para texto normal en ambos temas, evaluable mediante Lighthouse.
- **CA-3:** Las variables de superficie, tarjetas e imágenes promocionales deben actualizarse dinámicamente sin romper la estructura de cajas.

---

## US-17: Animaciones CSS Sutiles y Accesibilidad de Movimiento Reducido
**Como** usuario sensible al movimiento o navegante de la landing page,  
**quiero** apreciar animaciones sutiles (fade-in, elevación de tarjetas, transiciones) que respeten mi configuración del sistema `prefers-reduced-motion`,  
**para** disfrutar de una experiencia rica e interactiva sin sufrir mareos o distracciones.

### Criterios de Aceptación (CA):
- **CA-1:** El contenido del Hero debe cargar con un efecto de entrada gradual (*fade-in*) por opacidad y desplazamiento sutil.
- **CA-2:** Las tarjetas deben elevarse ligeramente (`transform: translateY(-4px)`) y proyectar sombra al pasar el cursor (`:hover`).
- **CA-3:** Todo estilo con animación debe deshabilitarse o simplificarse dentro del bloque `@media (prefers-reduced-motion: reduce)`.

---

## US-18: Menú Hamburguesa Interactivo y Accesible para Móviles
**Como** usuario navegando desde una pantalla móvil (<=375px),  
**quiero** pulsar un botón de menú desplegable (hamburguesa) con feedback táctil inmediato,  
**para** desplegar los enlaces de navegación sin que estorben en el contenido principal y cerrarlo automáticamente al hacer clic en un enlace o fuera del menú.

### Criterios de Aceptación (CA):
- **CA-1:** La barra de navegación debe incluir el botón `<button class="menu-toggle">` con los atributos `aria-expanded="false"`, `aria-label="Abrir menú de navegación"` y `aria-controls="nav-links-list"`.
- **CA-2:** Al presionar el botón en móvil, el script debe alternar la clase `.nav-open` en el contenedor del menú y sincronizar dinámicamente `aria-expanded="true"` / `"false"`.
- **CA-3:** Al hacer clic en cualquier enlace interno `<a>`, el menú móvil debe cerrarse automáticamente retornado la navegación a su estado retraído.

---

## US-19: Validación Avanzada de Formulario en el Cliente y WAI-ARIA Dinámico
**Como** usuario que intenta registrarse a la newsletter o enviar un mensaje,  
**quiero** recibir validación y feedback visual inmediato de mis errores en el navegador antes de enviar el formulario,  
**para** corregir la información de manera clara, accesible y sin perder mis datos.

### Criterios de Aceptación (CA):
- **CA-1:** El script en el cliente debe validar mediante JavaScript que el nombre tenga >= 2 caracteres, el email cumpla con la sintaxis válida y el mensaje/comentario tenga >= 10 caracteres.
- **CA-2:** En caso de invalidez, se deben inyectar dinámicamente en el DOM mensajes de error contenidos en etiquetas `<span>` configuradas con `role="alert"` y asociadas mediante `aria-invalid="true"` en los campos correspondientes.
- **CA-3:** Si se reenvía el formulario con correcciones parciales, solo deben permanecer visibles en el DOM los mensajes de error de los campos aún inválidos, eliminando los solucionados.

---

## US-20: Navegación Suave (Smooth Scrolling) e Integración con Menú Móvil
**Como** usuario explorando el sitio por secciones,  
**quiero** que al pulsar un enlace ancla del menú se produzca un desplazamiento suave hacia la sección solicitada,  
**para** mantener la orientación espacial de la página sin saltos bruscos.

### Criterios de Aceptación (CA):
- **CA-1:** Todos los enlaces ancla (`a[href^="#"]`) deben interceptarse mediante `addEventListener` en JS Vanilla para realizar scroll suave con `element.scrollIntoView({ behavior: 'smooth' })`.
- **CA-2:** Al activarse la navegación por enlace ancla, la función debe gestionar simultáneamente el cierre del menú hamburguesa móvil si este se encontraba abierto.
- **CA-3:** Toda la lógica JS debe incluirse en un archivo externo `main.js` enlazado con la directiva `defer` en la etiqueta `<script>`, manteniendo total separación entre estructura HTML y controladores.