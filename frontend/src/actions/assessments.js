import axios from 'axios'
import {
  GET_FIRST_QUESTION_SUCCESS,
  GET_FIRST_QUESTION_FAIL,
  GET_NEXT_QUESTION_SUCCESS,
  GET_NEXT_QUESTION_FAIL,
  GET_ANSWERS_SUCCESS,
  GET_ANSWERS_FAIL,
  SUBMIT_ANSWER_SUCCESS,
  SUBMIT_ANSWER_FAIL,
  GET_USER_ANSWERS_SUCCESS,
  GET_USER_ANSWERS_FAIL,
  GET_ALL_QUESTIONS_SUCCESS,
  GET_ALL_QUESTIONS_FAIL,
} from './types'

// ===================================
// GET FIRST QUESTION
// ===================================
export const getFirstQuestion = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/question/first`,
      config
    )
    dispatch({
      type: GET_FIRST_QUESTION_SUCCESS,
      payload: res.data[0],
    })
  } catch (err) {
    dispatch({
      type: GET_FIRST_QUESTION_FAIL,
    })
  }
}

// ===================================
// GET QUESTION'S ANSWERS
// ===================================
export const getQuestionAnswers = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/question/answers`,
      config
    )
    dispatch({
      type: GET_ANSWERS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_ANSWERS_FAIL,
    })
  }
}

// ===================================
// GET NEXT QUESTION
// ===================================
export const getNextQuestion = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/question/next/${id}`,
      config
    )
    dispatch({
      type: GET_NEXT_QUESTION_SUCCESS,
      payload: res.data[0],
    })
  } catch (err) {
    dispatch({
      type: GET_NEXT_QUESTION_FAIL,
    })
  }
}

// ===================================
// SUBMIT ANSWER
// ===================================
export const submitAnswer = (user, question, answer) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/question/submit`,
      {
        user: user,
        question: question,
        answer: answer,
      },
      config
    )
    dispatch({
      type: SUBMIT_ANSWER_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: SUBMIT_ANSWER_FAIL,
    })
  }
}

// ===================================
// GET USER ANSWERS
// ===================================
export const getUserAnswers = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/question/submit`,
      config
    )
    dispatch({
      type: GET_USER_ANSWERS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_USER_ANSWERS_FAIL,
    })
  }
}

// ===================================
// GET ALL QUESTIONS
// ===================================
export const getAllQuestions = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/question/all`,
      config
    )
    dispatch({
      type: GET_ALL_QUESTIONS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_ALL_QUESTIONS_FAIL,
    })
  }
}
