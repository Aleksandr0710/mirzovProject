"use strict";

// упражнение 1

let x = "$100";
let x1 = x.slice(1);
let x2 = Number(x1);

let y = "300$";
let y1 = y.substring(0, y.length - 1);
let y2 = Number(y1);

let summ = x2 + y2;
console.log(summ);

// упражнение 2

let message1 = " привет, медвед     ";
let message2 = message1.trim();
let message3 = message2[0].toUpperCase() + message2.substring(1);
console.log(message3);

// упражнение 3

let old = prompt("сколько вам лет?");

if ((old > 0) & (old <= 3)) {
  let message = `вам ${old} лет и вы младенец`;
  alert(message);
} else if ((old >= 4) & (old <= 11)) {
  let message = `вам ${old} лет и вы ребенок`;
  alert(message);
} else if ((old >= 12) & (old <= 18)) {
  let message = `Вам ${old} лет и вы подросток`;
  alert(message);
} else if ((old >= 19) & (old <= 40)) {
  let message = `вам ${old} лет и вы познаете жизнь`;
  alert(message);
} else if ((old >= 41) & (old <= 80)) {
  let message = `вам ${old} и вы познали жизнь`;
  alert(message);
} else if (old >= 81) {
  let message = `вам ${old} и вы долгожитель`;
  alert(message);
} else {
  let message = "да кто ты такой?";
  alert(message);
}

// упражнение 4

let str = "Я работаю со строками как профессионал!";
let count = str.split(" ");
console.log(count.length);
