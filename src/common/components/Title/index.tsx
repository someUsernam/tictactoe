import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: calc(var(--font-size-large) * 3);
  color: var(--primary);
`;

const StyledTitleSpan = styled.span`
  color: var(--secondary);
`;

function TicTacToeTitle() {
	return (
		<StyledTitle>
			Tic <StyledTitleSpan>Tac</StyledTitleSpan> Toe
		</StyledTitle>
	);
}
export { TicTacToeTitle };
