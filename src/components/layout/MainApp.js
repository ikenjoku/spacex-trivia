import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import History from '../history/index.js'
import Launch from '../launch/index.js'
import NotFound from './NotFound'

const MainApp = () => {

  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/history' />
      </Route>
      <Route exact path='/history'>
        <History />
      </Route>
      <Route path='/launches'>
        <Launch />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default MainApp