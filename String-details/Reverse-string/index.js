const reverseString = (str) => {
  if (typeof str !== 'string') {
    return null;
  }

  return str.split('').reverse().join('');
};

console.log(reverseString('Hello Edem'));
console.log(reverseString(123));
