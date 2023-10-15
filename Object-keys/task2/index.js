const user = {
  name: 'Edem',
  key: 20,
};

const copyObj = (obj) => {
  return { ...obj };
};

console.log(copyObj(user));
