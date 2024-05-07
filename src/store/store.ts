import { configureStore } from "@reduxjs/toolkit";
import optionsSlice from "./optionsSlice";
import playerSlice from "./playerSlice";

const store = configureStore({
	reducer: {
		player: playerSlice,
		options: optionsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
