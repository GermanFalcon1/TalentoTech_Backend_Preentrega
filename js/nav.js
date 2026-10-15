// Abre y cierra el menú en pantallas chicas
const boton = document.querySelector(".nav-toggle");
const menu = document.querySelector("#main-navigation");

boton.addEventListener("click", () => {
  const abierto = menu.classList.toggle("nav--abierto");
  boton.setAttribute("aria-expanded", abierto);
});
