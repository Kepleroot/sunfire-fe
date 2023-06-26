import { User, UserActionTypes, UserState } from "./types";
import { SimpleAction } from '../../types'


const initialState: UserState = {
  user: null,
  isAuthentificated: false,
  isLoading: false,
  error: '',
};

export const userReducer = (
  state: UserState = initialState,
  { type, payload }: SimpleAction
) => {
  switch (type) {
    case UserActionTypes.LOGIN_REQUEST:
      return { ...state, isLoading: true, }
    case UserActionTypes.LOGIN_SUCCESS: 
      return { ...state, isLoading: false, isAuthentificated: true, user: payload.user }
    
    case UserActionTypes.REGISTRATION_REQUEST:
      return { ...state, isLoading: true, }
    case UserActionTypes.REGISTRATION_SUCCESS: 
      return { ...state, isLoading: false, isAuthentificated: true, user: payload.user }

    
    case UserActionTypes.LOGIN_FAILURE:
    case UserActionTypes.REGISTRATION_FAILURE:
      return { ...state, isLoading: false, error: payload.error }
    

    case UserActionTypes.LOGOUT:
      return { ...initialState }
    default:
      return state
  }
}