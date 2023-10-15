const numbers = [10, 500, 800, 200];
function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  const sum = max + min;
  return sum > 1000;
}
const result = checker(numbers);

console.log(result);
