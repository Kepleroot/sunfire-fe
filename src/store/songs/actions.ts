import { ICreateSongRequest, Song, SongsActionTypes } from './types'

//fetch
export const fetchSongsRequest = () => ({
  type: SongsActionTypes.FETCH_SONGS_REQUEST,
})

export const fetchSongsSuccess = (songs: Song[]) => ({
  type: SongsActionTypes.FETCH_SONGS_SUCCESS,
  payload: { songs },
})

export const fetchSongsFailure = (error: any) => ({
  type: SongsActionTypes.FETCH_SONGS_FAILURE,
  payload: { error },
})

//create
export const createSongRequest = (song: Partial<FormData>): ICreateSongRequest => ({
  type: SongsActionTypes.CREATE_SONG_REQUEST,
  payload: { song }
})

export const createSongSuccess = (createdSong: Partial<Song>) => ({
  type: SongsActionTypes.CREATE_SONG_SUCCESS,
  payload: { createdSong }
})

export const createSongFailure = (error: any) => ({
  type: SongsActionTypes.CREATE_SONG_FAILURE,
  payload: { error }
})


