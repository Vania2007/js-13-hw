let days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
let times = [
  "08.30-9.15",
  "9.25-10.10",
  "10.20-11.05",
  "11.20-12.05",
  "12.20-13.05",
  "13.15-14.00",
  "14.10-14.55",
  "15.05-15.50",
];
let timetable = [
  ["Укр м", "Громадянська освіта", "Біологія", "Технології", "Укр. м.", "", ""],
  ["ЗУ", "Алгебра", "Фізика", "Укр. літ.", "Технології / ЗУ", "", ""],
  ["Алгебра", "Фізика", "Історія України", "Фізика", "Алгебра", "", ""],
  ["Біологія", "Географія", "Англ. м.", "Алгебра", "Англ. м.", "", ""],
  [
    "Всесвітня історія",
    "Інформатика",
    "Укр. м.",
    "Інформатика / історія України",
    "Геометрія",
    "",
    "",
  ],
  ["Геометрія", "Укр. літ.", "Алгебра", "Ф-ра", "Географія / Хімія", "", ""],
  ["Зар. літ.", "Ф-ра", "Хімія", "Геометрія", "Громадянська освіта", "", ""],
  ["Ф-ра", "", "", "", "", "", ""],
];

let today = new Date().getDay();
if (today === 0) {
  today = 7;
}
let classOfToday = "notToday";
document.write("<table border=1><tr><td>Time</td>");
for (let i = 0; i < days.length; i++) {
  if (i === today - 1) {
    classOfToday = "today";
    document.write(`<td class="${classOfToday}">${days[i]}</td>`);
  } else {
    classOfToday = "notToday";
    document.write(`<td class="${classOfToday}">${days[i]}</td>`);
  }
}
document.write("</tr>");

for (let i = 0; i < timetable.length; i++) {
  document.write("<tr>");
  document.write(`<td>${times[i]}</td>`);
  for (let j = 0; j < timetable[i].length; j++) {
    if (j === today - 1) {
      classOfToday = "today";
      document.write(`<td class="${classOfToday}">${timetable[i][j]}</td>`);
    } else {
      classOfToday = "notToday";
      document.write(`<td class="${classOfToday}">${timetable[i][j]}</td>`);
    }
  }
  document.write("</tr>");
}
document.write("</table>");
function printTimetable() {
  document.getElementById("printBtn").style.display = "none";
  window.print();
}
