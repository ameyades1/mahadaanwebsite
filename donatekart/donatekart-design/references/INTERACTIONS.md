# Interaction Reference

> Micro-interactions extracted from live DOM. Recreate these exactly for authentic feel.

## Coverage

| Component Type | Count | States Captured |
|----------------|-------|----------------|
| Button | 3 | default, hover, focus |
| Link | 3 | default, hover, focus |
| Input | 1 | default, hover, focus |

## Transition System

These transition declarations were extracted from interactive elements:

```css
transition: color 0.2s;
transition: all;
```

Apply these to all interactive elements. Never invent new durations or easings.

## Button Interactions

### Button 1 — `Donate`

**States:**

- Default: `../screens/states/button-1-default.png`
- Hover: `../screens/states/button-1-hover.png`
- Focus: `../screens/states/button-1-focus.png`

**On hover:**

```css
/* color: rgb(41, 41, 37) → */ color: rgb(255, 85, 35);
/* border-color: rgb(41, 41, 37) → */ border-color: rgb(255, 85, 35);
/* outline: rgb(41, 41, 37) none 3px → */ outline: rgb(255, 85, 35) none 3px;
/* outline-color: rgb(41, 41, 37) → */ outline-color: rgb(255, 85, 35);
```

**On focus:**

```css
/* outline: rgb(41, 41, 37) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(41, 41, 37) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `color 0.2s`

### Button 2 — `Fundraise`

**States:**

- Default: `../screens/states/button-2-default.png`
- Hover: `../screens/states/button-2-hover.png`
- Focus: `../screens/states/button-2-focus.png`

**On hover:**

```css
/* color: rgb(41, 41, 37) → */ color: rgb(255, 85, 35);
/* border-color: rgb(41, 41, 37) → */ border-color: rgb(255, 85, 35);
/* outline: rgb(41, 41, 37) none 3px → */ outline: rgb(255, 85, 35) none 3px;
/* outline-color: rgb(41, 41, 37) → */ outline-color: rgb(255, 85, 35);
```

**On focus:**

```css
/* outline: rgb(41, 41, 37) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(41, 41, 37) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `color 0.2s`

### Button 3 — `Initiatives`

**States:**

- Default: `../screens/states/button-3-default.png`
- Hover: `../screens/states/button-3-hover.png`
- Focus: `../screens/states/button-3-focus.png`

**On hover:**

```css
/* color: rgb(41, 41, 37) → */ color: rgb(255, 85, 35);
/* border-color: rgb(41, 41, 37) → */ border-color: rgb(255, 85, 35);
/* outline: rgb(41, 41, 37) none 3px → */ outline: rgb(255, 85, 35) none 3px;
/* outline-color: rgb(41, 41, 37) → */ outline-color: rgb(255, 85, 35);
```

**On focus:**

```css
/* outline: rgb(41, 41, 37) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(41, 41, 37) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `color 0.2s`

## Link Interactions

### Link 1 — `a`

**States:**

- Default: `../screens/states/link-1-default.png`
- Hover: `../screens/states/link-1-hover.png`
- Focus: `../screens/states/link-1-focus.png`

**On hover:**

```css
/* text-decoration: none → */ text-decoration: underline;
```

**On focus:**

```css
/* outline: rgb(255, 85, 35) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(255, 85, 35) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `all`

### Link 2 — `a`

**States:**

- Default: `../screens/states/link-2-default.png`
- Hover: `../screens/states/link-2-hover.png`
- Focus: `../screens/states/link-2-focus.png`

**Transition:** `color 0.2s`

_No visible style changes detected for this element._

### Link 3 — `a`

**States:**

- Default: `../screens/states/link-3-default.png`
- Hover: `../screens/states/link-3-hover.png`
- Focus: `../screens/states/link-3-focus.png`

**Transition:** `color 0.2s`

_No visible style changes detected for this element._

## Input Interactions

### Input 1 — `Enter your email`

**States:**

- Default: `../screens/states/input-1-default.png`
- Hover: `../screens/states/input-1-hover.png`
- Focus: `../screens/states/input-1-focus.png`

**On focus:**

```css
/* outline: rgb(0, 0, 0) none 3px → */ outline: rgb(0, 0, 0) none 0px;
```

**Transition:** `all`

## Interaction Rules

- Accent color `#007bff` is used for focus rings, active states, and hover highlights
- Hover effects include **color transitions** — use the extracted values, not approximations
- Focus states use **outline** (not box-shadow) — always match the extracted focus ring
- Transition durations in use: `0.2s`
- Always respect `prefers-reduced-motion` — set all transitions to `0s` when enabled

