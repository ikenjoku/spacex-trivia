import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouteMatch, useHistory } from 'react-router-dom'
import LaunchCard  from './LaunchCard'
import LaunchDetail from './LaunchDetail'
import RocketOrbitFilter from './RocketOrbitFilter'
import { Modal } from '../common'

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

export default function LaunchList({ launchList }) {
  const [filterString, setFilterString] = useState('')
  const [showingLaunches, setShowingLaunches] = useState([])
  const showDetailModal = useRouteMatch('/launches/*')
  const history = useHistory()
  const { location } = history
  const redirectToLaunches = () => {
    history.push({
      ...location,
      pathname: '/launches'
    })
  }


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
      <RocketOrbitFilter
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
      { showDetailModal &&
        <Modal>
            <LaunchDetail
              launchId={location.state.launchId}
              closeModal={redirectToLaunches}
            />
        </Modal> }
    </>
  )
}
