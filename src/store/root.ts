import { combineReducers } from 'redux'
import { songsReducer } from './songs/reducers'
import { all } from 'redux-saga/effects'
import songsSaga from './songs/sagas'
import { userReducer } from './user/reducers'
import userSaga from './user/sagas'

export const rootReducer = combineReducers({
  songs: songsReducer,
  user: userReducer,
})

export default function* rootSaga() {
  yield all([songsSaga(), userSaga(),])
}
