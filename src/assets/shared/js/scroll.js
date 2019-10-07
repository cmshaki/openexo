const header = document.querySelector("header");
const main = document.querySelector("main");
const menuText = document.querySelector(".nav-menu .text");
const menuLines = document.querySelectorAll(".nav-menu .line");
const mainCols = document.querySelectorAll("main .row > div");
const section = document.querySelector("section");

// Variables to be Used
let count = 0;
let timer;
let resizeTimer;
let resizeTimer2;
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
      main.setAttribute("style", "display: block");
      if (window.innerWidth > 992) {
        mainCols[0].setAttribute("style", "display: block");
        mainCols[1].setAttribute("style", "display: block");
        menuText.setAttribute("style", "color: #000000");
        menuLines.forEach(item => {
          item.setAttribute("style", "background: #000000");
        });
      } else {
        mainCols[0].setAttribute("style", "display: block");
        menuText.setAttribute("style", "color: #000000");
        menuLines.forEach(item => {
          item.setAttribute("style", "background: #000000");
        });
      }
      window.scrollTo(0, window.innerHeight / 2);
      lastPos = window.scrollY;
    } else if (
      getComputedStyle(main).getPropertyValue("display") == "block" &&
      getComputedStyle(mainCols[0]).getPropertyValue("display") != "none" &&
      getComputedStyle(mainCols[1]).getPropertyValue("display") == "none"
    ) {
      mainCols[0].setAttribute("style", "display: none");
      mainCols[1].setAttribute("style", "display: block");
      window.scrollTo(0, window.innerHeight / 2);
      lastPos = window.scrollY;
    } else if (
      getComputedStyle(main).getPropertyValue("display") != "none" &&
      getComputedStyle(header).getPropertyValue("opacity") == 0
    ) {
      mainCols[0].setAttribute("style", "display: none");
      mainCols[1].setAttribute("style", "display: none");
      main.setAttribute("style", "display: none");
      section.setAttribute("style", "display: block");
      window.scrollTo(0, window.innerHeight / 2);
      lastPos = window.scrollY;
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
      if (window.innerWidth > 991) {
        mainCols[0].setAttribute("style", "display: none");
        mainCols[1].setAttribute("style", "display: none");
        main.setAttribute("style", "display: none");
        menuText.setAttribute("style", "color: #ffffff");
        menuLines.forEach(item => {
          item.setAttribute("style", "background: #ffffff");
        });
        header.setAttribute("style", "visibility: visible; opacity: 1");
      } else {
        if (
          getComputedStyle(mainCols[1]).getPropertyValue("display") != "none"
        ) {
          mainCols[0].setAttribute("style", "display: block");
          mainCols[1].setAttribute("style", "display: none");
        } else {
          mainCols[0].setAttribute("style", "display: none");
          mainCols[1].setAttribute("style", "display: none");
          main.setAttribute("style", "display: none");
          menuText.setAttribute("style", "color: #ffffff");
          menuLines.forEach(item => {
            item.setAttribute("style", "background: #ffffff");
          });
          header.setAttribute("style", "visibility: visible; opacity: 1");
        }
      }
      window.scrollTo(0, window.innerHeight / 2);
      lastPos = window.scrollY;
    } else if (
      getComputedStyle(main).getPropertyValue("display") == "none" &&
      getComputedStyle(header).getPropertyValue("opacity") == 0
    ) {
      section.setAttribute("style", "disply: none");
      main.setAttribute("style", "display: block");
      if (window.innerWidth < 992) {
        mainCols[1].setAttribute("style", "display: block");
      } else {
        mainCols[0].setAttribute("style", "display: block");
        mainCols[1].setAttribute("style", "display: block");
      }
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
  if (window.scrollY > lastPos) {
    timer = window.setTimeout(downScrollHandler, 200);
  }
  if (window.scrollY < lastPos) {
    timer = window.setTimeout(upScrollHandler, 200);
  }
});

window.addEventListener("resize", () => {
  if (resizeTimer) {
    window.clearTimeout(resizeTimer);
  }
  if (window.innerWidth >= 992) {
    if (getComputedStyle(main).getPropertyValue("display") != "none") {
      if (getComputedStyle(mainCols[0]).getPropertyValue("display") == "none") {
        resizeTimer = window.setTimeout(() => {
          mainCols[0].setAttribute("style", "display: block");
        }, 200);
      }
      if (getComputedStyle(mainCols[1]).getPropertyValue("display") == "none") {
        resizeTimer = window.setTimeout(() => {
          mainCols[1].setAttribute("style", "display: block");
        }, 200);
      }
    }
  } else if (window.innerWidth < 992) {
    if (getComputedStyle(main).getPropertyValue("display") != "none") {
      if (
        getComputedStyle(mainCols[0]).getPropertyValue("display") != "none" &&
        getComputedStyle(mainCols[1]).getPropertyValue("display") != "none"
      ) {
        resizeTimer = window.setTimeout(() => {
          mainCols[0].setAttribute("style", "display: none");
          mainCols[1].setAttribute("style", "display: block");
        }, 200);
      }
    }
  }
});
