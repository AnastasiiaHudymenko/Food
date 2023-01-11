import { refs } from "./refs.js";

export function hideDivTabsContent() {
  refs.divsTabContent.forEach((tab) => {
    tab.classList.add("hide");
    tab.classList.remove("show");
  });
  refs.divTabs.forEach((tab) => {
    tab.classList.remove("tabheader__item_active");
  });
}

export function showDivTabsContent(i = 0) {
  refs.divsTabContent[i].classList.add("show");
  refs.divsTabContent[i].classList.remove("hide");
  refs.divTabs[i].classList.add("tabheader__item_active");
}

export function onClickTabs({ target }) {
  if (target.classList.contains("tabheader__item")) {
    refs.divTabs.forEach((el, i) => {
      if (el === target) {
        hideDivTabsContent();
        showDivTabsContent(i);
      }
    });
  } else {
    return;
  }
}
