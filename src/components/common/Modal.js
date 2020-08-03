import React, { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import styled from 'styled-components'

const ModalContainer = styled.div`
  background-color: white;
  max-width: 500px;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
`

const modalRoot = document.getElementById("modal")

export const Modal = ({ children }) => {
  const elRef = useRef(null)
  if (!elRef.current) {
    elRef.current = document.createElement("div")
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current)
    return () => modalRoot.removeChild(elRef.current)
  }, [])

  return createPortal(
    <ModalContainer>
      {children}
    </ModalContainer>, elRef.current)
}
