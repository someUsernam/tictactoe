import styled from "styled-components";

const StyledSquare = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Square() {
	return <StyledSquare>X</StyledSquare>;
}
export { Square };
