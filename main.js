document.addEventListener('DOMContentLoaded', () => {

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

  const newsletterForm = document.getElementById('newsletter-form');
  const feedbackContainer = document.getElementById('form-feedback');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Limpiar errores previos
      clearFormErrors(newsletterForm);

      const nameInput = document.getElementById('name-input');
      const emailInput = document.getElementById('email-input');
      const messageInput = document.getElementById('message-input');

      let isValid = true;

      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showFieldError(nameInput, 'El nombre debe contener al menos 2 caracteres.');
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        showFieldError(emailInput, 'Por favor, ingresa un correo electrónico válido.');
        isValid = false;
      }

      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        showFieldError(messageInput, 'El mensaje debe contener al menos 10 caracteres.');
        isValid = false;
      }

      if (isValid) {
        feedbackContainer.textContent = '¡Gracias por suscribirte a Los Murmullos del Bosque!';
        feedbackContainer.style.color = 'var(--papel-pink)';
        newsletterForm.reset();
      } else {
        feedbackContainer.textContent = 'Por favor, corrige los errores marcados arriba.';
        feedbackContainer.style.color = 'var(--error-color)';
      }
    });
  }

  function showFieldError(inputElement, errorMessage) {
    inputElement.setAttribute('aria-invalid', 'true');
    const formGroup = inputElement.closest('.form-group');

    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-msg';
    errorSpan.setAttribute('role', 'alert');
    errorSpan.textContent = errorMessage;

    formGroup.appendChild(errorSpan);
  }

  function clearFormErrors(formElement) {
    formElement.querySelectorAll('.form-input').forEach(input => {
      input.setAttribute('aria-invalid', 'false');
    });
    formElement.querySelectorAll('.error-msg').forEach(msg => msg.remove());
    if (feedbackContainer) feedbackContainer.textContent = '';
  }

  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (track && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -300, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }

  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxModal.classList.add('active');
      lightboxModal.setAttribute('aria-hidden', 'false');
    });
  });

  if (lightboxClose && lightboxModal) {
    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      lightboxModal.setAttribute('aria-hidden', 'true');
    };

    lightboxClose.addEventListener('click', closeLightbox);
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

});