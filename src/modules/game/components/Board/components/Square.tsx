import styled from "styled-components";

const StyledSquare = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type SquareProps = {
	children: React.ReactNode;
	onPlayerMove: () => void;
};

function Square({ children, onPlayerMove }: SquareProps) {
	return <StyledSquare onClick={onPlayerMove}>{children}</StyledSquare>;
}
export { Square };
