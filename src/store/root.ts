import { combineReducers } from 'redux'
import { songsReducer } from './songs/reducers'
import { all } from 'redux-saga/effects'
import songsSaga from './songs/sagas'

export const rootReducer = combineReducers({
  songs: songsReducer,
})

export default function* rootSaga() {
  yield all([songsSaga()])
}
