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

let viewport = document.querySelector("#viewport");

let displayequals = document.createElement("span");

let equal = document.querySelector("#equals");

let clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
  result = undefined;
  displaynum1.textContent = num1;
  displaynum2.textContent = num2;
  displayoperator.textContent = operator;
  displayresult.textContent = result;
  displayequals.textContent = undefined;
});

equal.addEventListener("click", () => {
  displayequals.textContent = " =";
  viewport.insertBefore(displayequals, displaynum2.nextSibling);
  displayresult.textContent = operate();
  console.log(operate());
  console.log(displayresult.textContent);
});

operators.forEach((currentop) => {
  currentop.addEventListener("click", () => {
    if (operator == undefined) {
      console.log(currentop.textContent);
      operator = currentop.textContent;
      displayoperator.textContent = currentop.textContent;
    } else {
    }
  });
});

digit.forEach((selectednumber) => {
  selectednumber.addEventListener("click", () => {
    console.log(selectednumber.textContent);
    if (num1 == undefined) {
      num1 = selectednumber.textContent;
      displaynum1.textContent = selectednumber.textContent;

    } 
    else if (operator == undefined ) {
      num1 += selectednumber.textContent;
      displaynum1.textContent = num1;
    }
    else if (num2 == undefined) {
      num2 = selectednumber.textContent;
      displaynum2.textContent = selectednumber.textContent;
    }
    else if (num2 != undefined) {
      num2 += selectednumber.textContent;
      displaynum2.textContent = num2;
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
