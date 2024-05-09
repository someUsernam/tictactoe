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

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
