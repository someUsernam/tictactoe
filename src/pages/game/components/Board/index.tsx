import { useSize } from "@/resources/options";
import { Player, PlayerSymbol } from "@/resources/players";
import styled from "styled-components";
import { checkWinner } from "../../utils/checkWinner";
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
};

function Board({ squares, onPlay, currentPlayer }: BoardProps) {
	const size = useSize();

	function handleMove(i: number) {
		if (squares[i] || checkWinner(squares, size)) return;

		const newSquares = [...squares];
		newSquares[i] = currentPlayer.symbol;
		onPlay(newSquares);
	}

	return (
		<StyledBoard>
			{Array.from({ length: size }, (_, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<StyledRow key={i}>
					{Array.from({ length: size }, (_, j) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Square onPlayerMove={() => handleMove(i * size + j)} key={j}>
							{SYMBOL_MAP.get(squares[i * size + j])}
						</Square>
					))}
				</StyledRow>
			))}
		</StyledBoard>
	);
}
export { Board };
