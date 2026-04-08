const hamburger = document.getElementById("tulaHamburger");
const nav = document.querySelector(".tula-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});