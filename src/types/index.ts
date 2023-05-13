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

export interface CreateInfo {
  number: number
  title: string
  description: string
}