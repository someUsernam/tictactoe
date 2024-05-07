import { Player, PlayerSymbol } from "@/resources/players";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
		setScore(state, action: PayloadAction<{ playerId: string; score: number }>) {
			const { playerId, score } = action.payload;
			state.players[playerId].score = score;
		},
	},
});

export const { setPlayer, setScore } = playerSlice.actions;
export { playerSlice };
