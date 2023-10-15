export const createArrayOfFunctions = (size) => {
  if (typeof size !== 'number') {
    return size === undefined ? [] : null;
  }
  const arrayOfFunctions = [];

  for (let i = 0; i < size; i++) {
    arrayOfFunctions.push(() => i);
  }

  return arrayOfFunctions;
};

const arrayOfFunctions = createArrayOfFunctions(9);
console.log(arrayOfFunctions[5]());
console.log(arrayOfFunctions[3]());
