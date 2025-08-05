// Performance optimizations
document.addEventListener('DOMContentLoaded', function() {
  // Preload critical images
  const criticalImages = [
    '/images/Team.png',
    '/images/Human_Transformation.png',
    '/zblogo.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Optimize font loading
  if ('fonts' in document) {
    document.fonts.ready.then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  }
});

// Mobile menu toggle (only if element exists)
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", function () {
    const navLinks = document.querySelector(".nav-links");
    if (navLinks) {
      navLinks.classList.toggle("active");
    }
  });
}

// Smooth scrolling for anchor links (in-page only) - fixed version
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    // Only handle if it's a same-page anchor link
    if (href !== "#" && href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Add loading states
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
