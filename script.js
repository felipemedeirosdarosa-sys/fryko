
// FRYKO - SCRIPT PRINCIPAL

// MENU MOBILE
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// FECHAR MENU AO CLICAR EM UM LINK
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// ANO AUTOMÁTICO NO RODAPÉ
document.getElementById("year").textContent =
    new Date().getFullYear();

// WHATSAPP
// WHATSAPP
const WHATSAPP_NUMBER = "5551991418998";

const message = encodeURIComponent(
    "Olá! Conheci a FRYKO pelo site e gostaria de conversar sobre um projeto."
);

const whatsappLinks = document.querySelectorAll(".whatsapp-link");

whatsappLinks.forEach(link => {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
});