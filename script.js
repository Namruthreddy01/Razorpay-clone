/* =========================================================
   Razorpay Clone - JavaScript
   Adds: mobile menu toggle, navbar shadow on scroll,
         scroll-reveal animations, smooth-scroll close menu.
   ========================================================= */

// Wait until the DOM (HTML) is fully loaded before running JS
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. MOBILE MENU TOGGLE ---------- */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    // Toggle the "open" class on both elements
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');

    // Update accessibility attribute
    const isOpen = navMenu.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // When a menu link is clicked on mobile, close the menu
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  /* ---------- 2. NAVBAR SHADOW ON SCROLL ---------- */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    // Add a shadow once the user scrolls more than 10px
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ---------- 3. SCROLL REVEAL ANIMATION ----------
     Uses IntersectionObserver: a modern browser API that tells us
     when an element enters the viewport. We add a class to trigger
     the CSS transition defined in style.css.
  -------------------------------------------------- */
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger the animation for a nicer effect
        setTimeout(() => entry.target.classList.add('is-visible'), i * 80);
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.15 }); // trigger when 15% of the card is visible

  reveals.forEach(el => observer.observe(el));

  /* ---------- 4. CURRENT YEAR (optional helper) ---------- */
  // If you add a <span id="year"></span> in the footer, this fills it in.
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
