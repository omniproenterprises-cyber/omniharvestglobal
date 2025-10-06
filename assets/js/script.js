// Mobile menu toggle
function toggleMenu(){
  const m = document.getElementById('mnav');
  const isHidden = m.hasAttribute('hidden');
  const btn = document.querySelector('button.mobilemenu');
  if(isHidden){
    m.removeAttribute('hidden');
    if(btn) btn.setAttribute('aria-expanded','true');
  } else {
    m.setAttribute('hidden','');
    if(btn) btn.setAttribute('aria-expanded','false');
  }
}

// Carousel scroll
function carScroll(dir){
  const el=document.getElementById('prodCar');
  const card = el.querySelector('.slide');
  const step = card ? card.getBoundingClientRect().width + 16 : 280;
  el.scrollBy({left: dir*step, behavior:'smooth'});
}

// Hero carousel functionality
let currentSlide = 0;
let heroTimer = null;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function showSlide(index) {
  // Remove active class from all slides
  slides.forEach(slide => slide.classList.remove('active'));
  
  // Add active class to current slide
  slides[index].classList.add('active');
  
  currentSlide = index;
}

function nextSlide() {
  const next = (currentSlide + 1) % totalSlides;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(prev);
}

function startCarousel() {
  heroTimer = setInterval(nextSlide, 2000); // Change slide every 2 seconds
}

function stopCarousel() {
  if (heroTimer) {
    clearInterval(heroTimer);
    heroTimer = null;
  }
}

// Initialize carousel when page loads
window.addEventListener('load', () => {
  showSlide(0);
  startCarousel();
  
  // Pause carousel on hover
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('mouseenter', stopCarousel);
    hero.addEventListener('mouseleave', startCarousel);
  }

  // Header transparency on scroll
  const headerEl = document.querySelector('header');
  const toggleHeaderState = () => {
    if(window.scrollY > 12){
      headerEl.classList.add('is-transparent');
    } else {
      headerEl.classList.remove('is-transparent');
    }
  };
  toggleHeaderState();
  window.addEventListener('scroll', toggleHeaderState, { passive: true });
});

// Year
(document.getElementById('year')||{}).textContent = new Date().getFullYear();

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach((it) => {
    const btn = it.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const isOpen = it.classList.contains('open');
      // close all
      items.forEach(i => {
        i.classList.remove('open');
        const b = i.querySelector('.faq-q');
        const a = i.querySelector('.faq-a');
        b.setAttribute('aria-expanded','false');
        a.style.maxHeight = null;
      });
      // open clicked (if it was closed)
      if (!isOpen) {
        it.classList.add('open');
        const ans = it.querySelector('.faq-a');
        btn.setAttribute('aria-expanded','true');
        // set to scrollHeight for smooth height animation
        ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
    // allow keyboard arrow nav
    btn.addEventListener('keydown', (e) => {
      if (['ArrowDown','ArrowUp'].includes(e.key)) {
        e.preventDefault();
        const dir = e.key === 'ArrowDown' ? 1 : -1;
        const buttons = [...document.querySelectorAll('.faq-q')];
        const idx = buttons.indexOf(btn);
        const next = buttons[(idx + dir + buttons.length) % buttons.length];
        next.focus();
      }
    });
  });

  // Expand first item by default (optional)
  if (items[0]) {
    items[0].querySelector('.faq-q').click();
  }

  // Tabs for Products
  const tabs = document.querySelectorAll('.tab-button');
  function activateTab(nextId){
    tabs.forEach(btn => {
      const panelId = btn.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      const isActive = btn.id === nextId;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
      if(panel){ panel.hidden = !isActive; }
    });
  }
  tabs.forEach(btn => btn.addEventListener('click', () => activateTab(btn.id)));
  if(tabs.length){ activateTab('tab-veg'); }
});

// Basic analytics placeholder (no-op). Replace with Plausible/GA as needed.
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments)}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');
