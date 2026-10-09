# Product Backlog: YOLCATL

Este documento contiene las Historias de Usuario (User Stories) y Criterios de Aceptación técnicos para el desarrollo y optimización de la landing page promocional del videojuego **YOLCATL**.

---

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
- **CA-1:** La sección del Bestiario debe renderizarse utilizando un contenedor con CSS Grid responsivo (1 columna en móvil, 2 en tablet, 3 en desktop).
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