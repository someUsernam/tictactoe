import { PlayerSymbol } from "@/resources/players";
import { SquareSymbol } from "../types";

export interface Winner {
	symbol: PlayerSymbol;
	winningLine: number[];
}

export type CheckWinnerResult = Winner | null;

export function checkWinner(
	squares: SquareSymbol[],
	size: number,
): CheckWinnerResult {
	if (squares.length === 0) {
		return null;
	}
	if (squares.length !== size ** 2) {
		throw new Error("Invalid squares size");
	}
	if (size < 3) {
		throw new Error("Invalid board size");
	}
	const lines = [];
	for (let i = 0; i < size; i++) {
		const row = [];
		const col = [];
		for (let j = 0; j < size; j++) {
			row.push(i * size + j);
			col.push(j * size + i);
		}
		lines.push(row, col);
	}
	const diag1 = [];
	const diag2 = [];
	for (let i = 0; i < size; i++) {
		diag1.push(i * size + i);
		diag2.push(i * size + size - i - 1);
	}
	lines.push(diag1, diag2);

	for (const line of lines) {
		const symbols = line.map((i) => squares[i]);
		if (symbols.every((s) => s === PlayerSymbol.Cross)) {
			return { symbol: PlayerSymbol.Cross, winningLine: line };
		}
		if (symbols.every((s) => s === PlayerSymbol.Circle)) {
			return { symbol: PlayerSymbol.Circle, winningLine: line };
		}
	}
	return null;
}
