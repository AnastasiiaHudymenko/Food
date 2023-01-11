import { refs } from "./refs.js";

export function closeModal() {
  refs.btnCloseModal.addEventListener("click", () => {
    removeClassModal("is-open", "");
  });
  refs.modal.addEventListener("click", (evt) => {
    if (evt.target === refs.modal) {
      removeClassModal("is-open", "");
    }
  });
}
export function removeClassModal(className, str) {
  refs.modal.classList.remove(className);
  document.body.style.overflow = str;
}
export function addClassModal(className, str) {
  refs.modal.classList.add(className);
  document.body.style.overflow = str;
}
