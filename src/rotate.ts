import * as math from 'mathjs';

export type Degree = number;
export type Coord = math.MathType;
export type Point = Coord[];

export const rotate = (theta: Degree) => (point: Point): Point => {
  // Note: we are ignoring more than 2d points.
  const cosTheta = math.cos(math.unit(theta, 'deg'));
  const sinTheta = math.sin(math.unit(theta, 'deg'));

  const x = point[0];
  const y = point[1];

  const xp = math.subtract(math.multiply(x, cosTheta), math.multiply(y, sinTheta));
  const yp = math.add(math.multiply(x, sinTheta), math.multiply(y, cosTheta));

  return [xp, yp];
};
