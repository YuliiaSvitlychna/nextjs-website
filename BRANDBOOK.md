# DevLog — Brand System Prompt

> Programming news blog. Audience: developers. Default theme: **dark mode**.

---

## IDENTITY

**Tone:** 60% Technical · 30% Friendly · 10% Emotional
**Precise but not dry. Accessible but not shallow. Enthusiastic but not loud.**

DO: active voice, short sentences, exact dates ("May 22, 2025"), digits ("5 steps"), technical EN terms without quotes.
DON'T: clickbait, passive voice, hyperbole ("revolutionary", "X-killer"), "recently"/"soon", meme humor.

---

## COLOR TOKENS

### Dark (default) — "Deep Ocean"

```css
:root {
  --bg-base: #0d1117; /* page background */
  --bg-surface: #161b22; /* cards, code blocks */
  --bg-elevated: #21262d; /* hover state, dropdowns */
  --border: #30363d;
  --text-primary: #e6edf3;
  --text-secondary: #8b949e; /* meta, labels */
  --text-muted: #484f58; /* disabled */
  --accent: #3fb950; /* CTA, links, tags */
  --accent-hover: #2ea043;
  --accent-subtle: #1b2f1e; /* badge backgrounds */
  --danger: #f85149;
  --warning: #e3b341;
  --info: #58a6ff; /* inline links */
}
```

### Light — `[data-theme="light"]`

```css
--bg-base: #ffffff;
--bg-surface: #f6f8fa;
--bg-elevated: #eaeef2;
--border: #d0d7de;
--text-primary: #1f2328;
--text-secondary: #656d76;
--text-muted: #9198a1;
--accent: #1a7f37;
--accent-hover: #116329;
--accent-subtle: #dafbe1;
--danger: #cf222e;
--warning: #9a6700;
--info: #0969da;
```

> Alt palettes (unused by default): "Void Blue" (indigo accent, #0A0E1A base), "Graphite" (orange accent, #111111 base).

---

## TYPOGRAPHY

| Role               | Font           | Weight         |
| ------------------ | -------------- | -------------- |
| Headings / Display | Syne           | 600–800        |
| Article body       | Source Serif 4 | 400, 400i, 600 |
| Code blocks        | JetBrains Mono | 400, 500       |
| UI / buttons / nav | DM Sans        | 400, 500, 600  |

**Type scale (Major Third 1.25):**

```
xs=0.64rem  sm=0.8rem  base=1rem  lg=1.25rem
xl=1.563rem  2xl=1.953rem  3xl=2.441rem  4xl=3.052rem  5xl=3.815rem
```

**Rules:** max line length 68–72 chars · one H1 per page · line-height body=1.8 · headings letter-spacing=-0.02em, line-height=1.15 · `<strong>` for technical terms only.

---

## LAYOUT & SPACING

**Single centered column. No sidebars.**

| Breakpoint | Container | Post body | Padding |
| ---------- | --------- | --------- | ------- |
| xl 1366px  | 1200px    | 740px     | auto    |
| lg 1280px  | 1120px    | 720px     | auto    |
| md 992px   | 100%      | 680px     | 32px    |
| sm 768px   | 100%      | 100%      | 24px    |
| xs <480px  | 100%      | 100%      | 16px    |

**Spacing scale (8px base):** `4 8 12 16 24 32 48 64 96 128px`

**Page structure:** header=64px(mobile:56px) · post-top=64px · post-bottom=96px · block-gap=48px

---

## UI COMPONENTS

### Buttons

**Primary:** bg=`--accent` · color=#fff · padding=10px 20px · radius=6px · font=DM Sans 600 `--text-sm`

- hover: bg=`--accent-hover`, translateY(-1px), shadow `rgba(63,185,80,0.3)`
- active: translateY(0), no shadow
- disabled: opacity=0.4
- focus-visible: outline 2px `--info` offset 2px

**Ghost:** bg=transparent · border=`1px solid --border` · text=`--text-primary`

- hover: bg=`--bg-elevated`, border=`--accent`

### Links

Default: color=`--info`, no underline · hover: underline 1px offset 2px · visited: `--text-secondary`

> Inside `.post-body`: underline always on (accessibility).

### Article Card

```
bg=--bg-surface · border=1px solid --border · radius=8px · padding=--space-6
hover: bg=--bg-elevated, border-color=rgba(63,185,80,0.5), translateY(-2px), shadow 0 8px 24px rgba(0,0,0,0.2)
```

Structure: [TAG] → Title (2 lines max) → Description (2–3 lines) → Author · Date · ⏱ read time

### Tags / Badges

```
bg=--accent-subtle · color=--accent · padding=2px 10px · radius=20px
font=DM Sans 600 · font-size=--text-xs · letter-spacing=0.04em · text-transform=uppercase
hover: bg=--accent, color=#fff
```

### Input Field

Default: bg=`--bg-surface`, border=`1px solid --border` · focus: border=`--accent` + glow · error: border=`--danger`

### Code Block

```css
pre {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent); /* accent stripe */
  border-radius: 8px;
  padding: 24px 32px;
  font-family: "JetBrains Mono";
  font-size: 0.875rem;
  line-height: 1.7;
}
:not(pre) > code {
  background: var(--bg-elevated);
  color: var(--accent);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.875em;
}
```

### Navigation

```
[LOGO]   Home   Blog   About   Contact   [🌙/☀️]
```

Nav links: default=`--text-secondary` · hover=`--text-primary` + 2px `--accent` underline · active=`--accent`

### Dividers

```css
hr {
  height: 1px;
  background: var(--border);
  margin: 48px 0;
  border: none;
}
.divider-accent {
  height: 2px;
  background: linear-gradient(90deg, var(--accent), transparent);
}
```

---

## ANIMATION

```css
--duration-fast: 0.15s; /* primary: buttons, cards, tags */
--duration-medium: 0.25s; /* modals, sidebars */
--duration-slow: 0.4s; /* page transitions */
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1); /* cards */
--ease-out: cubic-bezier(0, 0, 0.2, 1);
```

**Rule:** animation confirms action — does not entertain. Fast and invisible.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## ICONS

**Primary:** Phosphor Icons (`@phosphor-icons/react`) — MIT, 6 styles, 9000+ icons.
**UI fallback:** Lucide (`lucide-react`) · **Tailwind UI:** Heroicons.
**Tech logos:** Devicons · **Social/brand:** Simple Icons.

Rules: 16px inline · 20px UI · 24px standalone · stroke=1.5px · `currentColor` · never mix filled+outline · always `aria-label` or `aria-hidden` + visible text.

---

## MEDIA

**Covers:** 16:9, min 1200×675px, WebP (JPEG fallback). Style: abstract geometric / gradient / dark+code. No stock people photos.
**OG cards:** 1200×630px — bg=`--bg-base`, logo corner, title in Syne, tag + date. Generate via Vercel OG / Satori.
**Avatars:** circle, 32px on card / 48px on article page. Fallback: initials on `--accent-subtle`, text in `--accent`.

---

## LOGO (concept, not finalized)

Mark + wordmark. Reference: terminal cursor `▌`, angle brackets `</>`, or abstract glyph. Monospaced/geometric character.
Variants: horizontal (header) · vertical (OG/splash) · mark-only (favicon).
Clear space: ≥ height of letter "D" on all sides.

---

## POST CHECKLIST

- Title ≤70 chars, no clickbait
- Cover: 16:9, WebP, dark/neutral
- Tags: 1–4 from existing taxonomy
- Code blocks: syntax-highlighted, language specified
- External links: `target="_blank" rel="noopener"`
- OG card: generated and verified
- Mobile (xs) readability: checked
