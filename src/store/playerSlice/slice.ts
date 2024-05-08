import { Player } from "@/resources/players";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type PlayerState = {
	players: Record<string, Player>;
};

const initialState: PlayerState = {
	players: {},
};

type SetPlayerPayload = {
	playerId: string;
	player: Player;
};

type SetScorePayload = {
	playerId: string;
	score: number;
};

const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		setPlayer(state, action: PayloadAction<SetPlayerPayload>) {
			const { playerId, player } = action.payload;
			state.players[playerId] = player;
		},
		setScore(state, action: PayloadAction<SetScorePayload>) {
			const { playerId, score } = action.payload;
			state.players[playerId].score = score;
		},
	},
});

export const { setPlayer, setScore } = playerSlice.actions;
export { playerSlice };
