import { RootState } from "../store";

export const selectPlayers = (state: RootState) => state.player.players
