import axios from 'axios'
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
} from './types'

// ===================================
// ===================================
// JOBS
// ===================================
// ===================================
// ADD JOBS
// ===================================
export const AddJob = (
  user,
  title,
  description,
  work_email,
  hiring_needs,
  current_employees,
  name,
  phone,
  website,
  skills
) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  // Destructuring the Data
  const body = JSON.stringify({
    user,
    title,
    description,
    work_email,
    hiring_needs,
    current_employees,
    name,
    phone,
    website,
  })
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/job/`,
      body,
      config
    )
    dispatch({
      type: ADD_JOB_SUCCESS,
      payload: res.data,
    })
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/job/last`,
        config
      )
      dispatch({
        type: GET_LAST_ADDED_JOB_SUCCESS,
        payload: response.data,
      })
      skills.map((skill) => {
        dispatch(AddSkills(response.data.id, skill.value, skill.rating))
      })
    } catch (err) {
      dispatch({
        type: GET_LAST_ADDED_JOB_FAIL,
      })
    }
  } catch (err) {
    dispatch({
      type: ADD_JOB_FAIL,
    })
  }
}

// ===================================
// Get Last Added Job By User
// ===================================
export const getLastAddedJob = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/job/last`,
      config
    )
    dispatch({
      type: GET_LAST_ADDED_JOB_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_LAST_ADDED_JOB_FAIL,
    })
  }
}

// ===================================
// ADD Skills
// ===================================
export const AddSkills = (job, name, rating) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  // Destructuring the Data
  const body = JSON.stringify({
    job,
    name,
    rating,
  })

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/job/skills`,
      body,
      config
    )
    dispatch({
      type: ADD_JOB_SKILLS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: ADD_JOB_SKILLS_FAIL,
    })
  }
}

// ===================================
// GET ALL JOBS OF A USER
// ===================================
export const getJobs = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/job/`, config)
    dispatch({
      type: GET_ALL_JOB_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_ALL_JOB_FAIL,
    })
  }
}

// ===================================
// GET ALL JOBS
// ===================================
export const getAllJobs = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/job/list`,
      config
    )
    dispatch({
      type: GET_JOBS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_JOBS_FAIL,
    })
  }
}

// ===================================
// GET SINGLE JOB
// ===================================
export const getSingleJob = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/job/${id}/single`,
      config
    )
    dispatch({
      type: GET_SINGLE_JOB_SUCCESS,
      payload: res.data[0],
    })
  } catch (err) {
    dispatch({
      type: GET_SINGLE_JOB_FAIL,
    })
  }
}

// ===================================
// GET ALL SKILLS OF A USER
// ===================================
export const getAllSkills = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/job/skills`,
      config
    )
    dispatch({
      type: GET_ALL_SKILLS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_ALL_SKILLS_FAIL,
    })
  }
}

// ===================================
// GET SINGLE JOB ALL SKILLS
// ===================================
export const getSingleJobSkills = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/job/skills/${id}`,
      config
    )
    dispatch({
      type: GET_SINGLE_JOB_SKILLS_SUCCESS,
      payload: res.data,
    })
    console.log(res.data)
  } catch (err) {
    dispatch({
      type: GET_SINGLE_JOB_SKILLS_FAIL,
    })
  }
}
