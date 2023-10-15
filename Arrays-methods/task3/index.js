const flatArray = (arr) => {
  const flattened = arr.reduce((acc, elem) => {
    return acc.concat(elem);
  }, []);
  return flattened.sort((a, b) => a - b);
};
const initArray = [1, [2, 3, 4], 5, [6]];
console.log(flatArray(initArray));
