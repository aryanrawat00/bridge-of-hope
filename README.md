<div align="center">

# 🌉 HopeBridge Foundation

**A premium, production-ready NGO website built with pure HTML, CSS & JavaScript.**

*Modern. Responsive. Accessible. Dependency-free.*

[![Live Demo](https://img.shields.io/badge/🔗_Live_Demo-Visit_Site-10B981?style=for-the-badge&logo=vercel&logoColor=white)](https://bridgeofhopes.lovable.app)
[![License](https://img.shields.io/badge/License-MIT-3B82F6?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](./LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JS-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## 🖥️ Live Demo

Experience the website live in your browser:

👉 **[https://bridgeofhopes.lovable.app](https://bridgeofhopes.lovable.app)**

---

## 📋 Project Overview

**HopeBridge Foundation** is a modern, elegant, and fully responsive nonprofit website designed for real-world impact. It showcases how a nonprofit organization can present its mission, programs, impact, team, and calls-to-action with agency-level polish — while remaining lightweight, fast, and completely dependency-free.

**Target audience:** Donors, volunteers, partner organizations, journalists, and anyone interested in supporting work across education, child welfare, women empowerment, healthcare, digital literacy, and sustainability.

---

## ✨ Key Features

| Category | Features |
|----------|----------|
| 🎨 **Design** | Glassmorphism, gradient meshes, premium typography, micro-interactions |
| 📱 **Responsive** | Fluid layouts from 320px mobile up to 4K desktop |
| 🧭 **Navigation** | Sticky scroll-aware navbar with active-section highlighting |
| 🦸 **Hero** | Typewriter effect, animated blobs, live counters, floating chips |
| ℹ️ **About** | Mission, vision, values, and sticky journey timeline |
| 🎯 **Programs** | 8 detailed program cards with smooth hover motion |
| 📊 **Impact** | Animated counters on a gradient statistics section |
| 🤝 **Volunteer** | Registration form with client-side validation |
| 🖼️ **Gallery** | Responsive image grid with lightbox |
| 📅 **Events** | Upcoming and past events timeline |
| 💬 **Testimonials** | Autoplay slider with dot and arrow controls |
| ❓ **FAQ** | Accessible accordion with smooth expand/collapse |
| ✉️ **Contact** | Validated contact form with success state |
| 💝 **Donation** | Preset amounts, custom input, simulated processing + toast |
| 🌙 **Dark Mode** | Toggle with `localStorage` persistence |
| 🍪 **Cookies** | Accept/decline banner with persisted preference |
| 🎬 **Animations** | Scroll reveal via IntersectionObserver |
| ⬆️ **UX** | Back-to-top button, smooth scroll, skip links |
| ♿ **Accessibility** | ARIA labels, focus rings, reduced-motion support |
| 🔍 **SEO** | JSON-LD schema, Open Graph, Twitter Cards, semantic HTML |

---

## 🚀 Quick Start

No build tools required. Choose any option below:

### Option 1 — Open Directly

Open `public/hopebridge/index.html` in any modern browser.

### Option 2 — Python Static Server

```bash
cd public/hopebridge
python3 -m http.server 5173
```

Then visit: `http://localhost:5173`

### Option 3 — Node Static Server

```bash
npx serve public/hopebridge
```

---

## 🛠️ Technologies Used

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, `color-mix`, `:has`, `backdrop-filter`, `clamp()`, grid, flexbox
- **JavaScript (ES6+)** — Vanilla JS, IntersectionObserver, no external dependencies
- **Browser APIs** — `localStorage`, IntersectionObserver, native scroll behavior
- **Responsive Design** — Mobile-first approach
- **AI-Assisted Development** — Built with [Lovable AI](https://lovable.dev)

---

## 📁 Folder Structure

```text
hopebridge-foundation/
├── public/
│   └── hopebridge/              # ⬅️ Static website (deploy this folder)
│       ├── index.html          # Markup + SEO + JSON-LD
│       ├── style.css           # Design system + responsive styles
│       ├── script.js           # All interactions (vanilla JS)
│       ├── assets/             # Favicon + icons
│       └── images/             # Local image assets
├── src/                        # TanStack Start wrapper
├── package.json
├── LICENSE
└── README.md
```

> The static site lives entirely inside `public/hopebridge/` and can be deployed independently of the wrapper.

---

## 🌍 Deployment

The `public/hopebridge/` folder is a complete static site. Deploy it anywhere:

| Platform | Instructions |
|----------|--------------|
| **GitHub Pages** | Set publish source to `/public/hopebridge` in repo Settings → Pages |
| **Netlify** | Connect repo and set publish directory to `public/hopebridge` |
| **Vercel** | Import repo and set output directory to `public/hopebridge` |
| **Surge / Render / Any static host** | Drag and drop the `public/hopebridge/` folder |

---

## 📱 Responsive Design

Tested and optimized across all major breakpoints:

| Device | Breakpoint |
|--------|------------|
| 📱 Mobile | 320px – 640px |
| 📱 Tablet | 641px – 1024px |
| 💻 Desktop | 1025px – 1920px |
| 🖥️ Large Display | 1921px+ |

---

## ♿ Accessibility

- Skip-to-content link for keyboard users
- Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`)
- ARIA labels on all interactive controls
- Visible focus rings on every focusable element
- `prefers-reduced-motion` support
- Sufficient color contrast in both light and dark modes
- Keyboard-navigable menus, sliders, lightbox, and modals

---

## 🔍 SEO & Performance

- Semantic HTML5 structure
- Descriptive `<title>` and meta description
- Open Graph and Twitter Card tags
- JSON-LD structured data (`NGO` schema)
- Meaningful `alt` text on all images
- Canonical URL and viewport meta
- Lazy image loading (`loading="lazy"`)
- Zero-dependency vanilla JavaScript
- CSS variables for maintainable styles
- IntersectionObserver for efficient scroll animations
- Preconnect to Google Fonts

---

## 🔮 Future Improvements

- 🔧 Backend integration for real form submissions
- 💳 Real donation gateway (Stripe / Razorpay)
- 👥 Volunteer management system
- 🛠️ Admin dashboard
- 📧 Email integration for newsletters and transactional emails
- 📝 Headless CMS for content editing
- 🌍 Multi-language support (i18n)
- 📈 Analytics integration (GA4 / Plausible)

---

## 📄 License

Released under the [MIT License](./LICENSE).

---

## 👤 Author

**Aryan Rawat**

---

## 🙏 Acknowledgements

Developed as part of an **AI Website Generation internship task** and built with the assistance of [**Lovable AI**](https://lovable.dev).

---

<div align="center">

### ⭐ Show your support

If you found this project helpful, please consider giving it a star on GitHub!

[![Star on GitHub](https://img.shields.io/badge/⭐_Star_on_GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aryanrawat/hopebridge-foundation)

</div>
