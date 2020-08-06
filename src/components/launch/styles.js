import styled from 'styled-components'

//RocketOrbitFilter
export const OrbitFilter = styled.select`
  @media (max-width: 500px) {
    margin-top: 1.5em;
  }
  padding: .65em;
  outline: auto;
  border-radius: 5px;
  width: 250px;
  font-style: italic;
  font-weight: 600;
  font-family: monospace;
  font-size: 14px;
`
//PaginatedLaunches
export const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px 15px;
    border-radius: 5px;
    outline: none;
    font-weight: 600;
    background-color: #595a59;
    color: white;
  }

  button:disabled {
    color: grey;
    background-color: grey;
  }
`

export const NoContent = styled.div`
  font-size: 2em;
  color: #587b58;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`

//LaunchList
export const Filters = styled.div`
  @media (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  padding-right: 1em;
  padding-left: 1em;
  max-width: 800px;
  margin: 1em auto 1em;
`

export const FilterInput = styled.input`
  padding: .65em;
  outline: auto;
  border-radius: 5px;
  min-width: 250px;
  font-style: italic;
  font-weight: 600;
  font-family: monospace;
  font-size: 14px;
`

//LaunchDetail
export const PageTitle = styled.div`
  margin: 1em auto 1em;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.5em;
  }
`
export const Media = styled.div`
  margin: 2em auto 2em;
`

export const Details = styled.div`
  color: ${({ theme }) => theme.text};
  margin: 1em auto 1em;
`

export const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 1em;
`

export const LaunchInfo = styled.div`
  background-color: ${({ theme }) => theme.body};
  width: 100%;
  height: 95%;
`

export const Button = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  outline: none;
  font-weight: 600;
  background-color: #595a59;
  color: white;
`

export const YoutubeIframe = styled.iframe`
  @media (max-width: 500px) {
    width: 100%;
  }
  width: 500px;
  height: 400px;
  margin-right: auto;
  margin-left: auto;
`

export const SendDataOptions = styled.select`
  padding: .65em;
  outline: auto;
  border-radius: 5px;
  width: 250px;
  font-style: italic;
  font-weight: 600;
  font-family: monospace;
  font-size: 14px;
`
export const SendButton = styled.button`
  padding: .65em;
  outline: auto;
  border-radius: 5px;
  font-weight: 600;
  font-family: monospace;
  font-size: 14px;
`

export const FormContainer = styled.div`
  margin-top: 4em;
`

export const FormTitle = styled.div`
  font-family: 'Fira Sans', sans-serif;
  margin-bottom: 1em;
  border-top: 3px solid #f5f4f0;
  padding-top: 1em;
`

//LaunchCard
export const LaunchCardContainer = styled.div`
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

  cursor: pointer;
  margin-bottom: 2em;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 500;
  font-size: 1.5em;
  color: ${({ theme }) => theme.highlight};
  p {
    padding-bottom: .5em;
  }
`

export const LaunchCardDetails = styled.div`
  cursor: pointer;
`
export const Payloads = styled.div`
`

export const PayloadContainer = styled.div`
  margin-bottom: 1em;
`

export const LaunchPageTitle = styled.h1`
  padding-right: .5em;
  padding-left: .5em;
  max-width: 800px;
  margin: 1em auto 1em;
`