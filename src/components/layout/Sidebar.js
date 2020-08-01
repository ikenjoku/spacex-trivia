import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { routes } from './routes'



const Sidebar = () => {
  const appRoutes = routes.map(({ path, name, icon }) => (
    <li key={path}>
      <Link to={path}>
        <span aria-hidden="true" role="img">
          {icon}
        </span>
        {name}
      </Link>
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

const Nav = styled.nav`
  padding: 1em;
  background: #f5f4f0;

  @media (max-width: 700px) {
    padding-top: 64px;
  }

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;

    span {
      padding-right: 0.5em;
      font-size: 1.5em;
    }
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`

export default Sidebar