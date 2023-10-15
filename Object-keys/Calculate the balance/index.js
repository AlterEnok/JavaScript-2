const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const getTotalRevenue = (transactions) => {
  return transactions.reduce((total, transactions) => {
    return total + transactions.amount;
  }, 0);
};

const result = getTotalRevenue(dayTransactions);
console.log(result);
