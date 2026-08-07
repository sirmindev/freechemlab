---
version: alpha
name: FreeChemLab-design-system
description: "A light, warm scientific-instrument system for a single-purpose chemistry calculator. Built on Linear's structural logic (four-step surface ladder, hairline borders, no drop shadows, disciplined radius scale) inverted for a warm off-white canvas (#FAF9F5). Deep forest green (#02613E) is the single chromatic accent, used only on active controls, focus states, and the calculated-result tint. Public Sans carries all text; DM Mono carries every number, chosen for its unambiguous 0/O and 1/l/I forms since misreading a digit is the primary failure mode of a calculator. Pill-shaped controls are used deliberately for the direction toggle and unit selectors; everything else holds Linear's 8px/12px corners."

colors:
  primary: "#02613E"
  primary-hover: "#0B7A4F"
  primary-pressed: "#04442C"
  primary-soft: "#DCEEE4"
  on-primary: "#ffffff"

  canvas: "#FAF9F5"
  surface-1: "#ffffff"
  surface-2: "#F5F3EE"
  surface-3: "#EFEDE7"
  surface-4: "#E8E6DF"

  hairline: "#E5E2DA"
  hairline-strong: "#D3CFC3"
  hairline-tertiary: "#C4C0B2"

  ink: "#14140F"
  ink-muted: "#4A4842"
  ink-subtle: "#7A776D"
  ink-tertiary: "#A8A498"

  error: "#C23B3B"
  error-soft: "#FBEAEA"

typography:
  page-title:
    fontFamily: Public Sans
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  card-title:
    fontFamily: Public Sans
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  label:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.30
    letterSpacing: 0.4px
    textTransform: uppercase
  body:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  body-sm:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  button:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  breadcrumb:
    fontFamily: Public Sans
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  input-value:
    fontFamily: DM Mono
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  result-value:
    fontFamily: DM Mono
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  particle-count:
    fontFamily: DM Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  formula-mono:
    fontFamily: DM Mono
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  pill-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  pill-active-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  pill-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    border: "0.5px solid {colors.hairline}"
  pill-inactive-hover:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    border: "0.5px solid {colors.hairline}"

  segmented-tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.body-sm}"
    padding: "8px 4px"
    border: "0 0 2px transparent solid"
  segmented-tab-active:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    padding: "8px 4px"
    border: "0 0 2px {colors.primary} solid"

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
    border: "0.5px solid {colors.hairline}"
  button-icon:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-subtle}"
    rounded: "{rounded.full}"
    size: "32px"
    border: "0.5px solid {colors.hairline}"

  card-calculator:
    backgroundColor: "{colors.surface-1}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "0.5px solid {colors.hairline}"
  card-field:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
    border: "0.5px solid {colors.hairline}"
  card-result:
    backgroundColor: "{colors.primary-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
    border: "0.5px solid {colors.hairline}"

  panel-browse-elements:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
    border: "0.5px solid {colors.hairline}"
  panel-overflow-reveal:
    backgroundColor: "{colors.surface-3}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
    border: "0.5px solid {colors.hairline}"

  element-tile:
    backgroundColor: "{colors.surface-1}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs}"
    border: "0.5px solid {colors.hairline}"
  element-tile-selected:
    backgroundColor: "{colors.primary-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs}"
    border: "0.5px solid {colors.primary}"

  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.input-value}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    border: "0.5px solid {colors.hairline}"
  text-input-focused:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.input-value}"
    rounded: "{rounded.md}"
    border: "2px solid {colors.primary}"
  text-input-error:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.input-value}"
    rounded: "{rounded.md}"
    border: "2px solid {colors.error}"
  text-input-readonly:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-pressed}"
    typography: "{typography.result-value}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    border: "0.5px solid {colors.hairline}"

  badge-calculated:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-pressed}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"

  error-message:
    textColor: "{colors.error}"
    typography: "{typography.body-sm}"
    padding: "4px 0"
  error-message-icon:
    textColor: "{colors.error}"
    size: "14px"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: "56px"
  breadcrumb-bar:
    backgroundColor: "transparent"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.breadcrumb}"
    padding: "0 0 {spacing.lg} 0"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xl} 0"
---

## Overview

FreeChemLab is a single-purpose chemistry calculator, not a SaaS product and not a marketing site. The design system reflects that: the calculator is the first thing on the page, there is no hero, and every visual decision serves reading a number correctly rather than persuading anyone of anything.

The structural logic is borrowed from Linear — a surface ladder carrying hierarchy instead of drop shadows, hairline borders, a disciplined radius scale, and a single chromatic accent used scarcely. That logic is inverted for light mode: where Linear's canvas is near-black and surfaces lift toward lighter grays, this system's canvas is a warm off-white (`{colors.canvas}` #FAF9F5) and surfaces lift toward clean white (`{colors.surface-1}` #ffffff).

The accent is a deep forest green (`{colors.primary}` #02613E), chosen for its association with organic chemistry and lab safety, and because green is nearly absent from the calculator-site landscape. It appears on active controls, focus states, and the calculated-result tint. Nowhere else.

**Key Characteristics:**
- Light warm canvas with a four-step surface ladder for hierarchy — no drop shadows anywhere
- Single green accent (`{colors.primary}`) reserved for active states, focus, and calculated results
- Two-family typography: Public Sans for all text, DM Mono for all numbers
- Pill-shaped controls only where interaction demands it (direction toggle, unit selectors, buttons); cards hold 12px corners, inputs hold 8px
- Red (`{colors.error}`) appears only on validation errors — never decoratively
- Calculator visible immediately; no hero, no marketing band

## Colors

### Brand & Accent
- **Primary Green** (`{colors.primary}` #02613E): Active fills — direction toggle, active unit pills, primary buttons, focused input borders, active tab underline. White text on top (7.4:1 contrast, passes WCAG AAA).
- **Primary Hover** (`{colors.primary-hover}` #0B7A4F): Lighter green for hover states on green fills.
- **Primary Pressed** (`{colors.primary-pressed}` #04442C): Darker green for pressed/active states, and for text sitting on `{colors.primary-soft}`.
- **Primary Soft** (`{colors.primary-soft}` #DCEEE4): Tint background for the calculated-result field, the Calculated badge, and selected element tiles. Text on top uses `{colors.primary-pressed}`, never white.

### Surface
- **Canvas** (`{colors.canvas}` #FAF9F5): Page background. Warm off-white, not pure white — the warmth is deliberate and should read as "slightly less clinical," not visibly tinted.
- **Surface 1** (`{colors.surface-1}` #ffffff): One step above canvas — the calculator card, element tiles, input field interiors.
- **Surface 2** (`{colors.surface-2}` #F5F3EE): Two steps — the Molar Mass and Mass field containers, the Browse Elements panel.
- **Surface 3** (`{colors.surface-3}` #EFEDE7): Three steps — the "···" overflow reveal panel, nested sub-panels.
- **Surface 4** (`{colors.surface-4}` #E8E6DF): Four steps — deepest lift, currently unused. Reserved.
- **Hairline** (`{colors.hairline}` #E5E2DA): Default 0.5px borders on cards, inputs, and dividers.
- **Hairline Strong** (`{colors.hairline-strong}` #D3CFC3): Emphasized dividers.
- **Hairline Tertiary** (`{colors.hairline-tertiary}` #C4C0B2): Nested/tertiary borders inside the element grid.

### Text
- **Ink** (`{colors.ink}` #14140F): Headlines, input values, primary numbers. Near-black.
- **Ink Muted** (`{colors.ink-muted}` #4A4842): Body copy, secondary values.
- **Ink Subtle** (`{colors.ink-subtle}` #7A776D): Field labels, captions, breadcrumb, inactive pill text.
- **Ink Tertiary** (`{colors.ink-tertiary}` #A8A498): Placeholder text, disabled state, atomic mass values inside element tiles.

### Semantic
- **Error** (`{colors.error}` #C23B3B): Validation error borders and inline error messages. 5.4:1 contrast on white, passes WCAG AA for normal text. Red appears nowhere else in the system.
- **Error Soft** (`{colors.error-soft}` #FBEAEA): Tint background for error message blocks, if a filled treatment is ever needed.

## Typography

### Font Family

**Public Sans** — all text: headings, labels, buttons, body copy, breadcrumb. Chosen for legibility at small sizes and its tailed lowercase `l`, which disambiguates it from capital `I`. Fallbacks: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`.

**DM Mono** — all numbers: input values, calculated results, particle counts, chemical formulas. Fallbacks: `ui-monospace, 'SF Mono', Menlo, monospace`.

### Why two families

This is not a stylistic pairing. Misreading a digit is the primary failure mode of a calculator, and the confusable pairs are `0`/`O` and `1`/`l`/`I`. Public Sans handles `1`/`l`/`I` well but does not distinguish `0` from `O` (it has no slashed or dotted zero, and none is available as an OpenType feature). DM Mono resolves the numeric ambiguity and enforces fixed character width, so a result does not visually shift as it recalculates.

The rule is simple: **if it is a number, it is DM Mono. If it is a word, it is Public Sans.** Unit labels ("g/mol", "mol") are words and stay in Public Sans, even when adjacent to numbers.

Do not introduce a third family. JetBrains Mono, Inter, and Anonymous Pro were each evaluated and rejected during system design.

### Hierarchy

| Token | Family | Size | Weight | Line Height | Use |
|---|---|---|---|---|---|
| `{typography.page-title}` | Public Sans | 28px | 600 | 1.20 | Calculator card title |
| `{typography.card-title}` | Public Sans | 20px | 500 | 1.25 | Section headers inside the card |
| `{typography.label}` | Public Sans | 12px | 600 | 1.30 | Uppercase field labels (MOLAR MASS, MASS, MOLES), +0.4px tracking |
| `{typography.body}` | Public Sans | 16px | 400 | 1.50 | Explainer prose |
| `{typography.body-sm}` | Public Sans | 14px | 400 | 1.50 | Secondary copy, tab labels, error messages, footer |
| `{typography.button}` | Public Sans | 14px | 500 | 1.20 | All button and pill labels |
| `{typography.breadcrumb}` | Public Sans | 13px | 400 | 1.40 | Breadcrumb nav |
| `{typography.input-value}` | DM Mono | 16px | 400 | 1.40 | Molar mass and mass input values |
| `{typography.result-value}` | DM Mono | 24px | 500 | 1.20 | The calculated result — 6 decimal places |
| `{typography.particle-count}` | DM Mono | 13px | 400 | 1.40 | Particle count secondary line |
| `{typography.formula-mono}` | DM Mono | 15px | 500 | 1.40 | Built chemical formulas (e.g. He2LiBe2) |

### Principles
- **No negative letter-spacing anywhere.** Linear's aggressive tracking exists for 80px marketing headlines. The largest type here is 28px, and tightening hurts legibility on both small text and numbers.
- **Labels are the only uppercase treatment**, at 12px/600 with +0.4px tracking. Nothing else is uppercased.
- **Results are formatted to 6 decimal places**, matching the precision convention used across chemistry calculators.

## Layout

### Spacing System
- **Base unit**: 4px
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px
- Calculator card padding: `{spacing.lg}` 24px
- Field container padding: `{spacing.md}` 16px
- Gap between the Molar Mass and Mass containers: `{spacing.md}` 16px
- Pill padding: 8px vertical · 16px horizontal
- Button padding: 10px vertical · 20px horizontal
- Input padding: 8px vertical · 12px horizontal

### Grid & Container
- Single-column page, max content width ~880px. This is a calculator, not a dashboard — it should not sprawl.
- Molar Mass and Mass render side by side at desktop, each at `flex: 1`.
- The element grid inside Browse Elements renders 5-up at desktop.

### Whitespace Philosophy
The warm canvas is the whitespace. Sections separate by lifting onto a surface, not by large gaps. Vertical rhythm inside the card stays at `{spacing.md}` 16px between blocks; the page keeps `{spacing.lg}` 24px between the breadcrumb and the card.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No border, no shadow | Page background, breadcrumb, footer |
| 1 (card lift) | `{colors.surface-1}` on canvas, 0.5px `{colors.hairline}` | Calculator card, element tiles, input interiors |
| 2 (nested lift) | `{colors.surface-2}`, 0.5px `{colors.hairline}` | Field containers, Browse Elements panel |
| 3 (sub-panel lift) | `{colors.surface-3}`, 0.5px `{colors.hairline}` | Overflow reveal panel |
| 4 (focus) | 2px `{colors.primary}` border | Focused input |
| 4 (error) | 2px `{colors.error}` border | Errored input |

**There are no drop shadows in this system.** Depth is carried entirely by the surface ladder plus hairline borders. If something needs to feel raised, it moves up a surface step — it does not gain a shadow.

Focus and error use a border-width change (0.5px to 2px) rather than a shadow ring, because a ring reads poorly against a flat bordered card system.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Micro chips |
| `{rounded.sm}` | 6px | Inline tags |
| `{rounded.md}` | 8px | Inputs, element tiles, overflow panel |
| `{rounded.lg}` | 12px | Calculator card, field containers, Browse Elements panel |
| `{rounded.xl}` | 16px | Reserved |
| `{rounded.pill}` | 9999px | Direction toggle, unit pills, all buttons |
| `{rounded.full}` | 9999px | Circular icon buttons, the Calculated badge |

**Note on the pill divergence:** Linear's own system explicitly forbids pill-shaped CTAs. This system overrides that deliberately. The direction toggle and unit selectors are mutually-exclusive choice controls, and pill shape signals "pick one of these" more clearly than a rounded rectangle, which reads as a standalone button. Everything outside that pattern holds Linear's 8px/12px corners.

## Components

> Hover states are documented only where they carry meaning. Default, active, pressed, focused, and error states are the priority.

### Pills & Toggles

**`pill-active`** — Selected state for the direction toggle and unit selectors.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding 8px 16px, rounded `{rounded.pill}`.
- Pressed state `pill-active-pressed` darkens to `{colors.primary-pressed}`.

**`pill-inactive`** — Unselected state.
- Transparent background, text `{colors.ink-subtle}`, 0.5px `{colors.hairline}` border, same padding and radius.
- Hover state `pill-inactive-hover` fills to `{colors.surface-2}` and text darkens to `{colors.ink}`.

### Tabs

**`segmented-tab`** + **`segmented-tab-active`** — Presets / Build custom inside the Browse Elements panel.
- Inactive: text `{colors.ink-subtle}`, transparent background, 2px transparent bottom border, padding 8px 4px.
- Active: text `{colors.primary}`, 2px `{colors.primary}` bottom border.

Tabs are underline-style, not pills. Pills signal "toggle a value"; tabs signal "switch a view." The distinction matters because both appear in the same panel.

### Buttons

**`button-primary`** — Green pill. Used for "Use this molar mass."
- Background `{colors.primary}`, text `{colors.on-primary}`, padding 10px 20px, rounded `{rounded.pill}`.
- Pressed state darkens to `{colors.primary-pressed}`.

**`button-secondary`** — Outlined pill for secondary actions (Clear, Reset).
- Transparent background, text `{colors.ink}`, 0.5px `{colors.hairline}` border.

**`button-icon`** — 32×32px circular utility button (collapse, close).
- Background `{colors.surface-2}`, icon `{colors.ink-subtle}`, 0.5px `{colors.hairline}` border, rounded `{rounded.full}`.

### Cards & Panels

**`card-calculator`** — The outer card. Everything lives inside it.
- Background `{colors.surface-1}`, rounded `{rounded.lg}`, padding `{spacing.lg}`, 0.5px `{colors.hairline}` border.

**`card-field`** — Molar Mass and Mass containers.
- Background `{colors.surface-2}`, rounded `{rounded.lg}`, padding `{spacing.md}`, 0.5px `{colors.hairline}` border.

**`card-result`** — The calculated-output container.
- Background `{colors.primary-soft}`, otherwise identical to `card-field`. The green tint is what communicates "this is a result, not an input." It is not decorative and must not be applied to editable fields.

**`panel-browse-elements`** — The expandable element/preset picker.
- Background `{colors.surface-2}`, rounded `{rounded.lg}`, padding `{spacing.md}`, 0.5px `{colors.hairline}` border.

**`panel-overflow-reveal`** — The "···" panel holding rare units.
- Background `{colors.surface-3}`, rounded `{rounded.md}`, padding `{spacing.sm}`.

**`element-tile`** / **`element-tile-selected`** — Individual elements in the Build custom grid.
- Default: `{colors.surface-1}`, rounded `{rounded.md}`, 0.5px `{colors.hairline}`. Symbol in `{colors.ink}`, name and atomic mass in `{colors.ink-tertiary}`.
- Selected: `{colors.primary-soft}` fill with a 0.5px `{colors.primary}` border. Symbol and mass shift to `{colors.primary-pressed}` and `{colors.primary-hover}`.

The selected state must be visible from the fill and border alone. The quantity stepper appearing is additional feedback, not the primary signal.

### Inputs & Validation

**`text-input`** — Molar mass and mass fields.
- Background `{colors.surface-1}`, value in `{typography.input-value}` (DM Mono), rounded `{rounded.md}`, padding 8px 12px, 0.5px `{colors.hairline}` border.

**`text-input-focused`** — Border widens to 2px `{colors.primary}`.

**`text-input-error`** — Border widens to 2px `{colors.error}`. Paired with an `error-message` directly below the field.

**`text-input-readonly`** — The calculated result field.
- Background `{colors.primary-soft}`, text `{colors.primary-pressed}`, type `{typography.result-value}`. Not editable. Always accompanied by `badge-calculated`.

**`badge-calculated`** — Small pill label with a lock icon, sitting top-right of the result field's label row.
- Background `{colors.primary-soft}`, text `{colors.primary-pressed}`, type `{typography.body-sm}`, rounded `{rounded.pill}`, padding 2px 8px.

**`error-message`** — Inline validation message below the errored field.
- Text `{colors.error}`, type `{typography.body-sm}`, preceded by a 14px alert icon in the same color.

Validation rules: molar mass must be greater than zero; mass and moles must be non-negative. A field must never render focused and errored simultaneously — the validation logic should resolve to one state.

### Navigation & Chrome

**`top-nav`** — Wordmark left, minimal. No CTA button.
- Background `{colors.canvas}`, height 56px, type `{typography.body-sm}`.

**`breadcrumb-bar`** — Sits above the calculator card.
- Transparent, text `{colors.ink-subtle}`, current page in `{colors.ink}`, type `{typography.breadcrumb}`.

**`footer`** — Single line, copyright only. No cross-links until the product has more than one module.
- Background `{colors.canvas}`, text `{colors.ink-subtle}`, type `{typography.body-sm}`.

## Do's and Don'ts

### Do
- Use the surface ladder for hierarchy. If two containers sit at the same level, one of them is probably wrong.
- Reserve `{colors.primary}` for active states, focus, and calculated results.
- Use `{colors.primary-soft}` as the signal for "calculated" and "selected" — the tint carries the meaning, not an adjacent badge alone.
- Put every number in DM Mono and every word in Public Sans.
- Apply `{rounded.pill}` only to the direction toggle, unit selectors, and buttons.
- Keep the calculator above the fold. It is the product.
- Format all calculated results to 6 decimal places.

### Don't
- Don't add drop shadows. Depth comes from the surface ladder.
- Don't use `{colors.error}` red for anything except validation errors.
- Don't use `{colors.primary}` as a large surface fill or on body text.
- Don't introduce a third font family.
- Don't nest containers at the same surface level — step up or don't nest.
- Don't add a marketing hero, a promotional CTA, or footer cross-links.
- Don't apply `card-result`'s green tint to an editable field. It means "read-only output."
- Don't pill-round the element tiles or the calculator card.

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Desktop | ≥ 1024px | Molar Mass and Mass side by side; element grid 5-up |
| Tablet | 768 – 1023px | Same two-column field layout; element grid 4-up |
| Mobile-Lg | 520 – 767px | Fields still side by side; element grid 3-up |
| Mobile | < 520px | Molar Mass and Mass stack to one column; element grid 2-up; page title scales 28px → 22px |

### Touch Targets
All interactive controls hold a minimum 44×44px tap target on touch viewports. This is a hard requirement, not a guideline — it was a defect in an earlier build.
- Pills render at 36px effective height on desktop; padding increases to reach 44px on touch.
- Inputs render at 40px on desktop; 44px on touch.
- Element tiles hold ≥44px on all viewports.
- Quantity steppers (− / +) hold ≥44×44px on touch.

### Collapsing Strategy
- **Field row**: two columns → stacked single column below 520px
- **Element grid**: 5-up → 4-up → 3-up → 2-up
- **Unit pills**: common units stay visible at all widths; rare units remain behind the "···" reveal
- **Direction toggle**: stays in the card header at all widths; may wrap below the title under 520px

## Iteration Guide

1. Work on one component at a time and reference it by its `components:` token name.
2. When adding a container, decide its surface level first. That decision drives everything else.
3. Default text to `{typography.body-sm}` and numbers to `{typography.input-value}`.
4. Add new states as separate component entries (`-focused`, `-pressed`, `-error`, `-selected`).
5. Treat green as scarce. If it appears on a surface that is not active, focused, or a result, it has not earned the role.
6. Any new numeric display inherits DM Mono automatically — this is not optional styling.

## Known Gaps

- Dark mode is not defined. The product ships light-only for now.
- Animation and transition timings are not specified; 150–200ms ease is a reasonable default for state changes.
- Success and warning semantic states are not defined, since the calculator has no success confirmation or warning condition. Add them only if a real use case appears.
- The explainer/theory section below the calculator has no component definitions yet — that section's design is deliberately deferred.
- `{colors.surface-4}` and `{rounded.xl}` are defined but currently unused. They exist as headroom, not as a mandate to find a use for them.
