import {
  modeBtn,
  bodyEl,
  headerEl,
  footerEl,
  categoryTitles,
  productLinks,
} from "./constants";

export default function toggleMode() {
  modeBtn.classList.toggle("header__modeBtn_type_dark");
  modeBtn.classList.toggle("header__modeBtn_type_light");
  modeBtn.classList.toggle("theme-dark");
  headerEl.classList.toggle("theme-dark");
  footerEl.classList.toggle("theme-dark");
  if (!bodyEl.hasAttribute("id")) {
    bodyEl.setAttribute("id", "theme-dark");
  } else {
    bodyEl.removeAttribute("id");
  }

  categoryTitles.forEach((el) => {
    el.classList.toggle("theme-dark");
  });

  document.querySelectorAll(".product").forEach((el) => {
    el.classList.toggle("theme-dark");
  });

  productLinks.forEach((el) => {
    el.classList.toggle("theme-dark");
  });
}
