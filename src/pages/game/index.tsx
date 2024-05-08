import { useSize } from "@/resources/options";
import { usePlayers } from "@/resources/players";
import { setScore } from "@/store/playerSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Board } from "./components/Board";
import { checkWinner } from "./utils/checkWinner";

function Game() {
	const size = useSize();
	const players = usePlayers();
	const [history, setHistory] = useState([Array(size).fill(null)]);
	const [xIsNext, setXIsNext] = useState(true);
	const [currentMove, setCurrentMove] = useState(0);
	const currentSquares: (string | null)[] = history[currentMove];
	const playerIds = Object.keys(players);
	const currentPlayer = players[playerIds[currentMove % playerIds.length]];
	const dispatch = useDispatch();

	function handleCurrentMove(move: number) {
		setCurrentMove(move);
	}

	function handlePlay(newSquares: (string | null)[]) {
		const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
		setXIsNext(!xIsNext);
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);

		const winner = checkWinner(newSquares, size);
		if (winner) {
			let winnerPlayerId = "";
			for (const [Id, value] of Object.entries(players)) {
				if (String(value.symbol) === winner) {
					winnerPlayerId = Id;
					break;
				}
			}

			if (!winnerPlayerId) {
				return;
			}

			dispatch(
				setScore({
					playerId: winnerPlayerId,
					score: players[winnerPlayerId].score + 1,
				}),
			);
		}
	}

	function handleReset() {
		setHistory([Array(size).fill(null)]);
		setCurrentMove(0);
	}

	return (
		<div>
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
						<button type="button" onClick={() => handleCurrentMove(move)}>
							{move ? `Go to move #${move}` : "Go to game start"}
						</button>
					</li>
				))}
			</ul>
			<Board
				squares={currentSquares}
				currentPlayer={currentPlayer}
				onPlay={handlePlay}
			/>
		</div>
	);
}
export { Game };
