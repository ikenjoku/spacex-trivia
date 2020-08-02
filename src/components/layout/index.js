import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import MainApp from './MainApp'
import { Wrapper, Main } from './styles'

const Layout = () => {

  return (
    <>
      <Header/>
      <Wrapper>
        <Sidebar/>
        <Main>
          <MainApp/>
        </Main>
      </Wrapper>
    </>
  )
}

export default Layout