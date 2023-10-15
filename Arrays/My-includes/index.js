const numbers = [1, 4, 8, 3];

const includes = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
};

console.log(includes(numbers, 3));
console.log(includes(numbers, 6));
