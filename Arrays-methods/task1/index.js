const getSpecialNumbers = (numbers) => numbers.filter((num) => num % 3 === 0);

const arr = [1, 2, 3, 4, 5, 6, 18, 15];

console.log(getSpecialNumbers(arr));
