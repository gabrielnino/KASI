# Changelog

All notable changes to the **KASI** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to Semantic Versioning.

---

## [Unreleased]

### Added
*   **Plumbing Niche Pivot:** Re-aligned all client-facing website copy, headlines, metrics, service lists, capabilities, and case studies to target professional plumbing contractors.
*   **Home UI/UX Audit:** Added the analytical report `documents/home-ui-ux-audit.md` detailing header, logo, and typography proportion suggestions.
*   **Semantic HTML Main Tags:** Enwrapped the main content of all 6 pages (`index.astro`, `about.astro`, `services.astro`, `solutions.astro`, `cases.astro`, `contact.astro`) within `<main>` tags for improved SEO indexing.
*   **Canonical URLs Support:** Added dynamic generation of canonical URL links inside `<Layout.astro>` pointing to the production domain (`https://kasi.systems`).
*   **Test Coverage & Tech Debt Rules:** Added explicit 80% minimum test coverage and 20% max technical debt boundaries to the project guidelines.
*   **Language Standard:** Established English Core as the mandatory standard for all repository assets, code, documentation, and metadata.
*   **Clean Architecture Shared Folder:** Reorganized common assets by moving layout templates to `src/shared/layouts/Layout.astro` and global styles to `src/shared/styles/global.css`.

### Changed
*   **Asset Standardization:** Renamed all root brand resources in `logo/` -> `logos/` and public assets in `public/assets/logo/` -> `public/assets/logos/` to follow a lowercase, snake_case convention.
*   **Document Standardization:** Renamed business documents in `documents/` to follow a lowercase, kebab-case convention.
*   **Contact Form Select Options:** Changed the dropdown choices to offer specialized trade services (*Website Redesign*, *AI Dispatch Assistant*, *Voice CRM*, *Tool Sync*, *SEO*, *Full Suite*).
*   **Test Cases Alignment:** Updated Vitest unit assertions and Playwright E2E integration test values to match the new English copywriting and selector options.
*   **Navbar & Logo Proportions:** Adjusted brand logo height to 46px, increased navigation link gap to 2rem, and reduced header CTA button padding to 8px 18px (with 0.9rem font-size).
*   **Hero Section Typography & Spacing:** Adjusted hero subtitle font-size to 1.2rem and brightness to #E6E7EA, and balanced AICube visual top margin to -30px.

---

## [1.0.0] - 2026-06-30

### Added
*   Initial release of the corporate institutional website for Kroma AI Systems Inc. (KASI) built with Astro, Vanilla CSS, Vitest, and Playwright.
