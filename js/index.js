import { refs } from "./refs.js";
import {
  hideDivTabsContent,
  showDivTabsContent,
  onClickTabs,
} from "./tabsMenu.js";
import { deadline, getTimeRemaning } from "./promoTimer.js";
import { options, callback, target } from "./observer.js";
import { closeModal, addClassModal } from "./modal.js";

hideDivTabsContent();
showDivTabsContent();

refs.divTab.addEventListener("click", onClickTabs);

// TIME

getTimeRemaning(deadline);

// MODAL
const observer = new IntersectionObserver(callback, options);
observer.observe(target);

refs.btnOpenModal.forEach((btn) => {
  if (!btn.classList.contains("btn_min")) {
    btn.addEventListener("click", () => {
      addClassModal("is-open", "hidden");
      closeModal();
      clearTimeout(timerId);
    });
  } else {
    return;
  }
});

const timerId = setTimeout(() => {
  addClassModal("is-open", "hidden");
  closeModal();
}, 5000);
