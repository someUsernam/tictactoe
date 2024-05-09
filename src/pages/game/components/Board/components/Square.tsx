import styled from "styled-components";

const StyledSquare = styled.div<{ $highlight: boolean }>`
	box-sizing: border-box;
	border-collapse: collapse;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $highlight }) =>
		$highlight ? "var(--secondary)" : "var(--primary)"};
	color: var(--text-forground);
	font-weight: 800;
	font-size: var(--font-size-xlarge);
	border: 1px dashed var(--elevated);
	transition: background-color 0.2s;

	&:hover {
		background-color: color-mix(in oklch, var(--primary), var(--elevated) 50%);
	}
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
