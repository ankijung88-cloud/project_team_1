let lastScrollY = window.scrollY;

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  if (!header) return;

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;

      header.classList.toggle(
        "hide",
        currentScrollY > lastScrollY && currentScrollY > 80
      );

      lastScrollY = currentScrollY;
    },
    { passive: true }
  );
});
