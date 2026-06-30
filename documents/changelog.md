# Changelog

All notable changes to the **KASI** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to Semantic Versioning.

---

## [Unreleased]

### Added
*   **Google Fonts Parallel Loading & Render-Blocking Mitigation:** Migrated Google Fonts loading stylesheet from CSS `@import` inside `global.css` to `<link>` element imports in `Layout.astro` head, avoiding render-blocking chains and speeding up mobile paint times.
*   **International SEO Hreflang Tags:** Implemented dynamic `<link rel="alternate" hreflang="...">` tags in the `<head>` of `Layout.astro` covering English (`en`, `x-default`), Spanish (`es`), Chinese (`zh`), and Punjabi (`pa`).
*   **Astro Sitemap & Robots.txt Integration:** Configured `@astrojs/sitemap` integration in `astro.config.mjs` and generated `public/robots.txt` pointing to the sitemap to optimize crawlability.
*   **Decoupled Multilingual i18n Support:** Configured Astro built-in subpath i18n routing (`en`, `es`, `zh`, `pa`). Implemented translation helpers (`utils.ts`) and a comprehensive copy dictionary (`translations.ts`) compiling all pages and UI strings across English, Spanish, Mandarin Chinese, and Gurmukhi Punjabi. Decoupled page content from layout designs by importing parent pages directly under localized routes (`src/pages/{es,zh,pa}/*.astro`).
*   **Language Switcher Integration:** Added visual flags and custom vector icons in the navigation bar (`Navbar.astro`) and footers (`Footer.astro`) to switch between languages on desktop and mobile.

### Changed
*   **Heading Hierarchy & Image Layout Dimensions:** Restored sequential heading hierarchy (`<h4>` to `<h3>` in `about.astro` timeline) and declared `width` and `height` dimensions on Navbar and Footer logo images, mitigating Cumulative Layout Shift (CLS) in Lighthouse audits.
*   **Mobile Navigation Menu Layout:** Fixed mobile menu styling in `Navbar.astro` to restore vertical layout structure (`flex-direction: column` and `align-items: flex-start` at the mobile breakpoint).
*   **Unit Test Coverage Alignment:** Refactored `Navbar.test.ts` and `Footer.test.ts` assertions to target translation dictionary lookup keys (e.g. `t(...)`) rather than static English strings, restoring unit test suite passing status post-i18n migration.

### Changed
*   **Navbar Desktop Spacing & Alignment (V3):** Enwrapped the desktop navigation links block inside a pill-shaped glassmorphic capsule container (`.nav-menu`) matching the language switcher style. Configured navigation items as rounded pill buttons (`.nav-link`) with `6px` gaps and padding, highlighting the active route with the primary gradient background (`.nav-link.active`) and shadow to create a unified design system. Restored original navigation links order (`Home`, `Services`, `AI Systems`, `Cases`, `About Us`). Overrode `.nav-container` `max-width` to `1440px` and reduced horizontal padding on menu links (`6px 12px`) and language selector buttons (`6px 10px`) to prevent crowding and maintain elegant visual spacing between the logo, capsule menu, and the `English` flag control. Applied `white-space: nowrap` to prevent text wrapping. Added responsive CSS rules to collapse language labels and display only flags/icons on viewports below `1360px`. Adjusted max-width media query breakpoint to `1080px` and reset capsule styles on mobile layouts.
*   **Localized Page Templates:** Refactored all main page files in `src/pages/*.astro` and feature components like `ContactForm.astro` to render strings dynamically using translation lookup keys.
*   **Multilingual Writing Guidelines (Spanish, Mandarin, Punjabi):** Created [writing-guidelines-es.md](file:///f:/KASI/documents/writing-guidelines-es.md), [writing-guidelines-zh.md](file:///f:/KASI/documents/writing-guidelines-zh.md), and [writing-guidelines-pa.md](file:///f:/KASI/documents/writing-guidelines-pa.md) translating and adapting style policies to identify and reduce AI-writing patterns across these languages, specifying connective words, buzzwords, passive structures, and filler phrases to avoid.
*   **Structured Data Schema:** Implemented structured JSON-LD data schema (`ProfessionalService`) in `Layout.astro` `<head>` describing Kroma AI Systems Inc. details, geo-coordinates, and price specs to maximize local search indexing.
*   **Plumbing Niche Pivot:** Re-aligned all client-facing website copy, headlines, metrics, service lists, capabilities, and case studies to target professional plumbing contractors.
*   **Home UI/UX Audit:** Added the analytical report `documents/home-ui-ux-audit.md` detailing header, logo, and typography proportion suggestions.
*   **Semantic HTML Main Tags:** Enwrapped the main content of all 6 pages (`index.astro`, `about.astro`, `services.astro`, `solutions.astro`, `cases.astro`, `contact.astro`) within `<main>` tags for improved SEO indexing.
*   **Canonical URLs Support:** Added dynamic generation of canonical URL links inside `<Layout.astro>` pointing to the production domain (`https://kasi.systems`).
*   **Test Coverage & Tech Debt Rules:** Added explicit 80% minimum test coverage and 20% max technical debt boundaries to the project guidelines.
*   **Language Standard:** Established English Core as the mandatory standard for all repository assets, code, documentation, and metadata.
*   **Clean Architecture Shared Folder:** Reorganized common assets by moving layout templates to `src/shared/layouts/Layout.astro` and global styles to `src/shared/styles/global.css`.

### Changed
*   **Descriptive Anchor Links:** Replaced vague "Learn more →" links on the Home Page with highly descriptive anchor texts matching their target services (*Explore Website Redesign →*, *Explore AI Dispatch Assistant →*, *Explore Voice CRM →*, *Explore Calendar Sync →*) to satisfy SEO rules.
*   **Design System Purple/Violet Shift & Strategic Brand Context Alignment:** Shifted design color palette to a high-end deep purple-black background (`#080510`), vibrant purple primary accent (`#6F35FC`), and bright lavender secondary accent (`#A259FF`) matching beyond.agency. Updated variables, gradients, and custom manuals. Aligned [kasi-strategic-brand-context.md](file:///f:/KASI/documents/kasi-strategic-brand-context.md) with the new CSS variables, documented the Layer B public-facing section removal, and transitioned the brand's semantic irony to the English Core official insignia motto (`"We are not perfect, but we KASI always deliver."`).
*   **Global Viewport Scroll Sections, Dividers & CSS Scroll Snapping:** Created a modular class `.viewport-section` in `global.css` that sets section height to exactly `100vh` on all devices, centers content using flex align, incorporates sticky navbar padding offsets, enables custom internal scrolling, and applies a `1px` purple border (`rgba(162, 89, 255, 0.12)`) at section boundaries. Implemented CSS Scroll Snapping (`scroll-snap-type: y mandatory` on `html:has(.viewport-section)`) to scroll exactly one section at a time, avoiding pixel-level offsets on section-based pages while keeping form-heavy pages (like Contact) scrolling naturally. Set `.footer` alignment to `scroll-snap-align: end`.
*   **Viewport Card Size Optimization & Section Splitting:** Scaled down content card dimensions and reduced grid gaps/paddings on Home, Services, and Cases pages. Split cards into separate `100vh` viewport sections on the Services, Cases, AI Systems (Solutions), and About Us pages to ensure a spacious, scroll-free fit within viewport boundaries on standard devices:
    *   *Services Page (`services.astro`):* Split grid into two distinct `.viewport-section` sections (3 cards / 3 cards). Reduced `.service-page-card` minimum height to `400px` (from `480px`), padding to `20px` (`var(--space-5)`), circular icon sizes to `50px` (from `60px`), and grid gap to `24px`.
    *   *Cases Page (`cases.astro`):* Split grid into two distinct `.viewport-section` sections (3 cards / 3 cards). Reduced `.case-card-item` minimum height to `390px` (from `460px`), padding to `20px` (`var(--space-5)`), and grid gap to `24px`.
    *   *AI Systems Page (`solutions.astro`):* Split capabilities grid into two distinct `.viewport-section` sections (4 cards / 2 cards).
    *   *About Us Page (`about.astro`):* Modified visual emblem layout. Retained only the Layer A section ("KASI" as Practical Realism) and removed the Layer B section ("Encrypted Symbols of Trust"), keeping the original asset logo variations image file intact. Re-aligned `.emblem-card` width to `grid-column: 3 / 11` (8 columns centered) for a balanced single-card layout.
    *   *Home Page (`index.astro`):* Reduced `.service-strip-card` and `.solution-card` padding to `20px` (`var(--space-5)`) and grid gap to `24px` to ensure full screen fit.
*   **Pill Button Shapes:** Changed `.btn-primary` and `.btn-secondary` border-radius from `10px` to `50px` (pill-shape) and shifted hover box-shadow colors to purple coordinates.
*   **SEO Title & Description Optimization:** Adjusted all 6 page titles to be strictly under **60 characters** and descriptions under **160 characters** to prevent search engine result truncation. Simplified `Layout.astro` header to render the raw title directly.
*   **Asset Standardization:** Renamed all root brand resources in `logo/` -> `logos/` and public assets in `public/assets/logo/` -> `public/assets/logos/` to follow a lowercase, snake_case convention.
*   **Document Standardization:** Renamed business documents in `documents/` to follow a lowercase, kebab-case convention.
*   **Contact Form Select Options:** Changed the dropdown choices to offer specialized trade services (*Website Redesign*, *AI Dispatch Assistant*, *Voice CRM*, *Tool Sync*, *SEO*, *Full Suite*).
*   **Test Cases Alignment:** Updated Vitest unit assertions and Playwright E2E integration test values to match the new English copywriting and selector options.
*   **Navbar & Logo Proportions (V2):** Added a gradient squarish container backing (58px x 58px) with a soft 12px border radius to the KASI monogram logo in the header, adjusted logo image height to 38px for clean centering matching the red box reference, and reduced header CTA padding to 8px 18px. Changed menu link fonts (`.nav-link`) to use clean geometric Inter Bold (`font-weight: 700`, `font-size: 1.05rem`, `letter-spacing: -0.02em`) matching the reference image.
*   **Hero Section Typography & Spacing (V2):** Scaled up AICube 3D animation by **1.3x** (container to 325px, cube sides to 260px, orbit to 286px, core to 52px) and increased hero visual container height to **500px** with `-45px` top margin. Balanced H1 text and right-side weight.
*   **AICube Breathing Scale Animation:** Added a CSS breathing scale pulsing animation (`breatheCube`) to `.tech-cube-container` in `AICube.astro` transitioning from scale(0.75) to scale(1.2) in an infinite alternate loop, satisfying the red rectangles constraints.
*   **Hero CTA Button Alignment:** Added `1px solid transparent` border to primary `.btn-primary` in `global.css` to align its height (exactly matching secondary `.btn-secondary` outline button with `1px` border), fixing the 2px misalignment.

---

## [1.0.0] - 2026-06-30

### Added
*   Initial release of the corporate institutional website for Kroma AI Systems Inc. (KASI) built with Astro, Vanilla CSS, Vitest, and Playwright.
