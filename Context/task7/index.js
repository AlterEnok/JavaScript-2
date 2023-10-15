export const user = {
  firstName: '',
  lastName: '',

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  setFullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
