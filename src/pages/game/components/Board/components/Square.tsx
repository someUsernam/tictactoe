import React from "react";
import styled from "styled-components";

const StyledSquare = styled.div<{ $highlight: boolean }>`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $highlight }) =>
		$highlight ? "lightgreen" : "transparent"};
`;

type SquareProps = {
	children: React.ReactNode;
	onPlayerMove: () => void;
	highlight: boolean;
};

function Square({ children, onPlayerMove, highlight }: SquareProps) {
	function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
		if (event.key === "Enter") {
			onPlayerMove();
		}
	}

	return (
		<StyledSquare
			onClick={onPlayerMove}
			$highlight={highlight}
			tabIndex={0}
			onKeyDown={handleKeyDown}
		>
			{children}
		</StyledSquare>
	);
}
export { Square };
