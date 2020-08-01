import {
  FETCH_LAUNCHES,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_FAILURE
} from '../actionTypes'

export const fetchLaunches = () => ({
  type: FETCH_LAUNCHES
});

export const fetchLaunchesSuccess = ({launches}) => ({
  type: FETCH_LAUNCHES_SUCCESS,
  launches
});

export const fetchLaunchesFailure = (error) => ({
  type: FETCH_LAUNCHES_FAILURE,
  error
});