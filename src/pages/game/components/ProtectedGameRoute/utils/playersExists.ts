import { Player } from "@/resources/players";

function playersExists(players: Record<string, Player>) {
	if (Object.keys(players).length >= 2) {
		return true;
	}
	return false;
}

export { playersExists };
