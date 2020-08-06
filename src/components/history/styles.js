import styled from 'styled-components'

export const HistoryCardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1em;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 3px solid #f5f4f0;

  & :hover {
    background-color: ${({ theme }) => theme.sidebar};
  }
`

export const TitleContainer = styled.div`
  @media (min-width: 500px) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  margin-bottom: 2em;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 500;
  font-size: 1.5em;
  color: ${({ theme }) => theme.highlight};
  p {
    padding-bottom: .5em;
  }
`

export const Details = styled.div`
  margin-bottom: 2em;
`

export const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > p {
    margin-right: .5em;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & > a {
    margin-right: .5em;
    text-decoration: none;
  }
`

export const Icon = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.highlight};
`

export const PageTitle = styled.h1`
  padding-right: .5em;
  padding-left: .5em;
  max-width: 800px;
  margin: 1em auto 1em;
`