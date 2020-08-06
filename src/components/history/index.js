import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHistory } from '../../redux/actionCreators/historyActions'
import ListHistory from './ListHistory'
import { AppLoader } from '../common'
import { PageTitle } from './styles'

const History = () => {
  const historyState = useSelector(state => state.history)
  const { loading, history: listHistory, error } = historyState
  const dispatch = useDispatch()

  useEffect(() => {
    if(!listHistory.length){
      dispatch(fetchHistory())
    }
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