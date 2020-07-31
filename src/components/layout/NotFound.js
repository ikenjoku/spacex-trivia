import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <p>This is a black hole</p>
      <p>404</p>
      <Link to="/">Get Back to Orbit</Link>
    </div>
  )
}

export default NotFound