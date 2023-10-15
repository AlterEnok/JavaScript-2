// const arrAverage = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   if (arr.length === 0) {
//     return 0;
//   }

//   const sum = arr.reduce((acc, curr) => acc + curr, 0);
//   return sum / arr.length;
// };

// console.log(arrAverage([2, 5, 6, 3]));

const arrAverage = (arr) => {
  return Array.isArray(arr) && arr.length > 0
    ? arr.reduce((acc, curr) => acc + curr, 0) / arr.length
    : null;
};

console.log(arrAverage([2, 5, 6, 3]));
