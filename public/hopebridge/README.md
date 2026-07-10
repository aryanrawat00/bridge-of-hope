# HopeBridge Foundation — Static Site

A premium, production-ready NGO website built with **plain HTML, CSS and JavaScript** — no frameworks, no build step.

## Overview

HopeBridge is a nonprofit landing site covering education, child welfare, women empowerment, digital literacy, healthcare and sustainability. The design targets a UNICEF / GiveIndia level of polish while remaining original.

## Features

- Sticky glass navigation with active-section highlight & mobile menu
- Hero with typewriter, animated blobs, counters and floating chips
- About, Mission/Vision/Values, sticky Journey timeline
- 8 program cards with hover motion
- "Why choose us" trust cards
- Animated impact counters on gradient section
- Success stories, team, and Google-Maps-styled contact block
- Responsive gallery with lightbox
- Volunteer registration form with client validation
- Donation cards with selectable amounts + custom input
- Events timeline (upcoming + past)
- Testimonial slider with autoplay + dots
- FAQ accordion with smooth expand
- Contact form with validation and success state
- Rich footer with newsletter subscription
- Dark mode toggle (persisted)
- Scroll progress bar, back-to-top, floating Donate FAB
- Cookie consent banner, newsletter popup
- Loading screen, reveal-on-scroll animations
- SEO: meta, Open Graph, Twitter, JSON-LD schema
- Accessibility: semantic HTML, ARIA labels, focus states, reduced-motion support

## Folder structure

```
hopebridge/
├── index.html      # Markup + SEO + JSON-LD
├── style.css       # Design system, components, responsive
├── script.js       # All interactions (vanilla JS)
├── assets/
│   └── favicon.svg
├── images/         # (add local images here if replacing Unsplash URLs)
└── README.md
```

## Run locally

No build required. Either:

```bash
# Option 1 — Python
python3 -m http.server 5173
# then open http://localhost:5173/

# Option 2 — Node
npx serve .
```

Or simply open `index.html` in a modern browser.

## Customize

- **Colors / theme** — edit CSS variables at the top of `style.css` (`:root { --primary… }`). A `[data-theme="dark"]` block powers dark mode.
- **Typography** — swap the Google Fonts `<link>` in `index.html` and update `font-family` in `style.css`.
- **Content** — every section is plain semantic HTML in `index.html`; edit copy, images and links directly.
- **Images** — replace Unsplash URLs with files in `images/` for offline use.
- **Programs / stats / stories** — duplicate the existing card markup and adjust.

## Browser compatibility

Tested on evergreen versions of:

- Chrome / Edge / Brave (Chromium)
- Firefox
- Safari (macOS + iOS)

Uses modern CSS (`color-mix`, `:has`, `backdrop-filter`, `oklab`) supported in all evergreen browsers as of 2024.

## License

Sample project — free to adapt for your own nonprofit.
