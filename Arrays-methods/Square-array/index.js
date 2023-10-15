function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.map((num) => num * num);
}
console.log(squareArray([10, 10, 10]));
console.log(squareArray([0, 0, 1, 3]));
