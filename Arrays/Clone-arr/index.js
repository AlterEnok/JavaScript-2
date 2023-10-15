// const numbers = [17, 25, 8];
// function cloneArr(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.slice();
// }
// const result = cloneArr(numbers);
// console.log(numbers);
// console.log(result);
const numbers = [17, 25, 8];
function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const cloned = [];
  for (let i = 0; i < arr.length; i++) {
    cloned[i] = arr[i];
  }
  return cloned;
}
const result = cloneArr(numbers);
console.log(numbers);
console.log(result);
