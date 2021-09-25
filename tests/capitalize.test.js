import capitalize from '../functions/capitalize.js';

test('capitalize(string)', () => {
  expect(capitalize('this string')).toBe('This string');
});
