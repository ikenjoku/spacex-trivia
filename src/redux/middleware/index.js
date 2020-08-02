import { all } from 'redux-saga/effects'
import {
  watchFetchHistory
} from './historySaga'
import {
  watchFetchLaunches
} from './launchSaga'
import {
  watchFetchRockets
} from './rocketSaga'

function* rootSaga() {
  yield all([
    watchFetchHistory(),
    watchFetchLaunches(),
    watchFetchRockets()
  ])
}

export default rootSaga