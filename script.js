// ========== Hide Header on Scroll ==========
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.top = "-100px";
  } else {
    // Scrolling up
    header.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

// ========== Mobile Menu Toggle ==========
const menuToggle = document.getElementById("menu-toggle");
const dropdown = document.querySelector(".dropdown");

menuToggle.addEventListener("change", () => {
  if (menuToggle.checked) {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
});

// ========== Optional: Close dropdown on link click (for better UX) ==========
const dropdownLinks = document.querySelectorAll(".dropdown a");
dropdownLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
    dropdown.style.display = "none";
  });
});

// ========== Optional: Fade-in animation on scroll ==========
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-active");
      observer.unobserve(entry.target); // Animate once
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));
