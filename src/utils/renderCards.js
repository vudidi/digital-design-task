import { popupEl } from "./constants";
import randomDate from "./getRandomDate";
import getDayInfo from "./getDayInfo";

// Клонировать шаблон карточки
const cardTemplate = document.querySelector("#tmpl-item").content;

function cloneCardTemplate(item) {
  let date = randomDate(new Date(2022, 0, 1), new Date(), 0, 24);
  console.log(date);
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(
    ".product__title"
  ).textContent = `${item.vendor} ${item.title}`;

  cardElement.querySelector(".product__img").alt = item.title;
  cardElement.querySelector(".product__img").src = item.url;
  cardElement.querySelector(
    ".product__added"
  ).textContent = `Добавлено: ${getDayInfo(date)}`;
  cardElement
    .querySelector(".product__btnBuy")
    .addEventListener("click", () => {
      popupEl.classList.add("popup_opened");
    });

  return cardElement;
}

// Получить шаблон для карточки
export default function receiveCard(item, list) {
  const newCard = cloneCardTemplate(item);
  list.prepend(newCard);
}
