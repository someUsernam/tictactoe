import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Player = {
	name: string;
	score: number;
};

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

export const { setPlayer } = playerSlice.actions;
export default playerSlice.reducer;
