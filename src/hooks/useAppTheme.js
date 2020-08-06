import React, { useEffect, useState } from 'react'
import { LIGHT, DARK } from '../utils'

export const useAppTheme = () => {
  const [theme, setTheme] = useState('')
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = mode => {
    window.localStorage.setItem('spacex-theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === LIGHT ? setMode(DARK) : setMode(LIGHT)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('spacex-theme')
    localTheme ? setTheme(localTheme) : setMode(LIGHT)
    setMountedComponent(true)
  }, [])

  return [theme, toggleTheme, mountedComponent]
}
