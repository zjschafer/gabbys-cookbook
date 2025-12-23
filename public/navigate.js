"use strict";

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

console.log("navigate.js loaded");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

// reset menu on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 1080) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("toggle");
  }
});

// on click make menu disappear
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("toggle");
    }
  });
});
