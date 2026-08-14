# FreeChemLab — Spacing Audit (read-only)

Scope: `src/pages/index.astro` (all inline classes, the page's `<style>` block, and JS-applied spacing), plus `src/layouts/Layout.astro` and `src/styles/global.css` for anything shared. No other components are imported by this page. Values converted from Tailwind's `--spacing: 0.25rem` (4px) base scale unless marked "arbitrary."

Three breakpoint systems are in play simultaneously on this page: the project's own `mobile:` (≥520px, `--breakpoint-mobile`), and Tailwind's stock `sm:` (≥640px) and `md:` (≥768px). This matters for reading the table below — "desktop" isn't always the same pixel width from row to row. Flagged explicitly in the Mismatches section.

---

## 1. Top navigation bar

| Element | Property | <520px | ≥520px | Source |
|---|---|---|---|---|
| Nav inner container | padding (all sides via px) | 16px (h) | 16px (h) | `px-4` |
| Logo (dot + wordmark) | gap | 6px | 6px | `gap-1.5` |
| Nav list | gap (space-x, margin-left based) | 4px | 4px | `space-x-1` |
| "Calculator" nav pill | padding-x / padding-y | 12px / 6px | 12px / 6px | `px-3 py-1.5` |

## 2. Main container / breadcrumb

| Element | Property | <520px | ≥520px (520–767) | ≥768px | Source |
|---|---|---|---|---|---|
| `<main>` | padding-x | 16px | 16px | 16px | `px-4` |
| `<main>` | padding-y | 16px | **16px** | **24px** | `py-4 md:py-6` — switches at **768px**, not 520 |
| Breadcrumb nav | margin-bottom | 16px | 16px | 16px | `mb-4` |
| Breadcrumb items | gap (space-x) | 8px | 8px | 8px | `space-x-2` |

## 3. Calculator card shell

| Element | Property | <520px | ≥520px | Source |
|---|---|---|---|---|
| Card outer padding | padding (all sides) | 16px | 24px | `p-[16px] mobile:p-6` — arbitrary value used for the 16px side even though `p-4` is equivalent |

## 4. Card header row (title + direction toggle)

| Element | Property | <520px | ≥640px (`sm:`) | Source |
|---|---|---|---|---|
| Header row | gap (title↔toggle when stacked) | 16px | 16px | `gap-4` |
| Header row | padding-bottom | 20px | 20px | `pb-5` |
| Header row | margin-bottom | 24px | 24px | `mb-6` — switches layout at `sm:` (640px), a third breakpoint |

## 5. Direction toggle

| Element | Property | <520px | ≥520px | ≥768px (`md:`) | Source |
|---|---|---|---|---|---|
| Toggle container | gap (between segments) | 4px | 4px | 4px | `gap-1` |
| Toggle container | padding | 4px | 4px | 4px | `p-1` |
| Each segment button | padding-x | 16px | 16px | **12px** | `px-4 md:px-3` |
| Each segment button | padding-y | **14px** | **14px** | **8px** | `py-[14px] md:py-2` — arbitrary, off-grid |
| Segment internal (g/chevron/mol) | gap | 4px | 4px | 4px | `gap-1` |

## 6. Molar Mass section

| Element | Property | <520px | ≥520px | Source |
|---|---|---|---|---|
| Field-half outer padding (top/bottom/left) | padding | 24px | 24px | `p-6` |
| Field-half padding-right (desktop only, shared-midline gutter) | padding-right | 24px (unaffected) | **12px** | `.field-half:first-child { padding-right: 12px }` in the page's `<style>` block — overrides `p-6`'s right side |
| Label row | margin-bottom | 8px | 8px | `mb-2` |
| Input | padding-left | 12px | 12px | `pl-3` |
| Input | padding-right (reserves stepper capsule) | 80px | 72px | `pr-[80px] mobile:pr-[72px]` (arbitrary) |
| Input | padding-y | **12px** | **10px** | `py-[12px] mobile:py-[10px]` (arbitrary) |
| Stepper group | inset offset (right) | 8px | 8px | `right-2` |
| Stepper buttons | padding-y | 8px | **10px** | `py-2 mobile:py-2.5` |
| Error message row | gap (icon↔text) | 8px | 8px | `gap-2` |
| Error message row | margin-top | 4px | 4px | `mt-1` |
| Unit pill wrapper | margin-top | 16px | 16px | `mt-4` |
| Unit pill row | gap | 8px | 8px | `gap-2` |
| Each unit pill | padding-x | 16px | **12px** (`md:`) | `px-4 md:px-3` |
| Each unit pill | padding-y | **14px** | **8px** (`md:`) | `py-[14px] md:py-2` — arbitrary, off-grid |

## 7. Mass section

Structurally identical to Molar Mass — same values throughout: field-half padding (24px, with `padding-left: 12px` desktop-only mirror via `.field-half-divider`), label `mb-2` (8px), input `pl-3/pr-[80px]-[72px]/py-[12px]-[10px]`, stepper `right-2`/`py-2`-`py-2.5`, error row `gap-2`/`mt-1`, unit pills `mt-4`/`gap-2`/`px-4 md:px-3`/`py-[14px] md:py-2`. **No mismatch against Molar Mass** — the two sections are spacing-identical. (Mass additionally has a copy button, `right-0`, no padding classes of its own.)

## 8. Browse Elements trigger + panel

| Element | Property | <520px | ≥520px | Source |
|---|---|---|---|---|
| Trigger button | gap (chevron↔text) | 8px | 8px | `gap-2` |
| Panel | margin-top | 12px | 12px | `mt-3` |
| Each tab button | padding-x / padding-y | 16px / 8px | 16px / 8px | `px-4 py-2` |
| Presets tab content | padding (all sides) | 20px | 20px | `p-5` |
| "Common Compounds" label | margin-bottom | 8px | 8px | `mb-2` |
| Preset `<select>` | padding-x / padding-y | **14px** / **10px** | **14px** / **10px** | `px-3.5 py-2.5` — both arbitrary/off-grid, and a different padding recipe from the number inputs above |
| "Use this molar mass" (preset) | margin-top | 12px | 12px | `mt-3` |
| "Use this molar mass" (preset) | padding-x / padding-y | 20px / **10px** | 20px / **10px** | `px-5 py-2.5` |
| Custom tab content | padding (all sides) | 20px | 20px | `p-5` — matches presets tab |
| Element search input | padding-x / padding-y | **14px** / **10px** | **14px** / **10px** | `px-3.5 py-2.5` — same recipe as the preset select |
| Element search input | margin-bottom | 16px | 16px | `mb-4` |
| Element grid scroll wrapper | margin-bottom | 16px | 16px | `mb-4` |
| Element grid | gap (static fallback) | 8px | 8px | `gap-2` |
| Element grid | gap (**actual rendered value**) | JS-computed, typically 12px in the 3-column case (or the 8px floor in tighter layouts) | same mechanism | **JS-applied** — `layoutElementGrid()` sets `elementGrid.style.columnGap` at runtime and overrides the static `gap-2` class entirely |
| Empty-state message | padding-y | 16px | 16px | `py-4` |
| Formula bar | margin-top / padding-top | 16px / 16px | 16px / 16px | `mt-4 pt-4` |
| Formula bar | gap | 12px | 12px | `gap-3` — layout switches to row at `sm:` (640px) |
| "Formula" / "Molar Mass" mini-labels | margin-bottom | **2px** | **2px** | `mb-0.5` — arbitrary-scale, sharply smaller than every other label gap on the page |
| "Use this molar mass" (custom) | padding-x / padding-y | 20px / **10px** | 20px / **10px** | `px-5 py-2.5` — matches the preset variant |

### Element tile (JS-rendered grid card)

| Element | Property | Value (all widths) | Source |
|---|---|---|---|
| Tile | gap / padding | 8px / 8px | `gap-2 p-2` |
| Tile body (symbol→name block) | gap | 12px | `gap-3` |
| Name/mass stack | gap | 4px | `gap-1` |
| Tile stepper | gap | 4px | `gap-1` |
| Tile stepper button | padding | **10px** below 520px, **0px** at/above | `p-2.5 mobile:p-0` — correctly keyed to the app's own `mobile:` breakpoint (unlike the unit pills above) |

## 9. Result slot (Moles)

| Element | Property | <520px | ≥520px | Source |
|---|---|---|---|---|
| Card padding | padding (all sides) | 24px | 24px | `p-6` — matches Molar Mass/Mass field-half base padding |
| Label row | margin-bottom | 8px | 8px | `mb-2` — matches Molar Mass/Mass |
| Input (readonly/result state) | padding | 0px | 0px | `px-0 py-0` — deliberate, no box per the read-only signal |
| Input (editable state, mol→g mode) | padding | same as Molar Mass/Mass input | same | **JS-applied** via `EDITABLE_INPUT_CLASS` — identical `pl-3/pr-[80px]-[72px]/py-[12px]-[10px]` |
| Stepper | inset offset | 8px | 8px | `right-2` — matches other steppers |
| Error message row | gap / margin-top | 8px / 4px | 8px / 4px | `gap-2 mt-1` — matches Molar Mass/Mass |
| Particle count row | padding-top / gap | 12px / 4px | 12px / 4px | `pt-3 gap-1` |
| Unit pill wrapper / row | margin-top / gap | 16px / 8px | 16px / 8px | `mt-4` / `gap-2` — matches other sections |

## 10. Vertical rhythm between major blocks

| Element | Property | Value | Source |
|---|---|---|---|
| Fields grid → Browse block → Result slot | gap | 24px, all widths | `gap-6` on the `flex flex-col` wrapping all three |

## 11. Footer

| Element | Property | Value | Source |
|---|---|---|---|
| Footer | padding-y | 16px | `py-4` |
| Footer inner | padding-x | 16px | `px-4` — matches header/main's horizontal page gutter |

---

## Flags

### A. Spacing mismatches between visually-similar elements

1. **Page vertical padding vs. card padding switch at different breakpoints.** `<main>`'s `py-4 md:py-6` steps up at **768px**; the calculator card's own `p-[16px] mobile:p-6` steps up at **520px**. Between 520–767px the card is already at its "desktop" 24px padding while the page around it is still at "mobile" 16px — the two paddings that visually stack (page gutter + card gutter) move independently instead of together.

2. **Unit pills and direction-toggle segments switch breakpoint at 768px (`md:`), while the input fields directly above them switch at 520px (`mobile:`).** In the 520–767px range, an input's own padding is already "desktop" (`py-[10px]`) but its unit-pill row two lines below is still "mobile" (`py-[14px]`, `px-4`) — same visual block, two different states. This is the padding-level symptom of the "two touch-target breakpoints" issue DESIGN.md already flags for `min-h-[44px] md:min-h-0`.

3. **The Preset `<select>` and the element search `<input type="search">` use a different padding recipe (`px-3.5 py-2.5` = 14px/10px) than the three calculator number inputs (`pl-3 py-[12px]/[10px]` = 12px/12px-or-10px)**, despite all five being text-entry controls that read as the same component type at a glance.

4. **The "Formula" / "Molar Mass" mini-labels use `mb-0.5` (2px)** — every other label-above-value pairing on the page (Molar Mass, Mass, Moles, "Common Compounds") uses `mb-2` (8px). These two are self-consistent with each other but stand out sharply against the rest of the page's label spacing.

5. **`md:col-span-2` appears on both the Browse-panel wrapper and the result-slot** — but their shared parent is `flex flex-col`, not a grid, so both `col-span` utilities are inert. Not a spacing value per se, but worth noting since it reads as intentional grid-alignment that isn't actually doing anything.

### B. Values off the 4px grid

| Value | Where |
|---|---|
| `py-[14px]` (14px) | Direction-toggle segments (mobile), all unit pills (mobile) |
| `py-2.5` / `mobile:py-2.5` (10px) | Preset select, search input, both "Use this molar mass" buttons, Molar Mass/Mass/Moles stepper buttons (desktop) |
| `px-3.5` (14px) | Preset select, search input |
| `py-1.5` (6px) | "Calculator" nav pill |
| `gap-1.5` (6px) | Logo (dot + wordmark) |
| `mb-0.5` (2px) | Formula bar's two mini-labels |
| `py-[12px]` (12px) *is* on-grid, but its paired desktop value `mobile:py-[10px]` (10px) is not | Molar Mass, Mass, Moles (editable) inputs |
| `p-2.5` (10px) | Element-tile stepper button (below 520px) |

Everything else on the page — `p-6`, `p-5`, `p-4`, `px-4`, `gap-2`, `gap-3`, `gap-4`, `gap-6`, `mb-2`, `mb-4`, `mt-1`, `mt-3`, `mt-4`, `pt-3`, `pt-4`, `pb-5`, `pr-[80px]`/`pr-[72px]`, the field-half's `12px` first-child/divider padding, and the JS-computed element-grid gap — lands cleanly on 4px multiples.

No files were changed as part of producing this audit.
