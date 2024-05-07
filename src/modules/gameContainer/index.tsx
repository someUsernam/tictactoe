import { usePlayers } from "@/store/playerSlice";
import { SetGameOptions } from "../setGameOptions";
import { SetPlayers } from "../setPlayers/components";
import { playersExists } from "./utils/playersExists";

function GameContainer() {
	const players = usePlayers();

	if (!playersExists(players)) {
		return <SetPlayers />;
	}

	if (playersExists(players)) {
		return <SetGameOptions />;
	}

	return <>{}</>;
}
export { GameContainer };
