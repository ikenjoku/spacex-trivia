import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
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
    color: ${({ theme }) => theme.text};
    background-color:${({ theme }) => theme.body};
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.50s linear;

    & #root {
      height:100%;
    }
  }

  #modal {
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }

#modal:empty {
    display: none;
  }
`
