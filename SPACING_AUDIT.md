# Spacing Audit — Calculator Page (v2)

**Status:** read-only report as originally written. Two follow-up passes have since acted on this audit: the first resolved Flags A–E (code + DESIGN.md), the second resolved the nav-pill and search-input findings below — see the "Resolution log" notes inline. Table rows below reflect the **original** audited values; where a fix changed a value, the row is annotated rather than silently rewritten, so this stays a record of what was found as well as what changed.
**Scope:** [src/pages/index.astro](src/pages/index.astro), [src/layouts/Layout.astro](src/layouts/Layout.astro), [src/styles/global.css](src/styles/global.css)
**Purpose:** baseline inventory for standardizing spacing rules going forward, including new modules built after this one.

---

## How to read this

The project defines a **non-standard breakpoint**: `--breakpoint-mobile: 520px` (`src/styles/global.css:77`). Despite the name, the `mobile:` prefix means `min-width: 520px` — i.e. it fires on the **larger** screens. So throughout this report:

- **"Mobile" column** = unprefixed class value = viewport **< 520px**
- **"Desktop" column** = `mobile:`-prefixed value = viewport **≥ 520px**

Standard Tailwind `sm:` (640px) and `md:` (768px) also appear in a few places — a **different** breakpoint from the project's own 520px convention, called out below where it matters.

Token scale in scope, from `global.css:66-74`: `--spacing-xxs 4 · xs 8 · sm 12 · md 16 · lg 24 · xl 32 · xxl 48 · section 96`.

**Grid legend:** ✅ on the 4px grid · ⚠️ off-grid. Every off-grid value found in this codebase is **exactly 2px** off its nearest grid step (never 1, 3, or 5), so every ⚠️ below reads as "2px short of / past X."

---

## 🚩 Top-priority flags (read this part first)

### A. DESIGN.md contradicts the shipped code, twice, on the exact rhythm it's trying to define

`DESIGN.md:528` ("Whitespace Philosophy"): *"Vertical rhythm inside the card stays at `{spacing.md}` 16px between blocks; the page keeps `{spacing.lg}` 24px between the breadcrumb and the card."*

- **Breadcrumb → card:** actual is `mb-4` = **16px** (`index.astro:34`), not the documented 24px.
- **Inter-block rhythm inside the card** (Molar-Mass/Mass card → Browse Elements → Result slot): actual is `gap-6` on the flex column = **24px** (`index.astro:92`), not the documented 16px.

The two numbers are exactly swapped relative to the doc. No commit in history touches this — it's not a "known, already fixed" item, it's new.

> **Resolution log:** DESIGN.md's numbers corrected to match shipped code (16px breadcrumb→card, 24px inter-block). Separately, the underlying inconsistency was then fixed in code too (see Flag C) and DESIGN.md's Whitespace Philosophy section was expanded to state two explicit rhythm tiers — card-internal (24px) vs. page-level (16px) — so this doesn't recur. Also corrects an imprecision in the original framing below: `pb-5`/`gap-6` are **both card-internal** (siblings inside the same `<section>`), not one page-level and one card-internal — `mb-4` (breadcrumb→card) is the only genuinely page-level value here.

### B. Segmented tab padding contradicts DESIGN.md

`DESIGN.md:594`: *"padding 8px 4px"* for Presets/Build custom tabs. Actual: `py-2 px-4` = **8px vertical / 16px horizontal** (`index.astro:336`, `343`). Horizontal padding is 4× the documented value, not a rounding difference.

> **Resolution log:** DESIGN.md corrected to "padding 8px 16px." No code change — the audited code was already the intended value; only the doc was wrong.

### C. Header-row-to-content gap uses a third, undocumented rhythm value

The header row (title + direction toggle) sits above the input card on `pb-5` = **20px** (`index.astro:57`). That's a third distinct "separate two major blocks" value alongside the 16px and 24px above — none of the three agree, and DESIGN.md's Whitespace Philosophy paragraph doesn't mention this one at all.

*(Framing correction, made during resolution: this description is imprecise. `pb-5` sits on the `<header>`, which is a child of the calculator `<section>` — it separates the header row from the first field block, both **inside** the card. It's the same conceptual tier as `gap-6`, not a third page-level tier alongside `mb-4`.)*

> **Resolution log:** `pb-5` (20px) changed to `pb-6` (24px) in `index.astro:57`, unifying it with `gap-6` — both are now the single card-internal rhythm value. `mb-4` (breadcrumb→card, page-level) was left unchanged since it's a different tier with no second instance to reconcile against. Visually verified at 500/540/650/750/800px — no crowding. Documented in DESIGN.md's Whitespace Philosophy section as the "card-internal rhythm" tier.

### D. Formula-bar mini-labels use 2px instead of the 8px caption-to-value spacing used everywhere else

Every other field caption ("Molar Mass," "Mass," "Moles," "Common Compounds") sits `mb-2` (8px) above its control. The two formula-bar captions ("Formula," "Molar Mass" inside Build Custom) use `mb-0.5` = **2px** (`index.astro:427`, `431`) — same visual role, 4× less space, and it's off the 4px grid on top of that (2px is equidistant from 0 and 4). Undocumented anywhere in DESIGN.md.

> **Resolution log:** Both formula-bar labels changed to `mb-2` (8px), matching every other caption on the page. Visually verified at all five widths — reads cleanly at the formula bar's smaller scale, not loose. Documented as a standing rule in DESIGN.md's Spacing System section ("Caption-above-value labels: 8px, at every breakpoint").

### E. Header row wrap breakpoint (640px) doesn't match its own contents' breakpoint (520px)

The header row switches `flex-col` → `sm:flex-row` at **640px** (`index.astro:57`), but the direction-toggle buttons inside it switch their own padding from mobile→desktop size at **520px** (`mobile:` prefix, fixed by commit `5ff219b`). Between 520–639px the toggle is already desktop-sized while the row around it is still in mobile (stacked) layout. `5ff219b` fixed the toggle's *own* padding breakpoint but never touched the row's wrap breakpoint — so the mismatch it set out to close still exists one level up, just not where the commit looked. Same pattern on the formula bar (`sm:flex-row` at `index.astro:425`) and main's `py-4 md:py-6` (768px, `index.astro:32`, **left as-is** — this one is `main`'s vertical padding, not a row-wrap/content-size split, and wasn't part of the requested fix).

> **Resolution log:** Header row and formula bar row both changed from `sm:flex-row`/`sm:items-center` to `mobile:flex-row`/`mobile:items-center`. Their `self-start`/`sm:self-auto` dependents (direction-toggle wrapper, "Use this molar mass" button in the formula bar) were changed to `self-start`/`mobile:self-auto` too — otherwise the fix would have just relocated the same split-state bug to the alignment property instead of closing it. Verified no split state at 500/540/650/750/800px. Documented in DESIGN.md's breakpoint section as an extension of the existing `mobile:` carve-out list.

---

## Section-by-section inventory

### 1. Nav bar (`<header>`, `index.astro:7-30`)

| Element | Property | Mobile | Desktop | Source | Grid? |
|---|---|---|---|---|---|
| Header inner wrap | padding-x | 16px | 16px | `px-4` | ✅ |
| Logo/wordmark link | gap | 6px (orig.) | 6px (orig.) | `gap-1.5` (orig.) | ⚠️ 2px off 4 **and** 2px off 8 (equidistant) → **RESOLVED to 4px** (`gap-1`), chosen over 8px after a visual A/B — 8px visibly separated the dot from the wordmark, 4px kept the tight logotype grouping closest to the original 6px. |
| Nav `<ul>` | gap | 4px | 4px | `space-x-1` | ✅ |
| "Calculator" nav pill | padding-x | 12px (orig.) | 12px (orig.) | `px-3` (orig.) | ✅ |
| "Calculator" nav pill | padding-y | 6px (orig.) | 6px (orig.) | `py-1.5` (orig.) | ⚠️ same tie as above |

**Flag:** the "Calculator" nav pill is a pill-shaped button but uses a completely different recipe from every other pill in the app (unit pills, direction toggle) — fixed `px-3/py-1.5`, no `mobile:` touch-target adjustment, no `min-h-[44px]`. Plausibly intentional (persistent nav-state chip, not an interactive multi-value toggle) but it is a same-component-type/different-recipe case.

> **Resolution log:** brought in line with the unit-pill/direction-toggle recipe: `min-h-[44px] mobile:min-h-0 px-4 py-[14px] mobile:px-3 mobile:py-2` (+ `flex items-center justify-center` to keep the text centered at the new heights). Color treatment (`bg-surface`/`inset-ring-hairline`/`text-ink`) deliberately left unchanged — that's the "current page" signal, a third visual state distinct from `pill-active`/`pill-inactive`, and wasn't part of this fix. Confirmed via computed style and screenshots at 320/375/500/540/650/800px that the nav bar's `h-14` (57px incl. border) never changes and the pill never overlaps the logo, even at 320px. New padding-y (14px mobile / 6px→8px desktop) is now on the same off-grid pattern as every other touch-adjusted pill.

### 2. Breadcrumb (`index.astro:34-52`)

| Element | Property | Mobile | Desktop | Source | Grid? |
|---|---|---|---|---|---|
| Breadcrumb `<nav>` | margin-bottom | 16px | 16px | `mb-4` | ✅ (but contradicts DESIGN.md — see Flag A) |
| Breadcrumb `<ol>` | gap | 8px | 8px | `space-x-2` | ✅ |

### 3. Card shell (`index.astro:32`, `55`)

| Element | Property | Mobile | Desktop | Source | Grid? |
|---|---|---|---|---|---|
| `<main>` | padding-x | 16px | 16px | `px-4` | ✅ |
| `<main>` | padding-y | 16px | 24px | `py-4 md:py-6` | ✅ (but `md:` = 768px, not the project's 520px `mobile:`) |
| Calculator card (`<section>`) | padding (all sides) | 16px | 24px | `p-[16px] mobile:p-6` | ✅ — matches `DESIGN.md:469` exactly |
| Inputs wrapper (field-row + browse + result) | gap (vertical) | 24px | 24px | `gap-6` | ✅ (but contradicts DESIGN.md — see Flag A) |

### 4. Header row + Direction toggle (`index.astro:57-89`)

| Element | Property | Mobile | Desktop | Source | Grid? |
|---|---|---|---|---|---|
| Header row | gap (title↔toggle) | 16px | 16px | `gap-4` | ✅ |
| Header row | padding-bottom | 20px | 20px | `pb-5` | ✅ (see Flag C — third undocumented rhythm value) |
| Direction toggle container | padding | 4px | 4px | `p-1` | ✅ — matches `DESIGN.md:586` |
| Direction toggle container | gap (between segments) | 4px | 4px | `gap-1` | ✅ — matches DESIGN.md |
| Each toggle segment button | padding-x | 16px | 12px | `px-4 mobile:px-3` | ✅ |
| Each toggle segment button | padding-y | 12px | 8px | `py-3 mobile:py-2` | ✅ **RESOLVED** — was `py-[14px]` (14px, off-grid); changed to `py-3` (12px), landing exactly on the 44px touch-target floor (20px line-height + 2×12px) rather than overshooting to 48px. Verified via computed style: 44px at mobile, unchanged 36px at desktop. |
| Toggle segment inner (g/chevron/mol) | gap | 4px | 4px | `gap-1` | ✅ |

Toggle padding recipe: fixed by commit `5ff219b` to match unit pills (breakpoint alignment) — **confirmed current, not stale**. The mobile `py-[14px]` value itself was later grid-aligned to `py-3` (12px), see the toggle-segment padding-y row above.

### 5. Molar Mass section (`#input-slot-a`, `index.astro:99-180`)

| Element | Property | Mobile | Desktop | Source | Grid? |
|---|---|---|---|---|---|
| Slot padding (all sides) | 16px | 24px | `p-[16px] mobile:p-6` | ✅ — matches `card-field` spec, `DESIGN.md:625` |
| Label row | margin-bottom | 8px | 8px | `mb-2` | ✅ |
| Text input | padding-left | 12px | 12px | `pl-3` | ✅ |
| Text input | padding-right | 80px | 72px | `pr-[80px] mobile:pr-[72px]` | ✅ (stepper clearance) |
| Text input | padding-y | 12px | 10px | `py-[12px] mobile:py-[10px]` | ⚠️ desktop 10px — **documented**, `DESIGN.md:699` |
| Error row | gap | 8px | 8px | `gap-2` | ✅ |
| Error row | margin-top | 4px | 4px | `mt-1` | ✅ |
| Unit-pill wrapper | margin-top | 16px | 16px | `mt-4` | ✅ |
| Unit-pill row | gap | 8px | 8px | `gap-2` | ✅ |
| Unit pill button | padding-x | 16px | 12px | `px-4 mobile:px-3` | ✅ |
| Unit pill button | padding-y | 12px | 8px | `py-3 mobile:py-2` | ✅ **RESOLVED**, same fix and reasoning as the toggle segment above — was `py-[14px]`, now `py-3` (12px), exactly 44px mobile. |
| Stepper cluster | inset from right edge | 8px | 8px | `right-2` | ✅ |
| Stepper button (transparent hit-area) | padding-y | 8px | 10px | `py-2 mobile:py-2.5` | ⚠️ desktop 10px — **HELD, not grid-aligned.** Checked both grid neighbors: `mobile:py-2` (8px) → 24+8+8=40px hit-area, undershoots the 44px desktop input height by 4px; `mobile:py-3` (12px) → 24+12+12=48px, overshoots by 4px. Since this padding's entire job is making the hit-area exactly match the input's own height (documented "load-bearing coincidence," `DESIGN.md`), 10px is the *correct* value here even though it's off-grid — held rather than "fixed." |
| Field-row inner CSS (`.field-half:first-child`, ≥520px only) | padding-right | — | 12px | Custom `<style>` block, `index.astro:589-591` | ✅ |

### 6. Mass section (`#input-slot-b`, `index.astro:185-287`)

Identical recipe to Molar Mass for slot padding, label row, input padding, error row, unit-pill wrapper/row/pill — same values, same ✅/⚠️ pattern, so not re-tabulated. One addition:

| Element | Property | Mobile | Desktop | Source | Grid? |
|---|---|---|---|---|---|
| Field-row inner CSS (`.field-half-divider`, ≥520px only) | padding-left | — | 12px | Custom `<style>`, `index.astro:592-595` | ✅ |
| Copy button hit area | min-width/min-height | 44×44px | 44×44px | `min-h-[44px] min-w-[44px]` | ✅ (touch target, not padding, noted for completeness) |

Mass's unit-pill set has 6 pills (mg/g/kg/ng/µg/dag) vs Molar Mass's 2 — same per-pill spacing recipe, so this is a content-volume difference, not a spacing inconsistency.

### 7. Browse Elements trigger + panel

**Trigger** (`index.astro:301-327`)

| Element | Property | Mobile | Desktop | Source | Grid? |
|---|---|---|---|---|---|
| Trigger button | gap (chevron↔text) | 8px | 8px | `gap-2` | ✅ |

**Panel shell** (`index.astro:330`)

| Element | Property | Mobile | Desktop | Source | Grid? |
|---|---|---|---|---|---|
| Panel | margin-top (from trigger) | 12px | 12px | `mt-3` | ✅ |

**Tabs row** (`index.astro:332-347`)

| Element | Property | Mobile | Desktop | Source | Grid? |
|---|---|---|---|---|---|
| Tab button | padding-y | 8px | 8px | `py-2` | ✅ |
| Tab button | padding-x | 16px | 16px | `px-4` | ✅ (contradicts DESIGN.md's "8px 4px" — see Flag B) |

**Presets tab content** (`index.astro:350-403`)

| Element | Property | Mobile | Desktop | Source | Grid? |
|---|---|---|---|---|---|
| Tab panel | padding (all sides) | 16px | 20px | `p-[16px] mobile:p-5` | ✅ — matches `DESIGN.md:472` exactly ("bespoke 20px, not 24px") |
| Select label | margin-bottom | 8px | 8px | `mb-2` | ✅ |
| Preset `<select>` | padding-left | 12px | 12px | `pl-3` | ✅ — fixed by `4b453c4` (was `pl-3.5`) |
| Preset `<select>` | padding-right | 32px | 32px | `pr-8` | ✅ (chevron clearance, deliberately untouched by `4b453c4`) |
| Preset `<select>` | padding-y | 12px | 10px | `py-[12px] mobile:py-[10px]` | ⚠️ desktop 10px, consistent w/ text-input recipe — fixed by `4b453c4` |
| "Use this molar mass" button | margin-top | 12px | 12px | `mt-3` | ✅ |
| "Use this molar mass" button | padding-x | 20px | 20px | `px-5` | ✅ — matches `DESIGN.md:621` |
| "Use this molar mass" button | padding-y | 12px | 12px | `py-3` | ✅ **RESOLVED** — was `py-2.5` (10px). `min-h-[44px]` floors this button's height regardless of the padding value (10px gives 40px organic height, floored to 44), so 8px and 12px render identically at 44px; chose 12px so the height is hit organically rather than depending on the floor. Verified: still exactly 44px at both breakpoints. |

**Build custom tab content** (`index.astro:406-442`)

| Element | Property | Mobile | Desktop | Source | Grid? |
|---|---|---|---|---|---|
| Tab panel | padding (all sides) | 16px | 20px | `p-[16px] mobile:p-5` | ✅ same as Presets panel |
| Search input | padding-left | 12px | 12px | `pl-3` | ✅ — fixed by `4b453c4` |
| Search input | padding-right | 12px (was 14px) | 12px (was 14px) | `pr-3` (was `pr-3.5`) | ✅ **RESOLVED in a separate pass** — the native `::-webkit-search-cancel-button` this was clearing is now suppressed in `global.css`, so the padding was symmetrized to match `pl-3`. See the Git-history section below; this row is stale relative to that fix and kept only as a record of the original finding. |
| Search input | padding-y | 12px | 10px | `py-[12px] mobile:py-[10px]` | ⚠️ desktop 10px, consistent |
| Search input | margin-bottom | 16px | 16px | `mb-4` | ✅ |
| Element grid scroll wrapper | margin-bottom | 16px | 16px | `mb-4` | ✅ |
| Empty-state paragraph | padding-y | 16px | 16px | `py-4` | ✅ |
| Element grid | gap (row) | 8px (fixed) | 8px (fixed) | `gap-2` Tailwind class | ✅ |
| Element grid | gap (column) | **JS-computed** | **JS-computed** | `elementGrid.style.columnGap` in `layoutElementGrid()`, `index.astro:1407` | ✅ always (algorithm only accepts multiples of 4, min 8) |
| Formula bar row | margin-top | 16px | 16px | `mt-4` | ✅ |
| Formula bar row | padding-top | 16px | 16px | `pt-4` | ✅ |
| Formula bar row | gap | 12px | 12px | `gap-3` | ✅ |
| Formula/Molar-Mass mini-labels | margin-bottom | 8px (was 2px) | 8px (was 2px) | `mb-2` (was `mb-0.5`) | ✅ **RESOLVED** — see Flag D resolution log above; this row is stale relative to that fix. |
| "Use this molar mass" (custom) button | padding-x/y | 20px / 12px | 20px / 12px | `px-5 py-3` | ✅ **RESOLVED**, same fix as the Presets button above. |

**Element tiles** (JS-rendered, `index.astro:1189-1334`)

| Element | Property | Mobile | Desktop | Source | Grid? |
|---|---|---|---|---|---|
| Tile container | padding | 8px | 8px | `p-2` (JS-applied className) | ✅ — matches `DESIGN.md:650` |
| Tile container | gap (body↔stepper) | 8px | 8px | `gap-2` | ✅ |
| Tile body | gap (chip↔text) | 12px | 12px | `gap-3` | ✅ |
| Tile text block | gap (name↔mass line) | 4px | 4px | `gap-1` | ✅ |
| Tile stepper row | gap | 4px | 4px | `gap-1` | ✅ — matches `DESIGN.md:655` |
| Tile stepper button | padding | 10px | 0px | `p-2.5 mobile:p-0` | ⚠️ mobile 10px — documented hit-area pattern, same family as other stepper buttons |

**JS-computed, not a fixed class:** the grid's column width and column-gap are recalculated live by `layoutElementGrid()` (`index.astro:1353-1408`) to force whole-pixel, 4pt-aligned columns/gaps against the wrapper's measured width. Documented extensively in `DESIGN.md:478-525`. This is the one spacing value on the page that is never a static number.

### 8. Result slot — Moles (`index.astro:450-556`)

Same recipe as Mass section for slot padding (`p-[16px] mobile:p-6`, matches `DESIGN.md:471`), label row (`mb-2`), error row (`gap-2 mt-1`), unit-pill wrapper/row/pill (`mt-4`, `gap-2`, `px-4/py-[14px] mobile:px-3/py-2`) — all identical to Mass, not re-tabulated.

| Element | Property | Mobile | Desktop | Source | Grid? |
|---|---|---|---|---|---|
| Particle-count row | padding-top | 12px | 12px | `pt-3` | ✅ — matches `DESIGN.md:719` ("12px padding above it") |
| Particle-count row | gap | 4px | 4px | `gap-1` | ✅ |

### 9. Footer (`index.astro:563-569`)

| Element | Property | Mobile | Desktop | Source | Grid? |
|---|---|---|---|---|---|
| Footer | padding-y | 16px | 16px | `py-4` | ✅ |
| Footer inner wrap | padding-x | 16px | 16px | `px-4` | ✅ |

---

## Same-component-type, different-recipe summary

| Component type | Instances | Divergence |
|---|---|---|
| Pill-shaped button | "Calculator" nav pill vs. unit pills / direction toggle | **RESOLVED** — nav pill: was fixed `px-3/py-1.5`, no touch adjustment; now `px-4/py-3 mobile:px-3/py-2` + `min-h-[44px] mobile:min-h-0`, matching the others (mobile `py` further tightened from `py-[14px]` to `py-3` in a later pass — same fix applied everywhere it appeared). Color treatment intentionally kept distinct (see §1 resolution log). |
| Text-entry input right padding | Molar Mass/Mass (`pr-[80px]/72px`, stepper clearance) vs. Preset select (`pr-8`=32px, chevron clearance) vs. Element search (`pr-3.5`=14px, orig.) | **RESOLVED.** A prior pass found the original claim of "no icon, no stated reason for asymmetry" was wrong — `input[type="search"]` renders a native `::-webkit-search-cancel-button` in desktop Chrome/Edge once it has a value, unsuppressed. Rather than leave that asymmetry in place, a follow-up pass suppressed the native button globally (`global.css`, `input[type="search"]::-webkit-search-cancel-button { -webkit-appearance: none; display: none; }`) and then symmetrized the padding to `pl-3`/`pr-3` (12px/12px), matching every other input. Confirmed via direct device testing the button only ever rendered in desktop Chrome/Edge (not Firefox, not mobile Safari/Chrome), so it's now suppressed everywhere for consistency rather than left browser-dependent. Computed style confirmed 12px/12px at mobile and desktop; screenshots confirm no cancel icon renders after typing. |
| Caption-above-value label spacing | Field labels (Molar Mass/Mass/Moles/Common Compounds): `mb-2` = 8px vs. Formula-bar mini-labels: `mb-2` = 8px (was `mb-0.5` = 2px) | **RESOLVED**, see Flag D resolution log above. |
| Stepper hit-area padding (transparent outer button) | Field steppers (`py-2 mobile:py-2.5` = 8/10px) vs. element-tile stepper (`p-2.5 mobile:p-0` = 10/0px) | **Investigated and confirmed intentional, not a defect** (previously only "likely intentional" — a later pass checked the exact math). Field steppers: `mobile:py-2.5` (10px, off-grid) is load-bearing — it's the only value where `chip + 2×padding` equals the desktop input's own 44px height exactly; both grid-aligned alternatives (8px→40px, 12px→48px) break that match, so it's held off-grid deliberately. Element-tile steppers have no such constraint (no input to match) and use a different, independently-chosen recipe. Different axis (all-sides vs. y-only) and different mobile/desktop split remain, but neither is a bug. |
| Major-block vertical separation ("rhythm") | Header→first block: 20px (orig., now 24px) · Breadcrumb→card: 16px · Card-internal blocks: 24px | **RESOLVED** in an earlier pass — header→first-block (`pb-5`) unified with card-internal blocks (`gap-6`) at 24px; see Flag C resolution log above. This row is stale relative to that fix and kept for the original record. |

---

## Git-history cross-reference — what's already been touched vs. what's new

**Already fixed / stale-safe (verified still correct in current code):**

- Unit pill / direction toggle breakpoint alignment to 520px — `5ff219b`. Confirmed current.
- Preset select padding aligned to number-input recipe (`pl-3.5→pl-3`, `py-2.5→py-[12px] mobile:py-[10px]`) — `4b453c4`. Confirmed current.
- Preset select double-border removed — `a3f5fae`. Not a spacing item but adjacent (box-shadow/border), confirmed current.
- Preset select `appearance:none` + real border + padding-survives-native-chrome — `7b24a46`. Confirmed current.
- Field/result/browse-panel mobile padding reduced 24/20px → 16px — `31f0e62`. Confirmed current (this is the `p-[16px] mobile:p-6`/`p-5` pattern seen throughout §5–8).
- Unit pill row top-alignment (`justify-between`→`justify-start`) — `98e8fd7`. Layout fix, not a spacing-value change, confirmed current.

**Now fully resolved, in two passes.** Element search's `pr-3.5` was deliberately *kept* at 14px by `4b453c4` ("right side kept at 14px since the input has no icon needing clearance"), believing there was nothing in that space. A follow-up pass found that untrue — `input[type="search"]` renders a native `::-webkit-search-cancel-button` there in desktop Chrome/Edge once it has a value, unsuppressed by `global.css` — and held the padding change rather than risk clipping it, per the same "if anything sits there now, hold rather than guess" instruction. A second follow-up pass, once direct device testing confirmed exactly which browsers rendered the native button (desktop Chrome/Edge only — not Firefox, not mobile Safari/Chrome), suppressed it globally in `global.css` (matching the number-input spinner-suppression convention: `-webkit-appearance: none` on the pseudo-element) and *then* symmetrized the padding to `pr-3` (12px), since nothing occupies that space in any browser anymore. Verified via computed style (12px/12px at both breakpoints) and screenshots (no cancel icon after typing, at mobile and desktop widths).

**New findings (no prior commit or DESIGN.md reference touches these):**

- Flag A — breadcrumb-to-card / inter-block rhythm reversed vs. DESIGN.md.
- Flag B — segmented tab horizontal padding (16px vs. documented 4px).
- Flag C — header row's 20px separator, a third undocumented rhythm value.
- Flag D — formula-bar mini-label spacing (2px vs. the 8px used by every other field label).
- Flag E — header/formula-bar `sm:` (640px) wrap point vs. the rest of the page's 520px convention — the "narrow window" gap `5ff219b` set out to close still exists one container level up.
- Nav "Calculator" pill's divergent recipe vs. other pills (§1 table above) — **resolved**, see §1 resolution log.
