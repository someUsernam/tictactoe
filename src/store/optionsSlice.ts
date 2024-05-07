import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";
import { useSelector } from "react-redux";
import { RootState } from "./store";

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

function useSize() {
	return useSelector((state: RootState) => state.options.size);
}

function useIsGameStarted() {
	return useSelector((state: RootState) => state.options.isGameStarted);
}

export const { setSize, setIsGameStarted } = optionsSlice.actions;
export { useIsGameStarted, useSize };
export default optionsSlice.reducer;
