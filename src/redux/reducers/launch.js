import {
  FETCH_LAUNCH,
  FETCH_LAUNCH_SUCCESS,
  FETCH_LAUNCH_FAILURE
} from '../actionTypes'

const initialState = {
  launch: {},
  loading: false,
  launchError: null
}

const launch = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_LAUNCH:
      return {
        ...state, loading: true
      }
    case FETCH_LAUNCH_SUCCESS:
      return {
        ...state, loading: false, launch: action.launch
      }
    case FETCH_LAUNCH_FAILURE:
      return {
        ...state, loading: false, launchError: action.error
      }
    default:
      return state
  }
}

export default launch