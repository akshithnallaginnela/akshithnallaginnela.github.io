// Section animation on scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Smooth scroll active link
const navLinkEls = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 100;
    navLinkEls.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));
        if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            navLinkEls.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        }
    });
});

// Modal functionality
const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close");

openModalBtn.onclick = () => { modal.style.display = "block"; }
closeModalBtn.onclick = () => { modal.style.display = "none"; }
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }
