const splitString = (str, len = 10) => {
  if (typeof str !== 'string') {
    return null;
  }

  const subsStrings = [];
  let currentPosition = 0;

  while (currentPosition < str.length) {
    let subsString = str.substr(currentPosition, len);

    if (subsString.length < len) {
      subsString += '.'.repeat(len - subsString.length);
    }

    subsStrings.push(subsString);
    currentPosition += len;
  }

  return subsStrings;
};

console.log(splitString('abcd efgh', 4));
