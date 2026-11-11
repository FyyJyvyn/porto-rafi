
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// MOBILE NAVIGATION
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");

  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
});

// CLOSE MENU AFTER CLICK
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

// CLOSE MENU WITH ESCAPE
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }
});

// AUTOMATIC FOOTER YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();

// SCROLL REVEAL
const revealElements = document.querySelectorAll(
  ".section-label, .about-layout, .works-heading, " +
  ".project, .skills-layout, .experience-item, .contact-info"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
  });
} else {
  revealElements.forEach(element => {
    element.classList.add("visible");
  });
}
