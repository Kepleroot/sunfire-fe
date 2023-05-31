import { SimpleAction } from '../../types'
import { SongsActionTypes, SongsState } from './types'

const initialState: SongsState = {
  songs: [],
  selectedSong: {
    name: '',
    author: '',
    text: '',
    views: 0,
  },
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

    case SongsActionTypes.FETCH_ONE_SONG_REQUEST:
      return { ...state, isLoading: true }
    case SongsActionTypes.FETCH_ONE_SONG_SUCCESS:
      return { ...state, isLoading: false, selectedSong: payload.song }

    case SongsActionTypes.CREATE_SONG_REQUEST:
      return { ...state, isLoading: true }
    case SongsActionTypes.CREATE_SONG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        songs: [...state.songs, payload.createdSong],
      }

    case SongsActionTypes.FETCH_SONGS_FAILURE:
    case SongsActionTypes.CREATE_SONG_FAILURE:
      return { ...state, isLoading: false, error: payload.error }

    default:
      return state
  }
}
