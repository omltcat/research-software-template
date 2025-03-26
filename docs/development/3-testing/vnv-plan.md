# Verification and Validation Plan

## Objectives
> What are we trying to achieve with the VnV process?

## Team
> Who is responsible for what?

- XXX: Responsibilities
- AAA (Developer): Write test cases... Implement automated tests and Continuous Integration (CI)... Ensure coding standards...
- BBB (Domain Expert): Provide test cases... Review document...
- CCC: Review document...
- DDD: Secondary reviewer of document...
- EEE: Secondary reviewer of document...

## Automated Tools
> What tools are we using for testing?

- Continuous Integration (CI) tool: GitHub Actions to run automated tests on every pull request/every commit to the main branch.
- System and unit tests: pytest, Google Test, etc.
- Code coverage: pytest-cov, codecov.io, etc. What is the target code coverage?
- Linters: flake8, pylint, etc.