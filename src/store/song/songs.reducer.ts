import { SongsActionTypes } from "./songs.types";

const initialState = {
  currentSongs: [],
}

export const sognsReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SongsActionTypes.SET_CURRENT_SONGS: 
      return {...state, currentSongs: payload}
    default: 
      return state;
  }
}