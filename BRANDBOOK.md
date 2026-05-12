# Brandbook — DevLog

### Brand Identity Guide for a Programming News Blog

> Version 1.0 · Status: Draft · Language: English

---

## Table of Contents

1. [Brand Mission & Voice](#1-brand-mission--voice)
2. [Logo](#2-logo)
3. [Color System](#3-color-system)
4. [Typography](#4-typography)
5. [Grid & Spacing](#5-grid--spacing)
6. [UI Components](#6-ui-components)
7. [Iconography](#7-iconography)
8. [Graphics & Media](#8-graphics--media)
9. [Animation & Micro-interactions](#9-animation--micro-interactions)
10. [Voice & Tone](#10-voice--tone)

---

## 1. Brand Mission & Voice

**DevLog** is a space where complexity becomes clarity and technical topics become compelling. We write for developers and about developers — precisely, without noise, and always with respect for the reader.

```
60% Technical  ·  30% Friendly  ·  10% Emotional
```

**We are:**

- Precise, but not dry
- Accessible, but not shallow
- Enthusiastic, but not loud

**We are not:**

- Clickbait-driven
- Corporately impersonal
- Overly casual or meme-oriented

---

## 2. Logo

> ⚠️ The logo is currently at the concept stage. Full development is a future milestone.

### 2.1 Concept

The logo must communicate **precision, speed, and authority**. Key directions:

- Monospaced or geometric character
- At minimum two elements: a mark (symbol) + wordmark
- The mark may reference: a terminal cursor `▌`, angle brackets `</>`, or an abstract glyph

### 2.2 Layout Variants (upcoming)

| Variant                    | Use case                 |
| -------------------------- | ------------------------ |
| Horizontal (mark + text)   | Desktop header           |
| Vertical (mark above text) | OG cards, splash screens |
| Mark only (favicon / icon) | Browser tab, mobile      |

### 2.3 Clear Space

Always maintain a clear zone around the logo of at least **the height of the letter "D"** in the wordmark — on all four sides.

---

## 3. Color System

### 3.1 Dark Theme (Dark Mode) — Primary

Dark mode is the **priority theme** for a developer audience.

```
The background is built on a dark blue-grey range (not pure black),
which reduces contrast fatigue and looks great on any monitor.
```

#### Palette — Option A: "Deep Ocean" _(recommended)_

| Token              | HEX       | RGB             | Purpose                     |
| ------------------ | --------- | --------------- | --------------------------- |
| `--bg-base`        | `#0D1117` | 13 · 17 · 23    | Main page background        |
| `--bg-surface`     | `#161B22` | 22 · 27 · 34    | Cards, code blocks          |
| `--bg-elevated`    | `#21262D` | 33 · 38 · 45    | Card hover state, dropdowns |
| `--border`         | `#30363D` | 48 · 54 · 61    | Divider lines, borders      |
| `--text-primary`   | `#E6EDF3` | 230 · 237 · 243 | Main body text              |
| `--text-secondary` | `#8B949E` | 139 · 148 · 158 | Labels, meta, placeholders  |
| `--text-muted`     | `#484F58` | 72 · 79 · 88    | Disabled, watermarks        |
| `--accent`         | `#3FB950` | 63 · 185 · 80   | CTA buttons, links, tags    |
| `--accent-hover`   | `#2EA043` | 46 · 160 · 67   | Accent hover state          |
| `--accent-subtle`  | `#1B2F1E` | 27 · 47 · 30    | Label backgrounds, badges   |
| `--danger`         | `#F85149` | 248 · 81 · 73   | Errors, alerts              |
| `--warning`        | `#E3B341` | 227 · 179 · 65  | Warnings                    |
| `--info`           | `#58A6FF` | 88 · 166 · 255  | Info blocks, inline links   |

> 💡 "Deep Ocean" is inspired by GitHub Dark / Vercel. The green accent gives a technical character without aggression.

---

#### Palette — Option B: "Void Blue"

| Token              | HEX       | Purpose                           |
| ------------------ | --------- | --------------------------------- |
| `--bg-base`        | `#0A0E1A` | Main background — near-black blue |
| `--bg-surface`     | `#111827` | Cards                             |
| `--bg-elevated`    | `#1F2937` | Elevated surfaces                 |
| `--border`         | `#374151` | Dividers                          |
| `--text-primary`   | `#F9FAFB` | Body text                         |
| `--text-secondary` | `#9CA3AF` | Meta                              |
| `--accent`         | `#6366F1` | Indigo accent                     |
| `--accent-hover`   | `#4F46E5` | Hover                             |
| `--accent-subtle`  | `#1E1B4B` | Badge background                  |
| `--info`           | `#60A5FA` | Links                             |

> 💡 "Void Blue" is darker, with a violet-blue accent. Closer to JetBrains / Linear in feel.

---

#### Palette — Option C: "Graphite"

| Token              | HEX       | Purpose            |
| ------------------ | --------- | ------------------ |
| `--bg-base`        | `#111111` | Near-pure graphite |
| `--bg-surface`     | `#1A1A1A` | Cards              |
| `--bg-elevated`    | `#242424` | Elevated surfaces  |
| `--border`         | `#2E2E2E` | Dividers           |
| `--text-primary`   | `#EBEBEB` | Body text          |
| `--text-secondary` | `#888888` | Meta               |
| `--accent`         | `#FF6B35` | Orange accent      |
| `--accent-hover`   | `#E55A25` | Hover              |
| `--info`           | `#4EA8DE` | Links              |

> 💡 "Graphite" has a neutral background with a warm orange accent. Closer to Hacker News / aged dev-culture aesthetics.

---

### 3.2 Light Theme (Light Mode)

The accent color **carries over** from the dark theme (recommended: use the same palette identity for both modes, adjusting only brightness).

#### Light Mode Tokens (based on "Deep Ocean" / green accent)

| Token              | HEX       | Purpose                            |
| ------------------ | --------- | ---------------------------------- |
| `--bg-base`        | `#FFFFFF` | Main background                    |
| `--bg-surface`     | `#F6F8FA` | Cards, blocks                      |
| `--bg-elevated`    | `#EAEEF2` | Hover, dropdowns                   |
| `--border`         | `#D0D7DE` | Lines                              |
| `--text-primary`   | `#1F2328` | Main body text                     |
| `--text-secondary` | `#656D76` | Meta, labels                       |
| `--text-muted`     | `#9198A1` | Disabled                           |
| `--accent`         | `#1A7F37` | CTA, links — darkened for contrast |
| `--accent-hover`   | `#116329` | Hover                              |
| `--accent-subtle`  | `#DAFBE1` | Badge background                   |
| `--danger`         | `#CF222E` | Errors                             |
| `--warning`        | `#9A6700` | Warnings                           |
| `--info`           | `#0969DA` | Info links                         |

---

### 3.3 CSS Custom Properties — Structure

```css
:root {
  /* Dark theme by default */
  --bg-base: #0d1117;
  --bg-surface: #161b22;
  --bg-elevated: #21262d;
  --border: #30363d;
  --text-primary: #e6edf3;
  --text-secondary: #8b949e;
  --text-muted: #484f58;
  --accent: #3fb950;
  --accent-hover: #2ea043;
  --accent-subtle: #1b2f1e;
  --danger: #f85149;
  --warning: #e3b341;
  --info: #58a6ff;
}

[data-theme="light"] {
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
}
```

---

## 4. Typography

### 4.1 Font Stack

| Role                          | Font               | Source                   | Rationale                                                         |
| ----------------------------- | ------------------ | ------------------------ | ----------------------------------------------------------------- |
| **Display / Headings**        | **Syne**           | Google Fonts             | Geometric, modern, technical character without being generic      |
| **Body / Article text**       | **Source Serif 4** | Google Fonts             | Serif improves readability for long-form content; feels editorial |
| **Code / Code blocks**        | **JetBrains Mono** | Google Fonts / JetBrains | De facto standard in dev environments; supports ligatures         |
| **UI / Buttons, labels, nav** | **DM Sans**        | Google Fonts             | Neutral, clean, scales beautifully                                |

```html
<!-- Google Fonts import -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  href="https://fonts.googleapis.com/css2?
  family=Syne:wght@600;700;800&
  family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&
  family=JetBrains+Mono:wght@400;500&
  family=DM+Sans:wght@400;500;600&
  display=swap"
  rel="stylesheet"
/>
```

### 4.2 Type Scale

```css
/* Type Scale — Major Third (1.25) */
--text-xs: 0.64rem; /* 10.24px — tags, captions */
--text-sm: 0.8rem; /* 12.8px  — meta, timestamps */
--text-base: 1rem; /* 16px    — body text */
--text-lg: 1.25rem; /* 20px    — lead paragraph */
--text-xl: 1.563rem; /* 25px    — H3 */
--text-2xl: 1.953rem; /* 31px    — H2 */
--text-3xl: 2.441rem; /* 39px    — H1 mobile */
--text-4xl: 3.052rem; /* 49px    — H1 desktop */
--text-5xl: 3.815rem; /* 61px    — Hero title */
```

### 4.3 Font Application

```css
/* Article headings, hero */
.heading {
  font-family: "Syne", sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

/* Main post body text */
.body-text {
  font-family: "Source Serif 4", serif;
  font-size: var(--text-base);
  line-height: 1.8; /* generous line height for reading comfort */
  font-weight: 400;
}

/* Code blocks */
code,
pre {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.9em;
  font-feature-settings:
    "liga" 1,
    "calt" 1; /* ligatures */
}

/* UI elements */
.ui-text {
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
}
```

### 4.4 Typography Rules for Content

- Maximum line length: **68–72 characters** (~680px at 16px/1.8)
- H1 headings: only one per page
- Never use more than 2 font weights within a single block
- `<strong>` — for technical terms and key concepts; not for decoration
- Paragraph spacing: `1.5em` (no `margin-top` on the first paragraph)

---

## 5. Grid & Spacing

### 5.1 Grid Concept

The blog is focused on **readability**, so the layout is as linear as possible:

```
┌─────────────────────────────────────────┐
│                  HEADER                  │
├─────────────────────────────────────────┤
│                                          │
│         ┌─────────────────────┐          │
│         │                     │          │
│         │      CONTENT        │          │  ← centred column
│         │                     │          │
│         └─────────────────────┘          │
│                                          │
├─────────────────────────────────────────┤
│                  FOOTER                  │
└─────────────────────────────────────────┘
```

**No sidebars.** All content flows through a single centered column.

---

### 5.2 Breakpoints

| Name | px          | Description                 |
| ---- | ----------- | --------------------------- |
| `xl` | **1366px**  | Wide laptop / desktop       |
| `lg` | **1280px**  | Standard laptop             |
| `md` | **992px**   | Small laptop / large tablet |
| `sm` | **768px**   | Tablet (portrait)           |
| `xs` | **< 480px** | Small mobile screen         |

```css
/* CSS Breakpoints */
@media (max-width: 1366px) {
  /* xl → lg */
}
@media (max-width: 1280px) {
  /* lg → md */
}
@media (max-width: 992px) {
  /* md → sm */
}
@media (max-width: 768px) {
  /* sm → xs */
}
@media (max-width: 480px) {
  /* xs: mobile */
}
```

---

### 5.3 Content Column Width

| Breakpoint   | Container width | Post text width | Horizontal padding |
| ------------ | --------------- | --------------- | ------------------ |
| xl (1366px)  | 1200px          | **740px**       | auto               |
| lg (1280px)  | 1120px          | **720px**       | auto               |
| md (992px)   | 100%            | **680px**       | 32px               |
| sm (768px)   | 100%            | 100%            | 24px               |
| xs (< 480px) | 100%            | 100%            | 16px               |

```css
.content-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

.post-body {
  max-width: 740px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 0 24px;
  }
  .post-body {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    padding: 0 16px;
  }
}
```

---

### 5.4 Spacing Scale (8px base)

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
--space-10: 128px;
```

### 5.5 Page Structure

```
Header height:         64px (desktop) / 56px (mobile)
Post top padding:      --space-8 (64px)
Post bottom padding:   --space-9 (96px)
Spacing between content blocks: --space-7 (48px)
```

---

## 6. UI Components

> All states are described for **both themes** via CSS tokens.

### 6.1 Buttons

#### Primary Button

```
Purpose: primary action (subscribe, read more, submit)
```

| State        | Background                  | Text                       | Border                          | Other                    |
| ------------ | --------------------------- | -------------------------- | ------------------------------- | ------------------------ |
| Default      | `--accent`                  | `#fff` / `#0D1117` (light) | none                            | border-radius: 6px       |
| **Hover**    | `--accent-hover`            | unchanged                  | none                            | translateY(-1px), shadow |
| **Active**   | `--accent-hover` + 10% dark | unchanged                  | none                            | translateY(0), no shadow |
| **Disabled** | `--accent` at 40% opacity   | `--text-muted`             | none                            | cursor: not-allowed      |
| **Focus**    | `--accent`                  | unchanged                  | `2px solid --info` + offset 2px | keyboard navigation      |

```css
.btn-primary {
  background: var(--accent);
  color: #fff;
  padding: 10px 20px;
  border-radius: 6px;
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
  font-size: var(--text-sm);
  border: none;
  cursor: pointer;
  transition:
    background 0.15s ease,
    transform 0.15s ease,
    box-shadow 0.15s ease;
}
.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(63, 185, 80, 0.3);
}
.btn-primary:active {
  transform: translateY(0);
  box-shadow: none;
}
.btn-primary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}
.btn-primary:focus-visible {
  outline: 2px solid var(--info);
  outline-offset: 2px;
}
```

#### Secondary / Ghost Button

| State        | Background               | Text             | Border                             |
| ------------ | ------------------------ | ---------------- | ---------------------------------- |
| Default      | transparent              | `--text-primary` | `1px solid --border`               |
| **Hover**    | `--bg-elevated`          | `--text-primary` | `1px solid --accent`               |
| **Active**   | `--bg-elevated` darkened | unchanged        | `1px solid --accent-hover`         |
| **Disabled** | transparent              | `--text-muted`   | `1px solid --border` (40% opacity) |

---

### 6.2 Links

| State       | Color                 | Decoration                  |
| ----------- | --------------------- | --------------------------- |
| Default     | `--info`              | underline: none             |
| **Hover**   | `--info`              | underline (1px, offset 2px) |
| **Active**  | `--info` + 10% darker | underline                   |
| **Visited** | `--text-secondary`    | none                        |
| **Focus**   | `--info`              | outline 2px `--info`        |

> Links inside article body (`.post-body a`) always have underline by default for accessibility.

---

### 6.3 Article Card

```
┌──────────────────────────────┐
│  [TAG]                       │
│                              │
│  Article title               │
│  max 2 lines                 │
│                              │
│  Short description — 2–3 ln  │
│                              │
│  Author · Date · ⏱ 5 min    │
└──────────────────────────────┘
```

| State      | Background      | Border                             | Other                    |
| ---------- | --------------- | ---------------------------------- | ------------------------ |
| Default    | `--bg-surface`  | `1px solid --border`               | border-radius: 8px       |
| **Hover**  | `--bg-elevated` | `1px solid --accent` (opacity 0.5) | translateY(-2px), shadow |
| **Active** | `--bg-elevated` | `1px solid --accent`               | translateY(0)            |
| **Focus**  | `--bg-surface`  | `2px solid --info`                 | keyboard navigation      |

```css
.article-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: var(--space-6);
  transition: all 0.15s ease;
  cursor: pointer;
}
.article-card:hover {
  background: var(--bg-elevated);
  border-color: rgba(63, 185, 80, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
```

---

### 6.4 Tags / Badges

| State        | Background        | Text           | Border |
| ------------ | ----------------- | -------------- | ------ |
| Default      | `--accent-subtle` | `--accent`     | none   |
| **Hover**    | `--accent`        | `#fff`         | none   |
| **Active**   | `--accent-hover`  | `#fff`         | none   |
| **Disabled** | `--bg-elevated`   | `--text-muted` | none   |

```css
.tag {
  background: var(--accent-subtle);
  color: var(--accent);
  padding: 2px 10px;
  border-radius: 20px;
  font-family: "DM Sans", sans-serif;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: all 0.15s ease;
}
.tag:hover {
  background: var(--accent);
  color: #fff;
}
```

---

### 6.5 Input Field

| State        | Background      | Border                      | Text             |
| ------------ | --------------- | --------------------------- | ---------------- |
| Default      | `--bg-surface`  | `1px solid --border`        | `--text-primary` |
| **Hover**    | `--bg-surface`  | `1px solid --text-muted`    | —                |
| **Focus**    | `--bg-surface`  | `1px solid --accent` + glow | —                |
| **Error**    | `--bg-surface`  | `1px solid --danger`        | —                |
| **Disabled** | `--bg-elevated` | `1px solid --border`        | `--text-muted`   |

---

### 6.6 Code Block

```css
pre {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent); /* accent vertical stripe */
  border-radius: 8px;
  padding: var(--space-5) var(--space-6);
  overflow-x: auto;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.875rem;
  line-height: 1.7;
}

/* Inline code */
:not(pre) > code {
  background: var(--bg-elevated);
  color: var(--accent);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.875em;
}
```

---

### 6.7 Navigation (Header Nav)

```
┌──────────────────────────────────────────────┐
│  [LOGO]   Home   Blog   About  Contact [🌙]  │
└──────────────────────────────────────────────┘
```

| Nav item state       | Color              | Underline                  |
| -------------------- | ------------------ | -------------------------- |
| Default              | `--text-secondary` | none                       |
| **Hover**            | `--text-primary`   | 2px `--accent`, offset 4px |
| **Active / Current** | `--accent`         | 2px `--accent`             |

**Theme toggle button:**

- Icon: 🌙 (dark mode) / ☀️ (light mode)
- Hover: `--bg-elevated` background, border-radius: 6px
- Transition: `0.15s ease`

---

### 6.8 Dividers & Horizontal Rules

```css
hr {
  border: none;
  height: 1px;
  background: var(--border);
  margin: var(--space-7) 0;
}

/* Accent divider (e.g. between hero and content) */
.divider-accent {
  height: 2px;
  background: linear-gradient(90deg, var(--accent), transparent);
  border: none;
}
```

---

## 7. Iconography

### 7.1 Recommended Free Icon Packs

#### 🥇 Phosphor Icons — _(primary recommendation)_

- **URL:** https://phosphoricons.com
- **NPM:** `@phosphor-icons/react` or `phosphor-icons`
- **License:** MIT
- **Why:** 9000+ icons, 6 styles (Regular, Bold, Duotone, Fill, Light, Thin), excellent technical theme coverage, SVG sprite & Web Components support
- **Key icons for the blog:** `Code`, `Terminal`, `GitBranch`, `Article`, `BookOpen`, `Tag`, `MagnifyingGlass`, `User`, `Moon`, `Sun`, `ArrowRight`, `Share`, `Clock`, `Rss`

#### 🥈 Lucide Icons

- **URL:** https://lucide.dev
- **NPM:** `lucide-react` / `lucide`
- **License:** ISC (MIT-compatible)
- **Why:** Modern, clean, stroke-based, scales flawlessly at any size

#### 🥉 Heroicons (by Tailwind Labs)

- **URL:** https://heroicons.com
- **NPM:** `@heroicons/react`
- **License:** MIT
- **Why:** 2 styles (outline / solid), minimalist, fits UI elements perfectly

#### 🔁 Devicons — for languages & technologies

- **URL:** https://devicons.github.io/devicon
- **CDN:** `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/`
- **License:** MIT
- **Why:** Language logos — Python, TypeScript, Rust, Go, Docker, React, etc. — essential for tags

#### Simple Icons — for brands

- **URL:** https://simpleicons.org
- **NPM:** `simple-icons`
- **License:** CC0 (public domain)
- **Why:** GitHub, YouTube, X, LinkedIn, RSS — for social sharing and footer links

---

### 7.2 Icon Usage Rules

- Size: **16px** (inline in text), **20px** (UI elements), **24px** (standalone)
- Color: inherited via `currentColor`
- Stroke width: **1.5px** for Phosphor/Lucide (Regular style)
- Do not mix styles (never place Filled and Outline icons side by side)
- Always add `aria-label` or `aria-hidden="true"` + visible text alongside the icon

---

## 8. Graphics & Media

### 8.1 Minimalism Principle

```
Less = more. Every graphic element must serve a function.
Decoration for its own sake is prohibited.
```

### 8.2 Article Cover Images

- **Aspect ratio:** 16:9 (required)
- **Minimum size:** 1200 × 675px
- **Format:** WebP (primary), JPEG (fallback)
- **Style:** abstract geometric / gradient / dark background with code text
- **Do NOT use:** stock photos of people, clipart, kitsch illustrations

**Recommended free image sources:**

- [Unsplash — tech](https://unsplash.com/s/photos/code) — monitor shots, terminals
- [unDraw](https://undraw.co) — SVG illustrations (accent color customizable to match brandbook)
- [Haikei](https://haikei.app) — abstract SVG background generator (free)

### 8.3 OG Cards (Open Graph)

- Size: **1200 × 630px**
- Structure: `--bg-base` background, logo in the corner, article title in large type (Syne), tag and date
- Generate automatically with Vercel OG / Satori / Cloudinary

### 8.4 Author Avatars

- Shape: circle (`border-radius: 50%`)
- Size on card: **32px**
- Size on article page: **48px**
- Fallback (no photo): initials on `--accent-subtle` background, text in `--accent`

---

## 9. Animation & Micro-interactions

### 9.1 Core Principle

```
Fast, unobtrusive, functional.
Animation confirms an action — it does not entertain.
```

### 9.2 Timing

```css
--duration-fast: 0.15s; /* ← primary duration */
--duration-medium: 0.25s; /* larger transitions (modal, sidebar) */
--duration-slow: 0.4s; /* page-level transitions */

--ease-default: cubic-bezier(0.4, 0, 0.2, 1); /* Material-like ease */
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1); /* subtle bounce on cards */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
```

### 9.3 Standard Animations

| Element         | Duration | Property                               | Easing       |
| --------------- | -------- | -------------------------------------- | ------------ |
| Button hover    | 0.15s    | background, transform                  | ease-default |
| Card hover      | 0.15s    | transform, box-shadow, border-color    | ease-default |
| Tag hover       | 0.15s    | background, color                      | ease-default |
| Theme toggle    | 0.15s    | color, background                      | ease-default |
| Link underline  | 0.15s    | text-decoration-color                  | ease-default |
| Dropdown open   | 0.15s    | opacity, transform (translateY -4px→0) | ease-out     |
| Modal open      | 0.25s    | opacity, scale (0.96→1)                | ease-out     |
| Code block copy | 0.15s    | opacity (button)                       | ease-default |

### 9.4 Global Accessibility Rule

```css
/* Accessibility: disable animations if the user prefers reduced motion */
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

## 10. Voice & Tone

### 10.1 Tone Distribution

```
████████████░░░░░░░░  60% Technical
██████░░░░░░░░░░░░░░  30% Friendly
██░░░░░░░░░░░░░░░░░░  10% Emotional
```

### 10.2 Each Layer in Detail

#### Technical (60%)

- Use precise terminology without watering things down
- Concrete code examples
- Reference specs, RFCs, and official documentation
- Don't explain the obvious to an experienced developer
- ✅ "`useEffect` with an empty dependency array is equivalent to `componentDidMount`"
- ❌ "A hook is a special kind of function in React"

#### Friendly (30%)

- Address the reader directly as "you"
- Light, situational humor — never forced
- Explain the "why", not just the "how"
- ✅ "Yeah, merge hell happens to everyone — here's how to get out of it with dignity"
- ❌ "Welcome! Today we will be exploring..."

#### Emotional (10%)

- Only when the topic genuinely warrants excitement or concern
- Avoid hyperbole ("revolutionary", "X-killer")
- Acceptable: genuine admiration for an elegant solution, honest criticism
- ✅ "This is genuinely elegant — and here's why"
- ❌ "WOW! This CHANGES EVERYTHING!!!"

---

### 10.3 Writing Rules

| ✅ Do                             | ❌ Avoid                         |
| --------------------------------- | -------------------------------- |
| Active voice: "We added..."       | Passive: "It was added..."       |
| Short, punchy sentences           | Labyrinthine 4-line sentences    |
| "for example", "in particular"    | "i.e." in every sentence         |
| Numbers as digits: "5 steps"      | "five steps"                     |
| Technical EN terms without quotes | "so-called" before every EN term |
| Exact date: "May 22, 2025"        | "recently", "soon"               |

---

## Appendix A — New Post Checklist

- [ ] Title: up to 70 characters, no clickbait
- [ ] Cover: 16:9, WebP, dark or neutral style
- [ ] Tags: 1–4 tags from the existing taxonomy
- [ ] Code blocks: syntax highlighted, language specified
- [ ] Links: all working, external links use `target="_blank" rel="noopener"`
- [ ] OG card: generated and verified
- [ ] Readability: checked on mobile (xs)

---

## Appendix B — Brandbook Versioning

| Version | Date    | Changes                                             |
| ------- | ------- | --------------------------------------------------- |
| 1.0     | 2025-05 | First release: colors, typography, components, grid |
| —       | —       | Logo (pending)                                      |
| —       | —       | Detailed motion guidelines (pending)                |

---

_DevLog Brandbook © 2025 — Internal Document_
