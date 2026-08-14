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
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
    textTransform: none
  element-name:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: 0
  element-mass:
    fontFamily: DM Mono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0
  element-count:
    fontFamily: DM Mono
    fontSize: 14px
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
    boxShadow: "inset 0 0 0 0.5px {colors.hairline}"
  pill-inactive-hover:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
    boxShadow: "inset 0 0 0 0.5px {colors.hairline}"

  toggle-direction:
    backgroundColor: "transparent"
    boxShadow: "inset 0 0 0 0.5px {colors.hairline}"
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
    boxShadow: "inset 0 0 0 0.5px {colors.hairline}"
  button-icon:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-subtle}"
    rounded: "{rounded.full}"
    size: "32px"
    boxShadow: "inset 0 0 0 0.5px {colors.hairline}"

  card-calculator:
    backgroundColor: "{colors.surface-1}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
    boxShadow: "inset 0 0 0 0.5px {colors.hairline}"
  card-field:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    boxShadow: "inset 0 0 0 0.5px {colors.hairline}"
  card-result:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    boxShadow: "inset 0 0 0 0.5px {colors.hairline}"

  panel-browse-elements:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
    boxShadow: "inset 0 0 0 0.5px {colors.hairline}"

  element-tile:
    backgroundColor: "{colors.surface-1}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs}"
    gap: "{spacing.xs}"
    minHeight: "52px"
    boxShadow: "inset 0 0 0 1px {colors.hairline}"
  element-tile-hover:
    backgroundColor: "{colors.surface-1}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs}"
    gap: "{spacing.xs}"
    minHeight: "52px"
    boxShadow: "inset 0 0 0 1px {colors.hairline-tertiary}"
  element-tile-selected:
    backgroundColor: "{colors.surface-1}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs}"
    gap: "{spacing.xs}"
    minHeight: "52px"
    boxShadow: "inset 0 0 0 1px {colors.primary}"
  element-tile-symbol:
    backgroundColor: "{colors.surface-4}"
    textColor: "{colors.ink}"
    typography: "{typography.element-symbol}"
    rounded: "{rounded.xs}"
    size: "32px"
  element-tile-stepper:
    backgroundColor: "transparent"
    padding: "0"
    gap: "{spacing.xxs}"
    border: "none"
  element-tile-stepper-button:
    backgroundColor: "transparent"
    iconColor: "{colors.ink-muted}"
    rounded: "50%"
    size: "24px"
    touchPadding: "10px"
  element-tile-stepper-button-hover:
    backgroundColor: "{colors.surface-4}"
    iconColor: "{colors.ink-muted}"
    rounded: "50%"
    size: "24px"
    touchPadding: "10px"

  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.input-value}"
    rounded: "{rounded.md}"
    padding: "ONE value per breakpoint, identical in every state (rest/focus/error) — 12px vertical below 520px, 10px at `mobile:` (≥520px) and up. Left padding stays 12px in every state. Right padding is unrelated to this and still reserves the stepper capsule: 80px below 520px, 72px at `mobile:` and up. No state-based split: box-shadow:inset doesn't participate in box sizing, so the edge can grow from 1px to 2px on focus/error without padding needing to move opposite it — see the Do below."
    height: "48px below 520px, 44px at `mobile:` (≥520px) and up — IDENTICAL in every state (rest/focus/error), and now automatically so. There is no `height` declaration; height is emergent from line-height 24px + vertical padding×2, full stop — the inset box-shadow paints inside the padding box and adds nothing to it, so there is no border term left in the sum. 24+24=48 at every state (below 520px); 24+20=44 at every state (at/above it). Verified with real computed-style measurements (not just arithmetic) at both breakpoints, all three fields, all three states."
    boxShadow: "inset 0 0 0 1px {colors.hairline} at rest, 2px at focus/error — see text-input-focused/text-input-error"
  text-input-focused:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.input-value}"
    rounded: "{rounded.md}"
    padding: "Same as text-input — the value never changes across states"
    boxShadow: "inset 0 0 0 2px {colors.primary}"
  text-input-error:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.input-value}"
    rounded: "{rounded.md}"
    padding: "Same as text-input — the value never changes across states"
    boxShadow: "inset 0 0 0 2px {colors.error}"

  field-stepper-pill:
    backgroundColor: "none — the shape is two adjacent same-fill buttons forming ONE capsule silhouette, not a shared pill-shaped background element"
    border: "none, in any state"
    rounded: "PER-SIDE, not per-button — see field-stepper-pill-button's `rounded` for the exact rule. Do not read this as `{rounded.full}` on each button independently; that reading is what produced two circles with a visible gap instead of one capsule, and is the wrong interpretation."
    paintedSize: "TWO explicitly different values by breakpoint, not one shared spec — 24px per button at `mobile:` (≥520px) and up, 32px below it. Expanded capsule totals measure 49px (24+1+24) desktop and 65px (32+1+32) mobile."
    hitAreaSize: "matches painted width (24px/32px) × the input's own height at that breakpoint (44px desktop / 48px mobile) — height-only growth via padding, see field-stepper-pill-button"
    insetFromInputEdge: "8px, unchanged across both breakpoints"
  field-stepper-pill-button:
    backgroundColor: "{colors.surface-4}"
    iconColor: "{colors.ink-muted}"
    rounded: "PER-SIDE, state-dependent — NOT `rounded-full` on both buttons at all times. `-` is permanently rounded on its LEFT side only (`rounded-l-full`), square on the right, because it never appears without `+` beside it. `+` is a FULL circle (`rounded-full`, all four corners) whenever it is alone (empty/zero field value), and switches to right-side-only rounding (`rounded-r-full`, square left) the instant `-` mounts beside it — toggled in JS alongside `+`'s other state classes. The two chips sit with zero layout gap (`flex` row, no `gap-*`), so with square inner edges the pair reads as one continuous capsule split only by the 1px divider; if both buttons ever go back to `rounded-full` at all times, the outer curves separate visually and the capsule breaks into two circles with a false 'gap' — this exact regression already shipped once."
    paintedSize: "24px at `mobile:` (≥520px) and up, 32px below it"
    hitAreaSize: "matches painted width × the input's height at that breakpoint — 24×44 desktop, 32×48 mobile (transparent `py-2.5`/`py-2` padding — desktop/mobile respectively — on the outer button; the fill/rounding live on an inner span, never on the padded hit box itself). The padding pair is the SAME on both sides of the breakpoint because the chip and the input each grew by 4px on mobile in the same change: 24+10+10=44 and 32+8+8=48. Change either the chip size or the input height alone and this padding has to be recomputed."
    iconSize: "12px glyph at 1.5px stroke — deliberately NOT scaled with the chip. It stayed 12px across the 24px and 28px chip generations and stays 12px at 32px; the chip-to-glyph ratio is therefore not constant (0.50 at 24px, 0.375 at 32px). Flagged as an open question rather than silently changed — if the glyph should scale on mobile, that is a separate decision."
    contrastVsIcon: "7.32:1"
  field-stepper-pill-button-hover:
    backgroundColor: "{colors.hairline-tertiary}"
    iconColor: "{colors.ink-muted}"
    contrastVsIcon: "5.02:1"
    scope: "desktop/hover-capable only — Tailwind's `hover:`/`group-hover:` variants already compile to `@media (hover: hover) { &:hover }` by default in this Tailwind version, confirmed from the installed package"
  field-stepper-pill-button-pressed:
    backgroundColor: "{colors.ink-tertiary}"
    iconColor: "{colors.ink-muted}"
    contrastVsIcon: "3.67:1"
    scope: "desktop/hover-capable only, but NOT free the way hover is — Tailwind's `active:`/`group-active:` compile to plain `&:active` with no media scoping, so pressed is wrapped explicitly: `[@media(hover:hover)]:group-active:`"
  field-stepper-pill-button-disabled:
    iconColor: "{colors.ink-tertiary}"
    backgroundColor: "{colors.surface-4} — unchanged; only the icon color and cursor change, since a real `disabled` button never matches `:hover`/`:active` in any browser"
  field-stepper-pill-divider:
    backgroundColor: "#ffffff — literal white, not a surface token. It reads as a cut through the pill exposing the input beneath, not a themed surface, so it does not follow the surface ladder"
    size: "1px wide, full painted chip height at each breakpoint (24px at `mobile:` and up, 32px below it), no padding or inset — matched exactly, confirmed by measurement, so the seam never falls short of or overshoots the capsule's top/bottom edge"
    stateBehavior: "always white, including against a hovered/pressed (darkened) neighbor half — intentional, do not tint it to match"
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
- **Primary Soft** (`{colors.primary-soft}` #DCEEE4): **Currently unused — no consumers.** It previously tinted selected element tiles and, before that, the calculated-result field; both now signal state without a fill (see `element-tile-selected` and the Don't about the read-only signal below). It was also briefly the element tile's **+** hover fill, which was reverted so both stepper buttons hover identically. Retained as a token for a future selected-surface need — text on top would use `{colors.primary-pressed}`, never white.

### Surface
- **Canvas** (`{colors.canvas}` #FAF9F5): Page background. Warm off-white, not pure white — the warmth is deliberate and should read as "slightly less clinical," not visibly tinted.
- **Surface 1** (`{colors.surface-1}` #ffffff): One step above canvas — the calculator card, element tiles, input field interiors.
- **Surface 2** (`{colors.surface-2}` #F5F3EE): Two steps — the input and result field containers, the Browse Elements panel.
- **Surface 3** (`{colors.surface-3}` #EFEDE7): Three steps — currently unused since the "···" overflow reveal panel it backed was removed (all units now render inline). Reserved.
- **Surface 4** (`{colors.surface-4}` #E8E6DF): Four steps — deepest lift. Backs the element tile's symbol chip (`element-tile-symbol`) and the hover fill on the tile's stepper buttons (`element-tile-stepper-button-hover`). These are its only consumers. Both sit *inside* a `{colors.surface-1}` tile, so here the step reads as a recess against white rather than a lift — this is the one place the ladder inverts, and it is intentional: the symbol chip and the hover fill are insets within a card, not cards of their own.
- **Hairline** (`{colors.hairline}` #E5E2DA): Default 0.5px borders on cards, inputs, and dividers.
- **Hairline Strong** (`{colors.hairline-strong}` #D3CFC3): Emphasized dividers. It was tried as the element tile's hover border and replaced — against `{colors.hairline}` on a 1px border it was too quiet to register as feedback.
- **Hairline Tertiary** (`{colors.hairline-tertiary}` #C4C0B2): Nested/tertiary borders inside the element grid, and the **hover border on an unselected element tile**. Two neutral steps up from `{colors.hairline}`, which is what it takes for a 1px border change to read as "this responds". Still unambiguously neutral, so the chromatic/neutral split against `{colors.primary}` remains the signal that separates hover from selected.

### Text
- **Ink** (`{colors.ink}` #14140F): Headlines, input values, primary numbers. Near-black.
- **Ink Muted** (`{colors.ink-muted}` #4A4842): Body copy, secondary values, field labels, inactive pill and toggle text.
- **Ink Subtle** (`{colors.ink-subtle}` #7A776D): Captions, breadcrumb, and the atomic mass line inside an element tile. **4.48:1 on `{colors.surface-1}` white — marginally under the 4.5:1 WCAG AA threshold for normal text.** Acceptable for the mass line because it is a secondary value repeated beside a full-contrast name, but do not extend it to anything a user must read to act.
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
- The element grid inside Browse Elements is **not** a fixed column count, and it is **not** `1fr`. Column count and width are computed in JS against the measured container width (`layoutElementGrid()`, re-run by a `ResizeObserver` **on the scroll wrapper**), so both always resolve to **whole pixels**:
  1. `W = floor(wrapper border box − its own border and padding) − reserve`, clamped to the wrapper's `clientWidth`. See "The scrollbar reserve" below for why the border box and not `clientWidth`.
  2. `n = floor((W + minGap) / (target + minGap))`, target **244px**, minGap 8px.
  3. Reduce `n` while a column would fall below the 222px truncation floor.
  4. Search `colW` **downward in steps of 4** from the largest 4pt-aligned candidate for the largest pair where `colW` and `gap` are **both multiples of 4**, `gap ≥ minGap`, and `n·colW + (n−1)·gap = W` exactly.
  5. If no such pair exists, **fall back to integer-exact**: walk `colW` down by 1 until the leftover divides evenly across the `n−1` gaps. **The slack lands in the gaps; the columns stay uniform integers.**
- The grid's `width` is then **set explicitly** to `W`. It is not left to stretch, so the result is the computed value rather than whatever the parent happens to offer once a scrollbar appears.
- At desktop the grid is **760px**, giving **3 × 248px with an 8px gap** — `3 × 248 + 2 × 8 = 760` exactly, remainder 0, and every one of 760, 248 and 8 is divisible by 4. Verified identical in **headed** Chromium, headless Chromium **and** Firefox at both 1280 and 1920. (These numbers moved from the previously-documented 756 / 244 / 12 when `card-calculator` and `panel-browse-elements`'s borders converted to `box-shadow: inset` — a border consumes 2px of box-model width per side that it outlines, an inset box-shadow consumes none, so removing 4px of border across those two ancestors freed 4px for this grid. The column algorithm is a live `getBoundingClientRect()` measurement re-run by a `ResizeObserver`, not a hardcoded constant, so it re-solved for a different — still valid, still 4pt-aligned — column/gap pair on its own. See "What 760 depends on" below.)

#### The scrollbar reserve

This was a live layout bug, not a theoretical one. The wrapper is `overflow-y: auto`, and **Chrome and Edge reserve a classic 15px scrollbar** — measured at 15px, and still 15px at 125% and 150% display scaling, verified in a real browser. The old algorithm read the wrapper's `clientWidth`, which the scrollbar shrinks: 772 → 757, minus the then-present `pr-0.5` → **755**, and `floor((755 + 8) / 258) = 2`. **Desktop Chrome and Edge were rendering the grid at 2 columns instead of 3.** Firefox kept 3 because its scrollbar took no width.

The fix is to stop reading a scrollbar-dependent measurement:

- **Available width comes from the wrapper's border box**, minus the wrapper's own border and padding. That number is identical whether the scrollbar is classic, overlay, or absent.
- **`SCROLLBAR_RESERVE = 16`**, subtracted so the columns never sit under the scrollbar. 16 rather than 15 because it is 4pt-aligned and the whole point is a 4pt-clean chain.
- **`RESERVE_MIN_VIEWPORT = 520`** — the reserve applies only at the mobile breakpoint and above. Below it, browsers use overlay scrollbars, so a reserve buys nothing and costs real tile width, which is scarcest exactly there.
- The result is clamped to the wrapper's real `clientWidth` as a safety net. This matters because a *desktop* window narrowed **below** 520 still has a classic scrollbar while the reserve is switched off; without the clamp the pinned grid overflows its content box by exactly the scrollbar's width, and the panel grows a horizontal scrollbar. Measured before the clamp: at a 375 viewport in headed Chromium the wrapper's `scrollWidth − clientWidth` was **+15**. With it, 0 at every viewport in every engine.

> **16px leaves only 1px of clearance over the measured 15px scrollbar.** A platform whose scrollbar is wider than 16px would exceed the reserve. The clamp absorbs that by narrowing the grid — the symptom would be columns one step narrower than intended, not a horizontal scrollbar. Remove the clamp and the symptom becomes a horizontal scrollbar inside the panel; that is the thing to look for.

Two dead ends, recorded so they are not retried:

- `scrollbar-gutter: stable` does **not** solve it: measured in Firefox it reserves nothing at all (that build computes `scrollbar-width` to `none`), so the gutter is 0 there and non-zero in Chromium — the opposite of stable.
- Pinning the width with `::-webkit-scrollbar { width: 8px }` does **not** solve it either: in Chromium, setting **either** standard property (`scrollbar-width` **or** `scrollbar-color`) to a non-`auto` value **disables `::-webkit-scrollbar` sizing entirely**. Measured: webkit-8px + `scrollbar-width: thin` → 10px; webkit-8px + `scrollbar-color` → 15px; webkit-8px alone → 8px. Styling the thumb and pinning the width are mutually exclusive in Chromium.

Hiding the scrollbar outright was tried and **rejected**: with it hidden there is no cue that the list continues below (320px visible of a 1252px scroll height). **The scroll affordance question is closed — the native scrollbar is the affordance.** It is left at its default native appearance; styling it is a separate decision that has not been made, and per the point above, styling it in Chromium forfeits control of its width.

> **Headless Chromium uses overlay scrollbars and reports 0px, which hid this bug completely — twice.** Any measurement of this container taken headless is not evidence about Chrome or Edge. Always cross-check headed.

Scrolling verified in headed Chromium: wheel (0 → 240), Tab (focused tile scrolled into view, `scrollTop` 226), PageDown (226 → 506) and ArrowDown (506 → 546).

#### What 760 depends on

The deduction chain from `main` is: `896 − 32 (main px-4) − 0 (card edge, box-shadow:inset) − 48 (card p-6) − 0 (panel edge, box-shadow:inset) − 40 (panel-custom p-5) − 0 (wrapper padding) = 776` for the wrapper's border box, then `− 16 (scrollbar reserve) = 760` for the grid.

- **The card's edge and the browse-panel's edge no longer consume any of this chain.** Before the sitewide border → box-shadow conversion (see Elevation & Depth), both were a real 1px `border`, and two borders × 2 sides netted a clean 4px that happened to be 4pt-aligned — the chain below used to read `896 − 32 − 2 (card border) − 48 − 2 (panel border) − 40 − 0 = 772`, then `− 16 = 756`. `box-shadow: inset` paints inside the existing box instead of adding to it, so both terms dropped to 0 and the chain gained the 4px back: 772 → 776, and the grid's resolved width moved from 756 to **760**. The column algorithm re-solves from a live `getBoundingClientRect()` measurement (re-run by a `ResizeObserver`), not a hardcoded constant, so it found a new valid 4pt-aligned column/gap pair — **3 × 248px, 8px gap** — on its own; nothing in the JS changed. Verified empirically (headed/headless Chromium and Firefox, 1280 and 1920), not derived from this arithmetic alone.
- **The 375px viewport cannot be 4pt-aligned**, because 375 is itself odd and `main` is viewport-driven below the `max-w-4xl` cap. This is inherent to the viewport width, unaffected by the border → box-shadow conversion, and is not corrected. Below 520 the 4pt search is expected to take the fallback and there is no attempt to force it.
- **`1fr` is not acceptable here and must not be reintroduced.** It resolved to a fractional per-column remainder in the pre-conversion layout, and each column inherited a *different* sub-pixel remainder, so identical controls antialiased differently from column to column. The plus glyph's 1.5px vertical stroke measured a full **1px** apart between column 1 and columns 2–3. This is visible at normal viewing distance, not just under zoom; it was once dismissed as a low-priority sub-pixel artifact, and that call was wrong because it had been measured on a single tile rather than across columns. Always compare across columns.
- The 222px floor is set by the widest *selected* tile, not by taste. Measured empirically rather than derived: with "Molybdenum" (the longest name in the 63-element dataset) selected, the name begins to truncate once the column falls **to 222px or below**. The computed layout now delivers 248px, leaving **26px of headroom** (was 244px / 22px before the border → box-shadow conversion moved the resolved column width).
- **`GRID_MIN_COL` is non-binding at the 244 target and should stay anyway.** `GRID_TARGET_COL` is still 244 in the JS — a design intent, not a promise of what any given width resolves to — so this reasoning is unchanged by the conversion; only the *resolved* column width (248 now, was 244) moved. Because `n = floor((W + 8) / 252)` implies `W ≥ 252n − 8`, the largest candidate column is `floor((W − 8(n−1)) / n) ≥ 244`, which can never fall below 222 — so the `while` guard cannot fire at this target. It is kept as a documented safety net, and it still bounds how far the 4pt search may walk down. It is the real measured truncation threshold, and it becomes load-bearing again the moment the target is lowered below 222. Do not delete it because it looks unused, and do not raise it to match the target — those are two different numbers measuring two different things. The unselected tile needs far less, but sizing to that would make every tile truncate the moment it is selected, so the floor is set by the selected case. **The "narrowest multi-column result anywhere was 244" empirical claim predates the border → box-shadow conversion and was not re-swept across every breakpoint as part of this change** — only the desktop (1280/1920) figure above was directly re-measured. Tablet/mobile-lg column outcomes plausibly moved by the same ~4px this conversion added everywhere, but that is flagged here rather than asserted.
- Measure this by narrowing the column until `scrollWidth > clientWidth` on the name, not by summing the parts. The name span reports its *content* width whenever there is room to spare, so reading its rendered width tells you nothing about remaining headroom — that mistake made an 8px gain look like no gain at all.
- **4-up does not fit and cannot be made to fit by shrinking type.** At 4-up the panel yields 183px columns, of which the fixed furniture (chip, stepper, padding, gaps) consumes 152px, leaving **31px** for the name against the 85px it needs. Fitting "Molybdenum" into 31px requires roughly a 5.1px font — well under half the system's 12px floor. Even deleting the stepper's border and shrinking it to 60px only buys a 8.6px font. 4-up needs a grid about **924px** wide; this grid is **760px**. The 4-column mockup is drawn on a wider canvas than the app's actual panel and only ever shows "Hydrogen", which is 62px — comfortably inside a width that "Molybdenum" overruns by 23px. (These 183px/924px figures predate the conversion and were not re-measured — the conclusion "4-up does not fit" is unaffected by a 4px shift of this size, but the exact numbers are not re-verified.)
- If the column rule is ever revisited, measure against **"Molybdenum" with the stepper mounted**, not against "Hydrogen" and not against the unselected tile. Sizing to either of those is exactly the error that produced a 5-up, then a 3-up, then a 4-up estimate that each failed on contact with real content.

### Whitespace Philosophy
The warm canvas is the whitespace. Sections separate by lifting onto a surface, not by large gaps. Vertical rhythm inside the card stays at `{spacing.md}` 16px between blocks; the page keeps `{spacing.lg}` 24px between the breadcrumb and the card.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No edge, no shadow | Page background, breadcrumb, footer |
| 1 (card lift) | `{colors.surface-1}` on canvas, `box-shadow: inset 0 0 0 0.5px {colors.hairline}` | Calculator card, input interiors |
| 1 (card lift) | `{colors.surface-1}`, `box-shadow: inset 0 0 0 1px {colors.hairline}` | Element tiles and their steppers — 1px, not 0.5px, per the source design |
| 2 (nested lift) | `{colors.surface-2}`, `box-shadow: inset 0 0 0 0.5px {colors.hairline}` | Field containers, Browse Elements panel |
| 3 (sub-panel lift) | `{colors.surface-3}`, `box-shadow: inset 0 0 0 0.5px {colors.hairline}` | Reserved — currently unused |
| 4 (focus) | `box-shadow: inset 0 0 0 2px {colors.primary}` | Focused input |
| 4 (error) | `box-shadow: inset 0 0 0 2px {colors.error}` | Errored input |

**There are no drop shadows in this system.** Depth is carried entirely by the surface ladder plus hairline edges. If something needs to feel raised, it moves up a surface step — it does not gain a shadow.

**Every edge in this system is `box-shadow: inset`, not `border`.** This was a deliberate sitewide conversion — a real `border` was the original mechanism, but a border participates in box sizing (it adds to the element's rendered box), while an inset box-shadow paints inside the existing padding box and adds nothing to it. Focus and error still change both color (hairline → primary → error) and width (1px at rest, 2px on focus/error) exactly as before, but because the shadow contributes zero box-model pixels in any state, the width change no longer shifts anything else. An earlier build had to chase this same problem twice as a real *border*: once when focus alone changed width (0.5px → 2px) and shifted the input's content on every focus/blur, and again when a later 1px/2px resting/focus split reopened it — both times the fix was a compensating padding change, paired and inverted against the border delta so `border + padding` summed to a constant total. That compensation (11px/9px resting vs 10px/8px focus/error, see the retired text-input note in `git log`) is now **removed**, not extended: since box-shadow doesn't participate in box sizing in the first place, there is nothing for padding to compensate for, at any width. Padding is a single value per breakpoint in every state — see `text-input`. Verified with real computed-height measurements, not just arithmetic — see the Do below.

**One exception: `segmented-tab`/`segmented-tab-active` were deliberately left as a real `border-bottom`, not converted.** Every other border in the app outlines a *container* — a card, pill, panel, input, or tile — where box-shadow:inset is a clean substitute for an edge. The tab underline is different: it's a single-side state indicator co-located with the tab's own text, not a container boundary, and its two states already share one width (`border-bottom: 2px solid`, only the color toggles transparent ↔ `{colors.primary}`) — so it was never subject to the box-model-shift bug this conversion exists to fix, and converting it would only add risk (forced-colors visibility, position of the colored line relative to the text baseline) for no benefit. Flagged here rather than converted silently.

**Also left alone: the structural dividers.** `border-b`/`border-t` hairlines that separate stacked page regions rather than outline a container — the top-nav's bottom rule, the calculator card's internal header rule, the formula bar's top rule, the particle-count row's top rule (already called out below as the one intentional divider in the result block), the footer's top rule, and the mobile field-half divider — are layout dividers, not edges/outlines, and are out of scope for this conversion. They stay real `border-t`/`border-b`.

**Implementation: Tailwind's `inset-ring-*` utilities, not a hand-rolled `shadow-[inset_...]` class.** Tailwind v4 composes `inset-ring-*` into the element's `box-shadow` via its own `--tw-inset-ring-shadow` variable, alongside (not overwriting) `shadow-*` and `ring-*`'s variables — confirmed by inspecting the compiled CSS, not assumed. This matters concretely on `preset-select` and `element-search`: both already carry a focus `ring-1 ring-brand-green` (Tailwind's outset ring, a different box-shadow layer), and `inset-ring-1 inset-ring-hairline` → `focus:inset-ring-primary` composes with that ring cleanly. A hand-written `shadow-[inset_0_0_0_1px_...]` would instead have silently overwritten (or been overwritten by) the ring's own `box-shadow` declaration, since both would target the same CSS property directly with no shared variable to compose through. Width is `inset-ring-1`/`inset-ring-2`; color is `inset-ring-{hairline|hairline-tertiary|primary|error}`, reusing this file's existing color tokens (already wired into `@theme` in `global.css`, the same way `border-hairline` etc. worked before).

**Windows High Contrast Mode (`forced-colors: active`).** `box-shadow` is treated as decorative and computes to `none` in this mode; `border` is treated as structural and is preserved. Every element converted above would lose its visible edge here — and since forced-colors mode also collapses this app's surface ladder (canvas/surface-1/surface-2/etc. all resolve toward the same system background), the edge is doing double duty as the only remaining cue that a container boundary exists at all. **All of them needed the fallback; none were safe to skip.** `global.css` adds one rule, `[class*="inset-ring-"] { box-shadow: none; border: 1px solid CanvasText; }`, scoped to `@media (forced-colors: active)` only — a flat 1px `CanvasText` border regardless of which width/color state was active, since state no longer needs to reserve box-model space and there's nothing to gain from reproducing the 1px/2px distinction in a mode where colors are already system-controlled. The excluded elements (`segmented-tab`'s real `border-bottom`, and the structural dividers) need no fallback — they were never touched by the conversion, so forced-colors already renders their real border natively, same as before.

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
- Transparent background, text `{colors.ink-muted}`, `box-shadow: inset 0 0 0 0.5px {colors.hairline}`, same padding and radius.
- Hover state `pill-inactive-hover` fills to `{colors.surface-2}` and text darkens to `{colors.ink}`.

**`toggle-direction`** — The g→mol / mol→g mode switch in the card header. This is a distinct component, not a reuse of `pill-active`/`pill-inactive` — those toggle a single value (a unit); this toggles calculation direction and each segment always shows both units of that direction, joined by a chevron (e.g. "g › mol").
- Container: transparent, `box-shadow: inset 0 0 0 0.5px {colors.hairline}`, rounded `{rounded.pill}`, 4px padding, 4px gap between the two segments.
- `toggle-direction-segment-active`: background `{colors.primary}`, text `{colors.on-primary}`, padding 8px 12px, rounded `{rounded.pill}`.
- `toggle-direction-segment-inactive`: transparent background, text `{colors.ink-muted}`, same padding and radius.
- Icon: chevron-right, 16px box, between the two unit words. Its stroke inherits the segment's text color — white on the active segment, `{colors.ink-muted}` on the inactive one. It is not a separate color token.

### Tabs

**`segmented-tab`** + **`segmented-tab-active`** — Presets / Build custom inside the Browse Elements panel.
- Inactive: text `{colors.ink-subtle}`, transparent background, 2px transparent bottom border, padding 8px 4px.
- Active: text `{colors.primary}`, 2px `{colors.primary}` bottom border.

Tabs are underline-style, not pills. Pills signal "toggle a value"; tabs signal "switch a view." The distinction matters because both appear in the same panel.

**This is a real `border-bottom`, deliberately not converted to `box-shadow: inset`** as part of the sitewide border → box-shadow conversion. It's a single-side state indicator, not a container edge, and both its states already share one width (only the color toggles), so it was never exposed to the box-model-shift bug the conversion exists to fix — see the note under Elevation & Depth.

### Buttons

**`button-primary`** — Green pill. Used for "Use this molar mass."
- Background `{colors.primary}`, text `{colors.on-primary}`, padding 10px 20px, rounded `{rounded.pill}`.
- Pressed state darkens to `{colors.primary-pressed}`.

**`button-secondary`** — Outlined pill for secondary actions (Clear, Reset).
- Transparent background, text `{colors.ink}`, `box-shadow: inset 0 0 0 0.5px {colors.hairline}`.

**`button-icon`** — 32×32px circular utility button (collapse, close).
- Background `{colors.surface-2}`, icon `{colors.ink-subtle}`, `box-shadow: inset 0 0 0 0.5px {colors.hairline}`, rounded `{rounded.full}`.

**`button-copy`** — Bare icon button aligned with the result *value* row, vertically centered on the big number — not the label row above it. Figma's exact node position confirms this (the icon sits centered on the value line's height, not the label's). No background, no border, no fill, and no badge or lock icon beside it — see the read-only signal Don't below.
- Icon: copy/duplicate glyph, outline style, matching the app's existing stroke-based icon set (`stroke="currentColor"`).
- Empty state: `{colors.ink-tertiary}` #A8A498.
- Filled state: `{colors.ink-muted}` #4A4842.
- On click, copies the current result value (plain number, no unit label) to the clipboard. Disabled/non-interactive in the empty state, since there is nothing to copy.

### Cards & Panels

**`card-calculator`** — The outer card. Everything lives inside it.
- Background `{colors.surface-1}`, rounded `{rounded.xl}`, padding `{spacing.lg}`, `box-shadow: inset 0 0 0 0.5px {colors.hairline}`.

**`card-field`** — Two inputs share a single card, side by side. There is no gap and no divider between them — the split is entirely padding: 24px on the outer edges and top/bottom, 12px on the two sides facing the shared midline.
- Background `{colors.surface-2}`, rounded `{rounded.lg}`, `box-shadow: inset 0 0 0 0.5px {colors.hairline}`.
- The first slot is permanent: Molar Mass. It's an input in both calculation directions and never moves, never changes card. The second slot is role-assigned, not field-assigned — it holds whichever of Mass/Moles is currently the *input* for the active direction (Mass in g→mol, Moles in mol→g). Card membership follows input/output role, not field identity — don't hardcode "Molar Mass and Mass" as a fixed pair; the second field genuinely changes.

**`card-result`** — The calculated-output container.
- Background `{colors.surface-2}`, padding `{spacing.lg}`, otherwise identical to `card-field`. It no longer carries a green tint — see the read-only signal Don't below.
- Holds whichever of Mass/Moles is currently the *output* — Moles in g→mol, Mass in mol→g. Same role-assignment principle as `card-field`'s second slot: this card's content swaps with direction, its content is never fixed to one field.

**`trigger-browse-elements`** — The row above the result card that opens the Browse Elements panel.
- Chevron-right icon, rendered **6×10.5px** (glyph 4.5×9 inside it), rotates 90° when the panel is open. It sits inside a 20px-tall flex box — one `{typography.body-sm}` line box — which is what holds it against line one.
  - **The viewBox maps 1:1 to px, and that is what keeps the stroke at 1.5px.** To resize the chevron, edit the `viewBox` **and** the path together. Changing `width`/`height` alone rescales the user-unit grid, so the 1.5 stroke renders thinner in proportion and the icon goes weedy. It was reduced from 7.5×13.5 to 6×10.5 (−25%, same 1:2 proportion) with the stroke held at exactly 1.5px both before and after.
- "Not sure of the molar mass?" in `{colors.ink-muted}`; "Browse elements" in `{colors.ink}`, underlined.
- **The prompt and the link are one text flow, not two flex children.** The row is a two-child flex: the chevron box, then a single span holding the whole sentence with "Browse elements" as an **inline** span inside it. As two separate flex items each carried `flex-shrink: 1` and `min-width: auto`, so each shrank to its own min-content and wrapped independently — "Browse elements" broke onto its own second line, detached from the question it belongs to, and the row read as two ragged columns rather than one sentence. **Do not split the text back into sibling spans to style the link**; style it inline, or the independent-shrink behaviour returns.
- **The break point is fixed, not reflowed.** Both halves carry `whitespace-nowrap`, so the single space between them is the **only** soft-wrap opportunity in the row. The break can therefore land in exactly one place — after "Not sure of the molar mass?", before "Browse elements" — and the two lines are always those two complete phrases, never a mid-sentence break like "…the molar / mass?". Verified by reading back the rendered text of each line box at 240, 320, 375, 405 and 406.
  - **Do not implement this with a `<br>` or a block-level boundary.** Those break unconditionally, which would force two lines at desktop widths too. The row must stay a single line above the threshold, so the break has to remain conditional — `whitespace-nowrap` on both halves is what makes it conditional *and* fixed in position.
  - **Threshold: the row is one line from 408px up, two lines from 407 down.** This is an *outcome* of the content widths, the chevron and the gap — not a declared breakpoint, and there is no media query behind it. It shifts whenever any of those three change: it was 406 when the chevron was 7.5px wide and the gap 4px.
- **`text-left` is required, not decorative.** `<button>` carries `text-align: center` from the UA stylesheet and Tailwind preflight does not reset it. It is invisible while the row fits on one line and only appears once the text wraps, centring each line inside its own box. Both lines are flush left at the same x, measured, at every width from 240 to 1280.
- **The chevron is pinned to line one via `items-start`**, not centred against the block. With `items-center` it drifted to the vertical middle of a wrapped row — at 375 it sat 10px below the first line's centre, in the gutter between the two lines. Measured: the chevron's centre is level with line one's centre (**0px offset**) at 240, 320, 375, 405, 406, 519, 520, 768 and 1280, in both the open and closed states.
- **Gap `{spacing.xs}` 8px, and it is sized for the OPEN state, not the closed one.** Rotating the chevron 90° swaps its visual extent — the glyph becomes 10.5 wide inside a 6px layout box — so it overflows its own box by half the difference (2.25px) on each side and eats into the gap. Measured effective gap between glyph and text: **8px closed, 5.75px open**. At the old 7.5×13.5 glyph on a 4px gap this arithmetic left **1px** in the open state, and the downward-pointing tip read as joined to the "N" of "Not". **Any future change to the glyph size or the gap must be checked in the rotated state** — the closed state always looks fine and will not reveal the problem.
- **No touch-target floor.** This row has no `min-height` and no breakpoint-keyed padding; it renders at its natural **20px** on one line and **40px** on two, at every width. See Touch Targets.

**`panel-browse-elements`** — The expandable element/preset picker.
- Background `{colors.surface-2}`, rounded `{rounded.lg}`, padding `{spacing.md}`, `box-shadow: inset 0 0 0 0.5px {colors.hairline}`.

**`element-tile`** / **`element-tile-selected`** — Individual elements in the Build custom grid.

The tile is a **horizontal** row, not a centered stack. Left to right: symbol chip → name/mass block → stepper, with the stepper pushed to the right edge. Container is `{colors.surface-1}`, rounded `{rounded.md}`, `box-shadow: inset 0 0 0 1px {colors.hairline}`, `{spacing.xs}` padding, `{spacing.xs}` gap between the left group and the stepper, and a fixed 56px `min-height`.

- **`element-tile-symbol`** — a 32×32px chip, not bare bold text on the card. Background `{colors.surface-4}`, rounded `{rounded.xs}`, symbol centered in `{typography.element-symbol}` / `{colors.ink}`.
  - **Never apply `text-transform: uppercase` to the symbol.** The source design marks it uppercase, but only ever renders `H` — a single-letter symbol where the transform is invisible. Applied to the real dataset it produces `HE`, `NA`, `MG`, which are not chemical symbols; the case of the second letter is meaningful notation, not styling. Symbols render exactly as stored.
- **Name + mass** — stacked, **left-aligned**, 4px gap, immediately right of the chip at `{spacing.sm}` 12px. Name in `{typography.element-name}` / `{colors.ink}`; atomic mass in `{typography.element-mass}` / `{colors.ink-subtle}` #7A776D. The mass sits a step back from the name deliberately — the name is what you scan for, the mass is confirmation. Note `ink-subtle` is 4.48:1 on white, just under WCAG AA for normal text; see the colour entry. The name truncates with an ellipsis rather than wrapping or pushing the stepper out of the tile; at the documented column widths it does not truncate for any element in the dataset.
- **`element-tile-stepper`** — a bare flex row at the right edge, present only while selected. **No container border, no background, no padding, no radius.** The − / count / + sit directly on the tile. Gap `{spacing.xxs}` 4px. Count in `{typography.element-count}` / `{colors.ink}`. Renders **68 / 76 / 84px** at 1 / 2 / 3 digits. The count's size is independent of the buttons' — the buttons came down 28px → 24px without touching it.
  - The 4px gap is doing work the container used to. While the stepper was boxed, a 2px gap was legible because the border corralled the three controls; freestanding, that same 2px reads as cramped. **If the container ever comes back, the gap should tighten again** — the two decisions are coupled, not independent.
  - **The count span has a fixed width per digit count — 12 / 20 / 28px at 1 / 2 / 3 digits — and this is load-bearing, not cosmetic.** It is set from `String(qty).length` when the count is written, capped at the 3-digit width. Each value is a multiple of 4 and clears the 8.4px monospace advance per digit (8.4 / 16.8 / 25.2 of text).
  - **Do not revert it to `min-width` with content sizing above it.** A content-sized count measures 12.00 / **16.81** / **25.20**, so above nine it is fractional — and it sits *in front of* the **+** button, putting + at a fractional x. That is the exact condition that produced the original plus-glyph subpixel defect, and it would reappear silently at quantity 10 with nothing in the markup to hint at why. The fixed widths are what keep + on a whole pixel at every quantity; the scale-1 glyph geometry below only holds because of them.
  - **Above 999 the digits overflow the box rather than widening it.** Quantity is uncapped (+ has no ceiling), so four digits is reachable by clicking. At 1000 the 33.6px of text overflows the 28px span by 6px total, 3px each side, spilling into the 4px gaps without reaching either button; the stepper stays 84px and + stays whole-pixel. This is a deliberate trade — layout stability over a legible 4-digit count — on the grounds that a 4-digit subscript is not a real formula. If it ever needs to read correctly, add a 4-digit width (36px) rather than restoring content sizing.
- **Hover (unselected only)**: edge color shifts from `{colors.hairline}` to `{colors.hairline-tertiary}`. No fill, no drop shadow, width stays 1px so nothing reflows — it's a `box-shadow: inset` color swap, not a width change, so this was already reflow-free even before the border → box-shadow conversion. It signals "clickable", not "selected" — which is why it is neutral rather than a lighter green. Three edge states coexist and stay distinguishable: `hairline` #E5E2DA resting → `hairline-tertiary` #C4C0B2 hover → `primary` #02613E selected. The first two differ by value, the third by hue.
- **Selected**: edge only. The background stays `{colors.surface-1}` and the edge changes to `box-shadow: inset 0 0 0 1px {colors.primary}`. Nothing else moves — no fill, no text-color shift.
- The hover edge applies to **unselected tiles only**. A hover variant outranks the resting edge-color class, so if it is left active on a selected tile it will grey out the green edge on hover — mount and unmount it with the selected state, don't declare it once and forget it.

The selected state is carried by the edge alone. This is a deliberate lightening: the previous `{colors.primary-soft}` fill plus recolored text was too heavy for a control that can appear 63 times at once on screen, and it competed with the result value for the eye's attention. Green stays scarce.

The stepper **appears on selection** and unmounts on deselection. It is therefore a second, redundant signal alongside the edge — an unselected tile is distinguishable both by its hairline edge and by having no stepper at all.

**`element-tile-stepper-button`** — the − and + controls.
- 24×24px box, rounded `{rounded.xxs}`, transparent at rest, holding a 20×20px icon box with a **14px** stroke glyph (1.5px stroke, round caps) in `{colors.ink-muted}`.
- **The glyph is 14 × 14 with `viewBox="0 0 14 14"`, so the scale is exactly 1** and one user unit is one CSS pixel. That is the whole point of the number: 14 divides both containers evenly, so the SVG box lands on whole pixels in each — `(20 − 14) / 2 = 3` in the 20px spacer span and `(24 − 14) / 2 = 5` in the 24px circle. Measured offsets are exactly `[3, 3]` and `[5, 5]` at 1280 and 375. **Do not "restore" a fractional size such as 13.3.** At scale 1 the `stroke-width` is written as the number you actually want — **1.5** — with no compensation factor, because there is no scale to compensate for.
- **Both glyphs share one square `viewBox` (`0 0 14 14`) and one rendered box (14 × 14).** The minus path (`M1 7H13`) is literally the plus's horizontal arm (`M7 1V13M1 7H13`), so the two centre identically by construction rather than by coincidence. Neither needs `overflow: visible`: the round caps overshoot each end by half the stroke, putting the painted extent at 0.25–13.75, inside the 14px box. Verified by pixel diff — forcing `overflow: visible` produces byte-identical renders of both glyphs.
- **The 1.5px stroke is deliberately soft, and that is not a defect to fix.** Centred on a whole pixel it spans 9.25–10.75 and straddles two device pixels, so it antialiases rather than snapping crisp. The goal here is symmetry between the two glyphs and consistency across tiles, not a crisp edge. **Do not chase crispness** by adjusting the stroke width, nudging path coordinates, or adding translate offsets — every one of those breaks the symmetry that the shared geometry buys.
- **Glyph centring is a layout property, not an icon property.** The per-column inconsistency that once made the **+** look off-centre came from fractional `1fr` columns, and is fixed by the integer-column algorithm under Grid & Container — not by touching the icons. With the scale-1 geometry the plus ink offset measures exactly `[0, 0]` in the first, middle and last column of a row (it was a constant `[−0.35, −0.35]` under the old 13.3 box). Do not "fix" a residual by nudging one glyph: the measurements show no asymmetry between + and −, so a nudge would create one.
- **Never give the minus a viewBox sized to its own ink** (e.g. `0 0 14 1.5`). An SVG root clips to its viewBox, so a 1.5-unit-tall box crops the stroke while the plus renders at full width — the minus then looks thinner than the plus and the pair reads as misaligned. This shipped once and was not obvious from the markup; it is only visible by measuring the rendered stroke.
- Hover fills a **circle** (`border-radius: 50%`) behind the glyph, sized to the same 24px box, in `{colors.surface-4}` #E8E6DF. The icon color does not change.
- **Both buttons hover identically** — same fill, same shape, same size. The only difference between them is the glyph. A green `{colors.primary-soft}` tint on **+** was tried and reverted: an asymmetric hover on a two-button pair reads as one control being special rather than as two halves of the same stepper, and "increment" is not a state the accent is meant to mark. `{colors.surface-3}` and `{colors.hairline-strong}` were also considered and rejected — the former too weak against white, the latter too heavy, and `hairline-strong` now has a different job as the tile's hover *border*.
- 50% is used literally rather than a radius token. `{rounded.pill}`/`{rounded.full}` (9999px) would render identically on a square box, but the intent here is "circle", not "pill", and the distinction matters if the box ever stops being square.
- The rest state reserves the hover box's full 24×24 footprint, so hovering fills a background that is already there and never shifts the stepper's layout.

**Selection model.** The stepper is **not** rendered until the tile is selected. There is no state in which a stepper is visible on a tile that is not in the formula, so "shows a count" and "is in the formula" are the same condition:

- An unselected tile shows the symbol chip, name, and mass only — no stepper, no green edge, no fill change.
- Clicking the tile body **is** the select action: it mounts the stepper at a count of 1, applies the selected edge, and adds the element to the formula.
- Clicking **+** increments. It is only reachable on a selected tile, since the stepper does not exist otherwise.
- Clicking **−** at a count of 1 deselects: the stepper unmounts, the tile returns to its default appearance, and the element leaves the formula. This is cart behavior — decrementing the last unit removes the line item. There is no separate remove affordance.
- Clicking **−** at 2 or above decrements and stays selected.

Because the count only ever renders on a selected tile, it is always a live quantity. **Do not `aria-hidden` it** and do not ship a `disabled` − : an earlier revision needed both because the tile displayed a resting "1" while unselected, and that state no longer exists. Likewise, never mark the stepper container `aria-disabled` — it silently disables + along with −, which is wrong for assistive tech and makes the button non-actionable for automation.

The tile holds a fixed **52px** `min-height`, so mounting the stepper does not change the tile's height or reflow its grid row. As of the 24px stepper buttons and the unboxed stepper, the tile's *natural* height is 52px in **both** states — the selected and unselected cases converged, so the min-height is currently sitting exactly at natural height rather than above it. It still guards against content shrinking, but it no longer provides headroom: anything that makes the selected state taller than 52px will grow the row. Re-measure both natural heights before changing the chip size, the button size, or the tile's padding.

Selected state is carried by **`aria-current="true"`** on the tile body, present only while selected and removed otherwise — the green edge is not a signal a screen reader can see.

**Do not use `aria-pressed` here, and do not "fix" the tile to justify it.** `aria-pressed` declares a toggle button: repeated activation is expected to alternate state. The tile body's behavior is one-directional — clicking it only ever selects, and the *only* way back out is the stepper's − at a count of 1 (the cart pattern above). `aria-pressed="true"` on a control that never un-presses on re-activation misdescribes the interaction to anyone navigating by assistive tech. `aria-current` states "this is in the current selection" without promising togglability, which is what the tile actually offers. The page's other `aria-current` uses carry the value `page` inside navigation landmarks; the grid's use of `true` is a separate set and does not collide with them.

### Inputs & Validation

**`text-input`** — Molar mass and mass fields.
- Background `{colors.surface-1}`, value in `{typography.input-value}` (DM Mono), rounded `{rounded.md}`, left padding 12px, `box-shadow: inset 0 0 0 1px {colors.hairline}` at rest. Vertical padding is a single value per breakpoint — 12px below 520px / 10px at `mobile:` and up — identical in every state. See `text-input`'s `padding`/`height` entries above for the exact numbers and the Do below for why no state-based split is needed.
- Trailing chevron-selector-vertical icon, 24px box (two 10×6px chevrons stacked), right-aligned. It is a functional stepper, not decorative: the up chevron is always active (`{colors.ink-muted}`); the down chevron mutes to `{colors.ink-tertiary}` and disables once the value is at its floor (0 for all three fields), active (`{colors.ink-muted}`) otherwise. Each field steps by 1 (whole numbers).

**`text-input-focused`** — Edge color changes to `{colors.primary}` and width steps from the 1px resting shadow to 2px. Padding does not change — `box-shadow: inset` paints inside the padding box rather than adding to it, so the width step never touches the field's total height.

**`text-input-error`** — Edge color changes to `{colors.error}`, same 1px→2px width step as focus, same non-event for padding and height. Paired with an `error-message` directly below the field.

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
- Signal "selected" with a `{colors.primary}` edge (`box-shadow: inset`) and nothing else. No tint, no recolored text, no adjacent badge.
- Every edge in the system is `box-shadow: inset`, not `border` — see Elevation & Depth. This means a state that changes edge width (`text-input`'s 1px→2px on focus/error) never needs a compensating padding change: box-shadow doesn't participate in box sizing, so there is nothing for padding to offset. Don't reintroduce a padding trade "to be safe" — it isn't needed, and re-adding one would just make the box taller than its neighbors. The one deliberate exception is `segmented-tab`'s underline, which stayed a real `border-bottom` — see the note under Elevation & Depth for why.
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
- **Don't add a real `border` back to any element documented here as `box-shadow: inset`.** This shipped as a real defect twice while `text-input`'s edge was still a `border`: once when focus alone changed width (0.5px → 2px) with nothing offsetting it, and once when a later 1px/2px resting/focus split reopened the same shift with nothing offsetting it either — both times because a real border's width adds directly to the box. Reintroducing `border` on any of these elements (even at a fixed width, even "just for one state") brings that box-model coupling back with it. If an element genuinely needs a real border again — e.g. because a forced-colors concern turns out to need more than the sitewide `[class*="inset-ring-"]` fallback in `global.css` — treat that as a fresh decision requiring its own padding math, not a quick swap back.
- Don't add a divider between a field's input/value block and its unit-pill row, or between the Molar Mass/Mass/Moles blocks and their pills. A plain 16px gap is correct there; the only intentional divider in the result block is above the particle-count row.
- Don't fix `card-field`'s second slot or `card-result`'s content to a specific field (e.g. "Mass is always the input, Moles is always the result"). Both cards are role-assigned and swap contents with the direction toggle — hardcoding by field identity instead of role is exactly the bug that shipped once already.

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Desktop | ≥ 1024px | The two current inputs side by side; element grid 3-up |
| Tablet | 768 – 1023px | Same two-column field layout; element grid 2-up |
| Mobile-Lg | 520 – 767px | Fields still side by side; element grid 1–2-up |
| Mobile | < 520px | The two current inputs stack to one column; element grid 1-up; page title scales 24px → 20px |

The element grid's column counts above are *observed outcomes* of the computed integer-column algorithm at each width, not breakpoints the grid itself declares. It has no media queries. The whole-pixel requirement applies at every column count, not just at desktop.

### Touch Targets
All interactive controls hold a minimum 44×44px tap target on touch viewports. This is a hard requirement, not a guideline — it was a defect in an earlier build. State the touch padding explicitly per control; do not leave it to inherit from desktop.
- Pills and `toggle-direction` segments: 8px vertical / 12px horizontal padding on desktop (~32px effective height). On touch, padding increases explicitly to 14px vertical / 16px horizontal to clear 44px — this is not automatic from the desktop values.
- The three direct-input number fields (Molar Mass / Mass / Moles) render at **44px at `mobile:` (≥520px) and up, 48px below it** — two explicitly different heights by breakpoint, not one shared value. Composition is line-height 24px + vertical padding + 2px border top and bottom; there is no `height` declaration anywhere, so **vertical padding is the only lever** (`py-2.5` = 10px below 520px → 48px; `mobile:py-2` = 8px at/above → 44px). An earlier version of this line claimed "40px on desktop; 44px on touch" — that was never true in the built app; both were measured at 44px before the mobile bump.
- Element tiles hold ≥44px on all viewports.
- Quantity steppers (− / +) in Build custom paint a 24×24px box at every viewport. The hit area and the painted box are deliberately separate: the `<button>` is a transparent wrapper around a 24×24 inner span that carries the radius and the hover fill. On desktop the wrapper adds no padding (24×24 total); on touch it adds **10px** on all sides, giving a 44×44px target while the painted box stays 24×24. The control looks identical at both widths — only the wrapper's padding changes, which is why the fill must live on the inner span and never on the button itself. Shrinking the visual size is always paid for by growing the wrapper's padding, never by letting the target shrink with it.
  - **The switch is keyed to the project's own `mobile` breakpoint (520px, `--breakpoint-mobile`), not Tailwind's stock `md` (768px)** — the utility is `p-2.5 mobile:p-0`, and it compiles into the same `@media (width >= 520px)` block as the `.field-row` direction switch. It previously used `md:p-0`, which left the stepper rendering phone-sized 44px targets across 520–767px while the rest of the layout was already in its desktop form. Measured: padding 10px and a 44×44 wrapper at **519**, 0px and 24×24 at **520**; stepper 108px → 68px; tile height 62px → 52px.
  - **Some of the app's touch targets still key off `md` (768px)** — the `min-h-[44px] md:min-h-0` pattern on unit pills and preset buttons was left alone as out of scope. The project therefore currently has **two** touch-target breakpoints. Aligning them is an open item; if it is done, the stepper is already on the correct one.
    - **`trigger-browse-elements` is not one of them, and has no floor at all.** An earlier version of this line listed "browse-trigger buttons" alongside the pills and presets, which implied the trigger carried a 44px floor keyed to `md`. It never has. It has no touch-target class — no `min-h-[44px]`, no breakpoint-keyed padding — and renders at its natural **20px** on one line, **40px** on two, at every viewport from 240 to 1280. A `py-3 mobile:py-0` floor was briefly added and then deliberately reverted; the row is a text link in behaviour, and the 44px rule was judged not to apply to it. **This is a known, accepted exception** — if it is revisited, it is a fresh decision, not a re-key of something that already exists.
- `button-copy`: 44×44px hit area at all viewports, not just touch — the icon itself stays small (16px) inside it.
- **`field-stepper-pill`** (Molar Mass / Mass / Moles direct-input steppers) — replaces the old `text-input` chevron stepper, which shipped at ~16×24px (two 16×12px chevrons) as a deliberate under-44px exception. Real usage data ("taps sometimes land wrong or require multiple attempts") came in against that exception, so this closes it out rather than extending it — see the retired entry's replacement note under Known Gaps. Restyled twice since: once against measured Figma values after an initial pass over-borrowed `element-tile-stepper`'s outlined-pill look (see field-stepper-pill-button-hover/-pressed below for the corrected per-button fill), and once to correct the outer shape after `rounded-full` was applied to both buttons independently — see the next bullet for why that was wrong and what replaced it.
  - **Shape is one capsule, not two circles — rounding is per-side, not per-button, and the empty state is a deliberate exception to that rule.** Read this bullet before touching the radius classes; "fully rounded corners" is exactly the ambiguous phrasing that produced the earlier regression, so it is not used here.
    - **"−" is *always* rounded on its left side only** (`rounded-l-full`, right corners square) — it never exists on screen without "+" immediately beside it, so it has no state where full rounding would ever be correct.
    - **"+" is a FULL circle (all four corners rounded) only while it is alone** — the empty/zero-value state. The instant "−" mounts beside it, "+" switches to right-side-only rounding (`rounded-r-full`, left corners square), toggled in `updateStepperState()` alongside its other state classes. Do not "normalize" "+" to one shape across both states — the shape difference between its two states is intentional, not an inconsistency to clean up.
    - **The two chips carry zero layout gap** (`flex` row, no `gap-*` utility) and sit flush against the 1px white divider — measured gap between the down-chip's right edge and the up-chip's left edge is **exactly 1.00px**, i.e. precisely the divider's own width and nothing more. With both chips' inner edges square (not rounded) and zero gap, the pair's outer silhouette reads as one continuous capsule, radius-matched to what a single pill of that height would have — confirmed by measuring the outer corners (down-chip's left pair, up-chip's right pair) against the chip's own half-height. **If both buttons ever go back to unconditional `rounded-full`, the outer curves separate visually and produce a false "gap" between two circles — this exact defect already shipped once and must not recur.**
  - **Painted vs. hit area are deliberately different, same pattern as `element-tile-stepper-button` — and both are responsive.** Each chip paints at **24×24px at `mobile:` (≥520px) and up, 32×32px below it** (the desktop size matches Figma; the mobile size uses the same responsive-touch-target philosophy as `element-tile-stepper-button`'s own `mobile:` keying). The tappable `<button>` around each chip is transparent and taller than its paint — **44px tall on desktop, 48px on mobile**, matching the input's own height at that breakpoint, hit-width matching the chip's own painted width — via `py-2.5` (desktop) / `py-2` (mobile) padding on the outer button only; the fill, radius, and icon live on an inner span that stays at its breakpoint's painted size regardless. Height-only growth, not width: widening the hit box horizontally would grow the capsule itself, which the inset/width budget below doesn't have room for.
    - **The padding pair did not change when the mobile chip went 28→32 and the mobile input went 44→48**, because both grew by the same 4px in the same change: 24+10+10 = 44 (desktop), 32+8+8 = 48 (mobile). That coincidence is load-bearing — change the chip size or the input height *independently* and the padding must be recomputed, or the hit area stops matching the input box.
  - **Fill is per-button, not a shared pill background** — the capsule look comes from two same-color chips forming one silhouette (see the shape bullet above), not from a separate pill-shaped background element; there is **no border in any state**. States, confirmed against the resolved `global.css` tokens (all four token names matched their Figma hexes exactly — `surface-4` #E8E6DF, `hairline-tertiary` #C4C0B2, `ink-tertiary` #A8A498, `ink-muted` #4A4842 — no divergence found):
    | State | Fill | Icon-vs-fill contrast |
    |---|---|---|
    | default | `{colors.surface-4}` #E8E6DF | **7.32:1** |
    | hover | `{colors.hairline-tertiary}` #C4C0B2 | **5.02:1** |
    | pressed | `{colors.ink-tertiary}` #A8A498 | **3.67:1** |
    | disabled ("−" at floor) | `{colors.surface-4}` (unchanged) | icon swaps to `{colors.ink-tertiary}` |

    All three are non-text/UI-component contrast (WCAG 1.4.11, 3:1 floor) — every state clears it, pressed by the smallest margin. Icon color itself never changes across default/hover/pressed, only the fill does; this was measured post-transition-settle (`transition-colors`, 150ms) — reading the color before the transition finishes returns an intermediate value, not the token. A hover/pressed fill renders as a **half-capsule** (rounded outer edge, square inner edge, matching whichever side that button already owns) — never a full circle or a plain rectangle — since the fill swap never touches the `rounded-*` class, only `background-color`.
  - **Hover and pressed are desktop/hover-capable-input only — confirmed via `window.matchMedia`, not assumed.** Tailwind's `hover:`/`group-hover:` variants in the installed Tailwind version already compile to `@media (hover: hover) { &:hover }` (confirmed by reading the shipped `tailwindcss` package's compiled variant table directly), so plain `group-hover:bg-hairline-tertiary` was sufficient for hover. `active:`/`group-active:` do **not** get that scoping by default — they compile to plain `&:active`, which real touch browsers can trigger — so pressed is wrapped explicitly: `[@media(hover:hover)]:group-active:bg-ink-tertiary`. Measured: mobile emulation (iPhone 13) reports `matchMedia('(hover: hover)')` **false** and a hover attempt leaves the chip's background byte-identical; desktop reports **true**, and both hover and a held mousedown visibly and correctly change the fill.
  - **Divider**: `#ffffff` literal white (not a surface token — it reads as a cut through the pill exposing the input beneath it, not a themed surface), 1px wide, full painted chip height at each breakpoint (24px at `mobile:` and up, 28px below it — measured equal at both, not approximated), no padding or inset. Stays white in every state, including when the button beside it is hovered or pressed — intentional, not a bug to fix.
  - **Empty/zero state is a single full circle (just "+"); a value greater than 0 expands it into the two-chip capsule.** The condition is `current > 0`, not "any non-empty input" — typing "0" explicitly still collapses to the "+"-only circle, because negative molar mass/mass/moles has no physical meaning and there is nothing to decrement at exactly 0. (A fractional value under 1, e.g. 0.5, does show the capsule, since it's a positive quantity — but "−" renders in its disabled/`ink-tertiary` icon style there too, since decrementing by 1 would go negative; that floor logic is unchanged from the original stepper.)
  - **"+" never moves — reconfirmed after the fill restyle, the shape correction, and the mobile size bump.** The capsule container is right-anchored (`right: 8px`, not `left`), width intrinsic to its visible children, "+" always the rightmost. Measured **0.00px shift** empty→expanded, on all three fields, mobile and desktop, after every pass — none of the sizing changes (40px circles → 24/28px → 24/32px chips; `pr-[92px]` → `pr-[64px]` → `pr-[72px]` → `pr-[80px]/mobile:pr-[72px]`) ever disturbed it, since it was never dependent on the specific pixel values, only on the right-anchor + intrinsic-width construction.
  - Step behavior is **+1 / −1, identical across all three fields** — pre-existing `stepInput()`/`step="1"` logic, untouched by any of the restyle or resize passes.
  - **Capsule inset 8px from the input's right edge** (`right-2`), unchanged across breakpoints. Expanded capsule width **measured at 49px at `mobile:` and up (24+1+24), 65px below it (32+1+32)**. Input `padding-right` is now **breakpoint-scoped rather than one shared value**: `pr-[80px]` below 520px (8 inset + 65 capsule + 7px clearance before typed digits) and `mobile:pr-[72px]` at/above it. The desktop figure is deliberately carried over unchanged from when a single unscoped `pr-[72px]` covered both — desktop only strictly needs 64px (8 + 49 + 7), so it keeps 8px of extra clearance rather than being re-tightened in a change that was scoped to mobile. Confirmed on a 12-character value (`123456.789012`) at both 258px (mobile) and 370px (desktop) input widths: `scrollWidth === clientWidth` in both cases — text never approaches the padding boundary, let alone the capsule, at any realistic length. Immediately outside the capsule's own left edge (still inside the reserved padding zone) a tap still resolves to the `<input>`, same structural situation as before — the fix is the target size, not architectural elimination of the shared box.
  - **Moles carries an inline `line-height: 1.2` from its result role**, which an inline style makes outrank the editable class's 24px. `setFieldRole()` clears it when the field flips back to the input role; without that clear, editable Moles renders ~4.8px shorter than Molar Mass and Mass (measured 39.19px against their 44px, pre-existing, fixed alongside the mobile height bump). If a fourth field is ever added to this rotation, it needs the same clear.

**Touch gesture handling is a separate concern from touch-target size, and is now covered too.** `global.css` sets `touch-action: manipulation` globally on `button, a` — a hard-target-size 44px hit box does nothing to stop the browser's double-tap-to-zoom gesture from swallowing the second tap of a rapid pair (e.g. holding the quantity stepper), since that's gesture arbitration, not hit-area math. This was a real, sitewide gap — nothing in the codebase set `touch-action` anywhere before this rule — not an intentional omission, so don't re-add per-element `touch-action` classes assuming the base case is uncovered. `select` is deliberately excluded from the rule; see the comment in `global.css` for why.

### Collapsing Strategy
- **Field row**: two columns → stacked single column below 520px
- **Element grid**: 3-up → 2-up → 1-up, via computed integer columns rather than declared breakpoints. The column never narrows below the 222px truncation floor; the column count drops instead.
- **Unit pills**: all units render inline at every width and wrap onto additional lines as needed — there is no reveal/overflow interaction.
- **Direction toggle**: stays in the card header at all widths; may wrap below the title under 520px

## Iteration Guide

1. Work on one component at a time and reference it by its `components:` token name.
2. When adding a container, decide its surface level first. That decision drives everything else.
3. Default text to `{typography.body-sm}` and numbers to `{typography.input-value}`.
4. Add new states as separate component entries (`-focused`, `-pressed`, `-error`, `-selected`).
5. Treat green as scarce. If it appears on a surface that is not active, focused, or a result, it has not earned the role. There are no exceptions — a tint on the **+** stepper button was tried and reverted, because "increment" is not a state the accent is meant to mark.
6. Any new numeric display inherits DM Mono automatically — this is not optional styling.

## Known Gaps

- Dark mode is not defined. The product ships light-only for now.
- Animation and transition timings are not specified; 150–200ms ease is a reasonable default for state changes.
- Success and warning semantic states are not defined, since the calculator has no success confirmation or warning condition. Add them only if a real use case appears.
- The explainer/theory section below the calculator has no component definitions yet — that section's design is deliberately deferred.
- `{colors.surface-3}` is defined but currently unused — it lost its only consumer when the "···" overflow reveal panel was removed. It exists as headroom, not as a mandate to find a use for it. (`{colors.surface-4}` is no longer in this list; the element tile's symbol chip and stepper hover fill now consume it.)
- `{colors.primary-soft}` is unused. It lost its last consumer when the element tile's selected state went border-only, briefly regained one as the **+** hover circle, and lost it again when both stepper buttons were matched. Kept as a token rather than deleted, since a selected-surface fill is a plausible future need — but do not reach for it to "balance" the tile's selected state, and do not reintroduce it on a single stepper button.
- **Closed: the old `text-input` chevron stepper's sub-44px exception.** It was flagged here as "revisit if usage data shows it's hard to hit on touch devices" — that data came in, and it was replaced by `field-stepper-pill` (24×24px desktop / 32×32px mobile painted buttons on a 44px-tall desktop / 48px-tall mobile hit area, see Touch Targets). Not extended, not re-scoped: the old component and its exception no longer exist.
- **Element tile names truncate on narrow phones. This is an accepted trade-off, not an open gap.**

  **Flag: not re-verified against the border → box-shadow conversion.** `card-calculator` and `panel-browse-elements` lost ~4px of border that used to eat into the width available to every descendant, including these narrow-viewport tiles (see "What 760 depends on" above, where the same chain moved the desktop grid from 756 to 760). The whole band below — the 375–415/375–395 thresholds, the 221px tile width, the 43px name budget — was measured before that conversion and was not re-swept afterward. The 4px gain plausibly nudges every threshold down slightly (more headroom, not less), but that is flagged rather than assumed; re-measure before relying on the exact numbers below.

  **The band.** "Molybdenum" truncates from **375 to 415px** and is clean from **416** up; "Hydrogen" truncates 375–395 and is clean from 396. Nothing truncates at any viewport from 416 to 1920. These are **headed Chromium** numbers — **iOS Safari measured roughly 2px more forgiving**, so treat 416 as the Chromium threshold rather than a universal one.

  **Why it happens.** At 375 the tile is 221px wide, and the 44px touch wrapper makes the stepper 108px. That leaves the body 87px, of which the 32px symbol chip and its 12px gap take 44 — so the name gets **43px** against the 64.25px "Hydrogen" needs and the 84.72px "Molybdenum" needs. Note the `GRID_MIN_COL = 222` floor under Grid & Container was derived from the **24px desktop** stepper and does not cover the 108px touch case. Also note this band sits entirely below 520, so the `md` → `mobile` breakpoint fix did not move it and could not have — that fix only affects 520–767.

  **Why it is acceptable.** **The symbol chip sits beside every name, and element symbols are unique per element**, so a truncated name is still unambiguously identifiable: "Rho…" is ambiguous between Rhodium and Rhenium on its own, but "Rh" + "Rho…" is not. The chip is what makes truncation readable — which is precisely why deleting it is not an available fix.

  **Rejected candidates, with measured costs.** Recorded so this is not relitigated from scratch:

  | candidate | result | cost |
  |---|---|---|
  | **Remove the chip below 520** | Every name fits, 2.28px slack on Molybdenum | **Self-defeating.** Deletes the element symbol — both the notation chemists scan by and the thing that makes a truncated name readable at all. |
  | **Wrap the name to two lines** | Fits, but only via mid-word breaks — `Molyb / denum / m` | **Three** lines for Molybdenum, not two. Row heights become uneven in the same grid (62 and 76). `hyphens: auto` never engages, so nothing softens the break. |
  | **Shrink the touch target** | **Does not fix Molybdenum at any tested size** — 40px, 36px and 32px all fall short; 32px is still **17.72px short** at 375 | Fails on its own terms, *and* 32px breaches the 44px minimum recorded under Touch Targets as a defect fixed in an earlier build. |
  | **Stack the stepper below the name** | Every name fits with the chip retained | Tiles grow to **102px**; only **2** fully visible in the 320px panel; scrollHeight 4402 → **6922** (+57%); select-time height jump grows from +10px to **+50px**. |

  **Measure against 62px, not 52px.** On mobile the tile already grows **52 → 62px on select**, because `min-h-[52px]` stops binding once the 44px touch button forces the row taller. This is existing behaviour, not introduced by any of the above. Any future measurement in this band must be taken against the 62px selected height, or it will understate the cost of anything that adds height.
