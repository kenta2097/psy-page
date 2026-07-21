const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const themeSelect = document.querySelector("#theme-select");
const THEME_STORAGE_KEY = "psy-temporary-theme";

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