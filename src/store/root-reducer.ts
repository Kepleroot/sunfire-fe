import { combineReducers } from 'redux'
import { sognsReducer } from './song/songs.reducer'

export const rootReducer = combineReducers({
  songs: sognsReducer
})