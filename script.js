// Redes footer
const menu=document.querySelector(".menu");
const toggle=document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
  menu.classList.toggle("active");
})
// Menu hamburguesa
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});