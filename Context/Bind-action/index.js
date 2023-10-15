export function calculator(a, b) {
  switch (this.operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
}

export const multiplier = calculator.bind({ operation: '*' });
export const sumator = calculator.bind({ operation: '+' });
export const twice = calculator.bind({ operation: '*' }, 2);
