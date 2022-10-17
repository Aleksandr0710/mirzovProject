"use strict";

// упражнение 1

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// упражнение 2

let n = 0;
let count = 0;
while (n <= 3) {
  n++;
  let userCount = +prompt("напиши число");
  debugger;
  if (isNaN(userCount)) {
    alert("перечитай вопрос");
    break;
  }
  count = count + userCount;
}
alert("Сумма: " + count);

// упражнение 3

function getNameOfMonth(month) {
  switch (month) {
    case 0:
      return "Январь";
    case 1:
      return "февраль";
    case 2:
      return "март";
    case 3:
      return "апрель";
    case 4:
      return "май";
    case 5:
      return "июнь";
    case 6:
      return "июль";
    case 7:
      return "август";
    case 8:
      return "сентябрь";
    case 9:
      return "октябрь";
    case 10:
      return "ноябрь";
    case 11:
      return "декабрь";
  }
}

let monthString = "";
for (let i = 0; i <= 11; i++) {
  let m = getNameOfMonth(i);
  if (i === 9) {
    continue;
  }
  monthString = monthString + " " + m;
}
console.log(monthString);

// упражнение 4

// Что такое IIFE?

// Immediately invoked function expression - немедленно вызываемое функциональное выражение,
// // функция, которая выполняется сразу же после того, как она была определена.

// пример

// let result = (function () {
//   let name = "еее";
//   return name;
// })();
// console.log(result);
