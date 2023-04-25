import { SimpleAction } from '../../types'
import { SongsActionTypes, SongsState } from './types'

const initialState: SongsState = {
  songs: [],
  isLoading: false,
  error: '',
}

export const songsReducer = (
  state: SongsState = initialState,
  { type, payload }: SimpleAction,
) => {
  switch (type) {
    case SongsActionTypes.FETCH_SONGS_REQUEST:
      return { ...state, isLoading: true }
    case SongsActionTypes.FETCH_SONGS_SUCCESS:
      return { ...state, isLoading: false, songs: payload.songs }
    case SongsActionTypes.FETCH_SONGS_FAILURE:
      return { ...state, isLoading: false, error: payload.error }
    default:
      return state
  }
}
