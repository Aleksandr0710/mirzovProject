"use strict";
const form = document.querySelector(".form");
const formInner = form.querySelector(".form__inner");
const formName = form.querySelector(".form__name");
const formAppraisement = form.querySelector(".form__appraisement");

const createElement = (text, tag, className, mix) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.classList.add(mix);
  element.innerHTML = text;
  formInner.append(element);
  return element;
};
const errorName1 = createElement(
  "вы не указали имя и фамилию",
  "div",
  "error",
  "errorName"
);
const errorName2 = createElement(
  "Имя не может быть короче 2-х символов",
  "div",
  "error",
  "errorName"
);

const errorAppraisement1 = createElement(
  "Оценка должна быть от 1 до 5",
  "div",
  "error",
  "errorAppraisement"
);
const errorAppraisement2 = createElement(
  "Оценка должна содержать цифры",
  "div",
  "error",
  "errorAppraisement"
);

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!formName.value.length) {
      errorName1.style.display = "block";
    } else if (formName.value.length < 2) {
      errorName2.style.display = "block";
    } else if (
      !formAppraisement.value.length ||
      formAppraisement.value < 1 ||
      formAppraisement.value > 5
    ) {
      errorAppraisement1.style.display = "block";
    } else if (isNaN(formAppraisement.value)) {
      errorAppraisement2.style.display = "block";
    }
  });
});

formName.onfocus = () => {
  errorName1.style.display = "none";
  errorName2.style.display = "none";
};
formAppraisement.onfocus = () => {
  errorAppraisement1.style.display = "none";
  errorAppraisement2.style.display = "none";
};
