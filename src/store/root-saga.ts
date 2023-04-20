import { all } from 'redux-saga/effects'
import { songsSagas } from './song/songs.sagas'

export function* rootSaga() {
  yield all([songsSagas()])
}

