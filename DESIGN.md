---
version: alpha
name: FreeChemLab-design-system
description: "A light, warm scientific-instrument system for a single-purpose chemistry calculator. Built on Linear's structural logic (four-step surface ladder, hairline borders, no drop shadows, disciplined radius scale) inverted for a warm off-white canvas (#FAF9F5). Deep forest green (#02613E) is the single chromatic accent, used only on active controls, focus states, and calculated-result text. Public Sans carries all text; DM Mono carries every number, chosen for its unambiguous 0/O and 1/l/I forms since misreading a digit is the primary failure mode of a calculator. Pill-shaped controls are used deliberately for the direction toggle and unit selectors; everything else holds Linear's 8px/12px corners, with the outer calculator card at 16px."

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
    fontSize: 24px
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
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  particle-count:
    fontFamily: DM Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  formula-mono:
    fontFamily: DM Mono
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: 0
  element-symbol:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
    textTransform: none
  element-name:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: 0
  element-mass:
    fontFamily: DM Mono
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0
  element-count:
    fontFamily: DM Mono
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0

rounded:
  xxs: 2px
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
    padding: "8px 12px"
  pill-active-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
  pill-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
    border: "0.5px solid {colors.hairline}"
  pill-inactive-hover:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
    border: "0.5px solid {colors.hairline}"

  toggle-direction:
    backgroundColor: "transparent"
    border: "0.5px solid {colors.hairline}"
    rounded: "{rounded.pill}"
    padding: "4px"
  toggle-direction-segment-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
  toggle-direction-segment-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"

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
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
    border: "0.5px solid {colors.hairline}"
  card-field:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "0.5px solid {colors.hairline}"
  card-result:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "0.5px solid {colors.hairline}"

  panel-browse-elements:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
    border: "0.5px solid {colors.hairline}"

  element-tile:
    backgroundColor: "{colors.surface-1}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs}"
    gap: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
  element-tile-selected:
    backgroundColor: "{colors.surface-1}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs}"
    gap: "{spacing.lg}"
    border: "1px solid {colors.primary}"
  element-tile-symbol:
    backgroundColor: "{colors.surface-4}"
    textColor: "{colors.ink}"
    typography: "{typography.element-symbol}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xs}"
    size: "40px"
  element-tile-stepper:
    backgroundColor: "{colors.surface-1}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xxs}"
    gap: "{spacing.xs}"
    border: "1px solid {colors.hairline}"
  element-tile-stepper-button:
    backgroundColor: "transparent"
    iconColor: "{colors.ink-muted}"
    rounded: "{rounded.xxs}"
    padding: "{spacing.xxs}"
    size: "32px"
  element-tile-stepper-button-hover:
    backgroundColor: "{colors.surface-4}"
    iconColor: "{colors.ink-muted}"
    rounded: "{rounded.xxs}"
    padding: "{spacing.xxs}"
    size: "32px"

  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.input-value}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    border: "2px solid {colors.hairline}"
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
  result-value:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.result-value}"

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

The accent is a deep forest green (`{colors.primary}` #02613E), chosen for its association with organic chemistry and lab safety, and because green is nearly absent from the calculator-site landscape. It appears on active controls, focus states, and calculated-result text. Nowhere else.

**Key Characteristics:**
- Light warm canvas with a four-step surface ladder for hierarchy — no drop shadows anywhere
- Single green accent (`{colors.primary}`) reserved for active states, focus, and calculated results
- Two-family typography: Public Sans for all text, DM Mono for all numbers
- Pill-shaped controls only where interaction demands it (direction toggle, unit selectors, buttons); the outer calculator card holds 16px corners, field/result cards hold 12px, inputs hold 8px
- Red (`{colors.error}`) appears only on validation errors — never decoratively
- Calculator visible immediately; no hero, no marketing band

## Colors

### Brand & Accent
- **Primary Green** (`{colors.primary}` #02613E): Active fills — direction toggle, active unit pills, primary buttons, focused input borders, active tab underline. White text on top (7.4:1 contrast, passes WCAG AAA).
- **Primary Hover** (`{colors.primary-hover}` #0B7A4F): Lighter green for hover states on green fills.
- **Primary Pressed** (`{colors.primary-pressed}` #04442C): Darker green for pressed/active states, and for text sitting on `{colors.primary-soft}`.
- **Primary Soft** (`{colors.primary-soft}` #DCEEE4): Currently unused. It previously tinted selected element tiles and, before that, the calculated-result field; both now signal state without a fill (see `element-tile-selected` and the Don't about the read-only signal below). Retained as a token for any future selected-surface need — text on top would use `{colors.primary-pressed}`, never white.

### Surface
- **Canvas** (`{colors.canvas}` #FAF9F5): Page background. Warm off-white, not pure white — the warmth is deliberate and should read as "slightly less clinical," not visibly tinted.
- **Surface 1** (`{colors.surface-1}` #ffffff): One step above canvas — the calculator card, element tiles, input field interiors.
- **Surface 2** (`{colors.surface-2}` #F5F3EE): Two steps — the input and result field containers, the Browse Elements panel.
- **Surface 3** (`{colors.surface-3}` #EFEDE7): Three steps — currently unused since the "···" overflow reveal panel it backed was removed (all units now render inline). Reserved.
- **Surface 4** (`{colors.surface-4}` #E8E6DF): Four steps — deepest lift. Backs the element tile's symbol chip (`element-tile-symbol`) and the hover fill on the tile's stepper buttons (`element-tile-stepper-button-hover`). These are its only consumers. Both sit *inside* a `{colors.surface-1}` tile, so here the step reads as a recess against white rather than a lift — this is the one place the ladder inverts, and it is intentional: the symbol chip and the hover fill are insets within a card, not cards of their own.
- **Hairline** (`{colors.hairline}` #E5E2DA): Default 0.5px borders on cards, inputs, and dividers.
- **Hairline Strong** (`{colors.hairline-strong}` #D3CFC3): Emphasized dividers.
- **Hairline Tertiary** (`{colors.hairline-tertiary}` #C4C0B2): Nested/tertiary borders inside the element grid.

### Text
- **Ink** (`{colors.ink}` #14140F): Headlines, input values, primary numbers. Near-black.
- **Ink Muted** (`{colors.ink-muted}` #4A4842): Body copy, secondary values, field labels, inactive pill and toggle text.
- **Ink Subtle** (`{colors.ink-subtle}` #7A776D): Captions, breadcrumb.
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
| `{typography.page-title}` | Public Sans | 24px | 600 | 1.20 | Calculator card title |
| `{typography.card-title}` | Public Sans | 20px | 500 | 1.25 | Section headers inside the card |
| `{typography.label}` | Public Sans | 12px | 600 | 1.30 | Uppercase field labels (MOLAR MASS, MASS, MOLES), +0.4px tracking |
| `{typography.body}` | Public Sans | 16px | 400 | 1.50 | Explainer prose |
| `{typography.body-sm}` | Public Sans | 14px | 400 | 1.50 | Secondary copy, tab labels, error messages, footer |
| `{typography.button}` | Public Sans | 14px | 500 | 1.20 | All button and pill labels |
| `{typography.breadcrumb}` | Public Sans | 13px | 400 | 1.40 | Breadcrumb nav |
| `{typography.input-value}` | DM Mono | 16px | 400 | 1.40 | Molar mass and mass input values |
| `{typography.result-value}` | DM Mono | 32px | 500 | 1.20 | The calculated result — 6 decimal places |
| `{typography.particle-count}` | DM Mono | 14px | 400 | 1.40 | Particle count secondary line |
| `{typography.formula-mono}` | DM Mono | 15px | 500 | 1.40 | Built chemical formulas (e.g. He2LiBe2) |

### Principles
- **No negative letter-spacing anywhere.** Linear's aggressive tracking exists for 80px marketing headlines. The largest type here is 32px, and tightening hurts legibility on both small text and numbers.
- **Labels are the only uppercase treatment**, at 12px/600 with +0.4px tracking. Nothing else is uppercased.
- **Results are formatted to 6 decimal places**, matching the precision convention used across chemistry calculators.

## Layout

### Spacing System
- **Base unit**: 4px
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px
- Calculator card padding: `{spacing.lg}` 24px
- Field container padding: `{spacing.lg}` 24px. Molar Mass and the current second input share a single field card (no gap, no divider) split by asymmetric inner padding — 24px on the outer edges and top/bottom, 12px each on the two sides facing the shared midline, for a 24px total gutter.
- Result card padding: `{spacing.lg}` 24px, symmetric on all sides — it is a single field, not split.
- Pill padding: 8px vertical · 12px horizontal
- Pill padding (touch viewports): 14px vertical · 16px horizontal, set explicitly — see Touch Targets.
- Button padding: 10px vertical · 20px horizontal
- Input padding: 8px vertical · 12px horizontal

### Grid & Container
- Single-column page, max content width ~880px. This is a calculator, not a dashboard — it should not sprawl.
- Molar Mass and the current second input render side by side at desktop, each at `flex: 1`.
- The element grid inside Browse Elements is **not** a fixed column count. It is `repeat(auto-fill, minmax(280px, 1fr))`, so the column count falls out of the available width — 2-up in the ~770px panel at desktop, 1-up below ~570px.
- The 280px floor is set by the widest tile content, not by taste: 8px padding + 40px chip + 12px + **94px** (the rendered width of "Molybdenum", the longest name in the 63-element dataset) + 24px gap + 106px stepper + 8px padding + 2px border ≈ 294px of content. Anything narrower truncates real element names, which defeats the point of the horizontal layout — the name is the reason the tile went horizontal.
- This replaced a fixed 5-up grid and, briefly, a fixed 3-up one. 3-up measured at 251px per tile against a 294px requirement and truncated most names past six characters. If the column rule is ever changed back to fixed counts, measure against "Molybdenum" and the 106px stepper, not against the source design's "Hydrogen" and its narrower 92px stepper.

### Whitespace Philosophy
The warm canvas is the whitespace. Sections separate by lifting onto a surface, not by large gaps. Vertical rhythm inside the card stays at `{spacing.md}` 16px between blocks; the page keeps `{spacing.lg}` 24px between the breadcrumb and the card.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No border, no shadow | Page background, breadcrumb, footer |
| 1 (card lift) | `{colors.surface-1}` on canvas, 0.5px `{colors.hairline}` | Calculator card, input interiors |
| 1 (card lift) | `{colors.surface-1}`, 1px `{colors.hairline}` | Element tiles and their steppers — 1px, not 0.5px, per the source design |
| 2 (nested lift) | `{colors.surface-2}`, 0.5px `{colors.hairline}` | Field containers, Browse Elements panel |
| 3 (sub-panel lift) | `{colors.surface-3}`, 0.5px `{colors.hairline}` | Reserved — currently unused |
| 4 (focus) | 2px `{colors.primary}` border | Focused input |
| 4 (error) | 2px `{colors.error}` border | Errored input |

**There are no drop shadows in this system.** Depth is carried entirely by the surface ladder plus hairline borders. If something needs to feel raised, it moves up a surface step — it does not gain a shadow.

Focus and error use a border-color change rather than a shadow ring, because a ring reads poorly against a flat bordered card system. The border is 2px at rest and stays 2px through every state — only the color moves (hairline → primary → error). An earlier build changed the width instead (0.5px → 2px on focus), which shifted the input's content by a couple of pixels on every focus/blur; keeping the width constant was the fix.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.xxs}` | 2px | Stepper button hover fill inside the element tile |
| `{rounded.xs}` | 4px | Micro chips, element-tile symbol chip, element-tile stepper |
| `{rounded.sm}` | 6px | Inline tags |
| `{rounded.md}` | 8px | Inputs, element tiles, overflow panel |
| `{rounded.lg}` | 12px | Field containers, result card, Browse Elements panel |
| `{rounded.xl}` | 16px | Calculator card outer radius |
| `{rounded.pill}` | 9999px | Direction toggle, unit pills, all buttons |
| `{rounded.full}` | 9999px | Circular icon buttons |

**Note on the pill divergence:** Linear's own system explicitly forbids pill-shaped CTAs. This system overrides that deliberately. The direction toggle and unit selectors are mutually-exclusive choice controls, and pill shape signals "pick one of these" more clearly than a rounded rectangle, which reads as a standalone button. Everything outside that pattern holds Linear's 8px/12px corners, with the calculator's outer card stepping up to 16px.

## Components

> Hover states are documented only where they carry meaning. Default, active, pressed, focused, and error states are the priority.

### Pills & Toggles

**`pill-active`** — Selected state for unit selectors.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding 8px 12px, rounded `{rounded.pill}`.
- Pressed state `pill-active-pressed` darkens to `{colors.primary-pressed}`.

**`pill-inactive`** — Unselected state.
- Transparent background, text `{colors.ink-muted}`, 0.5px `{colors.hairline}` border, same padding and radius.
- Hover state `pill-inactive-hover` fills to `{colors.surface-2}` and text darkens to `{colors.ink}`.

**`toggle-direction`** — The g→mol / mol→g mode switch in the card header. This is a distinct component, not a reuse of `pill-active`/`pill-inactive` — those toggle a single value (a unit); this toggles calculation direction and each segment always shows both units of that direction, joined by a chevron (e.g. "g › mol").
- Container: transparent, 0.5px `{colors.hairline}` border, rounded `{rounded.pill}`, 4px padding, 4px gap between the two segments.
- `toggle-direction-segment-active`: background `{colors.primary}`, text `{colors.on-primary}`, padding 8px 12px, rounded `{rounded.pill}`.
- `toggle-direction-segment-inactive`: transparent background, text `{colors.ink-muted}`, same padding and radius.
- Icon: chevron-right, 16px box, between the two unit words. Its stroke inherits the segment's text color — white on the active segment, `{colors.ink-muted}` on the inactive one. It is not a separate color token.

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

**`button-copy`** — Bare icon button aligned with the result *value* row, vertically centered on the big number — not the label row above it. Figma's exact node position confirms this (the icon sits centered on the value line's height, not the label's). No background, no border, no fill, and no badge or lock icon beside it — see the read-only signal Don't below.
- Icon: copy/duplicate glyph, outline style, matching the app's existing stroke-based icon set (`stroke="currentColor"`).
- Empty state: `{colors.ink-tertiary}` #A8A498.
- Filled state: `{colors.ink-muted}` #4A4842.
- On click, copies the current result value (plain number, no unit label) to the clipboard. Disabled/non-interactive in the empty state, since there is nothing to copy.

### Cards & Panels

**`card-calculator`** — The outer card. Everything lives inside it.
- Background `{colors.surface-1}`, rounded `{rounded.xl}`, padding `{spacing.lg}`, 0.5px `{colors.hairline}` border.

**`card-field`** — Two inputs share a single card, side by side. There is no gap and no divider between them — the split is entirely padding: 24px on the outer edges and top/bottom, 12px on the two sides facing the shared midline.
- Background `{colors.surface-2}`, rounded `{rounded.lg}`, 0.5px `{colors.hairline}` border.
- The first slot is permanent: Molar Mass. It's an input in both calculation directions and never moves, never changes card. The second slot is role-assigned, not field-assigned — it holds whichever of Mass/Moles is currently the *input* for the active direction (Mass in g→mol, Moles in mol→g). Card membership follows input/output role, not field identity — don't hardcode "Molar Mass and Mass" as a fixed pair; the second field genuinely changes.

**`card-result`** — The calculated-output container.
- Background `{colors.surface-2}`, padding `{spacing.lg}`, otherwise identical to `card-field`. It no longer carries a green tint — see the read-only signal Don't below.
- Holds whichever of Mass/Moles is currently the *output* — Moles in g→mol, Mass in mol→g. Same role-assignment principle as `card-field`'s second slot: this card's content swaps with direction, its content is never fixed to one field.

**`trigger-browse-elements`** — The row above the result card that opens the Browse Elements panel.
- Chevron-right icon, 16px box, rotates 90° when the panel is open.
- "Not sure of the molar mass?" in `{colors.ink-muted}`; "Browse elements" in `{colors.ink}`, underlined.

**`panel-browse-elements`** — The expandable element/preset picker.
- Background `{colors.surface-2}`, rounded `{rounded.lg}`, padding `{spacing.md}`, 0.5px `{colors.hairline}` border.

**`element-tile`** / **`element-tile-selected`** — Individual elements in the Build custom grid.

The tile is a **horizontal** row, not a centered stack. Left to right: symbol chip → name/mass block → stepper, with the stepper pushed to the right edge. Container is `{colors.surface-1}`, rounded `{rounded.md}`, 1px `{colors.hairline}`, `{spacing.xs}` padding, `{spacing.lg}` gap between the left group and the stepper.

- **`element-tile-symbol`** — a 40×40px chip, not bare bold text on the card. Background `{colors.surface-4}`, rounded `{rounded.xs}`, symbol centered in `{typography.element-symbol}` / `{colors.ink}`.
  - **Never apply `text-transform: uppercase` to the symbol.** The source design marks it uppercase, but only ever renders `H` — a single-letter symbol where the transform is invisible. Applied to the real dataset it produces `HE`, `NA`, `MG`, which are not chemical symbols; the case of the second letter is meaningful notation, not styling. Symbols render exactly as stored.
- **Name + mass** — stacked, **left-aligned**, 4px gap, immediately right of the chip at `{spacing.sm}` 12px. Name in `{typography.element-name}` / `{colors.ink}`; atomic mass in `{typography.element-mass}` / `{colors.ink-muted}`. Neither is `{colors.ink-tertiary}` any more — the horizontal layout gives them enough room to carry full contrast.
- **`element-tile-stepper`** — its own bordered component at the right edge: `{colors.surface-1}`, rounded `{rounded.xs}`, 1px `{colors.hairline}`, `{spacing.xxs}` padding, `{spacing.xs}` gap, stretched to the tile's inner height. Holds − / count / +. Count in `{typography.element-count}` / `{colors.ink}`.
- **Selected**: border only. The background stays `{colors.surface-1}` and the border changes to 1px `{colors.primary}`. Nothing else moves — no fill, no text-color shift.

The selected state is carried by the border alone. This is a deliberate lightening: the previous `{colors.primary-soft}` fill plus recolored text was too heavy for a control that can appear 63 times at once on screen, and it competed with the result value for the eye's attention. Green stays scarce.

The stepper is **always visible**, in both states — it no longer appears on selection. Because a stepper is present on an unselected tile, the border is doing all of the selection signalling, which is why it must never be omitted or softened.

**`element-tile-stepper-button`** — the − and + controls.
- 32×32px box, rounded `{rounded.xxs}`, transparent at rest, holding a 24×24px icon box with a 14px stroke glyph (1.5px stroke, round caps) in `{colors.ink-muted}`.
- Hover fills the box with `{colors.surface-4}`. The icon color does not change. **Both buttons take the same hover treatment** — the source file defines it only on +, but an asymmetric hover on a two-button stepper reads as a defect, so − mirrors it.
- The rest state reserves the hover box's full 32×32 footprint, so hovering fills a background that is already there and never shifts the stepper's layout.

**Selection model.** Because the stepper is always visible, "shows a count" and "is in the formula" are two different things, and the tile has to keep them distinct:

- An unselected tile always displays a resting count of **1**. That 1 is a *proposal*, not a quantity — the element is not in the formula and contributes nothing to the computed molar mass.
- Clicking the tile body, or clicking **+**, sets selected and adds the element to the formula.
- Clicking **−** at a count of 1 clears selection, removes the element from the formula, and returns the display to its resting 1. This is cart behavior: decrementing the last unit removes the line item. There is no separate remove affordance.
- Clicking **−** at 2 or above decrements and stays selected.
- **−** on an already-unselected tile does nothing — there is no state below "not in the formula."

The resting 1 is a display default, so it must not be exposed to assistive tech as a live value: while unselected, the count is `aria-hidden` and the − button carries a real `disabled`. **Do not disable the stepper as a whole** — + is the control that selects, so it must stay live in both states. Marking the container `aria-disabled` silently disables + along with −, which is both wrong for assistive tech and, because it makes the button non-actionable, wrong for automation.

Selected state is carried by **`aria-current="true"`** on the tile body, present only while selected and removed otherwise — the green border is not a signal a screen reader can see.

**Do not use `aria-pressed` here, and do not "fix" the tile to justify it.** `aria-pressed` declares a toggle button: repeated activation is expected to alternate state. The tile body's behavior is one-directional — clicking it only ever selects, and the *only* way back out is the stepper's − at a count of 1 (the cart pattern above). `aria-pressed="true"` on a control that never un-presses on re-activation misdescribes the interaction to anyone navigating by assistive tech. `aria-current` states "this is in the current selection" without promising togglability, which is what the tile actually offers. The page's other `aria-current` uses carry the value `page` inside navigation landmarks; the grid's use of `true` is a separate set and does not collide with them.

### Inputs & Validation

**`text-input`** — Molar mass and mass fields.
- Background `{colors.surface-1}`, value in `{typography.input-value}` (DM Mono), rounded `{rounded.md}`, padding 8px 12px, 2px `{colors.hairline}` border. The border is always 2px — see the Don't below on why the width never changes.
- Trailing chevron-selector-vertical icon, 24px box (two 10×6px chevrons stacked), right-aligned. It is a functional stepper, not decorative: the up chevron is always active (`{colors.ink-muted}`); the down chevron mutes to `{colors.ink-tertiary}` and disables once the value is at its floor (0 for all three fields), active (`{colors.ink-muted}`) otherwise. Each field steps by 1 (whole numbers).

**`text-input-focused`** — Border color changes to `{colors.primary}`. Width stays 2px, same as rest — only the color transitions, so focusing never shifts layout.

**`text-input-error`** — Border color changes to `{colors.error}`. Width stays 2px. Paired with an `error-message` directly below the field.

**`result-value`** — The calculated result. Not a boxed input — bare typography sitting directly on `card-result`'s background, with no white box, no border, and no badge or lock icon. That absence is the only read-only signal; see the Don't below.
- Text `{colors.ink-tertiary}` when empty, `{colors.primary}` once a value exists. Type `{typography.result-value}`.

**`error-message`** — Inline validation message below the errored field.
- Text `{colors.error}`, type `{typography.body-sm}`, preceded by a 14px alert icon in the same color.

Validation rules: molar mass must be greater than zero; mass and moles must be non-negative. A field must never render focused and errored simultaneously — the validation logic should resolve to one state.

**`result-empty`** — The result row before a calculation has run.
- Result value: `{colors.ink-tertiary}` #A8A498 (empty) → `{colors.primary}` #02613E (filled).
- Particle value: `{colors.ink-tertiary}` #A8A498 (empty) → `{colors.ink}` #14140F (filled).
- Copy icon: see `button-copy` above.

The particle-count row is the one place in the result block with a visible divider — a 0.5px `{colors.hairline-soft}` border-top, 12px padding above it, no separate margin. Everywhere else a field's input/value block separates from its unit-pill row with a plain 16px gap (`{spacing.md}`), no line. Don't add a divider there; it isn't in the source design.

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
- Reserve `{colors.primary}` for active states, focus, and calculated result text.
- Signal "selected" with a `{colors.primary}` border and nothing else. No tint, no recolored text, no adjacent badge.
- Put every number in DM Mono and every word in Public Sans.
- Apply `{rounded.pill}` only to the direction toggle, unit selectors, and buttons.
- Keep the calculator above the fold. It is the product.
- Format all calculated results to 6 decimal places.
- Empty-state text (result value, particle count value, and the copy icon) uses `{colors.ink-tertiary}`. Filled state restores each element's normal color. Do not invent a separate muted token per element, they all share ink-tertiary.
- State touch-viewport padding explicitly on every interactive control, per breakpoint. Never rely on it inheriting from desktop padding — that gap is how the 44px minimum was missed before.

### Don't
- Don't add drop shadows. Depth comes from the surface ladder.
- Don't use `{colors.error}` red for anything except validation errors.
- Don't use `{colors.primary}` as a large surface fill or on body text.
- Don't introduce a third font family.
- Don't nest containers at the same surface level — step up or don't nest.
- Don't add a marketing hero, a promotional CTA, or footer cross-links.
- Don't add a white input box, a badge, or a lock icon to the calculated result field. Whichever two fields are currently inputs have a white `text-input` box; the result field does not — that absence is now the only structural signal that it is read-only. Adding one back silently breaks it.
- Don't pill-round the element tiles or the calculator card.
- Don't change a `text-input`'s border *width* on focus or error. It's 2px at every state; only the color moves. Changing the width shifts the field's content by a couple of pixels on every focus/blur — that flicker was a real defect, not a style choice.
- Don't add a divider between a field's input/value block and its unit-pill row, or between the Molar Mass/Mass/Moles blocks and their pills. A plain 16px gap is correct there; the only intentional divider in the result block is above the particle-count row.
- Don't fix `card-field`'s second slot or `card-result`'s content to a specific field (e.g. "Mass is always the input, Moles is always the result"). Both cards are role-assigned and swap contents with the direction toggle — hardcoding by field identity instead of role is exactly the bug that shipped once already.

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Desktop | ≥ 1024px | The two current inputs side by side; element grid 2-up |
| Tablet | 768 – 1023px | Same two-column field layout; element grid 2-up |
| Mobile-Lg | 520 – 767px | Fields still side by side; element grid 1-up |
| Mobile | < 520px | The two current inputs stack to one column; element grid 1-up; page title scales 24px → 20px |

The element grid's column counts above are *observed outcomes* of the 280px `auto-fill` floor at each width, not breakpoints the grid itself declares. It has no media queries.

### Touch Targets
All interactive controls hold a minimum 44×44px tap target on touch viewports. This is a hard requirement, not a guideline — it was a defect in an earlier build. State the touch padding explicitly per control; do not leave it to inherit from desktop.
- Pills and `toggle-direction` segments: 8px vertical / 12px horizontal padding on desktop (~32px effective height). On touch, padding increases explicitly to 14px vertical / 16px horizontal to clear 44px — this is not automatic from the desktop values.
- Inputs render at 40px on desktop; 44px on touch.
- Element tiles hold ≥44px on all viewports.
- Quantity steppers (− / +) in Build custom paint a 32×32px box at every viewport, matching the source design. The hit area and the painted box are deliberately separate: the `<button>` is a transparent wrapper around a 32×32 inner span that carries the radius and the hover fill. On desktop the wrapper adds no padding (32×32 total); on touch it adds 6px on all sides, giving a 44×44px target while the painted box stays 32×32. The control looks identical at both widths — only the wrapper's padding changes, which is why the fill must live on the inner span and never on the button itself.
- `button-copy`: 44×44px hit area at all viewports, not just touch — the icon itself stays small (16px) inside it.
- Exception: the `text-input` increment/decrement stepper is ~16×24px total (two 16×12px chevrons), well under 44px. It intentionally matches native OS spinner proportions rather than the hard requirement — see Known Gaps.

### Collapsing Strategy
- **Field row**: two columns → stacked single column below 520px
- **Element grid**: 2-up → 1-up, via an `auto-fill` 280px floor rather than declared breakpoints. The tile never narrows below 280px; the column count drops instead.
- **Unit pills**: all units render inline at every width and wrap onto additional lines as needed — there is no reveal/overflow interaction.
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
- `{colors.surface-3}` is defined but currently unused — it lost its only consumer when the "···" overflow reveal panel was removed. It exists as headroom, not as a mandate to find a use for it. (`{colors.surface-4}` is no longer in this list; the element tile's symbol chip and stepper hover fill now consume it.)
- `{colors.primary-soft}` is now unused, having lost its last consumer when the element tile's selected state went border-only. Kept as a token rather than deleted, since a selected-surface fill is a plausible future need — but do not reach for it to "balance" the tile's selected state. The border is the whole signal, by design.
- The `text-input` stepper's ~16×24px hit area is below the 44px touch-target minimum by design, matching native number-input spinner proportions. This is a deliberate exception to the Touch Targets rule, not an oversight — revisit if usage data shows it's hard to hit on touch devices.
