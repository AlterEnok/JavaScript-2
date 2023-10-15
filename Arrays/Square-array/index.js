const numbers = [1, 10, 9, 11];
function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const squaredArray = [];

  for (let i = 0; i < arr.length; i++) {
    const squaredNumber = arr[i] * arr[i];
    squaredArray.push(squaredNumber);
  }
  return squaredArray;
}
const squaredNumbers = squareArray(numbers);
console.log(squaredNumbers);
