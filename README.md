# AT00BY10 – Unit Testing Assignment

![CI](https://github.com/Gilabto/AT00BY10/actions/workflows/test.yml/badge.svg)
![Coverage](https://coveralls.io/repos/github/Gilabto/AT00BY10/badge.svg?branch=main)

## Overview

This repository contains unit tests implemented for the AT00BY10 JavaScript utility library as part of a Software Testing course assignment.

The purpose of the assignment was to:
- Implement unit tests for selected parts of the library
- Achieve at least 60 % test coverage
- Integrate automated testing using GitHub Actions
- Report coverage results using Coveralls

Testing the entire library was not mandatory.

---

## Testing Setup

- **Test framework:** Jest
- **Module system:** ES Modules (ESM)
- **Coverage reporting:** Jest + Coveralls
- **CI:** GitHub Actions

The library uses ES modules, therefore Jest was configured to run in ESM mode using Node.js experimental VM module support.

The `.internal` directory was excluded from both testing and coverage reporting as instructed.

---

## Tested Modules

The following public modules were selected and tested:

- `src/add.js`
- `src/divide.js`
- `src/capitalize.js`
- `src/upperFirst.js`

Coverage was explicitly limited to these modules using Jest configuration (`collectCoverageFrom`). Other utility modules were intentionally excluded from the test scope.

---

## Running Tests Locally

```bash
npm install
npm test
``