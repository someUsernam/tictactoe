import { useSize } from "@/resources/options";
import { usePlayers } from "@/resources/players";
import { useState } from "react";
import { Board } from "./components/Board";

// {
// 	player1: { name: 'sdf', score: 0, symbol: 'Cross' },
//  player2: { name: 'sdd', score: 0, symbol: 'Circle' }
// }

function Game() {
	const size = useSize();
	const players = usePlayers();
	const [history, setHistory] = useState([Array(size).fill(null)]);
	const [xIsNext, setXIsNext] = useState(true);
	const [currentMove, setCurrentMove] = useState(0);
	const currentSquares: (string | null)[] = history[currentMove];
	const playerIds = Object.keys(players);
	const currentPlayer = players[playerIds[currentMove % playerIds.length]];

	function handleCurrentMove(move: number) {
		setCurrentMove(move);
	}

	function handlePlay(newSquares: (string | null)[]) {
		const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
		setXIsNext(!xIsNext);
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}

	return (
		<div>

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
			<Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
		</div>
	);
}
export { Game };
