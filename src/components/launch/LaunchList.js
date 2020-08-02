import React, { useState } from 'react'
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

export default function LaunchList({ launchList }) {
  const [filterString, setFilterString] = useState('')
  const filterLaunches = launches => {
    if (!filterString || !launches.length) {
      return launches
    }

    return launches.filter(({  mission_name, launch_year  }) => {
      const launchSchemaString = Object.values({  mission_name, launch_year  }).join('').toLowerCase()
      return launchSchemaString.includes(filterString.toLowerCase())
    })
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
      </Filters>
      {filterLaunches(launchList).map(
        (launchInfo, index) =>
          <LaunchCard
            key={index}
            launchInfo={launchInfo}
          />
      )}
    </>
  )
}
