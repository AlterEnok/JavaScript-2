// const reverseArray = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.slice().reverse();
// };

// console.log(reverseArray([1, 2, 3, 4, 5]));
// console.log(reverseArray([17, 18, 19, 20]));

// compact code

const reverseArray = (arr) =>
  Array.isArray(arr) ? arr.slice().reverse() : null;

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([17, 18, 19, 20]));
