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
    display.value = eval(display.value.replace(/[^-()\d/*+.%]/g, ''));
  } catch (error) {
    display.value = "Error";
  }
}

function square()
{
  if (display.value) {
    display.value=Math.pow(parseFloat(display.value),2);
  }
}

function cube()
{
  if (display.value) {
    display.value=Math.pow(parseFloat(display.value),3);
  }
}

function squareRoot()
{
  if(display.value)
  {
    display.value=Math.sqrt(parseFloat(display.value));
  }
}

function cubeRoot()
{
  if(display.value)
  {
    display.value=Math.cbrt(parseFloat(display.value));
  }
}

function exponent() {
  if (display.value) {
    const base = parseFloat(display.value);
    const power = parseFloat(prompt("Enter the exponent value (y for x^y):"));
    if (!isNaN(base) && !isNaN(power)) {
      display.value = Math.pow(base, power);
    } else {
      display.value = "Error";
    }
  }
}

function backspace()
{
  display.value=display.value.slice(0,-1);
}

function logBase10() {
  if (display.value) {
    let num = eval(display.value);
    if (num <= 0) {
      display.value = "Error";
    } else {
      display.value = Math.log10(num);
    }
  }
}

function logBaseE() {
  if (display.value) {
    let num = eval(display.value);
    if (num <= 0) {
      display.value = "Error";
    } else {
      display.value = Math.log(num);
    }
  }
}

function toggleScientific() {
  const sciSection = document.getElementById("scientific");
  const toggleBtn = document.getElementById("toggleSci");
  
  if (sciSection.classList.contains("show")) {
    sciSection.classList.remove("show");
    toggleBtn.textContent = "Scientific Mode";
  } else {
    sciSection.classList.add("show");
    toggleBtn.textContent = "Hide Scientific";
  }
}

function toggleTheme() {
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;

  document.body.classList.toggle("dark-mode");

  // Update button text/icon depending on the current theme
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode"; // show sun to switch to light
  } else {
    toggleBtn.textContent = "🌙 Dark Mode"; // show moon to switch to dark
  }
}

// Initialize the theme button text on load if the button exists
(function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
})();
