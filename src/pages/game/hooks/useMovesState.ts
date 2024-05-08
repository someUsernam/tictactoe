import { useState } from "react";
import { SquareSymbol } from "../types";
import { useInitialHistory } from "./useInitialHistory";

export function useMovesState() {
	const initialHistory = useInitialHistory();
	const [history, setHistory] = useState<SquareSymbol[][]>(initialHistory);
	const [currentMove, setCurrentMove] = useState(0);

	function updateMovesState(newSquares: SquareSymbol[]) {
		const historyUntilLastMove = history.slice(0, currentMove + 1);
		const newHistory = [...historyUntilLastMove, newSquares];

		setHistory(newHistory);
		setCurrentMove(newHistory.length - 1);
	}

	function resetHistory() {
		setHistory(initialHistory);
		setCurrentMove(0);
	}

	return {
		history,
		currentMove,
		updateMovesState,
		resetHistory,
		setCurrentMove,
	};
}
