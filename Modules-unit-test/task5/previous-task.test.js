import { reverseArray, withdraw, getAdults } from './previous-task.js';

describe('reverseArray', () => {
  it('should reverse the array', () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  it('should return null if the argument is not an array', () => {
    expect(reverseArray('string')).toBeNull();
  });

  it('should return the reversed copy of the array without modifying the original array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const reversedArray = reverseArray(originalArray);

    expect(reversedArray).toEqual([5, 4, 3, 2, 1]);
    expect(originalArray).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('withdraw', () => {
  const clients = ['Ann', 'Johnny', 'Edem'];
  const balances = [200, 300, 400];
  const client = 'Edem';

  it('should withdraw the amount from the client balance and return the updated balance', () => {
    expect(withdraw(clients, balances, client, 300)).toBe(100);
  });

  it('should return -1 if the client does not exist', () => {
    expect(withdraw(clients, balances, 'John', 100)).toBe(-1);
  });

  it('should return -1 if the client balance is not sufficient', () => {
    expect(withdraw(clients, balances, client, 500)).toBe(-1);
  });
});

describe('getAdults', () => {
  const people = { Johnny: 19, Edem: 20, Bob: 16 };

  it('should return an object with adults (age >= 18)', () => {
    expect(getAdults(people)).toEqual({ Johnny: 19, Edem: 20 });
  });

  it('should return an empty object if there are no adults', () => {
    expect(getAdults({})).toEqual({});
  });

  it('should return an empty object if all people are minors (age < 18)', () => {
    expect(getAdults({ Bob: 16, Alice: 17 })).toEqual({});
  });
});
