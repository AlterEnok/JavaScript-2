const user = {
  name: 'Edem',
  profession: 'Frontend-developer',
  city: 'Zaporozshye',
  englishLevel: 'B1',
};

function getKeys(obj) {
  let keys = Object.keys(obj);
  keys.forEach((key) => {
    console.log(key);
  });
}
getKeys(user);
