import { calc } from './calculator.js';

describe('calc', () => {
  it('should correctly calculate addition', () => {
    expect(calc('2 + 3')).toBe('2 + 3 = 5');
  });

  it('should correctly calculate substraction', () => {
    expect(calc('8 - 3')).toBe('8 - 3 = 5');
  });

  it('should correctly calculate multiplication', () => {
    expect(calc('4 * 9')).toBe('4 * 9 = 36');
  });

  it('should correctly calculate division', () => {
    expect(calc('10 / 2')).toBe('10 / 2 = 5');
  });

  it('should return null if expression is not a string', () => {
    expect(calc(123)).toBe(null);
  });
});
