import { useSize } from "@/resources/options";
import { Player, PlayerSymbol } from "@/resources/players";
import styled from "styled-components";
import { SYMBOL_MAP } from "../../utils/symbolMap";
import { Square } from "./components/Square";

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledRow = styled.div`
  display: flex;
`;

type BoardProps = {
	squares: (PlayerSymbol | null)[];
	onPlay: (newSquares: (PlayerSymbol | null)[]) => void;
	currentPlayer: Player;
	winningLine: number[];
	showWinningLine: boolean;
	currentWinner: string;
};

function Board({
	squares,
	onPlay,
	currentPlayer,
	winningLine,
	showWinningLine,
	currentWinner,
}: BoardProps) {
	const size = useSize();

	function handleMove(i: number) {
		if (squares[i] || currentWinner) return;

		const newSquares = [...squares];
		newSquares[i] = currentPlayer.symbol;
		onPlay(newSquares);
	}

	return (
		<StyledBoard>
			{Array.from({ length: size }, (_, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<StyledRow key={i}>
					{Array.from({ length: size }, (_, j) => {
						const index = i * size + j;
						const isWinning = showWinningLine && winningLine.includes(index);
						return (
							<Square
								onPlayerMove={() => handleMove(i * size + j)}
								highlight={isWinning}
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={j}
							>
								{SYMBOL_MAP.get(squares[i * size + j])}
							</Square>
						);
					})}
				</StyledRow>
			))}
		</StyledBoard>
	);
}
export { Board };
