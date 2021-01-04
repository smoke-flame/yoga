"use strict"

//              burger-menu
let menuOpen = document.querySelector(".menu__img"),
    menu = document.querySelector(".menu__item"),
    menuClose = document.querySelector(".burger-menu__close");

menuOpen.addEventListener("click", function () {
    menu.classList.add("active");
});

menuClose.addEventListener("click", function () {
    menu.classList.remove("active");
});

//                    slider

let position = 0;
const sliderToShow = 4;
const sliderToScroll = 1;
const container = document.querySelector(".train__after");
const track = document.querySelector(".classes__train__carusel");
const items = document.querySelectorAll(".classes__train__item");
const btnPrev = document.querySelector(".btnprev");
const btnNext = document.querySelector(".btnpnext");
const itemWidth = container.clientWidth / sliderToShow;
const itemCount = items.length;
const movePosition = sliderToScroll * itemWidth;


items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnPrev.addEventListener("click", function () {
    position = position + movePosition;
    track.style.transform = `translateX(${position}px)`;

})

btnNext.addEventListener("click", function () {
    position = position - movePosition;
    track.style.transform = `translateX(${position}px)`;
    console.log(position)

})