import {
  FETCH_LAUNCHES,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_FAILURE
} from '../actionTypes'

const initialState = {
  launches: [],
  loading: false,
  launchesError: null
}

const launches = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_LAUNCHES:
      return {
        ...state, loading: true
      }
    case FETCH_LAUNCHES_SUCCESS:
      return {
        ...state, loading: false, launches: action.launches
      }
    case FETCH_LAUNCHES_FAILURE:
      return {
        ...state, loading: false, launchesError: action.error
      }
    default:
      return state
  }
}

export default launches