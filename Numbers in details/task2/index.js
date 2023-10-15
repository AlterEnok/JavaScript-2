// const parseArray = (arr) => arr.map((el) => Number.parseFloat(el));

// const elementsList = [4, 5.6, '5.7kl', null, NaN, Infinity];

// console.log(parseArray(elementsList));

function getParsedIntegers(arr) {
  return arr.map((num) => Number.parseInt(num));
}

function getParsedIntegersV2(arr) {
  return arr.map((num) => parseInt(num));
}

function getParsedFloats(arr) {
  return arr.map((num) => Number.parseFloat(num));
}

function getParsedFloatsV2(arr) {
  return arr.map((num) => parseFloat(num));
}

const arr = ['10', '20', '30.5', '40.2'];

console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));
