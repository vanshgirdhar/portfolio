const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});
// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close navbar on link click (for mobile UX)
document.querySelectorAll(".nav-links a").forEach(link =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  })
);
