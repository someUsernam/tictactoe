import { PlayerSymbol } from "./enums";

export type Player = {
	id: string;
	name: string;
	score: number;
	symbol: PlayerSymbol;
};
