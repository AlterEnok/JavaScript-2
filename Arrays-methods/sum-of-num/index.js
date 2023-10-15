// const sum = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.reduce((acc, curr) => acc + curr);
// };
// console.log(sum([2, 5, 6, 3, 0, 3, -1]));

// compact code
const sum = (arr) =>
  Array.isArray(arr) ? arr.reduce((acc, curr) => acc + curr, 0) : null;

console.log(sum([2, 5, 6, 3, 0, 3, -1]));
