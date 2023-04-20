import { Action } from '../store'
import { SongsActionTypes, SongsState } from './songs.types'

const initialState: SongsState = {
  songs: [],
  isLoading: false,
  error: '',
}

export const sognsReducer = (
  state: SongsState = initialState,
  { type, payload }: Action,
) => {
  switch (type) {
    case SongsActionTypes.FETCH_SONGS_REQUEST:
      return { ...state, isLoading: true }
    case SongsActionTypes.FETCH_SONGS_SUCCESS:
      return { ...state, songs: payload.songs, isLoading: false }
    case SongsActionTypes.FETCH_SONGS_FAILURE:
      return { ...state, error: payload.error, isLoading: false }
    default:
      return state
  }
}
