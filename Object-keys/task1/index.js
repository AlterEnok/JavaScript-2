const users = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};

const getAdults = (userObj) => {
  const usersArray = Object.entries(userObj);
  const filteredUsersArray = usersArray.filter((user) => user[1] >= 18);

  const userNames = filteredUsersArray.map((user) => user[0]);

  return userNames;
};

console.log(getAdults(users));

// compact code
// const getAdults = (userObj) => {
//   return Object.entries(userObj)
//     .filter((user) => user[1] >= 18)
//     .map((user) => user[0]);
// };

// console.log(getAdults(users));
