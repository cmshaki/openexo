const main = document.querySelector("main");
const menuLines = document.querySelectorAll(".nav-menu .line");
const menuText = document.querySelector(".nav-menu .text");

let top = main.getBoundingClientRect().top;
let windowHeight = window.innerHeight / 2;

if (top < windowHeight) {
  menuText.setAttribute("style", "color: #000");
  menuLines.forEach(item => {
    item.setAttribute("style", "background: #000");
  });
} else {
  menuText.setAttribute("style", "color: #fff");
  menuLines.forEach(item => {
    item.setAttribute("style", "background: #fff");
  });
}

document.addEventListener("scroll", () => {
  top = main.getBoundingClientRect().top;
  windowHeight = window.innerHeight / 2;
  if (top < windowHeight) {
    menuText.setAttribute("style", "color: #000");
    menuLines.forEach(item => {
      item.setAttribute("style", "background: #000");
    });
  } else {
    menuText.setAttribute("style", "color: #fff");
    menuLines.forEach(item => {
      item.setAttribute("style", "background: #fff");
    });
  }
});
