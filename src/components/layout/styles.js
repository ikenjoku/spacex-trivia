import styled from 'styled-components'

export const Wrapper = styled.div`
  @media (min-width: 700px) {
    display: flex;
    top: 64px;
    position: relative;
    height: calc(100% - 64px);
    width: 100%;
    flex: auto;
    flex-direction: column;
  }
`

export const Main = styled.main`
  position: fixed;
  height: calc(100% - 185px);
  width: 100%;
  padding: 1em;
  overflow-y: scroll;

  @media (min-width: 700px) {
    flex: 1;
    margin-left: 220px;
    height: calc(100% - 64px);
    width: calc(100% - 220px);
  }
`

// Header
export const HeaderBar = styled.header`
  @media (max-width: 500px) {
    justify-content: center;
  }
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: ${({ theme }) => theme.body };
  color: ${({ theme }) => theme.text };
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`

export const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
  cursor: pointer;
`

export const NotFoundPage = styled.div`
  font-size: 2em;
  color: ${ ({ theme }) => theme.text };
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: ${({ theme }) => theme.highlight };
    cursor: pointer;
    margin-top: 3em;

    span {
      padding-right: 0.5em;
      font-size: 1.5em;
    }

  }

  a:visited,
  a:hover,
  a:focus {
    color: ${({ theme }) => theme.highlight };
  }
`

//Sidebar
export const Nav = styled.nav`
  padding: 1em;
  background: ${({ theme }) => theme.sidebar };

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

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: ${({ theme }) => theme.links };

    span {
      padding-right: 0.5em;
      font-size: 1.5em;
    }

  }

  .active-link,
  .active-link:focus,
  .active-link:active {
    border-bottom: #587b58 4px solid;
    padding-bottom: 5px;
  }

  a:visited,
  a:hover,
  a:focus {
    color: ${({ theme }) => theme.links };
  }
`

export const Icon = styled.span`
  font-size: 24px;
  color: #587b58;
`