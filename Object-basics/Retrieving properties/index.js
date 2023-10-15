const user = {
  name: 'Johnny',
  age: 30,
  hobby: 'Martial artist',
  country: 'USA',
};

const pickProps = (obj, props) => {
  const newObj = {};

  for (let prop of props) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }

  return newObj;
};

const propsToPick = ['name', 'hobby', 'city'];

const pickedProps = pickProps(user, propsToPick);

console.log(pickedProps);
