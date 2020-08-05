import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchLaunch, postLaunchData } from '../../redux/actionCreators/launchActions'
import { AppLoader } from '../common'

const PageTitle = styled.div`
  margin: 1em auto 1em;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.5em;
  }
`
const Media = styled.div`
  margin: 2em auto 2em;
`

const Details = styled.div`
  margin: 1em auto 1em;
`

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 1em;
`

const LaunchInfo = styled.div`
  width: 100%;
  height: 95%;
`

const Button = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  outline: none;
  font-weight: 600;
  background-color: #595a59;
  color: white;
`

const YoutubeIframe = styled.iframe`
  @media (max-width: 500px) {
    width: 100%;
  }
  width: 500px;
  height: 400px;
  margin-right: auto;
  margin-left: auto;
`

const SendDataForm = styled.form`
  /* display: fl */
`
const SendDataOptions = styled.select`
  padding: .65em;
  outline: auto;
  border-radius: 5px;
  width: 250px;
  font-style: italic;
  font-weight: 600;
  font-family: monospace;
  font-size: 14px;
`
const SendButton = styled.button`
  padding: .65em;
  outline: auto;
  border-radius: 5px;
  font-weight: 600;
  font-family: monospace;
  font-size: 14px;
`

const FormContainer = styled.div`
  margin-top: 4em;
`

const FormTitle = styled.div`
  font-family: 'Fira Sans', sans-serif;
  margin-bottom: 1em;
  border-top: 3px solid #f5f4f0;
  padding-top: 1em;
`


export default function LaunchDetail({ launchId, closeModal }) {
  const launchDetails = useSelector(state => state.launch)
  const { loading, launch, error } = launchDetails
  const { flight_number, mission_name, details, launch_year, links  } = launch
  const dispatch = useDispatch()
  const [avaialbleFields, setAvaialbleFields] = useState([])
  const [selectedField, setSelectedField] = useState([])

  useEffect(() => {
      dispatch(fetchLaunch(launchId))
  }, [])

    let hasYoutubeId
    let hasImages
    let hasLargeLogo

  if (launch.flight_number) {
    hasYoutubeId = links.youtube_id
    hasImages = links.flickr_images.length
    hasLargeLogo = links.mission_patch
  }

  useEffect(() => {
    if (launch.flight_number) {
      let availableData = []
      for (let props in launch) {
        availableData.push(props)
      }
      setAvaialbleFields(() => [...availableData])
    }
  }, [launch])

  const sendData = (e) => {
    e.preventDefault()
    const data = launch[selectedField]
    console.log('sending data to black hole', data)
    dispatch(postLaunchData(data))
  }

  return (
    <LaunchInfo>
      { loading ? <AppLoader /> : (
        <>
          { launch && (
            <>
              <Container>
                <PageTitle>
                  <p>Launch {flight_number}:{ mission_name }</p>
                  <p>{launch_year}</p>
                </PageTitle>
                <Media>
                  { hasYoutubeId && (
                    <YoutubeIframe
                      src={`https://www.youtube.com/embed/${hasYoutubeId}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></YoutubeIframe>
                  ) }
                </Media>
                <Details>{details}</Details>
                <FormContainer>
                  <FormTitle>Launch data to Space</FormTitle>
                  <form onSubmit={sendData}>
                    <SendDataOptions
                      name='send-launch-date'
                      onChange={e => setSelectedField(e.target.value)}
                    >
                      <option value="">Select data to send</option>
                      { avaialbleFields.map((field) =>
                        <option key={field} value={field}>{field}</option>) }
                    </SendDataOptions>
                    <SendButton disabled={!selectedField} type='submit'>Send</SendButton>
                  </form>
                </FormContainer>
              </Container>
              <Button onClick={closeModal}>Close</Button>
            </>
          )}
          { error && 'There was an error. Please try again.' }
        </>
      )}
    </LaunchInfo>
  )
}
