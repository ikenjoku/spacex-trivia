import { all } from 'redux-saga/effects'
import {
  watchFetchHistory
} from './historySaga'
import {
  watchFetchLaunches
} from './launchSaga'

function* rootSaga() {
  yield all([
    watchFetchHistory(),
    watchFetchLaunches()
  ])
}

export default rootSaga