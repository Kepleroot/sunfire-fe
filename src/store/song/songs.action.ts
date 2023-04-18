import { SongsActionTypes } from './songs.types'

export const setSongs = (songs: any) => ({
  type: SongsActionTypes.SET_CURRENT_SONGS,
  payload: { songs }
})