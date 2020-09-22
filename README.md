<p align="center"><img src="https://raw.githubusercontent.com/lparolari/axisly/master/docs/logo.svg" width="400"></p>

# Axisly

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/lparolari/axisly.svg)
![GitHub repo size](https://img.shields.io/github/repo-size/lparolari/axisly.svg)
![npm](https://img.shields.io/npm/dm/axisly.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/lparolari/axisly.svg)
![npm collaborators](https://img.shields.io/npm/collaborators/lparolari/axisly.svg)

> A 2d point rotator writtent in functional TypeScript.

## Install

```
npm install axisly

# ow, with yarn
yarn add axisly
```

## Usage

**The gist**

```typescript
import { rotate } from "axisly";

const p1 = [0, 1];
const p2 = rotate(90)(p1);
```

### Advanced usage

We can use simple functional programming features in order to obtain
advanced behaviours. For example, the following code shows how we can
rotate a with multiple rotations in a clean way.

**Usage with ramdajs**

```typescript
import { map, pipe, repeat, zip } from 'ramda';

const p = [1, 1];
const rotations = [0, 90, 180, 270];

const rotatedPoints = pipe(
    zip(repeat(rotations.length, p), rotations),
    map(([p, r]) => rotate(r)(p)),
);

console.log(rotatedPoints);
// [ [1, 1], [1, -1], [-1, -1], [-1, 1], ];
```

**Usage with fp-ts**

```typescript
import { pipe } from "fp-ts/lib/pipeable";
import * as A from "fp-ts/lib/Array";

const p = [1, 1];
const rotations = [0, 90, 180, 270];

const rotatedPoints = pipe(
    A.zip(A.replicate(rotations.length, p), rotations),
    A.map(([p, r]) => rotate(r)(p)),
);

console.log(rotatedPoints);
// [ [1, 1], [1, -1], [-1, -1], [-1, 1], ];
```

## Author

**Luca Parolari**

- Github [@lparolari](https://github.com/lparolari)
- Email [luca.parolari23@gmail.com](mailto:luca.parolari23@gmail.com)

## License

This project is MIT licensed. See [LICENSE](license) file.
