# 1. Visual Layouts (UI Layouts) & Grid System
Primary pages of the KASI website.

Base pages:
* Home
* Services
* Solutions / AI Systems
* Case Studies
* About Us
* Contact

The brand must maintain a technical, corporate, and high-precision presence, aligned with KASI as the commercial brand of Kroma AI Systems Inc., focusing on software architecture, pipeline automation, and resilient systems.

## Grid System

### Desktop
```css
.container {
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: 32px;
}

.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}
```

### Tablet
```css
.container {
  padding-inline: 24px;
}

.grid-tablet {
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}
```

### Mobile
```css
.container {
  padding-inline: 20px;
}

.grid-mobile {
  grid-template-columns: 1fr;
  gap: 16px;
}
```

---

## Home Page

### Desktop Layout
* **Navbar:** Horizontal logo on the left, navigation menu in the center, CTA button on the right.
* **Hero:** 12 columns.
  * Col 1–6: Headline, subtitle, CTA buttons.
  * Col 7–12: 3D visual / AI cube, neural network, or digital silhouette.
* **Services Strip:** 4 cards in a row.
* **Trust Section:** Client logos, technical metrics, or claims.
* **Featured Solutions:** 3-column layout.
* **Process Section:** 4 horizontal steps.
* **Final CTA:** Navy background, white text, electric blue button.
* **Footer:** Logo, links, contact info, social media icons.

### Mobile Layout
* Navbar collapses to a hamburger menu.
* Hero in 1 column: text on top, visual on bottom.
* Cards stacked vertically.
* CTA full-width.
* Footer in vertical blocks.

---

## Services Page

### Desktop Layout
* Compact internal Hero section.
* Services grid in 3 columns:
  1. AI Solutions
  2. Development & Integration
  3. Cloud & Infrastructure
  4. Security
  5. Strategy & Consulting
  6. Automation Systems
* Each card: Circular SVG icon, title, description, secondary CTA.

### Mobile Layout
* 1 column.
* Cards with a minimum height of 220px.
* Icons on top, text below.

---

## Solutions / AI Systems Page

### Desktop Layout
* Hero with a digital skull visual or neural structure.
* "Capabilities" section in a 2x3 grid.
* Technical section with a 5/7 layout:
  * Left: Technical description.
  * Right: Visual diagram.
* CTA: "Build intelligent systems".

### Mobile Layout
* Centered Hero.
* Capabilities in vertical cards.
* Diagrams displayed below the text.

---

## Case Studies Page

### Desktop Layout
* 3-column grid.
* Card elements:
  * Category
  * Title
  * Measurable result
  * Tech stack
  * Link
* Top filter bar by industry or service.

### Mobile Layout
* 1-column cards.
* Filter options displayed as horizontal scrollable chips.

---

## About Us Page

### Desktop Layout
* Institutional Hero.
* Narrative section with a 6/6 layout:
  * Left: Corporate vision.
  * Right: KASI / Kroma AI Systems Inc. brand details.
* Technical timeline.
* Values: Precision, Resilience, Clean Architecture, Automation.

### Mobile Layout
* Single-column layout.
* Vertical timeline.

---

## Contact Page

### Desktop Layout
* 5/7 layout:
  * Left: Corporate message, contact info, Vancouver BC location.
  * Right: Form.
* Form fields:
  * Name
  * Email
  * Company
  * Service selector
  * Message text area
  * Submit button

### Mobile Layout
* Form displayed first.
* Contact info shown underneath.

---

# 2. Design System / Style Guide (Atomic Design System)

## Typography
* **Primary Font:** Montserrat
* **Fallback Fonts:** Inter, Arial, sans-serif
* `---font-primary: "Montserrat", Inter, Arial, sans-serif;`

| Token | Size | Weight | Line-height |
| :--- | :--- | :--- | :--- |
| H1 | 64px / 4rem | 800 | 1.05 |
| H2 | 44px / 2.75rem | 700 | 1.15 |
| H3 | 28px / 1.75rem | 700 | 1.25 |
| H4 | 22px / 1.375rem | 600 | 1.3 |
| Body Large | 18px / 1.125rem | 400 | 1.7 |
| Body | 16px / 1rem | 400 | 1.65 |
| Small | 14px / 0.875rem | 400 | 1.5 |
| Utility | 12px / 0.75rem | 600 | 1.4 |

## Color Palette
```css
:root {
  --color-primary-blue: #0A2D56;
  --color-primary-navy: #061B33;
  --color-bg-dark: #020B18;
  --color-electric-blue: #009DFF;
  --color-cyan-accent: #00C8FF;

  --color-silver: #E6E7EA;
  --color-silver-dark: #9CA3AF;
  --color-white: #FFFFFF;
  --color-black: #050505;

  --color-success: #22C55E;
  --color-warning: #FACC15;
  --color-error: #EF4444;

  --color-border: rgba(230, 231, 234, 0.22);
}
```

## Spacing System
Based on multiples of 8px:
* `--space-1: 4px;`
* `--space-2: 8px;`
* `--space-3: 12px;`
* `--space-4: 16px;`
* `--space-5: 24px;`
* `--space-6: 32px;`
* `--space-7: 40px;`
* `--space-8: 48px;`
* `--space-9: 64px;`
* `--space-10: 80px;`
* `--space-11: 96px;`
* `--space-12: 120px;`

## Button Styling

### Primary Button
```css
.btn-primary {
  background: linear-gradient(90deg, #007BFF, #00C8FF);
  color: #FFFFFF;
  border-radius: 10px;
  padding: 14px 24px;
  font-weight: 700;
  transition: all .2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 157, 255, .35);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary:disabled {
  opacity: .45;
  cursor: not-allowed;
}
```

## Inputs
```css
.input {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(230,231,234,.22);
  color: #FFFFFF;
  border-radius: 10px;
  padding: 14px 16px;
}

.input:focus {
  outline: none;
  border-color: #00C8FF;
  box-shadow: 0 0 0 3px rgba(0,200,255,.18);
}

.input::placeholder {
  color: #9CA3AF;
}

.input-error {
  border-color: #EF4444;
}
```

## Cards
```css
.card {
  background: linear-gradient(180deg, #061B33, #020B18);
  border: 1px solid rgba(230,231,234,.16);
  border-radius: 20px;
  padding: 32px;
  min-height: 260px;
  transition: all .25s ease;
}

.card:hover {
  transform: translateY(-6px);
  border-color: rgba(0,200,255,.55);
  box-shadow: 0 24px 60px rgba(0,0,0,.35);
}
```

## Iconography
* **Style:** Linear, technical, circular.
* **Stroke width:** 1.5px–2px.
* **Format:** SVG.
* **Required icons:** AI / Automation, Cloud, Security, Development, Consulting, Case Studies, About Us, Contact.

## Technical Handoff Note
Assets to extract for Dev Mode:
* Horizontal logo: PNG + SVG.
* Circular icon logo: PNG + SVG.
* Favicon: 16, 32, 48, 64, 96, 128, 180, 192, 256, 512px.
* SVG Icons: Solutions, AI, Development, Cloud, Security, Consulting, Case Studies, About.
* Optimized images: WebP format for hero, banners, and cards.
* Reusable social media templates: Instagram, LinkedIn, Facebook, X, YouTube, and TikTok.
* CSS/Tailwind variables: colors, typography, spacing, shadows, border radii, and interactive states.