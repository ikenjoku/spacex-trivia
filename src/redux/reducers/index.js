import { combineReducers } from 'redux'

import history from './history'
import launches from './launches'

const rootReducers = combineReducers({
  history,
  launches
})

export default rootReducers