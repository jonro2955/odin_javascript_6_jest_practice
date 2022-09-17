# Using Jest for Test driven development.

https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/testing-practice

To run the tests, run `npm test`

The most common test matchers are `.toBe()` and `.toEqual()`.

## Common matchers and their examples:

**Truthiness:**
```
.toBeNull() matches only null
.toBeUndefined() matches only undefined
.toBeDefined() is the opposite of toBeUndefined
.toBeTruthy() matches anything that an if statement treats as true
.toBeFalsy() matches anything that an if statement treats as false

Examples:

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
```
**Numbers:**
```
.toBeGreaterThan(3)
.toBeGreaterThanOrEqual(3.5)
.toBeLessThan(5)
.toBeLessThanOrEqual(4.5)
.toBe(4)
.toEqual(4)

For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3); This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); 
});
```
**Strings:**
```
Use regular expressions with toMatch(). Examples:

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```
**Arrays and iterables**
```
Check if an array or iterable contains a particular item using toContain:

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
```
**Exceptions**
```
If you want to test whether a particular function throws an error when it's called, use toThrow.

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

Note: the function that throws an exception needs to be invoked within a wrapping function otherwise the toThrow assertion will fail.
```
**Here is the link to Jest's "commonly used" matchers documentation page:**

https://jestjs.io/docs/using-matchers
