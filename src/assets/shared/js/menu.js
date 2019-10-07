const html = document.querySelector("html");
const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const menu = document.querySelector(".nav-menu");
const menuModal = document.querySelector(".menu-modal");
const closeBtn = document.querySelector(".menu-modal > .close");
const listItems = document.querySelectorAll(".menu-modal .list-item-wrapper");
const allLinks = document.querySelector(".menu-modal .all-links");
const documentLink = allLinks.querySelector("#documents");
const homeLink = allLinks.querySelector("#home");
const learnLink = allLinks.querySelector("#learn");
const registerLink = allLinks.querySelector("#register");
const loginLink = allLinks.querySelector("#login");
const menuText = document.querySelector(".nav-menu .text");
const menuLines = document.querySelectorAll(".nav-menu .line");
const mainCols = document.querySelectorAll("main .row > div");
const section = document.querySelector("section");
const documentLinksBody = document.querySelector(".menu-modal .document-links");
const backNav = document.querySelector(
  ".menu-modal .document-links button:nth-child(2)"
);
const closeNav = document.querySelector(
  ".menu-modal .document-links button:nth-child(3)"
);

closeBtn.addEventListener("click", () => {
  menuModal.setAttribute("style", "visibility: hidden; opacity: 0; width: 0");
  menu.setAttribute("style", "visibility: visible; opacity: 1");
  body.setAttribute("style", "overflow: auto");
  html.setAttribute("style", "overflow: auto");
});

menu.addEventListener("click", () => {
  menuModal.setAttribute(
    "style",
    "visibility: visible; opacity: 1; width: 100%"
  );
  menu.setAttribute("style", "visibility: hidden; opacity: 0");
  body.setAttribute("style", "overflow: hidden");
  html.setAttribute("style", "overflow: hidden");
});

let testReg;
listItems.forEach(item => {
  testReg = /documents/g.test(item.text);
  if (!testReg) {
    item.addEventListener("click", () => {
      menuModal.setAttribute(
        "style",
        "visibility: hidden; opacity: 0; width: 0"
      );
      menu.setAttribute("style", "visibility: visible; opacity: 1");
      body.setAttribute("style", "overflow: auto");
      html.setAttribute("style", "overflow: auto");
    });
  }
});

documentLink.addEventListener("click", () => {
  documentLinksBody.setAttribute("style", "display: block");
  allLinks.setAttribute("style", "display: none");
  closeBtn.setAttribute("style", "visibility: hidden; opacity: 0");
});

backNav.addEventListener("click", () => {
  documentLinksBody.setAttribute("style", "display: none");
  allLinks.setAttribute("style", "display: block");
  closeBtn.setAttribute("style", "visibility: visible; opacity: 1");
});

closeNav.addEventListener("click", () => {
  menuModal.setAttribute("style", "visibility: hidden; opacity: 0; width: 0");
  menu.setAttribute("style", "visibility: visible; opacity: 1");
  body.setAttribute("style", "overflow: auto");
  html.setAttribute("style", "overflow: auto");
  allLinks.setAttribute("style", "display: block");
  documentLinksBody.setAttribute("style", "display: none");
  closeBtn.setAttribute("style", "visibility: visible; opacity: 1");
});

// Home Link
homeLink.addEventListener("click", () => {
  body.setAttribute("style", "overflow: auto");
  html.setAttribute("style", "overflow: auto");
  menuModal.setAttribute("style", "visibility: hidden; opacity: 0; width: 0");
  menu.setAttribute("style", "visibility: visible; opacity: 1");
  header.setAttribute("style", "visibility: visible; opacity: 1");
  main.setAttribute("style", "display: none");
  mainCols[0].setAttribute("style", "display: none");
  mainCols[1].setAttribute("style", "display: none");
  section.setAttribute("style", "display: none");
  menuText.setAttribute("style", "color: #fff");
  menuLines.forEach(item => {
    item.setAttribute("style", "background: #fff");
  });
});

// Learn Link
learnLink.addEventListener("click", () => {
  body.setAttribute("style", "overflow: auto");
  html.setAttribute("style", "overflow: auto");
  menuModal.setAttribute("style", "visibility: hidden; opacity: 0; width: 0");
  menu.setAttribute("style", "visibility: visible; opacity: 1");
  header.setAttribute("style", "visibility: hidden; opacity: 0");
  main.setAttribute("style", "display: block");
  if (window.innerWidth < 992) {
    mainCols[0].setAttribute("style", "display: block");
    mainCols[1].setAttribute("style", "display: none");
  } else {
    mainCols[0].setAttribute("style", "display: block");
    mainCols[1].setAttribute("style", "display: block");
  }
  section.setAttribute("style", "display: none");
  menuText.setAttribute("style", "color: #000");
  menuLines.forEach(item => {
    item.setAttribute("style", "background: #000");
  });
});

// Register Link
registerLink.addEventListener("click", () => {
  body.setAttribute("style", "overflow: auto");
  html.setAttribute("style", "overflow: auto");
  menuModal.setAttribute("style", "visibility: hidden; opacity: 0; width: 0");
  menu.setAttribute("style", "visibility: visible; opacity: 1");
  header.setAttribute("style", "visibility: hidden; opacity: 0");
  main.setAttribute("style", "display: none");
  mainCols[0].setAttribute("style", "display: none");
  mainCols[1].setAttribute("style", "display: none");
  section.setAttribute("style", "display: block");
  menuText.setAttribute("style", "color: #000");
  menuLines.forEach(item => {
    item.setAttribute("style", "background: #000");
  });
});

// Login Link
loginLink.addEventListener("click", () => {
  body.setAttribute("style", "overflow: auto");
  html.setAttribute("style", "overflow: auto");
  menuModal.setAttribute("style", "visibility: hidden; opacity: 0; width: 0");
  menu.setAttribute("style", "visibility: visible; opacity: 1");
  header.setAttribute("style", "visibility: hidden; opacity: 0");
  main.setAttribute("style", "display: none");
  mainCols[0].setAttribute("style", "display: none");
  mainCols[1].setAttribute("style", "display: none");
  section.setAttribute("style", "display: block");
  menuText.setAttribute("style", "color: #000");
  menuLines.forEach(item => {
    item.setAttribute("style", "background: #000");
  });
});
