---
name: Mack Handyman Services
colors:
  surface: '#fcf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fcf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ec'
  surface-container: '#f1eee7'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e5e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#44483f'
  inverse-surface: '#31312c'
  inverse-on-surface: '#f3f0ea'
  outline: '#75786e'
  outline-variant: '#c5c8bc'
  surface-tint: '#526441'
  primary: '#334425'
  on-primary: '#ffffff'
  primary-container: '#4a5c3a'
  on-primary-container: '#bed3a9'
  inverse-primary: '#b8cda3'
  secondary: '#8a5100'
  on-secondary: '#ffffff'
  secondary-container: '#feb15d'
  on-secondary-container: '#744300'
  tertiary: '#41403b'
  on-tertiary: '#ffffff'
  tertiary-container: '#585752'
  on-tertiary-container: '#d0cdc6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4eabd'
  primary-fixed-dim: '#b8cda3'
  on-primary-fixed: '#101f05'
  on-primary-fixed-variant: '#3a4c2b'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#ffb86e'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#693c00'
  tertiary-fixed: '#e6e2db'
  tertiary-fixed-dim: '#c9c6c0'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#484742'
  background: '#fcf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e5e2db'
typography:
  h1:
    fontFamily: Bebas Neue
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: 0.01em
  h2:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: 0.01em
  h3:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Literata
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
  body-md:
    fontFamily: Literata
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.8'
  body-bold:
    fontFamily: Literata
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.8'
  ui-label:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  button:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.0'
  h1-mobile:
    fontFamily: Bebas Neue
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.01em
spacing:
  max-width: 1200px
  edge-margin: 2rem
  gutter: 1.5rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 3rem
---

## Brand & Style

This design system is built on the "workshop wall" narrative: a space where every tool has a place, every mark tells a story of labor, and competence is quiet but absolute. The aesthetic rejects digital abstractions—no blurs, no shadows, and no generic gradients. Instead, it embraces a **Tactile Brutalism** that is personal, warm, and structured.

The UI should evoke the feeling of a well-organized ledger or a project blueprint pinned to a corkboard. It prioritizes clarity, physical boundaries (borders), and a grounded color palette that feels like raw materials: paper, ink, olive drab, and weathered wood. This is a system for a professional who works with their hands; the interface should feel just as sturdy.

## Colors

The palette is derived from the natural environment of a workshop. 

- **Background (--paper):** A warm, off-white base that reduces eye strain and feels more organic than pure white.
- **Surface (--card):** A slightly deeper tone used for grouping content, creating a subtle "stacked paper" effect without using shadows.
- **Text (--char):** A charcoal black that provides high legibility against the paper background.
- **Accents:** **Olive** is used for primary actions, success states, and indicating reliability. **Amber** is used for highlights, secondary actions, and calling attention to specific details or "active" work.

## Typography

The typography strategy creates a clear hierarchy between "The Statement" and "The Detail."

- **Headlines (Bebas Neue):** Bold, condensed, and all-caps. These function like labels on a tool chest—immediate and unmissable.
- **Body Copy (Literata/Lora):** A literary serif chosen for its warmth and readability. It conveys a sense of history and careful thought.
- **UI & Labels (Space Grotesk):** A technical, geometric font used for instructions, buttons, and form labels. Its precision balances the traditional feel of the serif body text.

## Layout & Spacing

The layout follows a **Fixed Grid** approach with a maximum width of 1200px to maintain line-length readability for the serif body text. 

- **Borders:** Every logical grouping is defined by a 1.5px solid border using the `--char` or a slightly lighter version of the `--muted` color.
- **Rhythm:** Use a consistent 8px-based stepping system. 
- **Structure:** Content should feel "boxed in" but not cramped. Use generous internal padding within bordered containers (typically 2rem) to allow the typography to breathe.
- **Mobile:** On smaller screens, the 1200px container becomes fluid with a minimum margin of 1rem on either side. Multi-column grids should collapse to a single column to maintain the "ledger" verticality.

## Elevation & Depth

This design system uses **zero shadows**. Depth is communicated exclusively through:

1.  **Layering:** Placing `--surface` colored containers on top of the `--paper` background.
2.  **Stroke:** Using 1.5px borders to define the perimeter of interactive and static elements.
3.  **Tonal Shifts:** Highlighting an active area by changing its background color to `--olive` or `--amber`.
4.  **Negative Space:** Using margins and gaps to imply the separation of "tools" on the workshop wall.

## Shapes

The shape language is strictly functional. 

- **Containers & Cards:** Must have a **0px radius** (sharp corners). This reinforces the "cut wood" or "blueprint" feel.
- **Interactive Elements:** Buttons, input fields, and tags utilize a **4px radius** (Soft). This slight rounding provides a subtle "touch-friendly" affordance, differentiating them from static layout boxes.
- **Icons:** Use thick-stroke, geometric icons that match the 1.5px weight of the layout borders. Avoid rounded or illustrative icon sets.

## Components

### Buttons
- **Primary:** Solid `--olive` background, `--paper` text, 1.5px border in `--char`, 4px corner radius. Uppercase Space Grotesk.
- **Secondary:** Solid `--paper` background, `--char` text, 1.5px border in `--char`, 4px corner radius.
- **Hover State:** Shift background color to `--amber` for primary, or fill with `--surface` for secondary. No movement or lifting.

### Cards
- **Construction:** `--surface` background, 1.5px solid `--char` border, 0px corner radius.
- **Header:** Often includes a thin 1.5px horizontal line separating the title from the body.

### Input Fields
- **Style:** `--paper` background, 1.5px `--char` border, 4px radius.
- **Focus:** Border weight increases to 2px or changes color to `--amber`. Use Space Grotesk for input text.

### Chips & Tags
- Used for service categories (e.g., "Plumbing", "Carpentry"). 
- Small, 4px radius, 1px border, Space Grotesk text.

### Lists
- Use custom bullets: a small 4px solid square (olive) or a "plus" symbol. Avoid standard round bullets.
- Each list item should be separated by a 1px dashed or solid divider to maintain the "ledger" appearance.