const clients = ['Edem', 'Monica', 'Johnny'];
const balances = [100, 200, 300];

function withdraw(clients, balances, client, amount) {
  const index = clients.indexOf(client);

  if (index === -1) {
    return -1; // Клиент не найден
  }

  const balance = balances[index];

  if (balance < amount) {
    return -1; // Недостаточно денег на счете
  }

  balances[index] -= amount;

  return balances[index];
}

const remainingBalance = withdraw(clients, balances, 'Edem', 50);
console.log(remainingBalance);

const insufficientBalance = withdraw(clients, balances, 'Johnny', 400);
console.log(insufficientBalance);
