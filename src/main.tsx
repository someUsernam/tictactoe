import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import ErrorBoundary from "./common/components/ErrorBoundary";
import Layout from "./common/components/Layout";
import Game from "./pages/game";
import ProtectedGameRoute from "./pages/game/components/ProtectedGameRoute";
import Welcome from "./pages/welcome";
import store from "./store/store.ts";
import GameSetup from "./pages/game-setup";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: oklch(64.5% 0.215 16.44);
    --secondary: oklch(86.06% 0.173 91.94);
		--accent: oklch(74.77% 0.207 322.16);
		--elevated: oklch(100% 0 0);
		--elevated-foreground: oklch(0% 0 0);
		--neutral: oklch(96.7% 0.003 264.54);
    --background: oklch(94.82% 0.028 342.26);
		--info: oklch(95.63% 0.044 203.39);
		--success: oklch(93.82% 0.122 124.32);
		--warning: oklch(70.49% 0.187 47.6);
		--error: oklch(62.8% 0.25 29.23);

		--padding-small: 0.5rem;
		--padding-medium: 1rem;
		--padding-large: 1.5rem;
		--padding-xlarge: 2rem;

		--radius: 0.7rem;

		--font-size-small: 0.75rem;
		--font-size-medium: 1rem;
		--font-size-large: 1.25rem;
		--font-size-xlarge: 1.5rem;

		line-height: 1.5;
		font-weight: 400;

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		@media (prefers-color-scheme: dark) {

		}
  }

	html, body, #root {
		height: 100svh;
		width: 100%;
	}

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: var(--background);
		display: flex;
		place-items: center;
  }
`;

const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: "/",
				element: <Welcome />,
			},
			{
				path: "/game-setup",
				element: <GameSetup />,
			},
			{
				path: "/game",
				element: (
					<ProtectedGameRoute>
						<Game />
					</ProtectedGameRoute>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GlobalStyle />
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
