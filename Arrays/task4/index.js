// const numbers = [11, 22, 33, 55, 66];

// // const a = numbers[0];
// // const b = numbers [1];

// function swap(arr) {
//   const [start, ...rest] = arr;

//   return [...rest, start];
// }

// console.log(swap(numbers));

const numbers = [1, 10, 9, 11];

function swap(numbers) {
  const [start, ...last] = numbers;

  return [...last, start];
}
console.log(swap(numbers));

function swapManual(numbers) {
  const copiedNumbers = [...numbers]; // Создаем копию исходного массива
  const firstElement = copiedNumbers[0];

  for (let i = 0; i < copiedNumbers.length - 1; i++) {
    copiedNumbers[i] = copiedNumbers[i + 1];
  }

  copiedNumbers[copiedNumbers.length - 1] = firstElement;

  return copiedNumbers;
}

console.log(swapManual(numbers));
console.log(numbers);
