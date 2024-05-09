# Tic-Tac-Toe with React, Redux Toolkit, and React Router

This project implements the classic Tic-Tac-Toe game using modern web development libraries:

- **React**: Enables building interactive user interfaces.
- **Redux Toolkit**: Provides a streamlined approach to managing application state.
- **React Router**: Facilitates navigation between game screens.

## Enhanced Functionality

This Tic-Tac-Toe experience offers several features beyond basic gameplay:

- **Light/Dark Themes**: Choose between light and dark themes for a personalized experience.
- **Winning Line Highlighting**: Visually identify the winning line after a game ends.
- **Score Tracking**: Keep track of wins for personal reference.
- **Customizable Player Names**: Enter player names for a personalized touch.
- **Accessibility**: Designed to be inclusive for users with disabilities.
- **Parametrizable Board Size**: Select different board sizes (e.g., 3x3, 4x4) for varied challenges.
- **Game History**: Review past games and analyze strategies.
- **Clean Design**: Enjoy a visually appealing game board with a focus on functionality.
- **Turn Indicator**: Clearly identifies the current player's turn.

## Running the Project

To run the project, you need to follow these steps:

1. Install the dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

you should see running port in the CLI

## Project structure

- `src/`: Main directory for source code.
  - [`App.tsx`](src/App.tsx): Main application component.
  - [`main.tsx`](src/main.tsx): Entry point of the application.
  - `pages/`: Contains different pages of the application.
    - `game/`: Game page.
    - `game-setup/`: Game setup page.
    - `welcome/`: Welcome page.
  - [`store/`](src/store/store.ts): Contains Redux store and slices for state management.
  - `common/`: Contains common components and utilities.
  - `types/`: Contains TypeScript type definitions.
  - `resources/`: Contains resources related to the game, options, and players.
    - `options/`: Contains resources related to game options, such as board size, game mode, etc.
    - `players/`: Contains resources related to the players, such as player data, types, and hooks.
- `public/`: Directory for public assets.
- [`package.json`](package.json): Contains project dependencies and scripts.
- [`tsconfig.json`](tsconfig.json): Specifies root files and compiler options.
- [`vite.config.ts`](vite.config.ts): Configures Vite, the build tool.
- [`README.md`](README.md): Provides an overview of the project.

## ScreenShots

## Project Overview and Design Decisions

In this section, you can provide a brief description of your project, its purpose, and functionality. You can also explain the design decisions you made during the development of the project and why you made them. This could include choices about architecture, libraries, coding practices, and more.

### Stack

