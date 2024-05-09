import { Button } from "@/common/components/Button";
import styled from "styled-components";

type GameMovesHistoryItemProps = {
	move: number;
	handleMoveTo: (move: number) => void;
};

const StyledListItem = styled.li`
  padding: 0.2rem;
`;

function GameMovesHistoryItem({
	move,
	handleMoveTo,
}: GameMovesHistoryItemProps) {
	return (
		<StyledListItem>
			<Button type="button" onClick={() => handleMoveTo(move)}>
				{move ? `Go to move #${move}` : "Go to game start"}
			</Button>
		</StyledListItem>
	);
}
export default GameMovesHistoryItem;
