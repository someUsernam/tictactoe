import { RootState } from "../store";

export const selectSize = (state: RootState) => state.options.size;

export const selectIsGameStarted = (state: RootState) =>
	state.options.isGameStarted;
