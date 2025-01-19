# Battleship Game

## Overview

This is a **Battleship** game project, the final project in the Full-Stack JavaScript curriculum by The Odin Project. The game is implemented using HTML, CSS, and JavaScript, and it demonstrates key concepts such as DOM manipulation, modular code structure, and test-driven development.

## Live Demo

- Check out the live version of the project here:  
  [Live Demo: Battleship Game](https://battleship-odin-project.netlify.app/)


## Features

- **Player vs. Computer Gameplay:** Compete against an AI opponent.
- **Randomized Ship Placement:** Ships are randomly placed on the board for both the player and the computer.
- **Game Logic:** Includes attacking, tracking hits/misses, and determining when all ships have been sunk.
- **Interactive User Interface:** Dynamic board updates and visual feedback for hits and misses.
- **Responsive Design:** Ensures the game looks good on different screen sizes.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/oyinadeolawoyin/The-Odin-Project/tree/main/javascript/Battleship
   ```
2. Navigate to the project directory:
   ```bash
   cd battleship
   ```
3. Install dependencies (if applicable):
   ```bash
   npm install
   ```
4. Build the project (if using Webpack):
   ```bash
   npm run build
   ```

## Usage

1. Open the `index.html` file in your browser, or run a local development server:
   ```bash
   npm run start
   ```
2. Play the game by clicking on the enemy's grid to attack their ships.
3. The game ends when all ships on one side are sunk.

## How to Play

1. Ships are automatically placed on the grid.
2. Take turns with the computer to attack.
3. A hit is marked with a red square; a miss is marked with a green square.
4. Sink all of the opponent's ships to win.

## Code Highlights

### Modular Structure

The code is organized into modules for maintainability:

- **gameBoard.js:** Handles the game board logic.
- **ship.js:** Manages ship properties and states.
- **player.js:** Includes logic for both the player and computer.
- **index.js:** Handles DOM manipulation and game flow.

### Test-Driven Development (TDD)

All core functionalities are tested using **Jest** to ensure reliability and correctness:

- Ship creation and health tracking.
- Gameboard logic for placing ships and handling attacks.
- AI functionality for random attacks.

Run tests using:

```bash
npm test
```

## Technologies Used

- **HTML:** Structure of the web page.
- **CSS:** Styling and layout.
- **JavaScript (ES6):** Game logic and interactivity.
- **Webpack:** Module bundling.
- **Jest:** Unit testing framework.

## Acknowledgments

This project was inspired and guided by [The Odin Project](https://www.theodinproject.com/) curriculum.
