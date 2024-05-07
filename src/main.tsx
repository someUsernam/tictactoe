import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ErrorBoundary } from "./modules/common/components/ErrorBoundary/index.tsx";
import { Layout } from "./modules/common/components/Layout/index.tsx";
import { CreatePlayers } from "./modules/create-players/components/index.tsx";
import { GameOptions } from "./modules/game-options/index.tsx";
import { Game } from "./modules/game/index.tsx";
import store from "./store/store.ts";

const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: "/",
				element: <App />,
			},
			{
				path: "/create-players",
				element: <CreatePlayers />,
			},
			{
				path: "/game-options",
				element: <GameOptions />,
			},
			{
				path: "/game",
				element: <Game />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
