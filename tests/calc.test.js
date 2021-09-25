import calc from '../functions/calc.js';

test('calc', () => {
  expect(calc.add(1, 2)).toBe(3);
  expect(calc.subtract(3, 2)).toBe(1);
  expect(calc.divide(6, 3)).toBe(2);
  expect(calc.multiply(2, 5)).toBe(10);
});
