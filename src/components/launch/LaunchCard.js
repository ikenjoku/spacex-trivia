import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Payloads,
  TitleContainer,
  PayloadContainer,
  LaunchCardDetails,
  LaunchCardContainer
} from './styles'

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
      <LaunchCardDetails onClick={() => navigateToDetailModal(flight_number)} >
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
      </LaunchCardDetails>
    </LaunchCardContainer>
  )
}