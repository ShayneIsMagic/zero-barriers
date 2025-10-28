# Zero Barriers Website - Code Structure

## Project Overview
This is the official website for Zero Barriers, a purpose-driven growth agency specializing in rapid revenue transformation.

## Directory Structure

```
zero-barriers/
├── docs/                          # Documentation
│   ├── README.md                  # Documentation overview
│   ├── deployment.md              # Deployment instructions
│   ├── CODE_STRUCTURE.md          # This file
│   └── DESIGN_REVAMP_PLAN.md      # Design planning document
├── pages/                         # HTML pages
│   ├── index.html                 # Home page
│   ├── services.html              # Services page
│   ├── technology.html             # Technology page
│   ├── testimonials.html          # Testimonials page
│   ├── case-studies.html           # Case studies page
│   └── contact.html                # Contact page
├── public/                        # Static assets
│   ├── images/                    # Image assets
│   │   ├── optimized/            # Optimized image versions
│   │   └── [various images]      # Original images
│   ├── icons/                     # Icon assets
│   ├── manifest.json              # PWA manifest
│   ├── robots.txt                 # SEO robots file
│   ├── rss.xml                    # RSS feed
│   ├── sitemap.xml                # XML sitemap
│   ├── sw.js                      # Service worker
│   ├── _headers                    # HTTP headers
│   └── _redirects                  # URL redirects
├── src/                           # Source files for development
│   ├── components/
│   │   └── layout/
│   │       ├── header.html        # Header component template
│   │       └── footer.html        # Footer component template
│   └── styles/
│       ├── abstracts/             # SCSS variables, mixins, functions
│       ├── base/                  # Reset, typography, base styles
│       ├── components/            # Component-specific styles
│       ├── layout/                # Layout-specific styles
│       ├── media-queries/         # Responsive design breakpoints
│       ├── pages/                 # Page-specific styles
│       ├── themes/                # Theme variations
│       └── main.scss              # Main SCSS entry point
├── assets/                        # Compiled/built assets
│   ├── css/
│   │   └── main.css               # Compiled CSS
│   └── js/
│       ├── main.js                # Main JavaScript
│       └── contact.js             # Contact form JavaScript
└── README.md                      # Project README
```

## Key Technologies
- **HTML5** - Structure
- **CSS/SCSS** - Styling with preprocessing
- **JavaScript** - Interactivity
- **Service Worker** - PWA functionality

## Project Structure
The website is organized as follows:
- **docs/**: All documentation files only
- **pages/**: HTML page files
- **public/**: Static assets (images, icons, config files)
- **src/**: Source files for development (components, styles)
- **assets/**: Compiled/built assets (CSS, JS)

## Pages Structure
The website includes the following main pages:
- **Home** (`/`): Hero, methodology, solutions, technology divisions, testimonials, FAQ
- **Services** (`/services`): Detailed service offerings
- **Technology** (`/technology`): Technology solutions and partnerships
- **Testimonials** (`/testimonials`): Client success stories
- **Case Studies** (`/case-studies`): Detailed case studies
- **Contact** (`/contact`): Contact form and information

## Asset Organization
- **Images**: Stored in `public/images/` with optimized versions in `optimized/`
- **Styles**: SCSS source files in `src/styles/`, compiled CSS in `assets/css/`
- **Scripts**: JavaScript source files compiled to `assets/js/`
- **Components**: HTML components in `src/components/layout/`
