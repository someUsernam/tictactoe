import { SquareSymbol } from "../types";

function checkWhetherAllSquaresAreFilled(squares: SquareSymbol[]): boolean {
	return squares.every((square) => square !== null);
}

export function checkDraw(isWinner: boolean, squares: SquareSymbol[]): boolean {
	return !isWinner && checkWhetherAllSquaresAreFilled(squares);
}
