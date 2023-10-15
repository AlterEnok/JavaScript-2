//  цикл фор и фор офф только для массиво. Для объектов только фор ин

const concatProps = (obj) => {
  const arr = [];

  for (let key in obj) {
    arr.push(obj[key]);
  }

  return arr;
};

console.log(concatProps({ name: 'Edem Kestan', age: 20, interest: 'Policy' }));

// compact code

// const concatProps = (obj) => Object.values(obj);
// console.log(concatProps({ name: 'Edem Kestan', age: 20, interest: 'Policy' }));
