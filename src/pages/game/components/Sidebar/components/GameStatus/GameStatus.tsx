import { Player } from "@/resources/players";
import styled from "styled-components";

type GameStatusProps = {
	currentPlayer: Player;
	currentWinner: string;
};

const StyledGameStatus = styled.div`
	margin: 0;
  color: var(--text-foreground);
  background-color: var(--primary);
  border-radius: var(--radius);
  width: 100%;
	padding: 0 0.5rem;
  line-height: 1;
	outline: 2px solid var(--primary);
	font-weight: bold;
`;

function GameStatus({ currentPlayer, currentWinner }: GameStatusProps) {
	return (
		<StyledGameStatus>
			<p>turn: {currentPlayer.name}</p>
			<p>winner: {currentWinner}</p>
		</StyledGameStatus>
	);
}
export default GameStatus;
