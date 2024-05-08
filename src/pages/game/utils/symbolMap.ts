import { PlayerSymbol } from "@/resources/players";
import { SquareSymbol } from "../types";

export const SYMBOL_MAP = new Map<SquareSymbol, string | null>([
	[null, null],
	[PlayerSymbol.Cross, "X"],
	[PlayerSymbol.Circle, "O"],
]);
