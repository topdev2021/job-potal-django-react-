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
} from '../actions/types'

const initialState = {
  question: {},
  allQuestions: [],
  answers: [],
  answer: {},
  userAnswers: [],
}

const assessments = (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case GET_ALL_QUESTIONS_SUCCESS:
      return {
        ...state,
        allQuestions: payload,
      }
    case GET_FIRST_QUESTION_SUCCESS:
    case GET_NEXT_QUESTION_SUCCESS:
      return {
        ...state,
        question: payload,
      }
    case GET_ANSWERS_SUCCESS:
      return {
        ...state,
        answers: payload,
      }
    case SUBMIT_ANSWER_SUCCESS:
      return {
        ...state,
        answer: payload,
      }
    case GET_USER_ANSWERS_SUCCESS:
      return {
        ...state,
        userAnswers: payload,
      }
    case GET_FIRST_QUESTION_FAIL:
    case GET_ANSWERS_FAIL:
    case GET_NEXT_QUESTION_FAIL:
    case SUBMIT_ANSWER_FAIL:
    case GET_USER_ANSWERS_FAIL:
    case GET_ALL_QUESTIONS_FAIL:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default assessments
