import { Dropdown } from "./Dropdown";
import { MobileMenu } from "./MobileMenu";

const root = document.getElementById("root");
const navBar = document.createElement("nav");
// root.appendChild(navBar);

MobileMenu(navBar);

const sliderContent = document.getElementById("slider-content");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

const navDots = [];
navDots.push(document.getElementById("dot-0"));
navDots.push(document.getElementById("dot-1"));
navDots.push(document.getElementById("dot-2"));
navDots.push(document.getElementById("dot-3"));

const dotsContainer = document.getElementById("dots-container");

leftArrow.addEventListener("click", (e) => {
  moveLeft();
});

rightArrow.addEventListener("click", (e) => {
  moveRight();
});

dotsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-dot")) {
    slideIndex = parseInt(e.target.id.split("-")[1]);
    updateNav();
    resetInterval();
  }
});

let slideIndex = 0;
let slideInterval;

const moveRight = () => {
  slideIndex = (slideIndex + 1) % 4;
  updateNav();
  resetInterval();
};

const moveLeft = () => {
  slideIndex = slideIndex - 1;
  if (slideIndex < 0) {
    slideIndex = 3;
  }
  updateNav();
  resetInterval();
};

const updateNav = () => {
  sliderContent.setAttribute('class', '');
  sliderContent.classList.add(`slider-offset-${slideIndex}`);
  // sliderContent.style.left = `-${slideIndex * 320}px`;
  for (const navDot of navDots) {
    navDot.classList.remove("selected");
  }
  navDots[slideIndex].classList.add("selected");
};

const resetInterval = () => {
  clearInterval(slideInterval);
  slideInterval = setInterval(moveRight, 5000);
};

slideInterval = setInterval(moveRight, 5000);
