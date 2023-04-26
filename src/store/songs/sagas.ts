import { put, call, all, takeLatest } from 'redux-saga/effects'
import { createSongFailure, createSongRequest, createSongSuccess, fetchSongsSuccess } from './actions'
import { fetchSongsFailure } from './actions'
import { ICreateSongRequest, SongsActionTypes } from './types'
import { $host } from '../../services/axios'

function* fetchSongs() {
  try {
    const { data } = yield call($host.get, '/songs')
    yield put(fetchSongsSuccess(data))
  } catch (error) {
    yield put(fetchSongsFailure(error))
  }
}

function* createSong({ payload }: ICreateSongRequest) {
  try {
    const { song } = payload;
    const { data } = yield call($host.post, '/songs', song)
    yield put(createSongSuccess(data))
  } catch (error) {
    yield put(createSongFailure(error))
  }
}

function* watchFetchSongsRequest() {
  yield takeLatest(SongsActionTypes.FETCH_SONGS_REQUEST, fetchSongs)
}

function* watchCreateSongRequest() {
  yield takeLatest(SongsActionTypes.CREATE_SONG_REQUEST, createSong)
}

export default function* songsSaga() {
  yield all([watchFetchSongsRequest(), watchCreateSongRequest()])
}
