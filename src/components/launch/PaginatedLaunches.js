import React, { useEffect } from 'react'
import { usePagination } from '../../hooks'
import LaunchCard  from './LaunchCard'
import { PaginationControls, NoContent } from './styles'

const PaginatedLaunches = ({ data }) => {
  const { goNext, goBack, goToPage, currentData, currentPage, totalPages } = usePagination(data, 15)
  const showingLaunches = currentData()
  const NoPrevPage = currentPage <= 1
  const NoNextPage = currentPage >= totalPages
  useEffect(() => {
    goToPage(1)
  }, [data])

  return (
    <div>
      <div>
        {showingLaunches.map(
          (launchInfo, index) =>
            <LaunchCard
              key={index}
              launchInfo={launchInfo}
            />
        )}
      </div>
          {showingLaunches.length ?
          <PaginationControls>
            <button disabled={NoPrevPage} onClick={goBack} >Back</button>
            <div>Showing {currentPage} of {totalPages} pages</div>
            <button disabled={NoNextPage} onClick={goNext} >Next</button>
          </PaginationControls> : <NoContent>Nothing found...</NoContent>}
    </div>
  )
}

export default PaginatedLaunches