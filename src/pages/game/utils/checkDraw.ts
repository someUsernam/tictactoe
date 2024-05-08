import { PlayerSymbol } from "@/resources/players";

function checkWhetherAllSquaresAreFilled(
	squares: (PlayerSymbol | null)[],
): boolean {
	return squares.every((square) => square !== null);
}

export function checkDraw(
	isWinner: boolean,
	squares: (PlayerSymbol | null)[],
): boolean {
	return !isWinner && checkWhetherAllSquaresAreFilled(squares);
}
