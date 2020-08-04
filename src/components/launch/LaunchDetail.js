import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchLaunch } from '../../redux/actionCreators/launchActions'
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

export default function LaunchDetail({ launchId, closeModal }) {
  const launchDetails = useSelector(state => state.launch)
  const { loading, launch, error } = launchDetails
  const { flight_number, mission_name, details, launch_year, links  } = launch
  const dispatch = useDispatch()

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
                <form action="" method="post"></form>
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
