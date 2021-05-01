const tabAreas = document.querySelectorAll(".tab-areas");
const tabsWrapper = document.querySelector(".tabs-wrapper");
const tabContents = document.querySelectorAll(".tab-contents");

const init = () => {
  tabsWrapper.addEventListener("click", (ev) => {
    for (let i = 0; i < tabAreas.length; i++) {
      tabAreas[i].classList.remove("current-tab");
      tabContents[i].classList.remove("current-tab-content");
    }

    if (ev.target.className === "tab-areas tabs-1") {
      ev.target.classList.add("current-tab");
      tabContents[0].classList.add("current-tab-content");
    }
    if (ev.target.className === "tab-areas tabs-2") {
      ev.target.classList.add("current-tab");
      tabContents[1].classList.add("current-tab-content");
    }
    if (ev.target.className === "tab-areas tabs-3") {
      ev.target.classList.add("current-tab");
      tabContents[2].classList.add("current-tab-content");
    }
  });
};

document.addEventListener("DOMContenLoaded", init());
