import { useSize } from "@/resources/options";
import { useOrderedPlayers, usePlayers } from "@/resources/players";
import styled from "styled-components";
import Board from "./components/Board";
import Sidebar from "./components/Sidebar";
import { useGameResult } from "./hooks/useGameResult";
import { useMovesState } from "./hooks/useMovesState";
import { SquareSymbol } from "./types";
import { checkWinner } from "./utils/checkWinner";

const StyledGameContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

function Game() {
	const size = useSize();
	const players = usePlayers();
	const orderedPlayers = useOrderedPlayers();
	const {
		currentMove,
		history,
		updateMovesState,
		resetHistory,
		setCurrentMove,
	} = useMovesState();
	const {
		updateWinner,
		resetWinner,
		updateDraw,
		currentWinner,
		winningLine,
		showWinningLine,
		setShowWinningLine,
	} = useGameResult(players);
	const currentSquares: SquareSymbol[] = history[currentMove];
	const currentPlayer = orderedPlayers[currentMove % orderedPlayers.length];

	function handleMoveTo(move: number) {
		setCurrentMove(move);
		setShowWinningLine(history.length - 1 === move);
	}

	function handlePlayerMove(newSquares: SquareSymbol[]) {
		updateMovesState(newSquares);
		const winner = checkWinner(newSquares, size);

		if (winner !== null) {
			updateWinner(winner);
			return;
		}

		updateDraw(!!winner, newSquares);
	}

	function handleReset() {
		resetHistory();
		resetWinner();
	}

	return (
		<StyledGameContainer>
			<Sidebar
				handleMoveTo={handleMoveTo}
				handleReset={handleReset}
				history={history}
				currentWinner={currentWinner}
				currentPlayer={currentPlayer}
			/>
			<Board
				squares={currentSquares}
				currentPlayer={currentPlayer}
				onPlayerMove={handlePlayerMove}
				winningLine={winningLine}
				showWinningLine={showWinningLine}
				currentWinner={currentWinner}
			/>
		</StyledGameContainer>
	);
}

export default Game;
