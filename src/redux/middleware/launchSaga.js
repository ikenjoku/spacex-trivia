import { put, takeLatest, call } from 'redux-saga/effects'
import {
  FETCH_LAUNCHES
} from '../actionTypes'
import SpaceXAPI from '../../services/SpaceXAPI'
import apiErrorHandler from '../../services/apiErrorHandler'
import {
  fetchLaunches,
  fetchLaunchesSuccess,
  fetchLaunchesFailure
} from '../actionCreators/launchesActions'

export function* fetchLaunchesSaga() {
  let response
  try {
    response = yield call(SpaceXAPI.getLaunches);
    yield put(fetchLaunchesSuccess(response.data));
  }
  catch(error) {
    const errorMessage = apiErrorHandler(error);
    yield put(fetchLaunchesFailure(errorMessage));
  }
}

export function* watchFetchLaunches() {
  yield takeLatest(FETCH_LAUNCHES, fetchLaunchesSaga);
}