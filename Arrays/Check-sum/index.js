const numbers = [10, 10, 10];

const checkSum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum > 100;
};
const result = checkSum(numbers);
console.log(result);
