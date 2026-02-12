let  display = document.getElementById("display");

function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {  
  display.value = "";        
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}


function calculate() {

  let expression = display.value.trim();

  if (expression === "") {
    display.value = "Enter value";
    return;
  }

  let operator;

  if (expression.includes("+")) operator = "+";
  else if (expression.includes("-")) operator = "-";
  else if (expression.includes("*")) operator = "*";
  else if (expression.includes("/")) operator = "/";
  else {
    display.value = "Invalid";
    return;
  }

  let parts = expression.split(operator);

  if (parts.length !== 2) {
    display.value = "Invalid format";
    return;
  }

  let num1 = Number(parts[0]);
  let num2 = Number(parts[1]);

  if (isNaN(num1) || isNaN(num2)) {
    display.value = "Numbers only";
    return;
  }

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        display.value = "Divide by 0";  
        return;
      }
      result = num1 / num2;
      break;
  }

  display.value = result;   
}
            