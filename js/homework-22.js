"use strict";

// упражнение 1
let Array = [1, 2, "w", 3, 4, 5, 6676, "sed"];

function getSumm(array) {
  let sum = 0;
  for (let item of array) {
    if (Number.isInteger(item)) {
      sum = sum + item;
    } else {
      continue;
    }
  }
  return sum;
}

console.log(getSumm(Array));

// упражнение 2

// <script src="./js/data.js"></script>;

// упражнение 3

let cart = [6666, 3254, 5555, 4326];

function addCart(id) {
  if (cart.includes(id)) {
    return cart;
  } else {
    cart.push(id);
  }
  return cart;
}
addCart(4545);

function delCart(id) {
  let newCart = cart.filter(el => el !== id);
  return newCart;
}
console.log(delCart(6666));
