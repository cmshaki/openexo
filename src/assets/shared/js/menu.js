const html = document.querySelector("html");
const body = document.querySelector("body");
const menu = document.querySelector(".nav-menu");
const menuModal = document.querySelector(".menu-modal");
const closeBtn = document.querySelector(".menu-modal > .close");
const listItems = document.querySelectorAll(".menu-modal .list-item-wrapper");
const documentLink = document.querySelector(".menu-modal .documents");
const allLinks = document.querySelector(".menu-modal .all-links");
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
