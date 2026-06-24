# Design System Strategy: The Celestial Interface

## 1. Overview & Creative North Star
**Creative North Star: "The Obsidian Observatory"**

This design system moves beyond typical "dark mode" templates to create a high-end, cinematic experience that feels like peering through a telescope lens. The goal is **Immersive Depth**. We achieve this by rejecting the flat, boxed-in layouts of traditional SaaS and instead embracing a "window-to-the-void" aesthetic. 

The experience is driven by **Intentional Asymmetry** and **Tonal Layering**. Elements should feel as though they are floating in a zero-gravity environment, anchored not by heavy borders, but by gravitational pulls of light and shadow. We use high-contrast typography scales and overlapping glass surfaces to create a sense of vastness and sophisticated high-tech instrumentation.

---

## 2. Color & Atmospheric Surface
The palette is rooted in the deep void, using `surface` and `midnight` tones to provide a canvas where nebula-inspired accents can truly shine.

*   **The "No-Line" Rule:** Under no circumstances should 1px solid, high-contrast borders be used for sectioning. Use `surface-container-low` (for secondary content) against the `surface` background to define boundaries. Differentiation is achieved through shifts in depth, not lines.
*   **Surface Hierarchy & Nesting:** Treat the UI as layers of atmospheric density. 
    *   **Level 0 (The Void):** `surface` (#0c0e12) or `surface-container-lowest` (#000000).
    *   **Level 1 (The Instrument):** `surface-container` (#171a1e).
    *   **Level 2 (The Data):** `surface-bright` (#282c32) for floating panels.
*   **The "Glass & Gradient" Rule:** All floating panels must utilize **Glassmorphism**. Apply `surface-variant` with a `backdrop-filter: blur(20px)` and an opacity of 40-60%.
*   **Signature Textures:** Use a linear gradient for primary actions: `primary` (#b6a0ff) to `primary-dim` (#7e51ff) at a 135-degree angle. This mimics the shifting light of a distant pulsar.

---

## 3. Typography: The Futuristic Editorial
We pair the geometric precision of **Space Grotesk** (Display/Headlines) with the humanistic clarity of **Manrope** (Body).

*   **Display (Space Grotesk):** Use `display-lg` (3.5rem) with `-0.04em` letter spacing for hero headers. This creates a dense, authoritative "magazine" look.
*   **Headlines (Space Grotesk):** All caps should be used sparingly for `label-md` to mimic technical readouts.
*   **Body (Manrope):** Use `body-lg` (1rem) for descriptions to ensure legibility against dark backgrounds. Set line height to `1.6` to allow the text to "breathe" in the vastness.
*   **The Identity Shift:** The extreme scale difference between `display-lg` and `label-sm` creates a rhythmic, editorial hierarchy that feels intentional and premium.

---

## 4. Elevation & Depth
In space, there are no shadows—only the absence of light and the presence of glow.

*   **The Layering Principle:** Instead of shadows, use **Tonal Stacking**. An inner card should be `surface-container-high` sitting atop a `surface-container` background.
*   **Ambient Glows:** For floating "hero" elements, replace traditional drop shadows with an **Ambient Glow**. Use the `secondary` color (#00e3fd) at 5% opacity with a `100px` blur. It should feel like the component is backlit by a nearby star.
*   **The Ghost Border Fallback:** If a tactile edge is required, use a `1px` stroke of `outline-variant` at 15% opacity. This creates a "glint" on the edge of the glass rather than a physical barrier.
*   **Active States:** When an element is focused, use a subtle `0 0 15px` outer glow using the `primary` token to simulate a powered-on interface.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-dim`). Border-radius: `md` (0.375rem). No shadow, but a subtle `0.5px` top-inner highlight in `on-primary-fixed-variant`.
*   **Secondary (Glass):** `surface-variant` at 20% opacity with `backdrop-blur`. `Ghost Border` at 20% opacity. 
*   **Tertiary:** Text only in `secondary` (#00e3fd). All caps, `label-md` scale.

### Input Fields
*   **Styling:** No background fill. Only a bottom border of `outline-variant` at 30% opacity. Upon focus, the border transitions to `secondary` and expands to `2px`.
*   **Error State:** Use `error` (#ff6e84) with a soft `error_container` glow behind the text.

### Cards (The "Nebula" Card)
*   **Rule:** Forbid divider lines.
*   **Layout:** Use `spacing-6` (2rem) for internal padding. Separate the header from the body using a `surface-container-highest` background shift for the header area only.
*   **Interaction:** On hover, the `backdrop-blur` should increase from `20px` to `40px` to simulate the panel moving closer to the viewer.

### Astronomy-Specific Components
*   **Coordinate Chips:** Small, `label-sm` technical readouts using `secondary` text on a `surface-container-high` rounded pill. Used for star coordinates (RA/Dec).
*   **Orbital Sliders:** A custom slider where the track is `outline-variant` (10% opacity) and the thumb is a glowing `tertiary` (#ffe792) dot, simulating a planet in orbit.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts. Place a large `display-lg` title on the left and a small `label-md` technical description on the far right to create tension.
*   **Do** allow background imagery (nebulae, starfields) to bleed through glass components.
*   **Do** use `tertiary` (#ffe792) sparingly as a "Gold Standard" highlight for rare celestial events or pro-level features.

### Don't:
*   **Don't** use pure white (#FFFFFF) for body text. Use `on-surface` (#f8f9fe) to reduce eye strain and maintain the cinematic mood.
*   **Don't** use standard `box-shadow` styles. If it looks like a generic web app, increase the blur and decrease the opacity.
*   **Don't** use 90-degree corners. Always use at least the `DEFAULT` (0.25rem) radius to soften the high-tech interface.