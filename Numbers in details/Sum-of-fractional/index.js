function getTotalPrice(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const roundSum = Math.floor(sum * 100) / 100;
  const formattedSum = roundSum.toFixed(2);
  return `$${formattedSum}`;
}

const numbers = [15.6788, 12.125, 9.99];
console.log(getTotalPrice(numbers));
