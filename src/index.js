import "./index.html";
import "./styles/css/styles.css";
import { scrollFunction, topFunction } from "./utils/scrollToTop";
import toggleMode from "./utils/toggleMode";
import {
  toTopButton,
  modeBtn,
  popupEl,
  popupCloseBtn,
  form,
  snackbarEl,
  dishwareList,
  careList,
  couchList,
} from "./utils/constants";
import { dishwareCards, careCards, couchCards } from "./utils/getCardsData";
import receiveCard from "./utils/renderCards";

window.addEventListener("scroll", () => {
  scrollFunction();
});

toTopButton.addEventListener("click", () => {
  topFunction();
});

modeBtn.addEventListener("click", () => {
  toggleMode();
});

function closePopup() {
  popupEl.classList.remove("popup_opened");
  form.reset();
}

popupEl.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closePopup();
    e.preventDefault();
  }
});

popupCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closePopup();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  snackbarEl.style.display = "block";
  closePopup();
  setTimeout(() => {
    snackbarEl.style.display = "none";
  }, 1000);
});

// Отрисовать карточеки

dishwareCards.reverse().forEach((el) => {
  receiveCard(el, dishwareList);
});
careCards.reverse().forEach((el) => {
  receiveCard(el, careList);
});
couchCards.reverse().forEach((el) => {
  receiveCard(el, couchList);
});
