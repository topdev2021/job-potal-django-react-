import axios from 'axios'
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
import { setAlert } from './alert'

// ========================================
// Get Browser Cookies
// ========================================
const getCookie = (name) => {
  var cookieValue = null
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';')
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim()
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
        break
      }
    }
  }
  return cookieValue
}

// ========================================
// Set Loading Function
// ========================================
export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_AUTH_LOADING,
  })
}

// ========================================
// Check if User is Authenticated or Not
// ========================================
export const checkAuthenticated = () => async (dispatch) => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    }

    const body = JSON.stringify({ token: localStorage.getItem('access') })

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/jwt/verify/`,
        body,
        config
      )

      if (res.data.code !== 'token_not_valid') {
        dispatch({
          type: AUTHENTICATED_SUCCESS,
        })
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL,
        })
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATED_FAIL,
      })
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL,
    })
  }
}

// ========================================
// Load Logged In User
// ========================================
export const load_user = () => async (dispatch) => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/users/me/`,
        config
      )
      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL,
      })
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    })
  }
}

// ========================================
// User Login Function
// ========================================
export const login = (email, password) => async (dispatch) => {
  dispatch(setLoading())

  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }

  const body = JSON.stringify({ email, password })
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/jwt/create/`,
      body,
      config
    )
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })
    dispatch(load_user())
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    })
    dispatch(setAlert(error.response.data.detail, 'danger'))
  }
}

// ========================================
// User Sign Up Function
// ========================================
export const registerUser = (
  name,
  email,
  type,
  password,
  re_password
) => async (dispatch) => {
  dispatch(setLoading())
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'X-CSRFToken': getCookie('csrftoken'),
    },
  }

  const body = JSON.stringify({ name, email, type, password, re_password })

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/`,
      body,
      config
    )
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    })
    dispatch(setAlert('Please check your email and activate account', 'danger'))
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
    })
    if (error.response.data.email) {
      dispatch(setAlert(error.response.data.email, 'danger'))
    } else if (error.response.data.password) {
      dispatch(setAlert(error.response.data.password, 'danger'))
    } else {
      dispatch(setAlert('Authorization Failed', 'danger'))
    }
    // console.clear()
  }
}

// ========================================
// User Account Activation Function
// ========================================
export const activateAccount = (uid, token) => async (dispatch) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'X-CSRFToken': getCookie('csrftoken'),
    },
  }

  const body = JSON.stringify({ uid, token })

  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/activation/`,
      body,
      config
    )
    dispatch({
      type: ACTIVATION_SUCCESS,
    })
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL,
    })
  }
}

// ========================================
// User Password Reset Form Submission Function
// ========================================
export const resetPasswordRequest = (email) => async (dispatch) => {
  dispatch(setLoading())
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'X-CSRFToken': getCookie('csrftoken'),
    },
  }

  const body = JSON.stringify({ email })

  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/reset_password/`,
      body,
      config
    )
    dispatch({
      type: PASSWORD_RESET_SUCCESS,
    })
    dispatch(setAlert('Please check your email to reset password', 'light'))
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
    })
    dispatch(setAlert('Email sent failed', 'light'))
  }
}

// ========================================
// User Reset Password Function
// ========================================
export const resetPassword = (
  uid,
  token,
  new_password,
  re_new_password
) => async (dispatch) => {
  dispatch(setLoading())
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'X-CSRFToken': getCookie('csrftoken'),
    },
  }

  const body = JSON.stringify({ uid, token, new_password, re_new_password })

  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`,
      body,
      config
    )
    dispatch({
      type: PASSWORD_RESET_CONFIRM_SUCCESS,
    })
    dispatch(
      setAlert('Password has been changed, you can login now.', 'danger')
    )
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_CONFIRM_FAIL,
    })
    if (error.response.data.new_password) {
      dispatch(setAlert(error.response.data.new_password, 'danger'))
    } else if (error.response.data.token) {
      dispatch(setAlert(error.response.data.token, 'danger'))
    } else {
      dispatch(setAlert('There is something wrong', 'danger'))
    }
  }
}

// ========================================
// User Update Password Function
// ========================================
export const update_password = (
  current_password,
  new_password,
  re_new_password
) => async (dispatch) => {
  dispatch(setLoading())
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  const body = JSON.stringify({
    current_password,
    new_password,
    re_new_password,
  })

  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/set_password/`,
      body,
      config
    )
    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
    })
    dispatch(setAlert('Your password has been updated.', 'danger'))
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
    })
    if (error.response.data.current_password) {
      dispatch(setAlert('The current password is not correct', 'danger'))
    } else if (error.response.data.non_field_errors) {
      dispatch(setAlert(error.response.data.non_field_errors, 'danger'))
    } else {
      dispatch(setAlert('There is something wrong', 'danger'))
    }
  }
}

// ========================================
// User Logout Function
// ========================================
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  })
  localStorage.removeItem('cartItems')
}
