import { useSize } from "@/resources/options";
import { useRef } from "react";
import { SquareSymbol } from "../types";

export function useInitialHistory() {
	const size = useSize();

	const initialHistory = useRef<SquareSymbol[][]>([
		Array(size ** 2).fill(null),
	]);

	return initialHistory.current;
}
