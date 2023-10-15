const numbers = [1, 4, 1, 8, 3, 4, 8, 8];
function uniqueCount(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let uniqueCount = 0;
  const checkedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!checkedArr.includes(i)) {
      uniqueCount++;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          checkedArr.push(j);
        }
      }
    }
  }
  return uniqueCount;
}

const result = uniqueCount(numbers);
console.log(result);
