"use strict";

const form = document.querySelector(".form");
const formInner = form.querySelector(".form__inner");
const formName = form.querySelector(".form__name");
const formAppraisement = form.querySelector(".form__appraisement");
const formText = form.querySelector(".form__text");
const formBtn = form.querySelector(".form__button");

const errors = {
  wrongName: "вы не указали имя и фамилию",
  shortName: "Имя не может быть короче 2-х символов",
  wrongRaiting: "Оценка должна быть от 1 до 5",
  stringRaiting: "Оценка должна содержать цифры",
};

class AddReviewForm {
  constructor() {
    this.wrongInput = null;
    this.errorText = null;
    this.errorDiv = null;
    this.left = "0";
  }
  checkWrongInput() {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!formName.value.length) {
        this.wrongInput = formName;
        this.errorText = errors.wrongName;
        this.createElement();
        this.showError();
        this.focusError();
      } else if (formName.value.length < 2) {
        this.wrongInput = formName;
        this.errorText = errors.shortName;
        this.createElement();
        this.showError();
        this.focusError();
      } else if (
        !formAppraisement.value.length ||
        formAppraisement.value < 1 ||
        formAppraisement.value > 5
      ) {
        this.wrongInput = formAppraisement;
        this.errorText = errors.wrongRaiting;
        this.left = "357px";
        this.createElement();
        this.showError();
        this.focusError();
      } else if (isNaN(formAppraisement.value)) {
        this.wrongInput = formAppraisement;
        this.errorText = errors.stringRaiting;
        this.createElement();
        this.showError();
        this.focusError();
      }
      this.removeValue();
    });
  }

  createElement = () => {
    const element = document.createElement("div");
    element.classList.add("error");
    element.innerHTML = this.errorText;
    this.errorDiv = element;
    formInner.insertBefore(this.errorDiv, this.wrongInput);
  };
  init() {
    this.checkWrongInput();
    this.setValue();
    this.getValue();
  }
  showError() {
    this.wrongInput.style.position = "relative";
    this.errorDiv.style.left = this.left;
    this.errorDiv.style.display = "block";
  }
  focusError() {
    this.wrongInput.onfocus = () => {
      this.errorDiv.style.display = "none";
    };
  }
  setValue() {
    form.addEventListener("input", () => {
      localStorage.setItem("name", formName.value);
      localStorage.setItem("appraisement", formAppraisement.value);
      localStorage.setItem("text", formText.value);
    });
  }
  getValue() {
    formName.value = localStorage.getItem("name");
    formAppraisement.value = localStorage.getItem("appraisement");
    formText.value = localStorage.getItem("text");
  }
  removeValue() {
    localStorage.removeItem("name");
    localStorage.removeItem("appraisement");
    localStorage.removeItem("text");
  }
}
const validator = new AddReviewForm();
validator.init();