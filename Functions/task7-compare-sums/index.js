function sum(from, to) {
  let sum = 0;

  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  let sum1 = sum(firstFrom, firstTo);
  let sum2 = sum(secondFrom, secondTo);
  return sum1 > sum2;
}
const result1 = sum(11, 11);
console.log(result1);

const result2 = compareSums(5, 15, 3, 5);
console.log(result2);
