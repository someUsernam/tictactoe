import { PlayerSymbol } from "@/resources/players";

export const SYMBOL_MAP = new Map<PlayerSymbol | null, string | null>([
	[null, null],
	[PlayerSymbol.Cross, "X"],
	[PlayerSymbol.Circle, "O"],
]);
