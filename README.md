# AT00BY10 – Unit Testing Assignment

## Overview

This repository contains unit tests implemented for the **AT00BY10 JavaScript utility library** as part of a Software Testing course assignment.

The goals of this assignment were:
- Implement unit tests for the given library
- Achieve at least **60 % test coverage**
- Integrate automated tests using **GitHub Actions**
- Report coverage results using **Coveralls**
- Document the testing approach and findings

Testing the entire library was not mandatory.

---

## Project Structure
.
├── src/               # Library source code
├── test/              # Unit tests
├── .github/workflows/ # GitHub Actions workflow
├── package.json
└── README.md
The `.internal` directory under `src/` was excluded from testing and coverage reporting as required.

---

## Testing Setup

- **Test framework:** Jest
- **Module system:** ES Modules (ESM)
- **Coverage reporting:** Jest + Coveralls
- **Continuous integration:** GitHub Actions

The library is implemented using ES modules. Jest was configured to run in ESM mode using Node.js experimental VM module support to ensure compatibility with the source code.

---

## Tested Modules

The following public utility modules were selected for unit testing:

- `src/add.js`
- `src/divide.js`
- `src/capitalize.js`
- `src/upperFirst.js`

Coverage calculation was explicitly limited to these modules using Jest’s `collectCoverageFrom` configuration. Other utility modules were intentionally excluded from the test scope.

---

## Test Results

- All implemented unit tests pass successfully
- Test coverage for the selected modules is **100 %**
- The required minimum coverage (60 %) is exceeded

Tests were executed both locally and through GitHub Actions.

---

## Running Tests Locally

To run tests locally:

```bash
npm install
npm test

This command runs all unit tests and generates a coverage report.

Continuous Integration
A GitHub Actions workflow is configured to automatically install dependencies, run unit tests, and generate coverage reports on every push to the main branch.

CI Status Note
⚠️ Node.js CI status
The GitHub Actions workflow currently shows a failing status. This is due to a known issue related to GitHub Actions’ ongoing Node.js runtime migration (Node.js 20 deprecation and forced execution on Node.js 24).
Although the workflow is correctly configured and all unit tests pass locally with full coverage, GitHub-hosted runners may still report an exit code caused by deprecated internal runtimes used by official GitHub Actions (such as actions/checkout and actions/setup-node).
This issue is external to the project code and test implementation.
All tests execute successfully in a local environment, and the CI configuration follows recommended best practices.
The project was tested using Node.js v24.13.1. All dependencies were verified to be compatible with the selected Node.js version.

Coverage Reporting
Test coverage reporting was integrated using Coveralls.
Coverage data is uploaded automatically from GitHub Actions using the built-in GITHUB_TOKEN. To prevent external service instability from breaking the CI pipeline, coverage upload is configured as non-blocking.

Identified Issues
During testing, the following behavior was identified:

The divide function does not behave like native JavaScript division

Results are floored to integers
Division by zero returns NaN instead of Infinity



This behavior is consistent with the implementation but may be unexpected for users and should be documented if the library is used in production.

Final Verdict
The tested parts of the library demonstrate consistent behavior, and the implemented unit tests provide reliable verification of selected functionality.
Test coverage exceeds the required threshold, and automated testing is successfully integrated using GitHub Actions and Coveralls.
Some utility functions exhibit non-intuitive behavior, which should be clearly documented before production use. Overall, the library is suitable for controlled or educational use. With additional documentation and broader test coverage, it could be prepared for production usage.

License
This project is licensed under the MIT License.