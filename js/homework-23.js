"use strict";
// упражнение 1
let count = prompt("напишите число");
let promise = new Promise((resolve, reject) => {
  let interval = setInterval(() => {
    if (isNaN(count) || count < 0) {
      return reject("перечитай вопрос");
    }
    count = count - 1;
    console.log("Осталось:", count);
    if (count === 0) {
      clearInterval(interval);
      resolve("вот и все");
    }
  }, 1000);
});
promise
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));

//   упражнение 2

let backend = fetch("https://reqres.in/api/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data.data;
  })

  .then((user) => {
    console.log("кол-во пользователей: ", user.length);
    user.forEach((user) => {
      console.log("first_name: ", user.first_name);
      console.log("last_name: ", user.last_name);
      console.log("email: ", user.email);
    });
  });

//   .then((user) => {
//     console.log(user.name);
//   });
