import { useSize } from "@/resources/options";
import { Player } from "@/resources/players";
import styled from "styled-components";
import { SquareSymbol } from "../../types";
import BoardRow from "./components/BoardRow";

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
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
		<StyledBoard>
			{Array.from({ length: size }, (_, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<BoardRow key={i} columnIndex={i} {...props} />
			))}
		</StyledBoard>
	);
}

export default Board;
