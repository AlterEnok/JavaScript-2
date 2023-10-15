const getAdults = (obj) => {
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
