function getSpecialNumbers(from, to) {
  let specialNumbers = [];

  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      specialNumbers.push(i);
    }
  }

  return specialNumbers;
}

const specialNumbers = getSpecialNumbers(10, 30);
console.log(specialNumbers);

// people.push('Johny'); //добавляет элемент в конец массива
// people.unshift('Johny'); // добавляет элемент в начало массива
// people.pop('Johny'); // удаляет элементы из еонца массива
// people.shift() // удаляет сначала
