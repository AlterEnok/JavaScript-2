function getSum(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

const result = getSum(1, 10);
console.log(result);
