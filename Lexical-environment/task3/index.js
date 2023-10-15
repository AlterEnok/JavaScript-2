let memory = 0;

export const add = (number) => {
  memory += number;
};

export const decrease = (number) => {
  memory -= number;
};

export const reset = () => {
  memory = 0;
};

export const getMemo = () => {
  return memory;
};

console.log(getMemo());

add(5);
console.log(getMemo());

decrease(3);
console.log(getMemo());

reset();
console.log(getMemo());
