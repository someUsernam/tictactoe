import { usePlayers } from "@/store/playerSlice";
import { StartGame } from "../startGame/components";

function GameContainer() {
	const players = usePlayers();

	function playersExists() {
		if (Object.keys(players).length >= 2) {
			return true;
		}
		return false;
	}

	if (!playersExists()) {
		return <StartGame />;
	}

	return <>{}</>;
}
export default GameContainer;
