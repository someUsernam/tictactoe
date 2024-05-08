import { Button } from "@/common/components/Button";
import styled from "styled-components";
import SymbolsContainer from "./components/SymbolsContainer";
import { links } from "@/common/consts/Links";

const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: calc(var(--font-size-large) * 3);
  color: var(--primary);
`;

const TitleSpan = styled.span`
  color: var(--secondary);
`;

function Welcome() {
	return (
		<StyledWelcome>
			<Title>
				Tic <TitleSpan>Tac</TitleSpan> Toe
			</Title>
			<SymbolsContainer />
			<Button href={links.options} size="large">
				Enter game
			</Button>
		</StyledWelcome>
	);
}
export default Welcome;
