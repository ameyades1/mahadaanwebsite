# Animation Reference

> Cinematic motion design extracted from live DOM. Follow these specs exactly to recreate the experience.

## Motion Technology Stack

| Library | Type | Notes |
|---------|------|-------|
| **Web Animations API (17 active)** | animation |  |

## Scroll Journey

The page is **8,440px** tall. Each frame below shows what the user sees at that scroll depth.

> **Use these screenshots to understand WHAT animates, WHEN it animates, and HOW it moves.**

### 0% — Top / Hero
Scroll position: 0px

![Scroll 0%](../screens/scroll/scroll-000.png)

### 17% — Opening Section
Scroll position: 1,282px

![Scroll 17%](../screens/scroll/scroll-017.png)

### 33% — First Feature Section
Scroll position: 2,488px

![Scroll 33%](../screens/scroll/scroll-033.png)

### 50% — Mid-Page
Scroll position: 3,770px

![Scroll 50%](../screens/scroll/scroll-050.png)

### 67% — Lower Content
Scroll position: 5,052px

![Scroll 67%](../screens/scroll/scroll-067.png)

### 83% — Near Footer
Scroll position: 6,258px

![Scroll 83%](../screens/scroll/scroll-083.png)

### 100% — Bottom / Footer
Scroll position: 7,540px

![Scroll 100%](../screens/scroll/scroll-100.png)

## CSS Keyframes (44 extracted)

### `@keyframes fa-spin`

Duration: `var(--fa-animation-duration,2s)` · Easing: `var(--fa-animation-timing,linear)` · Delay: `var(--fa-animation-delay,0s)` · Iteration: `var(--fa-animation-iteration-count,infinite)`

Used by: `.fa-spin`, `.fa-pulse, .fa-spin-pulse`

```css
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
```

> Transform/motion animation

### `@keyframes fa-spin`

Duration: `var(--fa-animation-duration,2s)` · Easing: `var(--fa-animation-timing,linear)` · Delay: `var(--fa-animation-delay,0s)` · Iteration: `var(--fa-animation-iteration-count,infinite)`

Used by: `.fa-spin`, `.fa-pulse, .fa-spin-pulse`

```css
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
```

> Transform/motion animation

### `@keyframes otp-input_blink__2HqqG`

Duration: `1s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.otp-input_inputBox__3F368.otp-input_active__2l8aq`

```css
@keyframes otp-input_blink__2HqqG {
  0%, 50% {
    color: rgb(0, 0, 0);
  }
  75%, 100% {
    color: transparent;
  }
}
```

> Text color shift

### `@keyframes otp-input_blink__2HqqG`

Duration: `1s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.otp-input_inputBox__3F368.otp-input_active__2l8aq`

```css
@keyframes otp-input_blink__2HqqG {
  0%, 50% {
    color: rgb(0, 0, 0);
  }
  75%, 100% {
    color: transparent;
  }
}
```

> Text color shift

### `@keyframes spinner_osahanloading__1Rsnl`

Duration: `1.5s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.spinner_spinner__2-bYp .spinner_osahanloading__1Rsnl`

```css
@keyframes spinner_osahanloading__1Rsnl {
  0% {
    transform: rotate(0deg);
  }
  50% {
    background-image: none;
    background-position-x: 0px;
    background-position-y: 0px;
    background-repeat: repeat;
    background-attachment: scroll;
    background-color: rgb(161, 254, 254);
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
```

> Transform/motion animation · Background color/gradient shift

### `@keyframes spinner_osahanloading__1Rsnl`

Duration: `1.5s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.spinner_spinner__2-bYp .spinner_osahanloading__1Rsnl`

```css
@keyframes spinner_osahanloading__1Rsnl {
  0% {
    transform: rotate(0deg);
  }
  50% {
    background-image: none;
    background-position-x: 0px;
    background-position-y: 0px;
    background-repeat: repeat;
    background-attachment: scroll;
    background-color: rgb(161, 254, 254);
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
```

> Transform/motion animation · Background color/gradient shift

### `@keyframes fa-beat`

Easing: `var(--fa-animation-timing,ease-in-out)` · Iteration: `var(--fa-animation-iteration-count,infinite)`

Used by: `.fa-beat`

```css
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale,1.25));
  }
}
```

> Transform/motion animation

### `@keyframes fa-beat`

Easing: `var(--fa-animation-timing,ease-in-out)` · Iteration: `var(--fa-animation-iteration-count,infinite)`

Used by: `.fa-beat`

```css
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale,1.25));
  }
}
```

> Transform/motion animation

### `@keyframes fa-bounce`

Easing: `var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))` · Iteration: `var(--fa-animation-iteration-count,infinite)`

Used by: `.fa-bounce`

```css
@keyframes fa-bounce {
  0% {
    transform: scale(1) translateY(0px);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);
  }
  57% {
    transform: scale(1) translateY(var(--fa-bounce-rebound,-.125em));
  }
  64% {
    transform: scale(1) translateY(0px);
  }
  100% {
    transform: scale(1) translateY(0px);
  }
}
```

> Transform/motion animation

### `@keyframes fa-bounce`

Easing: `var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))` · Iteration: `var(--fa-animation-iteration-count,infinite)`

Used by: `.fa-bounce`

```css
@keyframes fa-bounce {
  0% {
    transform: scale(1) translateY(0px);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);
  }
  57% {
    transform: scale(1) translateY(var(--fa-bounce-rebound,-.125em));
  }
  64% {
    transform: scale(1) translateY(0px);
  }
  100% {
    transform: scale(1) translateY(0px);
  }
}
```

> Transform/motion animation

### `@keyframes fa-fade`

Easing: `var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))` · Iteration: `var(--fa-animation-iteration-count,infinite)`

Used by: `.fa-fade`

```css
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity,.4);
  }
}
```

> Opacity fade

### `@keyframes fa-fade`

Easing: `var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))` · Iteration: `var(--fa-animation-iteration-count,infinite)`

Used by: `.fa-fade`

```css
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity,.4);
  }
}
```

> Opacity fade

### `@keyframes fa-beat-fade`

Easing: `var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))` · Iteration: `var(--fa-animation-iteration-count,infinite)`

Used by: `.fa-beat-fade`

```css
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity,.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale,1.125));
  }
}
```

> Fade + motion enter animation

### `@keyframes fa-beat-fade`

Easing: `var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))` · Iteration: `var(--fa-animation-iteration-count,infinite)`

Used by: `.fa-beat-fade`

```css
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity,.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale,1.125));
  }
}
```

> Fade + motion enter animation

### `@keyframes fa-flip`

Easing: `var(--fa-animation-timing,ease-in-out)` · Iteration: `var(--fa-animation-iteration-count,infinite)`

Used by: `.fa-flip`

```css
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));
  }
}
```

> Transform/motion animation

### `@keyframes fa-flip`

Easing: `var(--fa-animation-timing,ease-in-out)` · Iteration: `var(--fa-animation-iteration-count,infinite)`

Used by: `.fa-flip`

```css
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));
  }
}
```

> Transform/motion animation

### `@keyframes fa-shake`

Easing: `var(--fa-animation-timing,linear)` · Iteration: `var(--fa-animation-iteration-count,infinite)`

Used by: `.fa-shake`

```css
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
```

> Transform/motion animation

### `@keyframes fa-shake`

Easing: `var(--fa-animation-timing,linear)` · Iteration: `var(--fa-animation-iteration-count,infinite)`

Used by: `.fa-shake`

```css
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
```

> Transform/motion animation

### `@keyframes shimmer_sweep__3j7mC`

Duration: `1.2s` · Easing: `ease-in-out` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.shimmer_shimmerRow__12ZyN .shimmer_shimmerImg__p0dD2::before, .shimmer_shimmerR`

```css
@keyframes shimmer_sweep__3j7mC {
  100% {
    transform: translateX(100%);
  }
}
```

> Transform/motion animation

### `@keyframes shimmer_sweep__3j7mC`

Duration: `1.2s` · Easing: `ease-in-out` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.shimmer_shimmerRow__12ZyN .shimmer_shimmerImg__p0dD2::before, .shimmer_shimmerR`

```css
@keyframes shimmer_sweep__3j7mC {
  100% {
    transform: translateX(100%);
  }
}
```

> Transform/motion animation

### `@keyframes style_glow__2EWP7`

Duration: `2s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.style_chatBtn__1RRVW.style_animated__2fRVc`

```css
@keyframes style_glow__2EWP7 {
  0% {
    box-shadow: 0 0 5px var(--primary);
  }
  50% {
    box-shadow: 0 0 20px var(--primary),0 0 30px #00d4ff,0 0 40px var(--primary);
  }
  100% {
    box-shadow: 0 0 5px var(--primary);
  }
}
```

> Shadow pulse/glow effect

### `@keyframes style_glow__2EWP7`

Duration: `2s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.style_chatBtn__1RRVW.style_animated__2fRVc`

```css
@keyframes style_glow__2EWP7 {
  0% {
    box-shadow: 0 0 5px var(--primary);
  }
  50% {
    box-shadow: 0 0 20px var(--primary),0 0 30px #00d4ff,0 0 40px var(--primary);
  }
  100% {
    box-shadow: 0 0 5px var(--primary);
  }
}
```

> Shadow pulse/glow effect

### `@keyframes mobile-menu_hideText__1v-9F`

Duration: `0.35s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.mobile-menu_startBtn__1FW5U.mobile-menu_small__3Cp2Y .mobile-menu_text__C2lHE`

```css
@keyframes mobile-menu_hideText__1v-9F {
  0% {
    opacity: 1;
    max-width: 200px;
  }
  100% {
    opacity: 0;
    max-width: 0px;
  }
}
```

> Opacity fade · Dimension expand/collapse

### `@keyframes mobile-menu_hideText__1v-9F`

Duration: `0.35s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.mobile-menu_startBtn__1FW5U.mobile-menu_small__3Cp2Y .mobile-menu_text__C2lHE`

```css
@keyframes mobile-menu_hideText__1v-9F {
  0% {
    opacity: 1;
    max-width: 200px;
  }
  100% {
    opacity: 0;
    max-width: 0px;
  }
}
```

> Opacity fade · Dimension expand/collapse

### `@keyframes mobile-menu_hideGap__19htF`

Duration: `0.45s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.mobile-menu_startBtn__1FW5U.mobile-menu_small__3Cp2Y span`

```css
@keyframes mobile-menu_hideGap__19htF {
  0%, 78% {
    row-gap: 8px;
    column-gap: 8px;
  }
  100% {
    row-gap: 0px;
    column-gap: 0px;
  }
}
```

### `@keyframes mobile-menu_hideGap__19htF`

Duration: `0.45s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.mobile-menu_startBtn__1FW5U.mobile-menu_small__3Cp2Y span`

```css
@keyframes mobile-menu_hideGap__19htF {
  0%, 78% {
    row-gap: 8px;
    column-gap: 8px;
  }
  100% {
    row-gap: 0px;
    column-gap: 0px;
  }
}
```

### `@keyframes mobile-menu_showText__2ElGW`

Duration: `0.35s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.mobile-menu_startBtn__1FW5U.mobile-menu_large__37Amb .mobile-menu_text__C2lHE`

```css
@keyframes mobile-menu_showText__2ElGW {
  0% {
    opacity: 0;
    max-width: 0px;
  }
  100% {
    opacity: 1;
    max-width: 200px;
  }
}
```

> Opacity fade · Dimension expand/collapse

### `@keyframes mobile-menu_showText__2ElGW`

Duration: `0.35s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.mobile-menu_startBtn__1FW5U.mobile-menu_large__37Amb .mobile-menu_text__C2lHE`

```css
@keyframes mobile-menu_showText__2ElGW {
  0% {
    opacity: 0;
    max-width: 0px;
  }
  100% {
    opacity: 1;
    max-width: 200px;
  }
}
```

> Opacity fade · Dimension expand/collapse

### `@keyframes mobile-menu_showGap__3jKGf`

Duration: `0.35s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.mobile-menu_startBtn__1FW5U.mobile-menu_large__37Amb span`

```css
@keyframes mobile-menu_showGap__3jKGf {
  0% {
    row-gap: 0px;
    column-gap: 0px;
  }
  100% {
    row-gap: 8px;
    column-gap: 8px;
  }
}
```

### `@keyframes mobile-menu_showGap__3jKGf`

Duration: `0.35s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.mobile-menu_startBtn__1FW5U.mobile-menu_large__37Amb span`

```css
@keyframes mobile-menu_showGap__3jKGf {
  0% {
    row-gap: 0px;
    column-gap: 0px;
  }
  100% {
    row-gap: 8px;
    column-gap: 8px;
  }
}
```

### `@keyframes image_shimmer__phWhg`

Duration: `1.2s` · Easing: `ease-in-out` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.image_shimmer__phWhg`

```css
@keyframes image_shimmer__phWhg {
  0% {
    background-position-x: 100%;
    background-position-y: 0px;
  }
  100% {
    background-position-x: -100%;
    background-position-y: 0px;
  }
}
```

> Background color/gradient shift · Background position (shimmer/scroll)

### `@keyframes image_shimmer__phWhg`

Duration: `1.2s` · Easing: `ease-in-out` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.image_shimmer__phWhg`

```css
@keyframes image_shimmer__phWhg {
  0% {
    background-position-x: 100%;
    background-position-y: 0px;
  }
  100% {
    background-position-x: -100%;
    background-position-y: 0px;
  }
}
```

> Background color/gradient shift · Background position (shimmer/scroll)

### `@keyframes campaignCard_sweep__3rxtH`

Duration: `1.2s` · Easing: `ease-in-out` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.campaignCard_skeleton__3BARM .campaignCard_badgeTopRight__2Ovvm::before, .campa`

```css
@keyframes campaignCard_sweep__3rxtH {
  100% {
    transform: translateX(100%);
  }
}
```

> Transform/motion animation

### `@keyframes campaignCard_sweep__3rxtH`

Duration: `1.2s` · Easing: `ease-in-out` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.campaignCard_skeleton__3BARM .campaignCard_badgeTopRight__2Ovvm::before, .campa`

```css
@keyframes campaignCard_sweep__3rxtH {
  100% {
    transform: translateX(100%);
  }
}
```

> Transform/motion animation

### `@keyframes style_progress__mNf3l`

Duration: `2.1s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `both`

Used by: `.style_animatedProgressBar__3iyPy`

```css
@keyframes style_progress__mNf3l {
  0% {
    width: 0px;
  }
  100% {
    width: 100%;
  }
}
```

> Dimension expand/collapse

### `@keyframes style_progress__mNf3l`

Duration: `2.1s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `both`

Used by: `.style_animatedProgressBar__3iyPy`

```css
@keyframes style_progress__mNf3l {
  0% {
    width: 0px;
  }
  100% {
    width: 100%;
  }
}
```

> Dimension expand/collapse

### `@keyframes style_progressImg__3XKlc`

Duration: `2s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.style_logoMini__y6qJl`

```css
@keyframes style_progressImg__3XKlc {
  0% {
    left: 0px;
  }
  100% {
    left: 100%;
  }
}
```

### `@keyframes style_progressImg__3XKlc`

Duration: `2s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.style_logoMini__y6qJl`

```css
@keyframes style_progressImg__3XKlc {
  0% {
    left: 0px;
  }
  100% {
    left: 100%;
  }
}
```

### `@keyframes trust_dk-wave__2yzvd`

Duration: `1.6s` · Easing: `ease-out` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.trust_ring1__8x7Cr, .trust_ring2__mQQdg`

```css
@keyframes trust_dk-wave__2yzvd {
  0% {
    opacity: 0;
    stroke-dasharray: 0, 60;
  }
  20% {
    opacity: 1;
  }
  60% {
    stroke-dasharray: 60, 0;
    opacity: 1;
  }
  100% {
    opacity: 0;
    stroke-dasharray: 60, 0;
  }
}
```

> Opacity fade · SVG stroke animation

### `@keyframes trust_dk-wave__2yzvd`

Duration: `1.6s` · Easing: `ease-out` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.trust_ring1__8x7Cr, .trust_ring2__mQQdg`

```css
@keyframes trust_dk-wave__2yzvd {
  0% {
    opacity: 0;
    stroke-dasharray: 0, 60;
  }
  20% {
    opacity: 1;
  }
  60% {
    stroke-dasharray: 60, 0;
    opacity: 1;
  }
  100% {
    opacity: 0;
    stroke-dasharray: 60, 0;
  }
}
```

> Opacity fade · SVG stroke animation

### `@keyframes style_marquee__Gh7DU`

Duration: `30s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.style_track__2opPp`

```css
@keyframes style_marquee__Gh7DU {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-50%);
  }
}
```

> Transform/motion animation

### `@keyframes style_marquee__Gh7DU`

Duration: `30s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.style_track__2opPp`

```css
@keyframes style_marquee__Gh7DU {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-50%);
  }
}
```

> Transform/motion animation

### `@keyframes popup_slideUp__27rJi`

```css
@keyframes popup_slideUp__27rJi {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0px);
  }
}
```

> Transform/motion animation

### `@keyframes popup_slideUp__27rJi`

```css
@keyframes popup_slideUp__27rJi {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0px);
  }
}
```

> Transform/motion animation

## Global Transition Declarations

These `transition` values were extracted from CSS rules across the site:

```css
transition: 0.2s;
transition: inherit;
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
transition: 0.3s;
transition: width 0.3s;
transition: transform 0.2s, -webkit-transform 0.2s;
transition: color 0.2s;
transition: opacity 0.2s;
transition: background 0.2s;
transition: bottom 0.5s ease-in-out;
transition: opacity 0.25s ease-in-out;
```

## How to Recreate This Motion Design

### Step 1 — Install Dependencies

```bash
```

### Step 2 — Scroll-Reveal Pattern

Elements that animate into view follow this pattern:

```css
/* Initial hidden state */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Step 3 — Key Motion Principles

- **Duration scale:** `0.2s` · `0.15s` · `0.3s` — use these values, never invent new durations
- **Always add** `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`

### Step 4 — Scroll Journey Reference

Match what happens at each scroll position:

- **0%** (`0px`) → `screens/scroll/scroll-000.png`
- **17%** (`1282px`) → `screens/scroll/scroll-017.png`
- **33%** (`2488px`) → `screens/scroll/scroll-033.png`
- **50%** (`3770px`) → `screens/scroll/scroll-050.png`
- **67%** (`5052px`) → `screens/scroll/scroll-067.png`
- **83%** (`6258px`) → `screens/scroll/scroll-083.png`
- **100%** (`7540px`) → `screens/scroll/scroll-100.png`

