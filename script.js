
/* ==============================
   RAFI.DEV - JAVASCRIPT
============================== */

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        const isActive = navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active", isActive);
        menuToggle.setAttribute("aria-expanded", isActive);
    });

    // Close menu after clicking a link

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    // Close menu when clicking outside

    document.addEventListener("click", (event) => {
        if (
            !menuToggle.contains(event.target) &&
            !navMenu.contains(event.target)
        ) {
            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("show");
    });

}


// ACTIVE NAVIGATION

const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${currentId}`) {
                        link.classList.add("active");
                    }

                });

            }

        });

    }, {
        rootMargin: "-30% 0px -60% 0px"
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

}


// AUTOMATIC FOOTER YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// SCROLL PROGRESS

const scrollProgress = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {

    if (scrollProgress) {

        const scrollable =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress = scrollable > 0
            ? (window.scrollY / scrollable) * 100
            : 0;

        scrollProgress.style.width = `${progress}%`;

    }

}, { passive: true });


// CURSOR GLOW

const cursorGlow = document.getElementById("cursorGlow");

if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {

    document.addEventListener("mousemove", (event) => {

        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;

    });

}


// CONSOLE MESSAGE

console.log(
    "%cWelcome to rafi.dev!",
    "color: #b6ff5c; font-size: 20px; font-weight: bold;"
);

console.log("Designed and built by Rafi.");
