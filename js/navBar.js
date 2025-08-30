// Selecciona la barra de navegación
const navbar = document.getElementById("mainNavbar");
const navBrandText = document.getElementById("nav-name");
const navLinks = document.querySelectorAll(".nav-link");
const cvBtn = document.querySelector(".btn-cv");

// Función para cambiar los estilos al hacer scroll
function handleScroll() {
  if (window.scrollY > 50) {
    // Añade la clase 'scrolled' cuando el usuario se desplaza
    navbar.classList.add("scrolled");
    navBrandText.classList.add("scrolled-text");
    cvBtn.classList.add("scrolled-btn");
    navLinks.forEach((link) => link.classList.add("scrolled-text"));
  } else {
    // Elimina la clase si el usuario regresa al inicio
    navbar.classList.remove("scrolled");
    navBrandText.classList.remove("scrolled-text");
    cvBtn.classList.remove("scrolled-btn");
    navLinks.forEach((link) => link.classList.remove("scrolled-text"));
  }
}

// Agrega el 'event listener' al objeto window para detectar el scroll
window.addEventListener("scroll", handleScroll);
