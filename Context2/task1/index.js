export const event = {
  guests: [
    { name: 'John', email: 'example@server.com', age: 18 },
    { name: 'Leon', email: 'leon@gmail.com', age: 17 },
  ],
  message: 'Welcome to the party!',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};
console.log(event.getInvitations());
