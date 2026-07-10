# HopeBridge Foundation

A premium, production-ready NGO website built with pure **HTML, CSS, and JavaScript** — no frameworks, no build step. Created as part of an AI Website Generation internship task, developed with the assistance of **Lovable AI**.

> Live site source: https://bridgeofhopes.lovable.app

---

## Project Overview

HopeBridge Foundation is a modern, elegant, and fully responsive nonprofit website. It showcases how a real-world NGO can present its mission, programs, impact, team, and calls-to-action (donate, volunteer, contact) with agency-level polish — while remaining lightweight and dependency-free.

**Target audience:** donors, volunteers, partner organizations, journalists, and anyone interested in the foundation's work in education, child welfare, women empowerment, healthcare, digital literacy, and sustainability.

## Project Description

The website represents a fictional NGO — HopeBridge Foundation — and demonstrates how AI-powered tools (Lovable) can generate production-quality frontends. Every section, animation, and interaction was iteratively designed and refined with AI assistance, then hand-polished for accessibility, SEO, and performance.

## Features

- 📱 **Responsive Design** — Fluid layouts from 320px mobile up to 4K desktop
- 🎨 **Modern UI/UX** — Glassmorphism, gradient meshes, micro-interactions
- 📌 **Sticky Navigation** — Scroll-aware navbar with active-section highlighting
- 🦸 **Hero Section** — Typewriter effect, animated blobs, live counters, floating chips
- ℹ️ **About Section** — Mission, vision, values, and sticky journey timeline
- 🎯 **Programs** — 8 detailed program cards with hover motion
- 📊 **Impact Statistics** — Animated counters on gradient section
- 🤝 **Volunteer Section** — Registration form with client-side validation
- 🖼️ **Gallery** — Responsive grid with lightbox
- 📅 **Events** — Upcoming and past events timeline
- 💬 **Testimonials** — Autoplay slider with dots and prev/next controls
- ❓ **FAQ** — Accessible accordion with smooth expand
- ✉️ **Contact Form** — Validation, success state, and Google-Maps-styled block
- 📰 **Newsletter** — Popup + footer subscription
- 💝 **Donation Section (Demo)** — Preset amounts, custom input, simulated processing + toast
- 🌙 **Dark Mode** — Toggle persisted via localStorage
- 🍪 **Cookie Consent** — Accept/decline banner with persisted preference
- ✨ **Smooth Scrolling** — Native CSS + JS anchor scrolling
- 🎬 **Scroll Animations** — Reveal-on-scroll via IntersectionObserver
- ⬆️ **Back-to-Top Button** — Appears after scrolling past hero
- ✅ **Form Validation** — HTML5 + custom UX-friendly validation
- 💾 **LocalStorage Support** — Theme, cookie choice, newsletter state
- ♿ **Accessibility Features** — Skip links, ARIA labels, focus rings, reduced-motion support
- 🔍 **SEO Optimizations** — Semantic HTML, meta tags, Open Graph, Twitter cards, JSON-LD schema

## Technologies Used

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, `color-mix`, `:has`, `backdrop-filter`, `clamp()`, grid, flexbox
- **JavaScript (ES6+)** — Vanilla JS, IntersectionObserver, no dependencies
- **Browser LocalStorage** — Preference persistence
- **Responsive Design** — Mobile-first approach
- **AI-assisted development** — Built with [Lovable](https://lovable.dev)

## Folder Structure

```
hopebridge-foundation/
├── public/
│   └── hopebridge/
│       ├── index.html          # Markup + SEO + JSON-LD
│       ├── style.css           # Design system, components, responsive
│       ├── script.js           # All interactions (vanilla JS)
│       ├── assets/
│       │   └── favicon.svg
│       └── README.md
├── src/                        # TanStack Start wrapper (embeds the static site)
├── package.json
├── LICENSE
└── README.md
```

> The static site lives entirely inside `public/hopebridge/` and can be deployed independently of the wrapper.

## Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/hopebridge-foundation.git
cd hopebridge-foundation
```

## How to Run Locally

**Option 1 — Open directly**
Open `public/hopebridge/index.html` in any modern browser.

**Option 2 — Static server**
```bash
cd public/hopebridge
python3 -m http.server 5173
# then visit http://localhost:5173
```

**Option 3 — Node**
```bash
npx serve public/hopebridge
```

## Deployment

The `public/hopebridge/` folder is a completely static site — deploy it to any static host:

- **GitHub Pages** — Push to `main`, then in repo Settings → Pages, set source to `/public/hopebridge` (or move contents to root).
- **Netlify** — Drag-and-drop `public/hopebridge/` into the Netlify dashboard, or connect the repo and set the publish directory to `public/hopebridge`.
- **Vercel** — Import the repo and set the output directory to `public/hopebridge`.

## Responsive Design

Tested across:
- 📱 **Mobile** (320px – 640px)
- 📱 **Tablet** (641px – 1024px)
- 💻 **Desktop** (1025px – 1920px)
- 🖥️ **Large displays** (1921px+)

## Browser Compatibility

Works on evergreen versions of Chrome, Edge, Firefox, Safari (macOS + iOS), and Brave.

## Accessibility

- Skip-to-content link
- Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`)
- ARIA labels on all interactive controls
- Visible focus rings on every focusable element
- `prefers-reduced-motion` support
- Sufficient color contrast in both light and dark modes
- Keyboard-navigable menus, sliders, lightbox, and modals

## SEO

- Semantic HTML5 structure
- Descriptive `<title>` and meta description
- Open Graph + Twitter Card tags
- JSON-LD structured data (`NGO` schema)
- Meaningful `alt` text on all images
- Canonical URL and viewport meta

## Performance

- Zero-dependency vanilla JS
- CSS variables instead of duplicated rules
- Lazy image loading (`loading="lazy"`)
- IntersectionObserver for reveal animations (no scroll listeners hammering the main thread)
- Preconnect to Google Fonts
- Minimal DOM depth per section

## Future Improvements

- 🔧 **Backend integration** — real form submissions
- 💳 **Real donation gateway** — Stripe / Razorpay
- 👥 **Volunteer management system**
- 🛠️ **Admin dashboard**
- 📧 **Email integration** — transactional email + newsletters
- 📝 **CMS support** — headless CMS for content editing
- 🌍 **Multi-language support** — i18n
- 📈 **Analytics integration** — GA4 / Plausible

## License

Released under the [MIT License](./LICENSE).

## Author

**Aryan Rawat**

## Acknowledgements

Developed as part of an **AI Website Generation internship task** and built with the assistance of [**Lovable AI**](https://lovable.dev).
