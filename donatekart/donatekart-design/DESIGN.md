# donatekart DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 3 · Components: 7
> Icon library: not detected · State: not detected
> Primary theme: dark · Dark mode toggle: no · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![donatekart Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **dark-themed** interface with a cool tone. Depth is expressed through layered shadows and subtle surface color variation. Typography pairs **Redonda Bold** for display/headings with **Redonda Black** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. The accent color **#007bff** anchors interactive elements (buttons, links, focus rings). Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| text-primary | `#212529` | background | Page background, darkest surface |
| surface | `#343a40` | surface | Card and panel backgrounds |
| theme-color | `#ffffff` | text-primary | Headings and body text |
| text-secondary | `#939393` | text-muted | Captions, placeholders, secondary info |
| secondary | `#6c757d` | text-muted | Captions, placeholders, secondary info |
| primary | `#007bff` | accent | CTAs, links, focus rings, active states |
| primary | `#ff5523` | danger | Error states, destructive actions |
| success | `#28a745` | success | Success states, positive indicators |
| warning | `#ffc107` | warning | Warning states, caution indicators |
| secondary | `#0069ff` | info | Informational highlights |
| border-primary | `#e7e7e7` | unknown | Palette color |
| unknown | `#000000` | unknown | Palette color |
| unknown | `#d1d1d1` | unknown | Palette color |
| unknown | `#f6f6f6` | unknown | Palette color |
| unknown | `#c2c2c2` | unknown | Palette color |
| info | `#17a2b8` | unknown | Palette color |
| danger | `#dc3545` | unknown | Palette color |
| unknown | `#16181b` | unknown | Palette color |
| primary-light | `#ffeee9` | unknown | Palette color |
| unknown | `#3f9dff` | unknown | Palette color |

### CSS Variable Tokens

```css
--primary: #007bff;
--secondary: #6c757d;
--primary: #ff5523;
--primary-rgb: 255,85,35;
--primary-hover: #e64d20;
--primary-hover-rgb: 230,77,32;
--primary-active: #cc441c;
--primary-active-rgb: 204,68,28;
--primary-light: #ffeee9;
--primary-light-rgb: 255,238,233;
--primary-light-hover: #ffe6de;
--primary-light-hover-rgb: 255,230,222;
--secondary: #0069ff;
--secondary-rgb: 0,105,255;
--secondary-light: #e6f0ff;
--secondary-light-rgb: 230,240,255;
--secondary-hover: #005fe6;
--secondary-hover-rgb: 0,95,230;
--text-primary: #292925;
--text-primary-rgb: 41,41,37;
```


---

## 3. Typography Rules

**Font Stack:**
- **Redonda Black** — Heading 1, Heading 2, Heading 3
- **Redonda Bold** — Body, Caption
- **SFMono-Regular** — Code

**Font Sources:**

```css
@font-face {
  font-family: "Redonda Bold";
  src: url("https://www.donatekart.com/fonts/fonnts.com-Redonda_Compressed_Bold.otf") format("opentype");
  font-weight: 700;
}
@font-face {
  font-family: "Redonda Black";
  src: url("https://www.donatekart.com/fonts/fonnts.com-Redonda_Compressed_Black.otf") format("opentype");
  font-weight: 900;
}
@font-face {
  font-family: "Poppins";
  src: url("https://fonts.gstatic.com/s/poppins/v24/pxiGyp8kv8JHgFVrJJLedw.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Poppins";
  src: url("https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLCz7V1s.ttf") format("truetype");
  font-weight: 700;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Redonda Black | 48px | 700 |
| Heading 2 | Redonda Black | 40px | 700 |
| Heading 3 | Redonda Black | 36px | 700 |
| Body | Redonda Bold | 14px | 400 |
| Caption | Redonda Bold | 16px | 400 |
| Code | SFMono-Regular | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **Redonda Black** for body/UI text, **Redonda Bold** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (1)

**Footer** — `html`

### Navigation (1)

**Navigation** — `html`

### Data Display (1)

**Badge** — `html`

### Data Input (2)

**Button** — `html`
- Variants: `_17pl3`, `_1zHni`, `DonateNow__1MuF4`, `_1VBbu`
- Animation: 

**Input** — `html`
- State: :focus, :placeholder

### Media (2)

**Image** — `html`

**Icon** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
- **Border radius:** 0px 6px 6px 0px, 0px 6px 0px 0px, 0px 0px 0px 6px, 0px 0px 6px, 0px 0px 8px 8px, .2rem, .25rem, .3rem, 1px, 2px, 4px, 6px, 6px 0px 0px 6px, 6px 0px 0px, 7px, 8px, 8px 8px 0px 0px, 10px, 11px, 12px, 15px, 16px, 20px, 24px, 28px, 32px, 34px, 35px, 50px, 50rem, 70px, 999px
- **Max content width:** 991px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Flat — subtle depth hints

- `0 1px 2px rgba(0,0,0,.1)`
- `0 1px 2px rgba(0,0,0,.2)`

### Raised — cards, buttons, interactive elements

- `-4px 4px 8px rgba(0,0,0,.2)`
- `0 1px 3px rgba(0,0,0,.1)`
- `0 .125rem .25rem rgba(0,0,0,.075)`

### Floating — dropdowns, popovers, modals

- `0 0 10px rgba(0,0,0,.1)`
- `0 12px 12px 0 rgba(0,0,0,.2)`
- `0 5px 10px rgba(0,0,0,.05)`

### Overlay — full-screen overlays, top-level dialogs

- `0 0 20px var(--primary),0 0 30px #00d4ff,0 0 40px var(--primary)`
- `0 0 48px 8px rgba(var(--primary-rgb),.3)`
- `0 0 48px 8px rgba(229,57,53,.2)`

### Z-Index Scale

`0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 90, 98, 99, 100, 199, 999, 1000, 1005, 1020, 1030, 1040, 1050, 1070, 10000, 10007, 10008, 10009, 10010, 100001, 100002, 1000009, 2147483647`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes popup_slideUp__27rJi`
- `@keyframes otp-input_blink__2HqqG`
- `@keyframes spinner_osahanloading__1Rsnl`
- `@keyframes fa-beat`
- `@keyframes fa-bounce`
- `@keyframes fa-fade`
- `@keyframes fa-beat-fade`
- `@keyframes fa-flip`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#007bff` for interactive elements (buttons, links, focus rings)
- Use `#212529` as the primary page background
- Pair **Redonda Black** (body) with **Redonda Bold** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: 0px 6px 6px 0px, 0px 6px 0px 0px, 0px 0px 0px 6px, 0px 0px 6px, 0px 0px 8px 8px
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Redonda Black and Redonda Bold and SFMono-Regular
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| xs | 400px | css |
| xs | 420px | css |
| xs | 450px | css |
| sm | 509px | css |
| sm | 575px | css |
| sm | 576px | css |
| md | 760px | css |
| md | 767px | css |
| md | 768px | css |
| lg | 991px | css |
| lg | 992px | css |
| lg | 1024px | css |
| xl | 1025px | css |
| xl | 1080px | css |
| xl | 1199px | css |
| xl | 1200px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #343a40
Border: 1px solid var(--border)
Radius: 8px 8px 0px 0px
Padding: 16px
Font: Redonda Black
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #007bff, text white
Ghost: bg transparent, border var(--border)
Padding: 8px 16px
Radius: 8px 8px 0px 0px
Hover: opacity 0.9 or lighter shade
Focus: ring with #007bff
```

### Build a Page Layout

```
Background: #212529
Max-width: 991px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #343a40
Label: #939393 (muted, 12px, uppercase)
Value: #ffffff (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #212529
Input border: 1px solid var(--border)
Focus: border-color #007bff
Label: #939393 12px
Spacing: 16px between fields
Radius: 8px 8px 0px 0px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Redonda Black, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
