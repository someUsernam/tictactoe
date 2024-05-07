import { configureStore } from "@reduxjs/toolkit";
import { optionsSlice } from "./optionsSlice/slice";
import { playerSlice } from "./playerSlice/slice";

const store = configureStore({
	reducer: {
		player: playerSlice.reducer,
		options: optionsSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
