const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".nav-overlay");

// Toggle Menu and Overlay
const toggleMenu = () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
    
    // Prevent scrolling background when menu is open
    if (navLinks.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
};

hamburger.addEventListener("click", toggleMenu);

// Close menu when clicking the darkened overlay
overlay.addEventListener("click", toggleMenu);

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", toggleMenu);
});