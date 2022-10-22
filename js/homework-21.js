"use strict";
// упражнение 1

let user = {};

function isEmpty(obj) {
  if (obj) {
    let values = Object.values(obj);
    if (!values.length) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isEmpty(user));

// упражнение 2

// <script src="./js/data.js"></script>

// упражнение 3

let salaries = {
  John: 100000,
  Ann: 160000,
  Pete: 130000,
  sasha: 1000000000909.324,
};

/**
 * Возвращает newSalaries с зарплатами, повышениые  на определенный
percent и складывает новые зарплаты всех сотрудников (summ)
 *
 * @param {number} percent определенный процент
 * @param {number} obj объект с зарплатами
 * @returns {number} newSalaries c новыми зарплатами 
 */

function raiseSalary(percent, obj) {
  let newSalaries = {};
  let sum = 0;
  for (let key in obj) {
    sum = sum + Math.floor((obj[key] / 100) * percent + obj[key]);
    newSalaries[key] = Math.floor((obj[key] / 100) * percent + obj[key]);
  }
  console.log(sum);
  return newSalaries;
}

console.log(raiseSalary(5, salaries));
