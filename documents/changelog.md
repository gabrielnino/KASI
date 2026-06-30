# Changelog

All notable changes to the **KASI** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to Semantic Versioning.

---

## [Unreleased]

### Added
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
*   **SEO Title & Description Optimization:** Adjusted all 6 page titles to be strictly under **60 characters** and descriptions under **160 characters** to prevent search engine result truncation. Simplified `Layout.astro` header to render the raw title directly.
*   **Asset Standardization:** Renamed all root brand resources in `logo/` -> `logos/` and public assets in `public/assets/logo/` -> `public/assets/logos/` to follow a lowercase, snake_case convention.
*   **Document Standardization:** Renamed business documents in `documents/` to follow a lowercase, kebab-case convention.
*   **Contact Form Select Options:** Changed the dropdown choices to offer specialized trade services (*Website Redesign*, *AI Dispatch Assistant*, *Voice CRM*, *Tool Sync*, *SEO*, *Full Suite*).
*   **Test Cases Alignment:** Updated Vitest unit assertions and Playwright E2E integration test values to match the new English copywriting and selector options.
*   **Navbar & Logo Proportions (V2):** Scaled up brand logo height to **56px** to ensure strong visual presence and details readability in the header. Set navigation link gap to 2rem and reduced header CTA padding to 8px 18px.
*   **Hero Section Typography & Spacing (V2):** Scaled up AICube 3D animation by **1.3x** (container to 325px, cube sides to 260px, orbit to 286px, core to 52px) and increased hero visual container height to **500px** with `-45px` top margin. Balanced H1 text and right-side weight.
*   **Hero CTA Button Alignment:** Added `1px solid transparent` border to primary `.btn-primary` in `global.css` to align its height (exactly matching secondary `.btn-secondary` outline button with `1px` border), fixing the 2px misalignment.

---

## [1.0.0] - 2026-06-30

### Added
*   Initial release of the corporate institutional website for Kroma AI Systems Inc. (KASI) built with Astro, Vanilla CSS, Vitest, and Playwright.
