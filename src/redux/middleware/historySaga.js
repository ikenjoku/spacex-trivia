import { put, takeLatest, call } from 'redux-saga/effects'
import {
  FETCH_HISTORY
} from '../actionTypes'
import SpaceXAPI from '../../services/SpaceXAPI'
import apiErrorHandler from '../../services/apiErrorHandler'
import {
  fetchHistorySuccess,
  fetchHistoryFailure
} from '../actionCreators/historyActions'

export function* fetchHistorySaga() {
  let response
  try {
    response = yield call(SpaceXAPI.getHistory)
    yield put(fetchHistorySuccess(response.data))
  }
  catch(error) {
    const errorMessage = apiErrorHandler(error)
    yield put(fetchHistoryFailure(errorMessage))
  }
}

export function* watchFetchHistory() {
  yield takeLatest(FETCH_HISTORY, fetchHistorySaga)
}