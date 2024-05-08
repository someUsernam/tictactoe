export function calculateIndex(
	columnIndex: number,
	rowIndex: number,
	size: number,
) {
	return columnIndex * size + rowIndex;
}
