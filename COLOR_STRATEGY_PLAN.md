# Color Strategy Plan - Transformative Sage Theme
## Page-Specific Color Dominance

**Objective:** Create visual distinction and emotional connection through dominant color themes while maintaining brand consistency across all pages.

---

## Color Palette Reference

### Primary Colors
- **Sunshine Yellow**: `#FFD54F` (--yellow-sunshine)
  - Used for breakthrough moments, CTAs, hero accents
  - Creates energy, optimism, transformation

- **Deep Blues**: `#0A1628` (--blue-midnight), `#1A237E` (--blue-ocean), `#1565C0` (--blue-royal)
  - Creates depth, trust, expertise
  - Professional, stable foundation

- **Teal**: `#006064` (--teal-deep), `#00838F` (--teal-rich), `#00ACC1` (--teal-vibrant)
  - Innovation, growth, transformation
  - Primary brand color (40% usage in overall design system)

- **Deep Green**: `#1B5E20` (--green-forest), `#00695C` (--green-emerald), `#33691E` (--green-moss)
  - Growth, sustainability, achievement
  - Success stories, proven results

---

## Page-Specific Color Dominance Strategy

### 1. Home Page - **SUNSHINE YELLOW** (Predominant)

**Rationale:** Home page is the entry point—sunshine yellow creates immediate energy, optimism, and transformation excitement. It represents "POTENTIAL UNLEASHED."

**Implementation:**
- **Hero Section**: Yellow gradient background or yellow-tinted overlay on hero image
- **Section Backgrounds**: Alternating yellow-tinted sections (use `rgba(255, 213, 79, 0.1)` for subtle backgrounds)
- **Accents**: Strong yellow for CTAs, badges, key metrics, transformation moments
- **Text Overlays**: Yellow highlights on key phrases ("Breakthrough Results", transformation keywords)
- **Stats Section**: Yellow number highlights on dark background for contrast
- **Cards/Hover States**: Yellow borders, shadows, or glow effects
- **Button Styles**: Yellow primary buttons (`--yellow-sunshine` background)

**Sections to Emphasize:**
- Hero section (yellow gradient overlay)
- Stats Section numbers (yellow text)
- CTA buttons (yellow primary)
- Service Pillars hover states (yellow accents)
- Final CTA section (yellow background or gradient)

**Complementary Colors:**
- Use teal for secondary elements (maintains brand)
- Deep blue for text on yellow backgrounds
- White for contrast

---

### 2. Services Page - **DEEP BLUES** (Predominant)

**Rationale:** Services page communicates expertise, trust, and depth. Deep blues create professional credibility and stability—essential for service positioning.

**Implementation:**
- **Hero Section**: Deep blue gradient background (`--blue-midnight` to `--blue-ocean`)
- **Section Backgrounds**: Blue-tinted sections (use `rgba(10, 22, 40, 0.05)` for subtle backgrounds)
- **Service Cards**: Blue borders, blue-tinted backgrounds, blue shadows
- **Typography**: Blue accents for headlines, section titles
- **Button Styles**: Blue primary buttons, yellow for secondary CTAs
- **Hover States**: Blue glow effects, blue border highlights

**Sections to Emphasize:**
- Hero section (deep blue gradient)
- Service detail sections (blue-tinted backgrounds)
- Section titles (blue color)
- CTA buttons (blue primary with yellow accent for contrast)
- Strategic Partnerships section (blue cards)

**Complementary Colors:**
- Yellow for CTAs and key highlights
- Teal for secondary accents
- White text on blue backgrounds

---

### 3. Technology Page - **TEAL** (Predominant)

**Rationale:** Technology page represents innovation and transformation—teal is the primary brand color representing growth and cutting-edge solutions.

**Implementation:**
- **Hero Section**: Teal gradient background (`--teal-deep` to `--teal-rich`)
- **Section Backgrounds**: Teal-tinted sections (use `rgba(0, 131, 143, 0.1)` for subtle backgrounds)
- **Division Cards**: Teal borders, teal-tinted backgrounds
- **Typography**: Teal accents for headlines, technology highlights
- **Button Styles**: Teal primary buttons, yellow for CTAs
- **Stats/Metrics**: Teal number highlights
- **Hover States**: Teal glow effects, teal border highlights

**Sections to Emphasize:**
- Hero section (teal gradient)
- Technology Overview section (teal background)
- CRM Solutions section (teal accents)
- Custom Development section (teal accents)
- Stats numbers (teal color)
- CTA buttons (teal primary)

**Complementary Colors:**
- Yellow for CTAs and transformation moments
- Deep blue for depth and contrast
- White text on teal backgrounds

---

### 4. Case Studies Page - **DEEP GREEN** (Predominant)

**Rationale:** Case studies showcase proven results and growth—deep green represents achievement, sustainability, and success stories.

**Implementation:**
- **Hero Section**: Green gradient background (`--green-forest` to `--green-emerald`)
- **Section Backgrounds**: Green-tinted sections (use `rgba(27, 94, 32, 0.1)` for subtle backgrounds)
- **Case Study Cards**: Green borders, green-tinted backgrounds
- **Typography**: Green accents for headlines, success metrics
- **Stats/Metrics**: Green number highlights (growth percentages)
- **Result Badges**: Green backgrounds for success indicators
- **Button Styles**: Green primary buttons, yellow for CTAs

**Sections to Emphasize:**
- Hero section (green gradient)
- Case Study sections (green-tinted backgrounds)
- Results metrics (green numbers)
- Success badges (green backgrounds)
- CTA buttons (green primary with yellow accent)

**Complementary Colors:**
- Yellow for peak achievements and CTAs
- Deep blue for text and depth
- White text on green backgrounds

---

### 5. Contact Page - **SUNSHINE YELLOW** (Predominant)

**Rationale:** Contact page is the conversion point—sunshine yellow creates urgency, optimism, and invites action. Matches home page energy for consistency in entry/exit points.

**Implementation:**
- **Hero Section**: Yellow gradient background or yellow-tinted overlay
- **Form Section**: Yellow-tinted background or yellow accents on form elements
- **Form Fields**: Yellow border focus states
- **Button Styles**: Yellow primary buttons (strong call-to-action)
- **Success Messages**: Yellow-tinted success states
- **Typography**: Yellow accents for headlines, key phrases

**Sections to Emphasize:**
- Hero section (yellow gradient)
- Contact form section (yellow accents)
- Form submit button (yellow primary)
- CTA section (yellow background)
- Success/error states (yellow-tinted)

**Complementary Colors:**
- Deep blue for form text and professional elements
- Teal for secondary elements
- White for contrast on yellow backgrounds

---

## Implementation Guidelines

### CSS Variable Usage

Each page should use CSS custom properties for dominant colors:

```css
/* Page-specific color overrides */
.home-page {
  --page-dominant: var(--yellow-sunshine);
  --page-dominant-light: rgba(255, 213, 79, 0.1);
  --page-dominant-dark: #FFB300;
}

.services-page {
  --page-dominant: var(--blue-midnight);
  --page-dominant-light: rgba(10, 22, 40, 0.1);
  --page-dominant-dark: var(--blue-ocean);
}

.technology-page {
  --page-dominant: var(--teal-rich);
  --page-dominant-light: rgba(0, 131, 143, 0.1);
  --page-dominant-dark: var(--teal-deep);
}

.case-studies-page {
  --page-dominant: var(--green-emerald);
  --page-dominant-light: rgba(27, 94, 32, 0.1);
  --page-dominant-dark: var(--green-forest);
}

.contact-page {
  --page-dominant: var(--yellow-sunshine);
  --page-dominant-light: rgba(255, 213, 79, 0.1);
  --page-dominant-dark: #FFB300;
}
```

### Background Gradient Patterns

**Light Dominance (Subtle):**
- Use `linear-gradient` with dominant color at low opacity (10-20%)
- Maintain white/light base for readability

**Medium Dominance (Prominent):**
- Use gradient overlays on hero sections
- 40-60% opacity overlays on images
- Solid color sections for emphasis

**Strong Dominance (Bold):**
- Full-color hero sections with gradients
- Strong color backgrounds for key sections
- Maintain text contrast (white on dark, dark on light)

### Component-Level Application

**Hero Sections:**
- Background: Full gradient using dominant color
- Text: White or dark (ensure contrast)
- CTAs: Dominant color or complementary accent

**Section Backgrounds:**
- Alternating: Dominant color tint → white → dominant color tint
- Subtle: `rgba()` tints at 5-10% opacity

**Cards/Components:**
- Borders: Dominant color at full or reduced opacity
- Hover states: Dominant color glow or border highlight
- Shadows: Dominant color tinted shadows

**Buttons:**
- Primary: Dominant color background
- Secondary: Dominant color border, transparent background
- CTA: Yellow (always use for conversion points, even on non-yellow pages)

**Typography:**
- Headlines: Dominant color for key phrases
- Accents: Dominant color for important words
- Body text: Maintain readability (dark on light, light on dark)

---

## Visual Hierarchy Rules

1. **Dominant Color = Primary Brand Statement**
   - Use for hero sections, major CTAs, key metrics
   - Represents the page's emotional tone

2. **Complementary Colors = Support Elements**
   - Yellow for CTAs (action/transformation)
   - Teal for secondary brand elements
   - Deep blue for depth and professionalism

3. **Contrast = Readability**
   - Always ensure WCAG AA contrast ratios
   - Test text on colored backgrounds
   - Use white/dark appropriately

4. **Consistency = Brand Recognition**
   - Maintain Transformative Sage theme elements
   - Keep logo and navigation consistent
   - Use color dominance, not color exclusivity

---

## Page-by-Page Implementation Checklist

### Home Page (Sunshine Yellow)
- [ ] Hero section with yellow gradient background
- [ ] Yellow-tinted section backgrounds
- [ ] Yellow accents on stats numbers
- [ ] Yellow primary CTA buttons
- [ ] Yellow hover states on service pillars
- [ ] Yellow highlights on transformation keywords
- [ ] Final CTA section with yellow background

### Services Page (Deep Blues)
- [ ] Hero section with blue gradient background
- [ ] Blue-tinted service detail sections
- [ ] Blue borders on service cards
- [ ] Blue section title accents
- [ ] Blue primary buttons (with yellow CTAs)
- [ ] Blue hover states and shadows

### Technology Page (Teal)
- [ ] Hero section with teal gradient background
- [ ] Teal-tinted section backgrounds
- [ ] Teal borders on division cards
- [ ] Teal stat number highlights
- [ ] Teal primary buttons (with yellow CTAs)
- [ ] Teal hover states and accents

### Case Studies Page (Deep Green)
- [ ] Hero section with green gradient background
- [ ] Green-tinted case study sections
- [ ] Green result metric highlights
- [ ] Green success badges
- [ ] Green primary buttons (with yellow CTAs)
- [ ] Green borders on case study cards

### Contact Page (Sunshine Yellow)
- [ ] Hero section with yellow gradient background
- [ ] Yellow accents on form elements
- [ ] Yellow form field focus states
- [ ] Yellow primary submit button
- [ ] Yellow CTA section background
- [ ] Yellow success message styling

---

## Testing & Validation

1. **Visual Consistency**
   - Ensure each page has clear color dominance (60-70% visual weight)
   - Verify brand consistency across all pages
   - Check that Transformative Sage theme remains intact

2. **Accessibility**
   - Test contrast ratios (WCAG AA minimum)
   - Verify text readability on all backgrounds
   - Test with color blindness simulators

3. **User Experience**
   - Ensure color enhances, not distracts from content
   - Verify CTAs are clear and actionable
   - Test across different devices and screen sizes

4. **Brand Alignment**
   - Confirm colors support transformation narrative
   - Verify emotional resonance matches page purpose
   - Check consistency with overall brand messaging

---

## Next Steps

1. **Create page-specific CSS classes** for dominant color application
2. **Update hero sections** with color gradients
3. **Modify section backgrounds** with color tints
4. **Update button styles** per page
5. **Apply color accents** to typography and components
6. **Test and refine** contrast and readability
7. **Document final color usage** for future reference

---

**Status:** Plan created, ready for implementation
**Last Updated:** [Current Date]
