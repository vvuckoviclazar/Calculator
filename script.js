"use strict";

const form = document.querySelector("form");
const firstNum = document.querySelector(".firstNum");
const secondNum = document.querySelector(".secondNum");
const operation = document.querySelector(".operation");
const result = document.querySelector(".result");

let firstNumber;
let secondNumber;
let operationValue;
let resultValue;

firstNum.addEventListener("input", (e) => {
  firstNumber = e.target.value;
});

secondNum.addEventListener("input", (e) => {
  secondNumber = e.target.value;
});

operation.addEventListener("input", (e) => {
  operationValue = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);

  if (isNaN(num1) || isNaN(num2)) {
    result.value = "Neispravan unos broja!";
    return;
  }

  switch (operationValue) {
    case "+":
      resultValue = num1 + num2;
      break;
    case "-":
      resultValue = num1 - num2;
      break;
    case "*":
      resultValue = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result.value = "Deljenje nulom nije dozvoljeno!";
        return;
      }
      resultValue = num1 / num2;
      break;
    default:
      result.value = "Nepoznata operacija!";
      return;
  }

  result.value = resultValue;
});
