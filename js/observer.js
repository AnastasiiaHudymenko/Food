import { refs } from "./refs.js";
import { addClassModal } from "./modal.js";

export const options = {
  root: null,
  rootMargin: "100px",
  threshold: 1.0,
};

export const callback = function (entries, observer) {
  entries.forEach((el) => {
    if (el.isIntersecting) {
      addClassModal("is-open", "hidden");
    }
  });
};

export const target = refs.footer;
