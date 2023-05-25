const daysOfWeek = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

const weeksCount = ["1", "2", "3", "4", "5"];

export default function getDayInfo(date) {
  return `${daysOfWeek[date.getDay()]},
  ${weeksCount[Math.floor(date.getDate() / 7)]} неделя
  ${months[date.getMonth()]}
  ${date.getFullYear()} года`;
}
