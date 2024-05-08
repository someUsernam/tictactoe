import { useSize } from "@/resources/options";
import { useOrderedPlayers, usePlayers } from "@/resources/players";
import Board from "./components/Board";
import { useGameResult } from "./hooks/useGameResult";
import { useMovesState } from "./hooks/useMovesState";
import { SquareSymbol } from "./types";
import { checkWinner } from "./utils/checkWinner";

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
		<div>
			{currentWinner && <h1>{currentWinner}</h1>}
			<h1>currentPlayer {currentPlayer.name}</h1>
			<div>
				<h2>Score</h2>
				<ul>
					{orderedPlayers.map((player) => (
						<li key={player.id}>
							{players[player.id].name}: {players[player.id].score}
						</li>
					))}
				</ul>
			</div>
			<button type="button" onClick={handleReset}>
				reset
			</button>
			<ul>
				{history.map((_, move) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<li key={move}>
						<button type="button" onClick={() => handleMoveTo(move)}>
							{move ? `Go to move #${move}` : "Go to game start"}
						</button>
					</li>
				))}
			</ul>
			<Board
				squares={currentSquares}
				currentPlayer={currentPlayer}
				onPlayerMove={handlePlayerMove}
				winningLine={winningLine}
				showWinningLine={showWinningLine}
				currentWinner={currentWinner}
			/>
		</div>
	);
}

export default Game;
