import { createCalculator } from './index.js';
const calculator = createCalculator();
const calculatorNext = createCalculator();

calculator.getMemo();
calculator.add(3);
calculator.getMemo();
calculator.decrease(5);
calculator.getMemo();

calculatorNext.add(5);
calculatorNext.getMemo();

calculator.getMemo();
calculator.reset();
calculator.getMemo();

calculatorNext.getMemo();
