const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const bookingForm = document.querySelector("#booking-form");
const formStatus = document.querySelector("#form-status");

if (window.lucide) {
  window.lucide.createIcons();
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

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;

    document.querySelectorAll("details[open]").forEach((openDetail) => {
      if (openDetail !== detail) {
        openDetail.removeAttribute("open");
      }
    });
  });
});

if (bookingForm && formStatus) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(bookingForm);
    const body = Array.from(data.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    const subject = "Solicitud de cita pendiente";
    const email = "contacto@psicologiamontaner.es";

    formStatus.hidden = false;
    formStatus.textContent = "Solicitud preparada. Se abrirá tu correo para enviarla a la consulta.";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}