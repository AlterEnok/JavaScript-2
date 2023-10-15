const countOccurrences = (text, str) => {
  if (str === '') {
    return null;
  }

  if (text === '') {
    return 0;
  }

  let count = 0;
  let position = text.indexOf(str);

  while (position !== -1) {
    count++;
    position = text.indexOf(str, position + 1);
  }
  return count;
};

console.log(countOccurrences('abababab', 'ab'));
