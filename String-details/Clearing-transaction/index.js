const cleanTransactionsList = (transactions) => {
  const cleanData = transactions
    .map((transaction) => String(transaction).trim())
    .filter((transaction) => !isNaN(Number(transaction)))
    .map((transaction) => `$${Number(transaction).toFixed(2)}`);

  return cleanData;
};

console.log(cleanTransactionsList[('  1.9 ', '16.4', 17, ' 1 dollar ')]);
