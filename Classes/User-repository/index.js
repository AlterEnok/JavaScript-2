class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map((user) => user.name);
  }

  getUserIds() {
    return this._users.map((user) => user.id);
  }

  getUserNameById(userId) {
    const user = this._users.find((user) => user.id === userId);
    return user ? user.name : null;
  }
}

const users = [
  new User('1', 'Alice', 'session1'),
  new User('2', 'Bob', 'session2'),
  new User('3', 'Charlie', 'session3'),
];

const userRepository = new UserRepository(users);

console.log(userRepository.getUserNames());
console.log(userRepository.getUserIds());
console.log(userRepository.getUserNameById('2'));
console.log(userRepository.getUserNameById('4'));
