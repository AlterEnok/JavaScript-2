const numbers = [1, 2, 3, 4, 5];
function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
const reversNumbers = reverseArray(numbers);
console.log(reversNumbers);
console.log(numbers);
