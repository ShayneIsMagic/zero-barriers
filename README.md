# Zero Barriers Website

A complete HTML/CSS/JS recreation of the Zero Barriers website (https://zerobarriers.io/) converted from the original Astro implementation.

## Project Structure

```
zero-barriers/
├── README.md                # This file
├── pages/                   # HTML pages
│   ├── index.html           # Home page
│   ├── services.html        # Services page
│   ├── technology.html      # Technology page
│   ├── testimonials.html    # Testimonials page
│   ├── case-studies.html    # Case studies page
│   └── contact.html         # Contact page
├── public/                  # Static assets
│   ├── images/             # Image assets
│   │   └── optimized/      # Optimized images
│   ├── icons/              # Icon files
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # SEO robots file
│   ├── sitemap.xml         # XML sitemap
│   ├── sw.js               # Service worker
│   └── [other config files]
├── assets/                  # Compiled assets
│   ├── css/
│   │   └── main.css        # Compiled CSS
│   └── js/
│       ├── main.js         # Main JavaScript
│       └── contact.js     # Contact form JS
├── src/                    # Source files for development
│   ├── components/
│   │   └── layout/
│   └── styles/            # SCSS structure
│       ├── abstracts/
│       ├── base/
│       ├── components/
│       ├── layout/
│       ├── media-queries/
│       ├── pages/
│       └── themes/
└── docs/                   # Documentation
    ├── README.md
    ├── CODE_STRUCTURE.md
    ├── deployment.md
    └── DESIGN_REVAMP_PLAN.md
```

## Technologies

- **HTML5** - Structure
- **CSS/SCSS** - Styling with CSS variables
- **JavaScript** - Interactivity and animations
- **Service Worker** - PWA functionality

## Features

### Design Elements
- **Modern, Professional Layout**: Green primary color (#7cc347)
- **Fully Responsive**: Works on desktop, tablet, and mobile devices
- **Hero Section**: Eye-catching hero with tagline, title, and CTAs
- **Methodology Section**: 4-step process cards
- **Solutions Section**: Solution cards in grid layout
- **Case Studies**: Success stories with statistics and testimonials
- **Purpose Section**: About the company with testimonials
- **Contact Section**: Contact form with validation
- **Footer**: Multi-column footer with links and social media

### Interactive Features
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Smooth scroll to sections when clicking navigation links
- **Active Navigation**: Navigation links highlight based on current section
- **Form Validation**: Contact form with required field validation
- **Scroll Animations**: Elements fade in as you scroll
- **Counter Animations**: Metrics animate when they come into view
- **Hover Effects**: Interactive hover states on buttons and cards

### Performance Optimizations
- **Lazy Loading**: Images load as they come into view
- **Debounced Scroll**: Optimized scroll event handlers
- **CSS Transitions**: Smooth animations with hardware acceleration
- **Reduced Motion**: Respects user's motion preferences
- **Service Worker**: PWA caching for offline support

## How to Use

### Local Development
1. Start a local HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
2. Open http://localhost:8000/pages/ in your browser

### Deploy Online
You can deploy this website to:
- **GitHub Pages**: Free hosting for static sites
- **Cloudflare Pages**: For Cloudflare deployment
- **Netlify**: Drag and drop deployment
- **Vercel**: Fast deployment with CLI
- **Any web hosting service**: Upload files via FTP

## Customization

### Change Colors
Edit the CSS variables in `assets/css/main.css`:
```css
:root {
  --primary: #7cc347;        /* Main green color */
  --primary-dark: #167a1f;   /* Darker green */
  --secondary: #58595b;      /* Gray text */
  --accent: #2c88d9;         /* Blue accent */
}
```

### Update Content
Edit the HTML files in `pages/`:
- Change text in any section
- Update testimonials
- Modify case studies
- Replace images with your own

### Add/Remove Pages
To add a new page:
1. Create a new HTML file in `pages/`
2. Copy the structure from an existing page
3. Update content
4. Add navigation link in header

## Images

Images are stored in `public/images/`. Replace these with your own optimized images.

## Contact Form

The contact form currently shows an alert message. To make it functional:

1. **Use a Form Service**:
   - Formspree: https://formspree.io
   - Netlify Forms: Built into Netlify hosting
   - EmailJS: https://www.emailjs.com

2. **Backend API**:
   - Connect to your own backend server
   - Modify the form submission in `assets/js/contact.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

The website uses:
- **Google Fonts** (Poppins): Loaded from Google CDN
- **Font Awesome 6.5.1**: Icons loaded from CDN

No build tools or package managers required for basic HTML version!

## Development

### Converted From Astro
This project was converted from an Astro-based implementation to pure HTML/CSS/JS. The original structure preserved includes:
- All content and design elements
- Responsive breakpoints
- Interactive features
- SEO meta tags
- PWA support

### Branch Information
- **Branch**: `skr/clean-up`
- **Base**: Converted from Astro to HTML/CSS/JS
- **Status**: Ready for deployment

## License

Copyright © 2025 Zero Barriers. All rights reserved.

## Support

For questions or issues:
- Check the browser console for JavaScript errors
- Ensure all files are in the correct directories
- Make sure you're viewing via HTTP (not file://)
- Review deployment documentation in `docs/deployment.md`

## Tips for Going Live

1. **Optimize Images**: Compress images before deploying
2. **Update Meta Tags**: Ensure SEO meta tags are current
3. **Add Analytics**: Insert Google Analytics tracking
4. **Test Forms**: Ensure contact form works before launch
5. **Mobile Testing**: Test on real mobile devices
6. **SSL Certificate**: Use HTTPS for production
7. **Service Worker**: Verify caching works correctly
