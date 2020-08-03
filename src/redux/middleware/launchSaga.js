import { put, takeLatest, call } from 'redux-saga/effects'
import {
  FETCH_LAUNCH,
  FETCH_LAUNCHES
} from '../actionTypes'
import SpaceXAPI from '../../services/SpaceXAPI'
import apiErrorHandler from '../../services/apiErrorHandler'
import {
  fetchLaunches,
  fetchLaunchesSuccess,
  fetchLaunchesFailure
} from '../actionCreators/launchesActions'

import {
  fetchLaunch,
  fetchLaunchSuccess,
  fetchLaunchFailure
} from '../actionCreators/launchActions'

export function* fetchLaunchesSaga() {
  let response
  try {
    response = yield call(SpaceXAPI.getLaunches)
    yield put(fetchLaunchesSuccess(response.data))
  }
  catch(error) {
    const errorMessage = apiErrorHandler(error)
    yield put(fetchLaunchesFailure(errorMessage))
  }
}

export function* watchFetchLaunches() {
  yield takeLatest(FETCH_LAUNCHES, fetchLaunchesSaga)
}


export function* fetchLaunchSaga(action) {
  let response
  try {
    const { launchId } = action
    response = yield call(SpaceXAPI.getLaunch, launchId)
    yield put(fetchLaunchSuccess(response.data))
  }
  catch(error) {
    const errorMessage = apiErrorHandler(error)
    yield put(fetchLaunchFailure(errorMessage))
  }
}

export function* watchFetchLaunch() {
  yield takeLatest(FETCH_LAUNCH, fetchLaunchSaga)
}