function add() {
  return parseInt(num1.textContent) + parseInt(num2.textContent);
}

function subtract() {
  return parseInt(num1.textContent) - parseInt(num2.textContent);
}

function multiply() {
  return parseInt(num1.textContent) * parseInt(num2.textContent);
}

function divide() {
  return parseInt(num1.textContent) / parseInt(num2.textContent);
}

function operate(op) {
  switch (op) {
    case "+":
      console.log(add());
      return add();
      break;
    case "-":
      console.log(subtract());
      return subtract();
      break;
    case "*":
      console.log(multiply());
      return multiply();
      break;
    case "/":
      console.log(divide());
      return divide();
      break;
  }
}

let num1 = document.querySelector("#num1");
let operator = document.querySelector("#operator");
let num2 = document.querySelector("#num2");

let numberButtons = document.querySelectorAll("#digit");

numberButtons.forEach((number) => {
  number.addEventListener("click", () => {
    if (operator.textContent == "") {
      num1.textContent += number.textContent;
    } else {
      num2.textContent += number.textContent;
    }
  });
});

let operatorButtons = document.querySelectorAll("#operator");

let previousOperator = "";

operatorButtons.forEach((currentOperator) => {
  currentOperator.addEventListener("click", () => {
    if (num2.textContent == "") {
      operator.textContent = currentOperator.textContent;
      previousOperator = currentOperator.textContent;
    } else {
      let result = operate(previousOperator);
      clear();
      num1.textContent = result;
      operator.textContent = currentOperator.textContent;
      previousOperator = currentOperator.textContent;
    }
  });
});

let clearButton = document.querySelector("#clear");

function clear() {
  operator.textContent = "";
  num1.textContent = "";
  num2.textContent = "";
}

clearButton.addEventListener("click", clear);
