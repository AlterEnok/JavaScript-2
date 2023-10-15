import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should return the square of the minimum absolute number', () => {
  expect(getMinSquaredNumber([-777, 3, -2, 6, 45, -20])).toBe(4);
});

it('should return null if the argument is not an array or is an empty array', () => {
  expect(getMinSquaredNumber([])).toBe(null);
  expect(getMinSquaredNumber('string')).toBe(null);
});
