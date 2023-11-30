var burger = document.querySelector(".menu");
var line1 = document.querySelector(".line-top");
var line2 = document.querySelector(".line-bottom");
var nav = document.querySelector(".nav-burger");

var active = function () {
  line1.classList.toggle("move");
  line2.classList.toggle("move");
  nav.classList.toggle("hidden");
  nav.classList.toggle("visible");
};

burger.addEventListener("click", active);
