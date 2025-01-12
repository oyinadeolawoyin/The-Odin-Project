# Testing Practice

This project is part of The Odin Project's JavaScript Full Stack Curriculum, focusing on practicing testing with Jest. The primary goal is to build and test small JavaScript utility functions to ensure they work as expected.

---

## Project Overview

In this project, I implemented various JavaScript functions and wrote tests to verify their correctness using Jest. The practice helped reinforce the importance of writing reliable, maintainable code and the value of test-driven development (TDD).

---

## Features

### Functions Implemented:

1. **capitalize**

   - **Description**: Capitalizes the first character of a string.
   - **Example**:
     ```javascript
     capitalize("hello"); // "Hello"
     ```

2. **reverseString**

   - **Description**: Reverses the given string.
   - **Example**:
     ```javascript
     reverseString("hello"); // "olleh"
     ```

3. **analyzeArray**

   - **Description**: Analyzes an array of numbers and returns an object containing the average, min, max, and length.
   - **Example**:
     ```javascript
     analyzeArray([1, 8, 3, 4, 2, 6]);
     // { average: 4, min: 1, max: 8, length: 6 }
     ```

---

## Tests

### Testing Framework:

- **Jest**: A JavaScript testing framework used to write and run tests.

### Example Tests:

1. **capitalize function**:

   ```javascript
   const capitalize = require("./capitalize");

   test("Capitalizes the first letter of a string", () => {
       expect(capitalize("hello")).toBe("Hello");
   });
   ```

2. **reverseString function**:

   ```javascript
   const reverseString = require("./reverseString");

   test("Reverses a string", () => {
       expect(reverseString("hello")).toBe("olleh");
   });
   ```

3. **analyzeArray function**:

   ```javascript
   const analyzeArray = require("./analyzeArray");

   test("Analyzes an array correctly", () => {
       expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
           average: 4,
           min: 1,
           max: 8,
           length: 6,
       });
   });
   ```

---

## Installation and Usage

### Prerequisites:

- Node.js
- npm

### Steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/oyinadeolawoyin/The-Odin-Project/blob/main/javascript/Testing/Assignment.js
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run tests:

   ```bash
   npm test
   ```

---

## What I Learned

- Writing unit tests with Jest.
- Using matchers like `toBe`, `toEqual`, and `toThrow`.
- Debugging code with the help of tests.
- The importance of TDD in software development.

---

## Acknowledgments

- **The Odin Project**: For the curriculum and guidance.
- **Jest Documentation**: For insights on how to write effective tests.