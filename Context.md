# Brand & Design Context — ETS

## Brand Identity

**Organization:** ETS (Educational Testing Service)
**Source site:** [https://www.ets.org/gre.html]
**Brand:** GRE (Graduate Record Examinations)

---

## Color Palette

| Token | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| Primary Purple | `#630f54` | `--link-color` | Links, headings, CTAs |
| Primary Hover | `#4a0b3f` | `--link-hover-color` | Hover states |
| Dark Purple | `#38002e` | `--dark-purple` | Hero background |
| Text | `#1a212b` | `--text-color` | Body text |
| Cream/Ivory | `#f2e9d8` | `--light-color` | Section backgrounds, hero text |
| Accent Red/Orange | `#da4727` | `--accent-color` | Social section background |
| Background | `#ffffff` | `--background-color` | Page background |

---

## Typography

| Element | Font Family | CSS Variable | Weight |
|---------|-------------|-------------|--------|
| Body | Beausite Classic, system-ui, sans-serif | `--body-font-family` | 400 |
| Headings | Beausite Classic, system-ui, sans-serif | `--heading-font-family` | 600 |
| Stats numbers | Beausite Classic | — | 600 |
| Cards h3 | Beausite Classic | — | 500-600 |

---

## Buttons

```css
/* Primary (solid) */
background-color: #f2e9d8;
border: 1px solid #f2e9d8;
border-radius: 0;
color: #630f54;
padding: 14px 24px;

/* Secondary (outline on dark) */
background-color: transparent;
border: 1px solid #f2e9d8;
color: #f2e9d8;

/* Primary on light bg */
background-color: #630f54;
border: 1px solid #630f54;
color: #fff;

/* Secondary on light bg */
background-color: transparent;
border: 1px solid #630f54;
color: #630f54;
```

---

## Layout

| Token | Value |
|-------|-------|
| Max content width | 1200px |
| Mobile breakpoint | < 900px |
| Desktop breakpoint | ≥ 900px |
| Nav height | 64px |
| Section padding | 40px 24px (mobile), 40px 32px (desktop) |

---

## Image Rules

- Max width: 100%, height: auto
- No border-radius on content images
- Hero images: side-by-side on desktop, stacked on mobile
- Columns images: equal flex with text on desktop
- Full-width display

---

## Section Patterns

| Pattern | Description |
|---------|-------------|
| Hero | Dark purple bg, images + text/CTAs side by side |
| Stats | Cream/ivory bg, large percentage numbers centered |
| Cards (list) | Vertical list with h3 links and descriptions |
| Columns (ping-pong) | Alternating image/text left-right layout |
| Social Links | Red/orange bg, centered icon grid |

---

## DO NOT Modify

`styles/styles.css` is frozen once design is complete.
Block-level CSS changes only: `blocks/{name}/{name}.css`
