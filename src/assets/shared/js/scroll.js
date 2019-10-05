const main = document.querySelector("main");
const mainFirstCol = document.querySelector("main .row .col-md-12:first-child");
const mainSecondCol = document.querySelector("main .row .col-md-12:last-child");
const body = document.querySelector("body");
const html = document.querySelector("html");
const header = document.querySelector("header");
const section = document.querySelector("section");
const menu = document.querySelector(".nav-menu");
const menuLines = document.querySelectorAll(".nav-menu .line");
const menuText = document.querySelector(".nav-menu .text");

let windowHeight = window.innerHeight / 2;

if ((html.scrollTop || body.scrollTop) > menu.offsetTop) {
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
  if ((html.scrollTop || body.scrollTop) > menu.offsetTop) {
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
      mainFirstCol.offsetTop == mainSecondCol.offsetTop ||
      (html.scrollTop > header.offsetTop + window.innerHeight / 4 &&
        html.scrollTop < mainFirstCol.offsetTop - window.innerHeight / 2)
    ) {
      window.scrollTo(0, main.offsetTop);
    } else if (
      html.scrollTop > mainFirstCol.offsetTop + window.innerHeight / 4 &&
      html.scrollTop < mainSecondCol.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, mainSecondCol.offsetTop);
    }
    if (
      html.scrollTop > mainSecondCol.offsetTop + window.innerHeight / 4 &&
      html.scrollTop < section.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, section.offsetTop);
    }
    // Up Sroll
    if (
      mainFirstCol.offsetTop == mainSecondCol.offsetTop ||
      (html.scrollTop < mainFirstCol.offsetTop - window.innerHeight / 4 &&
        html.scrollTop > mainFirstCol.offsetTop - window.innerHeight / 2)
    ) {
      window.scrollTo(1, 0);
    } else if (
      html.scrollTop > mainSecondCol.offsetTop + window.innerHeight / 4 &&
      html.scrollTop < mainSecondCol.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, mainFirstCol.offsetTop);
    }
    if (
      html.scrollTop < section.offsetTop - window.innerHeight / 4 &&
      html.scrollTop > section.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, mainSecondCol.offsetTop);
    }
  }

  if (body.scrollTop > 0) {
    // Down Scroll
    if (
      body.scrollTop > header.offsetTop + window.innerHeight / 4 &&
      body.scrollTop < main.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, main.offsetTop);
    }
    if (
      body.scrollTop > main.offsetTop + window.innerHeight / 4 &&
      body.scrollTop < section.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, section.offsetTop);
    }
    // Up Sroll
    if (
      body.scrollTop < main.offsetTop - window.innerHeight / 4 &&
      body.scrollTop > main.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, header.offsetTop);
    }
    if (
      body.scrollTop < section.offsetTop - window.innerHeight / 4 &&
      body.scrollTop > section.offsetTop - window.innerHeight / 2
    ) {
      window.scrollTo(0, main.offsetTop);
    }
  }
});
