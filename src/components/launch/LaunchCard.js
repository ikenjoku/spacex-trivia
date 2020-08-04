import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const LaunchCardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1em;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 3px solid #f5f4f0;
`

const TitleContainer = styled.div`
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
  color: #405a40;
  p {
    padding-bottom: .5em;
  }
`

const Details = styled.div`
  cursor: pointer;
`
const Payloads = styled.div`
`

const PayloadContainer = styled.div`
  margin-bottom: 1em;
`

export default function LaunchCard({ launchInfo: {
  flight_number,
  mission_name,
  launch_date_utc,
  rocket: { second_stage  }
}}) {
  const history = useHistory()
  const { location } = history

  const navigateToDetailModal = (launchId) => {
    const previousPath = location.pathname.replace('/launches', '')
    history.push({
      ...location,
      pathname: `/launches/${launchId}`,
      launchId
    })
  }

  return (
    <LaunchCardContainer>
      <TitleContainer onClick={() => navigateToDetailModal(flight_number)}>
        <p>{mission_name}</p>
        <p>{new Date(launch_date_utc).toLocaleDateString()}</p>
      </TitleContainer>
      <Details onClick={() => navigateToDetailModal(flight_number)} >
        { second_stage && (
          <Payloads>
            <h3>Payloads</h3>
            {second_stage.payloads.map((payload, i) => (
              <PayloadContainer key={`${payload.manufacturer}-${i}`}>
                <p>Payload Type: {payload.payload_type}</p>
                <p>Manufacturer: {payload.manufacturer}</p>
                <p>Nationality: {payload.nationality}</p>
                <p>Orbit: {payload.orbit}</p>
                <p>Regime: {payload.orbit_params.regime}</p>
              </PayloadContainer>))}
          </Payloads>
        )}
      </Details>
    </LaunchCardContainer>
  )
}