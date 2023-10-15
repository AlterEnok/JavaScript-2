function getSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let sumOfNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfNumbers += arr[i];
  }
  return sumOfNumbers;
}

const numbers = [1, 10, -10, 4];
const sumOfElements = getSum(numbers);
console.log(sumOfElements);

// const numbers = [11, 22, 33, 55, 66];

// const arr = numbers;

// arr[2] = 17;
// console.log(numbers);
