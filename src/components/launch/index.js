import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchLaunches } from '../../redux/actionCreators/launchesActions'
import LaunchList from './LaunchList'
import { AppLoader } from '../common'

const PageTitle = styled.h1`
  padding-right: .5em;
  padding-left: .5em;
  max-width: 800px;
  margin: 1em auto 1em;
`

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
      { !loading && <PageTitle>Launches</PageTitle> }
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