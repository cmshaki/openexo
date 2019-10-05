const html = document.querySelector("html");
const body = document.querySelector("body");
const menu = document.querySelector(".nav-menu");
const menuModal = document.querySelector(".menu-modal");
const closeBtn = document.querySelector(".menu-modal .close");
const listItems = document.querySelectorAll(".menu-modal .list-item-wrapper");

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

listItems.forEach(item => {
  item.addEventListener("click", () => {
    menuModal.setAttribute("style", "visibility: hidden; opacity: 0; width: 0");
    menu.setAttribute("style", "visibility: visible; opacity: 1");
    body.setAttribute("style", "overflow: auto");
    html.setAttribute("style", "overflow: auto");
  });
});
