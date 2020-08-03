import React from 'react'
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

  p {
    padding-bottom: .5em;
  }
`

const Details = styled.div`
`
const Payloads = styled.div`
`

const PayloadContainer = styled.div`
  margin-bottom: 1em;
`

export default function LaunchCard({ launchInfo: {
  mission_name,
  launch_date_utc,
  rocket: { second_stage  }
}}) {

  return (
    <LaunchCardContainer>
      <TitleContainer>
        <p>{mission_name}</p>
        <p>{new Date(launch_date_utc).toLocaleDateString()}</p>
      </TitleContainer>
      <Details>
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