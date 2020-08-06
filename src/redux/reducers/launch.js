import {
  FETCH_LAUNCH,
  FETCH_LAUNCH_SUCCESS,
  FETCH_LAUNCH_FAILURE,
  POST_LAUNCH_DATA,
  POST_LAUNCH_DATA_SUCCESS,
  POST_LAUNCH_DATA_FAILURE
} from '../actionTypes'

const initialState = {
  launch: {},
  loading: false,
  launchError: null,
  sendingData: false
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
    case POST_LAUNCH_DATA:
      return {
        ...state, sendingData: true
      }
    case POST_LAUNCH_DATA_SUCCESS:
      return {
        ...state, loading: false
      }
    case POST_LAUNCH_DATA_FAILURE:
      return {
        ...state, loading: false, launchError: action.error
      }
    default:
      return state
  }
}

export default launch