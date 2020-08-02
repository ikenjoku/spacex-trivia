import {
  FETCH_ROCKETS,
  FETCH_ROCKETS_SUCCESS,
  FETCH_ROCKETS_FAILURE
} from '../actionTypes'

const initialState = {
  rockets: [],
  loading: false,
  rocketsError: null
}

const rockets = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return {
        ...state, loading: true
      }
    case FETCH_ROCKETS_SUCCESS:
      return {
        ...state, loading: false, rockets: action.rockets
      }
    case FETCH_ROCKETS_FAILURE:
      return {
        ...state, loading: false, rocketsError: action.error
      }
    default:
      return state
  }
}

export default rockets