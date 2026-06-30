# Methodological Bunker: Development Guidelines and Project Innegotiables

**Project:** Corporate Institutional Website  
**Human Strategist / Founder:** Luis Gabriel Niño  
**Executor / AI Assistant:** AI Swarm / Antigravity Orchestrator  

---

## Table of Contents
1. [Statement of Principles and Governance](#1-statement-of-principles-and-governance)
2. [Project Innegotiables (Golden Rules)](#2-project-innegotiables-golden-rules)
3. [Technology Stack and Infrastructure](#3-technology-stack-and-infrastructure)
4. [Information Architecture and Code Structure](#4-information-architecture-and-code-structure)
5. [Quality Contract: Antigravity Pipeline](#5-quality-contract-antigravity-pipeline)
6. [Naming Standards and Directory Structure](#6-naming-standards-and-directory-structure)

---

## 1. Statement of Principles and Governance

This document establishes the strict and non-negotiable methodological framework under which **Antigravity** and any AI agent will operate for the construction, evolution, and maintenance of the institutional website.

Development is governed under a philosophy of **clean architecture, radical time optimization, and absolute elimination of cognitive dispersion**. The AI acts as the executing arm and tool user; strategic control and decision-making remain with the Human Founder.

---

## 2. Project Innegotiables (Golden Rules)

Any increment of code, component, or configuration that violates the following points will be **automatically rejected** by the pipeline before its deployment:

*   **SEO Hyper-Optimization, Clean Semantics, and Speed:** The site must maintain a minimum score of **95/100** in *Performance* and *SEO* on Google PageSpeed Insights / Lighthouse. To enforce this, the following practices are mandatory:
    1.  **Semantic HTML Structure:** Use correct HTML5 structural tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
    2.  **Strict Headings Hierarchy:** Maintain exactly **one `<h1>` tag per page** representing the primary title, with subordinate subtitles sequentially organized under `<h2>`, `<h3>`, etc.
    3.  **Unique Titles & Descriptions:** Ensure unique `<title>` (under 60 characters) and `<meta description>` (under 160 characters) elements are configured per page.
    4.  **Accessible Asset Descriptors:** Obligatorily declare meaningful and descriptive `alt` attributes on all images.
    5.  **Descriptive Anchor Links:** Do not use vague link text (such as "click here" or "read more"); always use descriptive anchor text.
    6.  **Structured Schema Markup:** Where appropriate, implement structured data using JSON-LD (Schema.org) to facilitate search engines understanding site context.
    7.  **Canonical URLs:** Ensure that every page/section of the site dynamically constructs and declares its canonical URL to point to the production domain (`https://kasi.systems`), preventing search engine indexing of staging or preview URLs.
    8.  **Minimal Client-Side JS:** Client-side JavaScript usage must tend to zero.
*   **Complete Code Delivery:** The AI is strictly forbidden from generating code blocks with *placeholders*, elision comments (`// TODO: implement here`), or incomplete structures. Each delivery must be a functional, clean, and self-contained block.
*   **Real Multi-Device Testing Focus:** Generic mock validations are not accepted. Tests must obligatorily emulate the rendering engines of the three target environments:
    1.  **Desktop:** Google Chrome (Blink).
    2.  **iOS (iPhone):** Safari (WebKit).
    3.  **Android:** Google Chrome (Blink).
*   **Dynamic SEO Loop:** Every technical iteration or content alteration requires an automatic recalculation of the keyword map and metadata audit.
*   **Real-World Metrics Without Penalty:** The presence of **Google Analytics 4 (GA4)** and **Vercel Analytics** is mandatory. However, their loading must be optimized (e.g., via deferred script loading) so that under no circumstances do they penalize the Time to Interactive (TTI) or degrade performance.
*   **Language Standard (English Core):** English is and will always remain the sole language for all internal and external project development resources. This includes source code, components, CSS variables, unit and E2E tests, configuration files, git commit messages, pull requests, folders, file names, and documentation. This standard applies universally even if the public-facing user interface supports multiple languages (multilingual localization).
*   **Test Coverage & Technical Debt Control:** The codebase must maintain a minimum of **80% code coverage**. We cannot allow technical debt to rise above 20% (preventing untested logic from exceeding 20% of the codebase). Any code submission that drops coverage below this 80% threshold will be automatically rejected.

---

## 3. Technology Stack and Infrastructure

The technology selection is designed to minimize operational costs, eliminate server maintenance needs, and maximize speed at the *Edge*:

*   **Core Framework:** Astro (Static Site Generation - SSG). Pure compile-time rendering.
*   **Styling:** Tailwind CSS (Mobile-First approach, utility classes optimized via production purging). *Note: The current workspace uses Vanilla CSS for performance and speed reasons, but the framework choice remains standard.*
*   **Version Control:** GitHub (Private repository, integration base of operations).
*   **Deployment and Hosting:** Vercel (Freemium / Hobby tier). Leveraging Edge Network CDN, automatic SSL, and preview URLs per Pull Request.

---

## 4. Information Architecture and Code Structure

### Phase 1 Scope
The scope is strictly limited to a **Positioning Website**. Interactive software components, complex databases, or SaaS-like dashboards are entirely excluded to reduce initial cognitive load.

The site consists of exactly 5 sections (each requiring its own canonical URL pointing to the production domain):
1.  Home: High-conversion business-oriented landing page.
2.  Services: Catalog and description of the core offering.
3.  AI Systems: Strategic space to position automation and swarm capabilities.
4.  Cases: Case studies and technical success validations.
5.  About Us: Brand identity, vision, and corporate backing.

### Code Organization: Feature-Driven
The project will not use a purely global atomic structure. It will be organized **by feature (Feature-Driven)**. Each of the 5 sections will have its own isolated module with its specific components and layouts. Only cross-cutting elements (Header, Footer, Base Buttons) will reside in a shared folder (`shared`).

---

## 5. Quality Contract: Antigravity Pipeline

**Antigravity** will execute tasks strictly based on the following two control contracts:

### Definition of Ready (DoR) - When can we start?
A requirement or task is ready for the AI to write code only if it has:
1.  The required Astro component map perfectly defined.
2.  The structured data schema (if consuming local Markdown or JSON).
3.  The final copies approved by the strategist.

### Definition of Done (DoD) - When is it finished?
A code increment is considered "Done" and ready for production if and only if it automatically complies with:
*   **Unit Tests:** Executed in **Vitest** with **Testing Library**, validating properties injection and correct rendering of the Astro structure.
*   **Integration and UI Tests (E2E):** Executed in **Playwright** obligatorily simulating the target mobile devices (iOS/Android) and desktop profiles.
*   **Code Coverage Verification:** Enforce that test coverage meets or exceeds the **80% minimum threshold** (technical debt ratio below 20%) before any deployment.
*   **Deployment Filter (Lighthouse CI):** Automatic block of Vercel deployment if the audit yields a score below 95 in performance or SEO.
*   **Strict Tag and Analytics Validation:** Mandatory presence of `<title>`, `meta description`, canonical links (`<link rel="canonical">`), Open Graph tags (`og:*`), image `alt` attributes, and validation of correct initialization and zero performance impact of GA4 and Vercel Analytics scripts.

---

## 6. Naming Standards and Directory Structure

### Naming Conventions
*   **Pages (Astro Routes):** Lowercase and in *kebab-case* format (e.g., `index.astro`, `services.astro`, `solutions.astro`).
*   **Astro Components:** *PascalCase* name (e.g., `Navbar.astro`, `Footer.astro`, `AICube.astro`, `PipelineDiagram.astro`).
*   **Stylesheets:** Lowercase and in *kebab-case* format (e.g., `global.css`).
*   **Unit Test Files:** *PascalCase* matching the component they evaluate, with `.test.ts` extension (e.g., `Navbar.test.ts`).
*   **E2E (Integration) Test Files:** Lowercase, *kebab-case* format, and `.spec.ts` extension (e.g., `contact.spec.ts`).
*   **Design/Business Documentation:** Lowercase and in *kebab-case* format (e.g., `kasi-maquetado-visual.md`).
*   **Images and Graphical Resources:** Lowercase and in *snake_case* format (e.g., `kasi_white.png`, `logo_texto.png`).

### Folder Structure
```
/
├── documents/                  # Strategic documentation and guidelines
│   └── *.md (kebab-case.md)
├── logos/                      # Original brand assets (snake_case)
├── public/                     # Root static resources
│   ├── favicon.png             # Browser tab icon (256x256)
│   ├── favicon.ico             # Fallback for compatibility
│   └── assets/
│       └── logos/              # Corporate logos (snake_case)
├── src/
│   ├── pages/                  # Site routing (kebab-case.astro)
│   ├── shared/                 # Shared components and styles
│   │   ├── components/         # Global elements (Navbar, Footer)
│   │   ├── layouts/            # Global templates (Layout)
│   │   └── styles/             # Shared stylesheets (global.css)
│   └── features/               # Isolated modules oriented by features
│       ├── home/components/
│       ├── solutions/components/
│       └── contact/components/
└── tests/                      # Automated test suites
    ├── unit/                   # Unit tests (*.test.ts)
    └── e2e/                    # Integration tests (*.spec.ts)
```