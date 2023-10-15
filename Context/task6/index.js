const student = {
  name: 'Tom',
};

export function sayName() {
  console.log(this.name);
}

const sayStudentName = sayName.bind(student);
sayStudentName();

const bruce = { name: 'Bruce' };
export function sayBruceName() {
  console.log(this.name);
}

const company = {
  companyName: 'Microsoft',
};

export function greeting(firstName, lastName) {
  console.log(
    `Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`
  );
}

export const specialGreeting = greeting.bind(company, 'Bob', 'Marley');
specialGreeting();

const country = {
  countryName: 'Ukraine',
  capital: 'Kyiv',
};

export function getPopulation(population) {
  return `Population in ${this.countryName} is ${population}`;
}

const getUkrainePopulation = getPopulation.bind(country, 43000);
const populationString = getUkrainePopulation();
console.log(populationString);

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

export function printSpecialTransaction() {
  transaction.printTransaction.call(anotherTransaction);
}
