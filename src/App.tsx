import { Provider, useDispatch } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import store from "./store/store";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #333;
    --secondary-color: #666;
    --background-color: #f5f5f5;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: var(--background-color);;
`;

const Title = styled.h1`
  color: var(--primary-color);
`;

const Subtitle = styled.h2`
  color: var(--secondary-color);
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
`;

function App() {
	const dispatch = useDispatch();

	function handleStartGame(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const player1Name = formData.get("Player1Name") as string;
		const player2Name = formData.get("Player2Name") as string;

		console.log(player1Name, player2Name);

		// dispatch(setPlayer1Name(player1Name));
		// dispatch(setPlayer2Name(player2Name));
	}

	return (
		<Provider store={store}>
			<Container>
				<Title>Tic Tac Toe</Title>
				<Subtitle>Enter players names</Subtitle>
				<form onSubmit={handleStartGame} action="">
					<label htmlFor="Player1Name">Player 1 name</label>
					<Input
						type="text"
						required
						name="Player1Name"
						placeholder="Player 1"
					/>
					<label htmlFor="Player2Name">Player 2 name</label>
					<Input
						type="text"
						required
						name="Player2Name"
						placeholder="Player 2"
					/>
					<button type="submit">Start game</button>
				</form>
			</Container>
		</Provider>
	);
}

export default App;
