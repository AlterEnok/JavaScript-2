function saveFuncCalls(func) {
  const callsHistory = [];

  function withMemory(...args) {
    callsHistory.push(args);
    return func.apply(this, args);
  }

  withMemory.callsHistory = callsHistory;
  return withMemory;
}

function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}
const sumWithMemory = saveFuncCalls(sum);
console.log(sumWithMemory(4, 2));
console.log(sumWithMemory(9, 1));
console.log(sumWithMemory.callsHistory);

function addDelta(array, delta) {
  return array.map((el) => el + delta);
}

const addDeltaWithMemory = saveFuncCalls(addDelta);
console.log(addDeltaWithMemory([111, 22, 55, 4], 8));
console.log(addDeltaWithMemory([9, 1, -8, 15, 7, 0], 7));
console.log(addDeltaWithMemory.callsHistory);

const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const sayHiWithMemory = saveFuncCalls(user.sayHi);
const sayHiWithMemoryBinded = sayHiWithMemory.bind({ name: 'Tom' });
console.log(sayHiWithMemoryBinded()); // ===> Tom

console.log(sayHiWithMemory.callsHistory);
