import { User, UserActionTypes } from './types'

//login
export const loginRequest = (user: User | null) => ({
  type: UserActionTypes.LOGIN_REQUEST,
  payload: { user },
})

export const loginSuccess = (user: User | null) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: { user },
})

export const loginFailure = (error: any) => ({
  type: UserActionTypes.LOGIN_FAILURE,
  payload: { error },
})

//registration
export const registrationRequest = (user: User | null) => ({
  type: UserActionTypes.REGISTRATION_REQUEST,
  payload: { user },
})

export const registrationSuccess = (user: User | null) => ({
  type: UserActionTypes.REGISTRATION_SUCCESS,
  payload: { user },
})

export const registrationFailure = (error: any) => ({
  type: UserActionTypes.REGISTRATION_FAILURE,
  payload: { error },
})

export const logout = () => ({
  type: UserActionTypes.LOGOUT,
})
