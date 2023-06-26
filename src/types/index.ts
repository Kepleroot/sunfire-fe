import { SongsState } from "../store/songs/types";
import { UserState } from "../store/user/types";

//store
export interface State {
  songs: SongsState
  user: UserState
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

export interface Info {
  title: string
  description: string
}