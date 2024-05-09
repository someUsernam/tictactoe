import { SquareSymbol } from "@/pages/game/types";

import { player1, player2 } from "./createPlayer";

export function generateDrawSymbols() {
	const squares: SquareSymbol[] = [];
	squares.push(
		player1.symbol,
		player2.symbol,
		player1.symbol,
		player1.symbol,
		player2.symbol,
		player2.symbol,
		player2.symbol,
		player1.symbol,
		player1.symbol,
	);
	return squares;
}
