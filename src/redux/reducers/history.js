import {
  FETCH_HISTORY,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_FAILURE
} from '../actionTypes'

const initialState = {
  history: [],
  loading: false,
  historyError: null
}

const history = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_HISTORY:
      return {
        ...state, loading: true
      }
    case FETCH_HISTORY_SUCCESS:
      return {
        ...state, loading: false, history: action.history
      }
    case FETCH_HISTORY_FAILURE:
      return {
        ...state, loading: false, historyError: action.error
      }
    default:
      return state
  }
}

export default history