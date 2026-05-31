# ETS — Technical Reference

> **Source:** ETS (https://www.ets.org/gre.html)
> **Target:** AEM Edge Delivery Services (xwalk)

---

## Project Configuration

| Setting | Value |
|---------|-------|
| AEM site path | `/content/eds-ets` |
| AEM assets folder | `/content/dam/ets` |
| AEM site name | `ets` |

---

## Repository Structure

```
├── blocks/            # Block implementations (JS + CSS per block)
├── content/           # Migrated content (.html + images)
├── styles/styles.css  # Global design tokens
├── scripts/           # EDS framework scripts
├── models/            # Component model definitions
└── .migration/project.json
```

---

## Template Inventory

| # | Template | Pages | Notes |
|---|----------|-------|-------|
| 1 | GRE Homepage | gre.html | Hero + stats + cards + ping-pong columns + social |

---

## Block Inventory

### Custom Blocks

| Block | Purpose | File | Used On |
|-------|---------|------|---------|
| stats | Large percentage statistics with description text | blocks/stats/ | GRE homepage |
| social-links | Social media icon grid with heading | blocks/social-links/ | GRE homepage |

### Standard EDS Blocks (Reused)

| Block | Purpose | Customized CSS |
|-------|---------|---------------|
| hero | Full-width dark purple hero with images and CTAs | Yes — dark bg, side-by-side images, cream buttons |
| cards | Navigation card list with h3 links and descriptions | Yes — list-style without images |
| columns | Ping-pong text/image alternating sections | Yes — ETS button styles, larger headings |

### Available Standard Blocks (Not yet used)

accordion, tabs, carousel, embed, form, modal, quote, video, table, search, fragment

---

## Migration Rules

1. **Content HTML** must include `head.html` references (`scripts/aem.js`, `scripts/scripts.js`, `styles/styles.css`) for local preview to work
2. **Images** must be downloaded locally and referenced with absolute paths from root (`/content/gre/images/...`)
3. **Block class names** in HTML become the EDS block identifier — must match folder name exactly
4. **Sections** are defined by direct `<div>` children of `<main>` — each becomes a `.section`
5. **Buttons**: EDS auto-decorates standalone links in paragraphs as `.button`. Use `<em>` wrapper for secondary (`.button.secondary`)
6. **No external image URLs** — all assets must be local
7. **SVG icons** work directly as `<img>` tags within blocks

---

## Migration Learnings

1. **xwalk local content** requires the `<head>` to include script/style references — without them, EDS decoration (sections, blocks) won't apply
2. **Cards block** restructures content into `<ul><li>` format automatically — no need to author as list
3. **Hero images** in first column get wrapped in a `<p>` tag by EDS — CSS must target `picture` within paragraph context
4. **Font loading**: "Beausite Classic" is the ETS brand font — falls back to system-ui, sans-serif
5. **Button styling**: ETS uses square corners (border-radius: 0) unlike default EDS rounded buttons
6. **Color theming**: Each section uses distinct background colors — stats (cream #f2e9d8), social (orange-red #da4727), hero (dark purple #38002e)
7. **Responsive layout**: Columns blocks go side-by-side at 900px+ breakpoint, stack on mobile with image-first order

---

## Known Issues

1. Header/footer use Adobe defaults (from aem-block-collection template) — should be replaced with ETS-branded nav/footer when available
2. "Beausite Classic" font requires proper font-face loading — currently using system-ui fallback
3. Cards block renders as single-column list per source design — may need variant for grid layout on other pages

---

## Debugging

```bash
# Preview
aem up  # http://localhost:3000/content/gre/gre

# Verify blocks loaded
# In browser console: document.querySelectorAll('[data-block-name]')
```
