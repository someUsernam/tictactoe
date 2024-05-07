import { Player } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "./store";

type PlayerState = {
	players: Record<string, Player>;
};

const initialState: PlayerState = {
	players: {},
};

type PlayerPayload = {
	playerId: string;
	player: Player;
};

const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		setPlayer(state, action: PayloadAction<PlayerPayload>) {
			const { playerId, player } = action.payload;
			state.players[playerId] = player;
		},
	},
});

function usePlayers() {
	return useSelector((state: RootState) => state.player.players);
}

export const { setPlayer } = playerSlice.actions;
export { usePlayers };
export default playerSlice.reducer;
