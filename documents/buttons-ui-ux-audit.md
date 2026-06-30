# Home Page Buttons UI/UX & Visual Proportion Audit

**Project:** KASI - Kroma AI Systems Inc.  
**Subject:** Visual Hierarchy, Proportion and Height Alignment Audit of Hero CTA Buttons  
**Author:** Antigravity UI/UX Auditor  

---

## 1. Executive Summary

This audit evaluates the visual proportions, height alignment, spacing, and styling of the primary and secondary CTA buttons in the Home page Hero section. 

The audit reveals a subtle layout inconsistency: the outlined secondary button (**"Explore Services"**) is physically taller than the filled primary button (**"Request Free Consultation"**). This height discrepancy breaks the horizontal symmetry of the button row, creating a minor visual imbalance.

---

## 2. Technical and Visual Analysis

### 2.1. Height Asymmetry (The 2px Discrepancy)
*   **The Issue:** The two buttons are defined with identical vertical padding (`14px 24px`) but different border configurations:
    *   `.btn-primary` has `border: none;`
    *   `.btn-secondary` has `border: 1px solid var(--color-border);`
*   **The Math:** In the browser box model, the `1px` border adds `1px` to the top and `1px` to the bottom of the secondary button. As a result:
    *   Primary Button Height = `Content Height` + `28px (vertical padding)` + `0px (border)` = **`line-height + 28px`**
    *   Secondary Button Height = `Content Height` + `28px (vertical padding)` + `2px (border)` = **`line-height + 30px`**
*   **Visual Impact:** The secondary button is exactly **2px taller** than the primary button, causing their top and bottom edges to be misaligned when placed side-by-side.

### 2.2. Visual Hierarchy & Contrast
*   **Primary CTA ("Request Free Consultation"):** Stylized with a vibrant gradient fill. It has high prominence and clear clickability, successfully directing the user's attention.
*   **Secondary CTA ("Explore Services"):** Outlined with transparent background. It provides a clean, alternative path without competing with the primary action.
*   **Border Radius:** Both buttons utilize a `10px` border radius, which aligns well with the modern, rounded-card design system.

---

## 3. UI/UX Recommendations & Action Items

To correct the visual misalignment and ensure perfect visual proportions:

1.  **Add a Transparent Border to the Primary Button:**
    Add `border: 1px solid transparent;` to `.btn-primary` in the global stylesheet (`global.css`). This forces both buttons to calculate height using the exact same box model parameters, equalizing their heights at **`line-height + 30px`**.
2.  **Ensure Uniform Font Sizes:**
    Maintain exact font sizing (`1rem`) and weight (`700`) to guarantee that the text baseline aligns perfectly.

---

## 4. Proposed CSS Modification

```diff
  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--grad-primary);
    color: var(--color-white) !important;
-   border: none;
+   border: 1px solid transparent;
    border-radius: 10px;
    padding: 14px 24px;
    font-weight: 700;
```
