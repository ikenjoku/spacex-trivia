import { all } from 'redux-saga/effects'
import {
  watchFetchHistory
} from './historySaga'
import {
  watchFetchLaunches,
  watchFetchLaunch
} from './launchSaga'
import {
  watchFetchRockets
} from './rocketSaga'

function* rootSaga() {
  yield all([
    watchFetchLaunches(),
    watchFetchHistory(),
    watchFetchRockets(),
    watchFetchLaunch()
  ])
}

export default rootSaga