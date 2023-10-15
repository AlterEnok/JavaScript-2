const numbers = [1, 2, 3, 4, 5];
const getSubArray = (arr, numberOfElements) => {
  const result = [];
  for (let i = 0; i < numberOfElements && i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};
const firstThreeElements = getSubArray(numbers, 3);
console.log(firstThreeElements);

const firstTwoElements = getSubArray(numbers, 2);
console.log(firstTwoElements);
