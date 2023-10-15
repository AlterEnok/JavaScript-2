function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => {
    return acc + elem ** 2;
  }, 0);
}

console.log(sumOfSquares(2, 3));
