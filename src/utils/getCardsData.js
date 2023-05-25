const cards = require("../data/cards.json");
const dishwareCards = [];
const careCards = [];
const couchCards = [];

function getCardsData(arr) {
  arr.cards.forEach((el) => {
    if (el.category === "Посуда") {
      dishwareCards.push(el);
    } else if (el.category === "Уход и гигиена") {
      careCards.push(el);
    } else if (el.category === "Лежаки и кровати") {
      couchCards.push(el);
    }
  });
}

getCardsData(cards);

export { dishwareCards, careCards, couchCards };
