import React from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderBar, LogoText, ExtraActions } from './styles'

const Header = () => {
  const history = useHistory()

  return (
    <HeaderBar>
      <LogoText onClick={() => history.push('/')}>SpaceX-Trivia</LogoText>
      <ExtraActions></ExtraActions>
    </HeaderBar>
  )
}

export default Header