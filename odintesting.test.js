const { sum, capitalize, reverseString, calculator, caesarCipher } = require('./odintesting')

test('two plus two is four', () => {
  expect(sum(2, 2)).toBe(4);
});

test ('first character capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test ('string is reversed', () => {
  expect(reverseString('hello')).toBe('olleh')
});

test ('calculator adds', () => {
  expect(calculator.add(1, 2)).toBe(3)
});

test ('calculator subtracts', () => {
  expect(calculator.subtract(1, 1)).toBe(0)
});

test ('calculator divides', () => {
  expect(calculator.divide(4, 2)).toBe(2)
});

test ('calculator multiplies', () => {
  expect(calculator.multiply(2, 2)).toBe(4)
});

test ('caesarCipher wrapping', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc')
});

test ('casarCipher test case preservation', () => {
  expect(caesarCipher('Hello', 3)).toBe('Khoor')
});

test ('casarCipher test punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
});

