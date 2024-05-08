import { useSize } from "@/resources/options";
import { PlayerSymbol, usePlayers } from "@/resources/players";
import { setScore } from "@/store/playerSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Board } from "./components/Board";
import { checkDraw } from "./utils/checkDraw";
import { checkWinner } from "./utils/checkWinner";

function Game() {
	const size = useSize();
	const players = usePlayers();
	const [history, setHistory] = useState([Array(size).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const currentSquares: (PlayerSymbol | null)[] = history[currentMove];
	const playerIds = Object.keys(players);
	const currentPlayer = players[playerIds[currentMove % playerIds.length]];
	const [winningLine, setWinningLine] = useState<number[]>([]);
	const [showWinningLine, setShowWinningLine] = useState(false);
	const dispatch = useDispatch();
	const [currentWinner, setCurrentWinner] = useState("");

	function handleMoveTo(move: number) {
		setCurrentMove(move);
		setShowWinningLine(history.length - 1 === move);
	}

	function handlePlay(newSquares: (PlayerSymbol | null)[]) {
		const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);

		const winner = checkWinner(newSquares, size);
		if (winner?.symbol) {
			setWinningLine(winner.winningLine);
			let winnerPlayerId = "";
			for (const [Id, value] of Object.entries(players)) {
				if (value.symbol === winner?.symbol) {
					winnerPlayerId = Id;
					break;
				}
			}

			if (!winnerPlayerId) {
				return;
			}

			setCurrentWinner(`${players[winnerPlayerId].name} wins!`);
			setShowWinningLine(true);

			dispatch(
				setScore({
					playerId: winnerPlayerId,
					score: players[winnerPlayerId].score + 1,
				}),
			);
		}

		if (checkDraw(!!winner, newSquares)) {
			setCurrentWinner("Draw");
		}
	}

	function handleReset() {
		setHistory([Array(size).fill(null)]);
		setCurrentMove(0);
		setWinningLine([]);
		setCurrentWinner("");
	}

	return (
		<div>
			{currentWinner && <h1>{currentWinner}</h1>}
			<h1>currentPlayer {currentPlayer.name}</h1>
			<div>
				<h2>Score</h2>
				<ul>
					{playerIds.map((playerId) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<li key={playerId}>
							{players[playerId].name}: {players[playerId].score}
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
				onPlay={handlePlay}
				winningLine={winningLine}
				showWinningLine={showWinningLine}
				currentWinner={currentWinner}
			/>
		</div>
	);
}
export default Game;
