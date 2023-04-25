import { SongsState } from "../store/songs/types";

//store
export interface State {
  songs: SongsState
}

//action
export interface SimpleAction {
  type: string
  payload: any
}