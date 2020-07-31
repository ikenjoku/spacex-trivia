import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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

function App () {
  return (
    <div>
      <p>Hooray!!!!!. IT WORKED!</p>
    </div>
  )
}

ReactDOM.render(
      <>
        <GlobalStyle />
        <App />
      </>,
  document.getElementById('root')
)

