import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
	player1Name: "",
	player2Name: "",
};

const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		setPlayer1Name(state, action: PayloadAction<string>) {
			state.player1Name = action.payload;
		},
		setPlayer2Name(state, action: PayloadAction<string>) {
			state.player2Name = action.payload;
		},
	},
});

export const { setPlayer1Name, setPlayer2Name } = playerSlice.actions;
export default playerSlice.reducer;
