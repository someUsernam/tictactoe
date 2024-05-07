import { usePlayers } from "@/store/playerSlice";
import { SetPlayers } from "../setPlayers/components";

function GameContainer() {
	const players = usePlayers();

	function playersExists() {
		if (Object.keys(players).length >= 2) {
			return true;
		}
		return false;
	}

	if (!playersExists()) {
		return <SetPlayers />;
	}

	return <>{}</>;
}
export { GameContainer };
