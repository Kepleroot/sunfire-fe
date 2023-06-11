import { put, call, all, takeLatest } from 'redux-saga/effects'
import {
  createSongFailure,
  createSongSuccess,
  fetchOneSongFailure,
  fetchOneSongSuccess,
  fetchSongsSuccess,
} from './actions'
import { fetchSongsFailure } from './actions'
import {
  ICreateSongRequest,
  IGetOneSongRequest,
  SongsActionTypes,
} from './types'
import { $host } from '../../services/axios'

function* fetchSongs() {
  try {
    const { data } = yield call($host.get, '/songs')
    yield put(fetchSongsSuccess(data))
  } catch (error) {
    yield put(fetchSongsFailure(error))
  }
}

function* fecthOneSong({ payload }: IGetOneSongRequest) {
  const { id } = payload

  try {
    const { data } = yield call($host.get, `/songs/songs/${id}`)
    yield put(fetchOneSongSuccess(data))
  } catch (error) {
    yield put(fetchOneSongFailure(error))
  }
}

function* createSong({ payload }: ICreateSongRequest) {
  try {
    const { song } = payload
    const { data } = yield call($host.post, '/songs', song)
    yield put(createSongSuccess(data))
  } catch (error) {
    yield put(createSongFailure(error))
  }
}

function* watchFetchSongsRequest() {
  yield takeLatest(SongsActionTypes.FETCH_SONGS_REQUEST, fetchSongs)
}

function* watchFetchOneSongsRequest() {
  yield takeLatest(SongsActionTypes.FETCH_ONE_SONG_REQUEST, fecthOneSong)
}

function* watchCreateSongRequest() {
  yield takeLatest(SongsActionTypes.CREATE_SONG_REQUEST, createSong)
}

export default function* songsSaga() {
  yield all([
    watchFetchSongsRequest(),
    watchCreateSongRequest(),
    watchFetchOneSongsRequest(),
  ])
}
