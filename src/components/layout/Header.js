import React from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderBar, LogoText } from './styles'

const Header = () => {
  const history = useHistory()

  return (
    <HeaderBar>
      <LogoText
        onClick={() => history.push('/')}
      >SpaceX-Trivia</LogoText>
    </HeaderBar>
  )
}

export default Header