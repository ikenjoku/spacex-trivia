import React, { useState, useEffect, lazy } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { getIdParam } from '../../utils'
import LaunchDetail from './LaunchDetail'
import { Filters, FilterInput } from './styles'
import RocketOrbitFilter from './RocketOrbitFilter'
import PaginatedLaunches from './PaginatedLaunches'
const Modal = lazy(() => import('../common/Modal'))

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

  const launchIdParam = location.launchId || getIdParam(location.pathname)

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
    setShowingLaunches(() => [...result])
  }, [filterString])

  const handleRockerFilter = (selectedValue) => {
    const result = launchesByOrbits(launchList, selectedValue)
    setShowingLaunches(() => [...result])
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
      <PaginatedLaunches data={showingLaunches} />
      { showDetailModal &&
        <Modal>
            <LaunchDetail
              launchId={launchIdParam}
              closeModal={redirectToLaunches}
            />
        </Modal> }
    </>
  )
}
