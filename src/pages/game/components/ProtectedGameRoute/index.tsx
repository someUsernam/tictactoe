import { links } from "@/common/consts/Links";
import { playersExists } from "@/pages/gameContainer/utils/playersExists";
import { useIsGameStarted } from "@/resources/options";
import { usePlayers } from "@/resources/players";
import { ChildrenProps } from "@/types";
import { Navigate } from "react-router-dom";

function ProtectedGameRoute({ children }: ChildrenProps) {
	const isGameStarted = useIsGameStarted();
	const players = usePlayers();

	if (!playersExists(players) && !isGameStarted) {
		return <Navigate to={links.setup} />;
	}

	return children;
}
export default ProtectedGameRoute;
