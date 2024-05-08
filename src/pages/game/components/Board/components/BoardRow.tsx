import { useSize } from "@/resources/options";
import { Player } from "@/resources/players";
import styled from "styled-components";
import { SquareSymbol } from "../../../types";
import { calculateIndex } from "../../../utils/calculateIndex";
import { SYMBOL_MAP } from "../../../utils/symbolMap";
import Square from "./Square";

const StyledRow = styled.div`
  display: flex;
`;

type BoardRowProps = {
	squares: SquareSymbol[];
	onPlayerMove: (newSquares: SquareSymbol[]) => void;
	currentPlayer: Player;
	winningLine: number[];
	showWinningLine: boolean;
	currentWinner: string;
	columnIndex: number;
};

function BoardRow({
	squares,
	onPlayerMove,
	currentPlayer,
	winningLine,
	showWinningLine,
	currentWinner,
	columnIndex,
}: BoardRowProps) {
	const size = useSize();

	function handleClick(i: number) {
		if (squares[i] || currentWinner) return;

		const newSquares = [...squares];
		newSquares[i] = currentPlayer.symbol;
		onPlayerMove(newSquares);
	}

	return (
		<StyledRow>
			{Array.from({ length: size }, (_, rowIndex) => {
				const index = calculateIndex(columnIndex, rowIndex, size);
				const isWinning = showWinningLine && winningLine.includes(index);
				return (
					<Square
						onClick={() => handleClick(index)}
						highlight={isWinning}
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={rowIndex}
					>
						{SYMBOL_MAP.get(squares[index])}
					</Square>
				);
			})}
		</StyledRow>
	);
}

export default BoardRow;
