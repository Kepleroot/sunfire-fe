import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { fetchSongsFailure, fetchSongsRequest, fetchSongsSuccess } from "./songs.actions"
import { SongsActionTypes } from "./songs.types"
import { $host } from '../../services/axios'
import axios from "axios";


function* fetchSongs(){
  try {
    yield put(fetchSongsRequest());

    const { data } = yield call(axios.get, 'http://localhost:5000/songs');
    
    yield put(fetchSongsSuccess(data))
  } catch (error) {
    yield put(fetchSongsFailure(error))
  }
}

function* watchFetchSongsRequest(){
  yield takeEvery(SongsActionTypes.FETCH_SONGS_REQUEST, fetchSongs)
}

export function* songsSagas() {
  yield all([
    watchFetchSongsRequest(),
  ])
}