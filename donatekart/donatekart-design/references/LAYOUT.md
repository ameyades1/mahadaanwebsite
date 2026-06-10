# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 4px

**Scale:** `2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 30, 32` px

| Spacing | Semantic Use |
|---------|-------------|
| 4px | Tight — within a component |
| 8px | Medium — between sibling items |
| 16px | Wide — between sections |
| 32px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `nav#header.navbar_navbar__2yDbc.navbar_fixedTop__1Kmpm` | row | — | center | — | 1 |
| `section#copyrights.style_copyrights__3BjqZ` | row | space-between | center | — | 2 |
| `div.map_grid__3buZ3` | row | — | center | 10% | 2 |
| `div.how-it-works_card__2kr8I.how-it-works_donors__CtmbJ` | column | — | — | — | 2 |
| `div.how-it-works_card__2kr8I.how-it-works_ngo__YXoWe` | column | — | — | — | 2 |
| `div.why-choose-us_card__30rtb` | row | — | start | 12px | 2 |
| `div.why-choose-us_card__30rtb` | row | — | start | 12px | 2 |

## Grid Layouts

| Element | Template Columns | Gap | Children |
|---------|-----------------|-----|----------|
| `div.container.campaigns_cardContainer__V444Z` | `364px 364px 364px` | 24px | 9 |
| `div.how-it-works_grid__1auXf` | `535.797px 535.812px` | 6% | 2 |
| `div.why-choose-us_grid__24x9p` | `364px 364px 364px` | 28px 24px | 6 |

## Structural Containers

### `<main>` 

```
display:          block
children:         12
```

### `<section>` (`section.navbar_navbarWrapper__3sbO0`)

```
display:          block
children:         1
```

### `<nav>` (`nav#header.navbar_navbar__2yDbc.navbar_fixedTop__1Kmpm`)

```
display:          flex
flex-direction:   row
justify-content:  —
align-items:      center
children:         1
```

### `<footer>` (`footer.container`)

```
display:          block
padding:          40px 20px 0px
max-width:        1180px
children:         4
```

### `<section>` (`section.showcase_showCaseSection__1zr_P`)

```
display:          block
padding:          40px 0px
children:         1
```

### `<section>` 

```
display:          block
children:         1
```

### `<section>` (`section.donate-monthly_monthlySection__3zNM3`)

```
display:          block
padding:          40px 0px
children:         2
```

### `<section>` (`section.medical-campaign_medicalCampaigns__37NyQ`)

```
display:          block
padding:          40px 0px
children:         2
```

### `<section>` (`section.how-it-works_section__1ipC-`)

```
display:          block
padding:          40px 0px
children:         1
```

### `<section>` (`section.testimonials_section__Ycw9k`)

```
display:          block
padding:          40px 0px 8px
children:         2
```

### `<section>` (`section.why-choose-us_section__2O-gz`)

```
display:          block
padding:          40px 0px
children:         1
```

### `<section>` (`section.recognitions_section__2wG8A`)

```
display:          block
padding:          32px 0px
children:         1
```

## Layout Rules

- **Container max-width:** `1180px` — always center with `margin: auto`
- Primary layout system: **Flexbox**
- Secondary layout system: **CSS Grid** (used for card grids and multi-column layouts)
- Every spacing value must be a multiple of **4px**
- Never use arbitrary margin/padding values outside the spacing scale

