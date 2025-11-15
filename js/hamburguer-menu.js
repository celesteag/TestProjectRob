const hamburger = document.getElementById("hamburguer");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {

  if (window.innerWidth >= 600 && window.innerWidth < 768) {
    // TABLET/LAPTOP (solo aquí mostramos extras)
    nav.classList.toggle("show-extras");
  }

  if (window.innerWidth < 600) {
    // MOBILE
    nav.classList.toggle("open");
  }

});
