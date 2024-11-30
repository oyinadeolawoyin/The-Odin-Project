# Recursion and Sorting Folder

This folder contains the implementation of two recursive functions, **Fibonacci** and **Merge Sort**, showcasing the use of recursion in generating number sequences and sorting arrays.

## Functions

### 1. `fibs` Function
The `fibs` function generates the first `n` numbers of the Fibonacci sequence using an iterative approach. The Fibonacci sequence starts with `0` and `1`, and each subsequent number is the sum of the previous two.

- **How it works**:
  - Starts with the first two numbers (`0` and `1`).
  - Iteratively calculates the next numbers by summing the last two numbers.
  - Returns the Fibonacci sequence as an array.

- **Example**:
  ```javascript
  console.log(fibs(12)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
  ```

---

### 2. `fibsRec` Function
The `fibsRec` function generates the Fibonacci sequence recursively. It starts with `0` and `1` and keeps calculating the next number in the sequence by recursively calling the function with the updated values.

- **How it works**:
  - Uses a recursive approach to calculate the Fibonacci sequence.
  - Base case is when `n` equals `2`, returning an empty array.
  - The function appends the next Fibonacci number to the sequence by calling itself recursively.

- **Example**:
  ```javascript
  console.log(fibsRec(12, 0, 1)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
  ```

---

### 3. `mergeSort` Function
The `mergeSort` function is a sorting algorithm that uses the **merge sort** technique. It recursively divides the array into halves, sorts each half, and then merges them back together in sorted order.

- **How it works**:
  1. The array is recursively split into two halves.
  2. Each half is sorted by calling the `mergeSort` function on it.
  3. The sorted halves are merged by comparing the elements and choosing the smaller one at each step.


- **Example**:
  ```javascript
  console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 10, 17, 15, 27, 34, 9, 2, 6, 100]));
  // Output: [0, 1, 1, 2, 2, 3, 5, 6, 8, 9, 10, 13, 15, 17, 27, 34, 100]
  ```

---

## How to Use

1. Clone this repository to your local machine.
2. Navigate to the folder containing the functions.
3. Use the functions directly in your JavaScript code or test them in a console.