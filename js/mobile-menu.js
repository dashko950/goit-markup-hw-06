// Відкриття/закриття мобільного меню
const mobileMenu = document.querySelector(".js-menu-container");
const openMenuBtn = document.querySelector(".js-open-menu");
const closeMenuBtn = document.querySelector(".js-close-menu");

function toggleMenu() {
  const isMenuOpen =
    openMenuBtn.getAttribute("aria-expanded") === "true" || false;
  openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
  mobileMenu.classList.toggle("is-open");
  document.body.classList.toggle("no-scroll");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

// Закриття мобільного меню при кліку на посилання
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

// Закриття мобільного меню при кліку поза ним
mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    toggleMenu();
  }
});

// Закриття мобільного меню при натисканні Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
    toggleMenu();
  }
});

// Закриття мобільного меню при ресайзі вікна на більші розміри
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768 && mobileMenu.classList.contains("is-open")) {
    toggleMenu();
  }
});
