import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  * {
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color:transparent;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    & #root {
      height:100%;
    }
  }
`

ReactDOM.render(
      <Router>
        <GlobalStyle />
        <App />
      </Router>,
  document.getElementById('root')
)

