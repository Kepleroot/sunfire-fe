export const UserActionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  REGISTRATION_REQUEST: 'REGISTRATION_REQUEST',
  REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS',
  REGISTRATION_FAILURE: 'REGISTRATION_FAILURE',

  LOGOUT: 'LOGOUT'
}

export interface UserState {
  user: User | null
  isAuthentificated: boolean
  isLoading: boolean
  error: ''
}

export interface User {
  email: string
  password: string
  role?: string
}

export interface ILoginRequest {
  type: string
  payload: {
    user: {
      email: string
      password: string
    }
  }
}
