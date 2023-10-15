const user = {
  name: 'Sam',
};
const userId = 12345;

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  const newUser = Object.assign({}, userData, { id: userId });
  return newUser;
}

function addPropertyV3(userData, userId) {
  const newUser = Object.assign({}, userData);
  newUser.id = userId;
  return newUser;
}

function addPropertyV4(userData, userId) {
  const newUser = { ...userData, id: userId };
  return newUser;
}
console.log(addPropertyV1(user, userId));
console.log(addPropertyV2(user, userId));
console.log(addPropertyV3(user, userId));
console.log(addPropertyV4(user, userId));
