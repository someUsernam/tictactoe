import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

type OptionsState = {
	size: number;
	isGameStarted: boolean;
};

const initialState: OptionsState = {
	size: 3,
	isGameStarted: false,
};

const optionsSlice = createSlice({
	name: "options",
	initialState,
	reducers: {
		setSize(state, action: PayloadAction<number>) {
			state.size = action.payload;
		},
		setIsGameStarted(state, action: PayloadAction<boolean>) {
			state.isGameStarted = action.payload;
		},
	},
});

export const { setSize, setIsGameStarted } = optionsSlice.actions;
export { optionsSlice };
