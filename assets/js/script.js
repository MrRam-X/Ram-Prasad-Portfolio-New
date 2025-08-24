// --- Mobile Menu ---
const menuButton = document.getElementById("mobile-menu-button");
const menuButtonIcon = menuButton.querySelector("i");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

const toggleMenu = () => {
  const isMenuOpen = !mobileMenu.classList.contains("hidden");

  // Toggle menu visibility
  mobileMenu.classList.toggle("hidden");

  // Toggle icon between bars and times (X)
  menuButtonIcon.classList.toggle("fa-bars", isMenuOpen);
  menuButtonIcon.classList.toggle("fa-times", !isMenuOpen);

  // Prevent body from scrolling when menu is open
  document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
};

menuButton.addEventListener("click", toggleMenu);
mobileLinks.forEach((link) => link.addEventListener("click", toggleMenu));

// --- Header Style on Scroll ---
window.onscroll = function () {
  const header = document.getElementById("header");
  if (window.pageYOffset > 50) {
    header.classList.add("bg-brand-dark", "shadow-lg");
  } else {
    header.classList.remove("bg-brand-dark", "shadow-lg");
  }
};

// --- Active Link on Scroll ---
const sectionsToObserve = document.querySelectorAll(
  "#home, #experience, #portfolio, #contact"
);
const navLinks = document.querySelectorAll(".nav-link");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("text-brand-green");
          link.classList.add("text-gray-400");
          if (link.getAttribute("data-scroll-to") === entry.target.id) {
            link.classList.add("text-brand-green");
            link.classList.remove("text-gray-400");
          }
        });
      }
    });
  },
  { threshold: 0.5 }
);
sectionsToObserve.forEach((section) => observer.observe(section));

// --- Scroll Reveal Animations ---
ScrollReveal().reveal(".reveal-fade", {
  delay: 200,
  duration: 800,
  distance: "50px",
  origin: "bottom",
  easing: "ease-in-out",
  reset: false,
});
ScrollReveal().reveal(".timeline-item", {
  delay: 200,
  duration: 800,
  distance: "50px",
  origin: "bottom",
  easing: "ease-in-out",
  interval: 200,
  reset: false,
});

// --- Skill Bar Animation ---
const skillObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillBars = entry.target.querySelectorAll(".skill-bar-inner");
        skillBars.forEach((bar) => {
          bar.style.width = bar.dataset.width;
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll("#professional .skill-item").forEach((item) => {
  skillObserver.observe(item);
});
