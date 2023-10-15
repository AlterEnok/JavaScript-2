const numbers = [1, 2, 2, 3, 4, 3, 5];
function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  const duplicate = [];
  for (let i = 0; i < array.length; i++) {
    if (!duplicate.includes(array[i])) {
      duplicate.push(array[i]);
    }
  }
  return duplicate;
}

const result = removeDuplicates(numbers);
console.log(result);
