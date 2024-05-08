import { selectPlayers } from "@/store/playerSlice";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { PlayerSymbol } from "./enums";
import { Player } from "./types";

const PLAYERS_ORDER = [PlayerSymbol.Cross, PlayerSymbol.Circle];

export function usePlayers() {
	return useSelector(selectPlayers);
}

export function useOrderedPlayers() {
	const playersDictionary = useSelector(selectPlayers);

	const players = useMemo(
		() =>
			Object.values(playersDictionary).sort(
				(a, b) =>
					PLAYERS_ORDER.indexOf(a.symbol) - PLAYERS_ORDER.indexOf(b.symbol),
			),
		[playersDictionary],
	);

	return players;
}

export function usePlayersBySymbol() {
	const players = usePlayers();

	const playersByPlayerSymbol = useMemo(
		() =>
			Object.values(players).reduce(
				(acc, player) => {
					acc[player.symbol] = player;
					return acc;
				},
				{} as Record<PlayerSymbol, Player>,
			),
		[players],
	);

	return playersByPlayerSymbol;
}
