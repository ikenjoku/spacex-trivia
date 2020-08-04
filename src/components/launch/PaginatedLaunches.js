import React, { useEffect } from 'react'
import { usePagination } from '../../hooks'
import LaunchCard  from './LaunchCard'

import styled from 'styled-components'

const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px 15px;
    border-radius: 5px;
    outline: none;
    font-weight: 600;
    background-color: #595a59;
    color: white;
  }

  button:disabled {
    color: grey;
    background-color: grey;
  }
`

const NoContent = styled.div`
  font-size: 2em;
  color: #587b58;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`

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