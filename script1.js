let display = document.getElementById("result");

// Add a number to the display
function appendNumber(num) {
  display.value += num;
}

// Add an operator (+, -, *, /, %)
function appendOperator(op) {
  display.value += " " + op + " ";
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Perform calculation
function calculate() {
  try {
    // Evaluate expression safely
    display.value = eval(display.value.replace(/[^-()\d/*+.]/g, ''));
  } catch (error) {
    display.value = "Error";
  }
}
