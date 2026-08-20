/**
 * assets/js/main.js
 * Handyman Portfolio — Core Application Script
 */

const SECTIONS = [
  { id: 'section-nav',     file: 'sections/nav.html'     },
  { id: 'section-hero',    file: 'sections/hero.html'    },
  { id: 'section-services',file: 'sections/services.html'},
  { id: 'section-portfolio',file: 'sections/portfolio.html'},
  { id: 'section-reviews', file: 'sections/reviews.html' },
  { id: 'section-pricing', file: 'sections/pricing.html' },
  { id: 'section-contact', file: 'sections/contact.html' },
  { id: 'section-footer',  file: 'sections/footer.html'  },
];

async function loadSections() {
  const loadPromises = SECTIONS.map(async ({ id, file }) => {
    const container = document.getElementById(id);
    if (!container) return;

    try {
      const res  = await fetch(file);
      if (!res.ok) throw new Error(`Failed to load ${file}: ${res.status}`);
      const html = await res.text();
      container.innerHTML = html;
    } catch (err) {
      console.error(`[Handyman] Section load error: ${err.message}`);
    }
  });

  await Promise.all(loadPromises);
}

function initNav() {
  const btn = document.getElementById('mobile-menu-btn');
  const dropdown = document.getElementById('mobile-dropdown');
  
  if (btn && dropdown) {
    btn.addEventListener('click', () => {
      dropdown.classList.toggle('hidden');
      dropdown.classList.toggle('flex');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        dropdown.classList.add('hidden');
        dropdown.classList.remove('flex');
      });
    });
  }
}

function updateThemeIcons(isDark) {
  const icon = document.getElementById('theme-icon');
  const iconMobile = document.getElementById('theme-icon-mobile');
  const label = isDark ? 'light_mode' : 'dark_mode';
  if (icon) icon.textContent = label;
  if (iconMobile) iconMobile.textContent = label;
}

function initTheme() {
  const html = document.getElementById('html-root');
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved === 'dark' || (!saved && prefersDark);

  if (isDark) html.classList.add('dark');
  else html.classList.remove('dark');

  updateThemeIcons(isDark);

  function toggle() {
    const nowDark = html.classList.toggle('dark');
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    updateThemeIcons(nowDark);
  }

  const btn = document.getElementById('theme-toggle');
  const btnMobile = document.getElementById('theme-toggle-mobile');
  if (btn) btn.addEventListener('click', toggle);
  if (btnMobile) btnMobile.addEventListener('click', toggle);
}

function initAnimations() {
  // Letter-by-letter animation for H1
  const title = document.getElementById('hero-title');
  if (title) {
      const text = title.innerHTML;
      title.innerHTML = '';
      
      let i = 0;
      let charIndex = 0;
      const chars = text.split('');
      
      chars.forEach((char) => {
          if (char === '<') {
              title.innerHTML += '<br>';
              charIndex += 4; // skip <br>
          } else if (char !== 'b' && char !== 'r' && char !== '>') {
              const span = document.createElement('span');
              span.textContent = char;
              span.className = 'letter-fade';
              span.style.animationDelay = `${i * 30}ms`;
              title.appendChild(span);
              i++;
          }
      });
  }

  // Line animation
  setTimeout(() => {
      const line = document.getElementById('hero-line');
      if (line) {
          line.style.transition = 'width 1s ease-out';
          line.style.width = '100%';
          line.style.maxWidth = '192px';
      }
  }, 500);

  // Intersection Observer for scroll reveals
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

async function init() {
  // Apply theme immediately before sections load to avoid flash
  const html = document.getElementById('html-root');
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) html.classList.add('dark');

  // Load sections
  await loadSections();

  // Initialize theme toggle (after sections so buttons exist in DOM)
  initTheme();

  // Initialize navigation logic
  initNav();

  // Initialize animations after DOM is built
  initAnimations();
}

document.addEventListener('DOMContentLoaded', init);
