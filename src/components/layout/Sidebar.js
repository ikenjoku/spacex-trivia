import React from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from './routes'
import { Nav, NavList, Icon } from './styles'

const Sidebar = () => {
  const appRoutes = routes.map(({ path, name, icon }) => (
    <li key={path}>
      <NavLink activeClassName='active-link' to={path}>
        <Icon>
          {icon}
        </Icon>
        {name}
      </NavLink>
    </li>
  ))

  return (
    <Nav>
      <NavList>
        {appRoutes}
      </NavList>
    </Nav>
  )
}

export default Sidebar