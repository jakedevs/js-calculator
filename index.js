let num1 = undefined;
let operator = undefined;
let num2 = undefined;
let result = undefined;

let displaynum1 = document.querySelector("#displaynum1");
displaynum1.textContent = num1;

let displayoperator = document.querySelector("#displayoperator");
displayoperator.textContent = operator;

let displaynum2 = document.querySelector("#displaynum2");
displaynum2.textContent = num2;

let displayresult = document.querySelector("#displayresult");
displayresult.textContent = result;

let digit = document.querySelectorAll("#digit");

let operators = document.querySelectorAll("#operator");
let equal = document.querySelector("#equals");

equal.addEventListener("click", () => {
  displayresult.textContent = operate();
  console.log(operate());
  console.log(displayresult.textContent);
});

operators.forEach((currentop) => {
  currentop.addEventListener("click", () => {
    console.log(currentop.textContent);
    operator = currentop.textContent;
    displayoperator.textContent = currentop.textContent;
  });
});

digit.forEach((selectednumber) => {
  selectednumber.addEventListener("click", () => {
    console.log(selectednumber.textContent);
    if (num1 == undefined) {
      num1 = selectednumber.textContent;
      displaynum1.textContent = selectednumber.textContent;
    } else {
      num2 = selectednumber.textContent;
      displaynum2.textContent = selectednumber.textContent;
    }
  });
});

function add() {
  return parseInt(num1) + parseInt(num2);
}

function subtract() {
  return parseInt(num1) - parseInt(num2);
}

function multiply() {
  return parseInt(num1) * parseInt(num2);
}

function divide() {
  return parseInt(num1) / parseInt(num2);
}

function operate() {
  switch (operator) {
    case "+":
      return add();
      break;
    case "-":
      return subtract();
      break;
    case "*":
      return multiply();
      break;
    case "/":
      return divide();
      break;
  }
}
