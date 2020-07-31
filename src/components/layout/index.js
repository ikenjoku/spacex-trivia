import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import MainApp from './MainApp'
import { AppContainer, Main } from './styles'

const Layout = () => {

  return (
    <AppContainer>
      <Header/>
      <Main>
        <Sidebar/>
        <MainApp/>
      </Main>
    </AppContainer>
  )
}

export default Layout