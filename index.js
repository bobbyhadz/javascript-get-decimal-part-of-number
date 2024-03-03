// EXAMPLE 1 - Get the Decimal Part of a Number in JavaScript

function getDecimalPart(num) {
  if (Number.isInteger(num)) {
    return 0;
  }

  const decimalStr = num.toString().split('.')[1];
  return Number(decimalStr);
}

console.log(getDecimalPart(12.345)); // 👉️ 345
console.log(getDecimalPart(-1.23)); // 👉️ 23
console.log(getDecimalPart(1)); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 2 - Getting the number of digits after the decimal

// function digitsAfterDecimal(num) {
//   if (Number.isInteger(num)) {
//     return 0;
//   }

//   const arr = num.toString().split('.');

//   return arr[1].length;
// }

// console.log(digitsAfterDecimal(1)); // 👉️ 0
// console.log(digitsAfterDecimal(1.0)); // 👉 0
// console.log(digitsAfterDecimal(1.1)); // 👉️ 1
// console.log(digitsAfterDecimal(1.123)); // 👉️ 3
// console.log(digitsAfterDecimal(1.1234)); // 👉️ 4

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Decimal Part of a Number using the modulo `%` operator

// function getDecimalPart(num) {
//   return num % 1;
// }

// console.log(getDecimalPart(3.137)); // 👉️ 0.137
// console.log(getDecimalPart(1.37)); // 👉️ 0.37000000000001
// console.log(getDecimalPart(5)); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the Decimal Part of a Number using `String.slice()`

// function getDecimalPart(num) {
//   if (Number.isInteger(num)) {
//     return 0;
//   }

//   const str = num.toString();
//   const indexOfDot = str.indexOf('.');

//   return Number(str.slice(indexOfDot + 1));
// }

// console.log(getDecimalPart(12.345)); // 👉️ 345
// console.log(getDecimalPart(-1.23)); // 👉️ 23
// console.log(getDecimalPart(1)); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get the Decimal Part of a Number using `Math.trunc()`

// function getDecimalPart(num) {
//   return num - Math.trunc(num);
// }

// console.log(getDecimalPart(3.137)); // 👉️ 0.137
// console.log(getDecimalPart(1.234)); // 👉️ 0.23399999999999999
// console.log(getDecimalPart(5)); // 👉️ 0
