"use strict";
let fahrenheitEl = document.getElementById("fahrenheit");
// console.log(fahrenheitEl);
let celsiusEl = document.getElementById("celsius");
// console.log(celsiusEl);

/*oninput -The oninput event occurs when an element gets input.
 The oninput event occurs when the value of an <input> or <textarea> element is changed.
The oninput event does NOT occur when a <select> element changes.*/
celsiusEl.oninput = () => {
  let outputCelsius = parseFloat(celsiusEl.value * 9) / 5 + 32;
  // console.log(outputCelsius);
  fahrenheitEl.value = parseFloat(outputCelsius.toFixed(1));
};
/*The parseFloat() method parses a value as a string and returns the first number.
If the first character cannot be converted, NaN is returned*/
fahrenheitEl.oninput = () => {
  let outputFahrenheit = ((parseFloat(fahrenheitEl.value) - 32) * 5) / 9;
  // console.log(outputFahrenheit);
  celsiusEl.value = parseFloat(outputFahrenheit.toFixed(2));
};
