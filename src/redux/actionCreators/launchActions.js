import {
  FETCH_LAUNCH,
  FETCH_LAUNCH_SUCCESS,
  FETCH_LAUNCH_FAILURE,
  POST_LAUNCH_DATA,
  POST_LAUNCH_DATA_SUCCESS,
  POST_LAUNCH_DATA_FAILURE
} from '../actionTypes'

export const fetchLaunch = (launchId) => ({
  type: FETCH_LAUNCH,
  launchId
})

export const fetchLaunchSuccess = (launch) => ({
  type: FETCH_LAUNCH_SUCCESS,
  launch
})

export const fetchLaunchFailure = (error) => ({
  type: FETCH_LAUNCH_FAILURE,
  error
})

export const postLaunchData = (data) => ({
  type: POST_LAUNCH_DATA,
  data
})

export const postLaunchDataSuccess = (data) => ({
  type: POST_LAUNCH_DATA_SUCCESS,
  data
})

export const postLaunchDataFailure = (error) => ({
  type: POST_LAUNCH_DATA_FAILURE,
  error
})