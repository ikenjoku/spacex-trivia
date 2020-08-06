import { put, takeLatest, call } from 'redux-saga/effects'
import {
  FETCH_ROCKETS
} from '../actionTypes'
import SpaceXAPI from '../../services/SpaceXAPI'
import apiErrorHandler from '../../services/apiErrorHandler'
import {
  fetchRocketsSuccess,
  fetchRocketsFailure
} from '../actionCreators/rocketActions'

export function* fetchRocketsSaga() {
  let response
  try {
    response = yield call(SpaceXAPI.getRockets)
    yield put(fetchRocketsSuccess(response.data))
  }
  catch(error) {
    const errorMessage = apiErrorHandler(error)
    yield put(fetchRocketsFailure(errorMessage))
  }
}

export function* watchFetchRockets() {
  yield takeLatest(FETCH_ROCKETS, fetchRocketsSaga)
}