import { combineReducers } from 'redux'

import launch from './launch'
import rockets from './rockets'
import history from './history'
import launches from './launches'

const rootReducers = combineReducers({
  rockets,
  history,
  launches,
  launch
})

export default rootReducers