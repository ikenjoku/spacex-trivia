import React, { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import styled from 'styled-components'

const ModalContainer = styled.div`
  @media (max-width: 600px) {
    width: 100%;
  }
  background-color: white;
  width: 600px;
  height: 80vh;
  padding: 1em;
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
