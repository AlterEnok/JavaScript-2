const numbers = [2, 5, 6, 8, 11, 9, 4];

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    if (currentNum % 2 === 0) {
      result[i] = currentNum + delta;
    } else {
      result[i] = currentNum;
    }
  }
  return result;
};
const result = increaseEvenEl(numbers, 20);

console.log(numbers);
console.log(result);
