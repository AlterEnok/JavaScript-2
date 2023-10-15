function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (newAge) {
  if (newAge < 0) {
    return false;
  } else {
    this.age = newAge;
    if (newAge >= 25) {
      this.requestNewPhoto();
    }
    return newAge;
  }
};

const user1 = new User('Edem', 21);
const user2 = new User('Tommy', 35);

user1.sayHi();
user1.requestNewPhoto();
user1.setAge(26);
user1.setAge(-5);
