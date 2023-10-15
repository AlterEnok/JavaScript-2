//порядок возрастания
const numbers = [5, 2, 8, 1, 10];
function sortAscending(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const sorted = [...arr];

  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - i - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        const temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
  return sorted;
}
//порядок убывания

function sortDescending(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const sorted = [...arr];

  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - i - 1; j++) {
      if (sorted[j] < sorted[j + 1]) {
        const temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
  return sorted;
}

const ascending = sortAscending(numbers);
const descending = sortDescending(numbers);

console.log(ascending);
console.log(descending);
