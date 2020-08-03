import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRockets } from '../../redux/actionCreators/rocketActions'
import LaunchCard  from './LaunchCard'

import styled from 'styled-components'

const Filters = styled.div`
  @media (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  padding-right: .5em;
  padding-left: .5em;
  max-width: 800px;
  margin: 1em auto 1em;
`

const FilterInput = styled.input`
  padding: .65em;
  outline: auto;
  border-radius: 5px;
  min-width: 250px;
  font-style: italic;
  font-weight: 600;
  font-family: monospace;
  font-size: 14px;
`

const OrbitFilter = styled.select`
  @media (max-width: 500px) {
    margin-top: 1.5em;
  }
  padding: .65em;
  outline: auto;
  border-radius: 5px;
  max-width: 250px;
  font-style: italic;
  font-weight: 600;
  font-family: monospace;
  font-size: 14px;
`

const RocketFilter = ({ handleRockerFilter }) => {
  const rocketsState = useSelector(state => state.rockets)
  const { loading, rockets, error } = rocketsState
  const dispatch = useDispatch()

  const [possibleOrbits, setPossibleOrbits] = useState([])
  const [selectedOrbit, setSelectedOrbit] = useState('')

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

export default function LaunchList({ launchList }) {
  const [filterString, setFilterString] = useState('')
  const [showingLaunches, setShowingLaunches] = useState([])

  const filterLaunches = launches => {
    if (!filterString || !launches.length) {
      return launches
    }

    return launches.filter(({  mission_name, launch_year  }) => {
      const launchSchemaString = Object.values({  mission_name, launch_year  }).join('').toLowerCase()
      return launchSchemaString.includes(filterString.toLowerCase())
    })
  }

  const launchesByOrbits = (launches, orbitType) => {
    if (!orbitType || !launches.length) {
      return launches
    }
    return launches.filter(({  rocket: { second_stage: { payloads } }  }) => {
      for (let payload of payloads) {
        if (payload.orbit.toLowerCase() === orbitType) {
          return true
        }
      }
    })
  }

  useEffect(() => {
    const result = filterLaunches(launchList)
    setShowingLaunches((state) => [...result])
  }, [filterString])

  const handleRockerFilter = (selectedValue) => {
    const result = launchesByOrbits(launchList, selectedValue)
    setShowingLaunches((state) => [...result])
  }

  return (
    <>
      <Filters>
        <FilterInput
          type="text"
          name="filter-launch"
          placeholder={'Type Mission Name or Year'}
          onChange={e => setFilterString(e.target.value)}
          value={filterString}
        />
      <RocketFilter
        handleRockerFilter={handleRockerFilter}
      />
      </Filters>
      {showingLaunches && showingLaunches.map(
        (launchInfo, index) =>
          <LaunchCard
            key={index}
            launchInfo={launchInfo}
          />
      )}
    </>
  )
}
