const header = document.querySelector("header");
const main = document.querySelector("main");
const section = document.querySelector("section");
const html = document.querySelector("html");

// Variables to be Used
let count = 0;
let timer;
let scrollTimer;
let lastPos;

window.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, window.innerHeight / 2);
  lastPos = window.scrollY;
});

const downScrollHandler = () => {
  if (count > 1) {
    if (
      getComputedStyle(header).getPropertyValue("opacity") != 0 &&
      getComputedStyle(main).getPropertyValue("display") == "none"
    ) {
      header.setAttribute(
        "style",
        "animation: scroll-out-above 0.2s ease-in forwards"
      );
      main.setAttribute("style", "display: flex");
      window.scrollTo(0, window.innerHeight / 2);
    } else if (
      getComputedStyle(main).getPropertyValue("display") != "none" &&
      getComputedStyle(header).getPropertyValue("opacity") == 0
    ) {
      main.setAttribute(
        "style",
        "animation: scroll-out-above 0.2s ease-in forwards"
      );
      section.setAttribute("style", "display: flex; width: 100%");
      window.scrollTo(0, window.innerHeight / 2);
    } else {
      lastPos = window.scrollY;
    }
  }
};

const upScrollHandler = () => {
  if (count > 1) {
    if (
      getComputedStyle(header).getPropertyValue("opacity") == 0 &&
      getComputedStyle(main).getPropertyValue("display") != "none"
    ) {
      header.setAttribute("style", "visibility: visible; opacity: 1");
      main.setAttribute("style", "display: none");
      window.scrollTo(0, window.innerHeight / 2);
      lastPos = window.scrollY;
    } else if (
      getComputedStyle(main).getPropertyValue("display") == "none" &&
      getComputedStyle(header).getPropertyValue("opacity") == 0
    ) {
      section.setAttribute("style", "disply: none");
      main.setAttribute("style", "display: flex");
      window.scrollTo(0, window.innerHeight / 2);
      lastPos = window.scrollY;
    } else {
      lastPos = window.scrollY;
    }
  }
};

window.addEventListener("scroll", () => {
  if (count < 2) {
    count++;
  }
  if (timer) {
    window.clearTimeout(timer);
  }
  if (scrollTimer) {
    window.clearTimeout(scrollTimer);
  }
  if (window.scrollY > lastPos) {
    timer = window.setTimeout(downScrollHandler, 200);
  }
  if (window.scrollY < lastPos) {
    timer = window.setTimeout(upScrollHandler, 200);
  }
});
