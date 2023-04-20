export const SongsActionTypes = {
  FETCH_SONGS_REQUEST: 'FETCH_SONGS_REQUEST',
  FETCH_SONGS_SUCCESS: 'FETCH_SONGS_SUCCESS',
  FETCH_SONGS_FAILURE: 'FETCH_SONGS_FAILURE',
};

export interface Song {
  id: number;
  name: string;
  author: string;
  text: string;
  img: string;
  audio: string; 
  genres: Array<any>;
  albums: Array<any>;
  infos: Array<any>;
}

export interface SongsState {
  songs: Song[]
  isLoading: boolean;
  error: string;
}