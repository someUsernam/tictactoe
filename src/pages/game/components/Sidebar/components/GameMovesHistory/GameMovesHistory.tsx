import styled from "styled-components";
import { SquareSymbol } from "../../../../types";
import GameMovesHistoryItem from "./components/GameMovesHistoryItem";

type GameMovesHistoryProps = {
	history: SquareSymbol[][];
	handleMoveTo: (move: number) => void;
};

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  max-height: 50vh;
	text-align: center;
  scrollbar-width: thin;
  scrollbar-color: var(--primary) var(--elevated);
  border-radius: var(--radius);
`;

function GameMovesHistory({ history, handleMoveTo }: GameMovesHistoryProps) {
	return (
		<StyledList>
			{history.map((_, move) => (
				<GameMovesHistoryItem
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={move}
					move={move}
					handleMoveTo={handleMoveTo}
				/>
			))}
		</StyledList>
	);
}
export default GameMovesHistory;
