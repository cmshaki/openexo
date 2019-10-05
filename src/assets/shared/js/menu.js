const menu = document.querySelector(".nav-menu");
const menuModal = document.querySelector(".menu-modal");
const closeBtn = document.querySelector(".menu-modal .close");
const listItems = document.querySelectorAll(".menu-modal .list-item-wrapper");

closeBtn.addEventListener("click", () => {
  menuModal.setAttribute("style", "visibility: hidden; opacity: 0");
  menu.setAttribute("style", "visibility: visible; opacity: 1");
});

menu.addEventListener("click", () => {
  menuModal.setAttribute("style", "visibility: visible; opacity: 1");
  menu.setAttribute("style", "visibility: hidden; opacity: 0");
});

listItems.forEach(item => {
  item.addEventListener("click", () => {
    menuModal.setAttribute("style", "visibility: hidden; opacity: 0");
    menu.setAttribute("style", "visibility: visible; opacity: 1");
  });
});
