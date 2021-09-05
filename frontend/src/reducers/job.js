import {
  ADD_JOB_SUCCESS,
  ADD_JOB_FAIL,
  ADD_JOB_SKILLS_SUCCESS,
  ADD_JOB_SKILLS_FAIL,
  GET_LAST_ADDED_JOB_SUCCESS,
  GET_LAST_ADDED_JOB_FAIL,
  GET_ALL_JOB_SUCCESS,
  GET_ALL_JOB_FAIL,
  GET_SINGLE_JOB_SUCCESS,
  GET_SINGLE_JOB_FAIL,
  GET_ALL_SKILLS_SUCCESS,
  GET_ALL_SKILLS_FAIL,
  GET_JOBS_SUCCESS,
  GET_JOBS_FAIL,
  GET_SINGLE_JOB_SKILLS_SUCCESS,
  GET_SINGLE_JOB_SKILLS_FAIL,
} from '../actions/types'

const initialState = {
  jobs: [],
  singleJob: {},
  skills: [],
  lastAddedJob: {},
}

const job = (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case ADD_JOB_SUCCESS:
      return {
        ...state,
        jobs: [payload, ...state.jobs],
      }
    case ADD_JOB_SKILLS_SUCCESS:
      return {
        ...state,
        skills: [payload, ...state.skills],
      }
    case GET_LAST_ADDED_JOB_SUCCESS:
      return {
        ...state,
        lastAddedJob: payload,
      }
    case GET_ALL_JOB_SUCCESS:
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        jobs: payload,
      }
    case GET_SINGLE_JOB_SUCCESS:
      return {
        ...state,
        singleJob: payload,
      }
    case GET_ALL_SKILLS_SUCCESS:
    case GET_SINGLE_JOB_SKILLS_SUCCESS:
      return {
        ...state,
        skills: payload,
      }
    case ADD_JOB_FAIL:
    case ADD_JOB_SKILLS_FAIL:
    case GET_LAST_ADDED_JOB_FAIL:
    case GET_ALL_JOB_FAIL:
    case GET_SINGLE_JOB_FAIL:
    case GET_ALL_SKILLS_FAIL:
    case GET_JOBS_FAIL:
    case GET_SINGLE_JOB_SKILLS_FAIL:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default job
