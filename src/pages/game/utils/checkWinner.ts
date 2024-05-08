export function checkWinner(squares: (string | null)[], size: number) {
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
		if (symbols.every((s) => s === "X")) {
			return "Cross";
		}
		if (symbols.every((s) => s === "O")) {
			return "Circle";
		}
	}
	return null;
}
