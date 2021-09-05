import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  SET_AUTH_LOADING,
  LOGOUT,
} from '../actions/types'

const initialState = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  user: {},
  loading: false,
  isAuthenticated: localStorage.getItem('access') ? true : false,
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('access', payload.access)
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        access: payload.access,
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      }
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      }
    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      }
    case USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      }
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT:
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      return {
        ...state,
        access: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      }
    case ACTIVATION_SUCCESS:
    case ACTIVATION_FAIL:
    case PASSWORD_RESET_FAIL:
    case PASSWORD_RESET_SUCCESS:
    case PASSWORD_RESET_CONFIRM_SUCCESS:
    case PASSWORD_RESET_CONFIRM_FAIL:
    case UPDATE_PASSWORD_SUCCESS:
    case UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
      }
    case SET_AUTH_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
