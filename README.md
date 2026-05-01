# Engineering Portfolio — Setup & Editing Guide

## File Structure

```
portfolio/
├── index.html       ← All page content + structure
├── styles.css       ← All styling (colors, layout, typography)
├── script.js        ← Minimal JS (year, active nav)
├── resume.pdf       ← Drop your resume here
└── images/
    ├── project-amiga.jpg
    ├── project-ransac.jpg
    ├── project-weeder.jpg
    └── project-sensors.jpg
```

---

## Quick Start Checklist

1. **Add your name** — search for `Your Name` in `index.html` and replace all instances.
2. **Add your links** — search for `yourusername` to update GitHub/LinkedIn URLs and email.
3. **Drop in your images** — place photos in the `images/` folder using the names above, or update the `src` attributes in `index.html`.
4. **Fill in project descriptions** — each card and case study has clear `<!-- EDIT: -->` comments.
5. **Add your resume** — place `resume.pdf` in the same folder as `index.html`.
6. **Open in a browser** — just open `index.html` directly. No build step needed.

---

## How to Add a New Project

### Step 1 — Add a project card (in the `#projects` section)

Copy this block and paste it inside `<div class="project-grid">`:

```html
<article class="project-card">
  <div class="card-img-wrap">
    <img src="images/project-YOURPROJECT.jpg" alt="Project Name" loading="lazy" />
    <span class="card-index">05</span>
  </div>
  <div class="card-body">
    <h3 class="card-title">Your Project Title</h3>
    <p class="card-summary">
      1–2 sentence summary of what you built and why it matters.
    </p>
    <ul class="tag-list">
      <li>Tool 1</li>
      <li>Tool 2</li>
    </ul>
    <a href="#case-YOURPROJECT" class="card-link">View Case Study →</a>
  </div>
</article>
```

### Step 2 — Add a case study section

Copy one of the existing `<section class="case-study">` blocks and:
- Change the `id` to match the `href` in your card (e.g., `id="case-YOURPROJECT"`)
- Update the case study number in the label
- Fill in (or leave as placeholder) each subsection

---

## Changing Colors

All colors are CSS variables at the top of `styles.css`:

```css
:root {
  --bg:      #f5f4f0;   /* Page background */
  --surface: #ffffff;   /* Card backgrounds */
  --accent:  #c1440e;   /* Buttons, links, highlights */
  ...
}
```

Change `--accent` to any hex color to update all buttons and accent elements at once.

---

## Hosting for Free

- **GitHub Pages**: Push to a public repo → Settings → Pages → Deploy from `main` branch
- **Netlify**: Drag and drop your portfolio folder onto netlify.com/drop
- **Vercel**: Connect your GitHub repo

All three are free and work with plain HTML/CSS/JS sites.
