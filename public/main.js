document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. NAVEGACIÓN MÓVIL Y ACCESIBILIDAD
       ========================================= */
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksList = document.getElementById('nav-links-list');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (menuToggle && navLinksList) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            const newState = !isExpanded;

            menuToggle.setAttribute('aria-expanded', newState.toString());
            menuToggle.setAttribute('aria-label', newState ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
            navLinksList.classList.toggle('nav-open', newState);
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinksList.classList.contains('nav-open')) {
                    navLinksList.classList.remove('nav-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
                }
            });
        });
    }

    /* =========================================
       2. SCROLL SUAVE (SMOOTH SCROLLING)
       ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* =========================================
       3. TEMA DÍA/NOCHE (DARK MODE)
       ========================================= */
    function applyTheme(theme) {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.toggle('light', theme !== 'dark');
    }

    const savedTheme = localStorage.getItem('yolcatl-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Aplicar tema guardado o preferencia del sistema
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(systemPrefersDark ? 'dark' : 'light');
    }

    // Botones opcionales de cambio de tema (si decides agregarlos al HTML en el futuro)
    const btnDia = document.getElementById('btn-dia');
    const btnNoche = document.getElementById('btn-noche');

    window.setTheme = function(theme) {
        applyTheme(theme);
        localStorage.setItem('yolcatl-theme', theme);
        if(btnDia) btnDia.setAttribute('aria-pressed', theme === 'light');
        if(btnNoche) btnNoche.setAttribute('aria-pressed', theme === 'dark');
    };

    /* =========================================
       4. PESTAÑAS (TABS) - CICLO DE JUEGO
       ========================================= */
    // Generar botones de pestañas dinámicamente si existe el contenedor de paneles
    const tabsContainer = document.querySelector('.tabs-container');
    if (tabsContainer) {
        const panels = Array.from(tabsContainer.querySelectorAll('.tab-panel'));
        if (panels.length > 0) {
            const tabList = document.createElement('div');
            tabList.setAttribute('role', 'tablist');
            tabList.className = 'tabs-nav';
            tabList.style.display = 'flex';
            tabList.style.gap = '0.5rem';
            tabList.style.marginBottom = '1.5rem';
            tabList.style.flexWrap = 'wrap';
            
            tabsContainer.parentNode.insertBefore(tabList, tabsContainer);

            panels.forEach((panel, index) => {
                panel.setAttribute('role', 'tabpanel');
                panel.setAttribute('id', `panel-${index}`);
                panel.setAttribute('aria-labelledby', `tab-${index}`);
                if (index !== 0) panel.style.display = 'none';

                const btn = document.createElement('button');
                btn.setAttribute('role', 'tab');
                btn.setAttribute('id', `tab-${index}`);
                btn.setAttribute('aria-controls', `panel-${index}`);
                btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
                btn.setAttribute('tabindex', index === 0 ? '0' : '-1');
                btn.className = `btn btn-outline ${index === 0 ? 'active' : ''}`;
                
                // Extraer el texto del H3 para usarlo de título
                const panelTitle = panel.querySelector('h3');
                btn.textContent = panelTitle ? panelTitle.textContent : `Fase ${index + 1}`;

                btn.addEventListener('click', () => {
                    // Desactivar todas las pestañas
                    Array.from(tabList.querySelectorAll('button[role="tab"]')).forEach(b => {
                        b.setAttribute('aria-selected', 'false');
                        b.setAttribute('tabindex', '-1');
                        b.classList.remove('active');
                        b.style.backgroundColor = 'transparent';
                        b.style.color = 'inherit';
                    });
                    panels.forEach(p => p.style.display = 'none');

                    // Activar pestaña seleccionada
                    btn.setAttribute('aria-selected', 'true');
                    btn.setAttribute('tabindex', '0');
                    btn.classList.add('active');
                    btn.style.backgroundColor = 'var(--marigold-orange)';
                    btn.style.color = '#fff';
                    panel.style.display = 'block';
                });

                tabList.appendChild(btn);
            });
            
            // Forzar estilos del primer botón activo
            const firstBtn = tabList.querySelector('button');
            if(firstBtn) {
                firstBtn.style.backgroundColor = 'var(--marigold-orange)';
                firstBtn.style.color = '#fff';
            }
        }
    }

    /* =========================================
       5. CARRUSEL Y LIGHTBOX (MODAL DE GALERÍA)
       ========================================= */
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    if (track && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => track.scrollBy({ left: -300, behavior: 'smooth' }));
        nextBtn.addEventListener('click', () => track.scrollBy({ left: 300, behavior: 'smooth' }));
    }

    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    document.querySelectorAll('.lightbox-trigger').forEach(img => {
        img.addEventListener('click', () => {
            if (lightboxImg && lightboxModal) {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightboxModal.classList.add('active');
                lightboxModal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
            }
        });
    });

    if (lightboxClose && lightboxModal) {
        const closeLightbox = () => {
            lightboxModal.classList.remove('active');
            lightboxModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto'; // Restaurar scroll
        };

        lightboxClose.addEventListener('click', closeLightbox);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    /* =========================================
       6. VALIDACIÓN DE FORMULARIO Y FETCH AL BACKEND
       ========================================= */
    const newsletterForm = document.getElementById('newsletter-form');
    const feedbackContainer = document.getElementById('form-feedback');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            clearFormErrors(newsletterForm);

            const nameInput = document.getElementById('name-input');
            const emailInput = document.getElementById('email-input');
            const messageInput = document.getElementById('message-input');
            const submitBtn = newsletterForm.querySelector('button[type="submit"]');

            let isValid = true;

            // Validación de Nombre (mínimo 2 caracteres)
            if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
                showFieldError(nameInput, 'El nombre debe contener al menos 2 caracteres.');
                isValid = false;
            }

            // Validación de Email (Regex)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
                showFieldError(emailInput, 'Por favor, ingresa un correo electrónico válido.');
                isValid = false;
            }

            // Validación de Mensaje (mínimo 10 caracteres)
            if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
                showFieldError(messageInput, 'El mensaje debe contener al menos 10 caracteres.');
                isValid = false;
            }

            // Si hay errores, detener ejecución
            if (!isValid) {
                feedbackContainer.textContent = 'Por favor, corrige los errores marcados en rojo arriba.';
                feedbackContainer.style.color = 'var(--error-color)';
                return;
            }

            // Si es válido, preparar envío al servidor Express (server.js)
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            feedbackContainer.textContent = '';

            try {
                // Hacemos el POST al servidor local en el puerto 3000
                const response = await fetch('http://localhost:3000/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        email: emailInput.value.trim(),
                        name: nameInput.value.trim(),     // Enviado, pero server.js puede ignorarlo si no está en la BD
                        message: messageInput.value.trim() // Enviado, pero server.js puede ignorarlo si no está en la BD
                    })
                });

                const data = await response.json();

                if (response.status === 201) {
                    // Éxito
                    feedbackContainer.textContent = '✨ ' + data.message;
                    feedbackContainer.style.color = 'var(--agave)'; // Verde éxito
                    newsletterForm.reset();
                } else if (response.status === 409) {
                    // Conflicto (Correo duplicado)
                    feedbackContainer.textContent = '⚠️ ' + data.message;
                    feedbackContainer.style.color = 'var(--marigold-orange)';
                } else {
                    // Otro error del servidor
                    feedbackContainer.textContent = '❌ ' + (data.message || 'Error al procesar la suscripción.');
                    feedbackContainer.style.color = 'var(--error-color)';
                }

            } catch (error) {
                console.error('Error de red:', error);
                feedbackContainer.textContent = '❌ No se pudo conectar al servidor. Asegúrate de que server.js esté corriendo (node server.js).';
                feedbackContainer.style.color = 'var(--error-color)';
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    }

    // Funciones auxiliares para mostrar/limpiar errores de accesibilidad
    function showFieldError(inputElement, errorMessage) {
        inputElement.setAttribute('aria-invalid', 'true');
        const formGroup = inputElement.closest('.form-group');

        const errorSpan = document.createElement('span');
        errorSpan.className = 'error-msg';
        errorSpan.setAttribute('role', 'alert'); // Lector de pantalla anuncia el error
        errorSpan.textContent = errorMessage;
        
        // Efecto de agitación opcional
        inputElement.style.animation = 'shake 0.4s ease-in-out';
        setTimeout(() => inputElement.style.animation = '', 400);

        formGroup.appendChild(errorSpan);
    }

    function clearFormErrors(formElement) {
        formElement.querySelectorAll('.form-input').forEach(input => {
            input.setAttribute('aria-invalid', 'false');
        });
        formElement.querySelectorAll('.error-msg').forEach(msg => msg.remove());
        if (feedbackContainer) feedbackContainer.textContent = '';
    }

    // Limpiar el error del campo específico cuando el usuario empieza a escribir
    document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('input', (e) => {
            if (e.target.getAttribute('aria-invalid') === 'true') {
                e.target.setAttribute('aria-invalid', 'false');
                const formGroup = e.target.closest('.form-group');
                const errorMsg = formGroup.querySelector('.error-msg');
                if (errorMsg) errorMsg.remove();
            }
        });
    });

});