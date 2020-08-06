import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLaunches } from '../../redux/actionCreators/launchesActions'
import LaunchList from './LaunchList'
import { AppLoader } from '../common'
import { LaunchPageTitle } from './styles'

const Launch = () => {
  const launchState = useSelector(state => state.launches)
  const { loading, launches, error } = launchState
  const dispatch = useDispatch()

  useEffect(() => {
    if (!launches.length){
      dispatch(fetchLaunches())
    }
  }, [])

  return (
    <div>
      { !loading && <LaunchPageTitle>Launches</LaunchPageTitle> }
      { loading ? <AppLoader /> : (
        <>
          { launches.length ? <LaunchList launchList={launches} /> : 'No History'}
          { error && 'There was an error. Please try again.' }
        </>
      )}
    </div>
  )
}

export default Launch