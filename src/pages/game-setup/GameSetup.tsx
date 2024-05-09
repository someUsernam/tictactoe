import { TicTacToeTitle } from "@/common/components/Title";
import styled from "styled-components";
import GameSetupForm from "./components/GameSetupForm";

const StyledSubtitle = styled.h2`
  color: var(--secondary-color);
  font-size: var(--font-size-medium);
  padding: 1rem;
  background-color: var(--info);
  border-radius: var(--radius);
`;

const GameSetupContainer = styled.div`
  text-align: center;
  padding: 1rem;
  border-radius: var(--radius);
  background-color: var(--elevated);
  border: 0.3rem dashed var(--primary);
  max-width: 30rem;
`;

function GameSetup() {
	return (
		<GameSetupContainer>
			<TicTacToeTitle />
			<StyledSubtitle>
				Please enter the player names and select the game size. Note that the
				size of the board also determines the number of consecutive elements
				needed for a win.
			</StyledSubtitle>
			<GameSetupForm />
		</GameSetupContainer>
	);
}

export default GameSetup;
