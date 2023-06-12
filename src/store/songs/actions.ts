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

//fetch one

export const fetchOneSongRequest = (id: number) => ({
  type: SongsActionTypes.FETCH_ONE_SONG_REQUEST,
  payload: { id },
})

export const fetchOneSongSuccess = (song: Song) => ({
  type: SongsActionTypes.FETCH_ONE_SONG_SUCCESS,
  payload: { song },
})

export const fetchOneSongFailure = (error: any) => ({
  type: SongsActionTypes.FETCH_ONE_SONG_FAILURE,
  payload: { error },
})

//fetch searched

export const fetchSearchedSongsRequest = (search: string) => ({
  type: SongsActionTypes.FETCH_SEARCHED_SONGS_REQUEST,
  payload: { search }
})

export const fetchSearchedSongsSuccess = (songs: Song[]) => ({
  type: SongsActionTypes.FETCH_SEARCHED_SONGS_SUCCESS,
  payload: { songs }
})

export const fetchSearchedSongsFailure = (error: any) => ({
  type: SongsActionTypes.FETCH_SEARCHED_SONGS_FAILURE,
  payload: { error }
})

//create
export const createSongRequest = (
  song: Partial<FormData>,
): ICreateSongRequest => ({
  type: SongsActionTypes.CREATE_SONG_REQUEST,
  payload: { song },
})

export const createSongSuccess = (createdSong: Partial<Song>) => ({
  type: SongsActionTypes.CREATE_SONG_SUCCESS,
  payload: { createdSong },
})

export const createSongFailure = (error: any) => ({
  type: SongsActionTypes.CREATE_SONG_FAILURE,
  payload: { error },
})
