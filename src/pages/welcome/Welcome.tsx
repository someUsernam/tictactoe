import { Button } from "@/common/components/Button";
import styled from "styled-components";
import SymbolsContainer from "./components/SymbolsContainer";
import { links } from "@/common/consts/Links";
import { TicTacToeTitle } from "@/common/components/Title";

const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 2rem;
`;

function Welcome() {
	return (
		<StyledWelcome>
			<TicTacToeTitle />
			<SymbolsContainer />
			<Button href={links.setup} size="large">
				Enter game
			</Button>
		</StyledWelcome>
	);
}

export default Welcome;
