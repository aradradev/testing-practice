//Task1 is to create a function string length and throw an error when the string length is not between 1 and 10
const stringLength = (str) => {
  if (str.length < 1 || str.length > 10) {
    throw new Error('The string length must be between 1 and 10');
  }

  return str.length;
}

//Task2 is to create a function that reverse a string
const reversed = (str) => {
  let output = '';
  for (let i = 0; i < str.length; i++) {
    output = str[i] + output;
  }

  return output;
}

// Task3 is to create a class for calculator
export default class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }
}

const capitalized = (str) => {
  const firstLetterSlice = str.slice(1);
  const capitalLetter = str.charAt(0).toUpperCase() + firstLetterSlice;

  return capitalLetter;
}

export { stringLength, reversed, capitalized };
