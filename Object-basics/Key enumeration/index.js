const user = {
  name: 'Edem',
  age: 20,
  hobby: 'Policy',
};

function getKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

getKeys(user);
