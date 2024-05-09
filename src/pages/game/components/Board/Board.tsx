import { useSize } from "@/resources/options";
import { Player } from "@/resources/players";
import styled from "styled-components";
import { SquareSymbol } from "../../types";
import BoardRow from "./components/BoardRow";

const StyledBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
	overflow: hidden;
	border-radius: var(--radius);
	border: 1rem solid var(--elevated);
	outline:  4px dashed var(--primary);
	grid-column: 2 / -1;
	place-self: center;
	background-color: var(--elevated);
	margin: 0 auto;
`;

const StyledBoard = styled.div`
	overflow: hidden;
	background-color: var(--elevated);
	border-radius: var(--radius);
`;

type BoardProps = {
	squares: SquareSymbol[];
	onPlayerMove: (newSquares: SquareSymbol[]) => void;
	currentPlayer: Player;
	winningLine: number[];
	showWinningLine: boolean;
	currentWinner: string;
};

function Board(props: BoardProps) {
	const size = useSize();

	return (
		<StyledBoardContainer>
			<StyledBoard>
				{Array.from({ length: size }, (_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<BoardRow key={i} columnIndex={i} {...props} />
				))}
			</StyledBoard>
		</StyledBoardContainer>
	);
}

export default Board;
