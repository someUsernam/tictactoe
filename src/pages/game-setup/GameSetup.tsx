import { TicTacToeTitle } from "@/common/components/Title";
import styled from "styled-components";
import GameSetupForm from "./components/GameSetupForm";

const StyledTitle = styled.h1`
  color: var(--primary-color);
  font-size: calc(var(--font-size-xlarge) * 2) ;
`;

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
`;

function GameSetup() {
	return (
		<GameSetupContainer>
			<TicTacToeTitle />
			<StyledSubtitle>
				Please enter the player names and select the game size
			</StyledSubtitle>
			<GameSetupForm />
		</GameSetupContainer>
	);
}

export default GameSetup;
