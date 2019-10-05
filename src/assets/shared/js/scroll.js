const main = document.querySelector("main");
const menu = document.querySelector(".nav-menu");
const menuLines = document.querySelectorAll(".nav-menu .line");
const menuText = document.querySelector(".nav-menu .text");

let top = main.getBoundingClientRect().top;
let windowHeight = window.innerHeight / 2;

if (top < windowHeight) {
  if (
    !menuText.style.color ||
    menuText.style.color == "#ffffff" ||
    menuText.style.color == "rgb(255, 255, 255)"
  ) {
    menuText.setAttribute("style", "color: #000");
    menuLines.forEach(item => {
      item.setAttribute("style", "background: #000");
    });
  }
} else {
  if (
    menuText.style.color == "#000000" ||
    menuText.style.color == "rgb(0, 0, 0)"
  ) {
    menuText.setAttribute("style", "color: #ffffff");
    menuLines.forEach(item => {
      item.setAttribute("style", "background: #ffffff");
    });
  }
}

document.addEventListener("scroll", () => {
  top = main.getBoundingClientRect().top;
  windowHeight = window.innerHeight / 2;
  if (top < windowHeight) {
    if (
      !menuText.style.color ||
      menuText.style.color == "#ffffff" ||
      menuText.style.color == "rgb(255, 255, 255)"
    ) {
      menuText.setAttribute("style", "color: #000000");
      menuLines.forEach(item => {
        item.setAttribute("style", "background: #000000");
      });
    }
  } else {
    if (
      menuText.style.color == "#000000" ||
      menuText.style.color == "rgb(0, 0, 0)"
    ) {
      menuText.setAttribute("style", "color: #ffffff");
      menuLines.forEach(item => {
        item.setAttribute("style", "background: #ffffff");
      });
    }
  }
});
