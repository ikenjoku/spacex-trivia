import React from 'react'
import HistoryCard  from './HistoryCard'

export default function ListHistory({ listHistory }) {

  return (
    <>
      {listHistory.map(
        (historyInfo, index) =>
          <HistoryCard
            key={index}
            historyInfo={historyInfo}
          />
      )}
    </>
  )
}
