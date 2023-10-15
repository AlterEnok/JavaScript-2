const getMinSquaredNumber = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  const minAbsNumber = Math.min(...numbers.map((number) => Math.abs(number)));
  return minAbsNumber ** 2;
};
export default getMinSquaredNumber;
