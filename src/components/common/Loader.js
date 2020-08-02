import React from 'react'
import { Loader, LoaderContainer, Circle } from './styles'

export const AppLoader = () => (
  <Loader>
    <LoaderContainer>
      <Circle />
      <Circle />
      <Circle />
    </LoaderContainer>
  </Loader>
)
