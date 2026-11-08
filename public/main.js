/* =========================================================
   YOLCATL · main.js  (JavaScript vanilla, cargado con defer)
   1 Config y telemetría · 2 Tema · 3 Menú · 4 Scroll · 5 Pestañas
   · 6 Galería · 7 Formularios · 8 Registro · 9 Voces de ejemplo
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    /* ---------- 1. CONFIG Y TELEMETRÍA (sin cookies ni datos personales) ---------- */
    // Misma origen cuando la página la sirve server.js. Se puede fijar con <meta name="api-base" content="https://...">.
    const metaBase = document.querySelector('meta[name="api-base"]');
    const API_BASE = metaBase ? metaBase.content.replace(/\/$/, '') : (location.protocol === 'file:' ? 'http://localhost:3000' : '');

    const safeStorage = {
        get(key) { try { return sessionStorage.getItem(key); } catch (e) { return null; } },
        set(key, value) { try { sessionStorage.setItem(key, value); } catch (e) { /* sin almacenamiento */ } }
    };

    const eventQueue = [];
    let sessionId = safeStorage.get('yolcatl-session');
    if (!sessionId) {
        sessionId = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2);
        safeStorage.set('yolcatl-session', sessionId);
    }

    const srcParam = new URLSearchParams(location.search).get('src');
    if (srcParam && /^[a-z0-9_]{1,40}$/.test(srcParam)) safeStorage.set('yolcatl-src', srcParam);
    const currentSrc = safeStorage.get('yolcatl-src') || 'directo';

    function trackEvent(name, data) {
        const event = Object.assign({ evento: name, session_id: sessionId, src: currentSrc, timestamp: new Date().toISOString() }, data);
        eventQueue.push(event);
        console.info('[yolcatl:telemetria]', event);
    }
    trackEvent('visita');

    document.addEventListener('click', (e) => {
        const target = e.target.closest('[data-track]');
        if (target && target.getAttribute('aria-disabled') !== 'true') trackEvent('clic', { target: target.dataset.track });
    });

    /* ---------- 2. TEMA DÍA / NOCHE ---------- */
    const root = document.documentElement;
    const btnDia = document.getElementById('btn-dia');
    const btnNoche = document.getElementById('btn-noche');
    const themeStatus = document.getElementById('theme-status');

    function applyTheme(theme, announce) {
        const dark = theme === 'dark';
        root.classList.toggle('dark', dark);
        root.classList.toggle('light', !dark);
        btnDia.setAttribute('aria-pressed', String(!dark));
        btnNoche.setAttribute('aria-pressed', String(dark));
        if (announce) {
            themeStatus.textContent = dark
                ? 'Modo noche: el bestiario muestra los poderes de defensa.'
                : 'Modo día: el bestiario muestra los poderes de hacienda.';
        }
    }
    function setTheme(theme) {
        applyTheme(theme, true);
        try { localStorage.setItem('yolcatl-theme', theme); } catch (e) { /* sin almacenamiento */ }
    }
    applyTheme(root.classList.contains('dark') ? 'dark' : 'light', false);
    btnDia.addEventListener('click', () => setTheme('light'));
    btnNoche.addEventListener('click', () => setTheme('dark'));

    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    systemDark.addEventListener('change', (e) => {
        let saved = null;
        try { saved = localStorage.getItem('yolcatl-theme'); } catch (err) { /* sin almacenamiento */ }
        if (!saved) applyTheme(e.matches ? 'dark' : 'light', true);
    });

    /* ---------- 3. MENÚ HAMBURGUESA ---------- */
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    function setMenu(open) {
        menuToggle.setAttribute('aria-expanded', String(open));
        menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
        navMenu.classList.toggle('nav-open', open);
    }
    menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
    navMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
            setMenu(false);
            menuToggle.focus();
        }
    });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

    /* ---------- 4. SCROLL SUAVE, SCROLL SPY Y APARICIÓN ---------- */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const id = anchor.getAttribute('href');
            if (id.length < 2) return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
            history.pushState(null, '', id);
            if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
        });
    });

    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]:not(.btn)');
    const spySections = document.querySelectorAll('main section[id]');
    if ('IntersectionObserver' in window) {
        const spy = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navLinks.forEach((link) => {
                    const active = link.getAttribute('href') === '#' + entry.target.id;
                    link.classList.toggle('active', active);
                    if (active) link.setAttribute('aria-current', 'true');
                    else link.removeAttribute('aria-current');
                });
            });
        }, { rootMargin: '-50% 0px -50% 0px' });
        spySections.forEach((section) => spy.observe(section));

        const reveal = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    reveal.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        document.querySelectorAll('.animate-on-scroll').forEach((el) => reveal.observe(el));
    } else {
        document.querySelectorAll('.animate-on-scroll').forEach((el) => el.classList.add('visible'));
    }

    /* ---------- 5. PESTAÑAS DEL CICLO (flechas, Home y End) ---------- */
    const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
    function selectTab(tab, focus) {
        tabs.forEach((t) => {
            const selected = t === tab;
            t.setAttribute('aria-selected', String(selected));
            t.setAttribute('tabindex', selected ? '0' : '-1');
            const panel = document.getElementById(t.getAttribute('aria-controls'));
            panel.classList.toggle('active', selected);
        });
        if (focus) tab.focus();
    }
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => selectTab(tab, false));
        tab.addEventListener('keydown', (e) => {
            let next = null;
            if (e.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
            if (e.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
            if (e.key === 'Home') next = tabs[0];
            if (e.key === 'End') next = tabs[tabs.length - 1];
            if (next) { e.preventDefault(); selectTab(next, true); }
        });
    });

    /* ---------- 7. FORMULARIOS: validación sin alert() ---------- */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function clearError(input) {
        input.classList.remove('input-error');
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedby');
        const holder = input.closest('.field') || input.parentElement;
        holder.querySelectorAll('.error-msg').forEach((el) => el.remove());
    }
    function showError(input, message) {
        clearError(input);
        const span = document.createElement('span');
        span.className = 'error-msg';
        span.id = (input.id || input.name) + '-error';
        span.setAttribute('role', 'alert');
        span.textContent = message;
        input.parentElement.appendChild(span);
        input.classList.add('input-error');
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', span.id);
    }
    function clearAllErrors(form) {
        form.querySelectorAll('.error-msg').forEach((el) => el.remove());
        form.querySelectorAll('.input-error').forEach((el) => el.classList.remove('input-error'));
        form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
    }
    function setStatus(el, message, ok) {
        el.textContent = message;
        el.classList.toggle('ok', ok === true);
        el.classList.toggle('fail', ok === false);
    }
    async function postJson(path, payload) {
        const response = await fetch(API_BASE + path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        let data = {};
        try { data = await response.json(); } catch (e) { /* respuesta sin JSON */ }
        return { status: response.status, data };
    }
    const offlineMessage = 'No pudimos conectar con el servidor. Inténtalo de nuevo en unos minutos.';

    // Limpia el error de un campo al escribir
    document.querySelectorAll('.input').forEach((input) => {
        input.addEventListener('input', () => { if (input.getAttribute('aria-invalid') === 'true') clearError(input); });
    });

    // 7a. Contacto
    const contactForm = document.getElementById('contact-form');
    const contactStatus = document.getElementById('form-feedback');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearAllErrors(contactForm);
        setStatus(contactStatus, '', null);
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const invalid = [];
        if (name.value.trim().length < 2) { showError(name, 'El nombre debe tener al menos 2 caracteres.'); invalid.push(name); }
        if (!emailRegex.test(email.value.trim())) { showError(email, 'Ingresa un correo electrónico válido.'); invalid.push(email); }
        if (message.value.trim().length < 10) { showError(message, 'El mensaje debe tener al menos 10 caracteres.'); invalid.push(message); }
        if (invalid.length) { invalid[0].focus(); return; }

        const button = contactForm.querySelector('button[type="submit"]');
        button.disabled = true;
        try {
            const { status, data } = await postJson('/contact', { name: name.value.trim(), email: email.value.trim(), message: message.value.trim() });
            if (status === 201) { setStatus(contactStatus, data.message || '¡Mensaje enviado! Te responderemos pronto.', true); contactForm.reset(); }
            else setStatus(contactStatus, data.message || 'No se pudo enviar el mensaje.', false);
        } catch (err) {
            setStatus(contactStatus, offlineMessage, false);
        } finally {
            button.disabled = false;
        }
    });



    /* ---------- 8. REGISTRO ANTICIPADO / NEWSLETTER Y METAS ---------- */
    const meter = document.getElementById('meter');
    const meterCount = document.getElementById('meter-count');
    async function loadMilestone() {
        try {
            const response = await fetch(API_BASE + '/stats');
            if (!response.ok) throw new Error('HTTP ' + response.status);
            const data = await response.json();
            meter.max = data.meta;
            meter.value = data.registros;
            meterCount.textContent = data.registros.toLocaleString('es-MX') + ' registros';
        } catch (err) {
            meterCount.textContent = 'Contador no disponible por ahora';
        }
    }
    loadMilestone();

    const newsForm = document.getElementById('newsletter-form');
    const newsStatus = document.getElementById('news-feedback');
    newsForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearAllErrors(newsForm);
        setStatus(newsStatus, '', null);
        const email = document.getElementById('news-email');
        if (!emailRegex.test(email.value.trim())) {
            showError(email, 'Ingresa un correo electrónico válido.');
            email.focus();
            return;
        }
        const button = newsForm.querySelector('button[type="submit"]');
        button.disabled = true;
        try {
            const { status, data } = await postJson('/subscribe', { email: email.value.trim(), src: currentSrc });
            if (status === 201) { setStatus(newsStatus, data.message, true); newsForm.reset(); loadMilestone(); }
            else if (status === 409) setStatus(newsStatus, data.message, null);
            else setStatus(newsStatus, data.message || 'No se pudo completar el registro.', false);
        } catch (err) {
            setStatus(newsStatus, offlineMessage, false);
        } finally {
            button.disabled = false;
        }
    });
});
