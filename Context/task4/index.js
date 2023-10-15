const student = {
  name: 'Tom',
};

export function sayName() {
  console.log(this.name);
}

sayName.call(student);

const anotherObj = {
  name: 'Bruce',
};

sayName.call(anotherObj);

const company = {
  companyName: 'Microsoft',
};

function greeting(firstName, lastName) {
  console.log(
    `Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`
  );
}

greeting.call(company, 'Bob', 'Marley');

const country = {
  countryName: 'Ukraine',
  capital: 'Kyiv',
};

function getPopulation(population) {
  return `Population in ${this.countryName} is ${population}`;
}

const populationResult = getPopulation.call(country, 43000);
console.log(populationResult);

const transaction = {
  amount: 1200,
  operation: 'sell',
  currency: 'USD',
  exchange: 'NYSE',
  printTransaction() {
    console.log(
      `${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`
    );
  },
};

const anotherTransaction = {
  amount: 400,
  operation: 'buy',
  currency: 'USD',
  exchange: 'NASDAQ',
};

transaction.printTransaction.call(anotherTransaction);
