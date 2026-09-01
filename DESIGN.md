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
  warning: "#8A5300"
  warning-soft: "#FBF1E2"

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

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
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
    padding: "16px below 520px, {spacing.lg} (24px) at `mobile:` (≥520px) and up"
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

  molar-mass-mode-wrapper:
    backgroundColor: "none — the wrapper holds the edge; its two children carry their own fills"
    rounded: "{rounded.md}"
    boxShadow: "inset 0 0 0 1px {colors.hairline} at rest, 2px {colors.primary} on focus-within, 2px {colors.error} on error"
    overflow: "hidden — clips the trigger's square corners into the wrapper's radius"
  molar-mass-mode-trigger:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "12px left/12px right below 520px vertical 12px; 10px vertical at `mobile:` (≥520px) and up — pl-3 pr-2.5"
    border: "1px {colors.hairline} solid on the RIGHT edge only — the seam against the input, deliberately a real border, see Elevation & Depth"
  molar-mass-mode-listbox:
    backgroundColor: "{colors.surface-1}"
    rounded: "{rounded.md}"
    padding: "4px 0"
    boxShadow: "inset 0 0 0 1px {colors.hairline}"
    zIndex: 20
    position: "fixed — placed off the trigger's rect in JS"

  panel-mode-build-custom:
    backgroundColor: "{colors.surface-1} (#ffffff)"
    rounded: "{rounded.lg}"
    padding: "16px below 520px, 20px at `mobile:` (≥520px) and up"
    boxShadow: "0 4px 16px rgba(0,0,0,0.10) — a soft drop shadow, NOT an inset hairline edge. The one place in the system a drop shadow is used, because this panel is a true floating overlay over the calculator card rather than a nested surface step — see Elevation & Depth. No border, and no inset ring alongside the shadow."
    zIndex: 10
    position: "fixed — an overlay, out of flow, placed off the Molar Mass control's rect in JS"
    maxHeight: "computed in JS from remaining viewport space below the control (not a fixed value) — see 'Reachability at short viewports' below"
  panel-mode-compounds:
    backgroundColor: "{colors.surface-1}"
    rounded: "{rounded.md}"
    padding: "4px 0"
    maxHeight: "288px, overflow-y auto"
    boxShadow: "inset 0 0 0 1px {colors.hairline} at rest, 2px {colors.primary} on focus-visible"
    zIndex: 10
    position: "fixed — same overlay slot and same placer as panel-mode-build-custom"

  element-tile:
    backgroundColor: "{colors.canvas} (#FAF9F5) — one step DOWN from the panel's #ffffff, so the white tiles-on-white problem is inverted: the tile is the recess, the panel is the ground"
    rounded: "{rounded.md}"
    padding: "{spacing.xs}"
    gap: "{spacing.xs}"
    minHeight: "52px"
    boxShadow: "inset 0 0 0 1px {colors.hairline}"
  element-tile-hover:
    backgroundColor: "{colors.canvas} (#FAF9F5) — unchanged from rest; hover moves the edge only"
    rounded: "{rounded.md}"
    padding: "{spacing.xs}"
    gap: "{spacing.xs}"
    minHeight: "52px"
    boxShadow: "inset 0 0 0 1px {colors.hairline-tertiary}"
  element-tile-selected:
    backgroundColor: "{colors.canvas} (#FAF9F5) — unchanged from rest; selection moves the edge only"
    rounded: "{rounded.md}"
    padding: "{spacing.xs}"
    gap: "{spacing.xs}"
    minHeight: "52px"
    boxShadow: "inset 0 0 0 1px {colors.primary}"
  element-tile-symbol:
    backgroundColor: "{colors.surface-3} (#EFEDE7) — one step darker than the #FAF9F5 tile, so the chip reads as a shallow inset within the tile (the same 'inset, not a card of its own' role it had as surface-4 before the panel re-grounding). Second consumer of surface-3 alongside molar-mass-mode-trigger; the two never appear at a scale where they could be confused."
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
- Light warm canvas with a four-step surface ladder for hierarchy — no drop shadows anywhere, save one deliberate exception for the Build custom fixed overlay (see Elevation & Depth)
- Single green accent (`{colors.primary}`) reserved for active states, focus, and calculated results
- Two-family typography: Public Sans for all text, DM Mono for all numbers
- Pill-shaped controls only where interaction demands it (direction toggle, unit selectors, buttons); the outer calculator card holds 16px corners, field/result cards hold 12px, inputs hold 8px
- Red (`{colors.error}`) appears only on validation errors — never decoratively
- Calculator visible immediately; no hero, no marketing band
- Molar Mass is a **three-mode field**, not a plain input: a fused dropdown selects Type in / Build custom / Compounds, and each mode owns an independent value slot the field is a view onto. See the Molar Mass mode selector under Components — that pattern is the single entry point to the element and compound pickers.

## Colors

### Brand & Accent
- **Primary Green** (`{colors.primary}` #02613E): Active fills — direction toggle, active unit pills, primary buttons, focused input/wrapper edges, and the committed option in a listbox. White text on top (7.4:1 contrast, passes WCAG AAA).
- **Primary Hover** (`{colors.primary-hover}` #0B7A4F): Lighter green for hover states on green fills.
- **Primary Pressed** (`{colors.primary-pressed}` #04442C): Darker green for pressed/active states, and for text sitting on `{colors.primary-soft}`.
- **Primary Soft** (`{colors.primary-soft}` #DCEEE4): **Currently unused — no consumers.** It previously tinted selected element tiles and, before that, the calculated-result field; both now signal state without a fill (see `element-tile-selected` and the Don't about the read-only signal below). It was also briefly the element tile's **+** hover fill, which was reverted so both stepper buttons hover identically. Retained as a token for a future selected-surface need — text on top would use `{colors.primary-pressed}`, never white.

### Surface
- **Canvas** (`{colors.canvas}` #FAF9F5): Page background, and the element tile fill inside the Build custom panel (where the panel itself is #ffffff, so the tile sits one step *below* its container). Warm off-white, not pure white — the warmth is deliberate and should read as "slightly less clinical," not visibly tinted.
- **Surface 1** (`{colors.surface-1}` #ffffff): One step above canvas — the calculator card, input field interiors, and the Build custom mode panel (a `position: fixed` overlay — it carries a drop shadow instead of an inset edge, see Elevation & Depth).
- **Surface 2** (`{colors.surface-2}` #F5F3EE): Two steps — the input and result field containers.
- **Surface 3** (`{colors.surface-3}` #EFEDE7): Three steps — two consumers: `molar-mass-mode-trigger`'s fill (one step up from the Molar Mass input's surface-1, so the fused control's two halves read as distinct), and the element tile's symbol chip (`element-tile-symbol`), where it is one step *below* the #FAF9F5 tile and reads as a shallow inset. The two are never at a scale where they'd be confused. The "···" overflow reveal panel surface-3 used to back was removed when all units moved inline.
- **Surface 4** (`{colors.surface-4}` #E8E6DF): Four steps — deepest lift. Backs only the hover fill on the tile's stepper buttons (`element-tile-stepper-button-hover`), its sole remaining consumer. It sits *inside* an element tile, so the step reads as a recess rather than a lift — the one place the ladder inverts, intentionally: the hover fill is an inset within a card, not a card of its own. (The tile's symbol chip was surface-4 too until the Build custom panel was re-grounded; the tile is now `{colors.canvas}` and the chip stepped up to `{colors.surface-3}`, keeping the same shallow-inset reading one tier lighter.)
- **Hairline** (`{colors.hairline}` #E5E2DA): Default 0.5px borders on cards, inputs, and dividers.
- **Hairline Strong** (`{colors.hairline-strong}` #D3CFC3): Emphasized dividers. It was tried as the element tile's hover border and replaced — against `{colors.hairline}` on a 1px border it was too quiet to register as feedback.
- **Hairline Tertiary** (`{colors.hairline-tertiary}` #C4C0B2): Nested/tertiary borders inside the element grid, and the **hover border on an unselected element tile**. Two neutral steps up from `{colors.hairline}`, which is what it takes for a 1px border change to read as "this responds". Still unambiguously neutral, so the chromatic/neutral split against `{colors.primary}` remains the signal that separates hover from selected.

### Text
- **Ink** (`{colors.ink}` #14140F): Headlines, input values, primary numbers. Near-black.
- **Ink Muted** (`{colors.ink-muted}` #4A4842): Body copy, secondary values, field labels, inactive pill and toggle text, and the atomic-mass line inside an element tile. It is the system's general-purpose muted-foreground token — not reserved to one role — so covering the tile's mass line (a secondary value) is within its remit. On the `{colors.canvas}` #FAF9F5 tile it computes to ~8.7:1, clearing WCAG AA and AAA.
- **Ink Subtle** (`{colors.ink-subtle}` #7A776D): Captions and breadcrumb. **4.48:1 on `{colors.surface-1}` white — marginally under the 4.5:1 WCAG AA threshold for normal text.** It backed the element tile's atomic-mass line until that line was moved to `{colors.ink-muted}` to clear AA; do not route small body text through `ink-subtle` where it must be read to act.
- **Ink Tertiary** (`{colors.ink-tertiary}` #A8A498): Placeholder text, disabled state.

### Semantic
- **Error** (`{colors.error}` #C23B3B): Validation error borders and inline error messages. 5.4:1 contrast on white, passes WCAG AA for normal text. Red appears nowhere else in the system.
- **Error Soft** (`{colors.error-soft}` #FBEAEA): Tint background for error message blocks, if a filled treatment is ever needed.
- **Warning** (`{colors.warning}` #8A5300): Advisory / caution copy and icons that are *not* validation errors — the explainer-section common-mistake callouts. A dark warm amber, held clearly apart from `{colors.error}` red so "watch out" never reads as "you did something wrong". 6.2:1 on white and 5.2:1 on `{colors.warning-soft}`, both pass WCAG AA for normal text. Never used on an input edge or a validation message — that is Error's exclusive role.
- **Warning Soft** (`{colors.warning-soft}` #FBF1E2): Tint background for warning callout blocks, paired with `{colors.warning}` text and icon.

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
- Calculator card padding: 16px below 520px, `{spacing.lg}` 24px at `mobile:` (≥520px) and up. Symmetric on all sides at both breakpoints — only the value changes, not the axis split.
- Field container padding: 16px below 520px, `{spacing.lg}` 24px at `mobile:` (≥520px) and up — same mobile-reduction pattern as the outer card. Molar Mass and the current second input share a single field card (no gap, no divider) split by asymmetric inner padding at `mobile:` and up — 24px on the outer edges and top/bottom, 12px each on the two sides facing the shared midline, for a 24px total gutter; below 520px both sides of the split are the flat 16px (no midline-gutter reduction — the fields are stacked, not side by side, so there is no shared midline to gutter).
- Result card padding: 16px below 520px, `{spacing.lg}` 24px at `mobile:` (≥520px) and up, symmetric on all sides at both breakpoints — it is a single field, not split.
- Build custom mode panel padding: 16px below 520px, 20px (not a spacing token) at `mobile:` (≥520px) and up. Matches the outer card's mobile-reduction pattern; the panel's own desktop value stays a bespoke 20px, not 24px. The Compounds mode panel is a bare listbox instead and uses that widget's own `4px 0` — see `panel-mode-compounds`.
- Pill padding: 8px vertical · 12px horizontal
- Pill padding (touch viewports): 12px vertical · 16px horizontal, set explicitly — see Touch Targets.
- Button padding: 12px vertical · 20px horizontal
- Input padding: 8px vertical · 12px horizontal
- Element search input (`#molar-mass-element-search`, Build custom panel): 12px left / 12px right — symmetric, matching every other text input on the page. It briefly carried an asymmetric `pr-3.5` (14px) to clear the native browser search-cancel button; see "Suppressing native browser chrome" below for why that's no longer necessary.
- Caption-above-value labels (e.g. "Molar Mass", "Mass", "Moles", "Common Compounds", the formula bar's "Formula"/"Molar Mass"): `{spacing.xs}` 8px between the caption and the value/control below it, at every breakpoint. Applies regardless of the container's own scale — the formula bar uses this same 8px even though its value text is smaller than a full field's, rather than a compressed value tuned to that one spot.
- Nav bar logo (dot mark → "FreeChemLab" wordmark): `{spacing.xxs}` 4px gap. Chosen over 8px after a visual A/B at nav-bar scale — 8px visibly separated the dot from the wordmark into two elements instead of reading as one tight logotype; 4px kept the grouping closest to the prior (off-grid) 6px.

### Suppressing Native Browser Chrome
Some inputs render browser-native UI (spinners, clear buttons, dropdown arrows) that this design replaces with its own controls, or that would otherwise sit inside a padding zone meant for something else. The convention, established by the number-input spinner suppression and extended to the search-cancel button:
- Target the specific pseudo-element with `-webkit-appearance: none` (the property that actually removes the native rendering, not just a visibility toggle), paired with `display: none` or `margin: 0` as needed to fully collapse the space it would otherwise reserve.
- Comment *why* — which control replaces the native affordance (or why none is needed) and, where relevant, which browsers were confirmed to render the native chrome in the first place, since that isn't always all of them.
- Live in `global.css` as a global element-type selector (`input[type="..."]::-webkit-...`), not scoped per-instance — every input of that type gets the same treatment.
- **`input[type="number"]`** (Molar Mass / Mass / Moles): suppresses `::-webkit-outer-spin-button`/`::-webkit-inner-spin-button` plus a Firefox-specific `appearance: textfield` fallback, replaced by the functional stepper pill.
- **`input[type="search"]`** (`#molar-mass-element-search`): suppresses `::-webkit-search-cancel-button`. Confirmed via direct device testing to render in desktop Chrome/Edge only (not Firefox, not mobile Safari/Chrome) — suppressed unconditionally so behavior doesn't vary by browser, rather than leaving it browser-dependent. No Firefox-specific rule needed here since Firefox doesn't render one to begin with. This is also why the element search input's padding could go from an asymmetric `pl-3`/`pr-3.5` to the symmetric `pl-3`/`pr-3` every other input uses — nothing occupies that space in any browser anymore.

### Grid & Container
- Single-column page, max content width ~880px. This is a calculator, not a dashboard — it should not sprawl.
- Molar Mass and the current second input render side by side at desktop, each at `flex: 1`.
- The element grid inside the Build custom mode panel is **not** a fixed column count, and it is **not** `1fr`. Column count and width are computed in JS against the measured container width (`layoutElementGrid()`, re-run by a `ResizeObserver` **on the scroll wrapper**), so both always resolve to **whole pixels**:
  1. `W = floor(wrapper border box − its own border and padding) − reserve`, clamped to the wrapper's `clientWidth`. See "The scrollbar reserve" below for why the border box and not `clientWidth`.
  2. `n = floor((W + minGap) / (target + minGap))`, target **232px** (`GRID_TARGET_COL`), minGap 8px.
  3. Reduce `n` while a column would fall below the 222px truncation floor.
  4. Search `colW` **downward in steps of 4** from the largest 4pt-aligned candidate for the largest pair where `colW` and `gap` are **both multiples of 4**, `gap ≥ minGap`, and `n·colW + (n−1)·gap = W` exactly.
  5. If no such pair exists, **fall back to integer-exact**: walk `colW` down by 1 until the leftover divides evenly across the `n−1` gaps. **The slack lands in the gaps; the columns stay uniform integers.**
- The grid's `width` is then **set explicitly** to `W`. It is not left to stretch, so the result is the computed value rather than whatever the parent happens to offer once a scrollbar appears.
- At desktop the grid is **712px**, giving **3 × 232px with an 8px gap** — `3 × 232 + 2 × 8 = 712` exactly, remainder 0, and every one of 712, 232 and 8 is divisible by 4. See "What 712 depends on" below for the deduction chain.
- **Column count by viewport, measured (not derived):** 3-up at **895px and up**, 2-up from **894 down to 653**, 1-up at **652 and below**. These are outcomes of the algorithm against the measured container, not declared breakpoints — they move whenever anything in the chain below moves.
- **`GRID_TARGET_COL` is 232, and it is tuned to this panel's width specifically.** It was 244 while the grid lived in the wider, now-removed Browse Elements accordion, whose panel spanned the calculator card's full content box. The mode panel is inset to the field card's content box instead and comes out 48px narrower — under the 748px a 244 target needs for a third column, which would have rendered this panel 2-up against a design that is 3-up. 232 is the largest 4pt-aligned target that still solves to three columns here.

#### The scrollbar reserve

This was a live layout bug, not a theoretical one. The wrapper is `overflow-y: auto`, and **Chrome and Edge reserve a classic 15px scrollbar** — measured at 15px, and still 15px at 125% and 150% display scaling, verified in a real browser. The old algorithm read the wrapper's `clientWidth`, which the scrollbar shrinks, and the grid dropped a whole column: **desktop Chrome and Edge were rendering it at 2 columns instead of 3.** Firefox kept 3 because its scrollbar took no width. (The exact figures in that measurement — 772 → 757 → 755 — were taken against the wider accordion panel this grid used to live in; the arithmetic no longer matches the current chain, but the failure mode and the fix are unchanged.)

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

#### What 712 depends on

The deduction chain from `main` is: `896 − 32 (main px-4) − 0 (card edge, box-shadow:inset) − 48 (card-calculator p-6) = 816` for `.field-row`; then `− 48` for the panel's own inset (the Molar Mass control's 24px left offset inside `card-field`, **measured live** off the control's rect and mirrored to the right, not restated in CSS) `= 768` for the panel; then `− 40 (panel p-5) − 0 (panel edge, box-shadow:inset) − 0 (wrapper padding) = 728` for the wrapper's border box, then `− 16 (scrollbar reserve) = 712` for the grid. Every step verified by measurement at 1280 and 1920.

- **The panel spans the calculator card's content box, not the Molar Mass half of it.** It is `position: fixed`, so its width is not inherited from a parent — it is computed as `.field-row`'s width minus twice the measured control inset. That is what keeps the grid wide enough for three columns; mounting it inside `#input-slot-a` instead (under half the card at desktop) would collapse it to 1-up against the 222px floor.

- **No edge in this chain consumes width.** Every container edge here is `box-shadow: inset`, which paints inside the existing box rather than adding to it, so each edge term is 0. If any of them is ever converted back to a real `border`, it costs 2px per side and the whole chain has to be re-solved — see the Don't about reintroducing borders.
- **The 375px viewport cannot be 4pt-aligned**, because 375 is itself odd and `main` is viewport-driven below the `max-w-4xl` cap. This is inherent to the viewport width, unaffected by the border → box-shadow conversion, and is not corrected. Below 520 the 4pt search is expected to take the fallback and there is no attempt to force it.
- **`1fr` is not acceptable here and must not be reintroduced.** It resolved to a fractional per-column remainder in the pre-conversion layout, and each column inherited a *different* sub-pixel remainder, so identical controls antialiased differently from column to column. The plus glyph's 1.5px vertical stroke measured a full **1px** apart between column 1 and columns 2–3. This is visible at normal viewing distance, not just under zoom; it was once dismissed as a low-priority sub-pixel artifact, and that call was wrong because it had been measured on a single tile rather than across columns. Always compare across columns.
- The 222px floor is set by the widest *selected* tile, not by taste. Measured empirically rather than derived: with "Molybdenum" (the longest name in the 63-element dataset) selected, the name begins to truncate once the column falls **to 222px or below**. The computed layout delivers 232px at desktop 3-up, leaving **10px of headroom** — narrower than the 26px the old, wider accordion panel had, so this floor is closer to binding now than it was.
- **`GRID_MIN_COL` is non-binding at the 232 target and should stay anyway.** Because `n = floor((W + 8) / 240)` implies `W ≥ 240n − 8`, the largest candidate column is `floor((W − 8(n−1)) / n) ≥ 232`, which can never fall below 222 — so the `while` guard cannot fire at this target. It is kept as a documented safety net, and it still bounds how far the 4pt search may walk down. It is the real measured truncation threshold, and it becomes load-bearing again the moment the target is lowered below 222. Do not delete it because it looks unused, and do not raise it to match the target — those are two different numbers measuring two different things. The unselected tile needs far less, but sizing to that would make every tile truncate the moment it is selected, so the floor is set by the selected case.
- Measure this by narrowing the column until `scrollWidth > clientWidth` on the name, not by summing the parts. The name span reports its *content* width whenever there is room to spare, so reading its rendered width tells you nothing about remaining headroom — that mistake made an 8px gain look like no gain at all.
- **4-up does not fit and cannot be made to fit by shrinking type.** At 4-up the panel yields 183px columns, of which the fixed furniture (chip, stepper, padding, gaps) consumes 152px, leaving **31px** for the name against the 85px it needs. Fitting "Molybdenum" into 31px requires roughly a 5.1px font — well under half the system's 12px floor. Even deleting the stepper's border and shrinking it to 60px only buys a 8.6px font. 4-up needs a grid about **924px** wide; this grid is **712px** — further from 4-up than the old accordion panel was, not closer. The 4-column mockup is drawn on a wider canvas than the app's actual panel and only ever shows "Hydrogen", which is 62px — comfortably inside a width that "Molybdenum" overruns by 23px. (These 183px/924px figures predate the conversion and were not re-measured — the conclusion "4-up does not fit" is unaffected by a 4px shift of this size, but the exact numbers are not re-verified.)
- If the column rule is ever revisited, measure against **"Molybdenum" with the stepper mounted**, not against "Hydrogen" and not against the unselected tile. Sizing to either of those is exactly the error that produced a 5-up, then a 3-up, then a 4-up estimate that each failed on contact with real content.

#### Reachability at short viewports

This was a real, reproducible bug, not theoretical: at a 1280×768 or 1280×800 viewport — common laptop heights — the Build custom panel's natural content height (search + grid + readout + button, up to **~560px measured**) put "Use this molar mass" below the fold, with `locator.click()` failing with "element is outside of the viewport." Since that button is the **only** way to close this panel (see Dismissal), an unreachable button was a dead end, not a cosmetic clip.

The panel does not grow the document to make room (it is `position: fixed`, per "Mode panels" under Collapsing Strategy below), so the fix is the same shape as `SCROLLBAR_RESERVE` above: cap and scroll internally rather than let content dictate the box.

- `positionMolarMassModePanel()` sets an inline `max-height` on `#molar-mass-build-panel` itself — live-measured as `window.innerHeight − (panel's own top) − 16px bottom gutter`, recomputed on every open/scroll/resize alongside its top/left/width. On a viewport tall enough that content already fits, this number exceeds the content's natural height, so it has **no visible effect** — it only ever binds when space is actually tight.
- The panel is `flex flex-col`. Everything **except** the button (search input, element grid, formula/mass readout) lives inside `#molar-mass-build-panel-scroll`, a flex child with `min-h-0 overflow-y-auto` — `min-h-0` because a flex item's default `min-height: auto` refuses to shrink below its content size, the standard trap that would otherwise make the outer `max-height` cap useless. The button is a **sibling** of that wrapper, not inside it, with `shrink-0` so it can never lose height to the scroll region competing for space — it is pinned, not scrolled.
- The element grid's own `max-h-[320px]` (`element-grid-scroll`, see "The scrollbar reserve" above) is untouched and nests inside the new scroll wrapper; the two scroll regions don't conflict because at any given content size at most one of them is actually scrollable.
- **Compounds' `panel-mode-compounds` was deliberately left alone.** Its `max-h-72` is a plain, static Tailwind class, and it wasn't reported as a reachability problem — it has no button to strand, since selecting a compound both fills the value and (via toggle-click / click-outside) is not the only way to dismiss it. Don't generalize this fix onto it without a reason.

### Whitespace Philosophy
The warm canvas is the whitespace. Sections separate by lifting onto a surface, not by large gaps. There are two separate rhythm tiers, and they are not interchangeable:

- **Card-internal rhythm — `{spacing.lg}` 24px.** Governs the gap between *every* pair of adjacent blocks that live inside the calculator card: header row → first field block, field-row → result slot. Both are siblings doing the same job (separating one card-internal block from the next), so they share one value. The header row's own `pb-6` and the fields wrapper's `gap-6` are two different mechanisms producing the same 24px — new blocks added inside the card should use one of those two patterns, not a bespoke value.
- **Page-level rhythm — `{spacing.md}` 16px.** Governs the gap between the breadcrumb and the card — content that sits *outside* the card, at the page's own flow level. This is a different tier from the card-internal rhythm above precisely because it sits outside the card; don't reach for 24px here just because it's also a "block separator."

Prior to this being made consistent, the header row used a bespoke `pb-5` (20px) — a third value that matched neither tier and had no token backing it. New modules should pick one of the two tiers above rather than introduce a third.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No edge, no shadow | Page background, breadcrumb, footer |
| 1 (card lift) | `{colors.surface-1}` on canvas, `box-shadow: inset 0 0 0 0.5px {colors.hairline}` | Calculator card, input interiors |
| 2 (nested lift) | `{colors.surface-2}`, `box-shadow: inset 0 0 0 0.5px {colors.hairline}` | Field containers, result card |
| 3 (sub-panel lift) | `{colors.surface-3}`, `box-shadow: inset 0 0 0 0.5px {colors.hairline}` | `molar-mass-mode-trigger`'s fill (no ring — its edge is the seam `border-right`) and the element tile's symbol chip (`element-tile-symbol`, no ring); the ring form is otherwise unused |
| 4 (focus) | `box-shadow: inset 0 0 0 2px {colors.primary}` | Focused input |
| 4 (error) | `box-shadow: inset 0 0 0 2px {colors.error}` | Errored input |
| Overlay | `{colors.surface-1}` (#ffffff), `box-shadow: 0 4px 16px rgba(0,0,0,0.10)`, no border, no inset ring | Build custom mode panel (`panel-mode-build-custom`) only |
| Recess (inside the overlay) | `{colors.canvas}` (#FAF9F5), `box-shadow: inset 0 0 0 1px {colors.hairline}` (→ primary selected, → hairline-tertiary hover) | Element tiles inside the Build custom panel — the tile sits one step *below* its #ffffff panel, so it reads as a well rather than a lift. Its symbol chip is `{colors.surface-3}` (#EFEDE7), one step *below* the tile again — a shallow inset within the well, no ring. |

**There are no drop shadows in this system, with one deliberate exception: the Build custom mode panel.** Depth is otherwise carried entirely by the surface ladder plus hairline edges — if something needs to feel raised, it moves up a surface step, it does not gain a shadow. The Build custom panel is the exception because it is not a *nested* surface at all: it is a `position: fixed` overlay that floats out of flow over the calculator card, the unit pills, and the result block (see Cards & Panels → Mode panels). A surface step communicates "one level deeper in the same plane"; this panel is on a different plane, temporarily, and a soft drop shadow (`0 4px 16px rgba(0,0,0,0.10)` — started from `0 4px 12px rgba(0,0,0,0.08)` and nudged up slightly so it still reads once the inset hairline edge was removed) is what says so without reading as heavy. It carries the shadow *instead of* an edge, not in addition to one — no border, no inset ring. `panel-mode-compounds` does **not** get this treatment: it sits on `{colors.surface-1}`, a genuine step above the card, and keeps its hairline ring.

**The Build custom panel is `{colors.surface-1}` (#ffffff), not a surface-ladder step.** When it was surface-2 the element tiles inside it (then #ffffff) sat *above* their container — tiles-on-a-darker-ground, the normal direction. The panel is now #ffffff and the tiles are `{colors.canvas}` (#FAF9F5): the relationship is inverted — the tile is a shallow well in the panel, its 1px hairline edge doing the separating, and the symbol chip (`{colors.surface-3}` #EFEDE7) is a further shallow inset within the tile. So inside this panel the ladder runs *downward* — #ffffff panel → #FAF9F5 tile → #EFEDE7 chip — which keeps the panel visually quiet (one flat white plane carrying the content) while the shadow alone marks it as the floating layer.

**Every edge in this system is `box-shadow: inset`, not `border`.** This was a deliberate sitewide conversion — a real `border` was the original mechanism, but a border participates in box sizing (it adds to the element's rendered box), while an inset box-shadow paints inside the existing padding box and adds nothing to it. Focus and error still change both color (hairline → primary → error) and width (1px at rest, 2px on focus/error) exactly as before, but because the shadow contributes zero box-model pixels in any state, the width change no longer shifts anything else. An earlier build had to chase this same problem twice as a real *border*: once when focus alone changed width (0.5px → 2px) and shifted the input's content on every focus/blur, and again when a later 1px/2px resting/focus split reopened it — both times the fix was a compensating padding change, paired and inverted against the border delta so `border + padding` summed to a constant total. That compensation (11px/9px resting vs 10px/8px focus/error, see the retired text-input note in `git log`) is now **removed**, not extended: since box-shadow doesn't participate in box sizing in the first place, there is nothing for padding to compensate for, at any width. Padding is a single value per breakpoint in every state — see `text-input`. Verified with real computed-height measurements, not just arithmetic — see the Do below.

**One exception: `molar-mass-mode-trigger`'s right edge is a real `border-right`, not an inset shadow.** Every other border in the app outlines a *container* — a card, pill, panel, input, or tile — where box-shadow:inset is a clean substitute for an edge. This one is different: it is a single-side *seam* between two controls that share one wrapper and one continuous edge, not a container boundary of its own. It never changes width in any state, so it was never exposed to the box-model-shift bug this conversion exists to fix, and a one-sided inset shadow on the trigger would paint over the trigger's own fill rather than reading as a divider between the two halves. Its 1px is part of the wrapper's fixed internal geometry, accounted for once; do not convert it, and do not add a second edge beside it.

**Also left alone: the structural dividers.** `border-b`/`border-t` hairlines that separate stacked page regions rather than outline a container — the top-nav's bottom rule, the calculator card's internal header rule, the formula bar's top rule, the particle-count row's top rule (already called out below as the one intentional divider in the result block), the footer's top rule, and the mobile field-half divider — are layout dividers, not edges/outlines, and are out of scope for this conversion. They stay real `border-t`/`border-b`.

**A third exception existed here, and is now retired: `preset-select`'s real `border`.** The Presets dropdown was converted to `inset-ring-1 inset-ring-hairline` along with everything else, but native `<select>` chrome (`appearance: auto`) was found to override the box-shadow on real mobile engines, leaving the control edgeless there. A real `border border-hairline` was added back as the fix. A later pass added `appearance: none` (plus `-webkit-`/`-moz-` prefixes) to remove native chrome at the root cause, but the `border` was left in place rather than removed, and the two rendering together (a 1px border immediately followed by a 1px inset shadow, same hairline color, adjacent) doubled the visible edge to ~2px against every other converted control's 1px — fixed at the time by dropping `inset-ring-*` and keeping `border` as the sole edge mechanism, since that was the one already confirmed to survive native `<select>` chrome. **The native `<select>` itself is gone now** — it was replaced by a scripted `role="listbox"` (see `compound-listbox` under Inputs & Validation), which has no native chrome to fight in the first place, and the Compounds mode panel that now hosts it carries the sitewide `inset-ring-1 inset-ring-hairline` edge like everything else. This paragraph is kept as a historical record of why the carve-out existed — if a real `<select>` (or any element with browser-owned chrome) is ever reintroduced, treat its edge as a fresh decision rather than assuming `inset-ring` will render reliably.

**Implementation: Tailwind's `inset-ring-*` utilities, not a hand-rolled `shadow-[inset_...]` class.** Tailwind v4 composes `inset-ring-*` into the element's `box-shadow` via its own `--tw-inset-ring-shadow` variable, alongside (not overwriting) `shadow-*` and `ring-*`'s variables — confirmed by inspecting the compiled CSS, not assumed. This matters concretely on the element search input: it carries a focus `ring-1 ring-brand-green` (Tailwind's outset ring, a different box-shadow layer), and `inset-ring-1 inset-ring-hairline` → `focus:inset-ring-primary` composes with that ring cleanly. A hand-written `shadow-[inset_0_0_0_1px_...]` would instead have silently overwritten (or been overwritten by) the ring's own `box-shadow` declaration, since both would target the same CSS property directly with no shared variable to compose through. Width is `inset-ring-1`/`inset-ring-2`; color is `inset-ring-{hairline|hairline-tertiary|primary|error}`, reusing this file's existing color tokens (already wired into `@theme` in `global.css`, the same way `border-hairline` etc. worked before). `preset-select` no longer exists (see the retired border exception above), and nothing that replaced it carries a real border.

**Windows High Contrast Mode (`forced-colors: active`).** `box-shadow` is treated as decorative and computes to `none` in this mode; `border` is treated as structural and is preserved. Every element converted above would lose its visible edge here — and since forced-colors mode also collapses this app's surface ladder (canvas/surface-1/surface-2/etc. all resolve toward the same system background), the edge is doing double duty as the only remaining cue that a container boundary exists at all. **All of them needed the fallback; none were safe to skip.** `global.css` adds one rule, `[class*="inset-ring-"] { box-shadow: none; border: 1px solid CanvasText; }`, scoped to `@media (forced-colors: active)` only — a flat 1px `CanvasText` border regardless of which width/color state was active, since state no longer needs to reserve box-model space and there's nothing to gain from reproducing the 1px/2px distinction in a mode where colors are already system-controlled. Two elements are added to that selector by id because they carry a real edge that is *also* a `box-shadow` (so it also computes to `none` here) without an `inset-ring-*` class for the attribute selector to catch: `#molar-mass-mode-wrapper` (its ring is painted by an `::after` overlay) and `#molar-mass-build-panel` (its edge is the drop shadow — the Elevation & Depth exception above; the fallback border is the WHCM-only substitute for that shadow, and does not contradict the "no border on this panel" rule, which is about normal rendering). The excluded elements (`molar-mass-mode-trigger`'s real `border-right` and the structural dividers) need no fallback — they already render a real border natively, same as before. (`preset-select`'s real `border` used to be excluded here too; it's retired along with the element itself — see above.)

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.xxs}` | 2px | Stepper button hover fill inside the element tile |
| `{rounded.xs}` | 4px | Micro chips, element-tile symbol chip, element-tile stepper |
| `{rounded.sm}` | 6px | Inline tags |
| `{rounded.md}` | 8px | Inputs, element tiles, overflow panel |
| `{rounded.lg}` | 12px | Field containers, result card, Build custom mode panel |
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

**Nav bar "current page" pill** — the top-bar item marking the active nav destination (e.g. "Calculator"). Same padding/radius/breakpoint recipe as `pill-active`/`pill-inactive` — 8px/12px desktop, 12px/16px on touch viewports (`min-h-[44px] mobile:min-h-0`) — treated as the same component type, not a special case, even though it lives outside the card in a different context (top bar, `h-14` fixed-height container). Its own coloring is a third, distinct visual state (`{colors.surface-1}` background, `{colors.hairline}` inset ring, `{colors.ink}` text) that doesn't map to either `pill-active` or `pill-inactive` — this pill signals "you are here," not "selected value" or "unselected option," so it keeps its own color treatment while sharing the shared padding/touch-target mechanics.

**`toggle-direction`** — The g→mol / mol→g mode switch in the card header. This is a distinct component, not a reuse of `pill-active`/`pill-inactive` — those toggle a single value (a unit); this toggles calculation direction and each segment always shows both units of that direction, joined by a chevron (e.g. "g › mol").
- Container: transparent, `box-shadow: inset 0 0 0 0.5px {colors.hairline}`, rounded `{rounded.pill}`, 4px padding, 4px gap between the two segments.
- `toggle-direction-segment-active`: background `{colors.primary}`, text `{colors.on-primary}`, padding 8px 12px, rounded `{rounded.pill}`.
- `toggle-direction-segment-inactive`: transparent background, text `{colors.ink-muted}`, same padding and radius.
- Icon: chevron-right, 16px box, between the two unit words. Its stroke inherits the segment's text color — white on the active segment, `{colors.ink-muted}` on the inactive one. It is not a separate color token.

### Buttons

**`button-primary`** — Green pill. Its one consumer is the Build custom panel's "Use this molar mass" button — the same literal button that first defined this recipe, retired when the panel briefly had no confirm step, and brought back with a different job (see the panel-model note under Cards & Panels): closing the panel deliberately, not confirming a value.
- Background `{colors.primary}`, text `{colors.on-primary}`, padding 12px 20px, rounded `{rounded.pill}`.
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
- Background `{colors.surface-1}`, rounded `{rounded.xl}`, padding 16px below 520px / `{spacing.lg}` (24px) at `mobile:` and up, `box-shadow: inset 0 0 0 0.5px {colors.hairline}`.

**`card-field`** — Two inputs share a single card, side by side. There is no gap and no divider between them — the split is entirely padding: 24px on the outer edges and top/bottom, 12px on the two sides facing the shared midline (at `mobile:`/≥520px; below 520px the fields stack and padding is a flat 16px on all sides).
- Background `{colors.surface-2}`, rounded `{rounded.lg}`, `box-shadow: inset 0 0 0 0.5px {colors.hairline}`, padding 16px below 520px / `{spacing.lg}` (24px, split as above) at `mobile:` and up.
- The first slot is permanent: Molar Mass. It's an input in both calculation directions and never moves, never changes card. The second slot is role-assigned, not field-assigned — it holds whichever of Mass/Moles is currently the *input* for the active direction (Mass in g→mol, Moles in mol→g). Card membership follows input/output role, not field identity — don't hardcode "Molar Mass and Mass" as a fixed pair; the second field genuinely changes.

**`card-result`** — The calculated-output container.
- Background `{colors.surface-2}`, padding 16px below 520px / `{spacing.lg}` (24px) at `mobile:` and up — same breakpoint pattern as `card-field`, otherwise identical to it. It no longer carries a green tint — see the read-only signal Don't below.
- Holds whichever of Mass/Moles is currently the *output* — Moles in g→mol, Mass in mol→g. Same role-assignment principle as `card-field`'s second slot: this card's content swaps with direction, its content is never fixed to one field.

**Molar Mass mode selector** (`molar-mass-mode-wrapper` + `molar-mass-mode-trigger` + `molar-mass-mode-listbox`) — the fused dropdown on the left of the Molar Mass input. It replaces the earlier implicit "molar mass is always typed in" assumption with three explicit modes: **Type in**, **Build custom**, **Compounds**. This is the only way into the element picker and the compound picker; there is no separate entry point.

- **Fused, not adjacent.** The wrapper is one rounded box carrying one edge (`inset-ring-1 inset-ring-hairline`, `focus-within:inset-ring-2 focus-within:inset-ring-primary`, `rounded-[8px]`, `overflow-hidden`), with the trigger and the input as its two children. Neither child carries a radius or an edge of its own — the wrapper's `overflow-hidden` is what rounds the trigger's outer corners. **The error ring moved with it:** validation styling targets `#molar-mass-mode-wrapper`, not `#molar-mass`. Retargeting it back to the input would draw a ring around the right-hand half only.
- **The seam between the two halves is a real `border-right` on the trigger**, deliberately not an inset shadow — see the exception note under Elevation & Depth.
- Trigger: `{colors.surface-3}` fill (one step up from the input's `{colors.surface-1}`, so the two halves read as distinct controls), `{typography.body-sm}` in `{colors.ink}`, `pl-3 pr-2.5`, vertical padding matching `text-input` exactly (12px below 520px, 10px at `mobile:` and up) so both halves resolve to the same height. Trailing chevron is the same 6×10.5px glyph as everywhere else, permanently rotated 90°; it does not animate.
- **Pattern:** ARIA APG "Collapsible Dropdown Listbox" (select-only combobox). `<button role="combobox" aria-haspopup="listbox" aria-controls aria-expanded aria-activedescendant>`; the popup is `role="listbox"` with three `role="option"` rows. DOM focus never moves into the popup — it stays on the trigger, and `aria-activedescendant` tracks the highlight. Same deviation-from-the-reference note as the compound listbox: a real `<button>` is used rather than the APG's `<div role="combobox">`.
- **Option states:** highlighted (keyboard-active *or* hovered) gets `bg-surface-2`; the currently selected mode gets `text-primary font-medium` and `aria-selected="true"`. Reopening pre-highlights the selected mode rather than starting at the top.
- **Keyboard:** ArrowDown/Up open the popup or move the highlight; Home/End jump to first/last; Enter/Space opens or commits; Escape closes without changing the mode; Tab closes and lets focus leave. A capture-phase document click listener dismisses it, attached only while open.
- **Positioning:** `position: fixed`, `top`/`left`/`min-width` computed from the trigger's own `getBoundingClientRect()` on open and **re-read on every scroll/resize while open** rather than closing. `z-20` — above both mode panels, so opening the dropdown always draws over whichever panel is showing.
- **The stepper is Type-in only.** The `+`/`−` capsule inside the Molar Mass input is hidden in Build custom and Compounds, because there is nothing meaningful to increment: the value is derived from a selection, not typed.

**Per-mode state.** Each mode owns an **independent value slot**, and `#molar-mass` is a *view* onto whichever slot is active. This is the core rule of the whole component and the thing most likely to be broken by a well-meaning change:

- Switching modes **never clears another mode's slot** — it only re-points the field. Type a value, switch to Compounds, pick a compound, switch back: the typed value is still there, exactly as typed.
- Type-in stores the **raw string**, not a number, so in-progress text (`18.`, `""`) round-trips exactly instead of being rewritten under the user. Build custom stores the **quantities map** (the real source of truth — formula and mass are both derived from it), so returning to that mode restores per-tile counts, not just a total. Compounds stores the compound's **name and formula** alongside the mass, so the selection can be re-highlighted by identity rather than by list index.
- **Nothing writes `#molar-mass` directly.** Panels write their slot; the store refreshes the field when the slot it wrote is the active one, and dispatches a real `input` event so the calculation re-runs. Writing the field *and* the slot double-applies and desyncs the two.
- **A non-Type-in mode's input is `readOnly`, not `disabled`.** A disabled input drops out of the tab order and is skipped by some screen readers, and the value here is real content a non-typing user still needs to read. `readOnly` keeps it focusable, in the accessibility tree, and still labelled by its `<label for="molar-mass">`.

**Mode panels** (`panel-mode-build-custom`, `panel-mode-compounds`) — the picker each non-typing mode reveals. Type in has no panel; it is the bare field.

- **They are overlays, not in-flow blocks.** `position: fixed`, `z-10`. Opening one does **not** grow the document — it floats over the unit pills, the Mass field's lower half, and whatever follows the card. Their DOM position is incidental; being out of flow, they are neither flex items of the column they sit in nor subject to its gap.
- **One geometry, shared.** Both are placed by the same function off the Molar Mass control's rect: flush with the control's **bottom** edge (no gap — this reads as an extension of the field, unlike the two listbox popups, which offset 4px), flush left with the control, and spanning `.field-row`'s width minus twice the control's own measured inset from the card. That inset is read live rather than hardcoded, so it stays correct at both breakpoints (24px at `mobile:`, 16px below) and never picks up the 12px midline padding, which is a different value on the same element. See "What 712 depends on" for why the card-wide span is load-bearing.
- **They reposition on scroll/resize while open.** Scroll/resize listeners are capture-phase, attached while a panel is open and removed the moment it isn't — see **Dismissal** below for what "open" means now, which is not the same question as "is this the active mode."
- **Returning to a mode repaints from the slot, not from what the panel was left holding.** Neither the grid nor the picker is torn down on hide, so both keep their own internal state across a hide/show — reading from that instead of from the store looks identical in the common case and silently diverges the moment anything else writes the slot. Both restore paths read the store; both are covered by a test that overwrites the slot *while the mode is inactive*, which is what separates "restored from the store" from "never lost it".
- **Build custom** uses the `panel-mode-build-custom` recipe (`{colors.surface-1}` #ffffff, `{rounded.lg}`, 16/20px padding, and a soft drop shadow `0 4px 16px rgba(0,0,0,0.10)` in place of an edge — no border, no inset ring; the one drop shadow in the system, see Elevation & Depth) and holds a search input, the element grid, a Formula / Molar Mass readout, and a **"Use this molar mass" button** (`button-primary`). The element tiles inside it are `{colors.canvas}` #FAF9F5 — a step *below* the panel — so the white-tile-on-white-panel flatness is avoided by making the tile the recess, not the lift (see Elevation & Depth). There is still no confirm *step* — every tile click writes the slot, which the field is already a live view of — so the button's only job is closing the panel deliberately; see **Dismissal** for why it's the *only* thing that closes this panel.
- **Compounds** has no container of its own: **the panel *is* the listbox**, so it carries the popup recipe directly (`panel-mode-compounds`: `{colors.surface-1}` a step above the card it floats over, hairline ring, `max-h-72 overflow-y-auto`). Selecting does **not** close it — see **Dismissal**.

**Dismissal.** Both panels reversed course from their original stage 3/4 framing ("the panel is the mode's persistent UI, not a dismissible popup") after usability testing showed people expected a way out that wasn't "go find the dropdown again." An intermediate revision routed every dismiss path through switching `activeMolarMassMode` back to `'type-in'` — but that meant `#molar-mass` legitimately started showing Type in's own (often empty) slot right after a close, which read as data loss to anyone watching the field even though the mode's real data was never touched. **The fix: closing a panel and switching modes are now two entirely separate actions.** `activeMolarMassMode` changes *only* from an explicit dropdown pick (Type in included) — never as a side effect of a dismiss. Each panel-owning mode instead gets its own boolean (`buildCustomPanelOpen`, `compoundsPanelOpen`), read through one `isModePanelOpen(mode)` function that every visibility decision — show/hide, which panel the scroll/outside-click listener protects, and toggle-click's own close-vs-reopen branch — shares, so those three can't disagree about what "open" means for a given mode. Closing, now, is just `false` on the relevant flag: `#molar-mass`, the trigger label, and the field's `readOnly` state are untouched, because they were never wrong to begin with — they still reflect `activeMolarMassMode`, exactly as they did before the panel closed.

The two panels do NOT share one set of dismiss rules — each earned its own, deliberately:

- **Build custom closes ONLY via its own "Use this molar mass" button.** Escape, click-outside, and toggle-click (re-picking "Build custom" from the dropdown while it's already active) are all explicitly *not* wired to close it. Several tile picks in a row is this panel's normal flow, and any of those three firing on a stray click or keypress mid-build would cut it short without being asked to. Toggle-click still *reopens* the panel if it's currently closed — re-picking an already-active mode has to do something, and "nothing" would strand the user with no way back short of leaving the mode entirely.
- **Compounds closes via toggle-click or click-outside.** Both are a genuine close, not a collapse-in-place: `compoundsPanelOpen` goes `false`, `activeMolarMassMode` stays `'compounds'`. Toggle-click is symmetric — the same click that opens a closed panel closes an open one. Click-outside reuses the same capture-phase document-click pattern the mode dropdown's own listbox uses (and the retired accordion's `preset-listbox` used before it), scoped by DOM containment so a click on the panel itself, the mode wrapper, or the mode listbox is never mistaken for "outside" — and it's gated to only fire while `activeMolarMassMode === 'compounds'`, since Build custom has no click-outside path at all. **Escape does NOT close this panel** — dropped along with Build custom's, for the same reason: nothing in this app should out of habit fire a keystroke's worth of dismissal on a list the user might still be reading.
- **Selecting a compound does NOT close the panel.** Auto-close-on-pick was built, then reverted: it acted as a second, competing dismiss mechanism a user could trigger by accident mid-browse, and it made comparing two compounds a "reopen, then pick" chore each time. A pick and a dismissal are different actions now, full stop, on both panels — Build custom already worked this way, and Compounds was brought in line with it rather than kept as an exception.

Because `activeMolarMassMode` is off the table entirely for a dismiss, there's no focus-management asymmetry left to document either: nothing displaces focus by closing, so nothing needs to reclaim it.

**Two documented deviations, both deliberate:**

1. **Compounds has no trigger row.** Every other listbox in the app is the popup half of a combobox with a collapsed trigger showing the current value. This one has neither: the mode dropdown has already chosen "Compounds", and a second collapsed control to expand would be a redundant step. So the panel is `tabindex="0" role="listbox"` and carries `aria-activedescendant` itself (ARIA APG "Listbox", not "Combobox"), and the last selection is shown by `aria-selected` plus the pre-highlight on return rather than by a trigger label.
2. **`panel-mode-compounds`'s focus ring is `focus-visible:`, the only one in an app that is otherwise all `focus:`.** Every other focusable element here is an input or a button, where a ring on click reads as normal. Clicking an option focuses this whole ~280px panel, and a 2px green ring around all of it is both louder than anything else on the page and absent from the mockup. `focus-visible:` keeps the keyboard affordance and drops the pointer-only case. **Do not "normalise" this back to `focus:`** without re-checking what a click actually looks like.

**`element-tile`** / **`element-tile-selected`** — Individual elements in the Build custom grid.

The tile is a **horizontal** row, not a centered stack. Left to right: symbol chip → name/mass block → stepper, with the stepper pushed to the right edge. Container is `{colors.canvas}` #FAF9F5 — one step *below* the #ffffff Build custom panel it sits in, so it reads as a shallow well rather than a raised card (see Elevation & Depth) — rounded `{rounded.md}`, `box-shadow: inset 0 0 0 1px {colors.hairline}`, `{spacing.xs}` padding, `{spacing.xs}` gap between the left group and the stepper. `min-height` is **two explicitly different values by breakpoint, not one shared value** (the "56px" this line previously stated was never accurate — the shipped value has always been 52px at `mobile:`/≥520px and up): `60px` below 520px, `52px` at `mobile:` and up. The mobile value was raised from 52px to close a selection-time height jump — see the fix note under Known Gaps.

- **`element-tile-symbol`** — a 32×32px chip, not bare bold text on the card. Background `{colors.surface-3}` #EFEDE7 — one step *below* the `{colors.canvas}` #FAF9F5 tile, so the chip is a shallow inset within it (the same recess role it had as `{colors.surface-4}` when the tile was #ffffff — one tier lighter now that the whole tile stepped down). No border, no ring. Rounded `{rounded.xs}`, symbol centered in `{typography.element-symbol}` / `{colors.ink}`.
  - **Never apply `text-transform: uppercase` to the symbol.** The source design marks it uppercase, but only ever renders `H` — a single-letter symbol where the transform is invisible. Applied to the real dataset it produces `HE`, `NA`, `MG`, which are not chemical symbols; the case of the second letter is meaningful notation, not styling. Symbols render exactly as stored.
- **Name + mass** — stacked, **left-aligned**, 4px gap, immediately right of the chip at `{spacing.sm}` 12px. Name in `{typography.element-name}` / `{colors.ink}`; atomic mass in `{typography.element-mass}` / `{colors.ink-muted}` #4A4842. The mass sits a step back from the name deliberately — the name is what you scan for, the mass is confirmation — but the step is carried by weight and size (12px medium mono vs 14px regular sans) rather than by a low-contrast grey: `ink-muted` on the `{colors.canvas}` #FAF9F5 tile is ~8.7:1, clearing WCAG AA and AAA. (It was `{colors.ink-subtle}` #7A776D — ~4.25:1 on this ground — until that failed AA for the mass line as small text.) The name truncates with an ellipsis rather than wrapping or pushing the stepper out of the tile; at the documented column widths it does not truncate for any element in the dataset.
- **`element-tile-stepper`** — a bare flex row at the right edge, present only while selected. **No container border, no background, no padding, no radius.** The − / count / + sit directly on the tile. Gap `{spacing.xxs}` 4px. Count in `{typography.element-count}` / `{colors.ink}`. Renders **68 / 76 / 84px** at 1 / 2 / 3 digits. The count's size is independent of the buttons' — the buttons came down 28px → 24px without touching it.
  - The 4px gap is doing work the container used to. While the stepper was boxed, a 2px gap was legible because the border corralled the three controls; freestanding, that same 2px reads as cramped. **If the container ever comes back, the gap should tighten again** — the two decisions are coupled, not independent.
  - **The count span has a fixed width per digit count — 12 / 20 / 28px at 1 / 2 / 3 digits — and this is load-bearing, not cosmetic.** It is set from `String(qty).length` when the count is written, capped at the 3-digit width. Each value is a multiple of 4 and clears the 8.4px monospace advance per digit (8.4 / 16.8 / 25.2 of text).
  - **Do not revert it to `min-width` with content sizing above it.** A content-sized count measures 12.00 / **16.81** / **25.20**, so above nine it is fractional — and it sits *in front of* the **+** button, putting + at a fractional x. That is the exact condition that produced the original plus-glyph subpixel defect, and it would reappear silently at quantity 10 with nothing in the markup to hint at why. The fixed widths are what keep + on a whole pixel at every quantity; the scale-1 glyph geometry below only holds because of them.
  - **Above 999 the digits overflow the box rather than widening it.** Quantity is uncapped (+ has no ceiling), so four digits is reachable by clicking. At 1000 the 33.6px of text overflows the 28px span by 6px total, 3px each side, spilling into the 4px gaps without reaching either button; the stepper stays 84px and + stays whole-pixel. This is a deliberate trade — layout stability over a legible 4-digit count — on the grounds that a 4-digit subscript is not a real formula. If it ever needs to read correctly, add a 4-digit width (36px) rather than restoring content sizing.
- **Hover (unselected only)**: edge color shifts from `{colors.hairline}` to `{colors.hairline-tertiary}`. No fill, no drop shadow, width stays 1px so nothing reflows — it's a `box-shadow: inset` color swap, not a width change, so this was already reflow-free even before the border → box-shadow conversion. It signals "clickable", not "selected" — which is why it is neutral rather than a lighter green. Three edge states coexist and stay distinguishable: `hairline` #E5E2DA resting → `hairline-tertiary` #C4C0B2 hover → `primary` #02613E selected. The first two differ by value, the third by hue.
- **Selected**: edge only. The background stays `{colors.canvas}` #FAF9F5 and the edge changes to `box-shadow: inset 0 0 0 1px {colors.primary}`. Nothing else moves — no fill, no text-color shift.
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
- **Both buttons hover identically** — same fill, same shape, same size. The only difference between them is the glyph. A green `{colors.primary-soft}` tint on **+** was tried and reverted: an asymmetric hover on a two-button pair reads as one control being special rather than as two halves of the same stepper, and "increment" is not a state the accent is meant to mark. `{colors.surface-3}` and `{colors.hairline-strong}` were also considered and rejected — the former too weak to register as an *active* hover affordance (it is fine as a quiet static tint, which is why the symbol chip can use it), the latter too heavy, and `hairline-strong` now has a different job as the tile's hover *border*.
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

**`compound-listbox`** — the grouped Common Compounds list. It is a **reusable component**, not a one-off: its markup, paint, and index math are built once and driven by whoever owns it. Currently there is exactly one owner, the Compounds mode panel (see Cards & Panels), which mounts it as an always-open `role="listbox"` with no trigger.

- **Why it isn't a native `<select>`:** a native `<select>` with `<optgroup>`s hands the picker off to the OS on mobile — a wheel or a full-screen overlay depending on platform — which can't be restyled and doesn't respect the page's width. Twenty compounds across three groups (Common / Acids & Bases / Salts & Oxides) is exactly the shape of control that needs to stay in-page. The original `<select>` is gone entirely — see the `preset-select` note under Don't.
- **Where the split is.** The component owns everything that would be identical in any host: building the grouped options, the active/selected paint, `aria-activedescendant`, scroll-into-view, typeahead matching, and click/hover delegation. It does **not** own the lifecycle — whether the list opens and closes at all, where it is positioned, and what a selection does downstream are the host's. That split is by lifecycle, not by widget shape, because the two possible hosts (an always-open panel and the popup half of a combobox) are not expressible as options on each other. A second instance would supply its own lifecycle and its own `idPrefix`; nothing in the component assumes it is alone.
- **`idPrefix` is required, not decorative.** Option ids are what `aria-activedescendant` resolves against, so they are the instance's identity in the document. Two instances emitting the same ids would leave that reference ambiguous. The prefix belongs to the call site, not baked into the component. A test sweeps every `[role="option"][id]` in the document for duplicates.
- **ARIA:** `role="listbox"`, each compound a `role="option"`, each section a `role="group" aria-label="<section name>"` wrapping its options (`group` is a valid owned element of `listbox` in ARIA 1.2 — the direct analogue of `<optgroup>`).
- **Data:** reads `PRESETS`/`PRESET_GROUP_ORDER` from `src/utils/browseElements.ts` — the same `Preset[]` the Build custom formula readout's types come from — and builds both the group headings and the option rows from it at script load. There is no second, hardcoded copy of the compound list; `Preset.group` is what used to be each `<optgroup>`'s `label`.
- **Group headings:** `text-xs font-semibold uppercase tracking-[0.4px] text-ink-subtle`, same type treatment as a field label — `aria-hidden`, since the heading is decorative; the group's accessible name comes from the `role="group"`'s own `aria-label`.
- **Option rows:** `px-3 py-2 text-sm font-sans text-ink`, text `"<name> (<formula>) — <mass> g/mol"`.
- **Option states:** highlighted (keyboard-active **or** hovered) gets `bg-surface-2`, same fill as `pill-inactive-hover`. A committed selection (`aria-selected="true"`) gets `bg-primary-soft` / `text-primary-pressed` — the reserved use for `{colors.primary-soft}` noted under Colors. Hover and keyboard share **one** highlight state, updating `aria-activedescendant` identically; do not layer a second, visual-only hover on top of it. (There is no `hover:` class on the options — the highlight is entirely JS-driven, so a missing pointer listener means no feedback at all. A test hovers with a real mousemove for exactly this reason.)
- **Keyboard (as the Compounds panel drives it):** ArrowDown/Up move the highlight; Home/End jump to first/last; Enter/Space commits the highlighted option. Escape and Tab both have nothing bound to them here and are left to the browser — dismissal is the host's decision, not the component's (see "Where the split is" above), and the host doesn't give Escape a dismiss role either; see Dismissal under Cards & Panels for why. Typeahead: any single printable keypress buffers into a 500ms-debounced string and jumps the highlight to the next option (wrapping) whose name starts with it, searching from the current highlight.
- **Selection behavior — no confirm step.** A click, or Enter/Space on the highlight, writes the compounds slot; the store puts the mass into `#molar-mass` and dispatches the recalc. The selection is **not** reset afterward: leaving the mode and coming back shows the same compound `aria-selected` and pre-highlighted rather than starting from the top.

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
- Every edge in the system is `box-shadow: inset`, not `border` — see Elevation & Depth. This means a state that changes edge width (`text-input`'s 1px→2px on focus/error) never needs a compensating padding change: box-shadow doesn't participate in box sizing, so there is nothing for padding to offset. Don't reintroduce a padding trade "to be safe" — it isn't needed, and re-adding one would just make the box taller than its neighbors. The one deliberate exception is `molar-mass-mode-trigger`'s right-hand seam, which stayed a real `border-right` — see the note under Elevation & Depth for why.
- Put every number in DM Mono and every word in Public Sans.
- Apply `{rounded.pill}` only to the direction toggle, unit selectors, and buttons.
- Keep the calculator above the fold. It is the product.
- Format all calculated results to 6 decimal places.
- Empty-state text (result value, particle count value, and the copy icon) uses `{colors.ink-tertiary}`. Filled state restores each element's normal color. Do not invent a separate muted token per element, they all share ink-tertiary.
- State touch-viewport padding explicitly on every interactive control, per breakpoint. Never rely on it inheriting from desktop padding — that gap is how the 44px minimum was missed before.

### Don't
- Don't add drop shadows. Depth comes from the surface ladder. The sole exception is `panel-mode-build-custom`, the `position: fixed` Build custom overlay, which carries `0 4px 16px rgba(0,0,0,0.10)` *instead of* an edge because it floats on a different plane from the card — see Elevation & Depth. Don't extend this to any in-flow surface, and don't pair it with a border or inset ring on the panel itself.
- Don't use `{colors.error}` red for anything except validation errors.
- Don't use `{colors.primary}` as a large surface fill or on body text.
- Don't introduce a third font family.
- Don't nest containers at the same surface level — step up or don't nest.
- Don't add a marketing hero, a promotional CTA, or footer cross-links.
- Don't add a white input box, a badge, or a lock icon to the calculated result field. Whichever two fields are currently inputs have a white `text-input` box; the result field does not — that absence is now the only structural signal that it is read-only. Adding one back silently breaks it.
- Don't pill-round the element tiles or the calculator card.
- **Don't add a real `border` back to any element documented here as `box-shadow: inset`.** This shipped as a real defect twice while `text-input`'s edge was still a `border`: once when focus alone changed width (0.5px → 2px) with nothing offsetting it, and once when a later 1px/2px resting/focus split reopened the same shift with nothing offsetting it either — both times because a real border's width adds directly to the box. Reintroducing `border` on any of these elements (even at a fixed width, even "just for one state") brings that box-model coupling back with it. If an element genuinely needs a real border again — e.g. because a forced-colors concern turns out to need more than the sitewide `[class*="inset-ring-"]` fallback in `global.css` — treat that as a fresh decision requiring its own padding math, not a quick swap back. **`preset-select` was the one case where this fresh decision was made, and it no longer exists.** Native `<select>` chrome used to suppress the box-shadow on real mobile engines, so that control carried `border border-hairline` as its only edge instead of `inset-ring`. It was replaced by a scripted `role="listbox"` (see `compound-listbox`) with no native chrome to fight, so the escape hatch's justification is gone with it. The one real border still in the app is `molar-mass-mode-trigger`'s right-hand seam, which is a separate, separately-argued exception — see Elevation & Depth. If a real `<select>` is ever reintroduced anywhere, treat the border carve-out as a fresh decision again rather than assuming this note still applies to it.
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

**Two breakpoint keys are in play sitewide, not one.** Most layout/spacing switches above key off Tailwind's stock `md:` (768px); a smaller set — the field inputs, the field-stepper-pill, and (as of this pass) the unit pills and direction toggle — key off the project's own `mobile:` (520px, `--breakpoint-mobile`). This split across roughly 20 elements is deliberate, not drift, and is not being unified. Unit pills and the direction toggle are a **carved-out exception**: they used to sit on `md:` alongside most of the rest of the page, but that put them one breakpoint behind the inputs directly above them, visibly mismatched across 520–767px — so they moved to `mobile:` specifically to match the inputs they sit beside, not as a step toward collapsing the sitewide split. See Touch Targets below for the full before/after.

**A third key, Tailwind's stock `sm:` (640px), was also in play** on the header row's and the then-existing formula bar row's `flex-col`→`flex-row` switch (plus the `self-start`→`self-auto` alignment carried by the direction toggle inside the header row). Both rows contain content that already switches size at `mobile:` (520px) — the direction toggle segments and unit pills in the header row, nothing size-dependent in the formula bar itself but its row-wrap governs when its content lays out horizontally. That produced the same "split state" the unit-pill move above was meant to fix, one container level up: in the 520–639px range the toggle/pills inside the header were already desktop-sized while the row around them was still mobile-stacked. Both rows (and their `self-start`/`self-auto` dependents) were moved from `sm:` to `mobile:` to close this. If a new module wraps a `mobile:`-sized control in its own flex row, wrap the row at `mobile:` too — don't default to `sm:` or `md:` just because it's the more familiar Tailwind key.

### Touch Targets
All interactive controls hold a minimum 44×44px tap target on touch viewports. This is a hard requirement, not a guideline — it was a defect in an earlier build. State the touch padding explicitly per control; do not leave it to inherit from desktop.
- Pills and `toggle-direction` segments: 8px vertical / 12px horizontal padding on desktop (~32px effective height). On touch, padding increases explicitly to 12px vertical / 16px horizontal, landing exactly on the 44px floor (20px line-height + 2×12px) — this is not automatic from the desktop values. (Previously 14px vertical, which rendered 48px — 4px past the 44px floor rather than on it; tightened for the same reason as the button-primary padding below: land on the reference value organically rather than overshoot it.)
- The three direct-input number fields (Molar Mass / Mass / Moles) render at **44px at `mobile:` (≥520px) and up, 48px below it** — two explicitly different heights by breakpoint, not one shared value. Composition is line-height 24px + vertical padding + 2px border top and bottom; there is no `height` declaration anywhere, so **vertical padding is the only lever** (`py-2.5` = 10px below 520px → 48px; `mobile:py-2` = 8px at/above → 44px). An earlier version of this line claimed "40px on desktop; 44px on touch" — that was never true in the built app; both were measured at 44px before the mobile bump.
- Element tiles hold ≥44px on all viewports.
- Quantity steppers (− / +) in Build custom paint a 24×24px box at every viewport. The hit area and the painted box are deliberately separate: the `<button>` is a transparent wrapper around a 24×24 inner span that carries the radius and the hover fill. On desktop the wrapper adds no padding (24×24 total); on touch it adds **10px** on all sides, giving a 44×44px target while the painted box stays 24×24. The control looks identical at both widths — only the wrapper's padding changes, which is why the fill must live on the inner span and never on the button itself. Shrinking the visual size is always paid for by growing the wrapper's padding, never by letting the target shrink with it.
  - **The switch is keyed to the project's own `mobile` breakpoint (520px, `--breakpoint-mobile`), not Tailwind's stock `md` (768px)** — the utility is `p-2.5 mobile:p-0`, and it compiles into the same `@media (width >= 520px)` block as the `.field-row` direction switch. It previously used `md:p-0`, which left the stepper rendering phone-sized 44px targets across 520–767px while the rest of the layout was already in its desktop form. Measured: padding 10px and a 44×44 wrapper at **519**, 0px and 24×24 at **520**; stepper 108px → 68px; tile height 62px → 52px.
  - **Unit pills and the direction toggle (`toggle-g-to-mol` / `toggle-mol-to-g`) now key off `mobile` (520px) too.** They previously used `min-h-[44px] md:min-h-0 px-4 py-[14px] md:px-3 md:py-2` (Tailwind's stock 768px breakpoint) while the Molar Mass / Mass / Moles inputs above them already switched at 520px, so the 520–767px range showed the input in its desktop state with the pill row and toggle beneath it still mobile-sized on the same visual block. All three `md:` properties — `min-h-0`, `px-3`, `py-2` — moved to `mobile:min-h-0`, `mobile:px-3`, `mobile:py-2`, applied consistently across the mm/mass/moles pill markup, the direction toggle, and the `updatePillStyles()` JS function that re-applies these classes on every selection change. Verified matched (both mobile or both desktop, never split) against the inputs at 500, 540, 650, 750 and 800px via computed `min-height`/padding. This is a narrow, deliberate exception carved out of the sitewide split below — only these two components moved off `md:`; the other ~20 elements site-wide that intentionally key off `md` (768px) rather than `mobile` (520px) were left untouched.
- **`molar-mass-mode-trigger`** clears the floor without a touch-target class of its own, because it shares `text-input`'s vertical padding exactly (12px below 520px, 10px at `mobile:` and up) against the same 20px line box. Measured **48px at 390 and 519, 44px at 520 and 1280** — identical to the Molar Mass input beside it at every width, which is also the requirement for the two halves to read as one fused control. **Do not change one half's vertical padding without changing the other's**: the two heights are one number, and a mismatch shows as a step in the shared edge.
- `button-copy`: 44×44px hit area at all viewports, not just touch — the icon itself stays small (16px) inside it.
- **`button-primary`** ("Use this molar mass"): `py-3` (12px) top and bottom around a 20px line-height (`{typography.button}`, `text-sm`) lands on **44px at every viewport**, no `mobile:` split needed — the padding this recipe already specifies (12px 20px) happens to solve the floor exactly, the same "land on the reference value organically" case the pills bullet above references.
- **`field-stepper-pill`** (Molar Mass / Mass / Moles direct-input steppers) — replaces the old `text-input` chevron stepper, which shipped at ~16×24px (two 16×12px chevrons) as a deliberate under-44px exception. Real usage data ("taps sometimes land wrong or require multiple attempts") came in against that exception, so this closes it out rather than extending it — see the retired entry's replacement note under Known Gaps. Restyled twice since: once against measured Figma values after an initial pass over-borrowed `element-tile-stepper`'s outlined-pill look (see field-stepper-pill-button-hover/-pressed below for the corrected per-button fill), and once to correct the outer shape after `rounded-full` was applied to both buttons independently — see the next bullet for why that was wrong and what replaced it.
  - **Shape is one capsule, not two circles — rounding is per-side, not per-button, and the empty state is a deliberate exception to that rule.** Read this bullet before touching the radius classes; "fully rounded corners" is exactly the ambiguous phrasing that produced the earlier regression, so it is not used here.
    - **"−" is *always* rounded on its left side only** (`rounded-l-full`, right corners square) — it never exists on screen without "+" immediately beside it, so it has no state where full rounding would ever be correct.
    - **"+" is a FULL circle (all four corners rounded) only while it is alone** — the empty/zero-value state. The instant "−" mounts beside it, "+" switches to right-side-only rounding (`rounded-r-full`, left corners square), toggled in `updateStepperState()` alongside its other state classes. Do not "normalize" "+" to one shape across both states — the shape difference between its two states is intentional, not an inconsistency to clean up.
    - **The two chips carry zero layout gap** (`flex` row, no `gap-*` utility) and sit flush against the 1px white divider — measured gap between the down-chip's right edge and the up-chip's left edge is **exactly 1.00px**, i.e. precisely the divider's own width and nothing more. With both chips' inner edges square (not rounded) and zero gap, the pair's outer silhouette reads as one continuous capsule, radius-matched to what a single pill of that height would have — confirmed by measuring the outer corners (down-chip's left pair, up-chip's right pair) against the chip's own half-height. **If both buttons ever go back to unconditional `rounded-full`, the outer curves separate visually and produce a false "gap" between two circles — this exact defect already shipped once and must not recur.**
  - **Painted vs. hit area are deliberately different, same pattern as `element-tile-stepper-button` — and both are responsive.** Each chip paints at **24×24px at `mobile:` (≥520px) and up, 32×32px below it** (the desktop size matches Figma; the mobile size uses the same responsive-touch-target philosophy as `element-tile-stepper-button`'s own `mobile:` keying). The tappable `<button>` around each chip is transparent and taller than its paint — **44px tall on desktop, 48px on mobile**, matching the input's own height at that breakpoint, hit-width matching the chip's own painted width — via `py-2.5` (desktop) / `py-2` (mobile) padding on the outer button only; the fill, radius, and icon live on an inner span that stays at its breakpoint's painted size regardless. Height-only growth, not width: widening the hit box horizontally would grow the capsule itself, which the inset/width budget below doesn't have room for.
    - **The padding pair did not change when the mobile chip went 28→32 and the mobile input went 44→48**, because both grew by the same 4px in the same change: 24+10+10 = 44 (desktop), 32+8+8 = 48 (mobile). That coincidence is load-bearing — change the chip size or the input height *independently* and the padding must be recomputed, or the hit area stops matching the input box.
    - **The desktop `10px` (`mobile:py-2.5`) is off the 4px grid, and a later pass deliberately left it that way.** Both grid-aligned neighbors were checked against the math above and both break the match: `mobile:py-2` (8px) gives 24+8+8 = 40px, undershooting the 44px input height by 4px; `mobile:py-3` (12px) gives 24+12+12 = 48px, overshooting it by 4px. Since matching the input's own height exactly is the entire point of this padding (see above), **this value is held at 10px**, not grid-aligned — the off-grid value is the correct one here, not an oversight. If the chip size or input height is ever revisited, recompute this pair from the formula above rather than nudging it to the nearest 4px step.
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
- **Element grid** (Build custom panel): 3-up → 2-up → 1-up, via computed integer columns rather than declared breakpoints. Measured: 3-up at **895px and up**, 2-up **894–653**, 1-up **652 and below**. The column never narrows below the 222px truncation floor; the column count drops instead. Those thresholds are outcomes, not declarations — they move with anything in the width chain (see "What 712 depends on").
- **Mode panels**: no collapse of their own. They are `position: fixed` overlays sized from the Molar Mass control's measured rect, so they track the card's width at every viewport and are never a flex/grid child that could reflow. The only breakpoint-keyed value on them is the Build custom panel's own padding (16px below 520px, 20px at `mobile:` and up).
- **Unit pills**: all units render inline at every width and wrap onto additional lines as needed — there is no reveal/overflow interaction.
- **Direction toggle**: stays in the card header at all widths; may wrap below the title under 520px
- **Formula / Molar Mass readout** (Build custom panel): a left/right split at every width — Formula left, Molar Mass right — and it does **not** stack below 520px. It used to, because a third item (the "Use this molar mass" confirm button) had to go full-width there; with that button gone, two short readouts fit side by side even at 240px, so the `flex-col mobile:flex-row` switch and the `mobile:`-scoped alignment classes that went with it were dropped rather than left in place doing nothing. The general lesson survives the specific case: whenever a container's flex-direction is breakpoint-scoped, audit its children's own `self-*`/`text-*` classes at the same time — the container switching doesn't automatically fix values that were tuned for the old direction.

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
- A **success** semantic state is not defined — the calculator has no success confirmation. Add one only if a real use case appears.
- A **warning** semantic state (`{colors.warning}` / `{colors.warning-soft}`) is now defined, for non-error advisory copy in the explainer/theory section (common-mistake callouts). It is deliberately not an input/validation state — see Semantic under Colors.
- The explainer/theory section below the calculator has no component definitions yet — that section's design is deliberately deferred.
- `{colors.surface-3}` and `{colors.surface-4}` both have consumers and are no longer listed as unused headroom: `surface-3` fills `molar-mass-mode-trigger` (the left half of the fused Molar Mass control, one step up from the input beside it) **and** the element tile's symbol chip (one step below the #FAF9F5 tile — a shallow inset); `surface-4` fills only the element tile's stepper hover circle now (the symbol chip stepped off it when the Build custom panel was re-grounded — panel #ffffff, tile `{colors.canvas}`, chip `{colors.surface-3}`).
- `{colors.primary-soft}` has exactly one consumer: the committed (`aria-selected="true"`) row in `compound-listbox`, paired with `{colors.primary-pressed}` text. That is the whole of its licensed use. Do not reach for it to "balance" the element tile's selected state — that state is deliberately edge-only — and do not reintroduce it on a single stepper button.
- **Closed: the old `text-input` chevron stepper's sub-44px exception.** It was flagged here as "revisit if usage data shows it's hard to hit on touch devices" — that data came in, and it was replaced by `field-stepper-pill` (24×24px desktop / 32×32px mobile painted buttons on a 44px-tall desktop / 48px-tall mobile hit area, see Touch Targets). Not extended, not re-scoped: the old component and its exception no longer exist.
- **Element tile names truncate on narrow phones. This is an accepted trade-off, not an open gap.**

  **Flag: not re-verified against either the border → box-shadow conversion or the move into the mode panel.** The whole band below — the 375–415/375–395 thresholds, the 221px tile width, the 43px name budget — was measured while this grid still lived in the Browse Elements accordion, whose panel was 48px wider than the mode panel that now hosts it, and before the sitewide border → box-shadow conversion freed another ~4px. Only the desktop chain was re-measured (see "What 712 depends on"). The narrow-viewport numbers below have moved by some amount in both directions and are recorded as history, not as current measurements; re-measure before relying on any of them.

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

  **Fixed: the tile no longer grows on select, below 520px.** This section previously read "measure against 62px, not 52px," documenting that mobile tiles grew **52 → 62px on select** because `min-h-[52px]` stopped binding once the 44px touch button forced the row taller — noted here as an existing fact for width/truncation math, not itself declared an accepted trade-off the way the truncation issue above it is. A later pass closed it: `element-tile`'s `min-height` is now `60px` below 520px (was `52px`) / unchanged `52px` at `mobile:` and up, so the unselected row is already as tall as the selected row ever needed to be, and selecting no longer changes the tile's height. Re-measured live rather than assuming the documented number: the selected-state height was **60px**, not the 62px this section previously stated — 2px less, plausibly the same border → box-shadow conversion flagged as unswept at the top of this section (a real border consumes layout space a `box-shadow: inset` does not), consistent with the identical mechanism already documented for the desktop grid width (756 → 760) under "What 760 depends on." Desktop (`mobile:` and up) was checked and is unaffected — the stepper button is 24px there, matching the chip, so the mismatch this fix addresses never existed above 520px; confirmed via computed height (52px, both states, unchanged) rather than assumed. **The truncation band and its 43px name budget are unaffected** — that math is entirely about tile *width*, and this fix only touches `min-height`.
