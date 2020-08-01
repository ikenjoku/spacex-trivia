import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchHistory } from '../../redux/actionCreators/historyActions'
import ListHistory from './ListHistory'
import { AppLoader } from '../common'

const PageTitle = styled.h1`
  padding-right: .5em;
  padding-left: .5em;
  max-width: 800px;
  margin: 1em auto 1em;
`

const History = () => {
  const historyState = useSelector(state => state.history)
  const { loading, history: listHistory, error } = historyState
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHistory())
  }, [])

  return (
    <div>
      { !loading && <PageTitle>History</PageTitle> }
      { loading ? <AppLoader /> : (
        <>
          { listHistory.length ? <ListHistory listHistory={listHistory} /> : 'No History'}
          { error && 'There was an error. Please try again.' }
        </>
      )}
    </div>
  )
}

export default History