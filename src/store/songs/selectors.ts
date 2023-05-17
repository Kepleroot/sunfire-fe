import { createSelector } from "reselect";
import { State } from "../../types";

const selectSongsState = (state: State) => state.songs

export const selectSongs = createSelector(
  selectSongsState,
  (songs) => songs.songs
)