import { Provider } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import { GameContainer } from "./modules/gameContainer";
import store from "./store/store";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #333;
    --secondary-color: #666;
    --background-color: #f5f5f5;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: var(--background-color);;
`;

function App() {
	return (
		<Provider store={store}>
			<StyledContainer>
				<GameContainer />
			</StyledContainer>
		</Provider>
	);
}

export default App;
