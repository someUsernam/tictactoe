import { useIsGameStarted } from "@/resources/options";
import { usePlayers } from "@/resources/players";
import { useNavigate } from "react-router-dom";
import { playersExists } from "./utils/playersExists";

function GameContainer() {
	const navigate = useNavigate();
	const players = usePlayers();
	const isGameStarted = useIsGameStarted();

	if (!playersExists(players)) {
		return navigate("create-players");
	}

	if (playersExists(players) && !isGameStarted) {
		return navigate("game-options");
	}

	return navigate("game");
}
export { GameContainer };
