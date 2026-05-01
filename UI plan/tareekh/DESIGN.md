---
name: Tareekh
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#cdc5b9'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#979085'
  outline-variant: '#4b463d'
  surface-tint: '#d4c5a5'
  primary: '#e5d5b4'
  on-primary: '#392f19'
  primary-container: '#c8b99a'
  on-primary-container: '#544931'
  inverse-primary: '#695d43'
  secondary: '#c9c6c1'
  on-secondary: '#31302d'
  secondary-container: '#474743'
  on-secondary-container: '#b7b5b0'
  tertiary: '#e0d5c3'
  on-tertiary: '#363024'
  tertiary-container: '#c4b9a8'
  on-tertiary-container: '#51493c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f1e1c0'
  primary-fixed-dim: '#d4c5a5'
  on-primary-fixed: '#221b06'
  on-primary-fixed-variant: '#50462e'
  secondary-fixed: '#e5e2dd'
  secondary-fixed-dim: '#c9c6c1'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#ede1cf'
  tertiary-fixed-dim: '#d0c5b4'
  on-tertiary-fixed: '#201b10'
  on-tertiary-fixed-variant: '#4d4639'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: notoSerif
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: notoSerif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: notoSerif
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: newsreader
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: newsreader
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: newsreader
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  margin-safe: 64px
  gutter: 24px
  container-max: 1100px
---

## Brand & Style

This design system is forged at the intersection of historical reverence and modern cinematic editorial. It targets a scholarly audience seeking a quiet, meditative space to explore Islamic heritage. The emotional response is one of "Awe-filled Silence"—the feeling of entering an ancient library at midnight.

The style is a hybrid of **Minimalism** and **Tactile/Skeuomorphic** elements. It utilizes a near-monochromatic palette to maintain a serious, authoritative tone while employing subtle texture overlays (film grain, worn paper, and dust) to evoke the physical sensation of touching a centuries-old manuscript. Every layout decision prioritizes negative space to allow the "parchment gold" typography to breathe, creating a high-contrast, prestigious atmosphere.

## Colors

The color strategy is strictly hierarchical and limited to ensure a "manuscript-under-candlelight" effect. 

- **Primary Background (#0a0a0a):** An absolute near-black that provides the infinite depth required for a cinematic feel.
- **Aged Parchment Gold (#c8b99a):** The sole vehicle for information, used for all primary text and critical iconography. It is low-chroma to avoid neon-like vibrance, maintaining a dusty, metallic character.
- **Secondary Surface (#1a1a17):** Used for subtle container differentiation, providing just enough contrast against the background to define structural boundaries.
- **Muted Bronze (#4d4639):** Reserved for ornamental details, dividers, and secondary metadata to ensure they do not compete with the primary narrative.

## Typography

The typography of this design system functions as the primary visual "texture." 

- **Headlines (Noto Serif):** Chosen for its elegant, timeless proportions. Display sizes should utilize wide tracking and occasionally be paired with Arabic Calligraphy accents to anchor the heritage theme.
- **Body (Newsreader):** This literary serif is used for long-form content. Its slightly irregular, traditional letterforms mimic the ink-on-paper experience, reducing digital eye strain and reinforcing the scholarly narrative.
- **Labeling:** All functional labels use Newsreader in all-caps with generous letter-spacing to distinguish UI utility from literary content.

## Layout & Spacing

This design system employs a **Fixed Grid** model reminiscent of a premium hardcover book. Content is centered within a maximum-width container to ensure readability and focus.

The layout philosophy is "Centric and Symmetrical." Important artifacts or text blocks are often flanked by wide margins (`margin-safe`). Vertical rhythm is dictated by a strict 8px baseline grid, though large "hero" sections are encouraged to use dramatic vertical padding (128px+) to create the feeling of a cinematic title sequence. Ornamental dividers should be used to separate thematic sections rather than relying solely on whitespace.

## Elevation & Depth

This design system rejects standard drop shadows in favor of **Tonal Layering** and **Subtle Outlines**. 

Depth is achieved by placing elements on surfaces that are only 2-4% lighter than the absolute black background. To define edges, use a "ghost border"—a 1px solid stroke of the Muted Bronze (#4d4639) at 30% opacity. 

A critical layer in this system is the **Texture Overlay**. A global noise or "scratched film" texture should be applied at a very low opacity (3-5%) over the entire UI to kill the perfection of digital pixels. For high-priority cards, use a subtle radial gradient flare behind the parchment gold text to simulate a faint lantern light.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Curves are perceived as too modern or friendly for this specific scholarly aesthetic. Every container, button, and image frame must have 90-degree corners to reflect the precision of architectural geometry and the cut edges of vellum manuscripts. The only exception to this rule is the "Crescent Moon" motif, which may appear as a circular icon or mask for specific heritage-based call-to-actions.

## Components

- **Buttons:** Non-filled. Use a 1px border of #c8b99a with the text in the same color. On hover, the background should shift to #c8b99a and text to #0a0a0a to create a "flash of light" effect.
- **Ornamental Dividers:** Custom SVG components featuring geometric Islamic patterns or a single horizontal line that tapers toward the edges, centered with a small crescent moon or diamond motif.
- **Cards:** No shadows. Use the secondary background color (#1a1a17) with a thin top-border highlight in Parchment Gold to give a "stacked paper" appearance.
- **Inputs:** Minimalist bottom-border only. Labels float above the line in uppercase Newsreader.
- **Calligraphy Accents:** Use as non-interactive watermarks in the background or as large, low-opacity "initial caps" at the start of major historical chapters.
- **Texture Blocks:** Containers that hold significant quotes should feature a "worn edges" mask or a subtle parchment texture image as their specific background.