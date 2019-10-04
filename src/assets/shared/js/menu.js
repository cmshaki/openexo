const menu = document.querySelector(".nav-menu");
const menuModal = document.querySelector(".menu-modal");
const mainH1 = document.querySelectorAll("main h1");
const mainDiv = document.querySelectorAll("main div");
const mainSvg = document.querySelectorAll("main svg");
const pageForms = document.querySelectorAll("main form");
const socialMediaSidebar = document.querySelector(".social-media-sidebar");

let clickCount = 1;
menu.addEventListener("click", () => {
  if (clickCount % 2 == 1) {
    menuModal.setAttribute("style", "visibility: visible; opacity: 1");
    if (socialMediaSidebar) {
      socialMediaSidebar.setAttribute(
        "style",
        "visibility: hidden; opacity: 0"
      );
    }
    mainH1.forEach(item => {
      item.setAttribute("style", "visibility: hidden; opacity: 0");
    });
    mainDiv.forEach(item => {
      item.setAttribute("style", "visibility: hidden; opacity: 0");
    });
    mainSvg.forEach(item => {
      item.setAttribute("style", "visibility: hidden; opacity: 0");
    });
    pageForms.forEach(item => {
      item.setAttribute("style", "visibility: hidden; opacity: 0");
    });
  }
  if (clickCount % 2 == 0) {
    menuModal.setAttribute("style", "visibility: hidden; opacity: 0");
    if (socialMediaSidebar) {
      socialMediaSidebar.setAttribute(
        "style",
        "visibility: visible; opacity: 1"
      );
    }
    mainH1.forEach(item => {
      item.setAttribute("style", "visibility: visible; opacity: 1");
    });
    mainDiv.forEach(item => {
      item.setAttribute("style", "visibility: visible; opacity: 1");
    });
    mainSvg.forEach(item => {
      item.setAttribute("style", "visibility: visible; opacity: 1");
    });
    pageForms.forEach(item => {
      item.setAttribute("style", "visibility: visible; opacity: 1");
    });
  }
  clickCount = clickCount + 1;
});
