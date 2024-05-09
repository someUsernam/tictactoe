import { SquareSymbol } from "@/pages/game/types";
import { player1 } from "./createPlayer";

export function generatePlayerSymbolsWithNull(n: number) {
	const squares: SquareSymbol[] = [];
	for (let i = 0; i < n; i++) {
		if (i % 2 === 0) {
			squares.push(player1.symbol);
		} else {
			squares.push(null);
		}
	}
	return squares;
}
