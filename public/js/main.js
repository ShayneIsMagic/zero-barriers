// Performance optimizations and navigation handling
document.addEventListener('DOMContentLoaded', function() {
  // Preload critical images
  const criticalImages = [
    '/images/Team.png',
    '/images/Human_Transformation.png',
    '/images/side-profile-tech.png',
    '/images/B2B Sales.png',
    '/images/Transforming_Breakthrough.png',
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

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  if (mobileMenuToggle) {
    // Function to toggle mobile menu
    function toggleMobileMenu() {
      const navLinks = document.querySelector(".nav-links");
      if (navLinks) {
        navLinks.classList.toggle("active");
        const isActive = navLinks.classList.contains('active');
        
        // Update ARIA attributes for accessibility
        mobileMenuToggle.setAttribute('aria-expanded', isActive);
        mobileMenuToggle.setAttribute('aria-label', isActive ? 'Close navigation menu' : 'Open navigation menu');
      }
    }
    
    // Click event
    mobileMenuToggle.addEventListener("click", toggleMobileMenu);
    
    // Keyboard event for accessibility
    mobileMenuToggle.addEventListener("keydown", function(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMobileMenu();
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      const navLinks = document.querySelector(".nav-links");
      if (navLinks && navLinks.classList.contains('active') && 
          !mobileMenuToggle.contains(e.target) && 
          !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', 'Open navigation menu');
      }
          });
  }

  // Set active navigation state based on current page
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});

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

  // Image loading optimization and error handling
  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      // Add loading error handling
      img.addEventListener('error', function() {
        this.style.display = 'none';
      });
      
      // Add loading success handling
      img.addEventListener('load', function() {
        this.style.opacity = '1';
      });
    });
  });
