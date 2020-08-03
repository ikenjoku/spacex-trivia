import { combineReducers } from 'redux'

import rockets from './rockets'
import history from './history'
import launches from './launches'

const rootReducers = combineReducers({
  rockets,
  history,
  launches
})

export default rootReducers