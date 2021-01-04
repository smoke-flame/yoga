"use strict"

let menuOpen = document.querySelector(".menu__img"),
    menu = document.querySelector(".menu__item"),
    menuClose = document.querySelector(".burger-menu__close");

menuOpen.addEventListener("click", function () {
    menu.classList.add("active");
});

menuClose.addEventListener("click", function () {
    menu.classList.remove("active");
});