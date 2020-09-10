import { rotate } from '../src';
import './customMatchers';

const pSource = [-1.0, 3.0];
const rotate180 = rotate(180);

describe('rotate 2d point', () => {
  test('it rotates a point by 180 deg', () => {
    const pExpected = [1.0, -3.0];
    const pActual = rotate180(pSource);

    expect(pActual).toMatchPoint(pExpected);
  });

  test('it rotates a point by 180 deg and -180 deg with same result', () => {
    const pExpected = rotate(180)(pSource);
    const pActual = rotate(-180)(pSource);

    expect(pActual).toMatchPoint(pExpected);
  });

  test('it rotates a point by 37 deg', () => {
    const pExpected = [-2.60408057950343768, 1.7940915069898302];
    const pActual = rotate(37)(pSource);

    expect(pActual).toMatchPoint(pExpected);
  });

  test('it rotates a zero by 90 deg', () => {
    const pExpected = [0, 0];
    const pActual = rotate(90)([0, 0]);

    expect(pActual).toMatchPoint(pExpected);
  });
});
