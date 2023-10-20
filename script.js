const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
// console.log(display, buttons);

//function to calculate, based on clicked button
const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    //to convert in % when user press %
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    //clear screen when AC is pressed.
    output = "";
  } else if (btnValue === "DEL") {
    //remove last character from display screen when DEL is pressed.
    output = output.toString().slice(0, -1);
  } else {
    //If output is empty and button pressed is special characters then return.
    if (output === "" && specialChars.includes(btnValue)) {
      return;
    }
    output += btnValue;
  }
  display.value = output;
};
//Add event Listener to buttons, call calculate() on click.
buttons.forEach((button) => {
    //Button click listener calls calculate() with dataset value as argument.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
