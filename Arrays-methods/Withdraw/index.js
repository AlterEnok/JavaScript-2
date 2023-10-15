const withdraw = (clients, balances, client, amount) => {
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
