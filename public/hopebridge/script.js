/* =========================================================
   HopeBridge Foundation — Interactions
   Vanilla JS: no dependencies.
   ========================================================= */

(() => {
  const $  = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  /* ---------- Year ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Loader ---------- */
  window.addEventListener("load", () => {
    setTimeout(() => $("#loader")?.classList.add("hide"), 500);
  });

  /* ---------- Theme toggle (persisted) ---------- */
  const root = document.documentElement;
  const stored = localStorage.getItem("hb-theme");
  if (stored === "dark") root.setAttribute("data-theme", "dark");
  $("#theme-toggle")?.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    if (isDark) { root.removeAttribute("data-theme"); localStorage.setItem("hb-theme", "light"); }
    else        { root.setAttribute("data-theme", "dark"); localStorage.setItem("hb-theme", "dark"); }
  });

  /* ---------- Navbar scrolled state & scroll progress ---------- */
  const nav = $("#navbar");
  const bar = $("#scroll-progress");
  const backTop = $("#back-top");
  const onScroll = () => {
    const y = window.scrollY;
    nav?.classList.toggle("scrolled", y > 20);
    backTop?.classList.toggle("show", y > 500);
    if (bar) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = ((y / h) * 100) + "%";
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- Mobile menu ---------- */
  const burger = $("#hamburger");
  const links  = $("#nav-links");
  burger?.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  $$("#nav-links a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }));

  /* ---------- Active section highlight ---------- */
  const sections = $$("main section[id]");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        $$("#nav-links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => spy.observe(s));

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => io.observe(el));

  /* ---------- Counters ---------- */
  const counters = $$("[data-counter]");
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.counter;
      const dur = 1600;
      const start = performance.now();
      const fmt = new Intl.NumberFormat("en-IN");
      const step = (t) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt.format(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = fmt.format(target) + (target >= 1000 ? "+" : "");
      };
      requestAnimationFrame(step);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(c => counterIO.observe(c));

  /* ---------- Typewriter ---------- */
  const typer = $("#typewriter");
  if (typer) {
    const words = ["every child.", "every family.", "every village.", "a fairer world."];
    let wi = 0, ci = 0, deleting = false;
    const tick = () => {
      const w = words[wi];
      typer.textContent = w.slice(0, ci);
      if (!deleting && ci < w.length) { ci++; setTimeout(tick, 85); }
      else if (deleting && ci > 0)    { ci--; setTimeout(tick, 40); }
      else {
        if (!deleting) { deleting = true; setTimeout(tick, 1400); }
        else           { deleting = false; wi = (wi + 1) % words.length; setTimeout(tick, 200); }
      }
    };
    tick();
  }

  /* ---------- Testimonials slider ---------- */
  const slider = $("[data-slider]");
  if (slider) {
    const track = $(".slides", slider);
    const slides = $$(".slide", slider);
    const dotsWrap = $(".dots", slider);
    let idx = 0, timer;

    track.style.display = "flex";
    track.style.transition = "transform .6s cubic-bezier(.22,.61,.36,1)";
    slides.forEach(s => {
      s.style.minWidth = "100%";
      s.style.width = "100%";
      s.style.flex = "0 0 100%";
    });
    slides.forEach((s, i) => {
      const b = document.createElement("button");
      b.setAttribute("aria-label", `Go to testimonial ${i + 1}`);
      b.addEventListener("click", () => go(i));
      dotsWrap.appendChild(b);
    });
    const dots = $$("button", dotsWrap);

    const go = (i) => {
      idx = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${idx * 100}%)`;
      dots.forEach((d, k) => d.classList.toggle("active", k === idx));
      restart();
    };
    const restart = () => { clearInterval(timer); timer = setInterval(() => go(idx + 1), 5500); };

    $("[data-prev]", slider)?.addEventListener("click", () => go(idx - 1));
    $("[data-next]", slider)?.addEventListener("click", () => go(idx + 1));
    go(0);
  }

  /* ---------- Forms (client validation + fake submit) ---------- */
  $$("[data-form]").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const btn = form.querySelector("button[type=submit]");
      const original = btn.textContent;
      btn.disabled = true; btn.textContent = "Sending…";
      setTimeout(() => {
        btn.disabled = false; btn.textContent = original;
        form.reset();
        const msg = form.querySelector(".form-success");
        if (msg) { msg.hidden = false; setTimeout(() => msg.hidden = true, 5000); }
      }, 900);
    });
  });

  /* ---------- Newsletter ---------- */
  $$("[data-newsletter]").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input");
      if (!input.checkValidity()) return form.reportValidity();
      input.value = "";
      const btn = form.querySelector("button");
      const t = btn.textContent;
      btn.textContent = "✓ Subscribed";
      setTimeout(() => btn.textContent = t, 2500);
      $("#newsletter-modal")?.classList.remove("open");
    });
  });

  /* ---------- Ripple effect ---------- */
  $$(".ripple").forEach(el => {
    el.addEventListener("pointerdown", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--x", ((e.clientX - r.left) / r.width * 100) + "%");
      el.style.setProperty("--y", ((e.clientY - r.top) / r.height * 100) + "%");
    });
  });

  /* ---------- Cookie banner ---------- */
  const cookie = $("#cookie-banner");
  if (cookie && !localStorage.getItem("hb-cookie")) {
    setTimeout(() => cookie.hidden = false, 1500);
  }
  $("#cookie-accept")?.addEventListener("click", () => { localStorage.setItem("hb-cookie", "accepted"); cookie.hidden = true; });
  $("#cookie-decline")?.addEventListener("click", () => { localStorage.setItem("hb-cookie", "declined"); cookie.hidden = true; });

  /* ---------- Newsletter popup (once per session) ---------- */
  const modal = $("#newsletter-modal");
  if (modal && !sessionStorage.getItem("hb-nl-shown")) {
    setTimeout(() => { modal.classList.add("open"); sessionStorage.setItem("hb-nl-shown", "1"); }, 12000);
  }
  modal?.addEventListener("click", (e) => {
    if (e.target === modal || e.target.matches("[data-close]")) modal.classList.remove("open");
  });

  /* ---------- Lightbox for gallery ---------- */
  const lb = $("#lightbox");
  const lbImg = lb?.querySelector("img");
  $$(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      lbImg.src = img.src.replace("w=800", "w=1600");
      lbImg.alt = img.alt;
      lb.classList.add("open");
    });
  });
  lb?.addEventListener("click", (e) => {
    if (e.target === lb || e.target.matches(".lightbox-close")) lb.classList.remove("open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { lb?.classList.remove("open"); modal?.classList.remove("open"); }
  });

  /* ---------- Parallax on hero blobs ---------- */
  const blobs = $$(".hero-bg .blob");
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    blobs.forEach((b, i) => b.style.transform = `translateY(${y * (0.05 + i * 0.03)}px)`);
  }, { passive: true });

  /* ---------- Donation flow (simulated) ---------- */
  const donateBtn = document.querySelector(".donate-cta .btn");
  if (donateBtn) {
    donateBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const picked = document.querySelector('input[name="donation"]:checked');
      let amount = picked?.value || "1500";
      if (amount === "custom") {
        const custom = document.querySelector('.donate-card input[type="number"]');
        if (!custom?.value || +custom.value < 100) {
          custom?.focus();
          custom?.reportValidity?.();
          return;
        }
        amount = custom.value;
      }
      const original = donateBtn.textContent;
      donateBtn.disabled = true;
      donateBtn.textContent = "Processing…";
      setTimeout(() => {
        donateBtn.disabled = false;
        donateBtn.textContent = original;
        showToast(`🎉 Thank you! Your ₹${(+amount).toLocaleString("en-IN")} donation was successful. A receipt has been emailed to you.`);
      }, 900);
    });
  }

  /* ---------- Toast (accessible) ---------- */
  function showToast(message) {
    let host = document.getElementById("hb-toast");
    if (!host) {
      host = document.createElement("div");
      host.id = "hb-toast";
      host.setAttribute("role", "status");
      host.setAttribute("aria-live", "polite");
      document.body.appendChild(host);
    }
    host.textContent = message;
    host.classList.add("show");
    clearTimeout(host._t);
    host._t = setTimeout(() => host.classList.remove("show"), 4200);
  }

})();