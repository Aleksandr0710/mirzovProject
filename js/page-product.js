"use strict";

const Button1 = document.getElementById("128");
const Button2 = document.getElementById("256");
const Button3 = document.getElementById("512");
const configurationMemory = document.querySelector(".configurationMemory");
const sidebarPrice = document.querySelector(".sidebar__price");
const sidebarPriceNew = document.querySelector(".sidebar__price-new");
const sidebarButton = document.querySelector(".sidebar__button");
const headerCountCart = document.querySelector(".header__count-cart");
const headerCountHeart = document.querySelector(".header__count-heart");
const sidebarHeart = document.querySelector(".sidebar__heart");
const sidebarHeartSvg = document.querySelector(".sidebar__heart-svg");

Button1.addEventListener("click", () => {
  configurationMemory.innerHTML = "Конфигурация памяти: 128 гб ";
  sidebarPrice.innerHTML = "75 990₽";
  sidebarPriceNew.innerHTML = "67 990₽";
});
Button2.addEventListener("click", () => {
  configurationMemory.innerHTML = "Конфигурация памяти: 256 гб ";
  sidebarPrice.innerHTML = "85 990₽";
  sidebarPriceNew.innerHTML = "79 190₽";
});
Button3.addEventListener("click", () => {
  configurationMemory.innerHTML = "Конфигурация памяти: 512 гб ";
  sidebarPrice.innerHTML = "99 999₽";
  sidebarPriceNew.innerHTML = "91 999₽";
});

let heartCount = {
  count: 0,
};

if (JSON.parse(localStorage.getItem("heart"))) {
  heartCount = JSON.parse(localStorage.getItem("heart"));
}
headerCountHeart.innerHTML = heartCount.count;

if (headerCountHeart.innerHTML == 1) {
  sidebarHeartSvg.classList.add("sidebar__heart-svg--disabled");
}
sidebarHeart.addEventListener("click", () => {
  sidebarHeartSvg.classList.toggle("sidebar__heart-svg--disabled");
  if (sidebarHeartSvg.classList.contains("sidebar__heart-svg--disabled")) {
    ++heartCount.count;
    localStorage.setItem("heart", JSON.stringify(heartCount));
    heartCount = JSON.parse(localStorage.getItem("heart"));
    headerCountHeart.innerHTML = heartCount.count;
  } else {
    --heartCount.count;
    localStorage.setItem("heart", JSON.stringify(heartCount));
    heartCount = JSON.parse(localStorage.getItem("heart"));
    headerCountHeart.innerHTML = heartCount.count;
  }
});

let cartCount = {
  count: 0,
};

if (JSON.parse(localStorage.getItem("cart"))) {
  cartCount = JSON.parse(localStorage.getItem("cart"));
}
headerCountCart.innerHTML = cartCount.count;

if (headerCountCart.innerHTML == 1) {
  sidebarButton.classList.add("sidebar__button--disabled");
  sidebarButton.innerHTML = "Товар уже в корзине";
}
sidebarButton.addEventListener("click", () => {
  sidebarButton.classList.toggle("sidebar__button--disabled");
  if (sidebarButton.classList.contains("sidebar__button--disabled")) {
    sidebarButton.innerHTML = "Товар уже в корзине";
    ++cartCount.count;
    localStorage.setItem("cart", JSON.stringify(cartCount));
    cartCount = JSON.parse(localStorage.getItem("cart"));
    headerCountCart.innerHTML = cartCount.count;
  } else {
    sidebarButton.innerHTML = "Добавить в корзину";
    --cartCount.count;
    localStorage.setItem("cart", JSON.stringify(cartCount));
    cartCount = JSON.parse(localStorage.getItem("cart"));
    headerCountCart.innerHTML = cartCount.count;
  }
});

const form = document.querySelector(".form");
const formInner = form.querySelector(".form__inner");
const formName = form.querySelector(".form__name");
const formAppraisement = form.querySelector(".form__appraisement");
const formText = form.querySelector(".form__text");
const formBtn = form.querySelector(".form__button");

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
    localStorage.removeItem("name");
    localStorage.removeItem("appraisement");
    localStorage.removeItem("text");
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

form.addEventListener("input", () => {
  localStorage.setItem("name", formName.value);
  localStorage.setItem("appraisement", formAppraisement.value);
  localStorage.setItem("text", formText.value);
});

const checkStorage = () => {
  formName.value = localStorage.getItem("name");
  formAppraisement.value = localStorage.getItem("appraisement");
  formText.value = localStorage.getItem("text");
};

checkStorage();
