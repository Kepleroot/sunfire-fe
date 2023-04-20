import { Song, SongsActionTypes } from './songs.types'

export const fetchSongsRequest = () => ({
  type: SongsActionTypes.FETCH_SONGS_REQUEST
})

export const fetchSongsSuccess = (songs: Song[]) => ({
  type: SongsActionTypes.FETCH_SONGS_SUCCESS,
  payload: { songs }
})

export const fetchSongsFailure = (error: any) => ({
  type: SongsActionTypes.FETCH_SONGS_FAILURE,
  payload: { error }
})

