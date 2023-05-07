const icon = document.querySelector(".menuIcon");
const ulList = document.querySelector("header ul");
const bcgOverlay = document.querySelector(".backgroundOverlay");

let menuState = false;

icon.addEventListener("click", function () {
  if (menuState == false) {
    ulList.classList.add("display", "ulAnim");
    bcgOverlay.classList.add("display", "bcgOverlayAnim");
    ulList.classList.remove("ulAnimReverse");
    bcgOverlay.classList.remove("bcgOverlayAnimReverse");
    icon.src = "assets/images/icon-menu-close.svg";

    menuState = true;
  } else {
    ulList.classList.remove("display", "ulAnim");
    bcgOverlay.classList.remove("display", "bcgOverlayAnim");
    ulList.classList.add("ulAnimReverse");
    bcgOverlay.classList.add("bcgOverlayAnimReverse");
    icon.src = "assets/images/icon-menu.svg";

    menuState = false;
    setTimeout(function () {
      ulList.classList.remove("display", "ulAnim", "ulAnimReverse");
      bcgOverlay.classList.remove("display", "bcgOverlayAnimReverse");
    }, 1000);
  }
});
