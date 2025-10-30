# Zero Barriers - Global Design Standards

## 🎯 Overview
This document defines the global parameters, standards, and templates used across the Zero Barriers website to ensure consistency and maintainability.

---

## 🎨 **Color System**

```css
:root {
  --primary: #7cc347;           /* Main green */
  --primary-dark: #167a1f;     /* Darker green for buttons */
  --primary-light: rgba(37, 197, 54, 0.1); /* Light green background */
  --secondary: #58595b;        /* Gray text */
  --black: #000000;            /* Headings */
  --white: #ffffff;            /* Backgrounds */
  --light-gray: #f5f5f5;      /* Section backgrounds */
  --dark-gray: #333333;        /* Footer background */
  --accent: #2c88d9;           /* Blue accent */
}
```

---

## 📏 **Spacing System**

All spacing uses a consistent scale based on 4px increments:

```css
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
  --spacing-4xl: 80px;
  --spacing-5xl: 120px;
}
```

### **Section Padding Standards**
- Small sections: `60px 0`
- Medium sections: `80px 0`
- Large sections: `120px 0`

---

## 🔘 **Button Standards**

### **Primary Button** (`.cta-button`)
- **Background**: `var(--primary-dark)` (#167a1f)
- **Text**: White
- **Padding**: `12px 24px` (standard) | `15px 30px` (large) | `20px 40px` (extra large)
- **Border Radius**: `4px` (standard) | `8px` (large) | `12px` (extra large)
- **Hover**: Lighter green background, translate up 2px, shadow
- **Transition**: `all 0.3s ease`

```css
.cta-button {
  background-color: var(--primary-dark);
  color: var(--white);
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  font-weight: 600;
  transition: var(--transition);
}
```

### **Secondary Button** (`.cta-button.secondary`)
- **Background**: Transparent
- **Border**: `2px solid var(--primary)`
- **Text**: `var(--primary)`
- **Hover**: Green background, white text

---

## 📐 **Logo & Image Standards**

### **Main Logo** (`.logo-image`)
- **Height**: `60px`
- **Margin Right**: `12px`
- **Object Fit**: `contain`
- **Used In**: Header, Footer

### **Division Logos** (`.division-logo`)
- **Height**: `60px`
- **Max Width**: `150px`
- **Object Fit**: `contain`
- **Opacity**: `0.9` (hover: `1`)
- **Gap Between**: `20px`

### **Images**
- **Border Radius**: `12px` (standard)
- **Shadow**: `0 20px 50px rgba(0, 0, 0, 0.12)`
- **Hover Shadow**: `0 25px 60px rgba(0, 0, 0, 0.15)`
- **Object Fit**: `cover` (standard) | `contain` (logos)

---

## 🎭 **Animation Standards**

```css
:root {
  --transition: all 0.3s ease;        /* Standard */
  --transition-fast: all 0.15s ease;  /* Quick interactions */
  --transition-slow: all 0.5s ease;    /* Deliberate animations */
}
```

### **Common Animations**
- **Hover**: `transform: translateY(-2px)` + shadow increase
- **Fade In**: `opacity: 0 → 1` with transition
- **Scale**: `transform: scale(1.05)` on image hover
- **Slide**: `transform: translateX()` for menus

### **Reduced Motion Support**
All animations respect `prefers-reduced-motion` media query.

---

## 📦 **Container Standards**

```css
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

---

## 🔤 **Typography Standards**

- **Font Family**: `'Poppins', sans-serif`
- **Font Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- **Line Height**: `1.6` (body) | `1.2-1.3` (headings)

### **Heading Sizes**
- **H1**: `48px` (hero titles)
- **H2**: `42px` (section titles)
- **H3**: `24px-28px` (subsection titles)
- **Body**: `16px-18px`

---

## 🏗️ **Grid & Layout Standards**

### **Grid Gaps**
```css
--grid-gap-sm: 20px;
--grid-gap-md: 30px;
--grid-gap-lg: 40px;
--grid-gap-xl: 60px;
```

### **Common Grid Patterns**
- **2 Columns**: `grid-template-columns: 1fr 1fr; gap: var(--grid-gap-lg);`
- **3 Columns**: `grid-template-columns: repeat(3, 1fr); gap: var(--grid-gap-lg);`
- **4 Columns**: `grid-template-columns: repeat(4, 1fr); gap: var(--grid-gap-md);`

---

## 📄 **Page Layout Templates**

Each page type follows a consistent structure:

### **1. Standard Content Page** (`/services`, `/technology`, `/testimonials`)
```
┌─────────────────────────────┐
│        Header (Global)      │
├─────────────────────────────┤
│    Page-Specific Hero       │
│    (Background, Title)      │
├─────────────────────────────┤
│    Main Content Sections    │
│    (Alternating layouts)    │
├─────────────────────────────┤
│        Footer (Global)      │
└─────────────────────────────┘
```

### **2. Case Studies Page** (`/case-studies`)
```
┌─────────────────────────────┐
│        Header (Global)      │
├─────────────────────────────┤
│    Hero with Stats          │
├─────────────────────────────┤
│    Case Study Cards Grid    │
│    (2 columns desktop)      │
├─────────────────────────────┤
│        Footer (Global)      │
└─────────────────────────────┘
```

### **3. Contact Page** (`/contact`)
```
┌─────────────────────────────┐
│        Header (Global)      │
├─────────────────────────────┤
│    Contact Hero             │
├─────────────────────────────┤
│    Form + Contact Info      │
│    (2 columns desktop)      │
├─────────────────────────────┤
│        Footer (Global)      │
└─────────────────────────────┘
```

---

## 🧩 **Component Standards**

### **Header**
- **Fixed Position**: Top of viewport
- **Z-Index**: `1000`
- **Background**: White with shadow
- **Logo**: `.logo-image` (60px height)
- **Navigation**: Horizontal on desktop, vertical on mobile
- **CTA Button**: "Get Started" link (hidden on mobile)

### **Footer**
- **Background**: `var(--dark-gray)`
- **Text**: Light gray (#aaa)
- **Columns**: 4 on desktop, 1 on mobile
- **Social Links**: Icon font with hover effects

---

## 📱 **Responsive Breakpoints**

```css
/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (max-width: 992px) { }

/* Desktop */
@media (min-width: 993px) { }
```

---

## ✅ **Usage Checklist**

When creating a new page or component:

- [ ] Use CSS variables for colors (`var(--primary)`)
- [ ] Use spacing variables (`var(--spacing-lg)`)
- [ ] Use standard button classes (`.cta-button`)
- [ ] Use logo classes (`.logo-image`, `.division-logo`)
- [ ] Apply standard section padding
- [ ] Use container class for content width
- [ ] Follow grid gap standards
- [ ] Include proper transitions
- [ ] Test responsive breakpoints
- [ ] Verify reduced motion support

---

## 📝 **Notes**

- All measurements use `px` for consistency with design.
- All transitions respect user motion preferences.
- Images should always include `alt` attributes.
- Buttons should be focusable and have proper ARIA labels when needed.
- Navigation links should use Next.js `Link` component.

---

**Last Updated**: 2025-01-XX  
**Version**: 1.0



