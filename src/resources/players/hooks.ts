import { selectPlayers } from "@/store/playerSlice";
import { useSelector } from "react-redux";

export function usePlayers() {
	return useSelector(selectPlayers);
}
