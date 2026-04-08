import divide from '../src/divide.js';

describe('divide', () => {
  test('divides numbers and floors the result', () => {
    expect(divide(10, 2)).toBe(1);
  });

  test('decimal division is floored to integer', () => {
    expect(divide(3, 2)).toBe(1);
  });

  test('division by zero returns NaN', () => {
    expect(Number.isNaN(divide(5, 0))).toBe(true);
  });
});
