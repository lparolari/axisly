import { equal, MathType } from 'mathjs';
import { Point } from '../src';

declare global {
  namespace jest {
    interface Matchers<R> {
      toMathEqual(expected: MathType): R;
      toMatchPoint(expected: Point): R;
    }
  }
}

expect.extend({
  toMathEqual(actual: MathType, expected: MathType) {
    return equal(actual, expected)
      ? {
          pass: true,
          message: () => `Expected ${actual} not to be mathematically equal to ${expected}`,
        }
      : {
          pass: false,
          message: () => `Expected ${actual} to be mathematically equal to ${expected}`,
        };
  },
});

expect.extend({
  toMatchPoint(actual: Point, expected: Point) {
    return equal(actual[0], expected[0]) && equal(actual[1], expected[1])
      ? {
          pass: true,
          message: () => `Expected ${actual} not to match point ${expected}`,
        }
      : {
          pass: false,
          message: () => `Expected ${actual} to match point ${expected}`,
        };
  },
});

export default undefined;
