import axios from 'axios'
import {
  ADD_PROFILE_INFO_SUCCESS,
  ADD_PROFILE_INFO_FAIL,
  GET_PROFILE_INFO_SUCCESS,
  GET_PROFILE_INFO_FAIL,
  GET_SINGLE_PROFILE_INFO_SUCCESS,
  GET_SINGLE_PROFILE_INFO_FAIL,
  UPDATE_PROFILE_INFO_SUCCESS,
  UPDATE_PROFILE_INFO_FAIL,
  GET_SINGLE_USER_PROFILE_SUCCESS,
  GET_SINGLE_USER_PROFILE_FAIL,
  ADD_EDUCATION_SUCCESS,
  ADD_EDUCATION_FAIL,
  GET_EDUCATION_SUCCESS,
  GET_EDUCATION_FAIL,
  GET_SINGLE_EDUCATION_SUCCESS,
  GET_SINGLE_EDUCATION_FAIL,
  UPDATE_EDUCATION_SUCCESS,
  UPDATE_EDUCATION_FAIL,
  DELETE_EDUCATION_SUCCESS,
  DELETE_EDUCATION_FAIL,
  GET_USER_EDUCATION_SUCCESS,
  GET_USER_EDUCATION_FAIL,
  ADD_EXPERIENCE_SUCCESS,
  ADD_EXPERIENCE_FAIL,
  GET_EXPERIENCE_SUCCESS,
  GET_EXPERIENCE_FAIL,
  GET_SINGLE_EXPERIENCE_SUCCESS,
  GET_SINGLE_EXPERIENCE_FAIL,
  UPDATE_EXPERIENCE_SUCCESS,
  UPDATE_EXPERIENCE_FAIL,
  GET_USER_EXPERIENCE_SUCCESS,
  GET_USER_EXPERIENCE_FAIL,
  ADD_AVAILABILITY_SUCCESS,
  ADD_AVAILABILITY_FAIL,
  GET_AVAILABILITY_SUCCESS,
  GET_AVAILABILITY_FAIL,
  GET_SINGLE_AVAILABILITY_SUCCESS,
  GET_SINGLE_AVAILABILITY_FAIL,
  UPDATE_AVAILABILITY_SUCCESS,
  UPDATE_AVAILABILITY_FAIL,
  GET_USER_AVAILABILITY_SUCCESS,
  GET_USER_AVAILABILITY_FAIL,
  ADD_ROLE_SALARY_SUCCESS,
  ADD_ROLE_SALARY_FAIL,
  GET_ROLE_SALARY_SUCCESS,
  GET_ROLE_SALARY_FAIL,
  GET_SINGLE_ROLE_SALARY_SUCCESS,
  GET_SINGLE_ROLE_SALARY_FAIL,
  UPDATE_ROLE_SALARY_SUCCESS,
  UPDATE_ROLE_SALARY_FAIL,
  GET_USER_ROLE_SALARY_SUCCESS,
  GET_USER_ROLE_SALARY_FAIL,
  ADD_COMPANY_PROFILE_SUCCESS,
  ADD_COMPANY_PROFILE_FAIL,
  GET_COMPANY_PROFILE_SUCCESS,
  GET_COMPANY_PROFILE_FAIL,
  GET_SINGLE_COMPANY_PROFILE_SUCCESS,
  GET_SINGLE_COMPANY_PROFILE_FAIL,
  UPDATE_COMPANY_PROFILE_SUCCESS,
  UPDATE_COMPANY_PROFILE_FAIL,
  ADD_USER_SKILLS_SUCCESS,
  ADD_USER_SKILLS_FAIL,
  GET_USER_SKILLS_SUCCESS,
  GET_USER_SKILLS_FAIL,
  GET_USER_ALL_SKILLS_SUCCESS,
  GET_USER_ALL_SKILLS_FAIL,
  GET_SINGLE_USER_SKILLS_SUCCESS,
  GET_SINGLE_USER_SKILLS_FAIL,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAIL,
} from './types'

// ===================================
// ===================================
// USERS
// ===================================
// ===================================
// GET USERS
// ===================================
export const getAllUsers = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/list`,
      config
    )
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_USERS_FAIL,
    })
  }
}

export const getRecommendUsers = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/recommend/list`,
      {job: id},
      config
    )
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_USERS_FAIL,
    })
  }
}

// ===================================
// GET SINGLE USER
// ===================================
export const getSingleUser = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/list/${id}`,
      config
    )
    dispatch({
      type: GET_SINGLE_USER_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_SINGLE_USER_FAIL,
    })
  }
}

// ===================================
// ===================================
// PROFILE INFO
// ===================================
// ===================================
// ADD USER PROFILE INFO
// ===================================
export const AddProfileInfo = (
  user,
  first_name,
  last_name,
  country,
  phone,
  bio,
  github_link,
  linkedin_link
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
    first_name,
    last_name,
    country,
    phone,
    bio,
    github_link,
    linkedin_link,
  })

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/profile`,
      body,
      config
    )
    dispatch({
      type: ADD_PROFILE_INFO_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: ADD_PROFILE_INFO_FAIL,
    })
  }
}

// ===================================
// GET USER PROFILE INFO
// ===================================
export const getProfileInfo = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/profile`,
      config
    )
    dispatch({
      type: GET_PROFILE_INFO_SUCCESS,
      payload: res.data[0],
    })
  } catch (err) {
    dispatch({
      type: GET_PROFILE_INFO_FAIL,
    })
  }
}

// ===================================
// GET SINGLE PROFILE INFO
// ===================================
export const getSingleProfileInfo = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/profile/${id}`,
      config
    )
    dispatch({
      type: GET_SINGLE_PROFILE_INFO_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_SINGLE_PROFILE_INFO_FAIL,
    })
  }
}

// ===================================
// UPDATE USER PROFILE INFO
// ===================================
export const updateProfile = (
  id,
  user,
  first_name,
  last_name,
  country,
  phone,
  bio,
  github_link,
  linkedin_link
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
    first_name,
    last_name,
    country,
    phone,
    bio,
    github_link,
    linkedin_link,
  })

  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/profile/${id}`,
      body,
      config
    )
    dispatch({
      type: UPDATE_PROFILE_INFO_SUCCESS,
      payload: res.data,
    })
    dispatch(getProfileInfo())
  } catch (err) {
    dispatch({
      type: UPDATE_PROFILE_INFO_FAIL,
    })
  }
}

// ===================================
// GET SINGLE USER PROFILE INFO
// ===================================
export const getSingleUserProfileInfo = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/profile/${id}/user`,
      config
    )
    dispatch({
      type: GET_SINGLE_USER_PROFILE_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_SINGLE_USER_PROFILE_FAIL,
    })
  }
}

// ===================================
// ===================================
// USER SKILLS
// ===================================
// ===================================
// ADD USER SKILLS
// ===================================
export const AddUserSkills = (user, name, rating) => async (dispatch) => {
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
    name,
    rating,
  })

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/user_skills`,
      body,
      config
    )
    dispatch({
      type: ADD_USER_SKILLS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: ADD_USER_SKILLS_FAIL,
    })
  }
}

// ===================================
// GET USER SKILLS
// ===================================
export const getUserSkills = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/user_skills`,
      config
    )
    dispatch({
      type: GET_USER_SKILLS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_USER_SKILLS_FAIL,
    })
  }
}

// ===================================
// GET ALL SKILLS
// ===================================
export const getAllSkillsOfUsers = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/user_skills/list`,
      config
    )
    dispatch({
      type: GET_USER_ALL_SKILLS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_USER_ALL_SKILLS_FAIL,
    })
  }
}

// ===================================
// GET SINGLE USER ALL SKILLS
// ===================================
export const getSingleUserSkills = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/user_skills/list/${id}`,
      config
    )
    dispatch({
      type: GET_SINGLE_USER_SKILLS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_SINGLE_USER_SKILLS_FAIL,
    })
  }
}

// ===================================
// ===================================
// EXPERIENCE
// ===================================
// ===================================
// ADD USER EXPERIENCE
// ===================================
export const addExperience = (
  user,
  years_of_experience,
  years_of_remote_experience,
  english_proficiency
) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/experience`,
      {
        user: user,
        years_of_experience: years_of_experience,
        years_of_remote_experience: years_of_remote_experience,
        english_proficiency: english_proficiency,
      },
      config
    )
    dispatch({
      type: ADD_EXPERIENCE_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: ADD_EXPERIENCE_FAIL,
    })
  }
}

// ===================================
// GET USER EXPERIENCE
// ===================================
export const getExperience = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/experience`,
      config
    )
    dispatch({
      type: GET_EXPERIENCE_SUCCESS,
      payload: res.data[0],
    })
  } catch (err) {
    dispatch({
      type: GET_EXPERIENCE_FAIL,
    })
  }
}

// ===================================
// GET SINGLE EXPERIENCE
// ===================================
export const getSingleExperience = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/experience/${id}`,
      config
    )
    dispatch({
      type: GET_SINGLE_EXPERIENCE_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_SINGLE_EXPERIENCE_FAIL,
    })
  }
}

// ===================================
// GET SINGLE USER EXPERIENCE
// ===================================
export const getSingleUserExperience = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/experience/${id}/user`,
      config
    )
    dispatch({
      type: GET_USER_EXPERIENCE_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_USER_EXPERIENCE_FAIL,
    })
  }
}

// ===================================
// UPDATE USER EXPERIENCE
// ===================================
export const updateExperience = (
  id,
  user,
  years_of_experience,
  years_of_remote_experience,
  english_proficiency
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
    years_of_experience,
    years_of_remote_experience,
    english_proficiency,
  })

  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/experience/${id}`,
      body,
      config
    )
    dispatch({
      type: UPDATE_EXPERIENCE_SUCCESS,
      payload: res.data,
    })
    dispatch(getExperience())
  } catch (err) {
    dispatch({
      type: UPDATE_EXPERIENCE_FAIL,
    })
  }
}

// ===================================
// ===================================
// AVAILABILITY
// ===================================
// ===================================
// ADD USER AVAILABILITY
// ===================================
export const addAvailability = (
  user,
  availability_type,
  ready_to_start_in
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
    availability_type,
    ready_to_start_in,
  })

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/availability`,
      body,
      config
    )
    dispatch({
      type: ADD_AVAILABILITY_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: ADD_AVAILABILITY_FAIL,
    })
  }
}

// ===================================
// GET USER AVAILABILITY
// ===================================
export const getAvailability = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/availability`,
      config
    )
    dispatch({
      type: GET_AVAILABILITY_SUCCESS,
      payload: res.data[0],
    })
  } catch (err) {
    dispatch({
      type: GET_AVAILABILITY_FAIL,
    })
  }
}

// ===================================
// GET SINGLE AVAILABILITY
// ===================================
export const getSingleAvailability = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/availability/${id}`,
      config
    )
    dispatch({
      type: GET_SINGLE_AVAILABILITY_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_SINGLE_AVAILABILITY_FAIL,
    })
  }
}

// ===================================
// UPDATE USER AVAILABILITY
// ===================================
export const updateAvailability = (
  id,
  user,
  availability_type,
  ready_to_start_in
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
    availability_type,
    ready_to_start_in,
  })

  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/availability/${id}`,
      body,
      config
    )
    dispatch({
      type: UPDATE_AVAILABILITY_SUCCESS,
      payload: res.data,
    })
    dispatch(getAvailability())
  } catch (err) {
    dispatch({
      type: UPDATE_AVAILABILITY_FAIL,
    })
  }
}

// ===================================
// GET SINGLE USER AVAILABILITY BY ID
// ===================================
export const getSingleUserAvailability = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/availability/${id}/user`,
      config
    )
    dispatch({
      type: GET_USER_AVAILABILITY_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_USER_AVAILABILITY_FAIL,
    })
  }
}

// ===================================
// ===================================
// ROLE & SALARY
// ===================================
// ===================================
// ADD USER ROLE & SALARY
// ===================================
export const addRole = (user, preferred_role, current_salary) => async (
  dispatch
) => {
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
    preferred_role,
    current_salary,
  })

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/role`,
      body,
      config
    )
    dispatch({
      type: ADD_ROLE_SALARY_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: ADD_ROLE_SALARY_FAIL,
    })
  }
}

// ===================================
// GET USER ROLE & SALARY
// ===================================
export const getRole = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/role`,
      config
    )
    dispatch({
      type: GET_ROLE_SALARY_SUCCESS,
      payload: res.data[0],
    })
  } catch (err) {
    dispatch({
      type: GET_ROLE_SALARY_FAIL,
    })
  }
}

// ===================================
// GET SINGLE ROLE AND SALARY
// ===================================
export const getSingleRole = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/role/${id}`,
      config
    )
    dispatch({
      type: GET_SINGLE_ROLE_SALARY_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_SINGLE_ROLE_SALARY_FAIL,
    })
  }
}

// ===================================
// UPDATE USER ROLE AND SALARY
// ===================================
export const updateRole = (id, user, preferred_role, current_salary) => async (
  dispatch
) => {
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
    preferred_role,
    current_salary,
  })

  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/role/${id}`,
      body,
      config
    )
    dispatch({
      type: UPDATE_ROLE_SALARY_SUCCESS,
      payload: res.data,
    })
    dispatch(getRole())
  } catch (err) {
    dispatch({
      type: UPDATE_ROLE_SALARY_FAIL,
    })
  }
}

// ===================================
// GET SINGLE USER ROLE AND SALARY
// ===================================
export const getSingleUserRole = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/role/${id}/user`,
      config
    )
    dispatch({
      type: GET_USER_ROLE_SALARY_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_USER_ROLE_SALARY_FAIL,
    })
  }
}

// ===================================
// ===================================
// EDUCATION
// ===================================
// ===================================
// ADD USER EDUCATION
// ===================================
export const addEducation = (
  user,
  degree,
  college,
  start_date,
  end_date
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
    degree,
    college,
    start_date,
    end_date,
  })

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/education`,
      body,
      config
    )
    dispatch({
      type: ADD_EDUCATION_SUCCESS,
      payload: res.data,
    })
    dispatch(getEducation())
  } catch (err) {
    dispatch({
      type: ADD_EDUCATION_FAIL,
    })
  }
}

// ===================================
// GET USER EDUCATION
// ===================================
export const getEducation = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/education`,
      config
    )
    dispatch({
      type: GET_EDUCATION_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_EDUCATION_FAIL,
    })
  }
}

// ===================================
// GET SINGLE USER EDUCATION
// ===================================
export const getSingleEducation = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/education/${id}`,
      config
    )
    dispatch({
      type: GET_SINGLE_EDUCATION_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_SINGLE_EDUCATION_FAIL,
    })
  }
}

// ===================================
// UPDATE USER EDUCATION
// ===================================
export const updateEducation = (
  id,
  user,
  degree,
  college,
  start_date,
  end_date
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
    degree,
    college,
    start_date,
    end_date,
  })

  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/education/${id}`,
      body,
      config
    )
    dispatch({
      type: UPDATE_EDUCATION_SUCCESS,
      payload: res.data,
    })
    dispatch(getEducation())
  } catch (err) {
    dispatch({
      type: UPDATE_EDUCATION_FAIL,
    })
  }
}

// ===================================
// DELETE USER EDUCATION
// ===================================
export const deleteEducation = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}/user/education/${id}`,
      config
    )
    dispatch({
      type: DELETE_EDUCATION_SUCCESS,
      payload: res.data,
    })
    dispatch(getEducation())
  } catch (err) {
    dispatch({
      type: DELETE_EDUCATION_FAIL,
    })
  }
}

// ===================================
// GET SINGLE USER EDUCATION
// ===================================
export const getSingleUserEducation = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/education/${id}/user`,
      config
    )
    dispatch({
      type: GET_USER_EDUCATION_SUCCESS,
      payload: res.data,
    })
    console.log(res.data)
  } catch (err) {
    dispatch({
      type: GET_USER_EDUCATION_FAIL,
    })
  }
}

// ===================================
// ===================================
// COMPANY PROFILE
// ===================================
// ===================================
// ADD USER COMPANY PROFILE
// ===================================
export const addCompanyProfile = (
  user,
  name,
  about,
  phone,
  address,
  website,
  linkedin_link,
  twitter_link
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
    name,
    about,
    phone,
    address,
    website,
    linkedin_link,
    twitter_link,
  })

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/company_profile`,
      body,
      config
    )
    dispatch({
      type: ADD_COMPANY_PROFILE_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: ADD_COMPANY_PROFILE_FAIL,
    })
  }
}

// ===================================
// GET COMPANY PROFILES
// ===================================
export const getCompanyProfiles = () => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/company_profile`,
      config
    )
    dispatch({
      type: GET_COMPANY_PROFILE_SUCCESS,
      payload: res.data[0],
    })
  } catch (err) {
    dispatch({
      type: GET_COMPANY_PROFILE_FAIL,
    })
  }
}

// ===================================
// GET SINGLE COMPANY PROFILE
// ===================================
export const getSingleCompanyProfile = (id) => async (dispatch) => {
  // Add Request Headers
  const config = {
    headers: {
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/company_profile/${id}`,
      config
    )
    dispatch({
      type: GET_SINGLE_COMPANY_PROFILE_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_SINGLE_COMPANY_PROFILE_FAIL,
    })
  }
}

// ===================================
// UPDATE USER ROLE AND SALARY
// ===================================
export const updateCompanyProfile = (
  id,
  user,
  name,
  about,
  address,
  phone,
  website,
  linkedin_link,
  twitter_link
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
    name,
    about,
    address,
    phone,
    website,
    linkedin_link,
    twitter_link,
  })

  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/company_profile/${id}`,
      body,
      config
    )
    dispatch({
      type: UPDATE_COMPANY_PROFILE_SUCCESS,
      payload: res.data,
    })
    dispatch(getRole())
  } catch (err) {
    dispatch({
      type: UPDATE_COMPANY_PROFILE_FAIL,
    })
  }
}
