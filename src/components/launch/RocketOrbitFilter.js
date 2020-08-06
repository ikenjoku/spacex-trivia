import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRockets } from '../../redux/actionCreators/rocketActions'
import { OrbitFilter } from './styles'

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