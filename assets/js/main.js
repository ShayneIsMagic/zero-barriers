// Main JavaScript for Zero Barriers Website

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksList = document.querySelectorAll('.nav-links a');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
            
            // Toggle icon
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinksList.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    });
});

// Success Stories Toggle Functionality
function toggleStory(card) {
    // Close all other cards
    const allCards = document.querySelectorAll('.story-card');
    allCards.forEach(otherCard => {
        if (otherCard !== card) {
            otherCard.classList.remove('expanded');
        }
    });
    
    // Toggle current card
    card.classList.toggle('expanded');
}

// Add keyboard accessibility and click handlers for success stories
document.addEventListener('DOMContentLoaded', function() {
    const storyCards = document.querySelectorAll('.story-card');
    
    storyCards.forEach(card => {
        // Add click handler
        card.addEventListener('click', function() {
            toggleStory(card);
        });
        
        // Add keyboard accessibility
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleStory(card);
            }
        });
        
        // Add focus styles for accessibility
        card.setAttribute('tabindex', '0');
    });
});

// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const title = item.querySelector('h3');
        const content = item.querySelector('p');
        
        if (title && content) {
            title.style.cursor = 'pointer';
            title.addEventListener('click', function() {
                item.classList.toggle('active');
            });
        }
    });
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 100;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Lazy loading images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.0/lazysizes.min.js';
    document.body.appendChild(script);
}

// Google Analytics tracking
if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href
    });
    console.log('Page view tracking sent to GA4');
}

