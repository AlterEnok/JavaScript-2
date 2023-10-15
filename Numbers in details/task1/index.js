function getFiniteNumbers(arr) {
  return arr.filter((num) => Number.isFinite(num));
}

function getFiniteNumbersV2(arr) {
  return arr.filter((num) => isFinite(num));
}

function getNaN(arr) {
  return arr.filter((num) => Number.isNaN(num));
}

function getNaNV2(arr) {
  return arr.filter((num) => isNaN(num));
}

function getIntegers(arr) {
  return arr.filter((num) => Number.isInteger(num));
}

const numbers = [1, 2, 3, 4, 5, 6, NaN, Infinity, -Infinity, '7', '8', 9.5];
console.log(getFiniteNumbers(numbers));
console.log(getFiniteNumbersV2(numbers));
console.log(getNaN(numbers));
console.log(getNaNV2(numbers));
console.log(getIntegers(numbers));
