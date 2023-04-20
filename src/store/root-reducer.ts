import { combineReducers } from 'redux'
import { sognsReducer } from './song/songs.reducers'

export const rootReducer = combineReducers({
  songs: sognsReducer
})