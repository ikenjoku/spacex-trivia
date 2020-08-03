import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRockets } from '../../redux/actionCreators/rocketActions'
import styled from 'styled-components'

const OrbitFilter = styled.select`
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

export default function RocketOrbitFilter({ handleRockerFilter }) {
  const rocketsState = useSelector(state => state.rockets)
  const { loading, rockets, error } = rocketsState
  const dispatch = useDispatch()
  const [possibleOrbits, setPossibleOrbits] = useState([])

  useEffect(() => {
    if (!rockets.length){
      dispatch(fetchRockets())
    }
  }, [])

  useEffect(() => {
    if (rockets.length){
      let orbits = {}
      for (let rocket of rockets){
        for (let payload of rocket.payload_weights) {
          orbits = { ...orbits, ...{ [payload.id]: payload.name } }
        }
      }
      const rocketOrbits = Object.keys(orbits).map(orbitId => ({id:orbitId, name:orbits[orbitId]}))
      setPossibleOrbits(rocketOrbits)
    }
  }, [rockets])

  return (
    <OrbitFilter
      name="rocket-filter"
      disabled={!possibleOrbits.length}
      onChange={e => handleRockerFilter(e.target.value)}
    >
      <option value="">Select a rocket</option>
      { possibleOrbits.map(({ id, name }) =>
        <option key={id} value={id}>{name}</option>) }
    </OrbitFilter>
  )
}