import { Provider } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import { StartGame } from "./modules/startGame/components";
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

function App() {
	function playersExists() {
		return (
			store.getState().player.player1Name !== "" &&
			store.getState().player.player2Name !== ""
		);
	}

	return (
		<Provider store={store}>
			<Container>
				<StartGame />
			</Container>
		</Provider>
	);
}

export default App;
