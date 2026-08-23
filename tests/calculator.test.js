const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator Operations', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds positive and negative number', () => {
      expect(add(-1, 1)).toBe(0);
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts resulting in negative number', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(4, 3)).toBe(12);
    });

    test('multiplies positive and negative number', () => {
      expect(multiply(-2, 3)).toBe(-6);
    });

    test('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('divides two numbers evenly', () => {
      expect(divide(6, 3)).toBe(2);
    });

    test('divides with decimal result', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });
  });
});