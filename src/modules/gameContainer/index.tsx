import { usePlayers } from "@/store/playerSlice";
import { SetGameOptions } from "../setGameOptions";
import { SetPlayers } from "../setPlayers/components";
import { playersExists } from "./utils/playersExists";
import { useIsGameStarted } from "@/store/optionsSlice";

function GameContainer() {
	const players = usePlayers();
	const isGameStarted = useIsGameStarted();

	if (!playersExists(players)) {
		return <SetPlayers />;
	}

	if (playersExists(players) && isGameStarted === false) {
		return <SetGameOptions />;
	}

	return <>{}</>;
}
export { GameContainer };
