"use strict";

const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const mobileNav = document.querySelector(".mobile-nav");
const backdrop = document.querySelector(".backdrop");

btnMenu.addEventListener("click", () => {
  mobileNav.classList.add("nav-show");
  backdrop.classList.add("backdrop-show");
});

const closeNav = function () {
  mobileNav.classList.remove("nav-show");
  backdrop.classList.remove("backdrop-show");
};

btnClose.addEventListener("click", closeNav);
backdrop.addEventListener("click", closeNav);
document.addEventListener("scroll", closeNav);

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const images = Array.from(document.querySelector(".hero-img").children);
const texts = Array.from(document.querySelector(".hero-text").children);
let activeImageIndex = images.findIndex((e) => e.classList.contains("active"));
let activeTextIndex = texts.findIndex((e) => e.classList.contains("active"));

const removeActive = function () {
  images[activeImageIndex].classList.remove("active");
  texts[activeTextIndex].classList.remove("active");
};
const addActive = function () {
  images[activeImageIndex].classList.add("active");
  texts[activeTextIndex].classList.add("active");
};

btnPrev.addEventListener("click", () => {
  removeActive();
  activeImageIndex--;
  activeTextIndex--;

  if (activeImageIndex < 0 && activeTextIndex < 0) {
    activeTextIndex = texts.length - 2;
    activeImageIndex = images.length - 1;
  }
  addActive();
});
btnNext.addEventListener("click", () => {
  removeActive();
  activeImageIndex++;
  activeTextIndex++;

  if (
    activeImageIndex > images.length - 1 &&
    activeTextIndex > texts.length - 2
  ) {
    activeTextIndex = 0;
    activeImageIndex = 0;
  }
  addActive();
});
