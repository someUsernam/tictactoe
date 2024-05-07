import styled from "styled-components";
import { PlayerForm } from "./PlayerForm";

const StyledTitle = styled.h1`
  color: var(--primary-color);
`;

const StyledSubtitle = styled.h2`
  color: var(--secondary-color);
`;

function CreatePlayers() {
	return (
		<>
			<StyledTitle>Tic Tac Toe</StyledTitle>
			<StyledSubtitle>Enter players names</StyledSubtitle>
			<PlayerForm />
		</>
	);
}
export { CreatePlayers };
