import { useIsGameStarted } from "@/store/optionsSlice";
import { usePlayers } from "@/store/playerSlice";
import { Game } from "../game";
import { SetGameOptions } from "../setGameOptions";
import { SetPlayers } from "../setPlayers/components";
import { playersExists } from "./utils/playersExists";

function GameContainer() {
	const players = usePlayers();
	const isGameStarted = useIsGameStarted();

	if (!playersExists(players)) {
		return <SetPlayers />;
	}

	if (playersExists(players) && !isGameStarted) {
		return <SetGameOptions />;
	}

	return <Game />;
}
export { GameContainer };
