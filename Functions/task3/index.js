function getEvenOdd(num) {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}
const result = getEvenOdd(20);
console.log(result);
