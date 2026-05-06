---
name: Movara Consulting
description: Future-readiness and strategy execution for tech-driven businesses across Africa.
colors:
  primary: "#38b2ac"
  secondary: "#d69e2e"
  accent: "#DBEAFE"
  cream: "#E3DBD9"
typography:
  display:
    fontFamily: "Hedvig Letters Serif Variable, serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  headline:
    fontFamily: "Hedvig Letters Serif Variable, serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.2
  title:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.75rem"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  2xl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "1rem 1.5rem"
  button-primary-hover:
    backgroundColor: "#1F2937"
    textColor: "#ffffff"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.5rem"
  button-secondary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
  card:
    backgroundColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  action-link:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
---

# Design System: Movara Consulting

## 1. Overview

**Creative North Star: "The Strategy War Room"**

Movara serves leaders who carry real weight: the kind who are scanning the horizon for the shift they know is coming, preparing for disruption before it arrives. This design system reflects that posture. It is warm but never casual, editorial but never decorative. Every surface earns its presence — nothing performs, everything informs.

The palette is grounded in two deliberate anchors: a teal that reads as action and clarity (Horizon Teal), and an amber that reads as hard-won insight (Savanna Gold). Backgrounds stay quiet so content commands. Motion is purposeful — the GSAP-driven menu wipe and hero scroll zoom are moments of intention, not entertainment.

The system explicitly rejects the SaaS-landing-page playbook: no hero metrics, no gradient text, no glass cards, no identical icon-grid service layouts. It also rejects generic "African brand" visual clichés (warm reds, Adinkra patterns as decoration, earth-toned gradient washes). This is a consulting firm for boards and leadership teams. The aesthetic reflects what those conversations actually look like: structured, direct, credible.

**Key Characteristics:**
- Serif headlines anchored in Hedvig Letters Serif — authoritative without being stiff
- Teal as the action signal; amber as the warmth accent; used at different frequencies
- Ambient shadows on all resting cards; lift amplifies on hover
- GSAP animation for theatrical moments (menu, hero zoom); CSS transitions only for state changes
- Body copy capped at 70ch; generous vertical rhythm; no uniform section padding

## 2. Colors: The Horizon Palette

Two deliberate anchors plus two supporting surfaces. The palette is never decorative — each color has a specific job.

### Primary
- **Horizon Teal** (`#38b2ac`): The action color. Used on primary buttons, the navigation bar background in mobile-open state, menu-button fill, focus rings, and nav logo text. It signals movement and clarity — appropriate for a firm whose core offer is strategic readiness.

### Secondary
- **Savanna Gold** (`#d69e2e`): The insight accent. Used on secondary focus outlines, hover text for ActionLinks, and form focus halos. It appears rarely — never more than 10% of any given screen — which makes its presence felt when it does appear.

### Tertiary
- **Sky Wash** (`#DBEAFE`): A cool-tinted surface color used exclusively for nav link hover and active-page backgrounds. Keeps the header airy without introducing a third full color role.

### Neutral
- **Dust Rose** (`#E3DBD9`): Warm off-white. Used as a tinted surface background for cards or section washes where pure white would feel cold. Not currently in wide rotation but present in the token set.
- **Surface White** (`#ffffff`): Default card and page background. Paired with ambient shadow to create depth without color.
- **Body Charcoal** (`#374151` / Tailwind gray-700): Default body text. Warm enough to pair with the teal palette without reading cold.

### Named Rules
**The Two-Signal Rule.** Horizon Teal signals action (do this, go here, open this). Savanna Gold signals confirmation and warmth (focused, selected, complete). They must never occupy the same interactive element simultaneously.

**The Rarity Rule.** Savanna Gold is forbidden as a background color for any element larger than a focus ring or a 2px outline. Its scarcity is what gives it authority.

## 3. Typography

**Display Font:** Hedvig Letters Serif Variable (with Georgia, serif fallback)
**Body Font:** Instrument Sans (with sans-serif fallback)
**Logo Font:** Arizonia (cursive; logo wordmark only — never used in body or UI copy)

**Character:** A pairing of contemporary editorial weight (Hedvig's variable axis invites nuance in headlines) with a humanist grotesque that reads cleanly at body sizes. Together they feel like a well-produced strategy report: trustworthy, structured, human.

### Hierarchy
- **Display** (400 weight, clamp 2.25rem → 3rem, line-height 1.2): Hero-level headlines and section titles on landing pages. Used sparingly — one per screen.
- **Headline** (400 weight, clamp 1.875rem → 2.25rem, line-height 1.2): Section openers, card titles in larger contexts.
- **Title** (600 weight, 1.25rem, line-height 1.4): Sub-section headers, service card titles, form labels used as headings.
- **Body** (400 weight, 1rem, line-height 1.6): All running copy. Maximum line length: 70ch. This is non-negotiable — content wider than 70ch degrades readability for the executive audience.
- **Label** (500 weight, 0.875rem, letter-spacing 0.02em): Button text, nav links, meta labels, captions. Never lowercase for interactive labels.

### Named Rules
**The One-Display Rule.** A single Display-scale element per viewport height. Multiple display headlines on one screen collapse the hierarchy and dilute authority.

**The 70ch Ceiling.** Body copy containers are capped at 70ch width. Layout containers may be wider; text columns are not.

## 4. Elevation

Movara uses ambient-layered elevation: every resting card carries a permanent low shadow that grounds it against the background. Hover amplifies this shadow to signal interactivity. The system never uses flat surfaces for interactive cards — the shadow is always present at rest, not just on hover.

### Shadow Vocabulary
- **Ambient low** (`0 1px 2px 0 rgba(0, 0, 0, 0.05)`): Applies to all surface elements at the smallest scale. Barely perceptible but prevents card-to-background merge.
- **Ambient mid** (`0 4px 6px rgba(0, 0, 0, 0.1)`): Default resting state for `.card` and button active states. Readable depth without drama.
- **Lift** (`0 10px 15px -3px rgba(0, 0, 0, 0.1)`): Navigation open state; elevated panels.
- **Elevated** (`0 20px 25px -5px rgba(0, 0, 0, 0.1)`): `.card:hover` — the interactive lift. The 4px upward translateY accompanies it.

### Named Rules
**The Ambient Floor Rule.** No interactive card surface is ever shadowless at rest. A card without a shadow is a static decoration. A card with an ambient shadow is an invitation to interact.

**The Flat-Transition Rule.** Shadows transition with CSS `transition-shadow`; transforms translate separately. Never animate both simultaneously on the same property cascade — it compounds jank.

## 5. Components

Grounded and confident: decisive radii (6px default, 8px for containers), solid fills over outlines, permanent shadow presence.

### Buttons
- **Shape:** Gently curved edges (6px radius / `--radius-sm`) — intentional, not aggressive. Not pill, not sharp.
- **Primary** (`btn-primary`): Horizon Teal background (`#38b2ac`) with white text. Padding 1rem × 1.5rem. Min-height 48px for touch compliance. On hover: background darkens to near-black (`#1F2937`) and lifts 1px — a decisive, authoritative shift.
- **Hover / Focus:** `translateY(-1px)` + ambient-mid shadow on hover. Focus ring in Savanna Gold (`--color-secondary`), 2px solid, 2px offset.
- **Secondary / Ghost** (`btn-secondary`): Transparent background, Horizon Teal border (2px), Horizon Teal text. On hover: fills to Teal, text inverts to white. Same lift treatment as primary.

### ActionLink (Signature CTA)
The inline directional link with an arrow badge. Used inside service cards and section bodies.
- **Style:** Text inherits surrounding color; on hover, transitions to Savanna Gold via `hover:text-secondary`.
- **Arrow badge:** Horizon Teal filled square with white inline SVG arrow. On hover: badge fills to Savanna Gold.
- **Gap:** 8px between text and badge. Min-height 44px.
- **Behavior:** `transition-all duration-500` — intentionally slow for an editorial feel, not a snap.

### Cards / Containers
- **Corner Style:** Gently curved (8px / `--radius-md`)
- **Background:** Surface white (`#ffffff`)
- **Shadow Strategy:** Ambient-mid at rest (`shadow-md`); elevated (`shadow-xl`) at hover. See Elevation section.
- **Lift:** `translateY(-4px)` on hover with `transition-slow` (0.3s). Deliberate — not snappy, not slow.
- **Internal Padding:** 2rem (`--spacing-lg`) as default; 3rem (`--spacing-xl`) for feature / hero cards.

### Inputs / Fields
- **Style:** 1px stroke (`#D1D5DB`), white background, 6px radius. Consistent with button radius family.
- **Focus:** Border shifts to Savanna Gold (`--color-secondary`); subtle teal halo (`0 0 0 3px rgba(56, 178, 172, 0.1)`). Note: the CSS currently applies a teal-tinted rgba to a `--color-secondary` border — a minor inconsistency worth resolving.
- **Error:** Border shifts to Sky Wash accent color (`#DBEAFE`) — currently using the accent as an error indicator, which is semantically weak. Consider a dedicated error red token in future iterations.
- **Min-height:** 48px for all input fields. Non-negotiable for touch.

### Navigation
- **Resting state:** White background, `border-b border-gray-200/50`. Logo in Horizon Teal (display font, bold). Nav links in Teal with Sky Wash hover background. Menu button: Teal-filled square (6px radius).
- **Mobile open state:** Full-screen Horizon Teal overlay. GSAP clip-path wipe, `duration: 0.5s, ease: power2.out`. All link text inverts to white.
- **Desktop overlay:** Two-column: bottom-left stacks Contact and Consultation links at display scale (4xl/6xl). Bottom-right houses latest posts. Both bottom-aligned — confident editorial layout.
- **Active page indicator:** Sky Wash background on active nav link; text remains Teal.

### ServiceCard (Signature Component)
Stacked scroll cards for the services section. Differentiated backgrounds per index: white → light blue (`bg-blue-100`) → light gray → light blue. Split layout: image fills one half, content occupies the other. Stacking scroll effect driven by GSAP + `will-change: transform`.

## 6. Do's and Don'ts

### Do:
- **Do** use Horizon Teal (`#38b2ac`) as the single action signal — on buttons, links with badges, open menu state, and focus indicators.
- **Do** apply an ambient shadow (`shadow-md`) to every resting interactive card. Shadowless cards at rest read as decorative, not interactive.
- **Do** cap all body copy containers at 70ch. Use wider layout containers freely, but constrain text columns explicitly.
- **Do** let the serif headline (Hedvig) carry section authority — one Display-scale headline per viewport, set at weight 400.
- **Do** use Savanna Gold exclusively for focus rings, secondary borders, and hover text accents. Its rarity is its value.
- **Do** use GSAP for theatrical transitions (menu wipe, hero scroll zoom, stacking cards). Use CSS `transition` for all state changes (hover, focus, active).
- **Do** use `ease-out` (power2.out or equivalent) for entrances. Exits use `ease-in`. Never bounce, never elastic.
- **Do** let section padding vary. The rhythm comes from inconsistency at the macro scale.

### Don't:
- **Don't** use gradient text (`background-clip: text` with a gradient fill). Emphasis is weight or size, never color decoration.
- **Don't** use `border-left` greater than 1px as a colored accent stripe on cards, callouts, or list items. Rewrite with background tints or full borders.
- **Don't** use glassmorphism. No `backdrop-filter: blur` on decorative cards. Purposeful only.
- **Don't** build the hero-metric template: big number, small label, gradient accent. This is the SaaS cliché Movara explicitly rejects.
- **Don't** render identical icon-grid cards across a service or features section. Vary card size, content weight, or orientation.
- **Don't** use Arizonia (the script logo font) anywhere in body, UI, or marketing copy. It exists solely for the wordmark.
- **Don't** apply Savanna Gold as a fill background on any element larger than a 2px focus ring or border.
- **Don't** use Sky Wash (`#DBEAFE`) as an error state indicator — it reads as informational blue, not as a warning. A dedicated error token is needed for semantic correctness.
- **Don't** use `#000000` or `#ffffff` as direct values in CSS. Tint neutrals toward the brand hue even minimally. Pure white cards on a pure-white page collapse depth; the ambient shadow then becomes load-bearing.
