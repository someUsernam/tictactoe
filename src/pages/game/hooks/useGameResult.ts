import { usePlayers, usePlayersBySymbol } from "@/resources/players";
import { setScore } from "@/store/playerSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SquareSymbol } from "../types";
import { checkDraw } from "../utils/checkDraw";
import { Winner } from "../utils/checkWinner";

export function useGameResult(players: ReturnType<typeof usePlayers>) {
	const [winningLine, setWinningLine] = useState<number[]>([]);
	const [showWinningLine, setShowWinningLine] = useState(false);
	const [currentWinner, setCurrentWinner] = useState("");
	const playersByPlayerSymbol = usePlayersBySymbol();
	const dispatch = useDispatch();

	function updateWinner(winner: Winner) {
		if (winner?.symbol) {
			setWinningLine(winner.winningLine);
			const { id: winnerId } = playersByPlayerSymbol[winner.symbol];

			if (!winnerId) {
				return;
			}

			setCurrentWinner(`${players[winnerId].name} wins!`);
			setShowWinningLine(true);
			updateScore(winnerId);
		}
	}

	function updateScore(winnerId: string) {
		const newScore = players[winnerId].score + 1;

		dispatch(
			setScore({
				playerId: winnerId,
				score: newScore,
			}),
		);
	}

	function updateDraw(isWinner: boolean, squares: SquareSymbol[]) {
		if (checkDraw(isWinner, squares)) {
			setCurrentWinner("Draw");
		}
	}

	function resetWinner() {
		setWinningLine([]);
		setCurrentWinner("");
	}

	return {
		updateDraw,
		updateWinner,
		resetWinner,
		currentWinner,
		winningLine,
		showWinningLine,
		setShowWinningLine,
	};
}
