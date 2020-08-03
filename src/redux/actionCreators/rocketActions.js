import {
  FETCH_ROCKETS,
  FETCH_ROCKETS_SUCCESS,
  FETCH_ROCKETS_FAILURE
} from '../actionTypes'

export const fetchRockets = () => ({
  type: FETCH_ROCKETS
})

export const fetchRocketsSuccess = (rockets) => ({
  type: FETCH_ROCKETS_SUCCESS,
  rockets
})

export const fetchRocketsFailure = (error) => ({
  type: FETCH_ROCKETS_FAILURE,
  error
})