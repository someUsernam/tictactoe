import { useSize } from "@/resources/options";
import styled from "styled-components";
import { checkWinner } from "../../utils/checkWinner";
import { Square } from "./components/Square";
import { Player } from "@/types";

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledRow = styled.div`
  display: flex;
`;

type BoardProps = {
	squares: (string | null)[];
	onPlay: (newSquares: (string | null)[]) => void;
	currentPlayer: Player;
};

function Board({ squares, onPlay, currentPlayer }: BoardProps) {
	const size = useSize();

	function handleMove(i: number) {
		if (squares[i] || checkWinner(squares, size)) return;

		const newSquares = [...squares];
		newSquares[i] = currentPlayer.symbol === "Cross" ? "X" : "O";
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
							{squares[i * size + j]}
						</Square>
					))}
				</StyledRow>
			))}
		</StyledBoard>
	);
}
export { Board };
