# WatchCharm

Responsive landing page for a fictional watch shop — a team project from the
[GoIT](https://goit.global) Fullstack course (HTML + CSS module, November 2024).

**Live demo:** [zoiapzp.github.io/project-chrono-creators](https://zoiapzp.github.io/project-chrono-creators/)

## Sections

Header · Hero · About us · Catalog · Sale · Reviews · Advertisement · Contact us · Footer,
plus a mobile menu for phones and tablets.

## Tech stack

- Semantic HTML5 split into partials (`vite-plugin-html-inject`)
- CSS, mobile-first, with media queries sorted by `postcss-sort-media-queries`
- SVG sprite for icons; WebP / JPG images in 1x and 2x for retina screens
- Vanilla JavaScript for the mobile menu and the contact form
- [Vite](https://vitejs.dev) for development and build, deployed to GitHub Pages

## My part

I built the **mobile menu** (`src/partials/mobile-menu.html`, `src/css/mobile-menu.css`):
layout for mobile and tablet, the open/close icons in the sprite, and the
responsive watch images (WebP, 1x/2x).

## Team

Built by a team of 9 developers working in Git branches with pull requests and
code review. Team lead: [PushEaxVK](https://github.com/PushEaxVK).
Original repository: [PushEaxVK/project-chrono-creators](https://github.com/PushEaxVK/project-chrono-creators).

## Run locally

```bash
npm ci
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```
