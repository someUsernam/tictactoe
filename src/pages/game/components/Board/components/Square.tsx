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
	onClick: () => void;
	highlight: boolean;
};

function Square({ children, onClick, highlight }: SquareProps) {
	function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
		if (event.key === "Enter") {
			onClick();
		}
	}

	return (
		<StyledSquare
			onClick={onClick}
			$highlight={highlight}
			tabIndex={0}
			onKeyDown={handleKeyDown}
		>
			{children}
		</StyledSquare>
	);
}

export default Square;
