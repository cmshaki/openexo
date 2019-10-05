const main = document.querySelector("main");
const body = document.querySelector("body");
const html = document.querySelector("html");
const header = document.querySelector("header");
const section = document.querySelector("section");
const menu = document.querySelector(".nav-menu");
const menuLines = document.querySelectorAll(".nav-menu .line");
const menuText = document.querySelector(".nav-menu .text");

let top = main.getBoundingClientRect().top;
let windowHeight = window.innerHeight / 2;
let headerTop = header.getBoundingClientRect().top;
let mainTop = main.getBoundingClientRect().top;
let sectionTop = section.getBoundingClientRect().top;
let currentScroll = body.scrollTop || html.scrollTop;

console.log(currentScroll);
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

  // Scroll Effects
  if (html.scrollTop > 0) {
    // Down Scroll
    if (
      html.scrollTop > header.offsetTop &&
      html.scrollTop < main.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, main.offsetTop);
    }
    if (
      html.scrollTop > main.offsetTop &&
      html.scrollTop < section.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, section.offsetTop);
    }
    // Up Sroll
    if (
      html.scrollTop < main.offsetTop &&
      html.scrollTop > main.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, header.offsetTop);
    }
    if (
      html.scrollTop < section.offsetTop &&
      html.scrollTop > section.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, main.offsetTop);
    }
  }
  if (body.scrollTop > 0) {
    // Down Scroll
    if (
      body.scrollTop > header.offsetTop &&
      body.scrollTop < main.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, main.offsetTop);
    }
    if (
      body.scrollTop > main.offsetTop &&
      body.scrollTop < section.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, section.offsetTop);
    }
    // Up Sroll
    if (
      body.scrollTop < main.offsetTop &&
      body.scrollTop > main.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, header.offsetTop);
    }
    if (
      body.scrollTop < section.offsetTop &&
      body.scrollTop > section.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, main.offsetTop);
    }
  }
});
