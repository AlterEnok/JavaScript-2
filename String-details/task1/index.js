const splitText = (text, len = 10) => {
  if (typeof text !== 'string') {
    return null;
  }

  if (len <= 0) {
    return null;
  }

  const strArr = [];
  let startPosition = 0;

  while (startPosition < text.length) {
    let chunk = text.substring(startPosition, startPosition + len);
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }

  return strArr.join('\n');
};

console.log(splitText('abcdefg', 4));
