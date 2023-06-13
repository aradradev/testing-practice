import Calculator, { stringLength, reversed, capitalized } from "./tests";

test('String length:', () => {
  const str = 'React';
  const len = 5;

  expect(stringLength(str)).toBe(len);
})

test('Reversed String of: ', () => {
  const str = 'hello';
  const revers = 'olleh';

  expect(reversed(str)).toBe(revers);
})

describe('Calculator numbers', () => {
  //for the addition
  test('Addition', () => {
    expect(Calculator.add(6, 2)).toBe(8)
  })

  //for the subtraction
  test('Subtract', () => {
    expect(Calculator.subtract(6, 2)).toBe(4)
  })

  //for the multiplication
  test('Multiply', () => {
    expect(Calculator.multiply(6, 2)).toBe(12)
  })

  //for The division
  test('Divide', () => {
    expect(Calculator.divide(6, 2)).toBe(3)
  })
})

test('Capitalized?', () => {
  expect(capitalized('jest')).toBe('Jest')
})
