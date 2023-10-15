const user = {
  firstName: 'John',
  lastName: 'Snow',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

console.log(user.fullName);

user.fullName = 'Jamie Lannister';
console.log(user.firstName);
console.log(user.lastName);

export default user;
