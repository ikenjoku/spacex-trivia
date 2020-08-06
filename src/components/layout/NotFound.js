import React from 'react'
import { Link } from 'react-router-dom'
import { NotFoundPage } from './styles'

const NotFound = () => {
  return (
    <NotFoundPage>
      <h1>This is a black hole</h1>
      <h1>404</h1>
      <Link to="/">Get Back to Orbit</Link>
    </NotFoundPage>
  )
}

export default NotFound