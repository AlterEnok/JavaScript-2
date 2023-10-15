const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

const getCustomersList = (obj) => {
  return Object.entries(obj)
    .map(([id, customer]) => ({ ...customer, id }))
    .sort((a, b) => a.age - b.age);
};

[
  {
    name: 'Tom',
    age: 17,
    id: 'customer-id-2',
  },
  {
    name: 'William',
    age: 54,
    id: 'customer-id-1',
  },
];
const result = getCustomersList(customers);
console.log(result);
