import { all, call, put, takeLatest } from 'redux-saga/effects'
import { $host } from '../../services/axios'
import { loginFailure, loginSuccess, registrationFailure, registrationSuccess } from './actions'
import { ILoginRequest, UserActionTypes } from './types'

function* login({ payload }: ILoginRequest) {
  try {
    const { user } = payload

    const { data } = yield call($host.post, '/auth/login', user)
    yield put(loginSuccess(data))
  } catch (error) {
    yield put(loginFailure(error))
  }
}

function* registration({ payload }: ILoginRequest) {
  try {
    const { user } = payload

    const { data } = yield call($host.post, '/auth/registration', user)
    yield put(registrationSuccess(data))
  } catch (error) {
    yield put(registrationFailure(error))
  }
}

function* watchLoginRequest() {
  yield takeLatest(UserActionTypes.LOGIN_REQUEST, login)
}

function* watchRegistrationRequest() {
  yield takeLatest(UserActionTypes.REGISTRATION_REQUEST, registration)
}

export default function* userSaga() {
  yield all([
    watchLoginRequest(),
    watchRegistrationRequest()
  ])
}