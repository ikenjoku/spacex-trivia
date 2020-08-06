import React, { useState } from'react'
import Layout from './components/layout/index'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, darkTheme, lightTheme } from './theme'
import { useAppTheme } from './hooks'
import { LIGHT } from './utils'

export default function App () {
  const [theme, toggleTheme, mountedComponent] = useAppTheme()
  const currentTheme = theme === LIGHT ? lightTheme : darkTheme

  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider toggleTheme={toggleTheme} theme={currentTheme}>
      <Button theme={theme} onClick={toggleTheme}>
        <Icon>
          {theme === LIGHT ?
            <i className="fas fa-lightbulb"></i>
            : <i className="far fa-lightbulb"></i>}
        </Icon>
      </Button>
      <GlobalStyle />
      <Layout/>
    </ThemeProvider>
  )
}

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  position: absolute;
  top: 7px;
  right: 1em;
  z-index: 100;
  outline: none;
`
const Icon = styled.span`
  font-size: 24px;
  color: #587b58;
`