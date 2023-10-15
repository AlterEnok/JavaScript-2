const contacts = [
  {
    name: 'Tom',
    phoneNumber: '666-66-66',
  },

  {
    name: 'John',
    phoneNumber: '555-55-55',
  },
  {
    name: 'Tony',
    phoneNumber: '333-33-33',
  },
  {
    name: 'Stephan',
    phoneNumber: '444-44-44',
  },
  {
    name: 'Monica',
    phoneNumber: '111-11-11',
  },
  {
    name: 'Conor',
    phoneNumber: '222-22-22',
  },
];

const sortContacts = (contacts, isAsc = true) => {
  if (!Array.isArray(contacts)) {
    return null;
  }

  const result = contacts.sort((a, b) => {
    return isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });

  return result;
};

console.log(sortContacts(contacts));
