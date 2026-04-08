import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
  test('capitalizes first letter of a lowercase word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('lowercases remaining letters', () => {
    expect(capitalize('hELLO')).toBe('Hello');
  });

  test('returns empty string when input is empty', () => {
    expect(capitalize('')).toBe('');
  });
});
