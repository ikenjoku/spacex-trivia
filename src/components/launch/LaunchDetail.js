import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLaunch, postLaunchData } from '../../redux/actionCreators/launchActions'
import { AppLoader } from '../common'
import {
  Media,
  Button,
  Details,
  PageTitle,
  Container,
  FormTitle,
  SendButton,
  LaunchInfo,
  YoutubeIframe,
  FormContainer,
  SendDataOptions
} from './styles'

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

  if (launch.flight_number) {
    hasYoutubeId = links.youtube_id
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
    console.log('sending data to black hole', {data})
    dispatch(postLaunchData({data}))
  }

  return (
    <LaunchInfo>
      { loading ? <AppLoader /> : (
        <>
          { launch && (
            <>
              <Container>
                <PageTitle>
                  <p>Launch {flight_number}: { mission_name }</p>
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
