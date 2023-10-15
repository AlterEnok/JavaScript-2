// const cloneArr = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return [...arr];
// };
// console.log(cloneArr([1, 2, 3, 4, 5]));

// compact code

const cloneArr = (arr) => (Array.isArray(arr) ? [...arr] : null);
console.log(cloneArr([1, 2, 3, 4, 5]));
