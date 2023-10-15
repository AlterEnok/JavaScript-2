const getRandomNumbers = (length, from, to) => {
  if (
    from > to ||
    !Number.isInteger(length) ||
    !Number.isFinite(from) ||
    !Number.isFinite(to)
  ) {
    return null;
  }

  const integerFrom = Math.ceil(from);
  const integerTo = Math.floor(to);

  if (integerFrom > integerTo) {
    return null;
  }

  const result = Array.from({ length }, () => 0).map(
    () =>
      Math.floor(Math.random() * (integerTo - integerFrom + 1)) + integerFrom
  );

  const hasInteger = result.some((num) => Number.isInteger(num));

  return hasInteger ? result : null;
};

console.log(getRandomNumbers(5, 1.4, 3.22));
