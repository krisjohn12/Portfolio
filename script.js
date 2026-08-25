// =============================================================
// script.js — portfolio interactivity
// =============================================================

document.addEventListener('DOMContentLoaded', () => {
  setYear();
  initTypingRole();
  initActiveTab();
  initContactForm();
});

/* ---------------------------------------------------------
   Footer year
--------------------------------------------------------- */
function setYear(){
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------
   Hero "typing" role rotator
   Respects prefers-reduced-motion by just showing the first role.
--------------------------------------------------------- */
function initTypingRole(){
  const target = document.getElementById('typedRole');
  if (!target) return;

  const roles = [
    'Front-End Developer',
    'HTML & CSS Enthusiast',
    'JavaScript Tinkerer',
    'PHP Backend Learner'
  ];

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    target.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = roles[0].length;
  let deleting = false;

  const TYPE_SPEED = 55;
  const DELETE_SPEED = 30;
  const HOLD_TIME = 1400;

  function tick(){
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      if (charIndex > current.length) {
        charIndex = current.length;
        target.textContent = current;
        deleting = true;
        return setTimeout(tick, HOLD_TIME);
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        charIndex = 0;
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    target.textContent = roles[deleting ? roleIndex : roleIndex].slice(0, charIndex) || roles[roleIndex].slice(0, charIndex);
    setTimeout(tick, deleting ? DELETE_SPEED : TYPE_SPEED);
  }

  // Kick off the loop after the initial hold on the first role.
  setTimeout(() => {
    deleting = true;
    tick();
  }, HOLD_TIME);
}

/* ---------------------------------------------------------
   Highlight the matching "file tab" as the user scrolls
--------------------------------------------------------- */
function initActiveTab(){
  const sections = document.querySelectorAll('main .section');
  const tabs = document.querySelectorAll('.tab');
  if (!sections.length || !tabs.length) return;

  const tabById = {};
  tabs.forEach(tab => { tabById[tab.dataset.tab] = tab; });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tabs.forEach(t => t.classList.remove('is-active'));
        const match = tabById[entry.target.id];
        if (match) match.classList.add('is-active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

/* ---------------------------------------------------------
   Contact form — front-end only demo handler.
   Swap the body of this function for a real fetch() call to
   contact.php (or any endpoint) once the back end exists.
--------------------------------------------------------- */
function initContactForm(){
  const form = document.getElementById('contactForm');
  const response = document.getElementById('formResponse');
  if (!form || !response) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      response.textContent = '✗ error: all fields are required.';
      response.style.color = 'var(--red)';
      return;
    }

    // Placeholder success state. Replace with a real request, e.g.:
    // fetch('contact.php', { method: 'POST', body: new FormData(form) })
    response.textContent = `✓ message received — thanks, ${name}. I'll reply at ${email}.`;
    response.style.color = 'var(--green)';
    form.reset();
  });
}
