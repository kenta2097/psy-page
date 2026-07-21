const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const themeSelect = document.querySelector("#theme-select");
const THEME_STORAGE_KEY = "psy-temporary-theme";
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const setupScrollEffects = () => {
  if (reduceMotionQuery.matches) {
    return;
  }

  document.documentElement.classList.add("motion-ready");

  const revealSelectors = [
    ".section-heading",
    ".intro-grid article",
    ".specialty-card",
    ".guidance-card",
    ".process-list li",
    ".split-section > *",
    ".contact-list span",
    ".contact-list a"
  ];

  const revealElements = Array.from(document.querySelectorAll(revealSelectors.join(",")));

  revealElements.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${(index % 8) * 55}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealElements.forEach((element) => observer.observe(element));
};

const setupScrollState = () => {
  if (reduceMotionQuery.matches) {
    return;
  }

  const heroMedia = document.querySelector(".hero-media");
  let ticking = false;

  const updateScrollVisuals = () => {
    const y = window.scrollY || 0;

    if (siteNav && navToggle && y > 16) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Abrir navegación");
    }

    const header = document.querySelector("[data-header]");
    if (header) {
      header.classList.toggle("scrolled", y > 10);
    }

    if (heroMedia) {
      const parallax = Math.min(24, y * 0.06);
      document.documentElement.style.setProperty("--hero-parallax", `${parallax}px`);
    }

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateScrollVisuals);
    },
    { passive: true }
  );

  updateScrollVisuals();
};

const applyTheme = (themeName) => {
  if (!themeName || themeName === "base") {
    document.documentElement.removeAttribute("data-theme");
    return;
  }

  document.documentElement.setAttribute("data-theme", themeName);
};

if (window.lucide) {
  window.lucide.createIcons();
}

if (themeSelect) {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) || "base";
  themeSelect.value = storedTheme;
  applyTheme(storedTheme);

  themeSelect.addEventListener("change", () => {
    const selectedTheme = themeSelect.value;
    applyTheme(selectedTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
  });
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Cerrar navegación" : "Abrir navegación");
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Abrir navegación");
    }
  });
}

setupScrollEffects();
setupScrollState();