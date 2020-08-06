import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AppLoader } from '../common'
import NotFound from './NotFound'
const History = lazy(() => import('../history'))
const Launch = lazy(() => import('../launch'))

const MainApp = () => {
  return (
    <Suspense fallback={<AppLoader/>}>
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
    </Suspense>
  )
}

export default MainApp