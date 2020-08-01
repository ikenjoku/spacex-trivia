import {
  FETCH_HISTORY,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_FAILURE
} from '../actionTypes'

export const fetchHistory = () => ({
  type: FETCH_HISTORY
});

export const fetchHistorySuccess = ({history}) => ({
  type: FETCH_HISTORY_SUCCESS,
  history
});

export const fetchHistoryFailure = (error) => ({
  type: FETCH_HISTORY_FAILURE,
  error
});