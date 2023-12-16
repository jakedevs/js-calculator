//let num1 = prompt("num1");
//let operator = prompt("operator");
//let num2 = prompt("num2");

operate();

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

let display1 = document.querySelector("#displaynum1");
let displayop = document.querySelector("#displayoperator");
let display2 = document.querySelector("#displaynum2");

let numberButtons = document.querySelectorAll("#digit");

numberButtons.forEach((number) => {
  number.addEventListener("click", () => {
    if (displayop.textContent == "") {
      display1.textContent += number.textContent;
    } else {
      display2.textContent += number.textContent;
    }
  });
});

let operatorButtons = document.querySelectorAll("#operator");

operatorButtons.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (display2.textContent == "") {
      displayop.textContent = operator.textContent;
    } else {
      console.log("add logic here");
    }
  });
});

let clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
  displayop.textContent = "";
  display2.textContent = "";
  display1.textContent = "";
});
