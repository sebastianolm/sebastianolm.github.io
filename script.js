/* ================================================================
   SCRIPT.JS — Minimal JavaScript
   This file is intentionally small. The site works without it.
   It handles:
   1. Auto-updating the copyright year in the footer
   2. Highlighting the active nav link on scroll
   ================================================================ */


// ----------------------------------------------------------------
// 1. AUTO-UPDATE COPYRIGHT YEAR
// Updates the year in the footer automatically.
// No edits needed here.
// ----------------------------------------------------------------
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


// ----------------------------------------------------------------
// 2. ACTIVE NAV LINK ON SCROLL
// Watches which section is currently in view and adds
// an "active" class to the matching nav link.
//
// If you add a new section, make sure:
//   - The <section> has a unique id (e.g., id="my-section")
//   - There's a matching <a href="#my-section"> in the navbar
// ----------------------------------------------------------------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar nav a');

function setActiveLink() {
  let currentId = '';

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    // A section is "active" when its top is within the top 40% of the viewport
    if (top < window.innerHeight * 0.4) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    // Match the nav link href (e.g., "#projects") to the current section id
    if (link.getAttribute('href') === `#${currentId}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink(); // Run once on load


/* ================================================================
   THAT'S IT.
   If you want to add more interactivity later, do it below here.
   ================================================================ */
