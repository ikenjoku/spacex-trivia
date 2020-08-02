import React from 'react'
import LaunchCard  from './LaunchCard'

export default function LaunchList({ launchList }) {

  return (
    <>
      {launchList.map(
        (launchInfo, index) =>
          <LaunchCard
            key={index}
            launchInfo={launchInfo}
          />
      )}
    </>
  )
}
