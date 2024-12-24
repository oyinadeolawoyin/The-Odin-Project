# Knight's Travails

This project is a solution to the classic "Knight's Travails" problem, where the goal is to find the shortest path for a knight to move from a starting position to a target position on a standard 8x8 chessboard. The implementation leverages graph traversal and breadth-first search (BFS) to ensure the most efficient path is calculated.

---

## Features
- **Accurate Knight Movement Logic**: Generates all valid moves for a knight from its current position.
- **Graph Representation**: Structures moves in a graph-like format for efficient traversal.
- **Breadth-First Search**: Ensures the shortest path is found from the starting position to the target.
- **Verbose Path Tracking**: Outputs each move in the sequence from the start to the target.

---

## Getting Started

### Prerequisites
- Node.js installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/oyinadeolawoyin/The-Odin-Project/tree/main/javascript/Knights-travails
   ```
2. Navigate to the project directory:
   ```bash
   cd knight-travails
   ```
3. Install dependencies (if applicable):
   ```bash
   npm install
   ```

### Usage

1. Import the function into your script:
   ```javascript
   import { knightsMoves } from './knight-travail.js';
   ```

2. Call the `knightsMoves` function with a starting position and target position:
   ```javascript
   knightsMoves([0, 0], [7, 7]);
   ```

3. Output:
   ```text
   You made it in X moves! Here is your path:
   (0, 0)
   (2, 1)
   (4, 2)
   ...
   Target: [7, 7]
   ```

---

## Code Overview

### 1. `moves(row, col, path)`
Generates all possible moves for a knight from a given position while tracking the path taken.

### 2. `graph(array)`
Filters valid moves and structures them in a graph-like format to facilitate traversal.

### 3. `knightsMoves(start, target)`
Performs a breadth-first search to find the shortest path from the starting position to the target. Outputs the path and the number of moves.

---

## Example

```javascript
import { knightsMoves } from './knight-travail.js';

knightsMoves([3, 3], [4, 3]);
```

Output:
```text
You made it in 3 moves! Here is your path:
(3, 3)
(5, 4)
(4, 2)
(4, 3)
Target: [4, 3]
```

---

## Testing
Test various cases to ensure correctness:

1. Same starting and target position:
   ```javascript
   knightsMoves([0, 0], [0, 0]);
   ```
   Output: `You made it in 0 moves! Here is your path: (0, 0)`

2. Target at the opposite corner:
   ```javascript
   knightsMoves([0, 0], [7, 7]);
   ```

3. Invalid positions:
   ```javascript
   knightsMoves([-1, 0], [8, 8]);
   ```
   Output: `Invalid start or target position.`

---

## Acknowledgments
- The Odin Project for inspiring this project.
- Chess enthusiasts for motivating algorithmic solutions to classic problems.
