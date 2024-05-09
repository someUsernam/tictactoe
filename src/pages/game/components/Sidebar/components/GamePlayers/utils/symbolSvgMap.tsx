import Circle from "@/common/components/Circle";
import Cross from "@/common/components/Cross";
import { SquareSymbol } from "@/pages/game/types";
import { PlayerSymbol } from "@/resources/players";

export const SYMBOL_SVG_MAP = new Map<SquareSymbol, JSX.Element | null>([
	[null, null],
	[PlayerSymbol.Cross, <Cross />],
	[PlayerSymbol.Circle, <Circle />],
]);
