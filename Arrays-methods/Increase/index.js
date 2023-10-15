// const increaseEvenE1 = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.map((num) => {
//     if (num % 2 === 0) {
//       return num + delta;
//     }
//     return num;
//   });
// };

// console.log(increaseEvenE1([2, 5, 6, 8, 11, 9, 4], 20));

// compact code
const increaseEvenEl = (arr, delta) => {
  return Array.isArray(arr)
    ? arr.map((num) => (num % 2 === 0 ? num + delta : num))
    : null;
};
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
