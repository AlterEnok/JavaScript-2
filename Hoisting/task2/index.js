var arr = [];

for (var i = 0; i < 10; i += 1) {
  arr[i] = createFunction(i);
}

function createFunction(index) {
  return function () {
    return index;
  };
}

export { arr };
