"use strict";

// упражнение 1

let x = "100px";
let y = "323px";

let result = parseInt(x) + parseInt(y);
console.log(result);

// упражнение  2

console.log(Math.max(10, -45, 102, 36, 12, 0, -1));

// упражнение 3

let q = 123.3399;
console.log(Math.floor(q));

let j = 0.111;
console.log(Math.ceil(j));

let i = 45.333333;
console.log(i.toFixed(1));

let f = 3;
console.log(Math.pow(f, 5));

let g = "4e14";
console.log(g);

let h = 1 === 1;
console.log(h);

// упражнение 4\

0.1 + 0.2 === 0.3; // Вернёт false, почему?

// тк 0.1 + 0.2 будет 0.30000000000000004, а не 0.3 и поэтому они не равны.
// правильно будет использовать округление результата используя метод toFixed
