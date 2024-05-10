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

### Home page
![Screenshot from 2024-05-09 20-11-29](https://github.com/someUsernam/tictactoe/assets/101038373/2dbec09c-58ec-445a-96b1-d3184646dc75)
### Game setup page
![Screenshot from 2024-05-09 20-11-15](https://github.com/someUsernam/tictactoe/assets/101038373/a61f6d7d-19ae-44b3-8edb-6832c65b5237)
### Game page
![Screenshot from 2024-05-09 20-10-28](https://github.com/someUsernam/tictactoe/assets/101038373/0db8c13d-c2d7-4026-bd1a-69b4aeebc57e)
### Game page (dark mode)
![Screenshot from 2024-05-09 20-10-59](https://github.com/someUsernam/tictactoe/assets/101038373/e9b10449-3ce2-45fd-bcb4-d8047925bdef)

## Project Overview and Design Decisions

In this section,I will provide a brief description of a project, its purpose, and functionality. Also, explain the design decisions during the development of the project. This will include choices about architecture, libraries, coding practices, and more.

### About

### Stack

### Design Decisions

### Architecture

I had to carefully think about state management, namely wether to put game state into Redux store. I decided to keep the game state locally in the `Game`
component because it is a self contained component and we can make many instances of it. This way we can have multiple games running at the same time.
State that is shared between components is kept in the Redux store. This includes the game options, player data.

### Libraries

### Coding Practices

### Testing

Currently, the project have two tests, one for `checkDraw` function and one for `checkWinner` function. I used Vitest for this purpose.

**[checkDraw.test.ts](https://github.com/someUsernam/tictactoe/blob/main/src/pages/game/utils/__tests__/checkDraw.test.ts)**
**[checkWinner.test.ts](https://github.com/someUsernam/tictactoe/blob/main/src/pages/game/utils/__tests__/checkWinner.test.ts)**

### Accessibility

### Future Improvements

### Conclusion

