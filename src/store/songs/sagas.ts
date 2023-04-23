import { put, call, take, takeEvery, all } from 'redux-saga/effects'
import { fetchSongsRequest } from './actions'
import axios from 'axios'
import { fetchSongsSuccess } from './actions'
import { fetchSongsFailure } from './actions'
import { SongsActionTypes } from './types'
import { $host } from '../../services/axios'

function* fetchSongs() {
  try {
    const { data } = yield call($host.get, '/songs')
    yield put(fetchSongsSuccess(data))
  } catch (error) {
    yield put(fetchSongsFailure(error))
  }
}

function* watchFetchSongs() {
  yield takeEvery(SongsActionTypes.FETCH_SONGS_REQUEST, fetchSongs)
}

export default function* songsSaga() {
  yield all([watchFetchSongs()])
}
