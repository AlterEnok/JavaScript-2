class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) {
      return false;
    } else {
      this.age = newAge;
      if (newAge >= 25) {
        this.requestNewPhoto();
      }
      return newAge;
    }
  }

  static createEmpty() {
    return new User('', null);
  }
}
const emptyUser = User.createEmpty();
console.log(emptyUser);

const user1 = new User('John', 21);
console.log(user1);
