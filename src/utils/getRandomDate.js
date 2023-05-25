export default function randomDate(start, end, startHour, endHour) {
  let date = new Date(+start + Math.random() * (end - start));
  let hour = (startHour + Math.random() * (endHour - startHour)) | 0;
  date.setHours(hour);
  return date;
}
