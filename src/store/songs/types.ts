export const SongsActionTypes = {
  FETCH_SONGS_REQUEST: 'FETCH_SONGS_REQUEST',
  FETCH_SONGS_SUCCESS: 'FETCH_SONGS_SUCCESS',
  FETCH_SONGS_FAILURE: 'FETCH_SONGS_FAILURE',

  CREATE_SONG_REQUEST: 'CREATE_SONG_REQUEST',
  CREATE_SONG_SUCCESS: 'CREATE_SONG_SUCCESS',
  CREATE_SONG_FAILURE: 'CREATE_SONG_FAILURE',
}

export interface Song {
  id?: number
  name: string
  text: string
  author: string
  img?: string
  audio?: string
  genres?: Array<any>
  albums?: Array<any>
  infos?: Info[]
}

export interface Info {
  id: number
  title: string
  description: string
}

export interface SongsState {
  songs: Song[]
  isLoading: boolean
  error: string
}

export interface ICreateSongRequest {
  type: string
  payload: {
    song: Partial<FormData>
  }
}
