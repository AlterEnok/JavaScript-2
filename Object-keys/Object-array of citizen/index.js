const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

const getPeople = (obj) => {
  const people = Object.keys(obj).map((room) =>
    obj[room].map((person) => person.name)
  );
  return people.flat();
};

const people = getPeople(rooms);
console.log(people);
