import {
  FETCH_LAUNCH,
  FETCH_LAUNCH_SUCCESS,
  FETCH_LAUNCH_FAILURE
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