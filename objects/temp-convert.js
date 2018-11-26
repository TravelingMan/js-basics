/*
JavaScript is bad at floating point math when using Math.round().
Using it here because it's built in.

See: https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
*/
let temperature = function(fahrenheit) {
  return {
    fahrenheit: Math.round(fahrenheit * 100) / 100,
    celsius: Math.round(((fahrenheit - 32) / 1.8) * 100) / 100,
    kelvin: Math.round(((fahrenheit + 459.67) * ( 5 / 9)) * 100) / 100
  }
}

let temp = 65.5
console.log(`Temperature: ${temperature(temp).fahrenheit}F, ${temperature(temp).celsius}C, ${temperature(temp).kelvin}K`)