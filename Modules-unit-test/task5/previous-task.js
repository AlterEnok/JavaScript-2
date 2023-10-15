export const reverseArray = (arr) =>
  Array.isArray(arr) ? arr.slice().reverse() : null;
console.log(reverseArray([1, 2, 3, 4, 5]));

export const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);

  if (clientIndex != -1 && balances[clientIndex] >= amount) {
    balances[clientIndex] -= amount;
    return balances[clientIndex];
  }

  return -1;
};

const clients = ['Ann', 'Johnny', 'Edem'];
const balances = [200, 300, 400];
const client = 'Edem';
const amount = 300;

console.log(withdraw(clients, balances, client, amount));

export const getAdults = (obj) => {
  const adults = {};

  for (let person in obj) {
    if (obj[person] >= 18) {
      adults[person] = obj[person];
    }
  }

  return adults;
};

const people = { Johnny: 19, Edem: 20, Bob: 16 };

const adults = getAdults(people);
console.log(adults);
