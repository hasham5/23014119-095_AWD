// Theme toggle with localStorage persistence
(function () {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle ? toggle.querySelector('.theme-icon') : null;

  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    body.classList.add('light');
    if (icon) icon.textContent = '🌙';
  } else {
    body.classList.remove('light');
    if (icon) icon.textContent = '☀️';
  }

  toggle && toggle.addEventListener('click', () => {
    const isLight = body.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    if (icon) icon.textContent = isLight ? '🌙' : '☀️';
  });
})();

// Mobile navigation toggle
(function () {
  const button = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!button || !menu) return;
  button.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  // Close menu on link click (mobile)
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
})();

// Smooth scrolling for nav links (extra handling for browsers lacking CSS smooth)
(function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', targetId);
    });
  });
})();

// Contact form demo handler
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    alert(`Thanks, ${name || 'friend'}! Your message has been received.`);
    form.reset();
  });
})();


