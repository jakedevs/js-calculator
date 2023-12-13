let num1 = 8;
let operator = '+';
let num2 = 7;

let displaynum1 = document.querySelector("#displaynum1");
displaynum1.textContent = num1;

let displayoperator = document.querySelector("#displayoperator");
displayoperator.textContent = operator;

let displaynum2 = document.querySelector("#displaynum2");
displaynum2.textContent = num2;

function add() {
  return num1 + num2;
}

function subtract() {
  return num1 - num2;
}

function multiply() {
  return num1 * num2;
}

function divide() {
  return num1 / num2;
}

function operate(num1, num2) {
  switch (operator) {
    case "+":
      add();
      break;
    case "-":
      subtract();
      break;
    case "*":
      multiply();
      break;
    case "/":
      divide();
      break;
  }
}
